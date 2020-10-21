// https://www.redditstatic.com/desktop2x/reddit-components-Econ-Prediction.29acf2c35fd8de1cedce.js
// Retrieved at 10/21/2020, 2:40:07 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-Econ-Prediction"], {
		"./src/graphql/operations/GetPredictionCoinPackages.json": function(e) {
			e.exports = JSON.parse('{"id":"8d63fcc52d73"}')
		},
		"./src/graphql/operations/SubredditTopPredictors.json": function(e) {
			e.exports = JSON.parse('{"id":"eff959e20fd4"}')
		},
		"./src/graphql/operations/VotePrediction.json": function(e) {
			e.exports = JSON.parse('{"id":"95f86f022a36"}')
		},
		"./src/reddit/actions/economics/predictions/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return s
			}));
			const o = "FETCH_SUBREDDIT_TOP_PREDICTORS_SUCCESS",
				s = "PREDICTION_VOTE_SUCCESS"
		},
		"./src/reddit/actions/economics/predictions/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			})), n.d(t, "b", (function() {
				return m
			})), n.d(t, "c", (function() {
				return p
			}));
			var o = n("./src/lib/initializeClient/installReducer.ts"),
				s = n("./src/reddit/reducers/features/predictions/index.ts"),
				i = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/reddit/endpoints/economics/predictions.ts"),
				r = n("./src/reddit/selectors/posts.ts"),
				c = n("./src/reddit/actions/economics/predictions/constants.ts");
			Object(o.a)({
				features: {
					predictions: s.a
				}
			});
			const d = Object(i.a)(c.a),
				l = Object(i.a)(c.b),
				u = (e, t, n) => async (o, s, i) => {
					let {
						gqlContext: r
					} = i;
					const c = await Object(a.c)(r(), {
						subredditId: e,
						period: t,
						top: n
					});
					if (c.error || !c.ok) throw new Error("Failed to fetch subreddit top predictors");
					const {
						subredditInfoById: l
					} = c.body.data;
					if (!l || !l.predictionWinners) throw new Error("Subreddit has no prediction winners");
					const {
						predictionWinners: u
					} = l, m = Object.assign({
						subredditId: e
					}, u);
					return o(d(m)), m
				}, m = e => async (t, n, o) => {
					let {
						gqlContext: s
					} = o;
					const i = n(),
						c = Object(r.ab)(i, {
							postId: e,
							disallowProfile: !0
						});
					if (!c) throw new Error("Post does not belong to a subreddit");
					const d = await Object(a.b)(s(), c.name);
					if (d.error || !d.ok) throw new Error("Failed to fetch coin packs");
					const {
						subredditInfoByName: l
					} = d.body.data;
					if (!l || !l.predictionCoinPackages.length) throw new Error("Subreddit has no coin packs");
					return l.predictionCoinPackages
				}, p = e => {
					let {
						coinPackageId: t,
						optionId: n,
						postId: o,
						price: s
					} = e;
					return async (e, i, r) => {
						let {
							gqlContext: c
						} = r;
						const d = await Object(a.d)(c(), {
							coinPackageId: t,
							optionId: n,
							postId: o,
							price: s
						});
						if (d.error || !d.ok) throw new Error("Failed to make prediction");
						const {
							votePrediction: u
						} = d.body.data;
						if (!u) throw new Error("Failed to create prediction vote");
						return e(l({
							pollId: o,
							prediction: u.poll,
							price: s
						})), u.poll
					}
				}
		},
		"./src/reddit/components/Econ/CoinsModalHeader/index.m.less": function(e, t, n) {
			e.exports = {
				coinButton: "_2D-JnYPuWU9np1-ycRlU4B",
				addCoins: "_3Q8mNjZ6kXlVXyle3AlgPg",
				coinBalanceIndicator: "_8L3GhmAppBj71I9SA2yAv",
				coinIcon: "_2PQG5IO-LoMyTdh5pHkaVI",
				coinBalance: "IJNEU4MmXrYhw0xUvB2jI",
				plusIcon: "_1yFCLGefJC66-exSRGPxWx",
				closeBtn: "_2eQ0RDYslIQ2AWVCe694Hd",
				closeBtnIcon: "Cqi8E08JLc7am7yAu1zuf",
				gildHeader: "_1xbzKMH-i0xyQAbOKcuuDr",
				headerText: "_1B8sDmFKuUDciAht-FY_me",
				subredditIcon: "qIGsGGDKQfZn_EBSumGVq"
			}
		},
		"./src/reddit/components/Econ/CoinsModalHeader/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				i = n("./src/reddit/components/Econ/CoinsModalHeader/index.m.less"),
				a = n.n(i),
				r = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				c = n("./src/reddit/icons/svgs/CoinV2/index.tsx"),
				d = n("./src/reddit/icons/svgs/Plus/index.tsx");
			const {
				fbt: l
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function u(e) {
				let {
					onAddCoins: t,
					onCancel: n,
					title: o,
					userCoins: i
				} = e;
				return s.a.createElement("div", {
					className: a.a.gildHeader
				}, s.a.createElement("button", {
					className: a.a.closeBtn,
					onClick: n
				}, s.a.createElement(r.b, {
					className: a.a.closeBtnIcon
				})), s.a.createElement("div", {
					className: a.a.headerText
				}, o), s.a.createElement("button", {
					className: a.a.coinButton,
					onClick: t
				}, s.a.createElement("div", {
					className: a.a.coinBalanceIndicator,
					tabIndex: -1
				}, s.a.createElement(c.a, {
					className: a.a.coinIcon
				}), s.a.createElement("div", {
					className: a.a.coinBalance
				}, (i || 0).toLocaleString())), s.a.createElement("div", {
					className: a.a.addCoins,
					tabIndex: -1
				}, s.a.createElement(d.a, {
					className: a.a.plusIcon
				}))))
			}
		},
		"./src/reddit/components/Econ/Prediction/NoPredictionError/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3UNYrzKG9vrW6s4_OVCGNt"
			}
		},
		"./src/reddit/components/Econ/Prediction/PredictionModal/index.m.less": function(e, t, n) {
			e.exports = {
				modalContent: "PCljWh8QzWYMvMGLfqHrV",
				wagerSelectorContainer: "Ohg8M4OViq6F3ULEi2saM",
				wagerSelector: "_2os23XvAUtqZ5v2x_vZB4q",
				wagerSelectorButton: "_2fD6RvMV1dH5U6TJHO81PQ",
				wagerSelectorButtonIcon: "_3igSbIyijCUbD3M6-qz2f_",
				wagerSelectorAmount: "_3yy0IyOr4j2OT-I1JKUGDN",
				insufficientCoinsMessage: "_1hvldpdWF4u23CwFJgpxgx",
				coinIcon: "_2do4bEk5jSnsiJimU-j6Zg",
				predictButton: "_2VLnd_5JRilEY5bl7h_Ntn",
				isFetchingCoinPacks: "_1lGLdd2ymJcfTtlY7_LXAj",
				isCreatingVote: "GpWe_Aro2EMEP-Dd8HoN5",
				disclaimer: "_2dot3s8nobkqMUncV3HgJr"
			}
		},
		"./src/reddit/components/Econ/Prediction/PredictionOption/index.m.less": function(e, t, n) {
			e.exports = {
				optionButton: "_2ntp-JcW8WtkgytaV4Ulhf",
				hasVoted: "_21iYsZEeiTZDG87oRfe-2o",
				isCorrect: "_3jmmoq1otA_Twif-J89nrp",
				optionBody: "X-1krr1vt__mfLM_N6-fc",
				optionText: "_2EtRvWvspf1e95m4nOww3i",
				optionStake: "_13IxX5Ek1VDFfqrZVhO_Xz",
				optionPercentage: "_3cTLrBysxImecWhQKcy3u_",
				isSelected: "Tg_55Aw6PyKCmanFRdTd-",
				checkmarkIcon: "_2gAEl8yg8wfIPLrKbwHden",
				loggedOutTooltip: "_1Hv_GwhEllz9BSmfsqochE",
				coinIcon: "_6FvDlfj5P0tQCO_G9qec9"
			}
		},
		"./src/reddit/components/Econ/Prediction/PredictionStatus/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_2N8sOpL8HjMfaKS_SGauz6",
				statusBar: "_3UgGKQLpMCbhSbdPqloGc4",
				coinIcon: "_1O2NC4MPtXkD58WXlRCpZF",
				divider: "SZcaijbNtMWo_Hks5p9cB",
				clockIcon: "DzRACNzo9EG6-6h40DhZA"
			}
		},
		"./src/reddit/components/Econ/Prediction/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_12AfXWHuSC5UHX0_ne19LR",
				poll: "_1iOvuGeyccWW1Hv9HUTB4H",
				forCommentsPage: "_3db-wOkv0X5qH0E-5QuyBW",
				isEditing: "_1sQkurV7y_5Plq7_lWzN9h"
			}
		},
		"./src/reddit/components/Econ/Prediction/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "Prediction", (function() {
				return Q
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				r = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/timeUntil/index.ts"),
				d = n("./src/reddit/contexts/PageLayer/index.tsx"),
				l = n("./src/reddit/actions/economics/helpers/index.ts"),
				u = n("./src/reddit/actions/economics/predictions/index.ts"),
				m = n("./src/reddit/actions/toaster.ts"),
				p = n("./src/reddit/models/Toast/index.ts"),
				b = n("./src/reddit/selectors/poll/index.ts"),
				f = n("./src/reddit/selectors/postCreations.ts"),
				E = n("./src/reddit/selectors/posts.ts"),
				g = n("./src/reddit/selectors/user.ts"),
				C = n("./src/reddit/components/Econ/Prediction/NoPredictionError/index.m.less"),
				x = n.n(C);
			const {
				fbt: h
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var v = e => {
					let {
						className: t
					} = e;
					return s.a.createElement("div", {
						className: Object(r.a)(x.a.container, t)
					}, h._("Error: Could not load prediction", null, {
						hk: "3SDSgH"
					}))
				},
				_ = n("./src/higherOrderComponents/asModal/index.tsx"),
				k = n("./src/reddit/components/Econ/CoinsModalHeader/index.tsx"),
				P = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				w = n("./src/reddit/icons/svgs/CoinV2/index.tsx"),
				I = n("./src/reddit/icons/svgs/Minus/index.tsx"),
				O = n("./src/reddit/icons/svgs/Plus/index.tsx"),
				N = n("./src/reddit/components/Econ/Prediction/PredictionModal/index.m.less"),
				j = n.n(N);
			const {
				fbt: S
			} = n("./node_modules/fbt/lib/FbtPublic.js"), y = Object(a.c)({
				userCoins: g.d
			}), B = {
				getCoinPacks: u.b,
				showToast: m.e
			};
			var A = Object(i.b)(y, B)(Object(_.a)(e => {
					let {
						getCoinPacks: t,
						isCreatingVote: n,
						onCancel: i,
						onPredict: a,
						pollId: c,
						showToast: d,
						userCoins: u
					} = e;
					var m;
					const [b, f] = Object(o.useState)(0), [E, g] = Object(o.useState)(null);
					Object(o.useEffect)(() => {
						(async () => {
							if (!E) try {
								const e = await t(c);
								e.length || (d({
									duration: 5e3,
									kind: p.b.Error,
									text: S._("Error: Subreddit is not configured with coin packs", null, {
										hk: "2t8uz0"
									})
								}), i()), g(e)
							} catch (e) {
								d({
									duration: 5e3,
									kind: p.b.Error,
									text: S._("Error: Failed to fetch coin packs, please try again later", null, {
										hk: "2aROIr"
									})
								}), i()
							}
						})()
					}, [E, t, i, c, d]);
					const C = (null === (m = null == E ? void 0 : E[b]) || void 0 === m ? void 0 : m.coins) && u < E[b].coins;
					return s.a.createElement("div", null, s.a.createElement(k.a, {
						onAddCoins: l.promptUserToBuyMoreCoins,
						onCancel: i,
						title: S._("Predict the Future", null, {
							hk: "4bHA0N"
						}),
						userCoins: u
					}), s.a.createElement("div", {
						className: j.a.modalContent
					}, s.a.createElement("div", {
						className: j.a.wagerSelectorContainer
					}, s.a.createElement("div", {
						className: j.a.wagerSelector
					}, s.a.createElement("button", {
						disabled: 0 === b,
						className: j.a.wagerSelectorButton,
						onClick: e => {
							e.preventDefault(), E && 0 !== b && f(b - 1)
						}
					}, s.a.createElement(I.a, {
						className: j.a.wagerSelectorButtonIcon
					})), E ? s.a.createElement("div", {
						className: j.a.wagerSelectorAmount
					}, s.a.createElement(w.a, {
						className: j.a.coinIcon
					}), " ", E[b].coins) : s.a.createElement(P.a, {
						sizePx: 24
					}), s.a.createElement("button", {
						disabled: !(!E || b !== E.length - 1),
						className: j.a.wagerSelectorButton,
						onClick: e => {
							e.preventDefault(), E && b !== E.length - 1 && f(b + 1)
						}
					}, s.a.createElement(O.a, {
						className: j.a.wagerSelectorButtonIcon
					}))), C && s.a.createElement("div", {
						className: j.a.insufficientCoinsMessage
					}, S._("Insufficient coins", null, {
						hk: "2Mo83P"
					}))), s.a.createElement("button", {
						className: Object(r.a)(j.a.predictButton, {
							[j.a.isFetchingCoinPacks]: !E,
							[j.a.isCreatingVote]: n
						}),
						disabled: !E || n,
						onClick: e => {
							e.preventDefault(), E && a(E[b])
						}
					}, n ? s.a.createElement(P.a, {
						sizePx: 16
					}) : C ? S._("Get Coins", null, {
						hk: "11KD6n"
					}) : S._("Predict to Win Coins", null, {
						hk: "SjKBe"
					})), s.a.createElement("div", {
						className: j.a.disclaimer
					}, S._("You must be over 18 to use Predictions. {=Predictions don’t offer an opportunity to win real money or prizes.} Your username and prediction is viewable by other redditors.", [S._param("=Predictions don’t offer an opportunity to win real money or prizes.", s.a.createElement("a", {
						href: "https://www.redditinc.com/policies/previews-terms",
						target: "_blank"
					}, S._("Predictions don’t offer an opportunity to win real money or prizes.", null, {
						hk: "2iU1hi"
					})))], {
						hk: "1hLwRa"
					}))))
				})),
				M = n("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				H = n("./src/reddit/components/Econ/Prediction/PredictionOption/index.m.less"),
				L = n.n(H);
			const {
				fbt: T
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var D = e => {
					let {
						isEnded: t,
						isSelected: n,
						onClick: o,
						option: i,
						resolvedOptionId: a,
						userIsLoggedOut: c,
						userSelection: d,
						votePercentage: l
					} = e;
					const u = a === i.id,
						m = t || !!d || !!a;
					return s.a.createElement("button", {
						className: Object(r.a)(L.a.optionButton, {
							[L.a.hasVoted]: null !== i.userStakeAmount,
							[L.a.isCorrect]: u,
							[L.a.isSelected]: n
						}),
						disabled: m || c,
						onClick: o
					}, s.a.createElement("div", {
						className: L.a.optionBody
					}, u && s.a.createElement(M.a, {
						className: L.a.checkmarkIcon
					}), s.a.createElement("div", {
						className: L.a.optionText
					}, i.text), i.userStakeAmount && s.a.createElement("div", {
						className: L.a.optionStake
					}, s.a.createElement(w.a, {
						className: L.a.coinIcon
					}), " ", i.userStakeAmount)), l && l > 0 && s.a.createElement("div", {
						className: L.a.optionPercentage,
						style: {
							width: "".concat(l, "%")
						}
					}, " "), c && !m && s.a.createElement("div", {
						className: L.a.loggedOutTooltip
					}, T._("You must be logged in", null, {
						hk: "18KrL7"
					})))
				},
				V = n("./src/reddit/icons/svgs/ClockFilled/index.tsx"),
				F = n("./src/reddit/components/Econ/Prediction/PredictionStatus/index.m.less"),
				q = n.n(F);
			const {
				fbt: U
			} = n("./node_modules/fbt/lib/FbtPublic.js"), G = e => {
				let {
					endsAt: t,
					resolvedOptionId: n
				} = e;
				return Date.now() > t ? s.a.createElement("div", {
					className: q.a.statusBar
				}, s.a.createElement(V.a, {
					className: q.a.clockIcon
				}), n ? U._("Prediction ended", null, {
					hk: "3o79Ig"
				}) : U._("Ended. Awaiting results", null, {
					hk: "1szagh"
				})) : s.a.createElement("div", {
					className: q.a.statusBar
				}, s.a.createElement(V.a, {
					className: q.a.clockIcon
				}), U._("Prediction ends in {expirationDuration}", [U._param("expirationDuration", Object(c.a)(new Date(t), !0))], {
					hk: "3ysXEE"
				}))
			};
			var R = e => {
					let {
						endsAt: t,
						resolvedOptionId: n,
						totalStakeAmount: o
					} = e;
					return s.a.createElement("div", {
						className: q.a.container
					}, o > 0 && s.a.createElement("div", {
						className: q.a.statusBar
					}, s.a.createElement(w.a, {
						className: q.a.coinIcon
					}), o, " ", U._("added by participants", null, {
						hk: "PSq3T"
					})), s.a.createElement(G, {
						endsAt: t,
						resolvedOptionId: n
					}))
				},
				z = n("./src/reddit/components/Econ/Prediction/index.m.less"),
				W = n.n(z);
			const {
				fbt: J
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Z = Object(a.c)({
				isEditing: f.G,
				prediction: b.g,
				pollId: b.a,
				post: E.N,
				subredditOrProfile: E.ab,
				userCoins: g.d,
				userIsLoggedIn: g.I
			}), K = {
				onPredictionVote: u.c,
				showToast: m.e
			}, X = Object(d.t)({
				isCommentsPage: d.w
			}), Q = e => {
				let {
					className: t,
					isCommentsPage: n,
					isEditing: i,
					onPredictionVote: a,
					prediction: d,
					pollId: u,
					subredditOrProfile: m,
					showToast: b,
					userCoins: f,
					userIsLoggedIn: E
				} = e;
				const [g, C] = Object(o.useState)(!1), [x, h] = Object(o.useState)(null);
				if (!u || !d || !m) return s.a.createElement(v, null);
				const {
					endsAt: _,
					options: k,
					resolvedOptionId: P,
					totalStakeAmount: w,
					userSelection: I
				} = d, O = _ < Date.now(), N = () => {
					h(null)
				}, j = n ? Object(r.a)(t, W.a.container, W.a.forCommentsPage, {
					[W.a.isEditing]: i
				}) : Object(r.a)(t, W.a.container);
				return s.a.createElement("div", {
					className: j,
					onClick: e => {
						d && e.stopPropagation()
					}
				}, s.a.createElement("div", {
					className: W.a.poll
				}, k.map(e => s.a.createElement(D, {
					key: "prediction-option-".concat(e.id),
					isEnded: O,
					isSelected: x === e.id,
					option: e,
					onClick: () => (e => {
						O || I || h(e.id)
					})(e),
					resolvedOptionId: P,
					userSelection: I,
					userIsLoggedOut: !E,
					votePercentage: (I || O) && e.totalStakeAmount ? Math.floor(e.totalStakeAmount / w * 100) : null
				}))), s.a.createElement(R, {
					endsAt: _,
					resolvedOptionId: P,
					totalStakeAmount: w
				}), !!x && s.a.createElement(A, {
					isCreatingVote: g,
					onOverlayClick: N,
					onCancel: N,
					onPredict: async e => {
						if (e.coins > f) Object(l.promptUserToBuyMoreCoins)();
						else {
							if (O) return b({
								duration: 5e3,
								kind: p.b.Error,
								text: J._("Error: Failed to make prediction. This prediction has already ended", null, {
									hk: "22UWEr"
								})
							}), void h(null);
							if (!u || !x) throw new Error("Invalid arguments, optionId and pollId must be strings");
							C(!0);
							try {
								await a({
									coinPackageId: e.id,
									optionId: x,
									postId: u,
									price: e.coins
								}), b({
									duration: 5e3,
									kind: p.b.SuccessCommunity,
									text: J._("Thanks! See if you're right in {timeToResult}", [J._param("timeToResult", Object(c.a)(new Date(_), !0))], {
										hk: "3ZSdoo"
									})
								})
							} catch (t) {
								b({
									duration: 5e3,
									kind: p.b.Error,
									text: J._("Error: Failed to make prediction, please try again later", null, {
										hk: "1tECsx"
									})
								})
							}
							C(!1), h(null)
						}
					},
					pollId: u,
					withOverlay: !0
				}))
			};
			t.default = X(Object(i.b)(Z, K)(Q))
		},
		"./src/reddit/endpoints/economics/predictions.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "d", (function() {
				return c
			})), n.d(t, "a", (function() {
				return d
			})), n.d(t, "c", (function() {
				return l
			}));
			var o = n("./src/lib/makeGqlRequest/index.ts"),
				s = n("./src/graphql/operations/GetPredictionCoinPackages.json"),
				i = n("./src/graphql/operations/SubredditTopPredictors.json"),
				a = n("./src/graphql/operations/VotePrediction.json");
			const r = (e, t) => Object(o.a)(e, Object.assign(Object.assign({}, s), {
					variables: {
						subredditName: t
					}
				})),
				c = (e, t) => {
					let {
						postId: n,
						optionId: s,
						coinPackageId: i,
						price: r
					} = t;
					return Object(o.a)(e, Object.assign(Object.assign({}, a), {
						variables: {
							input: {
								postId: n,
								optionId: s,
								coinPackageId: i,
								price: r
							}
						}
					}))
				};
			var d;
			! function(e) {
				e.AllTime = "ALL_TIME", e.Monthly = "MONTHLY"
			}(d || (d = {}));
			const l = (e, t) => {
				let {
					subredditId: n,
					period: s,
					top: a
				} = t;
				return Object(o.a)(e, Object.assign(Object.assign({}, i), {
					variables: {
						subredditId: n,
						period: s,
						top: a
					}
				}))
			}
		},
		"./src/reddit/icons/svgs/Checkmark/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 22",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", null, s.a.createElement("path", {
				d: "M8.9310375,15.1995 C8.70135,15.41825 8.38963125,15.541375 8.0647875,15.541375 C8.052975,15.541375 8.04181875,15.54075 8.03000625,15.54075 C7.69335,15.531375 7.37506875,15.39075 7.15063125,15.151375 L4.0879125,11.88075 C3.637725,11.400125 3.68169375,10.662625 4.18700625,10.23325 C4.6916625,9.805125 5.4660375,9.846375 5.91688125,10.327625 L8.115975,12.676375 L14.8550063,6.25825 C15.3327563,5.802625 16.1091,5.802625 16.5875063,6.25825 C17.0659125,6.71325 17.0659125,7.452625 16.5875063,7.907625 L8.9310375,15.1995 Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/ClockFilled/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 16 16"
			}, s.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M11.901 11.809C11.803 11.909 11.673 11.959 11.543 11.959C11.417 11.959 11.291 11.913 11.194 11.817L7.651 8.358C7.554 8.264 7.5 8.135 7.5 8V3C7.5 2.724 7.724 2.5 8 2.5C8.276 2.5 8.5 2.724 8.5 3V7.789L11.892 11.102C12.09 11.294 12.094 11.611 11.901 11.809ZM8 0C3.589 0 0 3.589 0 8C0 12.412 3.589 16 8 16C12.411 16 16 12.412 16 8C16 3.589 12.411 0 8 0Z",
				fill: "inherit"
			}))
		},
		"./src/reddit/icons/svgs/CoinV2/index.m.less": function(e, t, n) {
			e.exports = {
				shadow: "_1FZLzx9zXc2B6sAENx2Fl2",
				standardColor: "_1nJ18ao-riTqosaH0xAHuA"
			}
		},
		"./src/reddit/icons/svgs/CoinV2/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/svgs/CoinV2/index.m.less"),
				r = n.n(a);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("path", {
				className: Object(i.a)(r.a.shadow, e.shadowClassName),
				d: "M11.1 1.889H8.722v16.219h2.212a5.86 5.86 0 001.951-.274c3.658-1.158 5.837-5.614 4.856-9.933C16.92 4.28 14.134 1.886 11.1 1.89z"
			}), s.a.createElement("path", {
				d: "M11.1 1.889H8.722v16.219h2.212a5.86 5.86 0 001.951-.274c3.658-1.158 5.837-5.614 4.856-9.933C16.92 4.28 14.134 1.886 11.1 1.89z",
				fill: "url(#shine)",
				fillOpacity: ".3"
			}), s.a.createElement("path", {
				className: Object(i.a)(r.a.standardColor, e.standardColorClassName),
				d: "M6.991 2.166C3.334 3.324 1.155 7.78 2.135 12.1c.98 4.32 4.754 6.891 8.411 5.734 3.658-1.157 5.837-5.613 4.857-9.932-.98-4.32-4.754-6.892-8.412-5.735z"
			}), s.a.createElement("path", {
				className: Object(i.a)(r.a.shadow, e.shadowClassName),
				d: "M7.54 12.335c1.122.765 2.664.277 3.311-1.047.224-.457.718-.613 1.104-.35.387.264.52.847.296 1.304-.54 1.103-1.41 1.892-2.453 2.222-1.043.33-2.13.16-3.065-.476-1.929-1.316-2.592-4.24-1.479-6.517.54-1.104 1.41-1.893 2.453-2.223 1.042-.33 2.13-.16 3.065.477.387.263.52.847.296 1.303-.223.456-.717.612-1.104.35-1.121-.765-2.663-.277-3.31 1.047-.669 1.367-.271 3.121.887 3.91z"
			}), s.a.createElement("defs", null, s.a.createElement("linearGradient", {
				id: "shine",
				x1: "11.107",
				y1: "1.889",
				x2: "11.107",
				y2: "18.111",
				gradientUnits: "userSpaceOnUse"
			}, s.a.createElement("stop", {
				offset: ".063",
				stopColor: "#fff",
				stopOpacity: "0"
			}), s.a.createElement("stop", {
				offset: ".302",
				stopColor: "#fff"
			}), s.a.createElement("stop", {
				offset: "0.432",
				stopColor: "#fff"
			}), s.a.createElement("stop", {
				offset: "0.474",
				stopColor: "#fff",
				stopOpacity: "0"
			}))))
		},
		"./src/reddit/icons/svgs/Minus/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				version: "1.1"
			}, s.a.createElement("g", {
				transform: "translate(4, 8), scale(0.75)"
			}, s.a.createElement("path", {
				d: "M10.3785 4.86328H14.9734C15.6086 4.86328 16.1221 4.3498 16.1221 3.71456V1.41713C16.1221 0.781889 15.6086 0.268413 14.9734 0.268413H10.3785H5.78363H1.18876C0.554665 0.268413 0.0400391 0.781889 0.0400391 1.41713V3.71456C0.0400391 4.3498 0.554665 4.86328 1.18876 4.86328H5.78363H10.3785Z"
			})))
		},
		"./src/reddit/reducers/features/predictions/index.ts": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/redux/es/redux.js"),
				s = n("./src/reddit/actions/economics/predictions/constants.ts");
			const i = {};
			var a = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case s.a: {
						const {
							currentRank: n,
							subredditId: o,
							topPredictorsRank: s
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[o]: {
								currentRank: n,
								topPredictorsRank: s
							}
						})
					}
					default:
						return e
				}
			};
			t.a = Object(o.c)({
				leaderboards: a
			})
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-Econ-Prediction.29acf2c35fd8de1cedce.js.map