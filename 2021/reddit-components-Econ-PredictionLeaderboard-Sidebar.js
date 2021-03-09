// https://www.redditstatic.com/desktop2x/reddit-components-Econ-PredictionLeaderboard-Sidebar.82ffec6489dfc0b8f013.js
// Retrieved at 3/9/2021, 5:30:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-Econ-PredictionLeaderboard-Sidebar"], {
		"./node_modules/uuid/index.js": function(e, t, r) {
			var n = r("./node_modules/uuid/v1.js"),
				o = r("./node_modules/uuid/v4.js"),
				i = o;
			i.v1 = n, i.v4 = o, e.exports = i
		},
		"./node_modules/uuid/v1.js": function(e, t, r) {
			var n, o, i = r("./node_modules/uuid/lib/rng-browser.js"),
				s = r("./node_modules/uuid/lib/bytesToUuid.js"),
				c = 0,
				d = 0;
			e.exports = function(e, t, r) {
				var a = t && r || 0,
					l = t || [],
					u = (e = e || {}).node || n,
					p = void 0 !== e.clockseq ? e.clockseq : o;
				if (null == u || null == p) {
					var b = i();
					null == u && (u = n = [1 | b[0], b[1], b[2], b[3], b[4], b[5]]), null == p && (p = o = 16383 & (b[6] << 8 | b[7]))
				}
				var m = void 0 !== e.msecs ? e.msecs : (new Date).getTime(),
					f = void 0 !== e.nsecs ? e.nsecs : d + 1,
					j = m - c + (f - d) / 1e4;
				if (j < 0 && void 0 === e.clockseq && (p = p + 1 & 16383), (j < 0 || m > c) && void 0 === e.nsecs && (f = 0), f >= 1e4) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
				c = m, d = f, o = p;
				var v = (1e4 * (268435455 & (m += 122192928e5)) + f) % 4294967296;
				l[a++] = v >>> 24 & 255, l[a++] = v >>> 16 & 255, l[a++] = v >>> 8 & 255, l[a++] = 255 & v;
				var x = m / 4294967296 * 1e4 & 268435455;
				l[a++] = x >>> 8 & 255, l[a++] = 255 & x, l[a++] = x >>> 24 & 15 | 16, l[a++] = x >>> 16 & 255, l[a++] = p >>> 8 | 128, l[a++] = 255 & p;
				for (var P = 0; P < 6; ++P) l[a + P] = u[P];
				return t || s(l)
			}
		},
		"./src/graphql/operations/AddPredictionDrafts.json": function(e) {
			e.exports = JSON.parse('{"id":"595acecb7f6e"}')
		},
		"./src/graphql/operations/CreatePredictionTournament.json": function(e) {
			e.exports = JSON.parse('{"id":"51591a693756"}')
		},
		"./src/graphql/operations/GetPredictionCoinPackages.json": function(e) {
			e.exports = JSON.parse('{"id":"6829c428155b"}')
		},
		"./src/graphql/operations/GetTournaments.json": function(e) {
			e.exports = JSON.parse('{"id":"6cd935a036e1"}')
		},
		"./src/graphql/operations/ResolvePrediction.json": function(e) {
			e.exports = JSON.parse('{"id":"45c2e0b86b90"}')
		},
		"./src/graphql/operations/SubredditTopPredictors.json": function(e) {
			e.exports = JSON.parse('{"id":"3407d5f67207"}')
		},
		"./src/graphql/operations/UpdatePredictionTournament.json": function(e) {
			e.exports = JSON.parse('{"id":"2245303550b1"}')
		},
		"./src/graphql/operations/VotePrediction.json": function(e) {
			e.exports = JSON.parse('{"id":"1712829dfb21"}')
		},
		"./src/reddit/actions/economics/predictions/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return m
			})), r.d(t, "b", (function() {
				return f
			})), r.d(t, "d", (function() {
				return j
			})), r.d(t, "c", (function() {
				return v
			}));
			r("./node_modules/uuid/index.js");
			var n = r("./src/lib/initializeClient/installReducer.ts"),
				o = r("./src/reddit/reducers/features/predictions/index.ts"),
				i = r("./src/lib/makeActionCreator/index.ts"),
				s = r("./src/reddit/endpoints/economics/predictions.ts"),
				c = r("./src/reddit/selectors/experiments/econ/predictions.ts"),
				d = r("./src/reddit/selectors/posts.ts"),
				a = (r("./src/reddit/selectors/subreddit.ts"), r("./src/reddit/selectors/user.ts"));
			r("./src/reddit/selectors/postCreations.ts");
			Object(n.a)({
				features: {
					predictions: o.a
				}
			});
			r("./src/reddit/selectors/features/predictions/tournaments/index.ts");
			var l = r("./src/reddit/actions/economics/predictions/constants.ts");
			Object(n.a)({
				features: {
					predictions: o.a
				}
			});
			const u = Object(i.a)(l.d),
				p = Object(i.a)(l.f),
				b = Object(i.a)(l.e),
				m = (e, t, r, n) => async (o, i, {
					gqlContext: c
				}) => {
					const d = Object(a.J)(i()),
						l = await Object(s.f)(c(), {
							subredditId: e,
							period: t,
							top: r,
							includeCurrentRank: d,
							tournamentId: n
						});
					if (l.error || !l.ok) throw new Error("Failed to fetch subreddit top predictors");
					const {
						subredditInfoById: p
					} = l.body.data;
					if (!p || !p.predictionWinners) throw new Error("Subreddit has no prediction winners");
					const {
						predictionWinners: b
					} = p, m = {
						subredditId: e,
						...b
					};
					return o(u(m)), m
				}, f = e => async (t, r, {
					gqlContext: n
				}) => {
					const o = r(),
						i = Object(d.U)(o, {
							postId: e,
							disallowProfile: !0
						});
					if (!i) throw new Error("Post does not belong to a subreddit");
					const a = await Object(s.e)(n(), i.name, Object(c.a)(o));
					if (a.error || !a.ok) throw new Error("Failed to fetch coin packs");
					const {
						subredditInfoByName: l
					} = a.body.data;
					if (!l || !l.predictionCoinPackages.length) throw new Error("Subreddit has no coin packs");
					return l.predictionCoinPackages
				}, j = ({
					coinPackageId: e,
					optionId: t,
					postId: r,
					price: n
				}) => async (o, i, {
					gqlContext: c
				}) => {
					const d = await Object(s.j)(c(), {
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
				}, v = ({
					optionId: e,
					postId: t
				}) => async (r, n, {
					gqlContext: o
				}) => {
					const i = await Object(s.h)(o(), {
							optionId: e,
							postId: t
						}),
						{
							resolvePrediction: c
						} = i.body.data;
					if (!(null == c ? void 0 : c.poll)) throw new Error("Failed to resolve prediction");
					return r(b({
						pollId: t,
						prediction: c.poll
					})), c.poll
				};
			Object(i.a)(l.b), Object(i.a)(l.c), Object(i.a)(l.a), Object(i.a)(l.g), Object(i.a)(l.h)
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
			var j = r("./src/reddit/components/UserIcon/index.tsx"),
				v = r("./src/reddit/controls/InternalLink/index.tsx"),
				x = r("./src/reddit/icons/fonts/Coin/index.tsx"),
				P = r("./src/reddit/helpers/trackers/predictions.ts"),
				h = r("./src/reddit/hooks/useTracking.ts"),
				_ = r("./src/config.ts"),
				O = r("./src/reddit/components/Econ/PredictionLeaderboard/Predictor/PlaceBadge/index.m.less"),
				k = r.n(O);
			const g = `${_.a.assetPath}/img/econ/predictions/leaderboard`,
				E = `${g}/first@2x.png`,
				I = `${g}/second@2x.png`,
				C = `${g}/third@2x.png`,
				N = {
					1: {
						alt: n.fbt._("First place", null, {
							hk: "3uGGfU"
						}),
						src: E,
						srcSet: `\n  ${g}/first.png,\n  ${E} 2x,\n  ${g}/first@3x.png 3x,\n`
					},
					2: {
						alt: n.fbt._("Second place", null, {
							hk: "4AYjyw"
						}),
						src: I,
						srcSet: `\n  ${g}/second.png,\n  ${I} 2x,\n  ${g}/second@3x.png 3x,\n`
					},
					3: {
						alt: n.fbt._("Third place", null, {
							hk: "lyjwD"
						}),
						src: C,
						srcSet: `\n  ${g}/third.png,\n  ${C} 2x,\n  ${g}/third@3x.png 3x,\n`
					}
				};

			function w({
				place: e
			}) {
				const t = e && N[e];
				return t ? i.a.createElement("img", {
					alt: t.alt,
					className: k.a.placeBadge,
					src: t.src,
					srcSet: t.srcSet
				}) : null
			}
			var L = r("./src/reddit/components/Econ/PredictionLeaderboard/Predictor/index.m.less"),
				q = r.n(L);
			const {
				fbt: S
			} = r("./node_modules/fbt/lib/FbtPublic.js");

			function y({
				className: e,
				isCurrentUser: t,
				rank: r,
				redditor: n,
				score: o
			}) {
				const s = Object(h.a)();
				if (!n) return null;
				const {
					icon: c,
					name: a,
					profile: l
				} = n;
				return i.a.createElement("div", {
					className: Object(d.a)(q.a.predictor, e)
				}, i.a.createElement("div", {
					className: q.a.rank
				}, r), i.a.createElement(v.a, {
					className: q.a.userLink,
					onClick: () => s(Object(P.b)({
						targetUserId: n.id
					})),
					to: `/user/${a}`
				}, i.a.createElement(w, {
					place: r
				}), i.a.createElement(j.a, {
					className: Object(d.a)(q.a.userIcon, q.a.avatar),
					iconUrl: null == c ? void 0 : c.url,
					isNSFW: !!(null == l ? void 0 : l.isNsfw),
					userName: null != a ? a : ""
				}), i.a.createElement("div", null, i.a.createElement("div", {
					className: q.a.userName
				}, a), t && i.a.createElement("div", {
					className: q.a.yourProfile
				}, S._("Yep, thats you.", null, {
					hk: "3DqdE1"
				})))), i.a.createElement("div", {
					className: q.a.score
				}, i.a.createElement(x.a, {
					className: q.a.coinIcon
				}), o))
			}
			var T = r("./src/reddit/components/Econ/PredictionLeaderboard/List/index.m.less"),
				M = r.n(T);
			const {
				fbt: R
			} = r("./node_modules/fbt/lib/FbtPublic.js");

			function U({
				className: e,
				currentRank: t,
				topPredictorsRank: r
			}) {
				return i.a.createElement("div", {
					className: Object(d.a)(M.a.predictionLeaderboardList, e)
				}, (null == r ? void 0 : r.length) ? r.map(({
					rank: e,
					redditor: r,
					score: n
				}) => r ? i.a.createElement("div", {
					key: `prediction-leaderboard-${r.id}`,
					className: M.a.topPredictor
				}, i.a.createElement(y, {
					isCurrentUser: (null == t ? void 0 : t.redditor.name) === r.name,
					rank: e,
					redditor: r,
					score: n
				})) : null) : R._("No top predictors", null, {
					hk: "1nIqZI"
				}))
			}
			var B = r("./src/higherOrderComponents/asModal/index.tsx"),
				A = r("./src/reddit/contexts/PageLayer/index.tsx"),
				F = r("./src/reddit/icons/svgs/Close/index.tsx"),
				D = A.Y,
				J = r("./src/reddit/components/Econ/PredictionLeaderboard/Modal/index.m.less"),
				V = r.n(J);
			var W = Object(B.a)((function({
					onClose: e,
					currentRank: t,
					topPredictorsRank: r
				}) {
					const n = Object(h.a)(),
						s = D(),
						c = Object(A.w)(s);
					Object(o.useEffect)(() => {
						n(Object(P.h)(c))
					}, []);
					const d = t && t.rank > 0;
					return i.a.createElement("div", {
						className: V.a.container
					}, i.a.createElement("div", {
						className: V.a.header
					}, i.a.createElement(p.q, {
						className: V.a.closeButton,
						Icon: F.a,
						priority: p.b.Plain,
						onClick: e
					}), i.a.createElement("h1", null, "Top Predictors")), i.a.createElement("div", {
						className: V.a.listContainer
					}, i.a.createElement(U, {
						currentRank: t,
						topPredictorsRank: r
					}), d && i.a.createElement("div", {
						className: V.a.spacer
					}, " ")), t && d && i.a.createElement(y, {
						className: V.a.currentRank,
						isCurrentUser: !0,
						rank: t.rank,
						redditor: t.redditor,
						score: t.score
					}))
				})),
				$ = r("./src/reddit/components/Econ/PredictionLeaderboard/Sidebar/index.m.less"),
				Y = r.n($);
			const H = 4,
				G = 25,
				Z = Object(c.c)({
					leaderboard: (e, t) => {
						var r, n;
						return (null === (n = null === (r = e.features) || void 0 === r ? void 0 : r.predictions) || void 0 === n ? void 0 : n.leaderboards[t.subredditId]) || null
					}
				}),
				X = {
					fetchSubredditTopPredictors: a.a
				},
				K = Object(s.b)(Z, X);

			function Q({
				className: e,
				fetchSubredditTopPredictors: t,
				leaderboard: r,
				subredditId: s
			}) {
				var c;
				const [a, m] = Object(o.useState)(!1), [f, j] = Object(o.useState)(!1);
				Object(o.useEffect)(() => {
					(async () => {
						if (!r) try {
							await t(s, b.a.AllTime, G)
						} catch (e) {
							j(!0)
						}
					})()
				}, [s]);
				const v = () => {
					m(!1)
				};
				if (!(null === (c = null == r ? void 0 : r.topPredictorsRank) || void 0 === c ? void 0 : c.length) || f) return null;
				const {
					currentRank: x,
					topPredictorsRank: P
				} = r;
				return i.a.createElement(l.a, null, i.a.createElement(u.a, {
					className: Object(d.a)(Y.a.themedWidget, e),
					title: n.fbt._("Top Predictors", null, {
						hk: "3HCYxQ"
					})
				}, i.a.createElement(U, {
					currentRank: x,
					topPredictorsRank: P.slice(0, H)
				}), i.a.createElement("div", {
					className: Y.a.openModalButtonContainer
				}, i.a.createElement(p.i, {
					className: Y.a.openModalButton,
					isFullWidth: !0,
					onClick: () => {
						m(!0)
					}
				}, n.fbt._("See All", null, {
					hk: "1Ozf02"
				}))), a && i.a.createElement(W, {
					className: Y.a.modal,
					currentRank: x,
					onOverlayClick: v,
					onClose: v,
					topPredictorsRank: r.topPredictorsRank,
					withOverlay: !0
				})))
			}
			t.default = K(Q)
		},
		"./src/reddit/endpoints/economics/predictions.ts": function(e, t, r) {
			"use strict";
			r.d(t, "e", (function() {
				return p
			})), r.d(t, "j", (function() {
				return b
			})), r.d(t, "h", (function() {
				return m
			})), r.d(t, "a", (function() {
				return f
			})), r.d(t, "f", (function() {
				return j
			})), r.d(t, "c", (function() {
				return v
			})), r.d(t, "g", (function() {
				return x
			})), r.d(t, "b", (function() {
				return P
			})), r.d(t, "i", (function() {
				return h
			})), r.d(t, "d", (function() {
				return _
			}));
			var n = r("./src/lib/makeGqlRequest/index.ts"),
				o = r("./src/graphql/operations/AddPredictionDrafts.json"),
				i = r("./src/graphql/operations/CreatePredictionTournament.json"),
				s = r("./src/graphql/operations/GetPredictionCoinPackages.json"),
				c = r("./src/graphql/operations/GetTournaments.json"),
				d = r("./src/graphql/operations/ResolvePrediction.json"),
				a = r("./src/graphql/operations/SubredditTopPredictors.json"),
				l = r("./src/graphql/operations/UpdatePredictionTournament.json"),
				u = r("./src/graphql/operations/VotePrediction.json");
			const p = (e, t, r) => Object(n.a)(e, {
					...s,
					variables: {
						subredditName: t,
						includeFreePackage: r
					}
				}),
				b = (e, {
					postId: t,
					optionId: r,
					coinPackageId: o,
					price: i
				}) => Object(n.a)(e, {
					...u,
					variables: {
						input: {
							postId: t,
							optionId: r,
							coinPackageId: o,
							price: i
						}
					}
				}),
				m = (e, {
					postId: t,
					optionId: r
				}) => Object(n.a)(e, {
					...d,
					variables: {
						input: {
							postId: t,
							optionId: r
						}
					}
				});
			var f;
			! function(e) {
				e.AllTime = "ALL_TIME", e.Monthly = "MONTHLY"
			}(f || (f = {}));
			const j = (e, {
					subredditId: t,
					period: r,
					top: o,
					includeCurrentRank: i,
					tournamentId: s
				}) => Object(n.a)(e, {
					...a,
					variables: {
						subredditId: t,
						period: r,
						top: o,
						includeCurrentRank: i,
						tournamentId: s
					}
				}),
				v = (e, t) => Object(n.a)(e, {
					...i,
					variables: {
						input: t
					}
				}),
				x = (e, t) => Object(n.a)(e, {
					...c,
					variables: t
				}),
				P = (e, t) => Object(n.a)(e, {
					...o,
					variables: {
						input: t
					}
				}),
				h = (e, t) => Object(n.a)(e, {
					...l,
					variables: {
						input: t
					}
				}),
				_ = (e, t) => Object(n.a)(e, {
					...l,
					variables: {
						input: t
					}
				})
		},
		"./src/reddit/helpers/trackers/predictions.ts": function(e, t, r) {
			"use strict";
			r.d(t, "e", (function() {
				return o
			})), r.d(t, "f", (function() {
				return i
			})), r.d(t, "g", (function() {
				return s
			})), r.d(t, "c", (function() {
				return c
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
				i = e => ({
					...Object(n.defaults)(e),
					source: "poll",
					action: "select",
					noun: "prediction_option"
				}),
				s = e => ({
					...Object(n.defaults)(e),
					source: "poll",
					action: "view",
					noun: "predict_info_modal"
				}),
				c = e => ({
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
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-Econ-PredictionLeaderboard-Sidebar.82ffec6489dfc0b8f013.js.map