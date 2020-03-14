// https://www.redditstatic.com/desktop2x/reddit-components-Governance-ClaimPointsBanner.1b1b01860eb433bcd6b5.js
// Retrieved at 3/14/2020, 5:50:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-Governance-ClaimPointsBanner"], {
		"./src/reddit/actions/economics/banners/thunkedActions.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/reddit/endpoints/economics/banners.ts"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/reddit/actions/economics/banners/constants.ts");
			const i = Object(r.a)(o.c),
				a = Object(r.a)(o.d),
				c = Object(r.a)(o.a),
				d = Object(r.a)(o.b);
			n.d(t, "b", (function() {
				return l
			})), n.d(t, "a", (function() {
				return u
			})), n.d(t, "c", (function() {
				return m
			}));
			const l = e => async (t, n, r) => {
				let {
					apiContext: o
				} = r;
				const c = n();
				if (!c.user.account) return;
				if (c.economics.banners.dismissedBanners[e]) return;
				t(i(e));
				const d = await Object(s.b)(o(), e);
				t(a({
					subredditId: e,
					data: d
				}))
			}, u = (e, t) => async (n, r, o) => {
				let {
					apiContext: i
				} = o;
				n(c({
					subredditId: e,
					bannerType: t
				})), Object(s.c)(i(), e, t)
			}, m = (e, t) => async (n, r, o) => {
				let {
					apiContext: i
				} = o;
				n(d({
					subredditId: e,
					bannerType: t
				})), Object(s.e)(i(), e, t)
			}
		},
		"./src/reddit/components/Governance/ClaimPointsBanner/index.m.less": function(e, t, n) {
			e.exports = {
				banner: "sqPEOcJ0SwBG96JtVc4Yq",
				contents: "_1pCEOQkUnQVJQ63IuqksiU",
				title: "Z265gQXo3KUTqebmor3Ta",
				description: "_2JQ7LBFspPsn31FXv9nsEC",
				points: "_3FCnSyG777Oh2oei_J5H3B",
				illustration: "_1_Kco8ddM1V35bQ9o18PBY",
				close: "_300yASEPanDQT23o1ASDNb"
			}
		},
		"./src/reddit/components/Governance/ClaimPointsBanner/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/prettyPrintNumber/index.ts"),
				d = n("./src/reddit/actions/economics/banners/thunkedActions.ts"),
				l = n("./src/reddit/actions/economics/me/thunkedActions.ts"),
				u = n("./src/reddit/components/Governance/ClaimPointsModal/async.ts"),
				m = n("./src/reddit/controls/Button/index.tsx"),
				b = n("./src/reddit/endpoints/economics/banners.ts"),
				p = n("./src/reddit/helpers/governance/tokens.ts"),
				f = n("./src/reddit/icons/svgs/Close/index.tsx"),
				v = n("./src/reddit/selectors/economics.ts"),
				g = n("./src/reddit/selectors/gov.ts"),
				h = n("./src/reddit/selectors/subreddit.ts"),
				y = n("./src/reddit/components/Governance/ClaimPointsBanner/index.m.less"),
				x = n.n(y);
			const {
				fbt: j
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			class w extends r.a.Component {
				constructor() {
					super(...arguments), this.state = {
						modalVisible: !1
					}, this.showModal = () => {
						this.setState({
							modalVisible: !0
						})
					}
				}
				componentDidMount() {
					this.props.onFetchDismissedBanners(), this.props.onFetchMeData()
				}
				render() {
					const {
						bannerIsVisible: e,
						claimablePoints: t,
						className: n,
						karmaEarnedForClaimablePoints: s,
						subreddit: o,
						subredditId: i,
						tokenDisplayConversion: d,
						tokenName: l
					} = this.props;
					return e && t ? r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
						className: Object(a.a)(x.a.banner, n)
					}, r.a.createElement("div", {
						className: x.a.contents
					}, r.a.createElement("div", {
						className: x.a.title
					}, j._("Own a piece of {subreddit name}", [j._param("subreddit name", o.displayText)], {
						hk: "4mj4OW"
					})), r.a.createElement("div", {
						className: x.a.description
					}, j._("You have earned a piece of the community by earning {karma amount} karma on your posts and comments.", [j._param("karma amount", s)], {
						hk: "3hfaPH"
					})), r.a.createElement("div", {
						className: x.a.points
					}, Object(c.a)(Object(p.b)(t, d)), " ", l), r.a.createElement(m.f, {
						onClick: this.showModal
					}, j._("Claim Points", null, {
						hk: "17BVwS"
					}))), r.a.createElement("div", {
						className: x.a.illustration
					}), r.a.createElement(f.a, {
						className: x.a.close,
						onClick: this.props.onDismissBanner
					})), this.state.modalVisible && r.a.createElement(u.a, {
						subredditId: i,
						onClose: () => this.setState({
							modalVisible: !1
						})
					})) : null
				}
			}
			const P = Object(i.c)({
				bannerIsVisible: (e, t) => {
					let {
						subredditId: n
					} = t;
					return !1 === Object(v.g)(e, n, b.a.ClaimPoints)
				},
				claimablePoints: v.h,
				karmaEarnedForClaimablePoints: v.n,
				subreddit: h.P,
				tokenDisplayConversion: g.o,
				tokenName: g.p
			});
			t.default = Object(o.b)(P, (e, t) => {
				let {
					subredditId: n
				} = t;
				return {
					onDismissBanner: () => e(Object(d.a)(n, b.a.ClaimPoints)),
					onFetchDismissedBanners: () => e(Object(d.b)(n)),
					onFetchMeData: () => e(Object(l.a)())
				}
			})(w)
		},
		"./src/reddit/components/Governance/ClaimPointsModal/async.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const r = Object(s.a)({
				resolved: {},
				chunkName: () => "reddit-components-Governance-ClaimPointsModal",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => Promise.all([n.e("vendors~reddit-components-Governance-ClaimPointsModal"), n.e("reddit-components-Governance-ClaimPointsModal")]).then(n.bind(null, "./src/reddit/components/Governance/ClaimPointsModal/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Governance/ClaimPointsModal/index.tsx"
				}
			}, {
				ssr: !1
			});
			t.a = r
		},
		"./src/reddit/endpoints/economics/banners.ts": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s, r, o = n("./src/config.ts"),
				i = n("./src/reddit/endpoints/governance/requester.ts");
			async function a(e, t, n, s) {
				return Object(i.a)(e, {
					endpoint: "".concat(o.a.metaUrl, "/storage/").concat(t, "/me/").concat(n),
					method: "patch",
					data: s
				})
			}
			async function c(e, t) {
				const n = await async function(e, t, n) {
					return Object(i.a)(e, {
						endpoint: "".concat(o.a.metaUrl, "/storage/").concat(t, "/me/").concat(n),
						method: "get"
					})
				}(e, t, s.UpsellBanners);
				return n.ok && n.body || {}
			}
			async function d(e, t, n, r) {
					const o = await c(e, t),
						i = Object.assign({}, o, {
							[n]: r
						});
					return (await a(e, t, s.UpsellBanners, i)).ok ? i : o
				}! function(e) {
					e.SubredditPremiumWaitlist = "subreddit_premium_waitlist", e.UpsellBanners = "upsell_banners"
				}(s || (s = {})), n.d(t, "a", (function() {
					return r
				})), n.d(t, "b", (function() {
					return c
				})), n.d(t, "c", (function() {
					return l
				})), n.d(t, "e", (function() {
					return u
				})), n.d(t, "d", (function() {
					return m
				})),
				function(e) {
					e.AnimatedCard = "animatedCard", e.Badges = "badges", e.BlackHole = "blackHole", e.ClaimPoints = "claimPoints", e.Emojis = "emojis", e.FavoriteSeason = "favoriteSeason", e.GameStyle = "gameStyle", e.LFG = "lfg", e.NewUserWelcome = "newuserwelcome", e.StellarWalletRegistration = "stellarWalletRegistration", e.WalletRegistration = "walletRegistration"
				}(r || (r = {}));
			const l = async (e, t, n) => d(e, t, n, !0), u = async (e, t, n) => d(e, t, n, !1), m = (e, t) => a(e, t, s.UpsellBanners, Object.keys(r).reduce((e, t) => (e[r[t]] = !1, e), {}))
		},
		"./src/reddit/endpoints/governance/crypto.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "d", (function() {
				return a
			})), n.d(t, "e", (function() {
				return c
			})), n.d(t, "b", (function() {
				return d
			}));
			var s, r = n("./src/config.ts"),
				o = n("./src/reddit/endpoints/governance/requester.ts");

			function i(e) {
				switch (e) {
					case s.Ethereum:
						return "Ethereum Main Network";
					case s.Rinkeby:
						return "Rinkeby Test Network"
				}
				return e + " Network"
			}
			async function a(e, t, n) {
				return Object(o.a)(e, {
					method: "post",
					endpoint: "".concat(r.a.metaUrl, "/crypto/").concat(t, "/challenges"),
					data: {
						challengeType: "registration-challenge-EIP712",
						address: n
					}
				})
			}
			async function c(e, t, n) {
				return await Object(o.a)(e, {
					method: "post",
					endpoint: "".concat(r.a.metaUrl, "/crypto/").concat(t, "/registrations"),
					data: n
				})
			}
			async function d(e, t, n) {
				return await Object(o.a)(e, {
					method: "delete",
					endpoint: "".concat(r.a.metaUrl, "/crypto/").concat(t, "/registrations/").concat(n)
				})
			}! function(e) {
				e.Ethereum = "ethereum:1", e.Rinkeby = "ethereum:4", e.Stellar = "stellar"
			}(s || (s = {}))
		},
		"./src/reddit/helpers/governance/tokens.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return o
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "a", (function() {
				return a
			}));
			n("./node_modules/core-js/modules/es6.regexp.to-string.js");
			var s = n("./node_modules/bignumber.js/bignumber.js"),
				r = n("./src/lib/prettyPrintNumber/index.ts");

			function o(e, t) {
				const n = new s.BigNumber(e),
					r = new s.BigNumber(t);
				return n.dividedBy(r).decimalPlaces(2).toString()
			}

			function i(e, t) {
				return Object(r.b)(parseInt(o(e, t), 10))
			}

			function a(e, t) {
				const n = new s.BigNumber(e),
					r = new s.BigNumber(t);
				return n.multipliedBy(r).toFixed(0)
			}
		},
		"./src/reddit/selectors/experiments/pollsGA.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts"),
				o = n("./src/reddit/selectors/platform.ts"),
				i = n("./src/reddit/selectors/user.ts");
			const a = new Set(["pollstest", "whatssnoo"]),
				c = new Set(["ps4", "casualconversation", "stardewvalley", "knitting", "dccomics", "premierleague", "zerocarb", "survivor", "supergirltv", "superman", "teenmfa", "whatssnoo", "poll_testing", "nfl", "sanfranciscoanalog", "communityactivation", "temescal", "amitheproblem", "amithebuttface"]),
				d = e => a.has((Object(o.e)(e) || "").toLowerCase()) || c.has((Object(o.e)(e) || "").toLowerCase()) && Object(r.c)(e, {
					experimentEligibilitySelector: i.G,
					experimentName: s.ab
				}) === s.hb.Enabled
		},
		"./src/reddit/selectors/gov.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return u
			})), n.d(t, "c", (function() {
				return m
			})), n.d(t, "d", (function() {
				return b
			})), n.d(t, "e", (function() {
				return p
			})), n.d(t, "g", (function() {
				return f
			})), n.d(t, "h", (function() {
				return v
			})), n.d(t, "i", (function() {
				return g
			})), n.d(t, "j", (function() {
				return h
			})), n.d(t, "p", (function() {
				return y
			})), n.d(t, "q", (function() {
				return x
			})), n.d(t, "o", (function() {
				return j
			})), n.d(t, "l", (function() {
				return w
			})), n.d(t, "m", (function() {
				return P
			})), n.d(t, "s", (function() {
				return O
			})), n.d(t, "a", (function() {
				return k
			})), n.d(t, "f", (function() {
				return C
			})), n.d(t, "r", (function() {
				return _
			})), n.d(t, "n", (function() {
				return I
			})), n.d(t, "k", (function() {
				return B
			}));
			var s = n("./src/reddit/contexts/PageLayer/index.tsx"),
				r = n("./src/reddit/endpoints/governance/crypto.ts"),
				o = n("./src/reddit/featureFlags/index.ts"),
				i = n("./src/reddit/selectors/experiments/pollsGA.ts"),
				a = n("./src/reddit/selectors/postCreations.ts");
			const c = [],
				d = {},
				l = {
					filled: "img/communityPoints/default_filled.png",
					grey: "img/communityPoints/default_grey.png"
				},
				u = (e, t) => {
					let {
						subredditId: n
					} = t;
					const s = O(e, {
						subredditId: n
					});
					return s && s.extra && s.extra.contracts && s.extra.contracts.harberger ? s.extra.contracts.harberger : {
						address: void 0,
						decimals: void 0,
						image: void 0,
						taxRate: .01,
						token: void 0
					}
				},
				m = (e, t) => {
					const n = w(e, t);
					if (n) return n.mainHeader
				},
				b = (e, t) => {
					const n = w(e, t);
					return n && n.mainHeader ? n.mainHeader.price : "0"
				},
				p = (e, t) => {
					const n = w(e, t);
					return n && n.mainHeader ? {
						owner: n.mainHeader.owner,
						ownerId: n.mainHeader.ownerId
					} : d
				},
				f = (e, t) => t && t.subredditId ? (e.user.wallets[t.subredditId] || {}).latest : void 0,
				v = (e, t) => {
					if (Object(i.a)(e)) {
						const t = Object(a.g)(e);
						return !!t.allowedPostTypes && t.allowedPostTypes.polls
					}
					const n = o.d.spPolls(e) || o.d.spKarmaPoints(e),
						s = t && t.subredditId ? e.subreddits.gov.meta[t.subredditId] : void 0;
					if (s) {
						const e = !!s.polls && !1 === s.polls.canCreate;
						return n && !e
					}
					return n
				},
				g = (e, t) => {
					return (e.users.publicWallets[t.userId] || {})[t.subredditId]
				},
				h = (e, t) => {
					const n = Object(s.m)(e, t);
					return n && e.subreddits.gov.releaseNotes[n] || c
				},
				y = (e, t) => t && t.subredditId && (e.subreddits.gov.meta[t.subredditId] || {}).name || "Subreddit Points",
				x = (e, t) => t && t.subredditId && (e.subreddits.gov.meta[t.subredditId] || {}).images || l,
				j = (e, t) => {
					const n = _(e, t);
					return n && n.decimals ? "1" + "0".repeat(n.decimals) : "1"
				},
				w = (e, t) => t.subredditId ? e.subreddits.gov.assets[t.subredditId] : void 0,
				P = (e, t) => t && t.subredditId ? e.subreddits.gov.meta[t.subredditId] : void 0,
				O = (e, t) => {
					const n = P(e, t);
					return n && n.walletProvider
				},
				k = (e, t) => {
					const n = O(e, t),
						s = P(e, t);
					return n && n.provider || s && s.provider
				},
				C = (e, t) => {
					const n = k(e, t);
					return n === r.a.Ethereum || n === r.a.Rinkeby
				},
				_ = (e, t) => {
					const n = O(e, t),
						s = k(e, t);
					if (n && !n.inTransition && s === r.a.Stellar) return {
						address: n.extra && n.extra.issuerAddress || "",
						decimals: n.extra && n.extra.decimals || 7,
						symbol: n.extra && n.extra.token || "PHOTON"
					};
					const o = n && n.extra && n.extra.contracts,
						i = o && o.unlocked;
					return i && {
						address: i.address,
						symbol: i.token || "",
						decimals: i.decimals || 18,
						image: i.image
					}
				},
				I = (e, t) => {
					let {
						subredditId: n
					} = t;
					const s = O(e, {
						subredditId: n
					});
					return s && s.extra && s.extra.contracts && s.extra.contracts.subscriptions ? s.extra.contracts.subscriptions : {
						address: void 0
					}
				},
				B = (e, t) => {
					const n = P(e, t);
					return !!n && !!n.walletProvider && !n.walletProvider.inTransition
				}
		}
	}
]);
//# sourceMappingURL=reddit-components-Governance-ClaimPointsBanner.1b1b01860eb433bcd6b5.js.map