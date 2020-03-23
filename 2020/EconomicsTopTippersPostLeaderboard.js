// https://www.redditstatic.com/desktop2x/EconomicsTopTippersPostLeaderboard.d96f85883276af853cf9.js
// Retrieved at 3/23/2020, 6:20:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["EconomicsTopTippersPostLeaderboard"], {
		"./src/lib/currency/centsToDollars/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var n = s("./src/lib/currency/cleanNumber/index.ts");

			function a(e, t) {
				const s = Object(n.a)(e),
					a = parseInt(s) / 100;
				return Math.floor(a) !== a || t ? a.toFixed(2) : String(a)
			}
		},
		"./src/lib/currency/cleanNumber/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			s("./node_modules/core-js/modules/es6.regexp.replace.js");

			function n(e) {
				return e.replace(/[^0-9.]/g, "").replace(/^0+/, "") || "0"
			}
		},
		"./src/lib/ntext/index.ts": function(e, t, s) {
			"use strict";

			function n(e, t, s) {
				return s || (s = "".concat(t, "s")), 1 === e ? "".concat(e, " ").concat(t) : "".concat(e, " ").concat(s)
			}
			s.d(t, "a", (function() {
				return n
			}))
		},
		"./src/reddit/components/Economics/FTUE/TopTippersBenefits/Carousel/DistinguishedComment/index.m.less": function(e, t, s) {
			e.exports = {
				badge: "_3zl3levpPuNIlK4FeWsIQx",
				comment: "_3FyjD35QqTlE98FsBlC-7c",
				container: "_33Vsp8m1oRbTk1FKpH-2kY",
				flatlist: "_36fT5DEvAnoVG-qBaN255k",
				flatlistItem: "_1BwIFmmvf4QqnjAFrWtbj2",
				flatlistIcon: "_1vPN9QiS3L7uapbfTtPOoi",
				menuIcon: "_3f3_XW8-9WB8uURiBqpLiX",
				timestamp: "yK03L3ljE2ZyyMdBvnA2a",
				userDisplay: "_3DvQiRMoEVgdOom3edaGFW",
				username: "_2WLIs1s96qUaH_t40MbGZI",
				votes: "_3wuA5mUAcg9ZKsk6CeS0S8",
				voteIcon: "_2w0vBylcirywfdtBW90P2t"
			}
		},
		"./src/reddit/components/Economics/FTUE/TopTippersBenefits/Carousel/GenerousSupporters/index.m.less": function(e, t, s) {
			e.exports = {
				row: "_1Mpq_Zv1E5m8YCf2tKr1h_",
				pill: "_2jUDWXcvkWD9Rv9eRkGk3c",
				title: "Udn3M5KjPbMgnaTtqwBPi"
			}
		},
		"./src/reddit/components/Economics/FTUE/TopTippersBenefits/Carousel/Item/index.m.less": function(e, t, s) {
			e.exports = {
				content: "jfTCCpY9AN5vsTR3FUnTW",
				contentAlignmentCenter: "_1BNPUWy-KbzS5n5Vnm5bKP",
				contentAlignmentLeft: "_1-LLEXcmjJrgw44dVmq0Mo",
				contentAlignmentRight: "_3Kmh23NRDx-fN4xRmJYw5L",
				contentInner: "_3WmVkloPQGAq5hESQBxaYM",
				description: "wtyGWMoRBY5p1Zek0hTaV",
				footer: "zJ2NWKSiTXEkYb5pI7dlD",
				number: "_1K8Kftn0O6A28v5MlmDbFG"
			}
		},
		"./src/reddit/components/Economics/FTUE/TopTippersBenefits/Carousel/Row/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_39SttEUiT-99Mh4nze_aYh",
				item: "kSMkgo_Lcqu6pcgfQuYO4"
			}
		},
		"./src/reddit/components/Economics/FTUE/TopTippersBenefits/Carousel/Tipping/index.m.less": function(e, t, s) {
			e.exports = {
				flexRow: "t4yMK5MvHgXKkfneVt2Sg",
				container: "_2KkML-m0RuZjJLHT9ljobe",
				postFlatlistIcon: "HQwBz_YkoXKoCF_H6V6nw",
				postFlatlistItem: "W72lOik2tOHvpWDhgjdhJ",
				tipButton: "_3fKqx88edjNtCw8ocjsGA6"
			}
		},
		"./src/reddit/components/Economics/FTUE/TopTippersBenefits/Carousel/index.m.less": function(e, t, s) {
			e.exports = {
				distinguished: "_2yoqSswqjvlmT91nISyY5K",
				firstItem: "_33woAOtmkukX5jO9pdiJNc",
				generousSupporters: "_3_ojvj1UbwuFzq6o8WtGiS",
				tipping: "kP6hpGznW2Mu68272_BJ1"
			}
		},
		"./src/reddit/components/Economics/FTUE/TopTippersBenefits/Header/index.m.less": function(e, t, s) {
			e.exports = {
				check: "_3MsXrtpf18PYSr7aRgCdv3",
				close: "_2AegilfgAMuVpLLdKkKZVD",
				flexRow: "_2KU3MY1TMTDm23f6z-hhui",
				header: "_3Q2MmQW11ryT-nu1RI7JGu",
				headerControls: "HexZvjQrIorXcvmN1pCT2",
				newTag: "_2LzNaJrmh2yS3Delevirjk",
				showAgain: "YBytfHKLeLcVBU9bb4V9x",
				title: "_3_2R4_2f23dyF1ceKZHeA3"
			}
		},
		"./src/reddit/components/Economics/FTUE/TopTippersBenefits/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1C7OrR7QTbC96ZIYGjRhX9"
			}
		},
		"./src/reddit/components/Economics/FTUE/TopTippersBenefits/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				c = s("./node_modules/react-redux/es/index.js"),
				r = s("./node_modules/reselect/es/index.js"),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/localStorageAvailable/index.ts");
			const d = e => {
					let t = null;
					return () => {
						if (null === t && (t = Object(i.a)()), t) try {
							return "true" !== localStorage.getItem(e)
						} catch (s) {}
						return !1
					}
				},
				l = e => {
					let t = null;
					return () => {
						if (null === t && (t = Object(i.a)()), !t) return !1;
						try {
							localStorage.setItem(e, "true")
						} catch (s) {
							return !1
						}
						return !0
					}
				},
				m = (d("ftue-tip-highlight-viewed"), l("ftue-tip-highlight-viewed")),
				p = d("ftue-top-tippers-viewed"),
				u = l("ftue-top-tippers-viewed");
			var x = s("./src/reddit/selectors/economics.ts"),
				b = s("./src/reddit/i18n/utils.ts"),
				E = s("./src/reddit/components/Economics/TopTippers/Icon/index.tsx"),
				f = s("./src/reddit/icons/fonts/Comment/index.tsx"),
				T = s("./src/reddit/icons/fonts/Downvote/index.tsx"),
				v = s("./src/reddit/icons/fonts/Upvote/index.tsx"),
				N = s("./src/reddit/icons/svgs/Menu/index.tsx"),
				g = s("./src/reddit/components/Economics/FTUE/TopTippersBenefits/Carousel/DistinguishedComment/index.m.less"),
				h = s.n(g);
			const I = Object(r.c)({
				account: e => e.user.account
			});
			var j = Object(c.b)(I)((function(e) {
					return a.a.createElement("div", {
						className: Object(o.a)(h.a.container, e.className)
					}, a.a.createElement("div", {
						className: h.a.votes
					}, a.a.createElement(v.a, {
						className: h.a.voteIcon
					}), a.a.createElement(T.a, {
						className: h.a.voteIcon
					})), a.a.createElement("div", {
						className: h.a.content
					}, a.a.createElement("div", {
						className: h.a.userDisplay
					}, a.a.createElement("div", {
						className: h.a.username
					}, a.a.createElement(E.a, {
						className: h.a.badge,
						creatorId: e.creatorId,
						rank: 1,
						subredditId: e.subredditId
					}), e.account && e.account.displayText || "username"), a.a.createElement("div", {
						className: h.a.timestamp
					}, Object(b.c)("1 min ago"))), a.a.createElement("div", {
						className: h.a.comment
					}, Object(b.c)("Amazing!")), a.a.createElement("div", {
						className: h.a.flatlist
					}, a.a.createElement("div", {
						className: h.a.flatlistItem
					}, a.a.createElement(f.a, {
						className: h.a.flatlistIcon
					}), Object(b.c)("Reply")), a.a.createElement("div", {
						className: h.a.flatlistItem
					}, Object(b.c)("Share")), a.a.createElement("div", {
						className: h.a.flatlistItem
					}, Object(b.c)("Save")), a.a.createElement("div", {
						className: h.a.flatlistItem
					}, a.a.createElement(N.a, {
						className: h.a.menuIcon
					})))))
				})),
				C = s("./src/reddit/components/Economics/TopTippers/PostLeaderboard/OtherUsersPill/index.tsx"),
				_ = s("./src/reddit/components/Economics/TopTippers/PostLeaderboard/UserPill/index.tsx"),
				w = s("./src/reddit/components/Economics/FTUE/TopTippersBenefits/Carousel/GenerousSupporters/index.m.less"),
				O = s.n(w);
			const k = Object(r.c)({
				tippers: x.w,
				account: e => e.user.account
			});
			var S, L = Object(c.b)(k)((function(e) {
					const t = (e.tippers && e.tippers.topTippers.list || []).reduce((t, s) => !t && e.account && e.account.id !== s.id ? s : t, void 0) || {
							amount: "100",
							id: "snooer",
							username: "snooer"
						},
						s = String(Math.max(parseInt(t.amount) + 200, 500)),
						n = e.tippers && e.tippers.topTippers.others || {
							amount: "100",
							count: 2
						};
					return a.a.createElement("div", {
						className: e.className
					}, a.a.createElement("div", {
						className: O.a.title
					}, Object(b.c)("Generous Supporters")), a.a.createElement("div", {
						className: O.a.row
					}, a.a.createElement(_.a, {
						amount: s,
						className: O.a.pill,
						creatorId: e.creatorId,
						rank: 1,
						subredditId: e.subredditId,
						username: e.account && e.account.displayText || Object(b.c)("username")
					}), a.a.createElement(_.a, {
						amount: t.amount,
						className: O.a.pill,
						creatorId: e.creatorId,
						rank: 2,
						subredditId: e.subredditId,
						username: t.username
					})), a.a.createElement("div", {
						className: O.a.row
					}, a.a.createElement(C.a, {
						amount: n.amount,
						className: O.a.pill,
						count: n.count,
						creatorId: e.creatorId,
						subredditId: e.subredditId
					})))
				})),
				B = s("./src/reddit/components/Economics/FTUE/TopTippersBenefits/Carousel/Item/index.m.less"),
				A = s.n(B);

			function P(e) {
				const t = e.alignment || S.Left;
				return a.a.createElement("div", {
					className: Object(o.a)(e.className, A.a.container)
				}, a.a.createElement("article", {
					className: A.a.content
				}, a.a.createElement("div", {
					className: Object(o.a)(A.a.contentInner, {
						[A.a.contentAlignmentCenter]: t === S.Center,
						[A.a.contentAlignmentLeft]: t === S.Left,
						[A.a.contentAlignmentRight]: t === S.Right
					})
				}, e.children)), a.a.createElement("footer", {
					className: A.a.footer
				}, void 0 !== e.index && a.a.createElement("div", {
					className: A.a.number
				}, e.index + 1), a.a.createElement("div", {
					className: A.a.description
				}, e.description)))
			}! function(e) {
				e.Center = "center", e.Left = "left", e.Right = "right"
			}(S || (S = {}));
			var U = s("./src/reddit/components/Economics/FTUE/TopTippersBenefits/Carousel/Row/index.m.less"),
				y = s.n(U);

			function F(e) {
				return a.a.createElement("div", {
					className: Object(o.a)(e.className, y.a.container)
				}, e.children.map((e, t) => a.a.cloneElement(e, {
					index: t,
					className: Object(o.a)(e.props.className, y.a.item),
					key: t
				})))
			}
			var R = s("./src/lib/ntext/index.ts"),
				M = s("./src/reddit/icons/svgs/Dollar/index.tsx"),
				V = s("./src/reddit/icons/svgs/Share/index.tsx"),
				D = s("./src/reddit/components/Economics/FTUE/TopTippersBenefits/Carousel/Tipping/index.m.less"),
				G = s.n(D);
			const K = 2;
			const Y = Object(r.c)({
				post: (e, t) => {
					let {
						postId: s
					} = t;
					return e.posts.models[s]
				}
			});
			var W = Object(c.b)(Y)((function(e) {
					const t = e.post && e.post.numComments || K;
					return a.a.createElement("div", {
						className: Object(o.a)(e.className, G.a.container)
					}, a.a.createElement("div", {
						className: G.a.postFlatlistItem
					}, a.a.createElement(f.a, {
						className: G.a.postFlatlistIcon
					}), Object(b.c)(Object(R.a)(t, "Comment"))), a.a.createElement("div", {
						className: G.a.tipButton
					}, a.a.createElement(M.a, {
						className: G.a.postFlatlistIcon
					}), Object(b.c)("Tip Creator")), a.a.createElement("div", {
						className: G.a.postFlatlistItem
					}, a.a.createElement(V.a, {
						className: G.a.postFlatlistIcon
					}), Object(b.c)("Share")))
				})),
				H = s("./src/reddit/components/Economics/FTUE/TopTippersBenefits/Carousel/index.m.less"),
				Z = s.n(H);

			function X(e) {
				return a.a.createElement(F, {
					className: e.className
				}, a.a.createElement(P, {
					alignment: S.Center,
					className: Z.a.firstItem,
					description: Object(b.c)("Look for the tip button under the post")
				}, a.a.createElement(W, {
					className: Z.a.tipping,
					postId: e.contentId
				})), a.a.createElement(P, {
					description: Object(b.c)("Be listed as a generous supporter under the post")
				}, a.a.createElement(L, {
					className: Z.a.generousSupporters,
					contentId: e.contentId,
					creatorId: e.creatorId,
					subredditId: e.subredditId
				})), a.a.createElement(P, {
					description: Object(b.c)("Get a distinguished username and an icon in comments")
				}, a.a.createElement(j, {
					className: Z.a.distinguished,
					contentId: e.contentId,
					creatorId: e.creatorId,
					subredditId: e.subredditId
				})))
			}
			var q = s("./src/lib/makeActionCreator/index.ts"),
				Q = s("./src/reddit/actions/economics/ftue/constants.ts");
			Object(q.a)(Q.a);
			const z = Object(q.a)(Q.b);
			var J = s("./src/reddit/icons/svgs/Checkbox/index.tsx"),
				$ = s("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
				ee = s("./src/reddit/icons/svgs/Close/index.tsx"),
				te = s("./src/reddit/components/Economics/FTUE/TopTippersBenefits/Header/index.m.less"),
				se = s.n(te);
			class ne extends a.a.Component {
				constructor() {
					super(...arguments), this.state = {
						showAgain: !1
					}, this.toggleShowAgain = () => this.setState(e => ({
						showAgain: !e.showAgain
					}))
				}
				render() {
					return a.a.createElement("header", {
						className: Object(o.a)(this.props.className, se.a.header)
					}, a.a.createElement("div", {
						className: se.a.title
					}, a.a.createElement("div", {
						className: se.a.newTag
					}, Object(b.c)("new")), Object(b.c)("this creator can accept tips")), a.a.createElement("div", {
						className: se.a.headerControls
					}, a.a.createElement("div", {
						className: se.a.showAgain,
						onClick: this.toggleShowAgain
					}, this.state.showAgain ? a.a.createElement(J.a, {
						className: se.a.check
					}) : a.a.createElement($.a, {
						className: se.a.check
					}), a.a.createElement("div", null, Object(b.c)("Don't show it again"))), a.a.createElement(ee.a, {
						className: se.a.close,
						onClick: () => this.props.onClose(this.state.showAgain)
					})))
				}
			}
			var ae = Object(c.b)(void 0, e => ({
					onClose: t => e((e => async t => {
						e || (m(), u()), t(z())
					})(t))
				}))(ne),
				ce = s("./src/reddit/components/Economics/FTUE/TopTippersBenefits/index.m.less"),
				re = s.n(ce);
			const oe = Object(r.c)({
				contentAcceptsSupport: x.k,
				ftueViewed: e => e.economics.ftue.topTippersViewed,
				isLoggedIn: e => !!e.user.account
			});
			t.default = Object(c.b)(oe)((function(e) {
				return !e.ftueViewed && p() && e.contentAcceptsSupport && e.isLoggedIn ? a.a.createElement("div", {
					className: Object(o.a)(e.className, re.a.container)
				}, a.a.createElement(ae, {
					className: re.a.header
				}), a.a.createElement(X, {
					contentId: e.contentId,
					creatorId: e.creatorId,
					subredditId: e.subredditId
				})) : null
			}))
		},
		"./src/reddit/components/Economics/TopTippers/PostLeaderboard/OtherUsersPill/index.m.less": function(e, t, s) {
			e.exports = {
				amount: "KEH_pna_itSyRH_8L9ldL",
				badge: "_2VlaykY7LqeiFfYTAX1bBo",
				count: "hBGS6MN9VmG2bcklpfgN9",
				otherTippers: "_3YapApuC00mkaFr0jAZBL0"
			}
		},
		"./src/reddit/components/Economics/TopTippers/PostLeaderboard/OtherUsersPill/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return u
			}));
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				c = s("./src/lib/classNames/index.ts"),
				r = s("./src/lib/currency/centsToDollars/index.ts"),
				o = s("./src/lib/ntext/index.ts"),
				i = s("./src/lib/prettyPrintNumber/index.ts"),
				d = s("./src/reddit/components/Economics/TopTippers/Icon/index.tsx"),
				l = s("./src/reddit/i18n/components.tsx"),
				m = s("./src/reddit/components/Economics/TopTippers/PostLeaderboard/OtherUsersPill/index.m.less"),
				p = s.n(m);

			function u(e) {
				return a.a.createElement("div", {
					className: Object(c.a)(e.className, p.a.otherTippers)
				}, a.a.createElement(d.a, {
					className: p.a.badge,
					creatorId: e.creatorId,
					rank: 5,
					subredditId: e.subredditId
				}), a.a.createElement("div", {
					className: p.a.count
				}, a.a.createElement(l.c, null, Object(o.a)(e.count, "other user"))), a.a.createElement("div", {
					className: p.a.amount
				}, "$", Object(i.a)(Object(r.a)(e.amount))))
			}
		},
		"./src/reddit/components/Economics/TopTippers/PostLeaderboard/UserPill/index.m.less": function(e, t, s) {
			e.exports = {
				amount: "_2KXS5HMt2qSqBj1wxINj",
				badge: "_1dY7dvLY5fJdjWnXStM9Xx",
				tipper: "_3u1O5Dv5ak-_q_cQkVVlNG",
				tipperRank1: "j920aaWG9DYKb0W_yPa9F",
				username: "_3TZqkcOwpVQFSiUBGriPS2",
				tipperRank2: "_18jzy5hzPg1sMB4YBRxuD3",
				tipperRank3: "_2d8Ztdz9sdZxdwXdEma7jw",
				tipperRank4: "_1CrA9s3Jb9yia8CWc5t4_4",
				tipperRank5: "X6z9fUuSYGQapi9jsbVOY"
			}
		},
		"./src/reddit/components/Economics/TopTippers/PostLeaderboard/UserPill/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return u
			}));
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				c = s("./src/lib/classNames/index.ts"),
				r = s("./src/lib/currency/centsToDollars/index.ts"),
				o = s("./src/lib/prettyPrintNumber/index.ts"),
				i = s("./src/reddit/components/Economics/TopTippers/Icon/index.tsx"),
				d = s("./src/reddit/controls/InternalLink/index.tsx"),
				l = s("./src/reddit/components/Economics/TopTippers/PostLeaderboard/UserPill/index.m.less"),
				m = s.n(l);
			const p = [m.a.tipperRank1, m.a.tipperRank2, m.a.tipperRank3, m.a.tipperRank4, m.a.tipperRank5];

			function u(e) {
				return a.a.createElement(d.a, {
					className: Object(c.a)(e.className, m.a.tipper, p[e.rank - 1]),
					to: "/user/".concat(e.username, "/")
				}, a.a.createElement(i.a, {
					className: m.a.badge,
					creatorId: e.creatorId,
					rank: e.rank,
					subredditId: e.subredditId
				}), a.a.createElement("div", {
					className: m.a.username
				}, e.username), a.a.createElement("div", {
					className: m.a.amount
				}, "$", Object(o.a)(Object(r.a)(e.amount))))
			}
		},
		"./src/reddit/components/Economics/TopTippers/PostLeaderboard/index.m.less": function(e, t, s) {
			e.exports = {
				tippers: "_3k_myXu8wSRV3-cf9SiN_B",
				title: "ozF-Lg88bZnv3u5OQZueG"
			}
		},
		"./src/reddit/components/Economics/TopTippers/PostLeaderboard/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				c = s("./node_modules/react-redux/es/index.js"),
				r = s("./node_modules/reselect/es/index.js"),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/i18n/components.tsx"),
				d = s("./src/reddit/selectors/economics.ts"),
				l = s("./src/reddit/components/Economics/TopTippers/PostLeaderboard/OtherUsersPill/index.tsx"),
				m = s("./src/reddit/components/Economics/TopTippers/PostLeaderboard/UserPill/index.tsx"),
				p = s("./src/reddit/components/Economics/TopTippers/PostLeaderboard/index.m.less"),
				u = s.n(p);
			const x = Object(r.c)({
				tippers: d.w
			});
			t.default = Object(c.b)(x)((function(e) {
				const {
					tippers: t
				} = e;
				return t ? a.a.createElement("div", {
					className: Object(o.a)(u.a.container, e.className)
				}, a.a.createElement("div", {
					className: u.a.title
				}, a.a.createElement(i.c, null, "Generous Supporters")), a.a.createElement("div", {
					className: u.a.tippers
				}, t.topTippers.list.map(s => {
					const n = t.topTippers.ranking[s.id] || 5;
					return a.a.createElement(m.a, {
						amount: s.amount,
						creatorId: e.creatorId,
						rank: n,
						subredditId: e.subredditId,
						username: s.username
					})
				}), !!t.topTippers.others.count && a.a.createElement(l.a, {
					amount: t.topTippers.others.amount,
					count: t.topTippers.others.count,
					creatorId: e.creatorId,
					subredditId: e.subredditId
				}))) : null
			}))
		},
		"./src/reddit/helpers/defaultStyledSVG/index.m.less": function(e, t, s) {
			e.exports = {
				defaultSVG: "_2tsJkJBrXn7yERCuGwPDHh",
				defaultSvg: "_2tsJkJBrXn7yERCuGwPDHh"
			}
		},
		"./src/reddit/icons/svgs/Dollar/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				id: e.id,
				viewBox: "0 0 13 13",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("g", null, a.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M1.90108 1.90127C4.43662 -0.633374 8.5628 -0.634139 11.0983 1.90127C13.6339 4.43668 13.6339 8.56265 11.0983 11.0981C9.83057 12.3665 8.16495 13 6.5001 13C4.83447 13 3.16885 12.3665 1.90108 11.0981C-0.633694 8.56265 -0.633694 4.43668 1.90108 1.90127ZM5.96831 9.9002V10.8202H7.04991V9.8602C7.68242 9.74686 8.14731 9.50353 8.44459 9.1302C8.7482 8.75686 8.9 8.32353 8.9 7.8302C8.9 7.31686 8.73871 6.9102 8.41613 6.6102C8.09987 6.3102 7.60652 6.0802 6.93605 5.9202V4.2602C7.16376 4.31353 7.35667 4.39353 7.5148 4.5002C7.67293 4.60686 7.80892 4.72686 7.92277 4.8602L8.78615 4.0402C8.57742 3.78686 8.33074 3.58686 8.04611 3.4402C7.76148 3.28686 7.42941 3.18686 7.04991 3.14019V2.2002H5.96831V3.14019C5.35478 3.21353 4.88672 3.41686 4.56414 3.7502C4.24788 4.08353 4.08975 4.51353 4.08975 5.0402C4.08975 5.52686 4.24472 5.93353 4.55465 6.2602C4.86458 6.58686 5.37691 6.82686 6.09165 6.9802V8.7802C5.826 8.7402 5.58248 8.65686 5.3611 8.5302C5.13972 8.39686 4.93732 8.2302 4.75389 8.0302L3.9 8.8502C4.14035 9.1302 4.42498 9.36353 4.75389 9.5502C5.0828 9.73686 5.4876 9.85353 5.96831 9.9002ZM5.56034 5.4502C5.45282 5.34353 5.39905 5.19353 5.39905 5.0002C5.39905 4.80686 5.45282 4.64686 5.56034 4.5202C5.67419 4.38686 5.8513 4.29353 6.09165 4.2402V5.7202C5.8513 5.64686 5.67419 5.55686 5.56034 5.4502ZM7.46736 7.5202C7.54959 7.65353 7.5907 7.79353 7.5907 7.9402C7.5907 8.13353 7.53694 8.30353 7.42941 8.4502C7.32188 8.5902 7.15743 8.69353 6.93605 8.7602V7.1802C7.20803 7.26686 7.38514 7.3802 7.46736 7.5202Z"
			})))
		},
		"./src/reddit/icons/svgs/Menu/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				id: e.id,
				viewBox: "0 0 16 16",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, a.a.createElement("path", {
				d: "M10.65,8.27a1.55,1.55,0,1,0,1.55-1.6,1.58,1.58,0,0,0-1.55,1.6M6,8.27a1.56,1.56,0,1,0,1.55-1.6A1.58,1.58,0,0,0,6,8.27m-1.55,0a1.58,1.58,0,0,0-1.55-1.6,1.6,1.6,0,0,0,0,3.2,1.58,1.58,0,0,0,1.55-1.6"
			}))
		},
		"./src/reddit/icons/svgs/Share/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				c = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				r = s("./src/lib/lessComponent.tsx"),
				o = s("./src/reddit/helpers/defaultStyledSVG/index.m.less"),
				i = s.n(o);
			var d = e => r.a.wrapped(e, "defaultSVG", i.a),
				l = s("./src/reddit/models/Theme/NewColorSystem/index.ts");
			t.a = Object(c.a)(d(e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("g", {
				fill: e.fill || Object(l.a)(e).actionIcon
			}, a.a.createElement("path", {
				fill: "inherit",
				d: "M11.43375,2.195625 C11.031875,1.831875 10.3125,2.116875 10.3125,2.6590625 L10.3125,5.9096875 C10,5.975625 9.2321875,6.0775 8.675625,6.2209375 C3.85875,7.4628125 0.5928125,11.9 0.5928125,16.874375 C0.5928125,17.479375 1.308125,17.7309375 1.6634375,17.24125 C3.67375,14.4715625 6.875,12.561875 10.3125,12.1584375 L10.3125,14.8409375 C10.3125,15.383125 11.031875,15.668125 11.43375,15.304375 L18.673125,8.75 L11.43375,2.195625 Z"
			})))))
		}
	}
]);
//# sourceMappingURL=EconomicsTopTippersPostLeaderboard.d96f85883276af853cf9.js.map