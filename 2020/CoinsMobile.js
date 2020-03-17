// https://www.redditstatic.com/desktop2x/CoinsMobile.48fe76c9187a5fbae6e4.js
// Retrieved at 3/17/2020, 2:30:06 PM by Reddit Dataminer v1.0.0
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
				o = n.n(i),
				r = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				l = n("./src/reddit/icons/svgs/ChevronUp/index.tsx");
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
					} = this.state, i = a ? o.a.isOpen : "";
					return s.a.createElement("div", {
						className: Object(r.a)(e, o.a.collapsibleFAQ)
					}, s.a.createElement("button", {
						className: o.a.questionButton,
						type: "button",
						onClick: this.toggleOpen
					}, s.a.createElement("span", {
						className: o.a.buttonContent,
						tabIndex: -1
					}, t, a ? s.a.createElement(l.a, {
						className: o.a.collapseIcon
					}) : s.a.createElement(c.a, {
						className: o.a.collapseIcon
					}))), s.a.createElement("div", {
						className: Object(r.a)(o.a.collapsibleAnswer, i)
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
				o = n("./src/reddit/components/GildMarketingDescription/index.m.less"),
				r = n.n(o);
			t.a = e => {
				const {
					children: t,
					className: n,
					icon: a,
					isMobileStyled: o,
					title: c
				} = e;
				return s.a.createElement("div", {
					className: Object(i.a)(n, {
						[r.a.isMobileStyled]: o
					})
				}, s.a.createElement("div", {
					className: r.a.iconContainer
				}, a), s.a.createElement("div", {
					className: r.a.textContainer
				}, s.a.createElement("h3", {
					className: r.a.title
				}, c), s.a.createElement("p", {
					className: r.a.content
				}, t)))
			}
		},
		"./src/reddit/helpers/createEmojiText/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			n("./node_modules/core-js/modules/es6.regexp.to-string.js"), n("./node_modules/core-js/modules/es6.regexp.split.js");
			var a = n("./node_modules/react/index.js"),
				s = n.n(a);

			function i(e, t) {
				const n = e.toString().split(":");
				return n.length % 2 == 0 ? e : n.reduce((e, n, a) => (a % 2 == 0 ? e.push(n) : "" === n ? e.push(":") : ":".concat(n, ":") in t ? e.push(t[":".concat(n, ":")]) : e.push(":".concat(n, ":")), e), []).map((e, t) => s.a.createElement(s.a.Fragment, {
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
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return i
			}));
			var a = n("./node_modules/fbt/lib/FbtPublic.js");
			const s = (e, t, n) => {
					let a = null;
					for (const s of t) {
						const t = a ? a.coins : 1 / 0,
							i = s.coins;
						if (i >= e && i < t) {
							if (n && s.coins < 1e3) continue;
							a = s
						}
					}
					return a
				},
				i = [{
					prompt: () => a.fbt._("What are Coins?", null, {
						hk: "1wU35D"
					}),
					answer: () => a.fbt._("Coins are our virtual good, and you can use them to award exceptional posts or comments, giving them Silver, Gold, or Platinum. We'll be adding cool new ways to spend your Coins in the future.", null, {
						hk: "4Wf9n"
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
					answer: () => a.fbt._("There are now several ways to Give Awards. A Silver Award requires 100 Coins, which simply marks a post or comment with a Silver Award icon. A classic Gold Award requires 500 Coins and gives the recipient a week of Reddit Premium membership and 100 Coins. Finally, the ultra rare Platinum Award costs 1800 Coins, and gives the recipient with one month of Reddit Premium membership, which includes 700 Coins for that month.", null, {
						hk: "sPegC"
					})
				}, {
					prompt: () => a.fbt._("I bought Coins, how can I tell how many I have?", null, {
						hk: "VVChk"
					}),
					answer: () => a.fbt._("If you buy Coins you will always have a balance associated with your Reddit account. You can view your balance on the top navigation bar by your username.", null, {
						hk: "1ZHMGy"
					})
				}, {
					prompt: () => a.fbt._("Can I transfer Coins between Reddit accounts?", null, {
						hk: "1VS4Gc"
					}),
					answer: () => a.fbt._("You cannot transfer your Reddit Coin balance across usernames, sorry. You can offer a Gold Award to other users which will grant them 100 Coins.", null, {
						hk: "46q9mb"
					})
				}, {
					prompt: () => a.fbt._("Can I get Coins for free?", null, {
						hk: "2Qzs1G"
					}),
					answer: () => a.fbt._("We may give away Coins on special occasions. Stay tuned!", null, {
						hk: "30yIpE"
					})
				}, {
					prompt: () => a.fbt._("What happened to Creddits? Do those still exist?", null, {
						hk: "qTu5W"
					}),
					answer: () => a.fbt._("Yes, Creddits are simply called \"Coins\" now, and we've converted any existing balance at a generous exchange rate of one Creddit to 2000 Coins. That's double their original monetary value as a thank you for supporting us early. Use them to award exceptional posts and comments you come across. Thanks again for your contribution to the Reddit community.", null, {
						hk: "3ZI3ct"
					})
				}, {
					prompt: () => a.fbt._("I thought Gold was the name of Reddit's subscription membership?", null, {
						hk: "26YDse"
					}),
					answer: () => a.fbt._('You\'re correct, it used to also be the name of the subscription membership. However, many people confused the subscription "Reddit Gold" membership with a virtual good or coin. To make things easier to understand, we\'ve renamed the membership to "Reddit Premium", while our virtual good is called "Coins".', null, {
						hk: "FjaSU"
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
				s = n("./node_modules/react/index.js"),
				i = n.n(s),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/reddit/components/TrackingHelper/index.tsx"),
				c = n("./src/reddit/helpers/trackers/coins.ts"),
				l = n("./src/reddit/helpers/trackers/screenview.ts"),
				d = n("./src/reddit/i18n/components.tsx"),
				m = n("./src/reddit/i18n/utils.ts"),
				p = n("./src/telemetry/index.ts"),
				u = n("./src/telemetry/models/Timer.ts"),
				h = n("./src/reddit/pages/CoinsMobilePage/index.m.less"),
				b = n.n(h),
				w = n("./src/reddit/helpers/createEmojiText/index.tsx"),
				g = n("./src/reddit/models/Gold/Award.ts"),
				f = n("./src/reddit/models/Gold/Coins/index.ts"),
				C = n("./src/reddit/components/CollapsibleFAQ/index.tsx"),
				x = n("./src/reddit/components/GildMarketingDescription/index.tsx"),
				_ = n("./src/reddit/icons/fonts/Coin/index.tsx");
			class v extends i.a.Component {
				componentDidMount() {
					c.e() || c.f();
					const e = o.Ab.COINS;
					p.c.has(e) && this.props.sendEvent(Object(l.a)(u.TimerType.InApp, p.c.end(e)))
				}
				render() {
					const {
						className: e
					} = this.props;
					return i.a.createElement("div", {
						className: e
					}, i.a.createElement("div", {
						className: b.a.wrapper
					}, this.renderGildBreakdown(), this.renderFAQSection()))
				}
				renderGildBreakdown() {
					return i.a.createElement("div", {
						className: b.a.detailGridSection
					}, i.a.createElement("p", {
						className: b.a.detailDesription
					}, i.a.createElement(d.c, null, "Coins are used to award exemplary posts or comments and help support Reddit.")), i.a.createElement("div", {
						className: b.a.gridContainer
					}, i.a.createElement(x.a, {
						className: b.a.gridItem,
						icon: i.a.createElement("img", {
							src: "".concat(a.a.assetPath, "/img/gold/badges/award-silver-large.png")
						}),
						isMobileStyled: !0,
						title: Object(m.c)("Silver Award")
					}, Object(w.a)(Object(m.c)("Shows a Silver Award on the post or comment and ... that’s it. You’ll need :coin_price: Coins."), {
						":coin_price:": i.a.createElement("span", {
							className: b.a.nowrap
						}, i.a.createElement(_.a, null), g.l.coinPrice)
					})), i.a.createElement(x.a, {
						className: b.a.gridItem,
						icon: i.a.createElement("img", {
							src: "".concat(a.a.assetPath, "/img/gold/badges/award-gold-large.png")
						}),
						isMobileStyled: !0,
						title: Object(m.c)("Gold Award")
					}, Object(w.a)(Object(m.c)("Gives the recipient a week of Reddit Premium (including :coin_benefit: Coins) and shows a Gold Award on the post or comment. You’ll need :coin_price: Coins."), {
						":coin_benefit:": i.a.createElement("span", {
							className: b.a.nowrap
						}, i.a.createElement(_.a, null), "100"),
						":coin_price:": i.a.createElement("span", {
							className: b.a.nowrap
						}, i.a.createElement(_.a, null), g.j.coinPrice)
					})), i.a.createElement(x.a, {
						className: b.a.gridItem,
						icon: i.a.createElement("img", {
							src: "".concat(a.a.assetPath, "/img/gold/badges/award-platinum-large.png")
						}),
						isMobileStyled: !0,
						title: Object(m.c)("Platinum Award")
					}, Object(w.a)(Object(m.c)("Gives the recipient a month of Reddit Premium, which includes :coin_benefit: Coins for that month, and shows a Platinum Award on the post or comment. You’ll need :coin_price: Coins."), {
						":coin_benefit:": i.a.createElement("span", {
							className: b.a.nowrap
						}, i.a.createElement(_.a, null), "700"),
						":coin_price:": i.a.createElement("span", {
							className: b.a.nowrap
						}, i.a.createElement(_.a, null), g.k.coinPrice)
					}))))
				}
				renderFAQSection() {
					return i.a.createElement("div", {
						className: b.a.faqsSection
					}, i.a.createElement("h2", {
						className: b.a.faqsTitle
					}, i.a.createElement(d.c, null, "Coins FAQ")), i.a.createElement("div", {
						className: b.a.faqs
					}, f.a.map((e, t) => i.a.createElement(C.a, {
						defaultClosed: !0,
						question: e.prompt(),
						key: t
					}, e.answer()))))
				}
				componentWillUnmount() {
					c.d()
				}
			}
			t.default = Object(r.c)(v)
		}
	}
]);
//# sourceMappingURL=CoinsMobile.48fe76c9187a5fbae6e4.js.map