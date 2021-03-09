// https://www.redditstatic.com/desktop2x/reddit-components-Econ-PredictionLeaderboard-Sidebar.ffaacbd81b27149b1b32.js
// Retrieved at 3/9/2021, 6:10:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-Econ-PredictionLeaderboard-Sidebar"], {
		"./src/reddit/components/Econ/PredictionLeaderboard/List/index.m.less": function(e, t, n) {
			e.exports = {
				predictionLeaderboardList: "WnsHpoM6ZTGbLzCSxG1ho",
				topPredictor: "iABJTvK6lrMc3PmeMk2bZ"
			}
		},
		"./src/reddit/components/Econ/PredictionLeaderboard/Modal/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1_C9n5LWcnYHJ78_PhY6M_",
				header: "_29gj_JsULicXdU3UTZKiDI",
				closeButton: "_1Q_qQCWWqlqHQzCU0P83E_",
				listContainer: "_1MiUX_7AddF3lpCZ3nYtMe",
				currentRank: "_39H3viVq70CUv4_7JdBLsx",
				spacer: "_37V-Um9VhBWlh1fA0PP6hv"
			}
		},
		"./src/reddit/components/Econ/PredictionLeaderboard/Predictor/PlaceBadge/index.m.less": function(e, t, n) {
			e.exports = {
				placeBadge: "_3j-KsBmkOxaO1_k3p8PS4q"
			}
		},
		"./src/reddit/components/Econ/PredictionLeaderboard/Predictor/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/Econ/PredictionLeaderboard/Sidebar/index.m.less": function(e, t, n) {
			e.exports = {
				themedWidget: "_3uxjfiwzc4v4BiMEQHtZ3J",
				openModalButtonContainer: "Phr96vmtPy_VTwey6qWL_",
				openModalButton: "_1wSRscxdBnLN2r_D5XZhbe",
				modal: "PxqE9oFD_60_KiA_nA9CV"
			}
		},
		"./src/reddit/components/Econ/PredictionLeaderboard/Sidebar/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "PredictionLeaderboardSidebar", (function() {
				return K
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				c = n.n(o),
				s = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/actions/economics/predictions/index.ts"),
				l = n("./src/reddit/components/SidebarSpacer/index.tsx"),
				u = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				m = n("./src/reddit/controls/Button/index.tsx"),
				p = n("./src/reddit/endpoints/economics/predictions.ts"),
				b = n("./src/lib/initializeClient/installReducer.ts"),
				f = n("./src/reddit/reducers/features/predictions/index.ts");
			Object(b.a)({
				features: {
					predictions: f.a
				}
			});
			var x = n("./src/reddit/components/UserIcon/index.tsx"),
				_ = n("./src/reddit/controls/InternalLink/index.tsx"),
				P = n("./src/reddit/icons/fonts/Coin/index.tsx"),
				E = n("./src/reddit/helpers/trackers/predictions.ts"),
				v = n("./src/reddit/hooks/useTracking.ts"),
				k = n("./src/config.ts"),
				h = n("./src/reddit/components/Econ/PredictionLeaderboard/Predictor/PlaceBadge/index.m.less"),
				j = n.n(h);
			const O = `${k.a.assetPath}/img/econ/predictions/leaderboard`,
				N = `${O}/first@2x.png`,
				C = `${O}/second@2x.png`,
				L = `${O}/third@2x.png`,
				g = {
					1: {
						alt: r.fbt._("First place", null, {
							hk: "3uGGfU"
						}),
						src: N,
						srcSet: `\n  ${O}/first.png,\n  ${N} 2x,\n  ${O}/first@3x.png 3x,\n`
					},
					2: {
						alt: r.fbt._("Second place", null, {
							hk: "4AYjyw"
						}),
						src: C,
						srcSet: `\n  ${O}/second.png,\n  ${C} 2x,\n  ${O}/second@3x.png 3x,\n`
					},
					3: {
						alt: r.fbt._("Third place", null, {
							hk: "lyjwD"
						}),
						src: L,
						srcSet: `\n  ${O}/third.png,\n  ${L} 2x,\n  ${O}/third@3x.png 3x,\n`
					}
				};

			function S({
				place: e
			}) {
				const t = e && g[e];
				return t ? c.a.createElement("img", {
					alt: t.alt,
					className: j.a.placeBadge,
					src: t.src,
					srcSet: t.srcSet
				}) : null
			}
			var I = n("./src/reddit/components/Econ/PredictionLeaderboard/Predictor/index.m.less"),
				w = n.n(I);
			const {
				fbt: y
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function B({
				className: e,
				isCurrentUser: t,
				rank: n,
				redditor: r,
				score: o
			}) {
				const s = Object(v.a)();
				if (!r) return null;
				const {
					icon: a,
					name: d,
					profile: l
				} = r;
				return c.a.createElement("div", {
					className: Object(i.a)(w.a.predictor, e)
				}, c.a.createElement("div", {
					className: w.a.rank
				}, n), c.a.createElement(_.a, {
					className: w.a.userLink,
					onClick: () => s(Object(E.b)({
						targetUserId: r.id
					})),
					to: `/user/${d}`
				}, c.a.createElement(S, {
					place: n
				}), c.a.createElement(x.a, {
					className: Object(i.a)(w.a.userIcon, w.a.avatar),
					iconUrl: null == a ? void 0 : a.url,
					isNSFW: !!(null == l ? void 0 : l.isNsfw),
					userName: null != d ? d : ""
				}), c.a.createElement("div", null, c.a.createElement("div", {
					className: w.a.userName
				}, d), t && c.a.createElement("div", {
					className: w.a.yourProfile
				}, y._("Yep, thats you.", null, {
					hk: "3DqdE1"
				})))), c.a.createElement("div", {
					className: w.a.score
				}, c.a.createElement(P.a, {
					className: w.a.coinIcon
				}), o))
			}
			var M = n("./src/reddit/components/Econ/PredictionLeaderboard/List/index.m.less"),
				U = n.n(M);
			const {
				fbt: A
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function R({
				className: e,
				currentRank: t,
				topPredictorsRank: n
			}) {
				return c.a.createElement("div", {
					className: Object(i.a)(U.a.predictionLeaderboardList, e)
				}, (null == n ? void 0 : n.length) ? n.map(({
					rank: e,
					redditor: n,
					score: r
				}) => n ? c.a.createElement("div", {
					key: `prediction-leaderboard-${n.id}`,
					className: U.a.topPredictor
				}, c.a.createElement(B, {
					isCurrentUser: (null == t ? void 0 : t.redditor.name) === n.name,
					rank: e,
					redditor: n,
					score: r
				})) : null) : A._("No top predictors", null, {
					hk: "1nIqZI"
				}))
			}
			var T = n("./src/higherOrderComponents/asModal/index.tsx"),
				F = n("./src/reddit/contexts/PageLayer/index.tsx"),
				$ = n("./src/reddit/icons/svgs/Close/index.tsx"),
				q = n("./src/reddit/hooks/usePageLayer.ts"),
				D = n("./src/reddit/components/Econ/PredictionLeaderboard/Modal/index.m.less"),
				V = n.n(D);
			var W = Object(T.a)((function({
					onClose: e,
					currentRank: t,
					topPredictorsRank: n
				}) {
					const r = Object(v.a)(),
						s = Object(q.a)(),
						a = Object(F.w)(s);
					Object(o.useEffect)(() => {
						r(Object(E.h)(a))
					}, []);
					const i = t && t.rank > 0;
					return c.a.createElement("div", {
						className: V.a.container
					}, c.a.createElement("div", {
						className: V.a.header
					}, c.a.createElement(m.q, {
						className: V.a.closeButton,
						Icon: $.a,
						priority: m.b.Plain,
						onClick: e
					}), c.a.createElement("h1", null, "Top Predictors")), c.a.createElement("div", {
						className: V.a.listContainer
					}, c.a.createElement(R, {
						currentRank: t,
						topPredictorsRank: n
					}), i && c.a.createElement("div", {
						className: V.a.spacer
					}, " ")), t && i && c.a.createElement(B, {
						className: V.a.currentRank,
						isCurrentUser: !0,
						rank: t.rank,
						redditor: t.redditor,
						score: t.score
					}))
				})),
				Q = n("./src/reddit/components/Econ/PredictionLeaderboard/Sidebar/index.m.less"),
				H = n.n(Q);
			const J = 4,
				Y = 25,
				Z = Object(a.c)({
					leaderboard: (e, t) => {
						var n, r;
						return (null === (r = null === (n = e.features) || void 0 === n ? void 0 : n.predictions) || void 0 === r ? void 0 : r.leaderboards[t.subredditId]) || null
					}
				}),
				X = {
					fetchSubredditTopPredictors: d.a
				},
				G = Object(s.b)(Z, X);

			function K({
				className: e,
				fetchSubredditTopPredictors: t,
				leaderboard: n,
				subredditId: s
			}) {
				var a;
				const [d, b] = Object(o.useState)(!1), [f, x] = Object(o.useState)(!1);
				Object(o.useEffect)(() => {
					(async () => {
						if (!n) try {
							await t(s, p.a.AllTime, Y)
						} catch (e) {
							x(!0)
						}
					})()
				}, [s]);
				const _ = () => {
					b(!1)
				};
				if (!(null === (a = null == n ? void 0 : n.topPredictorsRank) || void 0 === a ? void 0 : a.length) || f) return null;
				const {
					currentRank: P,
					topPredictorsRank: E
				} = n;
				return c.a.createElement(l.a, null, c.a.createElement(u.a, {
					className: Object(i.a)(H.a.themedWidget, e),
					title: r.fbt._("Top Predictors", null, {
						hk: "3HCYxQ"
					})
				}, c.a.createElement(R, {
					currentRank: P,
					topPredictorsRank: E.slice(0, J)
				}), c.a.createElement("div", {
					className: H.a.openModalButtonContainer
				}, c.a.createElement(m.i, {
					className: H.a.openModalButton,
					isFullWidth: !0,
					onClick: () => {
						b(!0)
					}
				}, r.fbt._("See All", null, {
					hk: "1Ozf02"
				}))), d && c.a.createElement(W, {
					className: H.a.modal,
					currentRank: P,
					onOverlayClick: _,
					onClose: _,
					topPredictorsRank: n.topPredictorsRank,
					withOverlay: !0
				})))
			}
			t.default = G(K)
		},
		"./src/reddit/helpers/trackers/predictions.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return o
			})), n.d(t, "f", (function() {
				return c
			})), n.d(t, "g", (function() {
				return s
			})), n.d(t, "c", (function() {
				return a
			})), n.d(t, "i", (function() {
				return i
			})), n.d(t, "d", (function() {
				return d
			})), n.d(t, "a", (function() {
				return l
			})), n.d(t, "h", (function() {
				return u
			})), n.d(t, "b", (function() {
				return m
			}));
			var r = n("./src/reddit/selectors/telemetry.ts");
			const o = e => ({
					...Object(r.defaults)(e),
					source: "poll",
					action: "select",
					noun: "poll_option"
				}),
				c = e => ({
					...Object(r.defaults)(e),
					source: "poll",
					action: "select",
					noun: "prediction_option"
				}),
				s = e => ({
					...Object(r.defaults)(e),
					source: "poll",
					action: "view",
					noun: "predict_info_modal"
				}),
				a = e => ({
					...Object(r.defaults)(e),
					source: "poll",
					action: "close",
					noun: "predict_info_modal"
				}),
				i = e => ({
					...Object(r.defaults)(e),
					source: "poll",
					action: "view",
					noun: "predict_option_modal"
				}),
				d = ({
					pollId: e,
					selectedNumberCoins: t,
					totalStakeAmount: n
				}) => o => ({
					...Object(r.defaults)(o),
					source: "poll",
					action: "confirm",
					noun: "predict",
					poll: Object(r.poll)(o, e, !1, void 0, t),
					goldPurchase: {
						numberCoins: n
					}
				}),
				l = e => ({
					...Object(r.defaults)(e),
					source: "poll",
					action: "click",
					noun: "add_coins"
				}),
				u = e => t => ({
					...Object(r.defaults)(t),
					source: "global",
					action: "view",
					noun: "screen",
					actionInfo: {
						pageType: "predictions_leaderboard",
						reason: e ? "prediction_details" : "subreddit_header"
					}
				}),
				m = ({
					targetUserId: e
				}) => t => ({
					...Object(r.defaults)(t),
					source: "prediction",
					action: "click",
					noun: "leaderboard_profile",
					targetUser: {
						id: e
					}
				})
		},
		"./src/reddit/icons/fonts/Coin/index.m.less": function(e, t, n) {
			e.exports = {
				CoinIcon: "_12xlue8dQ1odPw1J81FIGQ",
				coinIcon: "_12xlue8dQ1odPw1J81FIGQ"
			}
		},
		"./src/reddit/icons/fonts/Coin/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				c = n("./src/lib/classNames/index.ts"),
				s = n("./src/reddit/constants/colors.ts"),
				a = n("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				d = n("./src/reddit/icons/fonts/Coin/index.m.less"),
				l = n.n(d);
			const u = n("./src/lib/lessComponent.tsx").a.wrapped(e => {
				const t = Object(a.a)();
				return o.a.createElement("i", {
					className: Object(c.a)(e.className, Object(i.b)(t ? "coins" : "coin", e.isFilled)),
					style: {
						color: e.fillColor || s.b.gold
					}
				})
			}, "CoinIcon", l.a);
			t.a = u
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-Econ-PredictionLeaderboard-Sidebar.ffaacbd81b27149b1b32.js.map