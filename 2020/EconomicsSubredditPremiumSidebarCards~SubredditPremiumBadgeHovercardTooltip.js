// https://www.redditstatic.com/desktop2x/EconomicsSubredditPremiumSidebarCards~SubredditPremiumBadgeHovercardTooltip.050b51f7e0ea4e77094f.js
// Retrieved at 3/23/2020, 6:20:06 PM by Reddit Dataminer v1.0.0
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
			var a = i("./node_modules/react/index.js"),
				r = i.n(a),
				s = i("./node_modules/react-motion/lib/react-motion.js"),
				d = i("./node_modules/react-redux/es/index.js"),
				c = i("./node_modules/reselect/es/index.js"),
				n = i("./src/lib/classNames/index.ts"),
				o = i("./src/reddit/pages/meta/MembershipPaywallPage/getSrc.ts"),
				l = i("./src/reddit/selectors/economics.ts"),
				m = (i("./node_modules/core-js/modules/es6.regexp.replace.js"), i("./src/config.ts")),
				u = i("./src/reddit/i18n/utils.ts"),
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
				h = {
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
				f = {
					t5_vsb5g: p,
					t5_37jgj: p,
					t5_2t9ha: h,
					t5_2a3y8x: h
				};
			var w = i("./src/reddit/components/Economics/SubredditPremium/SidebarCards/MembershipCard/PrePurchase/SubscriberBenefits/Badges/index.m.less"),
				_ = i.n(w);
			const y = (e, t) => "".concat(m.a.assetPath, "/img/memberships/paywall/").concat(e.name.toLowerCase(), "/").concat(t),
				x = 500,
				v = 30,
				E = 132;
			class N extends r.a.Component {
				constructor(e) {
					super(e), this.badgesBackground = function(e) {
						const t = f[e] || g,
							i = t.width / t.badges.length;
						return Object.assign({}, t, {
							badges: t.badges.map((function(e, t, a) {
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
						const a = ((E - parseFloat(i.replace("px", ""))) * e + t) % t;
						this.badgesBackground.badges.forEach(e => {
							a > e.interval[0] && a <= e.interval[1] && this.setState({
								currentlySelected: e
							})
						})
					}, x)
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
						currentlySelected: a
					} = this.state;
					return t ? r.a.createElement("article", {
						className: Object(n.a)(_.a.container, e)
					}, r.a.createElement("div", {
						className: _.a.background
					}), r.a.createElement("div", {
						className: _.a.content
					}, r.a.createElement("header", {
						className: _.a.title
					}, Object(u.c)("badges")), r.a.createElement("div", {
						className: _.a.rows
					}, r.a.createElement("div", {
						className: _.a.row,
						style: {
							animationDuration: "80s",
							backgroundImage: "url(".concat(y(t, "badges-line-1-v2.png"), ")")
						}
					}), r.a.createElement("div", {
						className: _.a.row,
						ref: e => this.rowRef = e,
						style: {
							animationDirection: "reverse",
							animationDuration: "120s",
							backgroundImage: "url(".concat(y(t, "badges-line-2-v2.png"), ")")
						}
					}), r.a.createElement("div", {
						className: _.a.row,
						style: {
							animationDuration: "160s",
							backgroundImage: "url(".concat(y(t, "badges-line-3-v2.png"), ")")
						}
					})), r.a.createElement("div", {
						className: _.a.username,
						style: {
							color: a.color
						}
					}, r.a.createElement("img", {
						className: _.a.badgePreview,
						src: a.url
					}), i), r.a.createElement("footer", {
						className: _.a.explanation
					}, Object(u.c)("Style your username with a badge and color")), r.a.createElement("div", {
						className: _.a.selection
					}, r.a.createElement(b.a, {
						className: _.a.check
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
			var P = Object(d.b)(S)(N),
				j = i("./src/reddit/components/Economics/SubredditPremium/SidebarCards/MembershipCard/PrePurchase/SubscriberBenefits/Emojis/index.m.less"),
				C = i.n(j);
			const I = ["blink", "bush", "chug", "clappy", "confused", "cuddle", "dab", "dance", "default", "oof", "respect", "soon", "unfortunately", "wow"].map(e => "https://meta.redditmedia.com/img/fortnitebr/emotes/".concat(e, "-2x.gif")).concat("https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/premium_emotes/emo_pack_1/mech_destroy.gif");
			const k = Object(c.c)({
				subreddit: (e, t) => {
					let {
						subredditId: i
					} = t;
					return e.subreddits.models[i]
				}
			});
			var O = Object(d.b)(k)((function(e) {
					const {
						className: t,
						subreddit: i
					} = e;
					return i ? r.a.createElement("article", {
						className: Object(n.a)(C.a.container, t)
					}, r.a.createElement("div", {
						className: C.a.background
					}), r.a.createElement("div", {
						className: C.a.content
					}, r.a.createElement("header", {
						className: C.a.title
					}, Object(u.c)("emotes")), r.a.createElement("div", {
						className: C.a.example
					}, r.a.createElement("img", {
						className: C.a.drawer,
						src: "".concat(m.a.assetPath, "/img/memberships/emoji-drawer.png")
					}), r.a.createElement("div", {
						className: C.a.emojisTitle
					}, Object(u.c)("Add r/".concat(Object(u.b)("communityName", i.name), " emote"))), r.a.createElement("div", {
						className: C.a.emojisContainer
					}, r.a.createElement("div", {
						className: C.a.emojis
					}, I.map(e => r.a.createElement("img", {
						className: C.a.emoji,
						key: e,
						src: e
					}))), r.a.createElement("div", {
						className: C.a.overflow
					}))), r.a.createElement("footer", {
						className: C.a.explanation
					}, Object(u.c)("Get access to premium animated emotes")))) : null
				})),
				B = i("./src/reddit/components/Economics/SubredditPremium/SidebarCards/MembershipCard/PrePurchase/SubscriberBenefits/Gifs/index.m.less"),
				z = i.n(B);
			const D = (() => {
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
			class W extends r.a.Component {
				constructor() {
					super(...arguments), this.state = {
						imagesCol1: [],
						imagesCol2: []
					}
				}
				async componentDidMount() {
					const e = this.props.subreddit && this.props.subreddit.title || "reddit",
						t = await D(e),
						i = [],
						a = [];
					t.data.forEach((e, t) => {
						const r = e.images.fixed_width.url;
						t % 2 == 0 ? i.push(r) : a.push(r)
					}), this.setState({
						imagesCol1: i,
						imagesCol2: a
					})
				}
				render() {
					const {
						className: e,
						subreddit: t
					} = this.props;
					return t ? r.a.createElement("article", {
						className: Object(n.a)(z.a.container, e)
					}, r.a.createElement("div", {
						className: z.a.background
					}), r.a.createElement("div", {
						className: z.a.content
					}, r.a.createElement("header", {
						className: z.a.title
					}, Object(u.c)("gifs in comments")), r.a.createElement("div", {
						className: z.a.example
					}, r.a.createElement("img", {
						className: z.a.drawer,
						src: "".concat(m.a.assetPath, "/img/memberships/gif-drawer.png")
					}), r.a.createElement("div", {
						className: z.a.imagesContainer
					}, r.a.createElement("div", {
						className: z.a.images
					}, r.a.createElement("div", {
						className: z.a.imageCol
					}, this.state.imagesCol1.map(e => r.a.createElement("img", {
						className: z.a.image,
						key: e,
						src: e
					}))), r.a.createElement("div", {
						className: z.a.imageCol
					}, this.state.imagesCol2.map(e => r.a.createElement("img", {
						className: z.a.image,
						key: e,
						src: e
					})))), r.a.createElement("div", {
						className: z.a.overflow
					}))), r.a.createElement("footer", {
						className: z.a.explanation
					}, Object(u.c)("Add GIFs to your comments")))) : null
				}
			}
			const R = Object(c.c)({
				subreddit: (e, t) => {
					let {
						subredditId: i
					} = t;
					return e.subreddits.models[i]
				}
			});
			var A = Object(d.b)(R)(W),
				F = i("./src/reddit/components/Economics/SubredditPremium/SidebarCards/MembershipCard/PrePurchase/SubscriberBenefits/index.m.less"),
				G = i.n(F);
			const T = 1e4,
				L = 110;
			class M extends r.a.Component {
				constructor(e) {
					super(e), this.gotoNextSlide = () => {
						this.timeoutRef && clearInterval(this.timeoutRef), this.setState({
							currentSlideIdx: (this.state.currentSlideIdx + 1) % this.slides.length
						}), this.timeoutRef = window.setTimeout(this.gotoNextSlide, T)
					}, this.timeoutRef = null, this.state = {
						currentSlideIdx: 0
					}, this.slides = function(e) {
						switch (e) {
							case "t5_3oeyf":
							case "t5_socj8":
								return [P, O, A];
							default:
								return [P, A]
						}
					}(e.subredditId)
				}
				componentDidMount() {
					this.timeoutRef = window.setTimeout(this.gotoNextSlide, T)
				}
				componentWillUnmount() {
					this.timeoutRef && clearInterval(this.timeoutRef)
				}
				render() {
					const {
						className: e,
						hideSlideshow: t,
						meta: i,
						subredditId: d,
						subreddit: c
					} = this.props, {
						currentSlideIdx: l
					} = this.state;
					return c ? r.a.createElement("div", {
						className: e
					}, r.a.createElement("header", {
						className: G.a.title
					}, r.a.createElement("img", {
						className: G.a.crown,
						src: Object(o.a)(c, "Crown.gif")
					}), i.membershipAlt), !t && r.a.createElement(r.a.Fragment, null, r.a.createElement("article", {
						className: G.a.benefits
					}, r.a.createElement(s.TransitionMotion, {
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
							key: "slide-".concat(l),
							data: {
								Component: this.slides[l],
								index: l
							},
							style: {
								left: Object(s.spring)(0)
							}
						}],
						willEnter: () => ({
							left: L
						}),
						willLeave: () => ({
							left: Object(s.spring)(-L)
						})
					}, e => r.a.createElement(a.Fragment, null, e.map(e => r.a.createElement("div", {
						className: G.a.slide,
						key: e.key,
						style: {
							left: "".concat(e.style.left, "%")
						},
						onClick: this.gotoNextSlide
					}, r.a.createElement(e.data.Component, {
						subredditId: d
					})))))), r.a.createElement("footer", {
						className: G.a.indicators
					}, this.slides.map((e, t) => r.a.createElement("div", {
						className: Object(n.a)(G.a.indicator, {
							[G.a.indicatorSelected]: t === l
						}),
						key: t,
						onClick: () => this.setState({
							currentSlideIdx: t
						})
					}))))) : null
				}
			}
			const U = Object(c.c)({
				meta: (e, t) => {
					let {
						subredditId: i
					} = t;
					return Object(l.v)(e, i)
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
			t.a = Object(d.b)(U)(M)
		},
		"./src/reddit/endpoints/governance/crypto.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return a
			})), i.d(t, "c", (function() {
				return d
			})), i.d(t, "d", (function() {
				return c
			})), i.d(t, "e", (function() {
				return n
			})), i.d(t, "b", (function() {
				return o
			}));
			var a, r = i("./src/config.ts"),
				s = i("./src/reddit/endpoints/governance/requester.ts");

			function d(e) {
				switch (e) {
					case a.Ethereum:
						return "Ethereum Main Network";
					case a.Rinkeby:
						return "Rinkeby Test Network"
				}
				return e + " Network"
			}
			async function c(e, t, i) {
				return Object(s.a)(e, {
					method: "post",
					endpoint: "".concat(r.a.metaUrl, "/crypto/").concat(t, "/challenges"),
					data: {
						challengeType: "registration-challenge-EIP712",
						address: i
					}
				})
			}
			async function n(e, t, i) {
				return await Object(s.a)(e, {
					method: "post",
					endpoint: "".concat(r.a.metaUrl, "/crypto/").concat(t, "/registrations"),
					data: i
				})
			}
			async function o(e, t, i) {
				return await Object(s.a)(e, {
					method: "delete",
					endpoint: "".concat(r.a.metaUrl, "/crypto/").concat(t, "/registrations/").concat(i)
				})
			}! function(e) {
				e.Ethereum = "ethereum:1", e.Rinkeby = "ethereum:4", e.Stellar = "stellar"
			}(a || (a = {}))
		},
		"./src/reddit/helpers/economics/membershipPage.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return r
			}));
			var a = i("./src/lib/permalinkToOverlayLocation/index.ts");

			function r(e, t) {
				return Object(a.a)("/web/special-membership/".concat(e, "?corr=").concat(t))
			}
		},
		"./src/reddit/pages/meta/MembershipPaywallPage/getSrc.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return r
			}));
			var a = i("./src/config.ts");
			const r = (e, t) => "".concat(a.a.assetPath, "/img/memberships/paywall/").concat(e.name.toLowerCase(), "/").concat(t)
		},
		"./src/reddit/selectors/experiments/pollsGA.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return o
			}));
			i("./node_modules/core-js/modules/web.dom.iterable.js");
			var a = i("./src/reddit/constants/experiments.ts"),
				r = i("./src/reddit/helpers/chooseVariant/index.ts"),
				s = i("./src/reddit/selectors/platform.ts"),
				d = i("./src/reddit/selectors/user.ts");
			const c = new Set(["pollstest", "whatssnoo"]),
				n = new Set(["ps4", "casualconversation", "stardewvalley", "knitting", "dccomics", "premierleague", "zerocarb", "survivor", "supergirltv", "superman", "teenmfa", "whatssnoo", "poll_testing", "nfl", "sanfranciscoanalog", "communityactivation", "temescal", "amitheproblem", "amithebuttface"]),
				o = e => c.has((Object(s.e)(e) || "").toLowerCase()) || n.has((Object(s.e)(e) || "").toLowerCase()) && Object(r.c)(e, {
					experimentEligibilitySelector: d.G,
					experimentName: a.jb
				}) === a.qb.Enabled
		},
		"./src/reddit/selectors/gov.ts": function(e, t, i) {
			"use strict";
			i.d(t, "b", (function() {
				return m
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
				return w
			})), i.d(t, "p", (function() {
				return _
			})), i.d(t, "q", (function() {
				return y
			})), i.d(t, "o", (function() {
				return x
			})), i.d(t, "l", (function() {
				return v
			})), i.d(t, "m", (function() {
				return E
			})), i.d(t, "s", (function() {
				return N
			})), i.d(t, "a", (function() {
				return S
			})), i.d(t, "f", (function() {
				return P
			})), i.d(t, "r", (function() {
				return j
			})), i.d(t, "n", (function() {
				return C
			})), i.d(t, "k", (function() {
				return I
			}));
			var a = i("./src/reddit/contexts/PageLayer/index.tsx"),
				r = i("./src/reddit/endpoints/governance/crypto.ts"),
				s = i("./src/reddit/featureFlags/index.ts"),
				d = i("./src/reddit/selectors/experiments/pollsGA.ts"),
				c = i("./src/reddit/selectors/postCreations.ts");
			const n = [],
				o = {},
				l = {
					filled: "img/communityPoints/default_filled.png",
					grey: "img/communityPoints/default_grey.png"
				},
				m = (e, t) => {
					let {
						subredditId: i
					} = t;
					const a = N(e, {
						subredditId: i
					});
					return a && a.extra && a.extra.contracts && a.extra.contracts.harberger ? a.extra.contracts.harberger : {
						address: void 0,
						decimals: void 0,
						image: void 0,
						taxRate: .01,
						token: void 0
					}
				},
				u = (e, t) => {
					const i = v(e, t);
					if (i) return i.mainHeader
				},
				b = (e, t) => {
					const i = v(e, t);
					return i && i.mainHeader ? i.mainHeader.price : "0"
				},
				g = (e, t) => {
					const i = v(e, t);
					return i && i.mainHeader ? {
						owner: i.mainHeader.owner,
						ownerId: i.mainHeader.ownerId
					} : o
				},
				p = (e, t) => t && t.subredditId ? (e.user.wallets[t.subredditId] || {}).latest : void 0,
				h = (e, t) => {
					if (Object(d.a)(e)) {
						const t = Object(c.g)(e);
						return !!t.allowedPostTypes && t.allowedPostTypes.polls
					}
					const i = s.d.spPolls(e) || s.d.spKarmaPoints(e),
						a = t && t.subredditId ? e.subreddits.gov.meta[t.subredditId] : void 0;
					if (a) {
						const e = !!a.polls && !1 === a.polls.canCreate;
						return i && !e
					}
					return i
				},
				f = (e, t) => {
					return (e.users.publicWallets[t.userId] || {})[t.subredditId]
				},
				w = (e, t) => {
					const i = Object(a.m)(e, t);
					return i && e.subreddits.gov.releaseNotes[i] || n
				},
				_ = (e, t) => t && t.subredditId && (e.subreddits.gov.meta[t.subredditId] || {}).name || "Subreddit Points",
				y = (e, t) => t && t.subredditId && (e.subreddits.gov.meta[t.subredditId] || {}).images || l,
				x = (e, t) => {
					const i = j(e, t);
					return i && i.decimals ? "1" + "0".repeat(i.decimals) : "1"
				},
				v = (e, t) => t.subredditId ? e.subreddits.gov.assets[t.subredditId] : void 0,
				E = (e, t) => t && t.subredditId ? e.subreddits.gov.meta[t.subredditId] : void 0,
				N = (e, t) => {
					const i = E(e, t);
					return i && i.walletProvider
				},
				S = (e, t) => {
					const i = N(e, t),
						a = E(e, t);
					return i && i.provider || a && a.provider
				},
				P = (e, t) => {
					const i = S(e, t);
					return i === r.a.Ethereum || i === r.a.Rinkeby
				},
				j = (e, t) => {
					const i = N(e, t),
						a = S(e, t);
					if (i && !i.inTransition && a === r.a.Stellar) return {
						address: i.extra && i.extra.issuerAddress || "",
						decimals: i.extra && i.extra.decimals || 7,
						symbol: i.extra && i.extra.token || "PHOTON"
					};
					const s = i && i.extra && i.extra.contracts,
						d = s && s.unlocked;
					return d && {
						address: d.address,
						symbol: d.token || "",
						decimals: d.decimals || 18,
						image: d.image
					}
				},
				C = (e, t) => {
					let {
						subredditId: i
					} = t;
					const a = N(e, {
						subredditId: i
					});
					return a && a.extra && a.extra.contracts && a.extra.contracts.subscriptions ? a.extra.contracts.subscriptions : {
						address: void 0
					}
				},
				I = (e, t) => {
					const i = E(e, t);
					return !!i && !!i.walletProvider && !i.walletProvider.inTransition
				}
		}
	}
]);
//# sourceMappingURL=EconomicsSubredditPremiumSidebarCards~SubredditPremiumBadgeHovercardTooltip.050b51f7e0ea4e77094f.js.map