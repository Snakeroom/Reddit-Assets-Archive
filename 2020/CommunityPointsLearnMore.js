// https://www.redditstatic.com/desktop2x/CommunityPointsLearnMore.fe21cb4534f2ff8dbae3.js
// Retrieved at 4/23/2020, 12:40:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CommunityPointsLearnMore"], {
		"./src/reddit/components/Governance/TransactionModals/BaseTransactionModal/Bullet.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return s
			}));
			var n = a("./node_modules/react/index.js"),
				o = a.n(n),
				r = a("./src/reddit/components/Governance/TransactionModals/BaseTransactionModal/index.m.less"),
				i = a.n(r);
			const s = e => o.a.createElement("div", {
				className: i.a.bullet
			}, o.a.createElement("div", {
				className: i.a.circle
			}, e.index), e.children)
		},
		"./src/reddit/components/Governance/TransactionModals/BaseTransactionModal/QRCode.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/qrcode/lib/browser.js"),
				o = a.n(n),
				r = a("./node_modules/react/index.js"),
				i = a.n(r),
				s = a("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = a("./src/reddit/models/Theme/NewColorSystem/index.ts");
			class c extends i.a.Component {
				constructor() {
					super(...arguments), this.state = {
						dataURL: null
					}
				}
				componentDidMount() {
					this.updateDataURL()
				}
				componentDidUpdate(e) {
					e.url !== this.props.url && this.updateDataURL()
				}
				async updateDataURL() {
					const e = await o.a.toDataURL(this.props.url, {
						color: {
							dark: this.props.color || Object(l.a)(this.props).button,
							light: Object(l.a)(this.props).body
						},
						margin: 0,
						width: 176
					});
					this.setState({
						dataURL: e
					})
				}
				render() {
					const {
						dataURL: e
					} = this.state;
					return e ? i.a.createElement("img", {
						src: e
					}) : null
				}
			}
			t.a = Object(s.a)(c)
		},
		"./src/reddit/components/Governance/TransactionModals/BaseTransactionModal/index.m.less": function(e, t, a) {
			e.exports = {
				container: "zf2hn2CERT9hR1pMinJ8F",
				header: "_3Qbr92L8VyuinXjEu3tL3Z",
				title: "_3bzQcWx2T0t87zOlgxrRKU",
				closeButton: "_22lrdZNOZAr7T7zmwmjUvJ",
				body: "_3Gcx8rw4-_lVDd-C1xmCEi",
				leftSection: "_3YqVpshpU6XQk203i6QdDy",
				sectionHeader: "_1ubUpPIvDdZW-u31PFTQzQ",
				content: "_1vBcEJHUketYOZJIkZpJEH",
				bullet: "_1NkUPpb7srAhbim5_nyFUH",
				circle: "_3dmqOAtE4YgxGinHtv6QZs",
				rightSection: "_2KqtJ5hLjiAZnv3xLL4_M6",
				qrCode: "_14NzP1hK14fTKLhwIn2aDG",
				amount: "yAJDmHckBS4VSNkr7oGi4"
			}
		},
		"./src/reddit/components/Governance/TransactionModals/BaseTransactionModal/index.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/react/index.js"),
				o = a.n(n),
				r = a("./src/higherOrderComponents/asModal/index.tsx"),
				i = a("./src/reddit/icons/svgs/Close/index.tsx"),
				s = a("./src/reddit/components/Governance/TransactionModals/BaseTransactionModal/QRCode.tsx"),
				l = a("./src/reddit/components/Governance/TransactionModals/BaseTransactionModal/index.m.less"),
				c = a.n(l);
			const {
				fbt: m
			} = a("./node_modules/fbt/lib/FbtPublic.js");
			t.a = Object(r.a)((function(e) {
				const {
					amount: t,
					content: a,
					header: n,
					onClose: r,
					qrUrl: l,
					title: m
				} = e;
				return o.a.createElement("div", {
					className: c.a.container
				}, o.a.createElement("header", {
					className: c.a.header
				}, o.a.createElement("div", {
					className: c.a.title
				}, m), o.a.createElement(i.a, {
					className: c.a.closeButton,
					onClick: r
				})), o.a.createElement("div", {
					className: c.a.body
				}, o.a.createElement("section", {
					className: c.a.leftSection
				}, o.a.createElement("div", {
					className: c.a.sectionHeader
				}, n), o.a.createElement("div", {
					className: c.a.content
				}, a)), o.a.createElement("section", {
					className: c.a.rightSection
				}, o.a.createElement("div", {
					className: c.a.qrCode
				}, o.a.createElement(s.a, {
					url: l
				})), t && o.a.createElement("div", {
					className: c.a.amount
				}, t))))
			}))
		},
		"./src/reddit/pages/meta/CommunityPointsLearnMorePage/Carousel/index.m.less": function(e, t, a) {
			e.exports = {
				carousel: "_3vQyUlP9YLzmdL2rsquLS-",
				imageContainer: "_2fHEqYCy2KASrMaQgflk9d",
				image: "_3z5mBSNxkSLnbR6usgbqpT",
				before: "_2JttHHaD7zf0Mbh1a5nRuW",
				after: "_39ks1t7udSkwDSJapMxhoe",
				textContainer: "DCfzAVcgI71D_KyuFWTCt",
				text: "_7rNTYtq4K9spIZ7RPkHx0",
				hiddenText: "TE2V4h2gDawl2Jss4N8Z7",
				pager: "_3FdYuxiANbzVWGxeXemc_M",
				progressDot: "fm3copvWWgfUMqVsK6uEV",
				active: "_1sREUpzXrLYpeFbGcvHOKm",
				nextButton: "_2qRdqJkJATZDQvbXLgMgc-",
				arrowIcon: "_2BK1VOf0hmpl3IcVh25aod"
			}
		},
		"./src/reddit/pages/meta/CommunityPointsLearnMorePage/FAQ/index.m.less": function(e, t, a) {
			e.exports = {
				container: "_3bNZiIgvIum_hDI1TilGTx",
				fadeIn: "_2rvIUweb3EMODFDlq9rJTQ",
				title: "_3I_d5VrdxOFUhdE6IPlPh4",
				section: "_2peLYUOiACmTnA7p9FZ1Jh",
				sectionHeader: "_2K7kn5B6IkPYFzfmmUiIap",
				expando: "ePiUN_2LVWXFzF2ZhxZiV",
				expanded: "FRM4ER3bBCI1pEZUjCsxN",
				chevron: "ZvsIr_8zCOQls_vqYzb0J",
				text: "_2No-V3Gr33A6vWSzaDbfsA",
				header: "yzR3oAJYm5J94P7G3z0Eq",
				paragraph: "_2n_6mWY4iOXlHlbW7URxzy",
				listItem: "UYnsZ9RJHABFxr_IFpcvF",
				italic: "nnQIXeG7rBndQIDg7aUFN"
			}
		},
		"./src/reddit/pages/meta/CommunityPointsLearnMorePage/index.m.less": function(e, t, a) {
			e.exports = {
				container: "_2hno-FBggC-9UCyeqfnHlk",
				title: "zQi0l9mx781pHleYA-bKr",
				createWalletButton: "gETgIb53JDdIzaJi4jKcp",
				fadeIn: "DJ8a0-JdriWdgwui80YcV"
			}
		},
		"./src/reddit/pages/meta/CommunityPointsLearnMorePage/index.tsx": function(e, t, a) {
			"use strict";
			a.r(t);
			var n = a("./node_modules/react/index.js"),
				o = a.n(n),
				r = a("./node_modules/react-redux/es/index.js"),
				i = a("./node_modules/react-router-redux/es/index.js"),
				s = a("./src/lib/getParsedUserAgent/index.ts"),
				l = a("./node_modules/reselect/es/index.js"),
				c = a("./src/higherOrderComponents/asModal/index.tsx"),
				m = a("./src/lib/addQueryParams/index.ts"),
				d = a("./src/reddit/selectors/user.ts"),
				u = a("./src/reddit/components/Governance/TransactionModals/BaseTransactionModal/index.tsx"),
				h = a("./src/reddit/components/Governance/TransactionModals/BaseTransactionModal/Bullet.tsx");
			const {
				fbt: p
			} = a("./node_modules/fbt/lib/FbtPublic.js");
			const y = Object(l.c)({
				userId: e => {
					const t = Object(d.i)(e);
					return t ? t.id : ""
				}
			});
			var b = Object(c.a)(Object(r.b)(y)((function(e) {
					const {
						onClose: t,
						userId: a
					} = e;
					return o.a.createElement(u.a, {
						onClose: t,
						title: p._("Create Your Wallet on Your Smartphone", null, {
							hk: "3N8BQk"
						}),
						header: p._("Use the mobile app to create a Wallet", null, {
							hk: "2w5lwK"
						}),
						content: o.a.createElement(o.a.Fragment, null, o.a.createElement(h.a, {
							index: "1"
						}, p._("Get the official Reddit app for iOS or Android", null, {
							hk: "420pUH"
						})), o.a.createElement(h.a, {
							index: "2"
						}, p._("Log in to your Reddit account", null, {
							hk: "3G7IZ2"
						})), o.a.createElement(h.a, {
							index: "3"
						}, p._("Open your Camera, scan the QR code & follow the URL", null, {
							hk: "FWSNM"
						})), o.a.createElement(h.a, {
							index: "4"
						}, p._("Or, open the Reddit app and tap your profile photo at the top. Then tap Wallet, and follow the instructions", null, {
							hk: "4e7EBq"
						}))),
						qrUrl: Object(m.a)("http://www.reddit.com/wallet/", {
							u: a
						})
					})
				}))),
				w = a("./src/reddit/controls/Button/index.tsx"),
				f = a("./src/reddit/selectors/subscriptions.ts"),
				E = (a("./node_modules/core-js/modules/es6.regexp.to-string.js"), a("./node_modules/fbt/lib/FbtPublic.js")),
				g = a("./src/config.ts"),
				v = a("./src/lib/classNames/index.ts"),
				k = e => o.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 16 16",
					version: "1.1",
					xmlns: "http://www.w3.org/2000/svg"
				}, o.a.createElement("path", {
					d: "M8.56569 0.234315C8.25327 -0.0781049 7.74673 -0.0781049 7.43431 0.234315C7.12189 0.546734 7.12189 1.05327 7.43431 1.36569L13.2686 7.2H0.8C0.358172 7.2 0 7.55817 0 8C0 8.44183 0.358172 8.8 0.8 8.8H13.2686L7.43431 14.6343C7.12189 14.9467 7.12189 15.4533 7.43431 15.7657C7.74673 16.0781 8.25327 16.0781 8.56569 15.7657L15.7657 8.56569C16.0781 8.25327 16.0781 7.74673 15.7657 7.43431L8.56569 0.234315Z"
				})),
				x = a("./src/reddit/pages/meta/CommunityPointsLearnMorePage/Carousel/index.m.less"),
				C = a.n(x);

			function _(e) {
				let t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
				return "".concat(g.a.assetPath, "/img/communityPoints/learnMore/slide").concat(e).concat(t ? "@2x" : "", ".png")
			}
			const P = [() => E.fbt._("In the beginning, the Internet was a free frontier — a land of openness, creativity and possibility.", null, {
				hk: "1ay1AQ"
			}), () => E.fbt._("Early settlers discovered many like them. Together, they built communities that became the foundation of the free Internet.", null, {
				hk: "1kD7Rw"
			}), () => E.fbt._("Then the amusement parks opened. Drawn to glitzy rides and manicured lawns, millions abandoned the frontier.", null, {
				hk: "Vag1G"
			}), () => E.fbt._("Everyone loved the parks. Until they built walls and billboards. And spied, manipulated, and censored the people.", null, {
				hk: "3BtgC1"
			}), () => E.fbt._("Today, the free frontier lays in ruins. Walled gardens dominate the landscape, with people trapped inside.", null, {
				hk: "2zF65T"
			}), () => E.fbt._("What if this is not how the Internet ends? What if there were a way for people to take back power over their communities?", null, {
				hk: "WscWb"
			}), () => E.fbt._("Armed with this new power, people could band together and break out of the walled gardens.", null, {
				hk: "1NbUsx"
			}), () => E.fbt._("People could claim back their rightful ownership of the frontier. They can rebuild indepedent communities, stronger than before.", null, {
				hk: "2AG8g0"
			}), () => E.fbt._("Liberated from control, people could collaborate on decisions and choose their own future.", null, {
				hk: "32iAQq"
			}), () => E.fbt._("The frontier would finally return to a vibrant world of diverse, prosperous, and independent online communities.", null, {
				hk: "2eLLPc"
			}), () => E.fbt._("In this new dawn, the Internet could once again be free. We don’t have all the answers, but we believe together we can find a way. Join us.", null, {
				hk: "1OMZ5G"
			})];
			var T = function(e) {
					const [t, a] = Object(n.useState)(0), r = P.map(e => e()), i = r.map(e => e.toString()).reduce((e, t) => t.length > e.length ? t : e, "");
					return o.a.createElement("div", {
						className: C.a.carousel
					}, o.a.createElement("div", {
						className: C.a.imageContainer
					}, P.map((e, a) => o.a.createElement("img", {
						src: _(a),
						srcSet: "".concat(_(a, !1), ", ").concat(_(a), " 2x"),
						className: Object(v.a)(C.a.image, {
							[C.a.before]: a < t,
							[C.a.active]: a === t,
							[C.a.after]: a > t
						}),
						key: a
					}))), o.a.createElement("div", {
						className: C.a.textContainer
					}, o.a.createElement("div", {
						className: C.a.hiddenText
					}, i), r.map((e, a) => o.a.createElement("div", {
						className: Object(v.a)(C.a.text, {
							[C.a.before]: a < t,
							[C.a.active]: a === t,
							[C.a.after]: a > t
						}),
						key: a
					}, e))), t < P.length - 1 && o.a.createElement("div", {
						className: C.a.pager
					}, P.map((e, n) => o.a.createElement("button", {
						key: n,
						onClick: () => a(n)
					}, o.a.createElement("div", {
						className: Object(v.a)(C.a.progressDot, {
							[C.a.active]: n === t
						})
					}))), o.a.createElement("button", {
						"aria-label": "Next",
						className: C.a.nextButton,
						onClick: () => {
							a(t + 1), t + 2 === P.length && e.onComplete()
						}
					}, o.a.createElement(k, {
						className: C.a.arrowIcon
					}))))
				},
				R = a("./src/lib/lessComponent.tsx"),
				N = a("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				M = a("./src/reddit/pages/meta/CommunityPointsLearnMorePage/FAQ/index.m.less"),
				I = a.n(M);
			const O = R.a.h5("header", I.a),
				L = R.a.p("paragraph", I.a),
				j = R.a.li("listItem", I.a),
				B = R.a.i("italic", I.a);

			function A(e) {
				const [t, a] = Object(n.useState)(!1);
				return o.a.createElement("div", {
					className: I.a.section
				}, o.a.createElement("div", {
					className: I.a.sectionHeader,
					onClick: () => a(!t)
				}, e.header, o.a.createElement("button", {
					className: Object(v.a)(I.a.expando, {
						[I.a.expanded]: t
					}),
					"aria-label": "Expand"
				}, o.a.createElement(N.a, {
					className: I.a.chevron
				}))), t && o.a.createElement("div", {
					className: I.a.text
				}, e.children))
			}
			var U = function() {
					return o.a.createElement("div", {
						className: I.a.container
					}, o.a.createElement("div", {
						className: I.a.title
					}, "Frequently Asked Questions"), o.a.createElement(A, {
						header: "What are Community Points"
					}, o.a.createElement(L, null, "Community Points are a new way dedicated members can own a piece of their favorite communities. Points give users a piece of the value of a subreddit and a say in important community issues."), o.a.createElement(O, null, "The more you give, the more you get"), o.a.createElement(L, null, "Members of a community can earn Community Points by consistently contributing quality posts and comments. The more upvotes you receive, the more Points you get, and the more of the subreddit you own."), o.a.createElement(O, null, "Hoard your Points, or put them to use"), o.a.createElement(L, null, "Save your Community Points, or use them to access exclusive community features such as badges, custom emojis, and GIFs in comments."), o.a.createElement(O, null, "You have control"), o.a.createElement(L, null, "Your Community Points exist outside of Reddit on the Ethereum blockchain, where only you can control them. (Just like Bitcoin.) Reddit can’t take your points away or create rules for what you do with them."), o.a.createElement(O, null, "For the community, by the community"), o.a.createElement(L, null, "Reddit’s communities are creative, and often use the tools we give them in ways we never imagined. We’re sure Community Points will be the same. Communities that decide to use Community Points can choose what to call their Points, what they look like, and how they are used in the community. It’s up to you and your community to decide how to use Community Points, and what they’ll mean for you.")), o.a.createElement(A, {
						header: "Reputation"
					}, o.a.createElement(L, null, "Right now it’s hard to tell which members of a community contribute the most. Community Points provide a way for people who are already dedicated to a community to stand out and take on an even larger role."), o.a.createElement(L, null, "Point balances will be displayed next to members’ usernames so that it’s easy for other redditors to see who the big contributors are.")), o.a.createElement(A, {
						header: "Tipping & Transfers"
					}, o.a.createElement(L, null, "Community Points also provide a way for community members to spread the love and share ownership."), o.a.createElement(O, null, "Leave a tip"), o.a.createElement(L, null, "If someone makes a great post or comment, tipping with points lets you reward their contribution in a way that goes beyond upvotes and awards."), o.a.createElement(O, null, "Trade and transfer"), o.a.createElement(L, null, "Community Points can also be transferred to other redditors or anyone with an Ethereum wallet.")), o.a.createElement(A, {
						header: "Memberships"
					}, o.a.createElement(L, null, "Anyone can use community points to upgrade their status by purchasing a Special Membership that comes with fun perks."), o.a.createElement("ul", null, o.a.createElement(j, null, "Badges: Highlight key contributors with colorful icons next to their usernames."), o.a.createElement(j, null, "Animated emojis: Help members express themselves with custom community animations."), o.a.createElement(j, null, "GIFs: Allow members to use animated images in their comments.")), o.a.createElement(L, null, "When members use Community Points to buy a special membership, the points don’t go to Reddit. Instead, the points are destroyed or burned, so that the community’s share of points goes up. In this way, a special membership is a win-win for the individual and the community."), o.a.createElement(L, null, "On top of that, members who don’t have Community Points can still buy special memberships with cash. In this case, Reddit will burn some Community Points on their behalf.")), o.a.createElement(A, {
						header: "Voting"
					}, o.a.createElement(L, null, "With great power comes great responsibility. Owning part of a community also means members get more say in community polls."), o.a.createElement(L, null, "Communities that use Community Points can view their poll results in two ways:"), o.a.createElement("ul", null, o.a.createElement(j, null, "The normal count, where one member gets one vote."), o.a.createElement(j, null, "The weighted count, where members get one vote for every point they have.")), o.a.createElement(L, null, "This means core community members, who have earned points for their contributions, can have more say. And moderators can quickly see how these main contributors feel."), o.a.createElement(O, null, "Can someone buy the vote then?"), o.a.createElement(L, null, "No. To keep things fair, a person's weight in a poll is capped by the total number of points they've ever earned. Even if they receive additional points from tips or transfers, their vote can never exceed the number of points they received from official distributions.")), o.a.createElement(A, {
						header: "Distribution"
					}, o.a.createElement(L, null, "Ok, now it’s time for the nitty-gritty details..."), o.a.createElement(L, null, "Community Points are distributed monthly based on contributions members make to the community. Sounds easy enough, but there’s a review and publishing process so communities can weigh in."), o.a.createElement(O, null, "Making a list, and checking it twice"), o.a.createElement(L, null, "Every four weeks, Reddit will publish a list of how much community karma each member earned during that period. The community has a week to review the list and propose any changes."), o.a.createElement(L, null, "If they want to make changes, the community needs to publish an updated list and use a poll to approve it. If the new list gets the votes, then it’s good to go."), o.a.createElement(O, null, "Signing on the dotted line"), o.a.createElement(L, null, "Reddit publishes the final list and adds its signature for each member who has a wallet. Members without a wallet, will get their sign off once they create one. (But they only have six months to claim their points.)"), o.a.createElement(L, null, "Reddit’s signature is required because it’s what’s used to claim Community Points on the blockchain."), o.a.createElement(O, null, "Everyone gets their fair share"), o.a.createElement(L, null, "Each month, a share of Community Points goes to people who contribute to the community in other ways. Moderators get a 10% share, Reddit gets 20%, and another 20% will be reserved for the broader Reddit community."), o.a.createElement(O, null, "Get in early to get in big"), o.a.createElement(L, null, "The number of Community Points distributed each month decreases over time and has a maximum cap. The initial distribution will be 50 million Points and will be distributed based on all-time community karma."), o.a.createElement(L, null, "Then, over the first year, another 50 million Community Points will be distributed. Over time, the amount distributed every cycle will continue to decrease so that the total number of distributed will approach 250 million."), o.a.createElement(O, null, "Burn and churn"), o.a.createElement(L, null, "In addition to the regular distribution, half of each month’s burned Community Points are reintroduced into the next month’s distribution. This helps ensure that distribution amounts will level off at some point.")), o.a.createElement(A, {
						header: "Wallet"
					}, o.a.createElement(L, null, "Community Points exist outside of Reddit, and you can use many blockchain-enabled tools to interact with them. However, the best place to view, spend and claim your points is right inside the Reddit app, with the new Wallet section. Once you’re a member of a community that’s using Community Points, you’ll have access to your wallet."), o.a.createElement(O, null, "Manage your points"), o.a.createElement(L, null, "In your Wallet, you can view your point balances from multiple communities, claim any new points you’ve earned, and buy things like special memberships."), o.a.createElement(O, null, "Access the Ethereum blockchain"), o.a.createElement(L, null, "When your Wallet is created, it generates a public address and a private key. The public address is your address on the Ethereum blockchain where your Community Points are stored. The private key is the only way to access and use your Community Points."), o.a.createElement(O, null, "Have complete control"), o.a.createElement(L, null, "Only you control your private key. Reddit only knows your public address, so we can check your balance and give you new points. We can’t take your points away or create rules for what you do with them."), o.a.createElement(O, null, "Points are public"), o.a.createElement(L, null, "Because Points are on a public blockchain, your point balances and transactions are fully public and tied to your Reddit username. Be careful when transferring your points to or from other wallets you own that might be connected to your real identity.")), o.a.createElement(A, {
						header: "Backup and Recovery"
					}, o.a.createElement(L, null, "It’s essential to keep your Community Points safe, so we’ve created a few ways to secure your wallet."), o.a.createElement(L, null, "The private key that controls your wallet is stored on your phone. That means, if you don’t have a backup and you lose your phone, you won’t be able to access your wallet or your Community Points. (Even Reddit can’t help you.) But you can secure your account and create a backup in one of two ways:"), o.a.createElement("ul", null, o.a.createElement(j, null, "Store a secure, encrypted backup of your private key on Reddit. You’ll just need to create a wallet password that’s different from your Reddit password."), o.a.createElement(j, null, "Manually protect your wallet, by generating a twelve-word recovery phrase that you’ll store in a safe place.")), o.a.createElement(L, null, "Never give anyone else your wallet password or your recovery phrase. Reddit employees will never ask you for them either.")), o.a.createElement(A, {
						header: "On the Blockchain"
					}, o.a.createElement(L, null, "Your Community Points exist outside of Reddit on the Ethereum blockchain, where they are owned and controlled by you. (Just like Bitcoin.)"), o.a.createElement("ul", null, o.a.createElement(j, null, "Community Points are stored as standard ERC-20 tokens on the Ethereum blockchain, so they’re interoperable with existing blockchain tools."), o.a.createElement(j, null, "Ethereum is a public blockchain that Reddit doesn’t control. This way, you can use your points independently of Reddit without having to get our permission to use them."), o.a.createElement(j, null, "Community Points are owned pseudonymously. Nothing on the Ethereum network connects to your real name or real identity."))), o.a.createElement(A, {
						header: "How is this different from Karma?"
					}, o.a.createElement(L, null, "TL;DR Reddit controls karma, and communities control Community Points."), o.a.createElement(L, null, "Karma is a centralized score that reflects how much a redditor has contributed across all of Reddit. It is earned through upvotes on posts and comments. Redditors cannot trade karma or use it for other purposes. Karma is also owned and operated by Reddit, not by redditors."), o.a.createElement(L, null, "Community Points are a ", o.a.createElement(B, null, "decentralized"), " blockchain token that represents ownership in a community. They are stored outside of Reddit, can be sent and received freely, and can be used for any number of purposes within a community. If the community leaves Reddit or if Reddit disappears entirely, Community Points and the record of everyone’s ownership will continue to exist.")), o.a.createElement(A, {
						header: "What about Vote Manipulation and Karma Farming?"
					}, o.a.createElement(L, null, "Reddit’s site-wide policies strictly prohibit vote manipulation, and we have dedicated teams and technology in place to detect and mitigate things such as spam and abuse. Redditors who attempt to manipulate votes may be temporarily or permanently banned from a community and/or the site."), o.a.createElement(L, null, "Regarding Community Points, any redditor banned from the community (or site-wide) will not be awarded Community Points from that community in future distributions. If a non-banned redditor isn’t acting in good faith, the community can also vote on an updated karma CSV to make changes to the distribution. This empowers the community to take corrective measures in cases where Community Points are earned in bad faith."), o.a.createElement(L, null, "Like everything on Reddit, this is always evolving, so we’ll continue to evaluate and explore alternative ways to stop any abuse.")))
				},
				D = a("./src/reddit/pages/meta/CommunityPointsLearnMorePage/index.m.less"),
				W = a.n(D);
			const {
				fbt: F
			} = a("./node_modules/fbt/lib/FbtPublic.js"), S = ["t5_2l3wpx", "t5_2f1ola", "t5_2j7xd9"];
			t.default = function() {
				const e = Object(r.d)(f.b),
					[t, a] = Object(n.useState)(!1),
					[l, c] = Object(n.useState)(!1),
					m = Object(r.d)(s.e),
					d = Object(r.c)();
				return S.some(t => e.includes(t)) ? o.a.createElement("div", {
					className: W.a.container
				}, o.a.createElement("div", {
					className: W.a.title
				}, F._("A New Frontier", null, {
					hk: "2PAfqm"
				})), o.a.createElement(T, {
					onComplete: () => a(!0)
				}), t && o.a.createElement(o.a.Fragment, null, o.a.createElement(w.f, {
					className: W.a.createWalletButton,
					onClick: () => {
						m ? d(Object(i.b)("/wallet/")) : c(!0)
					}
				}, F._("Create My Wallet", null, {
					hk: "17EJkT"
				})), o.a.createElement(U, null)), l && o.a.createElement(b, {
					onClose: () => c(!1)
				})) : null
			}
		}
	}
]);
//# sourceMappingURL=CommunityPointsLearnMore.fe21cb4534f2ff8dbae3.js.map