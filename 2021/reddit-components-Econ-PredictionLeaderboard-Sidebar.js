// https://www.redditstatic.com/desktop2x/reddit-components-Econ-PredictionLeaderboard-Sidebar.58f98437392914ba1f09.js
// Retrieved at 3/2/2021, 6:00:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-Econ-PredictionLeaderboard-Sidebar"], {
		"./node_modules/lodash/cloneDeep.js": function(e, t, r) {
			var n = r("./node_modules/lodash/_baseClone.js"),
				o = 1,
				c = 4;
			e.exports = function(e) {
				return n(e, o | c)
			}
		},
		"./src/graphql/operations/GetPredictionCoinPackages.json": function(e) {
			e.exports = JSON.parse('{"id":"6829c428155b"}')
		},
		"./src/graphql/operations/ResolvePrediction.json": function(e) {
			e.exports = JSON.parse('{"id":"f083306304dc"}')
		},
		"./src/graphql/operations/SubredditTopPredictors.json": function(e) {
			e.exports = JSON.parse('{"id":"b50c7bdfe9d4"}')
		},
		"./src/graphql/operations/VotePrediction.json": function(e) {
			e.exports = JSON.parse('{"id":"e04b22f26e7a"}')
		},
		"./src/reddit/actions/economics/predictions/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return m
			})), r.d(t, "b", (function() {
				return f
			})), r.d(t, "d", (function() {
				return x
			})), r.d(t, "c", (function() {
				return P
			}));
			var n = r("./src/lib/initializeClient/installReducer.ts"),
				o = r("./src/reddit/reducers/features/predictions/index.ts"),
				c = r("./src/lib/makeActionCreator/index.ts"),
				i = r("./src/reddit/endpoints/economics/predictions.ts"),
				s = (r("./src/reddit/models/Poll/index.ts"), r("./src/reddit/selectors/experiments/econ/predictions.ts")),
				d = r("./src/reddit/selectors/posts.ts"),
				a = (r("./src/reddit/selectors/subreddit.ts"), r("./src/reddit/selectors/user.ts")),
				l = r("./src/reddit/actions/economics/predictions/constants.ts");
			Object(n.a)({
				features: {
					predictions: o.a
				}
			});
			const u = Object(c.a)(l.c),
				p = Object(c.a)(l.e),
				b = Object(c.a)(l.d),
				m = (e, t, r) => async (n, o, {
					gqlContext: c
				}) => {
					const s = Object(a.J)(o()),
						d = await Object(i.c)(c(), {
							subredditId: e,
							period: t,
							top: r,
							includeCurrentRank: s
						});
					if (d.error || !d.ok) throw new Error("Failed to fetch subreddit top predictors");
					const {
						subredditInfoById: l
					} = d.body.data;
					if (!l || !l.predictionWinners) throw new Error("Subreddit has no prediction winners");
					const {
						predictionWinners: p
					} = l, b = {
						subredditId: e,
						...p
					};
					return n(u(b)), b
				}, f = e => async (t, r, {
					gqlContext: n
				}) => {
					const o = r(),
						c = Object(d.U)(o, {
							postId: e,
							disallowProfile: !0
						});
					if (!c) throw new Error("Post does not belong to a subreddit");
					const a = await Object(i.b)(n(), c.name, Object(s.a)(o));
					if (a.error || !a.ok) throw new Error("Failed to fetch coin packs");
					const {
						subredditInfoByName: l
					} = a.body.data;
					if (!l || !l.predictionCoinPackages.length) throw new Error("Subreddit has no coin packs");
					return l.predictionCoinPackages
				}, x = ({
					coinPackageId: e,
					optionId: t,
					postId: r,
					price: n
				}) => async (o, c, {
					gqlContext: s
				}) => {
					const d = await Object(i.e)(s(), {
						coinPackageId: e,
						optionId: t,
						postId: r,
						price: n
					});
					if (d.error || !d.ok) throw new Error("Failed to make prediction");
					const {
						votePrediction: a
					} = d.body.data;
					if (!a) throw new Error("Failed to create prediction vote");
					return o(p({
						pollId: r,
						prediction: a.poll,
						price: n
					})), a.poll
				}, P = ({
					optionId: e,
					postId: t
				}) => async (r, n, {
					gqlContext: o
				}) => {
					const c = await Object(i.d)(o(), {
							optionId: e,
							postId: t
						}),
						{
							resolvePrediction: s
						} = c.body.data;
					if (!(null == s ? void 0 : s.poll)) throw new Error("Failed to resolve prediction");
					return r(b({
						pollId: t,
						prediction: s.poll
					})), s.poll
				};
			Object(c.a)(l.b);
			var _;
			! function(e) {
				e.All = "ALL", e.LiveOnly = "LIVE_ONLY", e.DraftOnly = "DRAFT_ONLY"
			}(_ || (_ = {}));
			Object(c.a)(l.a), Object(c.a)(l.f)
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
		"./src/reddit/components/Econ/PredictionLeaderboard/Predictor/PlaceBadge/index.m.less": function(e, t, r) {
			e.exports = {
				placeBadge: "_3j-KsBmkOxaO1_k3p8PS4q"
			}
		},
		"./src/reddit/components/Econ/PredictionLeaderboard/Predictor/index.m.less": function(e, t, r) {
			e.exports = {
				predictor: "ainvGgXQrIMFpP9X4Mrc_",
				userLink: "_34lqpm8WEQ2vCBLoneB-q5",
				userName: "Lm2HlDnjd61FFIUJMsqY1",
				yourProfile: "_3NXCPZBcTL9t1VpyqYkpAi",
				rank: "_35mmwlcmeMehfyJXIsaV6P",
				userIcon: "_12PvAVnV9Mni44vSgjcixP",
				avatar: "KajS3NI16AuxmHTMwUM9Y",
				score: "_3ebMVpO-ahVFbOZDTJpx9U",
				coinIcon: "_1aYPVtVpXwl960I3DbyeEc"
			}
		},
		"./src/reddit/components/Econ/PredictionLeaderboard/Sidebar/index.m.less": function(e, t, r) {
			e.exports = {
				themedWidget: "_3uxjfiwzc4v4BiMEQHtZ3J",
				openModalButtonContainer: "Phr96vmtPy_VTwey6qWL_",
				openModalButton: "_1wSRscxdBnLN2r_D5XZhbe",
				modal: "PxqE9oFD_60_KiA_nA9CV"
			}
		},
		"./src/reddit/components/Econ/PredictionLeaderboard/Sidebar/index.tsx": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "PredictionLeaderboardSidebar", (function() {
				return Q
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				o = r("./node_modules/react/index.js"),
				c = r.n(o),
				i = r("./node_modules/react-redux/es/index.js"),
				s = r("./node_modules/reselect/es/index.js"),
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
			var x = r("./src/reddit/components/UserIcon/index.tsx"),
				P = r("./src/reddit/controls/InternalLink/index.tsx"),
				_ = r("./src/reddit/icons/fonts/Coin/index.tsx"),
				k = r("./src/reddit/helpers/trackers/predictions.ts"),
				h = r("./src/reddit/hooks/useTracking.ts"),
				v = r("./src/config.ts"),
				j = r("./src/reddit/components/Econ/PredictionLeaderboard/Predictor/PlaceBadge/index.m.less"),
				O = r.n(j);
			const E = `${v.a.assetPath}/img/econ/predictions/leaderboard`,
				g = `${E}/first@2x.png`,
				I = `${E}/second@2x.png`,
				L = `${E}/third@2x.png`,
				C = {
					1: {
						alt: n.fbt._("First place", null, {
							hk: "3uGGfU"
						}),
						src: g,
						srcSet: `\n  ${E}/first.png,\n  ${g} 2x,\n  ${E}/first@3x.png 3x,\n`
					},
					2: {
						alt: n.fbt._("Second place", null, {
							hk: "4AYjyw"
						}),
						src: I,
						srcSet: `\n  ${E}/second.png,\n  ${I} 2x,\n  ${E}/second@3x.png 3x,\n`
					},
					3: {
						alt: n.fbt._("Third place", null, {
							hk: "lyjwD"
						}),
						src: L,
						srcSet: `\n  ${E}/third.png,\n  ${L} 2x,\n  ${E}/third@3x.png 3x,\n`
					}
				};

			function N({
				place: e
			}) {
				const t = e && C[e];
				return t ? c.a.createElement("img", {
					alt: t.alt,
					className: O.a.placeBadge,
					src: t.src,
					srcSet: t.srcSet
				}) : null
			}
			var w = r("./src/reddit/components/Econ/PredictionLeaderboard/Predictor/index.m.less"),
				y = r.n(w);
			const {
				fbt: S
			} = r("./node_modules/fbt/lib/FbtPublic.js");

			function R({
				className: e,
				isCurrentUser: t,
				rank: r,
				redditor: n,
				score: o
			}) {
				const i = Object(h.a)();
				if (!n) return null;
				const {
					icon: s,
					name: a,
					profile: l
				} = n;
				return c.a.createElement("div", {
					className: Object(d.a)(y.a.predictor, e)
				}, c.a.createElement("div", {
					className: y.a.rank
				}, r), c.a.createElement(P.a, {
					className: y.a.userLink,
					onClick: () => i(Object(k.b)({
						targetUserId: n.id
					})),
					to: `/user/${a}`
				}, c.a.createElement(N, {
					place: r
				}), c.a.createElement(x.a, {
					className: Object(d.a)(y.a.userIcon, y.a.avatar),
					iconUrl: null == s ? void 0 : s.url,
					isNSFW: !!(null == l ? void 0 : l.isNsfw),
					userName: null != a ? a : ""
				}), c.a.createElement("div", null, c.a.createElement("div", {
					className: y.a.userName
				}, a), t && c.a.createElement("div", {
					className: y.a.yourProfile
				}, S._("Yep, thats you.", null, {
					hk: "3DqdE1"
				})))), c.a.createElement("div", {
					className: y.a.score
				}, c.a.createElement(_.a, {
					className: y.a.coinIcon
				}), o))
			}
			var q = r("./src/reddit/components/Econ/PredictionLeaderboard/List/index.m.less"),
				A = r.n(q);
			const {
				fbt: M
			} = r("./node_modules/fbt/lib/FbtPublic.js");

			function B({
				className: e,
				currentRank: t,
				topPredictorsRank: r
			}) {
				return c.a.createElement("div", {
					className: Object(d.a)(A.a.predictionLeaderboardList, e)
				}, (null == r ? void 0 : r.length) ? r.map(({
					rank: e,
					redditor: r,
					score: n
				}) => r ? c.a.createElement("div", {
					key: `prediction-leaderboard-${r.id}`,
					className: A.a.topPredictor
				}, c.a.createElement(R, {
					isCurrentUser: (null == t ? void 0 : t.redditor.name) === r.name,
					rank: e,
					redditor: r,
					score: n
				})) : null) : M._("No top predictors", null, {
					hk: "1nIqZI"
				}))
			}
			var T = r("./src/higherOrderComponents/asModal/index.tsx"),
				U = r("./src/reddit/contexts/PageLayer/index.tsx"),
				F = r("./src/reddit/icons/svgs/Close/index.tsx"),
				D = U.Y,
				V = r("./src/reddit/components/Econ/PredictionLeaderboard/Modal/index.m.less"),
				W = r.n(V);
			var $ = Object(T.a)((function({
					onClose: e,
					currentRank: t,
					topPredictorsRank: r
				}) {
					const n = Object(h.a)(),
						i = D(),
						s = Object(U.w)(i);
					Object(o.useEffect)(() => {
						n(Object(k.h)(s))
					}, []);
					const d = t && t.rank > 0;
					return c.a.createElement("div", {
						className: W.a.container
					}, c.a.createElement("div", {
						className: W.a.header
					}, c.a.createElement(p.q, {
						className: W.a.closeButton,
						Icon: F.a,
						priority: p.b.Plain,
						onClick: e
					}), c.a.createElement("h1", null, "Top Predictors")), c.a.createElement("div", {
						className: W.a.listContainer
					}, c.a.createElement(B, {
						currentRank: t,
						topPredictorsRank: r
					}), d && c.a.createElement("div", {
						className: W.a.spacer
					}, " ")), t && d && c.a.createElement(R, {
						className: W.a.currentRank,
						isCurrentUser: !0,
						rank: t.rank,
						redditor: t.redditor,
						score: t.score
					}))
				})),
				Y = r("./src/reddit/components/Econ/PredictionLeaderboard/Sidebar/index.m.less"),
				J = r.n(Y);
			const H = 4,
				Z = 25,
				G = Object(s.c)({
					leaderboard: (e, t) => {
						var r, n;
						return (null === (n = null === (r = e.features) || void 0 === r ? void 0 : r.predictions) || void 0 === n ? void 0 : n.leaderboards[t.subredditId]) || null
					}
				}),
				X = {
					fetchSubredditTopPredictors: a.a
				},
				K = Object(i.b)(G, X);

			function Q({
				className: e,
				fetchSubredditTopPredictors: t,
				leaderboard: r,
				subredditId: i
			}) {
				var s;
				const [a, m] = Object(o.useState)(!1), [f, x] = Object(o.useState)(!1);
				Object(o.useEffect)(() => {
					(async () => {
						if (!r) try {
							await t(i, b.a.AllTime, Z)
						} catch (e) {
							x(!0)
						}
					})()
				}, [i]);
				const P = () => {
					m(!1)
				};
				if (!(null === (s = null == r ? void 0 : r.topPredictorsRank) || void 0 === s ? void 0 : s.length) || f) return null;
				const {
					currentRank: _,
					topPredictorsRank: k
				} = r;
				return c.a.createElement(l.a, null, c.a.createElement(u.a, {
					className: Object(d.a)(J.a.themedWidget, e),
					title: n.fbt._("Top Predictors", null, {
						hk: "3HCYxQ"
					})
				}, c.a.createElement(B, {
					currentRank: _,
					topPredictorsRank: k.slice(0, H)
				}), c.a.createElement("div", {
					className: J.a.openModalButtonContainer
				}, c.a.createElement(p.i, {
					className: J.a.openModalButton,
					isFullWidth: !0,
					onClick: () => {
						m(!0)
					}
				}, n.fbt._("See All", null, {
					hk: "1Ozf02"
				}))), a && c.a.createElement($, {
					className: J.a.modal,
					currentRank: _,
					onOverlayClick: P,
					onClose: P,
					topPredictorsRank: r.topPredictorsRank,
					withOverlay: !0
				})))
			}
			t.default = K(Q)
		},
		"./src/reddit/endpoints/economics/predictions.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return d
			})), r.d(t, "e", (function() {
				return a
			})), r.d(t, "d", (function() {
				return l
			})), r.d(t, "a", (function() {
				return u
			})), r.d(t, "c", (function() {
				return p
			}));
			var n = r("./src/lib/makeGqlRequest/index.ts"),
				o = r("./src/graphql/operations/GetPredictionCoinPackages.json"),
				c = r("./src/graphql/operations/ResolvePrediction.json"),
				i = r("./src/graphql/operations/SubredditTopPredictors.json"),
				s = r("./src/graphql/operations/VotePrediction.json");
			const d = (e, t, r) => Object(n.a)(e, {
					...o,
					variables: {
						subredditName: t,
						includeFreePackage: r
					}
				}),
				a = (e, {
					postId: t,
					optionId: r,
					coinPackageId: o,
					price: c
				}) => Object(n.a)(e, {
					...s,
					variables: {
						input: {
							postId: t,
							optionId: r,
							coinPackageId: o,
							price: c
						}
					}
				}),
				l = (e, {
					postId: t,
					optionId: r
				}) => Object(n.a)(e, {
					...c,
					variables: {
						input: {
							postId: t,
							optionId: r
						}
					}
				});
			var u;
			! function(e) {
				e.AllTime = "ALL_TIME", e.Monthly = "MONTHLY"
			}(u || (u = {}));
			const p = (e, {
				subredditId: t,
				period: r,
				top: o,
				includeCurrentRank: c
			}) => Object(n.a)(e, {
				...i,
				variables: {
					subredditId: t,
					period: r,
					top: o,
					includeCurrentRank: c
				}
			})
		},
		"./src/reddit/helpers/trackers/predictions.ts": function(e, t, r) {
			"use strict";
			r.d(t, "e", (function() {
				return o
			})), r.d(t, "f", (function() {
				return c
			})), r.d(t, "g", (function() {
				return i
			})), r.d(t, "c", (function() {
				return s
			})), r.d(t, "i", (function() {
				return d
			})), r.d(t, "d", (function() {
				return a
			})), r.d(t, "a", (function() {
				return l
			})), r.d(t, "h", (function() {
				return u
			})), r.d(t, "b", (function() {
				return p
			}));
			var n = r("./src/reddit/selectors/telemetry.ts");
			const o = e => ({
					...Object(n.defaults)(e),
					source: "poll",
					action: "select",
					noun: "poll_option"
				}),
				c = e => ({
					...Object(n.defaults)(e),
					source: "poll",
					action: "select",
					noun: "prediction_option"
				}),
				i = e => ({
					...Object(n.defaults)(e),
					source: "poll",
					action: "view",
					noun: "predict_info_modal"
				}),
				s = e => ({
					...Object(n.defaults)(e),
					source: "poll",
					action: "close",
					noun: "predict_info_modal"
				}),
				d = e => ({
					...Object(n.defaults)(e),
					source: "poll",
					action: "view",
					noun: "predict_option_modal"
				}),
				a = ({
					pollId: e,
					selectedNumberCoins: t,
					totalStakeAmount: r
				}) => o => ({
					...Object(n.defaults)(o),
					source: "poll",
					action: "confirm",
					noun: "predict",
					poll: Object(n.poll)(o, e, !1, void 0, t),
					goldPurchase: {
						numberCoins: r
					}
				}),
				l = e => ({
					...Object(n.defaults)(e),
					source: "poll",
					action: "click",
					noun: "add_coins"
				}),
				u = e => t => ({
					...Object(n.defaults)(t),
					source: "global",
					action: "view",
					noun: "screen",
					actionInfo: {
						pageType: "predictions_leaderboard",
						reason: e ? "prediction_details" : "subreddit_header"
					}
				}),
				p = ({
					targetUserId: e
				}) => t => ({
					...Object(n.defaults)(t),
					source: "prediction",
					action: "click",
					noun: "leaderboard_profile",
					targetUser: {
						id: e
					}
				})
		},
		"./src/reddit/reducers/features/predictions/index.ts": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/redux/es/redux.js"),
				o = r("./node_modules/lodash/cloneDeep.js"),
				c = r.n(o),
				i = r("./src/reddit/actions/economics/predictions/constants.ts"),
				s = r("./src/reddit/actions/postCreation/constants.ts");
			const d = [];
			var a = (e = d, t) => {
				switch (t.type) {
					case i.f:
					case s.A:
						return d;
					case i.a: {
						const {
							prediction: r
						} = t.payload;
						return [...e, c()(r)]
					}
					default:
						return e
				}
			};
			const l = {};
			var u = (e = l, t) => {
				switch (t.type) {
					case i.c: {
						const {
							currentRank: r,
							subredditId: n,
							topPredictorsRank: o
						} = t.payload;
						return {
							...e,
							[n]: {
								currentRank: r,
								topPredictorsRank: o
							}
						}
					}
					default:
						return e
				}
			};
			const p = {};
			var b = (e = p, t) => {
				switch (t.type) {
					case i.b: {
						const {
							subredditId: r,
							tournaments: n
						} = t.payload;
						return {
							...e,
							[r]: n
						}
					}
					default:
						return e
				}
			};
			t.a = Object(n.c)({
				creation: a,
				leaderboards: u,
				tournaments: b
			})
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-Econ-PredictionLeaderboard-Sidebar.58f98437392914ba1f09.js.map