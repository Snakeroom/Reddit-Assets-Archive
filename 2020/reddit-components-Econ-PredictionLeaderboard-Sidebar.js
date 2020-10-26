// https://www.redditstatic.com/desktop2x/reddit-components-Econ-PredictionLeaderboard-Sidebar.5734ad9ce7466a2f1d2a.js
// Retrieved at 10/26/2020, 3:10:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-Econ-PredictionLeaderboard-Sidebar"], {
		"./src/graphql/operations/GetPredictionCoinPackages.json": function(e) {
			e.exports = JSON.parse('{"id":"8d63fcc52d73"}')
		},
		"./src/graphql/operations/SubredditTopPredictors.json": function(e) {
			e.exports = JSON.parse('{"id":"b50c7bdfe9d4"}')
		},
		"./src/graphql/operations/VotePrediction.json": function(e) {
			e.exports = JSON.parse('{"id":"95f86f022a36"}')
		},
		"./src/reddit/actions/economics/predictions/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return p
			})), r.d(t, "b", (function() {
				return b
			})), r.d(t, "c", (function() {
				return m
			}));
			var n = r("./src/lib/initializeClient/installReducer.ts"),
				o = r("./src/reddit/reducers/features/predictions/index.ts"),
				i = r("./src/lib/makeActionCreator/index.ts"),
				s = r("./src/reddit/endpoints/economics/predictions.ts"),
				c = r("./src/reddit/selectors/posts.ts"),
				d = r("./src/reddit/selectors/user.ts"),
				a = r("./src/reddit/actions/economics/predictions/constants.ts");
			Object(n.a)({
				features: {
					predictions: o.a
				}
			});
			const l = Object(i.a)(a.a),
				u = Object(i.a)(a.b),
				p = (e, t, r) => async (n, o, i) => {
					let {
						gqlContext: c
					} = i;
					const a = Object(d.I)(o()),
						u = await Object(s.c)(c(), {
							subredditId: e,
							period: t,
							top: r,
							includeCurrentRank: a
						});
					if (u.error || !u.ok) throw new Error("Failed to fetch subreddit top predictors");
					const {
						subredditInfoById: p
					} = u.body.data;
					if (!p || !p.predictionWinners) throw new Error("Subreddit has no prediction winners");
					const {
						predictionWinners: b
					} = p, m = Object.assign({
						subredditId: e
					}, b);
					return n(l(m)), m
				}, b = e => async (t, r, n) => {
					let {
						gqlContext: o
					} = n;
					const i = r(),
						d = Object(c.bb)(i, {
							postId: e,
							disallowProfile: !0
						});
					if (!d) throw new Error("Post does not belong to a subreddit");
					const a = await Object(s.b)(o(), d.name);
					if (a.error || !a.ok) throw new Error("Failed to fetch coin packs");
					const {
						subredditInfoByName: l
					} = a.body.data;
					if (!l || !l.predictionCoinPackages.length) throw new Error("Subreddit has no coin packs");
					return l.predictionCoinPackages
				}, m = e => {
					let {
						coinPackageId: t,
						optionId: r,
						postId: n,
						price: o
					} = e;
					return async (e, i, c) => {
						let {
							gqlContext: d
						} = c;
						const a = await Object(s.d)(d(), {
							coinPackageId: t,
							optionId: r,
							postId: n,
							price: o
						});
						if (a.error || !a.ok) throw new Error("Failed to make prediction");
						const {
							votePrediction: l
						} = a.body.data;
						if (!l) throw new Error("Failed to create prediction vote");
						return e(u({
							pollId: n,
							prediction: l.poll,
							price: o
						})), l.poll
					}
				}
		},
		"./src/reddit/components/Econ/PredictionLeaderboard/List/index.m.less": function(e, t, r) {
			e.exports = {
				predictionLeaderboardList: "WnsHpoM6ZTGbLzCSxG1ho",
				topPredictor: "iABJTvK6lrMc3PmeMk2bZ"
			}
		},
		"./src/reddit/components/Econ/PredictionLeaderboard/Modal/index.m.less": function(e, t, r) {
			e.exports = {
				container: "_1_C9n5LWcnYHJ78_PhY6M_",
				header: "_29gj_JsULicXdU3UTZKiDI",
				closeButton: "_1Q_qQCWWqlqHQzCU0P83E_",
				listContainer: "_1MiUX_7AddF3lpCZ3nYtMe",
				currentRank: "_39H3viVq70CUv4_7JdBLsx",
				spacer: "_37V-Um9VhBWlh1fA0PP6hv"
			}
		},
		"./src/reddit/components/Econ/PredictionLeaderboard/Predictor/index.m.less": function(e, t, r) {
			e.exports = {
				predictor: "ainvGgXQrIMFpP9X4Mrc_",
				rank: "_35mmwlcmeMehfyJXIsaV6P",
				userIcon: "_12PvAVnV9Mni44vSgjcixP",
				userName: "Lm2HlDnjd61FFIUJMsqY1",
				yourProfile: "_3NXCPZBcTL9t1VpyqYkpAi",
				score: "_3ebMVpO-ahVFbOZDTJpx9U",
				coinIcon: "_1aYPVtVpXwl960I3DbyeEc"
			}
		},
		"./src/reddit/components/Econ/PredictionLeaderboard/Sidebar/index.m.less": function(e, t, r) {
			e.exports = {
				themedWidget: "_3uxjfiwzc4v4BiMEQHtZ3J",
				openModalButtonContainer: "Phr96vmtPy_VTwey6qWL_",
				openModalButton: "_1wSRscxdBnLN2r_D5XZhbe"
			}
		},
		"./src/reddit/components/Econ/PredictionLeaderboard/Sidebar/index.tsx": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "PredictionLeaderboardSidebar", (function() {
				return A
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				o = r("./node_modules/react/index.js"),
				i = r.n(o),
				s = r("./node_modules/react-redux/es/index.js"),
				c = r("./node_modules/reselect/es/index.js"),
				d = r("./src/lib/classNames/index.ts"),
				a = r("./src/reddit/actions/economics/predictions/index.ts"),
				l = r("./src/reddit/components/SidebarSpacer/index.tsx"),
				u = r("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				p = r("./src/reddit/controls/Button/index.tsx"),
				b = r("./src/reddit/endpoints/economics/predictions.ts"),
				m = r("./src/lib/initializeClient/installReducer.ts"),
				f = r("./src/reddit/reducers/features/predictions/index.ts");
			Object(m.a)({
				features: {
					predictions: f.a
				}
			});
			var P = r("./src/reddit/components/UserIcon/index.tsx"),
				x = r("./src/reddit/controls/InternalLink/index.tsx"),
				k = r("./src/reddit/icons/fonts/Coin/index.tsx"),
				v = r("./src/reddit/components/Econ/PredictionLeaderboard/Predictor/index.m.less"),
				E = r.n(v);
			const {
				fbt: h
			} = r("./node_modules/fbt/lib/FbtPublic.js");

			function _(e) {
				let {
					className: t,
					isCurrentUser: r,
					rank: n,
					redditor: o,
					score: s
				} = e;
				if (!o) return null;
				const {
					icon: c,
					name: a,
					profile: l
				} = o;
				return i.a.createElement("div", {
					className: Object(d.a)(E.a.predictor, t)
				}, i.a.createElement("div", {
					className: E.a.rank
				}, n), i.a.createElement(P.a, {
					className: E.a.userIcon,
					iconUrl: null == c ? void 0 : c.url,
					isNSFW: !!(null == l ? void 0 : l.isNsfw),
					userName: null != a ? a : ""
				}), i.a.createElement("div", {
					className: E.a.userName
				}, i.a.createElement("div", null, i.a.createElement(x.a, {
					to: "/user/".concat(a)
				}, a)), r && i.a.createElement("div", {
					className: E.a.yourProfile
				}, h._("Your Profile", null, {
					hk: "2TQRwx"
				}))), i.a.createElement("div", {
					className: E.a.score
				}, i.a.createElement(k.a, {
					className: E.a.coinIcon
				}), s))
			}
			var j = r("./src/reddit/components/Econ/PredictionLeaderboard/List/index.m.less"),
				O = r.n(j);
			const {
				fbt: g
			} = r("./node_modules/fbt/lib/FbtPublic.js");

			function I(e) {
				let {
					className: t,
					currentRank: r,
					topPredictorsRank: n
				} = e;
				return i.a.createElement("div", {
					className: Object(d.a)(O.a.predictionLeaderboardList, t)
				}, (null == n ? void 0 : n.length) ? n.map(e => {
					let {
						rank: t,
						redditor: n,
						score: o
					} = e;
					return i.a.createElement("div", {
						key: "prediction-leaderboard-".concat(n.id),
						className: O.a.topPredictor
					}, i.a.createElement(_, {
						isCurrentUser: (null == r ? void 0 : r.redditor.name) === n.name,
						rank: t,
						redditor: n,
						score: o
					}))
				}) : g._("No top predictors", null, {
					hk: "1nIqZI"
				}))
			}
			var C = r("./src/higherOrderComponents/asModal/index.tsx"),
				N = r("./src/reddit/icons/svgs/Close/index.tsx"),
				L = r("./src/reddit/components/Econ/PredictionLeaderboard/Modal/index.m.less"),
				w = r.n(L);
			var R = Object(C.a)((function(e) {
					let {
						onClose: t,
						currentRank: r,
						topPredictorsRank: n
					} = e;
					const o = r && r.rank > 0;
					return i.a.createElement("div", {
						className: w.a.container
					}, i.a.createElement("div", {
						className: w.a.header
					}, i.a.createElement(p.q, {
						className: w.a.closeButton,
						Icon: N.a,
						onClick: t
					}), i.a.createElement("h1", null, "Top Predictors")), i.a.createElement("div", {
						className: w.a.listContainer
					}, i.a.createElement(I, {
						currentRank: r,
						topPredictorsRank: n
					}), o && i.a.createElement("div", {
						className: w.a.spacer
					}, " ")), r && o && i.a.createElement(_, {
						className: w.a.currentRank,
						isCurrentUser: !0,
						rank: r.rank,
						redditor: r.redditor,
						score: r.score
					}))
				})),
				y = r("./src/reddit/components/Econ/PredictionLeaderboard/Sidebar/index.m.less"),
				S = r.n(y);
			const M = 4,
				q = 25,
				T = Object(c.c)({
					leaderboard: (e, t) => {
						var r, n;
						return (null === (n = null === (r = e.features) || void 0 === r ? void 0 : r.predictions) || void 0 === n ? void 0 : n.leaderboards[t.subredditId]) || null
					}
				}),
				B = {
					fetchSubredditTopPredictors: a.a
				},
				U = Object(s.b)(T, B);

			function A(e) {
				let {
					className: t,
					fetchSubredditTopPredictors: r,
					leaderboard: s,
					subredditId: c
				} = e;
				var a;
				const [m, f] = Object(o.useState)(!1), [P, x] = Object(o.useState)(!1);
				Object(o.useEffect)(() => {
					(async () => {
						if (!s) try {
							await r(c, b.a.AllTime, q)
						} catch (e) {
							x(!0)
						}
					})()
				}, [c]);
				const k = () => {
					f(!1)
				};
				if (!(null === (a = null == s ? void 0 : s.topPredictorsRank) || void 0 === a ? void 0 : a.length) || P) return null;
				const {
					currentRank: v,
					topPredictorsRank: E
				} = s;
				return i.a.createElement(l.a, null, i.a.createElement(u.a, {
					className: Object(d.a)(S.a.themedWidget, t),
					title: n.fbt._("Top Predictors", null, {
						hk: "3HCYxQ"
					})
				}, i.a.createElement(I, {
					currentRank: v,
					topPredictorsRank: E.slice(0, M)
				}), i.a.createElement("div", {
					className: S.a.openModalButtonContainer
				}, i.a.createElement(p.i, {
					className: S.a.openModalButton,
					isFullWidth: !0,
					onClick: () => {
						f(!0)
					}
				}, n.fbt._("View Leaderboard", null, {
					hk: "ylp7x"
				}))), m && i.a.createElement(R, {
					currentRank: v,
					onOverlayClick: k,
					onClose: k,
					topPredictorsRank: s.topPredictorsRank,
					withOverlay: !0
				})))
			}
			t.default = U(A)
		},
		"./src/reddit/endpoints/economics/predictions.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return c
			})), r.d(t, "d", (function() {
				return d
			})), r.d(t, "a", (function() {
				return a
			})), r.d(t, "c", (function() {
				return l
			}));
			var n = r("./src/lib/makeGqlRequest/index.ts"),
				o = r("./src/graphql/operations/GetPredictionCoinPackages.json"),
				i = r("./src/graphql/operations/SubredditTopPredictors.json"),
				s = r("./src/graphql/operations/VotePrediction.json");
			const c = (e, t) => Object(n.a)(e, Object.assign(Object.assign({}, o), {
					variables: {
						subredditName: t
					}
				})),
				d = (e, t) => {
					let {
						postId: r,
						optionId: o,
						coinPackageId: i,
						price: c
					} = t;
					return Object(n.a)(e, Object.assign(Object.assign({}, s), {
						variables: {
							input: {
								postId: r,
								optionId: o,
								coinPackageId: i,
								price: c
							}
						}
					}))
				};
			var a;
			! function(e) {
				e.AllTime = "ALL_TIME", e.Monthly = "MONTHLY"
			}(a || (a = {}));
			const l = (e, t) => {
				let {
					subredditId: r,
					period: o,
					top: s,
					includeCurrentRank: c
				} = t;
				return Object(n.a)(e, Object.assign(Object.assign({}, i), {
					variables: {
						subredditId: r,
						period: o,
						top: s,
						includeCurrentRank: c
					}
				}))
			}
		},
		"./src/reddit/reducers/features/predictions/index.ts": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/redux/es/redux.js"),
				o = r("./src/reddit/actions/economics/predictions/constants.ts");
			const i = {};
			var s = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case o.a: {
						const {
							currentRank: r,
							subredditId: n,
							topPredictorsRank: o
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[n]: {
								currentRank: r,
								topPredictorsRank: o
							}
						})
					}
					default:
						return e
				}
			};
			t.a = Object(n.c)({
				leaderboards: s
			})
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-Econ-PredictionLeaderboard-Sidebar.5734ad9ce7466a2f1d2a.js.map