// https://www.redditstatic.com/desktop2x/GovernanceWalletRegistration.425a4bdcae92041c71c3.js
// Retrieved at 8/1/2023, 4:10:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["GovernanceWalletRegistration"], {
		"./src/reddit/components/Governance/Token/index.m.less": function(e, t, a) {
			e.exports = {
				grey: "_3oUx7R2UEz3llZLsIONH4x"
			}
		},
		"./src/reddit/components/Governance/Token/index.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/react/index.js"),
				s = a.n(n),
				r = a("./node_modules/react-redux/es/index.js"),
				o = a("./node_modules/reselect/es/index.js"),
				i = a("./src/config.ts"),
				c = a("./src/lib/classNames/index.ts"),
				l = a("./src/reddit/selectors/crypto/points.ts"),
				d = a("./src/reddit/components/Governance/Token/index.m.less"),
				m = a.n(d);
			const u = Object(o.c)({
				pointsDetails: (e, t) => {
					let {
						subredditId: a
					} = t;
					return Object(l.b)(e, a)
				}
			});
			t.a = Object(r.b)(u)((function(e) {
				var t;
				const a = null === (t = e.pointsDetails) || void 0 === t ? void 0 : t.images;
				if (!a) return null;
				const n = e.grey ? a.greyVector || a.grey : a.filledVector || a.filled,
					r = `${i.a.assetPath}/${n}`;
				if (e.grey && r.endsWith(".svg")) {
					const t = `url(${r}) center/cover`;
					return s.a.createElement("div", {
						className: Object(c.a)(m.a.grey, e.className),
						style: {
							mask: t,
							WebkitMask: t
						}
					})
				}
				return s.a.createElement("img", {
					className: e.className,
					src: r
				})
			}))
		},
		"./src/reddit/components/Governance/WalletRegistration/Banner/index.m.less": function(e, t, a) {
			e.exports = {
				completedBanner: "V1zMX9mirD_UkpJkdCo1V",
				spacer: "_3chLxKuGohAjO0xsQq2vpz",
				checkIcon: "_22Ah_fm3wOArXYFgc0uedQ",
				registeredMessage: "_25wXUBlKji03ZJA9WseqgQ"
			}
		},
		"./src/reddit/components/Governance/WalletRegistration/Banner/index.tsx": function(e, t, a) {
			"use strict";
			a.r(t);
			var n = a("./node_modules/react/index.js"),
				s = a.n(n),
				r = a("./node_modules/react-redux/es/index.js"),
				o = a("./src/lib/classNames/index.ts"),
				i = a("./src/reddit/contexts/ApiContext.tsx"),
				c = a("./src/reddit/endpoints/economics/banners.ts"),
				l = a("./src/reddit/icons/svgs/CircleCheck/index.tsx"),
				d = a("./src/reddit/selectors/crypto/points.ts"),
				m = a("./src/reddit/selectors/gov.ts"),
				u = a("./node_modules/reselect/es/index.js"),
				b = a("./src/reddit/components/Governance/WalletRegistration/Common/index.tsx"),
				h = a("./src/reddit/components/Governance/WalletRegistration/Common/Countdown.tsx"),
				p = a("./src/reddit/components/Governance/WalletRegistration/Banner/index.m.less"),
				v = a.n(p);
			const {
				fbt: g
			} = a("./node_modules/fbt/lib/FbtPublic.js");
			class C extends s.a.Component {
				constructor() {
					super(...arguments), this.state = {
						completed: !1,
						show: !1
					}, this.onClose = () => {
						this.dismissBanner(), this.setState({
							show: !1
						})
					}, this.onComplete = () => {
						this.dismissBanner(), this.setState({
							completed: !0
						})
					}
				}
				async componentDidMount() {
					const {
						apiContext: e,
						publicAddress: t,
						subredditId: a
					} = this.props;
					if (this.props.userIsLoggedIn && !t) {
						!!(await Object(c.b)(e(), a))[c.a.WalletRegistration] || this.setState({
							show: !0
						}), window.resetWalletRegistrationBanner = () => {
							Object(c.e)(e(), a, c.a.WalletRegistration)
						}
					}
				}
				dismissBanner() {
					Object(c.c)(this.props.apiContext(), this.props.subredditId, c.a.WalletRegistration)
				}
				render() {
					const {
						className: e,
						publicAddress: t,
						subredditId: a,
						points: n
					} = this.props, {
						completed: r,
						show: i
					} = this.state;
					return i && n && !t ? r ? s.a.createElement("div", {
						className: Object(o.a)(v.a.completedBanner, e)
					}, s.a.createElement(h.a, {
						subredditId: a
					}), s.a.createElement("div", {
						className: v.a.spacer
					}), s.a.createElement(l.a, {
						className: v.a.checkIcon
					}), s.a.createElement("div", {
						className: v.a.registeredMessage
					}, g._("Registered for distribution", null, {
						hk: "2CVmU4"
					}))) : s.a.createElement(b.a, {
						className: e,
						points: n,
						subredditId: a,
						onClose: this.onClose,
						onComplete: this.onComplete
					}) : null
				}
			}
			const f = Object(u.c)({
				userIsLoggedIn: e => !!e.user.account,
				publicAddress: (e, t) => {
					let {
						subredditId: a
					} = t;
					const n = Object(m.d)(e, {
						subredditId: a
					});
					return n && n.publicAddress
				},
				points: (e, t) => {
					let {
						subredditId: a
					} = t;
					return Object(d.b)(e, a)
				}
			});
			t.default = Object(r.b)(f)(Object(i.b)(C))
		},
		"./src/reddit/components/Governance/WalletRegistration/Common/Cards/index.m.less": function(e, t, a) {
			e.exports = {
				card: "_1xQOIa1W-lvxNl2X2CgHi4",
				text: "_23vkS08YjONGTXQSDGdesD",
				header: "-tq6OhWu7Ap3bmMEo3JWF",
				body: "_3iXHXamAjhLLIa9lF1LKCN",
				paragraph: "_2eUOHNioUr0YETlxaQmgE2",
				link: "GOoQIC1j4JenkopqtFD7Q",
				bold: "_24oau85Bciyfy1zuKy4Iil",
				cta: "_1fJj0dWv5nykWAFbuTvMBK",
				image: "_3fhH_bAKXmAR52bF07SbPi",
				button: "ksvjsl9d5lJczoAdJcliF",
				buttonIcon: "_2mVKlUP_UBRhv6yGxP7oCY",
				metaMaskCard: "_1o5whCNxaOOIYIBZ8CI7bc",
				registeredCard: "ZMYIV_ZVx3iDVL_Bf8iQo",
				verifyCard: "qI9sHQnfhCFOCAmSSm8Oe",
				aboutCard: "_6iLs3pfFykyTSgDzJkm7l",
				walletCard: "_3XUnFHoeYY3RP48MrHUTlb",
				connectCard: "_3eVl-jxEg3mUxSbYtumBwl",
				installedCheckmark: "_1AgtuN4IIQHHnLx_m69ONC",
				approvalMessage: "YWOubic269xeGS5BzBXWw"
			}
		},
		"./src/reddit/components/Governance/WalletRegistration/Common/Countdown.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return b
			}));
			var n = a("./node_modules/react/index.js"),
				s = a.n(n),
				r = a("./src/reddit/components/Governance/Token/index.tsx"),
				o = a("./src/reddit/components/Governance/WalletRegistration/Common/index.m.less"),
				i = a.n(o);
			const c = 15753096e5,
				l = 6e4,
				d = 60 * l,
				m = 24 * d;

			function u(e) {
				return Math.max(0, e - Date.now())
			}
			class b extends s.a.Component {
				constructor(e) {
					super(e), this.state = {
						remainingTimeMs: u(e.deadline || c)
					}
				}
				componentDidMount() {
					this.intervalId = window.setInterval(() => {
						this.setState({
							remainingTimeMs: u(this.props.deadline || c)
						})
					}, 1e3)
				}
				componentWillUnmount() {
					window.clearInterval(this.intervalId)
				}
				render() {
					const {
						remainingTimeMs: e
					} = this.state, t = Math.floor(e / m), a = Math.floor(e % m / d), n = Math.floor(e % d / l), o = Math.floor(e % l / 1e3);
					return s.a.createElement("div", {
						className: i.a.countdownTimer
					}, s.a.createElement(r.a, {
						className: i.a.token,
						subredditId: this.props.subredditId
					}), e ? `${t}D : ${a}H : ${n}M : ${o}S REMAINING` : null)
				}
			}
		},
		"./src/reddit/components/Governance/WalletRegistration/Common/index.m.less": function(e, t, a) {
			e.exports = {
				container: "_1bTjw5DFYp4CctYZ3lfuFS",
				closeButton: "_39Vkv4-6L-87v7TZCvc5JK",
				closeIcon: "ly6hYyXquOdB8BmEmr6Yr",
				countdownTimer: "_3Hv_YfcjtfBDLAP15lWnIX",
				token: "hotkh10LAVznEb5VXAFJI",
				title: "ScDmH2vbUk2wjHHiX3W5K",
				tabBar: "ya-tlIr6ctAbWoHZeKpyh",
				tab: "_3i-7ubWTKyNc4fp02yMH1v",
				tabActive: "_2NOuhdkBSywQcy0oyIwF0J",
				activeTabLine: "_2Hs9CqZqwRd2nDX3A5_HCL"
			}
		},
		"./src/reddit/components/Governance/WalletRegistration/Common/index.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/react/index.js"),
				s = a.n(n),
				r = a("./node_modules/react-redux/es/index.js"),
				o = a("./src/lib/classNames/index.ts"),
				i = a("./src/reddit/actions/governance/index.ts"),
				c = a("./src/reddit/components/TrackingHelper/index.tsx"),
				l = a("./src/reddit/contexts/PageLayer/index.tsx"),
				d = a("./src/reddit/helpers/governance/ethereum.ts"),
				m = a("./src/reddit/icons/svgs/Close/index.tsx"),
				u = a("./src/reddit/selectors/telemetry.ts"),
				b = a("./node_modules/uuid/dist/esm-browser/v4.js"),
				h = a("./src/config.ts"),
				p = a("./src/reddit/controls/Button/index.tsx"),
				v = a("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				g = a("./src/reddit/components/Governance/WalletRegistration/Common/Cards/index.m.less"),
				C = a.n(g);
			const {
				fbt: f
			} = a("./node_modules/fbt/lib/FbtPublic.js");

			function x(e) {
				const t = `url(${h.a.assetPath}/img/communityPoints/registration/ethtrader/about.svg)`;
				return s.a.createElement("div", {
					className: Object(o.a)(C.a.card, C.a.aboutCard)
				}, s.a.createElement("div", {
					className: C.a.text
				}, s.a.createElement("div", {
					className: C.a.header
				}, f._("Donuts Are No Longer Centralized!", null, {
					hk: "45RssI"
				})), s.a.createElement("div", {
					className: C.a.body
				}, f._("Backed by {=smart contracts} developed by mod u/carlslarson, Donuts are now ERC-20 tokens that you own and control on the Ethereum blockchain! Register to earn Donuts for your contributions to the subreddit and use them to buy perks in the community, like a special membership, higher weighting in polls, or the ability to control the top banner. Follow this simple wizard to register. Note: Donuts are not driven nor developed by Reddit.", [f._param("=smart contracts", s.a.createElement("a", {
					href: "https://github.com/daonuts",
					className: C.a.link,
					rel: "noopener noreferrer",
					target: "_blank"
				}, f._("smart contracts", null, {
					hk: "40dMKO"
				})))], {
					hk: "4gEJ3V"
				}))), s.a.createElement("div", {
					className: C.a.cta
				}, s.a.createElement("div", {
					className: C.a.image,
					style: {
						backgroundImage: t
					}
				}), s.a.createElement(p.l, {
					className: C.a.button,
					onClick: e.onNextStep
				}, f._("Start", null, {
					hk: "3So7as"
				}), s.a.createElement(v.a, {
					className: C.a.buttonIcon
				}))))
			}
			var k = a("./src/reddit/icons/svgs/Link/index.tsx");
			const {
				fbt: y
			} = a("./node_modules/fbt/lib/FbtPublic.js");
			class w extends s.a.Component {
				componentDidMount() {
					this.intervalId = window.setInterval(() => {
						Object(d.c)() && (this.props.onNextStep(), window.clearInterval(this.intervalId))
					}, 500)
				}
				componentWillUnmount() {
					window.clearInterval(this.intervalId)
				}
				render() {
					const e = `url(${h.a.assetPath}/img/communityPoints/registration/ethtrader/connect.svg)`;
					return s.a.createElement("div", {
						className: Object(o.a)(C.a.card, C.a.connectCard)
					}, s.a.createElement("div", {
						className: C.a.text
					}, s.a.createElement("div", {
						className: C.a.header
					}, y._("Connect Reddit to MetaMask", null, {
						hk: "1uL476"
					})), s.a.createElement("div", {
						className: C.a.body
					}, y._("This will allow Reddit to see your wallet’s public key and allow Reddit to request your signature on messages and transactions.", null, {
						hk: "1IBG48"
					}))), s.a.createElement("div", {
						className: C.a.cta
					}, s.a.createElement("div", {
						className: C.a.image,
						style: {
							backgroundImage: e
						}
					}), s.a.createElement(p.o, {
						className: C.a.button,
						onClick: d.b
					}, y._("Connect", null, {
						hk: "3rApnz"
					}), s.a.createElement(k.a, {
						className: C.a.buttonIcon
					}))))
				}
			}
			var E = a("./src/reddit/icons/svgs/CircleCheck/index.tsx"),
				N = a("./src/reddit/icons/svgs/DownvoteCircle/index.tsx"),
				_ = a("./src/reddit/icons/svgs/Refresh/index.tsx"),
				M = a("./src/reddit/components/Governance/WalletRegistration/Common/pageReload.ts");
			const {
				fbt: j
			} = a("./node_modules/fbt/lib/FbtPublic.js"), I = "https://metamask.io/", O = "https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn";
			class L extends s.a.Component {
				constructor() {
					super(...arguments), this.state = {
						clickedInstallButton: !1,
						isMetaMaskInstalled: Object(d.e)()
					}
				}
				render() {
					const {
						clickedInstallButton: e,
						isMetaMaskInstalled: t
					} = this.state, a = `url(${h.a.assetPath}/img/communityPoints/registration/ethtrader/metamask.svg)`;
					return s.a.createElement("div", {
						className: Object(o.a)(C.a.card, C.a.metaMaskCard)
					}, s.a.createElement("div", {
						className: C.a.text
					}, s.a.createElement("div", {
						className: C.a.header
					}, j._("Install the MetaMask Browser Extension", null, {
						hk: "3MOJpi"
					}), t && s.a.createElement(E.a, {
						className: C.a.installedCheckmark
					})), s.a.createElement("div", {
						className: C.a.body
					}, s.a.createElement("p", {
						className: C.a.paragraph
					}, j._('{=MetaMask} is an Ethereum Wallet trusted by millions. The extension allows you to manage decentralized tokens and to access Ethereum-powered decentralized applications, or "Dapps", directly in your browser. You will need to reload the page after you install the extension.', [j._param("=MetaMask", s.a.createElement("a", {
						href: I,
						className: C.a.link,
						rel: "noopener noreferrer",
						target: "_blank"
					}, j._("MetaMask", null, {
						hk: "2TWNyh"
					})))], {
						hk: "2k97Gi"
					})), s.a.createElement("p", {
						className: C.a.paragraph
					}, j._("Disclaimer: MetaMask is not affiliated with Reddit and the following is not an advertisement or an endorsement. You understand that Reddit is not responsible for any actions or inactions or harm caused by using Metamask.", null, {
						hk: "3l0TTn"
					})))), s.a.createElement("div", {
						className: C.a.cta
					}, s.a.createElement("div", {
						className: C.a.image,
						style: {
							backgroundImage: a
						}
					}), t ? s.a.createElement(p.l, {
						className: C.a.button,
						onClick: this.props.onNextStep
					}, j._("Continue", null, {
						hk: "4aMeJj"
					}), s.a.createElement(v.a, {
						className: C.a.buttonIcon
					})) : e ? s.a.createElement(p.l, {
						className: C.a.button,
						onClick: M.a
					}, j._("Reload page", null, {
						hk: "14fa9z"
					}), s.a.createElement(_.a, {
						className: C.a.buttonIcon
					})) : s.a.createElement(p.p, {
						className: C.a.button,
						href: O,
						target: "_blank",
						onClick: () => this.setState({
							clickedInstallButton: !0
						})
					}, j._("Get Extension", null, {
						hk: "ey9hD"
					}), s.a.createElement(N.a, {
						className: C.a.buttonIcon
					}))))
				}
			}
			var A = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 16 16",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M15.8278 7.71709L15.0447 4.57483C14.625 2.89562 13.3316 1.55632 11.6691 1.07957L8.55662 0.187113C6.89279 -0.289905 5.08599 0.160525 3.84157 1.36271L2.71763 2.44761C2.53644 2.36832 2.33627 2.32433 2.12583 2.32433C1.30975 2.32433 0.648193 2.98589 0.648193 3.80197C0.648193 4.04193 0.705395 4.26854 0.806908 4.46889C0.547962 4.86933 0.348128 5.30713 0.216101 5.76783C-0.0184979 6.58567 -0.0337468 7.45525 0.172179 8.28326L0.956131 11.4246C1.37437 13.1039 2.66792 14.4434 4.33188 14.9206L7.44436 15.813C7.88293 15.9387 8.33114 16 8.77675 16C10.0206 16 11.2423 15.5223 12.1597 14.6373L14.4886 12.3879C15.1013 11.7956 15.5492 11.0501 15.7838 10.232C16.0184 9.41402 16.0337 8.54438 15.8278 7.71709ZM1.49235 5.1373C1.3296 5.41768 1.2027 5.71619 1.11403 6.0254L1.1138 6.02619L1.12933 6.03038C1.68311 6.18912 2.14176 6.55399 2.42093 7.05766C2.74741 7.64566 3.49279 7.85908 4.08163 7.53351C4.50625 7.29819 5.00386 7.21289 5.48114 7.29298C5.49328 7.29502 5.50522 7.29751 5.51697 7.30043L5.51718 7.29966L5.52028 7.28888C5.9132 5.9186 7.34177 5.12764 8.71097 5.52026C10.0802 5.91287 10.8725 7.34067 10.4796 8.71095L10.4765 8.72174L10.4763 8.72248C10.4982 8.72797 10.5199 8.73512 10.5414 8.74399C10.9964 8.93206 11.3633 9.25932 11.6022 9.69034C11.9285 10.279 12.6727 10.4925 13.2614 10.1661C13.7602 9.88952 14.3369 9.82179 14.8857 9.97507L14.8858 9.97443C15.0726 9.32325 15.0903 8.62246 14.9212 7.94274L14.8549 7.67671C14.6858 7.91679 14.4065 8.07365 14.0906 8.07365C13.5746 8.07365 13.1563 7.65538 13.1563 7.13942C13.1563 6.62346 13.5746 6.20519 14.0906 6.20519C14.2427 6.20519 14.3864 6.24157 14.5134 6.30611L14.1384 4.80136C13.7983 3.44025 12.7592 2.36408 11.4116 1.97765L9.03074 1.29494C9.04152 1.36569 9.04712 1.43814 9.04712 1.5119C9.04712 2.30045 8.40787 2.9397 7.61932 2.9397C6.83077 2.9397 6.19152 2.30045 6.19152 1.5119C6.19152 1.35 6.21847 1.1944 6.26812 1.04933C5.61024 1.21321 4.99488 1.5474 4.49033 2.03482L3.41264 3.07513C3.53412 3.28974 3.60346 3.53776 3.60346 3.80197C3.60346 4.61804 2.9419 5.2796 2.12583 5.2796C1.89912 5.2796 1.68434 5.22854 1.49235 5.1373ZM9.5796 8.4607C9.32715 9.32787 8.41534 9.83083 7.54641 9.5815C6.67774 9.33244 6.17075 8.42271 6.41825 7.54642C6.62509 6.82522 7.28509 6.3544 8.00049 6.3544C8.15024 6.3544 8.30247 6.37499 8.45339 6.41832C8.87593 6.53947 9.22601 6.81779 9.4391 7.20201C9.6522 7.5863 9.70277 8.03074 9.5796 8.4607ZM5.32631 8.2143C5.36094 8.22011 5.39532 8.22195 5.42898 8.22016C5.5179 9.25462 6.23114 10.1763 7.2889 10.4796C8.35052 10.784 9.4479 10.3763 10.0703 9.53999C10.1042 9.56716 10.1424 9.59003 10.1845 9.60744C10.4421 9.71386 10.6497 9.89913 10.785 10.1432C11.1781 10.8523 11.9147 11.253 12.6732 11.253C13.0263 11.253 13.3842 11.1662 13.7143 10.9832C13.9612 10.8463 14.2415 10.7998 14.5159 10.848C14.3345 11.1636 14.1078 11.4565 13.8392 11.7161L11.5106 13.9653C10.5009 14.9394 9.0495 15.3014 7.70185 14.915L4.58934 14.0225C3.24062 13.6358 2.2016 12.5596 1.86259 11.1988L1.07866 8.05709C0.988196 7.69351 0.951205 7.3239 0.964941 6.95908C1.23698 7.06081 1.4616 7.25386 1.604 7.51089C1.99761 8.21939 2.73477 8.61983 3.49383 8.61983C3.84677 8.61983 4.2044 8.53323 4.53428 8.35076C4.77839 8.21548 5.05235 8.1681 5.32631 8.2143ZM11.4706 5.87934C12.2076 5.87934 12.8052 5.28182 12.8052 4.54474C12.8052 3.80765 12.2076 3.21013 11.4706 3.21013C10.7335 3.21013 10.136 3.80765 10.136 4.54474C10.136 5.28182 10.7335 5.87934 11.4706 5.87934ZM6.4448 4.28874C6.4448 4.8047 6.02653 5.22296 5.51057 5.22296C4.99462 5.22296 4.57635 4.8047 4.57635 4.28874C4.57635 3.77278 4.99462 3.35451 5.51057 3.35451C6.02653 3.35451 6.4448 3.77278 6.4448 4.28874Z"
			}));
			const {
				fbt: R
			} = a("./node_modules/fbt/lib/FbtPublic.js");

			function W(e) {
				const t = `url(${h.a.assetPath}/img/communityPoints/registration/ethtrader/registered.svg)`,
					{
						onNextStep: a,
						points: n
					} = e;
				return s.a.createElement("div", {
					className: Object(o.a)(C.a.card, C.a.registeredCard)
				}, s.a.createElement("div", {
					className: C.a.text
				}, s.a.createElement("div", {
					className: C.a.header
				}, R._("That’s It, You Are Registered!", null, {
					hk: "3gVrKp"
				})), s.a.createElement("div", {
					className: C.a.body
				}, s.a.createElement("p", {
					className: C.a.paragraph
				}, R._("Your wallet will receive Donuts after the next regular distribution based on the karma you earn in this subreddit.", null, {
					hk: "3qEBK1"
				})), s.a.createElement("p", {
					className: C.a.paragraph
				}, R._("To view your balance in MetaMask, you’ll need to {=track} the Donut token by clicking the button below. After that, go earn more Donuts by creating some great content on r/EthTrader!", [R._param("=track", s.a.createElement("span", {
					className: C.a.bold
				}, R._("track", null, {
					hk: "3r4sf1"
				})))], {
					hk: "urtXU"
				})))), s.a.createElement("div", {
					className: C.a.cta
				}, s.a.createElement("div", {
					className: C.a.image,
					style: {
						backgroundImage: t
					}
				}), s.a.createElement(p.l, {
					className: C.a.button,
					onClick: () => {
						var e, t;
						if (n && n.contractAddress) {
							const s = {
								address: n.contractAddress,
								symbol: n.symbol,
								decimals: n.decimals,
								image: null === (t = null === (e = n.contracts) || void 0 === e ? void 0 : e.unlocked) || void 0 === t ? void 0 : t.image
							};
							Object(d.i)(s).then(a)
						} else a()
					}
				}, n ? R._("Track Donuts", null, {
					hk: "3gEZnQ"
				}) : R._("Finish", null, {
					hk: "4kSXmt"
				}), s.a.createElement(A, {
					className: C.a.buttonIcon
				}))))
			}
			var S = a("./src/reddit/actions/governance/errorToast.ts"),
				B = a("./src/reddit/actions/toaster.ts"),
				P = a("./src/reddit/contexts/ApiContext.tsx"),
				T = a("./src/reddit/controls/Checkbox/index.tsx"),
				D = a("./src/reddit/endpoints/governance/crypto.ts"),
				G = a("./src/reddit/icons/svgs/Post/index.tsx"),
				H = a("./src/reddit/models/Toast/index.ts"),
				V = a("./node_modules/fbt/lib/FbtPublic.js");
			class U extends s.a.Component {
				constructor() {
					super(...arguments), this.state = {
						approvalChecked: !1
					}, this.toggleApprovalCheckbox = () => {
						this.setState({
							approvalChecked: !this.state.approvalChecked
						})
					}, this.runVerification = async () => {
						var e;
						const t = Object(d.c)();
						if (!t) return void this.props.onError(V.fbt._("Please select an Ethereum wallet in your provider", null, {
							hk: "25u6on"
						}));
						const a = null === (e = this.props.points) || void 0 === e ? void 0 : e.blockchainProvider;
						if (!a || !a.startsWith("ethereum")) throw new Error("expected Ethereum provider");
						if (a.split(":")[1] !== Object(d.d)()) {
							const e = Object(D.j)(a);
							return void this.props.onError(V.fbt._("Please select the {providerName} in MetaMask", [V.fbt._param("providerName", e)], {
								hk: "2uEOyT"
							}))
						}
						const n = await Object(D.k)(this.props.apiContext(), a, t);
						if (!n.ok) return void this.props.onGovernanceError(n.error);
						const s = n.body.payload;
						let r;
						try {
							r = await Object(d.h)(s)
						} catch (i) {
							return console.error(i), void(i.code !== d.a && this.props.onError(i.message || V.fbt._("An error occured while trying to sign the registration message.", null, {
								hk: "30ALRP"
							})))
						}
						const o = await Object(D.m)(this.props.apiContext(), a, {
							registrationType: "crypto-registration-EIP712",
							address: t,
							signature: r
						});
						o.ok ? this.props.onNextStep() : this.props.onGovernanceError(o.error)
					}
				}
				render() {
					const {
						approvalChecked: e
					} = this.state, t = `url(${h.a.assetPath}/img/communityPoints/registration/ethtrader/verify.svg)`;
					return s.a.createElement("div", {
						className: Object(o.a)(C.a.card, C.a.verifyCard)
					}, s.a.createElement("div", {
						className: C.a.text
					}, s.a.createElement("div", {
						className: C.a.header
					}, V.fbt._("Sign a Verification Message", null, {
						hk: "35rjb4"
					})), s.a.createElement("div", {
						className: C.a.body
					}, V.fbt._("Sign a message (not a transaction), to verify that the wallet is yours. This will not be sent to the blockchain and will not cost you anything.", null, {
						hk: "e0c0N"
					}))), s.a.createElement("div", {
						className: C.a.cta
					}, s.a.createElement("div", {
						className: C.a.image,
						style: {
							backgroundImage: t
						}
					}), s.a.createElement("div", {
						className: C.a.approvalMessage
					}, s.a.createElement(T.a, {
						isCheckboxSelected: e,
						toggleCheckbox: this.toggleApprovalCheckbox
					}), s.a.createElement("div", {
						onClick: this.toggleApprovalCheckbox
					}, V.fbt._("I understand and agree to allow Reddit to publicly display my wallet address linked to my username", null, {
						hk: "1fQEnc"
					}))), s.a.createElement(p.o, {
						className: C.a.button,
						onClick: this.runVerification,
						disabled: !e
					}, V.fbt._("Verify in MetaMask", null, {
						hk: "4yHWv"
					}), s.a.createElement(G.a, {
						className: C.a.buttonIcon
					}))))
				}
			}
			var F = Object(P.b)(Object(r.b)(void 0, e => ({
				onGovernanceError: t => Object(S.a)(e, t),
				onError: t => e(Object(B.f)({
					duration: 5e3,
					kind: H.b.Error,
					text: t
				}))
			}))(U));

			function Z(e) {
				const t = `url(${h.a.assetPath}/img/communityPoints/registration/ethtrader/wallet.svg)`;
				return s.a.createElement("div", {
					className: Object(o.a)(C.a.card, C.a.walletCard)
				}, s.a.createElement("div", {
					className: C.a.text
				}, s.a.createElement("div", {
					className: C.a.header
				}, V.fbt._("Create a Wallet", null, {
					hk: "M5zQ2"
				})), s.a.createElement("div", {
					className: C.a.body
				}, V.fbt._("Create your MetaMask account and Ethereum wallet by following the instructions in MetaMask after you install the extension.", null, {
					hk: "4DQsB7"
				}))), s.a.createElement("div", {
					className: C.a.cta
				}, s.a.createElement("div", {
					className: C.a.image,
					style: {
						backgroundImage: t
					}
				}), s.a.createElement(p.o, {
					className: C.a.button,
					onClick: e.onNextStep
				}, V.fbt._("Next", null, {
					hk: "2mEXAi"
				}), s.a.createElement(v.a, {
					className: C.a.buttonIcon
				}))))
			}
			var J, X = a("./src/reddit/components/Governance/WalletRegistration/Common/Countdown.tsx"),
				Y = a("./src/reddit/components/Governance/WalletRegistration/Common/index.m.less"),
				Q = a.n(Y);

			function q(e) {
				const {
					children: t,
					isActive: a
				} = e;
				return s.a.createElement("div", {
					className: Object(o.a)(Q.a.tab, {
						[Q.a.tabActive]: a
					})
				}, t)
			}! function(e) {
				e[e.About = 0] = "About", e[e.MetaMask = 1] = "MetaMask", e[e.Wallet = 2] = "Wallet", e[e.Connect = 3] = "Connect", e[e.Verify = 4] = "Verify", e[e.Registered = 5] = "Registered"
			}(J || (J = {}));
			const $ = [{
				id: J.About,
				name: () => V.fbt._("About", null, {
					hk: "1jX7pr"
				})
			}, {
				id: J.MetaMask,
				name: () => V.fbt._("MetaMask", null, {
					hk: "2Y184A"
				})
			}, {
				id: J.Wallet,
				name: () => V.fbt._("Wallet", null, {
					hk: "3qALAf"
				})
			}, {
				id: J.Connect,
				name: () => V.fbt._("Connect", null, {
					hk: "3GMXUP"
				})
			}, {
				id: J.Verify,
				name: () => V.fbt._("Verify", null, {
					hk: "WHMgJ"
				})
			}, {
				id: J.Registered,
				name: () => V.fbt._("Registered", null, {
					hk: "1U7VpD"
				})
			}];
			class z extends s.a.Component {
				constructor() {
					super(...arguments), this.setRef = e => {
						this.el = e, this.updateActiveTabLine()
					}
				}
				componentDidUpdate(e) {
					e.activeTab !== this.props.activeTab && this.updateActiveTabLine()
				}
				updateActiveTabLine() {
					const e = this.el;
					if (!e) return;
					const t = e.getElementsByClassName(Q.a.tabActive)[0];
					if (t) {
						const a = e.getElementsByClassName(Q.a.activeTabLine)[0];
						a.style.left = t.offsetLeft + "px", a.style.top = t.offsetTop + t.offsetHeight - 3 + "px", a.style.width = t.offsetWidth + "px"
					}
				}
				render() {
					const {
						activeTab: e
					} = this.props;
					return s.a.createElement("div", {
						className: Q.a.tabBar,
						ref: this.setRef
					}, $.map(t => s.a.createElement(q, {
						isActive: e === t.id,
						key: t.id
					}, t.name())), s.a.createElement("div", {
						className: Q.a.activeTabLine
					}))
				}
			}
			const {
				fbt: K
			} = a("./node_modules/fbt/lib/FbtPublic.js");
			class ee extends s.a.Component {
				constructor(e) {
					super(e), this.onNextStep = () => {
						const {
							activeTab: e
						} = this.state;
						if (e === J.Registered) return this.props.onRefreshWallet(), this.props.onComplete(), void this.props.sendEvent(e => {
							const t = u.q(e);
							return {
								source: "meta",
								action: "complete",
								noun: "wallet_registration",
								correlationId: this.correlationId,
								...t,
								subreddit: u.nb(e)
							}
						});
						const t = e === J.About ? J.MetaMask : e === J.MetaMask ? J.Wallet : e === J.Wallet ? J.Connect : e === J.Connect ? J.Verify : J.Registered;
						this.setState({
							activeTab: t
						}), this.sendViewTabEvent(t)
					}, this.correlationId = Object(b.a)();
					const t = Object(M.b)(e.pageLayer);
					this.state = {
						activeTab: t && Object(d.e)() ? J.Wallet : J.About
					}
				}
				async componentDidMount() {
					this.sendViewTabEvent(this.state.activeTab)
				}
				sendViewTabEvent(e) {
					this.props.sendEvent(t => {
						const a = u.q(t);
						return {
							source: "meta",
							action: "view",
							noun: "wallet_registration",
							correlationId: this.correlationId,
							...a,
							actionInfo: {
								...a.actionInfo,
								paneName: e + ""
							},
							subreddit: u.nb(t)
						}
					})
				}
				render() {
					const {
						className: e,
						onClose: t,
						points: a,
						subredditId: n
					} = this.props, {
						activeTab: r
					} = this.state, i = r === J.About ? x : r === J.MetaMask ? L : r === J.Wallet ? Z : r === J.Connect ? w : r === J.Verify ? F : W;
					return s.a.createElement("article", {
						className: Object(o.a)(Q.a.container, e)
					}, s.a.createElement(X.a, {
						subredditId: n
					}), s.a.createElement("button", {
						className: Q.a.closeButton,
						onClick: t
					}, s.a.createElement(m.a, {
						className: Q.a.closeIcon
					})), s.a.createElement("div", {
						className: Q.a.title
					}, K._("Register for Donuts Distribution on the Ethereum Blockchain", null, {
						hk: "3kf8PF"
					})), s.a.createElement(z, {
						activeTab: r
					}), s.a.createElement(i, {
						onNextStep: this.onNextStep,
						points: a
					}))
				}
			}
			const te = Object(r.b)(void 0, (e, t) => ({
				onRefreshWallet: () => e(Object(i.h)({
					subredditId: t.subredditId
				}))
			}));
			t.a = te(Object(c.c)(Object(l.v)()(ee)))
		},
		"./src/reddit/components/Governance/WalletRegistration/Common/pageReload.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return r
			})), a.d(t, "b", (function() {
				return o
			}));
			var n = a("./src/lib/addQueryParams/index.ts");
			const s = "metamaskInstalled";

			function r() {
				window.location.replace(Object(n.a)(window.location.href, {
					[s]: "true"
				}))
			}

			function o(e) {
				return !!(e && e.queryParams && e.queryParams[s])
			}
		},
		"./src/reddit/components/Governance/WalletRegistration/Modal/index.m.less": function(e, t, a) {
			e.exports = {
				modalBody: "_3cb6Iu4tOxWvMXdDQAe_LF",
				modalMain: "_2m8xhJDq3pM2zmTv0-Wqee"
			}
		},
		"./src/reddit/components/Governance/WalletRegistration/Modal/index.tsx": function(e, t, a) {
			"use strict";
			a.r(t);
			var n = a("./node_modules/react/index.js"),
				s = a.n(n),
				r = a("./node_modules/react-redux/es/index.js"),
				o = a("./src/higherOrderComponents/asModal/index.tsx"),
				i = a("./src/reddit/actions/modal.ts"),
				c = a("./src/reddit/components/ModalStyledComponents/index.tsx"),
				l = a("./src/reddit/selectors/crypto/points.ts"),
				d = a("./src/reddit/components/Governance/WalletRegistration/Common/index.tsx"),
				m = a("./src/reddit/components/Governance/WalletRegistration/Modal/index.m.less"),
				u = a.n(m);
			t.default = Object(o.a)((function() {
				const e = Object(r.d)(),
					{
						subreddit: t,
						pointsDetails: a
					} = Object(l.c)();
				if (!t || !a) return null;
				const n = () => e(Object(i.f)());
				return s.a.createElement(c.e, {
					className: u.a.modalBody
				}, s.a.createElement(c.l, {
					className: u.a.modalMain
				}, s.a.createElement(d.a, {
					points: a,
					subredditId: t.id,
					onClose: n,
					onComplete: n
				})))
			}))
		},
		"./src/reddit/controls/Checkbox/index.m.less": function(e, t, a) {
			e.exports = {
				CheckboxIcon: "WYS1s7GjzJiaX4fu-xZOJ",
				checkboxIcon: "WYS1s7GjzJiaX4fu-xZOJ",
				redditStyle: "J_lIqJrnicKj84OhD29vQ",
				disabled: "n0Me225oxRbL3aLt7kQA8"
			}
		},
		"./src/reddit/controls/Checkbox/index.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/react/index.js"),
				s = a.n(n),
				r = a("./src/lib/classNames/index.ts"),
				o = a("./src/reddit/icons/fonts/index.tsx"),
				i = a("./src/reddit/controls/Checkbox/index.m.less"),
				c = a.n(i);
			t.a = e => s.a.createElement("button", {
				"aria-checked": e.isHalfCheckboxSelected ? "mixed" : e.isCheckboxSelected,
				className: e.className,
				onClick: t => {
					e.toggleCheckbox && (t.stopPropagation(), e.toggleCheckbox())
				},
				disabled: e.disabled
			}, s.a.createElement(o.a, {
				name: e.isHalfCheckboxSelected ? "checkbox_dismiss_fill" : e.isCheckboxSelected ? "checkbox_fill" : "checkbox",
				className: Object(r.a)({
					[c.a.redditStyle]: e.redditStyle,
					[c.a.disabled]: e.disabled
				}),
				style: e.checkBoxStyle
			}))
		},
		"./src/reddit/endpoints/economics/banners.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return s
			})), a.d(t, "b", (function() {
				return c
			})), a.d(t, "c", (function() {
				return d
			})), a.d(t, "e", (function() {
				return m
			})), a.d(t, "d", (function() {
				return u
			}));
			a("./node_modules/core-js/modules/web.dom.iterable.js");
			var n, s, r = a("./src/config.ts"),
				o = a("./src/reddit/endpoints/governance/requester.ts");
			async function i(e, t, a, n) {
				return Object(o.a)(e, {
					endpoint: `${r.a.metaUrl}/storage/${t}/me/${a}`,
					method: "patch",
					data: n
				})
			}
			async function c(e, t) {
				const a = await async function(e, t, a) {
					return Object(o.a)(e, {
						endpoint: `${r.a.metaUrl}/storage/${t}/me/${a}`,
						method: "get"
					})
				}(e, t, n.UpsellBanners);
				return a.ok && a.body || {}
			}
			async function l(e, t, a, s) {
					const r = await c(e, t),
						o = {
							...r,
							[a]: s
						};
					return (await i(e, t, n.UpsellBanners, o)).ok ? o : r
				}! function(e) {
					e.SubredditPremiumWaitlist = "subreddit_premium_waitlist", e.UpsellBanners = "upsell_banners"
				}(n || (n = {})),
				function(e) {
					e.AnimatedCard = "animatedCard", e.Badges = "badges", e.BlackHole = "blackHole", e.ClaimPoints = "claimPoints", e.Emojis = "emojis", e.FavoriteSeason = "favoriteSeason", e.GameStyle = "gameStyle", e.LFG = "lfg", e.NewUserWelcome = "newuserwelcome", e.WalletRegistration = "walletRegistration"
				}(s || (s = {}));
			const d = async (e, t, a) => l(e, t, a, !0), m = async (e, t, a) => l(e, t, a, !1), u = (e, t) => i(e, t, n.UpsellBanners, Object.keys(s).reduce((e, t) => (e[s[t]] = !1, e), {}))
		},
		"./src/reddit/helpers/governance/ethereum.ts": function(e, t, a) {
			"use strict";
			a.d(t, "e", (function() {
				return r
			})), a.d(t, "c", (function() {
				return o
			})), a.d(t, "d", (function() {
				return i
			})), a.d(t, "b", (function() {
				return c
			})), a.d(t, "a", (function() {
				return l
			})), a.d(t, "f", (function() {
				return b
			})), a.d(t, "g", (function() {
				return p
			})), a.d(t, "h", (function() {
				return v
			})), a.d(t, "i", (function() {
				return g
			}));
			a("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = a("./node_modules/fbt/lib/FbtPublic.js");

			function s() {
				return window.ethereum
			}

			function r() {
				const e = s();
				return !(!e || !e.isMetaMask)
			}

			function o() {
				const e = s();
				return e && e.selectedAddress || null
			}

			function i() {
				const e = s();
				return (null == e ? void 0 : e.networkVersion) || null
			}

			function c() {
				const e = s();
				if (!e) throw new Error("Please install a web3 provider, such as MetaMask");
				return o() ? Promise.resolve() : e.enable()
			}
			const l = 4001;
			async function d(e, t, n, r) {
				const [o, i] = await Promise.all([a.e("vendors~Avatar~CollectiblesShowcaseUnit~CryptoLibEthers~GovernanceTransferPointsModal~MarketplaceCla~cd1771e1").then(a.bind(null, "./node_modules/ethers/lib.esm/index.js")).then(e => e.ethers), t.then(e => e.abi)]);
				await c();
				const l = new o.providers.Web3Provider(s()).getSigner(),
					d = new o.Contract(e, i, l),
					m = await d[n](...r);
				return await m.wait()
			}
			const m = {
				abi: [{
					constant: !1,
					inputs: [{
						name: "to",
						type: "address"
					}, {
						name: "value",
						type: "uint256"
					}, {
						name: "data",
						type: "bytes"
					}],
					name: "send",
					outputs: [],
					payable: !1,
					stateMutability: "nonpayable",
					type: "function"
				}]
			};
			const u = 1;
			async function b(e, t, n, s, r) {
				const o = await a.e("vendors~Avatar~CollectiblesShowcaseUnit~CryptoLibEthers~GovernanceTransferPointsModal~MarketplaceCla~cd1771e1").then(a.bind(null, "./node_modules/ethers/lib.esm/index.js")).then(e => e.ethers),
					{
						BigNumber: i
					} = o,
					{
						hexlify: c,
						hexZeroPad: l,
						toUtf8Bytes: b
					} = o.utils,
					h = i.from(n).add(r),
					p = u,
					v = "0x" + [c(1)].concat([c(p), i.from(s).toHexString(), i.from(r).toHexString()].map(e => l(e, 32))).concat(c(b(""))).map(e => e.substr(2)).join("");
				return async function(e, t, a, n) {
					return d(e, Promise.resolve(m), "send", [t, a, n])
				}(e, t, h.toString(), v)
			}
			const h = {
				abi: [{
					constant: !1,
					inputs: [{
						name: "_subscriber",
						type: "address"
					}, {
						name: "_units",
						type: "uint16"
					}],
					name: "subscribe",
					outputs: [],
					payable: !1,
					stateMutability: "nonpayable",
					type: "function"
				}]
			};
			async function p(e, t, a) {
				await c();
				const s = o() || "";
				if (t.toLowerCase() !== s.toLowerCase()) throw new Error(n.fbt._("Please select your registered address in MetaMask: {subscriberAddress}", [n.fbt._param("subscriberAddress", t)], {
					hk: "3rehSL"
				}).toString());
				return d(e, Promise.resolve(h), "subscribe", [t, a])
			}

			function v(e) {
				const t = s();
				return new Promise((a, s) => {
					const r = JSON.stringify(e);
					t.sendAsync({
						method: "eth_signTypedData_v3",
						params: [t.selectedAddress, r],
						from: t.selectedAddress
					}, (e, t) => {
						if (e) s(e);
						else {
							const e = t && t.result;
							e ? a(e) : s({
								message: n.fbt._("No signature returned from ethereum provider.", null, {
									hk: "eiYBF"
								}).toString()
							})
						}
					})
				})
			}

			function g(e) {
				return new Promise((t, a) => {
					s().sendAsync({
						method: "metamask_watchAsset",
						params: {
							type: "ERC20",
							options: e
						},
						id: Math.round(1e5 * Math.random())
					}, (e, n) => {
						e || "error" in n ? a("There was an error tracking the token") : t()
					})
				})
			}
		},
		"./src/reddit/icons/svgs/ArrowRight/index.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/react/index.js"),
				s = a.n(n);

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => s.a.createElement("svg", r({
				viewBox: "0 0 11.4 11.4",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), s.a.createElement("g", null, s.a.createElement("path", {
				fill: "inherit",
				d: "m11.17929,5.99479c0.08081,-0.19519 0.08081,-0.41599 0,-0.61118c-0.0408,-0.0984 -0.0992,-0.1864 -0.17361,-0.2608l-4.79963,-4.79911c-0.31283,-0.3128 -0.81847,-0.3128 -1.1313,0c-0.31283,0.31279 -0.31283,0.81918 0,1.13118l3.43471,3.43433l-7.66949,0c-0.44244,0 -0.80007,0.3584 -0.80007,0.79999c0,0.44159 0.35763,0.79999 0.80007,0.79999l7.66949,0l-3.43471,3.43433c-0.31283,0.3128 -0.31283,0.81919 0,1.13118c0.15601,0.156 0.36083,0.2344 0.56565,0.2344c0.20482,0 0.40964,-0.0784 0.56565,-0.2344l4.79963,-4.79911c0.07441,-0.0744 0.13281,-0.1624 0.17361,-0.2608"
			})))
		},
		"./src/reddit/icons/svgs/CircleCheck/index.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/react/index.js"),
				s = a.n(n);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 21 21",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("path", {
				d: "M20.5 10.5C20.5 16.0228 16.0228 20.5 10.5 20.5C4.97715 20.5 0.5 16.0228 0.5 10.5C0.5 4.97715 4.97715 0.5 10.5 0.5C16.0228 0.5 20.5 4.97715 20.5 10.5ZM9.35975 14.8725L15.2398 8.71852L15.2418 8.72352C15.5868 8.36252 15.5868 7.77752 15.2418 7.41752C14.8968 7.05752 14.3388 7.05752 13.9938 7.41752L8.73675 12.9175L7.00675 11.1075C6.66175 10.7475 6.10375 10.7465 5.75875 11.1075C5.41375 11.4685 5.41375 12.0535 5.75875 12.4135L8.11175 14.8735C8.28475 15.0535 8.50975 15.1435 8.73675 15.1435C8.85356 15.143 8.96904 15.1187 9.07615 15.0721C9.18326 15.0256 9.27975 14.9576 9.35975 14.8725Z",
				fill: "inherit"
			}))
		},
		"./src/reddit/icons/svgs/DownvoteCircle/index.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/react/index.js"),
				s = a.n(n);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 16 16",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M10.5554 7.77144L7.88871 10.4381C7.81404 10.5128 7.71652 10.5493 7.619 10.5493C7.52224 10.5493 7.42471 10.5128 7.35004 10.4381L4.68338 7.77144C4.57443 7.66249 4.54166 7.49868 4.60109 7.3562C4.65976 7.21449 4.79843 7.12077 4.95233 7.12077H6.44338V5.06896C6.44338 4.85868 6.61404 4.68801 6.82433 4.68801H8.41443C8.62471 4.68801 8.79538 4.85868 8.79538 5.06896V7.12077H10.2857C10.4403 7.12077 10.579 7.21449 10.6377 7.3562C10.6971 7.49868 10.6643 7.66249 10.5554 7.77144M7.61926 1.14285C4.04821 1.14285 1.14307 4.048 1.14307 7.61904C1.14307 11.1893 4.04821 14.0952 7.61926 14.0952C11.1903 14.0952 14.0954 11.1893 14.0954 7.61904C14.0954 4.048 11.1903 1.14285 7.61926 1.14285"
			}))
		},
		"./src/reddit/icons/svgs/Link/index.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/react/index.js"),
				s = a.n(n);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", null, s.a.createElement("path", {
				fill: "inherit",
				d: "M18.4773727,1.51993937 C19.4600354,2.50135191 20.0013751,3.80656808 20.0013751,5.19554812 C20.0013751,6.58577837 19.4600354,7.89099453 18.4773727,8.87240707 C17.9885417,9.35998782 17.1984109,9.35998782 16.7095799,8.87240707 C16.2207489,8.38357611 16.2207489,7.59094484 16.7095799,7.10461429 C17.2196644,6.59452982 17.500961,5.91691759 17.500961,5.19554812 C17.500961,4.47542886 17.2196644,3.79781663 16.7095799,3.28773215 C15.6569056,2.23755822 13.9453721,2.23755822 12.8926978,3.28773215 L8.62324066,7.55843946 C7.57181653,8.6111138 7.57181653,10.3226473 8.62324066,11.3753216 C9.11207162,11.8629024 9.11207162,12.6555336 8.62324066,13.1431144 C8.37945029,13.3869048 8.05939728,13.509425 7.73934427,13.509425 C7.41929127,13.509425 7.09923826,13.3869048 6.85544788,13.1431144 C4.82886225,11.1152785 4.82886225,7.81723232 6.85544788,5.79064668 L11.124905,1.51993937 C13.1502404,-0.505396058 16.4495368,-0.507896472 18.4773727,1.51993937 Z M11.3753215,6.8540728 C11.8641524,6.36524184 12.6542833,6.36524184 13.1431142,6.8540728 C15.1696999,8.88065844 15.1696999,12.1799549 13.1431142,14.2065405 L8.87240693,18.4772478 C7.89099439,19.4586603 6.58452801,20 5.19679818,20 C3.80781814,20 2.50135177,19.4586603 1.51993923,18.4772478 C-0.50664641,16.4506622 -0.50664641,13.1513657 1.51993923,11.1247801 C2.00877019,10.6359491 2.80015125,10.6359491 3.28773201,11.1247801 C3.77656297,11.6136111 3.77656297,12.4037419 3.28773201,12.8925729 C2.23505767,13.9452472 2.23505767,15.6567807 3.28773201,16.709455 C4.34040635,17.7621294 6.05193981,17.7621294 7.10461415,16.709455 L11.3753215,12.4387477 C12.4279958,11.3860734 12.4279958,9.67453992 11.3753215,8.62186558 C10.8864905,8.13303462 10.8864905,7.34290376 11.3753215,6.8540728 Z"
			})))
		},
		"./src/reddit/icons/svgs/Post/index.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/react/index.js"),
				s = a.n(n);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, s.a.createElement("path", {
				d: "M5,15a1,1,0,0,1-1-1V11.17a1,1,0,0,1,.29-.7l8.09-8.09a1,1,0,0,1,1.41,0l2.83,2.83a1,1,0,0,1,0,1.41L8.54,14.71a1,1,0,0,1-.71.29Zm12,1a1,1,0,0,1,0,2H3a1,1,0,0,1,0-2Z"
			}))
		},
		"./src/reddit/icons/svgs/Refresh/index.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/react/index.js"),
				s = a.n(n);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20"
			}, s.a.createElement("path", {
				d: "M16.375 10A6.375 6.375 0 1 1 10 3.625h3.274L11.6 5.02l.8.96 3-2.5a.625.625 0 0 0 0-.96l-3-2.5-.8.96 1.674 1.4H10A7.625 7.625 0 1 0 17.625 10Zm-2.351-7L14 3.02v-.04Z"
			}))
		},
		"./src/reddit/selectors/gov.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return o
			})), a.d(t, "b", (function() {
				return i
			})), a.d(t, "c", (function() {
				return c
			})), a.d(t, "d", (function() {
				return l
			})), a.d(t, "g", (function() {
				return d
			})), a.d(t, "e", (function() {
				return m
			})), a.d(t, "f", (function() {
				return u
			}));
			var n = a("./src/reddit/contexts/PageLayer/index.tsx");
			const s = [],
				r = {},
				o = (e, t) => {
					const a = b(e, t);
					if (a) return a.mainHeader
				},
				i = (e, t) => {
					const a = b(e, t);
					return a && a.mainHeader ? a.mainHeader.price : "0"
				},
				c = (e, t) => {
					const a = b(e, t);
					return a && a.mainHeader ? {
						owner: a.mainHeader.owner,
						ownerId: a.mainHeader.ownerId
					} : r
				},
				l = (e, t) => t && t.subredditId ? (e.user.wallets[t.subredditId] || {}).latest : void 0,
				d = (e, t) => {
					const a = l(e, t),
						n = a && a.publicAddress;
					if (!n) throw new Error("No wallet address found");
					return n
				},
				m = (e, t) => {
					const a = l(e, t);
					return a && a.amount || "0"
				},
				u = (e, t) => {
					const a = Object(n.o)(e, t);
					return a && e.subreddits.gov.releaseNotes[a] || s
				},
				b = (e, t) => t.subredditId ? e.subreddits.gov.assets[t.subredditId] : void 0
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/GovernanceWalletRegistration.425a4bdcae92041c71c3.js.map