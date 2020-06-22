// https://www.redditstatic.com/desktop2x/EconomicsSubredditPremiumSidebarCards~SubredditPremiumBadgeHovercardTooltip.03f528e127e910277576.js
// Retrieved at 6/22/2020, 2:50:07 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["EconomicsSubredditPremiumSidebarCards~SubredditPremiumBadgeHovercardTooltip"], {
		"./src/reddit/components/Economics/SubredditPremium/SidebarCards/MembershipCard/PrePurchase/SubscriberBenefits/Badges/index.m.less": function(e, t, i) {
			e.exports = {
				badgePreview: "iHgTssgiyXOzrR4gf5B3U",
				background: "_2xYSXHDQnghiy2GNEFAPFu",
				check: "_22Z9uN-IvHaTp6USqcM_jo",
				container: "P12mq84uFfuH2KXEfMeR5",
				content: "_3aWIE0KiovmqTpbPkjPtwb",
				explanation: "_1c0pMqE8eosjFrQF7TH2RQ",
				rows: "_3angrEFRx8dotcgLSeeW8G",
				row: "_2cyN6pW1y-GxOiMIrnLAMp",
				animateRow: "_2Y-UeLdd5w01w0dNSzfQ_j",
				selection: "_3u2ui0EFGUMzQ4sp5UDL2t",
				title: "mU_g_sx9q_eDtVlJGYxm-",
				username: "Wn_hZZCRmaPUoiOnUYCMI"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/SidebarCards/MembershipCard/PrePurchase/SubscriberBenefits/Emojis/index.m.less": function(e, t, i) {
			e.exports = {
				background: "_1jIalZDRbSrivjxJGUEUz5",
				container: "qa348cr0hy45FoDJcbNpU",
				content: "_3F4MQT8DhZnlZdukDjTF8R",
				drawer: "_2c4rmfyXdC90cXD7tu5pam",
				emojisContainer: "_3RXctyTdCd4UoLrVZGdbSo",
				emojisTitle: "_2DK6aKnJxZcH_qsy1SFiyN",
				emojis: "_1lshagpcnVvFEiV4HdvkAv",
				emoji: "_2NuSs4NMhHbCUiCtDEDcMU",
				example: "_38AlmvDvQ-QTZpGXVbBCuW",
				explanation: "_2lZ_1R5WMYgpfu-bINYFQa",
				overflow: "_2rIEQfirq9yyIqx4WfnSQI",
				title: "c5oGzlimw-np80U3WGVEK"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/SidebarCards/MembershipCard/PrePurchase/SubscriberBenefits/Gifs/index.m.less": function(e, t, i) {
			e.exports = {
				background: "_2hc7sa_lfKoqSqOWx-hXqA",
				container: "yinH5vFGetGkZNpQ-OAx_",
				content: "_3WKBNoWpNqiOP45cLNS5JD",
				drawer: "_30RKyPpFVXVRthw0A5gxQV",
				example: "_3vQpPpC99oo04IqE6s-Rox",
				explanation: "_3P6ofGcsEuWGLcft5TyN3r",
				imagesContainer: "_3pOXb-J3VLbj-wVyihBPKk",
				images: "_2LOj_LEpO5_iCgPHSrCoJq",
				image: "_2ekdbqTrmyuQOBNIf1iDG6",
				imageCol: "_2CiGDmaab7d5qe_INqssQ9",
				overflow: "_1EMpIuS7ryuiZydXIgXwpC",
				title: "KGn3VoZ0vCi_xW-pYgA-D"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/SidebarCards/MembershipCard/PrePurchase/SubscriberBenefits/index.m.less": function(e, t, i) {
			e.exports = {
				benefits: "_2sX8y0yMiZaCrlPaX9DwmY",
				crown: "_3KyPIyW6lPDHYkM0oa3vEk",
				indicators: "R3HqL7N1U6nD6Qv-tC1lO",
				indicator: "_3WFF566WDWEz-i22qBNmmf",
				indicatorSelected: "_1_pc03SFie7M0ad9TPTpT_",
				slide: "_13eyljtfoaT6F8z_utN2zt",
				title: "Fq_OfxL8jLCsLuL7E_ZRr"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/SidebarCards/MembershipCard/PrePurchase/SubscriberBenefits/index.tsx": function(e, t, i) {
			"use strict";
			var r = i("./node_modules/react/index.js"),
				a = i.n(r),
				d = i("./node_modules/react-motion/lib/react-motion.js"),
				s = i("./node_modules/react-redux/es/index.js"),
				c = i("./node_modules/reselect/es/index.js"),
				n = i("./src/lib/classNames/index.ts"),
				o = i("./src/reddit/pages/meta/MembershipPaywallPage/getSrc.ts"),
				m = i("./src/reddit/selectors/economics.ts"),
				l = (i("./node_modules/core-js/modules/es6.regexp.replace.js"), i("./node_modules/fbt/lib/FbtPublic.js")),
				u = i("./src/config.ts"),
				b = i("./src/reddit/icons/svgs/Checkmark/index.tsx");
			const g = {
					height: 120,
					width: 3464,
					badges: [{
						color: "rgb(41, 37, 132)",
						url: "https://meta.redditmedia.com/img/fortnitebr/badges/20_collision_40@2x.png"
					}, {
						color: "rgb(241, 116, 62)",
						url: "https://meta.redditmedia.com/img/fortnitebr/badges/4_reddit_wrap_40@2x.png"
					}, {
						color: "rgb(209, 90, 72)",
						url: "https://meta.redditmedia.com/img/fortnitebr/badges/11_8_from_9_dmg_40@2x.png"
					}, {
						color: "rgb(71, 83, 118)",
						url: "https://meta.redditmedia.com/img/fortnitebr/badges/15_skull_trooper_40@2x.png"
					}, {
						color: "rgb(180, 124, 56)",
						url: "https://meta.redditmedia.com/img/fortnitebr/badges/7_battle_star_gold_40@2x.png"
					}, {
						color: "rgb(86, 132, 215)",
						url: "https://meta.redditmedia.com/img/fortnitebr/badges/28_meteor_40@2x.png"
					}, {
						color: "rgb(115, 115, 153)",
						url: "https://meta.redditmedia.com/img/fortnitebr/badges/10_shopping_cart_40@2x.png"
					}, {
						color: "rgb(108, 82, 89)",
						url: "https://meta.redditmedia.com/img/fortnitebr/badges/16_OG_40@2x.png"
					}, {
						color: "rgb(88, 72, 88)",
						url: "https://meta.redditmedia.com/img/fortnitebr/badges/13_scorecard_40@2x.png"
					}, {
						color: "rgb(115, 75, 220)",
						url: "https://meta.redditmedia.com/img/fortnitebr/badges/23_kevins_autograph_40@2x.png"
					}, {
						color: "rgb(146, 80, 25)",
						url: "https://meta.redditmedia.com/img/fortnitebr/badges/1_wood_40@2x.png"
					}, {
						color: "rgb(44, 96, 184)",
						url: "https://meta.redditmedia.com/img/fortnitebr/badges/9_battle_star_diamond_40@2x.png"
					}, {
						color: "rgb(110, 108, 148)",
						url: "https://meta.redditmedia.com/img/fortnitebr/badges/21_rocket_40@2x.png"
					}, {
						color: "rgb(98, 167, 54)",
						url: "https://meta.redditmedia.com/img/fortnitebr/badges/22_t_pose_40@2x.png"
					}]
				},
				p = {
					height: 64,
					width: 1664,
					badges: [{
						color: "#3B77A3",
						url: "https://meta.redditmedia.com/public/cryptocurrencytest/badges/original/rocket_60x60.png"
					}, {
						url: "https://meta.redditmedia.com/public/cryptocurrencytest/badges/membership/9_months_60x60.png"
					}, {
						color: "#256F77",
						url: "https://meta.redditmedia.com/public/cryptocurrencytest/badges/crypto/pickaxe_60x60.png"
					}, {
						url: "https://meta.redditmedia.com/public/cryptocurrencytest/badges/membership/member_80x80.png"
					}, {
						color: "#307EB9",
						url: "https://meta.redditmedia.com/public/cryptocurrencytest/badges/membership/3_month_60x60.png"
					}, {
						color: "#458545",
						url: "https://meta.redditmedia.com/public/cryptocurrencytest/badges/crypto/magic_ball_60x60.png"
					}, {
						color: "#AA183F",
						url: "https://meta.redditmedia.com/public/cryptocurrencytest/badges/crypto/pink_wojak_60x60.png"
					}, {
						color: "#2B6670",
						url: "https://meta.redditmedia.com/public/cryptocurrencytest/badges/crypto/rollercoaster_60x60.png"
					}, {
						url: "https://meta.redditmedia.com/public/cryptocurrencytest/badges/membership/6_months_60x60.png"
					}, {
						url: "https://meta.redditmedia.com/public/cryptocurrencytest/badges/membership/1_year_60x60.png"
					}, {
						color: "#B96125",
						url: "https://meta.redditmedia.com/public/cryptocurrencytest/badges/crypto/printer_60x60.png"
					}, {
						color: "#561313",
						url: "https://meta.redditmedia.com/public/cryptocurrencytest/badges/crypto/bear_60x60.png"
					}, {
						url: "https://meta.redditmedia.com/public/cryptocurrencytest/badges/membership/1_month_60x60.png"
					}]
				},
				h = {
					height: 64,
					width: 1664,
					badges: [{
						color: "#714114",
						url: "https://meta.redditmedia.com/public/daonuts/badges/original/bear_60x60.png"
					}, {
						color: "#2A4168",
						url: "https://meta.redditmedia.com/public/daonuts/badges/original/beliver_60x60.png"
					}, {
						color: "#615127",
						url: "https://meta.redditmedia.com/public/daonuts/badges/original/buidl_60x60.png"
					}, {
						color: "#7E2826",
						url: "https://meta.redditmedia.com/public/daonuts/badges/original/bull_60x60.png"
					}, {
						color: "#679504",
						url: "https://meta.redditmedia.com/public/daonuts/badges/original/cuecumber_60x60.png"
					}, {
						color: "#458545",
						url: "https://meta.redditmedia.com/public/daonuts/badges/original/trader_120x120.png"
					}, {
						color: "#70561A",
						url: "https://meta.redditmedia.com/public/daonuts/badges/original/lambo_60x60.png"
					}, {
						color: "#2D4877",
						url: "https://meta.redditmedia.com/public/daonuts/badges/original/miner_60x60.png"
					}, {
						color: "#2B6071",
						url: "https://meta.redditmedia.com/public/daonuts/badges/original/shill_shield_60x60.png"
					}, {
						color: "#44761B",
						url: "https://meta.redditmedia.com/public/daonuts/badges/original/snek_60x60.png"
					}, {
						color: "#416B9A",
						url: "https://meta.redditmedia.com/public/daonuts/badges/original/ufo_60x60.png"
					}, {
						color: "#444D8A",
						url: "https://meta.redditmedia.com/public/daonuts/badges/original/whale_60x60.png"
					}, {
						color: "#44761B",
						url: "https://meta.redditmedia.com/public/daonuts/badges/original/snek_60x60.png"
					}]
				},
				f = {
					height: 64,
					width: 1664,
					badges: [{
						color: "#7D60B6",
						url: "https://meta.redditmedia.com/public/stellartest/badges/original/fire_60x60.png"
					}, {
						color: "#6E30C8",
						url: "https://meta.redditmedia.com/public/stellartest/badges/original/bear_60x60.png"
					}, {
						color: "#5D25AC",
						url: "https://meta.redditmedia.com/public/stellartest/badges/original/rocket_60x60.png"
					}, {
						color: "#982A09",
						url: "https://meta.redditmedia.com/public/stellartest/badges/original/bull_60x60.png"
					}, {
						color: "#3B3B5E",
						url: "https://meta.redditmedia.com/public/stellartest/badges/original/moon_60x60.png"
					}, {
						color: "#1BA2C1",
						url: "https://meta.redditmedia.com/public/stellartest/badges/original/3d_60x60.png"
					}, {
						color: "#380982",
						url: "https://meta.redditmedia.com/public/stellartest/badges/original/anon_60x60.png"
					}, {
						color: "#480C8E",
						url: "https://meta.redditmedia.com/public/stellartest/badges/original/balance_60x60.png"
					}, {
						color: "#306EB7",
						url: "https://meta.redditmedia.com/public/stellartest/badges/original/lumenaut_60x60.png"
					}, {
						color: "#B23C19",
						url: "https://meta.redditmedia.com/public/stellartest/badges/original/rekt_60x60.png"
					}, {
						color: "#982A09",
						url: "https://meta.redditmedia.com/public/stellartest/badges/original/bull_60x60.png"
					}, {
						color: "#6E30C8",
						url: "https://meta.redditmedia.com/public/stellartest/badges/original/bear_60x60.png"
					}, {
						color: "#1BA2C1",
						url: "https://meta.redditmedia.com/public/stellartest/badges/original/3d_60x60.png"
					}]
				},
				_ = {
					t5_2wlj3: p,
					t5_2l3wpx: p,
					t5_vsb5g: h,
					t5_37jgj: h,
					t5_2t9ha: f,
					t5_2a3y8x: f
				};
			var y = i("./src/reddit/components/Economics/SubredditPremium/SidebarCards/MembershipCard/PrePurchase/SubscriberBenefits/Badges/index.m.less"),
				w = i.n(y);
			const x = (e, t) => "".concat(u.a.assetPath, "/img/memberships/paywall/").concat(e.name.toLowerCase(), "/").concat(t),
				E = 500,
				v = 30,
				N = 132;
			class k extends a.a.Component {
				constructor(e) {
					super(e), this.badgesBackground = function(e) {
						const t = _[e] || g,
							i = t.width / t.badges.length;
						return Object.assign({}, t, {
							badges: t.badges.map((function(e, t, r) {
								return Object.assign({}, e, {
									interval: [i * t, i * (t + 1)]
								})
							}))
						})
					}(e.subredditId), this.state = {
						currentlySelected: this.badgesBackground.badges[0]
					}, this.intervalRef = null, this.rowRef = null
				}
				componentDidMount() {
					const e = this.badgesBackground.height / v;
					this.intervalRef = window.setInterval(() => {
						if (!this.rowRef) return;
						const t = this.badgesBackground.width,
							i = window.getComputedStyle(this.rowRef).backgroundPositionX;
						if (!i) return;
						const r = ((N - parseFloat(i.replace("px", ""))) * e + t) % t;
						this.badgesBackground.badges.forEach(e => {
							r > e.interval[0] && r <= e.interval[1] && this.setState({
								currentlySelected: e
							})
						})
					}, E)
				}
				componentWillUnmount() {
					this.intervalRef && clearInterval(this.intervalRef)
				}
				render() {
					const {
						className: e,
						subreddit: t,
						username: i
					} = this.props, {
						currentlySelected: r
					} = this.state;
					return t ? a.a.createElement("article", {
						className: Object(n.a)(w.a.container, e)
					}, a.a.createElement("div", {
						className: w.a.background
					}), a.a.createElement("div", {
						className: w.a.content
					}, a.a.createElement("header", {
						className: w.a.title
					}, l.fbt._("badges", null, {
						hk: "4bW4l"
					})), a.a.createElement("div", {
						className: w.a.rows
					}, a.a.createElement("div", {
						className: w.a.row,
						style: {
							animationDuration: "80s",
							backgroundImage: "url(".concat(x(t, "badges-line-1-v2.png"), ")")
						}
					}), a.a.createElement("div", {
						className: w.a.row,
						ref: e => this.rowRef = e,
						style: {
							animationDirection: "reverse",
							animationDuration: "120s",
							backgroundImage: "url(".concat(x(t, "badges-line-2-v2.png"), ")")
						}
					}), a.a.createElement("div", {
						className: w.a.row,
						style: {
							animationDuration: "160s",
							backgroundImage: "url(".concat(x(t, "badges-line-3-v2.png"), ")")
						}
					})), a.a.createElement("div", {
						className: w.a.username,
						style: {
							color: r.color
						}
					}, a.a.createElement("img", {
						className: w.a.badgePreview,
						src: r.url
					}), i), a.a.createElement("footer", {
						className: w.a.explanation
					}, l.fbt._("Style your username with a badge and color", null, {
						hk: "2bRpdH"
					})), a.a.createElement("div", {
						className: w.a.selection
					}, a.a.createElement(b.a, {
						className: w.a.check
					})))) : null
				}
			}
			const S = Object(c.c)({
				subreddit: (e, t) => {
					let {
						subredditId: i
					} = t;
					return e.subreddits.models[i]
				},
				username: e => "u/".concat(e.user.account && e.user.account.displayText || "username")
			});
			var P = Object(s.b)(S)(k),
				I = i("./src/reddit/components/Economics/SubredditPremium/SidebarCards/MembershipCard/PrePurchase/SubscriberBenefits/Emojis/index.m.less"),
				C = i.n(I);
			const j = ["blink", "bush", "chug", "clappy", "confused", "cuddle", "dab", "dance", "default", "oof", "respect", "soon", "unfortunately", "wow"].map(e => "https://meta.redditmedia.com/img/fortnitebr/emotes/".concat(e, "-2x.gif")).concat("https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/premium_emotes/emo_pack_1/mech_destroy.gif");
			const B = Object(c.c)({
				subreddit: (e, t) => {
					let {
						subredditId: i
					} = t;
					return e.subreddits.models[i]
				}
			});
			var O = Object(s.b)(B)((function(e) {
					const {
						className: t,
						subreddit: i
					} = e;
					return i ? a.a.createElement("article", {
						className: Object(n.a)(C.a.container, t)
					}, a.a.createElement("div", {
						className: C.a.background
					}), a.a.createElement("div", {
						className: C.a.content
					}, a.a.createElement("header", {
						className: C.a.title
					}, l.fbt._("emotes", null, {
						hk: "1VLDec"
					})), a.a.createElement("div", {
						className: C.a.example
					}, a.a.createElement("img", {
						className: C.a.drawer,
						src: "".concat(u.a.assetPath, "/img/memberships/emoji-drawer.png")
					}), a.a.createElement("div", {
						className: C.a.emojisTitle
					}, l.fbt._("Add r/{communityName} emote", [l.fbt._param("communityName", i.name)], {
						hk: "1pL2rY"
					})), a.a.createElement("div", {
						className: C.a.emojisContainer
					}, a.a.createElement("div", {
						className: C.a.emojis
					}, j.map(e => a.a.createElement("img", {
						className: C.a.emoji,
						key: e,
						src: e
					}))), a.a.createElement("div", {
						className: C.a.overflow
					}))), a.a.createElement("footer", {
						className: C.a.explanation
					}, l.fbt._("Get access to premium animated emotes", null, {
						hk: "1jTE2m"
					})))) : null
				})),
				z = i("./src/reddit/components/Economics/SubredditPremium/SidebarCards/MembershipCard/PrePurchase/SubscriberBenefits/Gifs/index.m.less"),
				R = i.n(z);
			const A = (() => {
				const e = {};
				return async t => {
					if (e[t]) return e[t];
					const i = {
						data: [{
							type: "gif",
							id: "LYtOpHpS9dNFU2W55R",
							rating: "g",
							images: {
								fixed_width: {
									url: "https://media1.giphy.com/media/LYtOpHpS9dNFU2W55R/200w.gif?cid=849e041abbc36d4633243e2e8f4733bcc0ab9bfde99721ba&rid=200w.gif",
									width: "200",
									height: "112",
									size: "561605"
								},
								downsized: {
									url: "https://media1.giphy.com/media/LYtOpHpS9dNFU2W55R/giphy-downsized.gif?cid=849e041abbc36d4633243e2e8f4733bcc0ab9bfde99721ba&rid=giphy-downsized.gif",
									width: "362",
									height: "203",
									size: "1497339"
								},
								fixed_height: {
									url: "https://media1.giphy.com/media/LYtOpHpS9dNFU2W55R/200.gif?cid=849e041abbc36d4633243e2e8f4733bcc0ab9bfde99721ba&rid=200.gif",
									width: "356",
									height: "200",
									size: "1745959"
								}
							},
							title: "battle royale dab GIF by PlayStation"
						}, {
							type: "gif",
							id: "1rPWlleU4TwMW16RBI",
							rating: "g",
							images: {
								fixed_width: {
									url: "https://media0.giphy.com/media/1rPWlleU4TwMW16RBI/200w.gif?cid=849e041abbc36d4633243e2e8f4733bcc0ab9bfde99721ba&rid=200w.gif",
									width: "200",
									height: "113",
									size: "626489"
								},
								downsized: {
									url: "https://media0.giphy.com/media/1rPWlleU4TwMW16RBI/giphy.gif?cid=849e041abbc36d4633243e2e8f4733bcc0ab9bfde99721ba&rid=giphy.gif",
									width: "166",
									height: "94",
									size: "445107"
								},
								fixed_height: {
									url: "https://media0.giphy.com/media/1rPWlleU4TwMW16RBI/200.gif?cid=849e041abbc36d4633243e2e8f4733bcc0ab9bfde99721ba&rid=200.gif",
									width: "353",
									height: "200",
									size: "1178715"
								}
							},
							title: "Animated GIF"
						}, {
							type: "gif",
							id: "6bdgwW6B0ooer3r8AZ",
							rating: "g",
							images: {
								fixed_width: {
									url: "https://media2.giphy.com/media/6bdgwW6B0ooer3r8AZ/200w.gif?cid=849e041abbc36d4633243e2e8f4733bcc0ab9bfde99721ba&rid=200w.gif",
									width: "200",
									height: "127",
									size: "1631580"
								},
								downsized: {
									url: "https://media2.giphy.com/media/6bdgwW6B0ooer3r8AZ/giphy-downsized.gif?cid=849e041abbc36d4633243e2e8f4733bcc0ab9bfde99721ba&rid=giphy-downsized.gif",
									width: "517",
									height: "328",
									size: "1411973"
								},
								fixed_height: {
									url: "https://media2.giphy.com/media/6bdgwW6B0ooer3r8AZ/200.gif?cid=849e041abbc36d4633243e2e8f4733bcc0ab9bfde99721ba&rid=200.gif",
									width: "315",
									height: "200",
									size: "3772671"
								}
							},
							title: "suspicious kenan thompson GIF"
						}, {
							type: "gif",
							id: "2A8tnatJlmXfhjY1DW",
							rating: "g",
							images: {
								fixed_width: {
									url: "https://media3.giphy.com/media/2A8tnatJlmXfhjY1DW/200w.gif?cid=849e041abbc36d4633243e2e8f4733bcc0ab9bfde99721ba&rid=200w.gif",
									width: "200",
									height: "356",
									size: "2826317"
								},
								downsized: {
									url: "https://media3.giphy.com/media/2A8tnatJlmXfhjY1DW/giphy-downsized.gif?cid=849e041abbc36d4633243e2e8f4733bcc0ab9bfde99721ba&rid=giphy-downsized.gif",
									width: "270",
									height: "480",
									size: "1480957"
								},
								fixed_height: {
									url: "https://media3.giphy.com/media/2A8tnatJlmXfhjY1DW/200.gif?cid=849e041abbc36d4633243e2e8f4733bcc0ab9bfde99721ba&rid=200.gif",
									width: "113",
									height: "200",
									size: "1158938"
								}
							},
							title: "dance dancing GIF by FC Bayern Munich"
						}, {
							type: "gif",
							id: "gLz0XVWX1T2kE",
							rating: "g",
							images: {
								fixed_width: {
									url: "https://media2.giphy.com/media/gLz0XVWX1T2kE/200w.gif?cid=849e041abbc36d4633243e2e8f4733bcc0ab9bfde99721ba&rid=200w.gif",
									width: "200",
									height: "113",
									size: "575239"
								},
								downsized: {
									url: "https://media2.giphy.com/media/gLz0XVWX1T2kE/giphy-tumblr.gif?cid=849e041abbc36d4633243e2e8f4733bcc0ab9bfde99721ba&rid=giphy-tumblr.gif",
									width: "250",
									height: "140",
									size: "840134"
								},
								fixed_height: {
									url: "https://media2.giphy.com/media/gLz0XVWX1T2kE/200.gif?cid=849e041abbc36d4633243e2e8f4733bcc0ab9bfde99721ba&rid=200.gif",
									width: "356",
									height: "200",
									size: "1585466"
								}
							},
							title: "you mad GIF"
						}, {
							type: "gif",
							id: "XZ1BckBZDh4w0Ey3A0",
							rating: "g",
							images: {
								fixed_width: {
									url: "https://media0.giphy.com/media/XZ1BckBZDh4w0Ey3A0/200w.gif?cid=849e041abbc36d4633243e2e8f4733bcc0ab9bfde99721ba&rid=200w.gif",
									width: "200",
									height: "113",
									size: "429842"
								},
								downsized: {
									url: "https://media0.giphy.com/media/XZ1BckBZDh4w0Ey3A0/giphy-downsized.gif?cid=849e041abbc36d4633243e2e8f4733bcc0ab9bfde99721ba&rid=giphy-downsized.gif",
									width: "480",
									height: "270",
									size: "1592826"
								},
								fixed_height: {
									url: "https://media0.giphy.com/media/XZ1BckBZDh4w0Ey3A0/200.gif?cid=849e041abbc36d4633243e2e8f4733bcc0ab9bfde99721ba&rid=200.gif",
									width: "356",
									height: "200",
									size: "1141385"
								}
							},
							title: "braxton family values GIF by WE tv"
						}, {
							type: "gif",
							id: "bwUp1oSrOKIGPy28Zi",
							slug: "redbull-what-okay-bwUp1oSrOKIGPy28Zi",
							rating: "g",
							images: {
								fixed_width: {
									url: "https://media1.giphy.com/media/bwUp1oSrOKIGPy28Zi/200w.gif?cid=849e041abbc36d4633243e2e8f4733bcc0ab9bfde99721ba&rid=200w.gif",
									width: "200",
									height: "200",
									size: "385281"
								},
								downsized: {
									url: "https://media1.giphy.com/media/bwUp1oSrOKIGPy28Zi/giphy-downsized.gif?cid=849e041abbc36d4633243e2e8f4733bcc0ab9bfde99721ba&rid=giphy-downsized.gif",
									width: "480",
									height: "480",
									size: "1195081"
								},
								fixed_height: {
									url: "https://media1.giphy.com/media/bwUp1oSrOKIGPy28Zi/200.gif?cid=849e041abbc36d4633243e2e8f4733bcc0ab9bfde99721ba&rid=200.gif",
									width: "200",
									height: "200",
									size: "385281"
								}
							},
							title: "you good what GIF by Red Bull"
						}],
						pagination: {
							total_count: 6007,
							count: 25,
							offset: 0
						},
						meta: {
							status: 200,
							msg: "OK",
							response_id: "bbc36d4633243e2e8f4733bcc0ab9bfde99721ba"
						}
					};
					return e[t] = i, i
				}
			})();
			class D extends a.a.Component {
				constructor() {
					super(...arguments), this.state = {
						imagesCol1: [],
						imagesCol2: []
					}
				}
				async componentDidMount() {
					const e = this.props.subreddit && this.props.subreddit.title || "reddit",
						t = await A(e),
						i = [],
						r = [];
					t.data.forEach((e, t) => {
						const a = e.images.fixed_width.url;
						t % 2 == 0 ? i.push(a) : r.push(a)
					}), this.setState({
						imagesCol1: i,
						imagesCol2: r
					})
				}
				render() {
					const {
						className: e,
						subreddit: t
					} = this.props;
					return t ? a.a.createElement("article", {
						className: Object(n.a)(R.a.container, e)
					}, a.a.createElement("div", {
						className: R.a.background
					}), a.a.createElement("div", {
						className: R.a.content
					}, a.a.createElement("header", {
						className: R.a.title
					}, l.fbt._("gifs in comments", null, {
						hk: "41wG7A"
					})), a.a.createElement("div", {
						className: R.a.example
					}, a.a.createElement("img", {
						className: R.a.drawer,
						src: "".concat(u.a.assetPath, "/img/memberships/gif-drawer.png")
					}), a.a.createElement("div", {
						className: R.a.imagesContainer
					}, a.a.createElement("div", {
						className: R.a.images
					}, a.a.createElement("div", {
						className: R.a.imageCol
					}, this.state.imagesCol1.map(e => a.a.createElement("img", {
						className: R.a.image,
						key: e,
						src: e
					}))), a.a.createElement("div", {
						className: R.a.imageCol
					}, this.state.imagesCol2.map(e => a.a.createElement("img", {
						className: R.a.image,
						key: e,
						src: e
					})))), a.a.createElement("div", {
						className: R.a.overflow
					}))), a.a.createElement("footer", {
						className: R.a.explanation
					}, l.fbt._("Add GIFs to your comments", null, {
						hk: "302rEX"
					})))) : null
				}
			}
			const W = Object(c.c)({
				subreddit: (e, t) => {
					let {
						subredditId: i
					} = t;
					return e.subreddits.models[i]
				}
			});
			var T = Object(s.b)(W)(D),
				F = i("./src/reddit/components/Economics/SubredditPremium/SidebarCards/MembershipCard/PrePurchase/SubscriberBenefits/index.m.less"),
				G = i.n(F);
			const L = 1e4,
				M = 110;
			class U extends a.a.Component {
				constructor(e) {
					super(e), this.gotoNextSlide = () => {
						this.timeoutRef && clearInterval(this.timeoutRef), this.setState({
							currentSlideIdx: (this.state.currentSlideIdx + 1) % this.slides.length
						}), this.timeoutRef = window.setTimeout(this.gotoNextSlide, L)
					}, this.timeoutRef = null, this.state = {
						currentSlideIdx: 0
					}, this.slides = function(e) {
						switch (e) {
							case "t5_3oeyf":
							case "t5_socj8":
								return [P, O, T];
							default:
								return [P, T]
						}
					}(e.subredditId)
				}
				componentDidMount() {
					this.timeoutRef = window.setTimeout(this.gotoNextSlide, L)
				}
				componentWillUnmount() {
					this.timeoutRef && clearInterval(this.timeoutRef)
				}
				render() {
					const {
						className: e,
						hideSlideshow: t,
						meta: i,
						subredditId: s,
						subreddit: c
					} = this.props, {
						currentSlideIdx: m
					} = this.state;
					return c ? a.a.createElement("div", {
						className: e
					}, a.a.createElement("header", {
						className: G.a.title
					}, a.a.createElement("img", {
						className: G.a.crown,
						src: Object(o.a)(c, "Crown.gif")
					}), i.membershipAlt), !t && a.a.createElement(a.a.Fragment, null, a.a.createElement("article", {
						className: G.a.benefits
					}, a.a.createElement(d.TransitionMotion, {
						defaultStyles: [{
							key: "slide-0",
							data: {
								Component: this.slides[0],
								index: 0
							},
							style: {
								left: 0
							}
						}],
						styles: [{
							key: "slide-".concat(m),
							data: {
								Component: this.slides[m],
								index: m
							},
							style: {
								left: Object(d.spring)(0)
							}
						}],
						willEnter: () => ({
							left: M
						}),
						willLeave: () => ({
							left: Object(d.spring)(-M)
						})
					}, e => a.a.createElement(r.Fragment, null, e.map(e => a.a.createElement("div", {
						className: G.a.slide,
						key: e.key,
						style: {
							left: "".concat(e.style.left, "%")
						},
						onClick: this.gotoNextSlide
					}, a.a.createElement(e.data.Component, {
						subredditId: s
					})))))), a.a.createElement("footer", {
						className: G.a.indicators
					}, this.slides.map((e, t) => a.a.createElement("div", {
						className: Object(n.a)(G.a.indicator, {
							[G.a.indicatorSelected]: t === m
						}),
						key: t,
						onClick: () => this.setState({
							currentSlideIdx: t
						})
					}))))) : null
				}
			}
			const X = Object(c.c)({
				meta: (e, t) => {
					let {
						subredditId: i
					} = t;
					return Object(m.x)(e, i)
				},
				subreddit: (e, t) => {
					let {
						subredditId: i
					} = t;
					return e.subreddits.models[i]
				},
				username: e => {
					const t = e.user.account;
					return t && t.username || "username"
				}
			});
			t.a = Object(s.b)(X)(U)
		},
		"./src/reddit/endpoints/governance/crypto.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return r
			})), i.d(t, "c", (function() {
				return s
			})), i.d(t, "d", (function() {
				return c
			})), i.d(t, "e", (function() {
				return n
			})), i.d(t, "b", (function() {
				return o
			}));
			var r, a = i("./src/config.ts"),
				d = i("./src/reddit/endpoints/governance/requester.ts");

			function s(e) {
				switch (e) {
					case r.Ethereum:
					case r.EthTraderEthereum:
						return "Ethereum Main Network";
					case r.Rinkeby:
					case r.EthTraderRinkeby:
						return "Rinkeby Test Network"
				}
				return e + " Network"
			}
			async function c(e, t, i) {
				return Object(d.a)(e, {
					method: "post",
					endpoint: "".concat(a.a.metaUrl, "/crypto/").concat(t, "/challenges"),
					data: {
						challengeType: "registration-challenge-EIP712",
						address: i
					}
				})
			}
			async function n(e, t, i) {
				return await Object(d.a)(e, {
					method: "post",
					endpoint: "".concat(a.a.metaUrl, "/crypto/").concat(t, "/registrations"),
					data: i
				})
			}
			async function o(e, t, i) {
				return await Object(d.a)(e, {
					method: "delete",
					endpoint: "".concat(a.a.metaUrl, "/crypto/").concat(t, "/registrations/").concat(i)
				})
			}! function(e) {
				e.Ethereum = "ethereum:1", e.Rinkeby = "ethereum:4", e.EthTraderEthereum = "ethereum:1:ethtrader", e.EthTraderRinkeby = "ethereum:4:ethtrader", e.Stellar = "stellar"
			}(r || (r = {}))
		},
		"./src/reddit/helpers/economics/membershipPage.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return a
			}));
			var r = i("./src/lib/permalinkToOverlayLocation/index.ts");

			function a(e, t) {
				return Object(r.a)("/web/special-membership/".concat(e, "?corr=").concat(t))
			}
		},
		"./src/reddit/pages/meta/MembershipPaywallPage/getSrc.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return a
			}));
			var r = i("./src/config.ts");
			const a = (e, t) => "".concat(r.a.assetPath, "/img/memberships/paywall/").concat(e.name.toLowerCase(), "/").concat(t)
		},
		"./src/reddit/selectors/experiments/pollsGA.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return r
			}));
			const r = e => !0
		},
		"./src/reddit/selectors/gov.ts": function(e, t, i) {
			"use strict";
			i.d(t, "b", (function() {
				return l
			})), i.d(t, "c", (function() {
				return u
			})), i.d(t, "d", (function() {
				return b
			})), i.d(t, "e", (function() {
				return g
			})), i.d(t, "g", (function() {
				return p
			})), i.d(t, "h", (function() {
				return h
			})), i.d(t, "i", (function() {
				return f
			})), i.d(t, "j", (function() {
				return _
			})), i.d(t, "p", (function() {
				return y
			})), i.d(t, "q", (function() {
				return w
			})), i.d(t, "o", (function() {
				return x
			})), i.d(t, "l", (function() {
				return E
			})), i.d(t, "m", (function() {
				return v
			})), i.d(t, "s", (function() {
				return N
			})), i.d(t, "a", (function() {
				return k
			})), i.d(t, "f", (function() {
				return S
			})), i.d(t, "r", (function() {
				return P
			})), i.d(t, "n", (function() {
				return I
			})), i.d(t, "k", (function() {
				return C
			}));
			var r = i("./src/reddit/contexts/PageLayer/index.tsx"),
				a = i("./src/reddit/endpoints/governance/crypto.ts"),
				d = i("./src/reddit/featureFlags/index.ts"),
				s = i("./src/reddit/selectors/experiments/pollsGA.ts"),
				c = i("./src/reddit/selectors/postCreations.ts");
			const n = [],
				o = {},
				m = {
					filled: "img/communityPoints/default_filled.png",
					grey: "img/communityPoints/default_grey.png"
				},
				l = (e, t) => {
					let {
						subredditId: i
					} = t;
					const r = N(e, {
						subredditId: i
					});
					return r && r.extra && r.extra.contracts && r.extra.contracts.harberger ? r.extra.contracts.harberger : {
						address: void 0,
						decimals: void 0,
						image: void 0,
						taxRate: .01,
						token: void 0
					}
				},
				u = (e, t) => {
					const i = E(e, t);
					if (i) return i.mainHeader
				},
				b = (e, t) => {
					const i = E(e, t);
					return i && i.mainHeader ? i.mainHeader.price : "0"
				},
				g = (e, t) => {
					const i = E(e, t);
					return i && i.mainHeader ? {
						owner: i.mainHeader.owner,
						ownerId: i.mainHeader.ownerId
					} : o
				},
				p = (e, t) => t && t.subredditId ? (e.user.wallets[t.subredditId] || {}).latest : void 0,
				h = (e, t) => {
					if (Object(s.a)(e)) {
						const t = Object(c.g)(e);
						if (t.allowedPostTypes && t.allowedPostTypes.polls) return !0
					}
					const i = d.d.spPolls(e) || d.d.spKarmaPoints(e),
						r = t && t.subredditId ? e.subreddits.gov.meta[t.subredditId] : void 0;
					if (r) {
						const e = !!r.polls && !1 === r.polls.canCreate;
						return i && !e
					}
					return i
				},
				f = (e, t) => {
					return (e.users.publicWallets[t.userId] || {})[t.subredditId]
				},
				_ = (e, t) => {
					const i = Object(r.m)(e, t);
					return i && e.subreddits.gov.releaseNotes[i] || n
				},
				y = (e, t) => t && t.subredditId && (e.subreddits.gov.meta[t.subredditId] || {}).name || "Subreddit Points",
				w = (e, t) => t && t.subredditId && (e.subreddits.gov.meta[t.subredditId] || {}).images || m,
				x = (e, t) => {
					const i = P(e, t);
					return i && i.decimals ? "1" + "0".repeat(i.decimals) : "1"
				},
				E = (e, t) => t.subredditId ? e.subreddits.gov.assets[t.subredditId] : void 0,
				v = (e, t) => t && t.subredditId ? e.subreddits.gov.meta[t.subredditId] : void 0,
				N = (e, t) => {
					const i = v(e, t);
					return i && i.walletProvider
				},
				k = (e, t) => {
					const i = N(e, t),
						r = v(e, t);
					return i && i.provider || r && r.provider
				},
				S = (e, t) => {
					const i = k(e, t);
					return i === a.a.Ethereum || i === a.a.Rinkeby || i === a.a.EthTraderEthereum || i === a.a.EthTraderRinkeby
				},
				P = (e, t) => {
					const i = N(e, t),
						r = k(e, t);
					if (i && !i.inTransition && r === a.a.Stellar) return {
						address: i.extra && i.extra.issuerAddress || "",
						decimals: i.extra && i.extra.decimals || 7,
						symbol: i.extra && i.extra.token || "PHOTON"
					};
					const d = i && i.extra && i.extra.contracts,
						s = d && d.unlocked;
					return s && {
						address: s.address,
						symbol: s.token || "",
						decimals: s.decimals || 18,
						image: s.image
					}
				},
				I = (e, t) => {
					let {
						subredditId: i
					} = t;
					const r = N(e, {
						subredditId: i
					});
					return r && r.extra && r.extra.contracts && r.extra.contracts.subscriptions ? r.extra.contracts.subscriptions : {
						address: void 0
					}
				},
				C = (e, t) => {
					const i = v(e, t);
					return !!i && !!i.walletProvider && !i.walletProvider.inTransition
				}
		}
	}
]);
//# sourceMappingURL=EconomicsSubredditPremiumSidebarCards~SubredditPremiumBadgeHovercardTooltip.03f528e127e910277576.js.map