// https://www.redditstatic.com/desktop2x/reddit-components-Econ-PredictionLeaderboard-Sidebar.5cecc25028206360b3c0.js
// Retrieved at 3/15/2021, 4:30:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-Econ-PredictionLeaderboard-Sidebar"], {
		"./src/reddit/components/Econ/PredictionLeaderboard/List/index.m.less": function(e, t, n) {
			e.exports = {
				predictionLeaderboardList: "WnsHpoM6ZTGbLzCSxG1ho",
				topPredictor: "iABJTvK6lrMc3PmeMk2bZ"
			}
		},
		"./src/reddit/components/Econ/PredictionLeaderboard/List/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			}));
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/components/Econ/PredictionLeaderboard/Predictor/index.tsx"),
				s = n("./src/reddit/components/Econ/PredictionLeaderboard/List/index.m.less"),
				a = n.n(s);
			const {
				fbt: i
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function l({
				className: e,
				currentRank: t,
				topPredictorsRank: n
			}) {
				return o.a.createElement("div", {
					className: Object(c.a)(a.a.predictionLeaderboardList, e)
				}, (null == n ? void 0 : n.length) ? n.map(({
					rank: e,
					redditor: n,
					score: r
				}) => n ? o.a.createElement("div", {
					key: `prediction-leaderboard-${n.id}`,
					className: a.a.topPredictor
				}, o.a.createElement(d.a, {
					isCurrentUser: (null == t ? void 0 : t.redditor.name) === n.name,
					rank: e,
					redditor: n,
					score: r
				})) : null) : i._("No top predictors", null, {
					hk: "1nIqZI"
				}))
			}
		},
		"./src/reddit/components/Econ/PredictionLeaderboard/Modal/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1_C9n5LWcnYHJ78_PhY6M_",
				header: "_29gj_JsULicXdU3UTZKiDI",
				tournamentName: "_3KMEVZQ1fKy47r4xUKQaCg",
				closeButton: "_1Q_qQCWWqlqHQzCU0P83E_",
				listContainer: "_1MiUX_7AddF3lpCZ3nYtMe",
				currentRank: "_39H3viVq70CUv4_7JdBLsx",
				spacer: "_37V-Um9VhBWlh1fA0PP6hv",
				isTournament: "S2wYSCw_j9gZfcPOmSnLk"
			}
		},
		"./src/reddit/components/Econ/PredictionLeaderboard/Modal/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				c = n("./node_modules/react-redux/es/index.js"),
				d = n("./src/lib/classNames/index.ts"),
				s = n("./src/higherOrderComponents/asModal/index.tsx"),
				a = n("./src/reddit/contexts/PageLayer/index.tsx"),
				i = n("./src/reddit/controls/Button/index.tsx"),
				l = n("./src/reddit/icons/svgs/Close/index.tsx"),
				u = n("./src/reddit/helpers/trackers/predictions.ts"),
				m = n("./src/reddit/hooks/usePageLayer.ts"),
				p = n("./src/reddit/hooks/useTracking.ts"),
				b = n("./src/reddit/selectors/features/predictions/tournaments/index.ts"),
				x = n("./src/reddit/components/Econ/PredictionLeaderboard/List/index.tsx"),
				f = n("./src/reddit/components/Econ/PredictionLeaderboard/Predictor/index.tsx"),
				_ = n("./src/reddit/components/Econ/PredictionLeaderboard/Modal/index.m.less"),
				P = n.n(_);
			const {
				fbt: E
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			t.a = Object(s.a)((function({
				onClose: e,
				currentRank: t,
				subredditId: n,
				topPredictorsRank: s,
				tournamentId: _
			}) {
				const k = Object(p.a)(),
					v = Object(m.a)(),
					h = Object(a.w)(v),
					j = Object(c.e)(e => Object(b.e)(e, {
						subredditId: n
					}));
				Object(r.useEffect)(() => {
					k(Object(u.h)(h))
				}, []);
				const L = t && t.rank > 0;
				return o.a.createElement("div", {
					className: Object(d.a)(P.a.container, {
						[P.a.isTournament]: !!_
					})
				}, o.a.createElement("div", {
					className: P.a.header
				}, o.a.createElement(i.q, {
					className: P.a.closeButton,
					Icon: l.a,
					priority: i.b.Plain,
					onClick: e
				}), o.a.createElement("h1", null, _ ? E._("Tournament leaderboard", null, {
					hk: "3GP3FC"
				}) : E._("Top Predictors", null, {
					hk: "4BEbch"
				})), (null == j ? void 0 : j.name) && o.a.createElement("h2", {
					className: P.a.tournamentName
				}, null == j ? void 0 : j.name)), o.a.createElement("div", {
					className: P.a.listContainer
				}, o.a.createElement(x.a, {
					currentRank: t,
					topPredictorsRank: s
				}), L && o.a.createElement("div", {
					className: P.a.spacer
				}, " ")), t && L && o.a.createElement(f.a, {
					className: P.a.currentRank,
					isCurrentUser: !0,
					rank: t.rank,
					redditor: t.redditor,
					score: t.score
				}))
			}))
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
		"./src/reddit/components/Econ/PredictionLeaderboard/Predictor/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return L
			}));
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/components/UserIcon/index.tsx"),
				s = n("./src/reddit/controls/InternalLink/index.tsx"),
				a = n("./src/reddit/icons/fonts/Coin/index.tsx"),
				i = n("./src/reddit/helpers/trackers/predictions.ts"),
				l = n("./src/reddit/hooks/useTracking.ts"),
				u = n("./node_modules/fbt/lib/FbtPublic.js"),
				m = n("./src/config.ts"),
				p = n("./src/reddit/components/Econ/PredictionLeaderboard/Predictor/PlaceBadge/index.m.less"),
				b = n.n(p);
			const x = `${m.a.assetPath}/img/econ/predictions/leaderboard`,
				f = `${x}/first@2x.png`,
				_ = `${x}/second@2x.png`,
				P = `${x}/third@2x.png`,
				E = {
					1: {
						alt: u.fbt._("First place", null, {
							hk: "3uGGfU"
						}),
						src: f,
						srcSet: `\n  ${x}/first.png,\n  ${f} 2x,\n  ${x}/first@3x.png 3x,\n`
					},
					2: {
						alt: u.fbt._("Second place", null, {
							hk: "4AYjyw"
						}),
						src: _,
						srcSet: `\n  ${x}/second.png,\n  ${_} 2x,\n  ${x}/second@3x.png 3x,\n`
					},
					3: {
						alt: u.fbt._("Third place", null, {
							hk: "lyjwD"
						}),
						src: P,
						srcSet: `\n  ${x}/third.png,\n  ${P} 2x,\n  ${x}/third@3x.png 3x,\n`
					}
				};

			function k({
				place: e
			}) {
				const t = e && E[e];
				return t ? o.a.createElement("img", {
					alt: t.alt,
					className: b.a.placeBadge,
					src: t.src,
					srcSet: t.srcSet
				}) : null
			}
			var v = n("./src/reddit/components/Econ/PredictionLeaderboard/Predictor/index.m.less"),
				h = n.n(v);
			const {
				fbt: j
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function L({
				className: e,
				isCurrentUser: t,
				rank: n,
				redditor: r,
				score: u
			}) {
				const m = Object(l.a)();
				if (!r) return null;
				const {
					icon: p,
					name: b,
					profile: x
				} = r;
				return o.a.createElement("div", {
					className: Object(c.a)(h.a.predictor, e)
				}, o.a.createElement("div", {
					className: h.a.rank
				}, n), o.a.createElement(s.a, {
					className: h.a.userLink,
					onClick: () => m(Object(i.b)({
						targetUserId: r.id
					})),
					to: `/user/${b}`
				}, o.a.createElement(k, {
					place: n
				}), o.a.createElement(d.a, {
					className: Object(c.a)(h.a.userIcon, h.a.avatar),
					iconUrl: null == p ? void 0 : p.url,
					isNSFW: !!(null == x ? void 0 : x.isNsfw),
					userName: null != b ? b : ""
				}), o.a.createElement("div", null, o.a.createElement("div", {
					className: h.a.userName
				}, b), t && o.a.createElement("div", {
					className: h.a.yourProfile
				}, j._("Yep, thats you.", null, {
					hk: "3DqdE1"
				})))), o.a.createElement("div", {
					className: h.a.score
				}, o.a.createElement(a.a, {
					className: h.a.coinIcon
				}), u))
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
				return O
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				c = n.n(o),
				d = n("./node_modules/react-redux/es/index.js"),
				s = n("./node_modules/reselect/es/index.js"),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/actions/economics/predictions/index.ts"),
				l = n("./src/reddit/components/SidebarSpacer/index.tsx"),
				u = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				m = n("./src/reddit/controls/Button/index.tsx"),
				p = n("./src/reddit/endpoints/economics/predictions.ts"),
				b = n("./src/lib/initializeClient/installReducer.ts"),
				x = n("./src/reddit/reducers/features/predictions/index.ts");
			Object(b.a)({
				features: {
					predictions: x.a
				}
			});
			var f = n("./src/reddit/components/Econ/PredictionLeaderboard/List/index.tsx"),
				_ = n("./src/reddit/components/Econ/PredictionLeaderboard/Modal/index.tsx"),
				P = n("./src/reddit/components/Econ/PredictionLeaderboard/Sidebar/index.m.less"),
				E = n.n(P);
			const k = 4,
				v = 25,
				h = Object(s.c)({
					leaderboard: (e, t) => {
						var n, r;
						return (null === (r = null === (n = e.features) || void 0 === n ? void 0 : n.predictions) || void 0 === r ? void 0 : r.leaderboards[t.subredditId]) || null
					}
				}),
				j = {
					fetchSubredditTopPredictors: i.d
				},
				L = Object(d.b)(h, j);

			function O({
				className: e,
				fetchSubredditTopPredictors: t,
				leaderboard: n,
				subredditId: d,
				tournamentId: s
			}) {
				var i;
				const [b, x] = Object(o.useState)(!1), [P, h] = Object(o.useState)(!1);
				Object(o.useEffect)(() => {
					(async () => {
						if (!n) try {
							await t(d, p.a.AllTime, v, s)
						} catch (e) {
							h(!0)
						}
					})()
				}, [d]);
				const j = () => {
					x(!1)
				};
				if (!(null === (i = null == n ? void 0 : n.topPredictorsRank) || void 0 === i ? void 0 : i.length) || P) return null;
				const {
					currentRank: L,
					topPredictorsRank: O
				} = n;
				return c.a.createElement(l.a, null, c.a.createElement(u.a, {
					className: Object(a.a)(E.a.themedWidget, e),
					title: s ? r.fbt._("Tournament leaderboard", null, {
						hk: "1WFLrI"
					}) : r.fbt._("Top Predictors", null, {
						hk: "3HCYxQ"
					})
				}, c.a.createElement(f.a, {
					currentRank: L,
					topPredictorsRank: O.slice(0, k)
				}), c.a.createElement("div", {
					className: E.a.openModalButtonContainer
				}, c.a.createElement(m.i, {
					className: E.a.openModalButton,
					isFullWidth: !0,
					onClick: () => {
						x(!0)
					}
				}, r.fbt._("See All", null, {
					hk: "1Ozf02"
				}))), b && c.a.createElement(_.a, {
					className: E.a.modal,
					currentRank: L,
					onOverlayClick: j,
					onClose: j,
					subredditId: d,
					topPredictorsRank: n.topPredictorsRank,
					tournamentId: s,
					withOverlay: !0
				})))
			}
			t.default = L(O)
		},
		"./src/reddit/helpers/trackers/predictions.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return o
			})), n.d(t, "f", (function() {
				return c
			})), n.d(t, "g", (function() {
				return d
			})), n.d(t, "c", (function() {
				return s
			})), n.d(t, "i", (function() {
				return a
			})), n.d(t, "d", (function() {
				return i
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
				d = e => ({
					...Object(r.defaults)(e),
					source: "poll",
					action: "view",
					noun: "predict_info_modal"
				}),
				s = e => ({
					...Object(r.defaults)(e),
					source: "poll",
					action: "close",
					noun: "predict_info_modal"
				}),
				a = e => ({
					...Object(r.defaults)(e),
					source: "poll",
					action: "view",
					noun: "predict_option_modal"
				}),
				i = ({
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
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-Econ-PredictionLeaderboard-Sidebar.5cecc25028206360b3c0.js.map