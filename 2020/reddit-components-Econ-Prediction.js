// https://www.redditstatic.com/desktop2x/reddit-components-Econ-Prediction.bdbfb26edf18e38d0a04.js
// Retrieved at 10/28/2020, 2:20:07 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-Econ-Prediction"], {
		"./src/graphql/operations/GetPredictionCoinPackages.json": function(e) {
			e.exports = JSON.parse('{"id":"8d63fcc52d73"}')
		},
		"./src/graphql/operations/SubredditTopPredictors.json": function(e) {
			e.exports = JSON.parse('{"id":"b50c7bdfe9d4"}')
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
				return m
			})), n.d(t, "b", (function() {
				return p
			})), n.d(t, "c", (function() {
				return E
			}));
			var o = n("./src/lib/initializeClient/installReducer.ts"),
				s = n("./src/reddit/reducers/features/predictions/index.ts"),
				a = n("./src/lib/makeActionCreator/index.ts"),
				i = n("./src/reddit/endpoints/economics/predictions.ts"),
				r = n("./src/reddit/selectors/posts.ts"),
				c = n("./src/reddit/selectors/user.ts"),
				d = n("./src/reddit/actions/economics/predictions/constants.ts");
			Object(o.a)({
				features: {
					predictions: s.a
				}
			});
			const l = Object(a.a)(d.a),
				u = Object(a.a)(d.b),
				m = (e, t, n) => async (o, s, a) => {
					let {
						gqlContext: r
					} = a;
					const d = Object(c.I)(s()),
						u = await Object(i.c)(r(), {
							subredditId: e,
							period: t,
							top: n,
							includeCurrentRank: d
						});
					if (u.error || !u.ok) throw new Error("Failed to fetch subreddit top predictors");
					const {
						subredditInfoById: m
					} = u.body.data;
					if (!m || !m.predictionWinners) throw new Error("Subreddit has no prediction winners");
					const {
						predictionWinners: p
					} = m, E = Object.assign({
						subredditId: e
					}, p);
					return o(l(E)), E
				}, p = e => async (t, n, o) => {
					let {
						gqlContext: s
					} = o;
					const a = n(),
						c = Object(r.bb)(a, {
							postId: e,
							disallowProfile: !0
						});
					if (!c) throw new Error("Post does not belong to a subreddit");
					const d = await Object(i.b)(s(), c.name);
					if (d.error || !d.ok) throw new Error("Failed to fetch coin packs");
					const {
						subredditInfoByName: l
					} = d.body.data;
					if (!l || !l.predictionCoinPackages.length) throw new Error("Subreddit has no coin packs");
					return l.predictionCoinPackages
				}, E = e => {
					let {
						coinPackageId: t,
						optionId: n,
						postId: o,
						price: s
					} = e;
					return async (e, a, r) => {
						let {
							gqlContext: c
						} = r;
						const d = await Object(i.d)(c(), {
							coinPackageId: t,
							optionId: n,
							postId: o,
							price: s
						});
						if (d.error || !d.ok) throw new Error("Failed to make prediction");
						const {
							votePrediction: l
						} = d.body.data;
						if (!l) throw new Error("Failed to create prediction vote");
						return e(u({
							pollId: o,
							prediction: l.poll,
							price: s
						})), l.poll
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
				a = n("./src/reddit/components/Econ/CoinsModalHeader/index.m.less"),
				i = n.n(a),
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
					userCoins: a
				} = e;
				return s.a.createElement("div", {
					className: i.a.gildHeader
				}, s.a.createElement("button", {
					className: i.a.closeBtn,
					onClick: n
				}, s.a.createElement(r.b, {
					className: i.a.closeBtnIcon
				})), s.a.createElement("div", {
					className: i.a.headerText
				}, o), s.a.createElement("button", {
					className: i.a.coinButton,
					onClick: t
				}, s.a.createElement("div", {
					className: i.a.coinBalanceIndicator,
					tabIndex: -1
				}, s.a.createElement(c.a, {
					className: i.a.coinIcon
				}), s.a.createElement("div", {
					className: i.a.coinBalance
				}, (a || 0).toLocaleString())), s.a.createElement("div", {
					className: i.a.addCoins,
					tabIndex: -1
				}, s.a.createElement(d.a, {
					className: i.a.plusIcon
				}))))
			}
		},
		"./src/reddit/components/Econ/Prediction/EducationMessage/index.m.less": function(e, t, n) {
			e.exports = {
				educationMessage: "_26GJLzgfE0wgM-CnXwauPN",
				titleRow: "vZoXjCnTHVyUauLNVGVfk",
				header: "_27PnGSqq2_i7iJirZpjlvp",
				title: "_3tXfrHlKYl3OfwzJeHj2TF",
				newBadge: "_2xWQI6x-vSCyMVG0rWrUv",
				closeButton: "_2fuSvPWThjhQeduKzDNNsl"
			}
		},
		"./src/reddit/components/Econ/Prediction/NoPredictionError/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3UNYrzKG9vrW6s4_OVCGNt"
			}
		},
		"./src/reddit/components/Econ/Prediction/PredictionEndedEducationMessage/index.m.less": function(e, t, n) {
			e.exports = {
				notificationBlurb: "_7xN79rTmvLDGpKHFIZtZp"
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
		"./src/reddit/components/Econ/Prediction/PredictionResolvedEducationMessage/index.m.less": function(e, t, n) {
			e.exports = {
				coinIcon: "Q621mV5971l_mCH7u6xH2",
				wonOrLostAmountRow: "_2fSjP0uCCM6rDX2NTgXmZZ",
				wonOrLostAmount: "fpuXaOlXcTLRb8FScJmfB"
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
				return Ee
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				r = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/timeUntil/index.ts"),
				d = n("./src/reddit/contexts/PageLayer/index.tsx"),
				l = n("./src/reddit/actions/economics/helpers/index.ts"),
				u = n("./src/reddit/actions/economics/predictions/index.ts"),
				m = n("./src/reddit/actions/toaster.ts"),
				p = n("./src/reddit/models/Toast/index.ts"),
				E = n("./src/reddit/selectors/poll/index.ts"),
				b = n("./src/reddit/selectors/postCreations.ts"),
				g = n("./src/reddit/selectors/posts.ts"),
				f = n("./src/reddit/selectors/user.ts"),
				h = n("./src/reddit/components/Econ/Prediction/NoPredictionError/index.m.less"),
				v = n.n(h);
			const {
				fbt: x
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var C = e => {
					let {
						className: t
					} = e;
					return s.a.createElement("div", {
						className: Object(r.a)(v.a.container, t)
					}, x._("Error: Could not load prediction", null, {
						hk: "3SDSgH"
					}))
				},
				_ = n("./src/reddit/hooks/useLocalStorage.ts"),
				w = n("./src/reddit/controls/Button/index.tsx"),
				k = n("./src/reddit/icons/svgs/Close/index.tsx"),
				P = n("./src/reddit/components/Econ/Prediction/EducationMessage/index.m.less"),
				N = n.n(P);
			const {
				fbt: O
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function I(e) {
				let {
					message: t,
					newBadge: n,
					storageKey: o,
					title: a
				} = e;
				const [i, r] = Object(_.a)(o, !1);
				return i ? null : s.a.createElement("div", {
					className: N.a.educationMessage
				}, s.a.createElement("div", {
					className: N.a.titleRow
				}, s.a.createElement("div", {
					className: N.a.header
				}, s.a.createElement("h3", {
					className: N.a.title
				}, a), n && s.a.createElement("div", {
					className: N.a.newBadge
				}, O._("New", null, {
					hk: "2N0EBb"
				}))), s.a.createElement(w.q, {
					className: N.a.closeButton,
					Icon: k.a,
					onClick: () => r(!0)
				})), t)
			}
			var j = n("./src/reddit/components/Econ/Prediction/PredictionEndedEducationMessage/index.m.less"),
				S = n.n(j);
			const {
				fbt: y
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function A(e) {
				let {
					didParticipate: t
				} = e;
				const n = y._("This prediction has ended", null, {
						hk: "3VMLnq"
					}),
					o = s.a.createElement(s.a.Fragment, null, y._("The outcome is pending.", null, {
						hk: "4tsv1U"
					}), t && s.a.createElement("div", {
						className: S.a.notificationBlurb
					}, y._("You'll be notified when the results are in.", null, {
						hk: "45tyVv"
					})));
				return s.a.createElement("div", null, s.a.createElement(I, {
					title: n,
					message: o,
					storageKey: "predictionEndedEducationParticipated"
				}))
			}
			var B = n("./node_modules/fbt/lib/FbtPublic.js");

			function L() {
				const e = B.fbt._("Prediction", null, {
						hk: "3qDj5G"
					}),
					t = B.fbt._("Redditors add coins to their answers, then everyone who gets it right splits the winnings", null, {
						hk: "zV4JN"
					});
				return s.a.createElement("div", null, s.a.createElement(I, {
					title: e,
					newBadge: !0,
					message: t,
					storageKey: "predictionFeatureEducation"
				}))
			}
			var M = n("./src/higherOrderComponents/asModal/index.tsx"),
				T = n("./src/reddit/components/Econ/CoinsModalHeader/index.tsx"),
				H = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				V = n("./src/reddit/icons/svgs/CoinV2/index.tsx"),
				D = n("./src/reddit/icons/svgs/Minus/index.tsx"),
				F = n("./src/reddit/icons/svgs/Plus/index.tsx"),
				R = n("./src/reddit/components/Econ/Prediction/PredictionModal/index.m.less"),
				q = n.n(R);
			const {
				fbt: G
			} = n("./node_modules/fbt/lib/FbtPublic.js"), U = Object(i.c)({
				userCoins: f.d
			}), z = {
				getCoinPacks: u.b,
				showToast: m.e
			};
			var W = Object(a.b)(U, z)(Object(M.a)(e => {
					let {
						getCoinPacks: t,
						isCreatingVote: n,
						onCancel: a,
						onPredict: i,
						pollId: c,
						showToast: d,
						userCoins: u
					} = e;
					var m;
					const [E, b] = Object(o.useState)(0), [g, f] = Object(o.useState)(null);
					Object(o.useEffect)(() => {
						(async () => {
							if (!g) try {
								const e = await t(c);
								e.length || (d({
									duration: 5e3,
									kind: p.b.Error,
									text: G._("Error: Subreddit is not configured with coin packs", null, {
										hk: "2t8uz0"
									})
								}), a()), f(e)
							} catch (e) {
								d({
									duration: 5e3,
									kind: p.b.Error,
									text: G._("Error: Failed to fetch coin packs, please try again later", null, {
										hk: "2aROIr"
									})
								}), a()
							}
						})()
					}, [g, t, a, c, d]);
					const h = (null === (m = null == g ? void 0 : g[E]) || void 0 === m ? void 0 : m.coins) && u < g[E].coins;
					return s.a.createElement("div", null, s.a.createElement(T.a, {
						onAddCoins: l.promptUserToBuyMoreCoins,
						onCancel: a,
						title: G._("Predict the Future", null, {
							hk: "4bHA0N"
						}),
						userCoins: u
					}), s.a.createElement("div", {
						className: q.a.modalContent
					}, s.a.createElement("div", {
						className: q.a.wagerSelectorContainer
					}, s.a.createElement("div", {
						className: q.a.wagerSelector
					}, s.a.createElement("button", {
						disabled: 0 === E,
						className: q.a.wagerSelectorButton,
						onClick: e => {
							e.preventDefault(), g && 0 !== E && b(E - 1)
						}
					}, s.a.createElement(D.a, {
						className: q.a.wagerSelectorButtonIcon
					})), g ? s.a.createElement("div", {
						className: q.a.wagerSelectorAmount
					}, s.a.createElement(V.a, {
						className: q.a.coinIcon
					}), " ", g[E].coins) : s.a.createElement(H.a, {
						sizePx: 24
					}), s.a.createElement("button", {
						disabled: !(!g || E !== g.length - 1),
						className: q.a.wagerSelectorButton,
						onClick: e => {
							e.preventDefault(), g && E !== g.length - 1 && b(E + 1)
						}
					}, s.a.createElement(F.a, {
						className: q.a.wagerSelectorButtonIcon
					}))), h && s.a.createElement("div", {
						className: q.a.insufficientCoinsMessage
					}, G._("Insufficient coins", null, {
						hk: "2Mo83P"
					}))), s.a.createElement("button", {
						className: Object(r.a)(q.a.predictButton, {
							[q.a.isFetchingCoinPacks]: !g,
							[q.a.isCreatingVote]: n
						}),
						disabled: !g || n,
						onClick: e => {
							e.preventDefault(), g && i(g[E])
						}
					}, n ? s.a.createElement(H.a, {
						sizePx: 16
					}) : h ? G._("Get Coins", null, {
						hk: "11KD6n"
					}) : G._("Predict to Win Coins", null, {
						hk: "SjKBe"
					})), s.a.createElement("div", {
						className: q.a.disclaimer
					}, G._("You must be over 18 to use Predictions. {=Predictions don’t offer an opportunity to win real money or prizes.} Your username and prediction is viewable by other redditors.", [G._param("=Predictions don’t offer an opportunity to win real money or prizes.", s.a.createElement("a", {
						href: "https://www.redditinc.com/policies/previews-terms",
						target: "_blank"
					}, G._("Predictions don’t offer an opportunity to win real money or prizes.", null, {
						hk: "2iU1hi"
					})))], {
						hk: "1hLwRa"
					}))))
				})),
				K = n("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				X = n("./src/reddit/components/Econ/Prediction/PredictionOption/index.m.less"),
				Z = n.n(X);
			const {
				fbt: J
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var Y = e => {
					let {
						isEnded: t,
						isSelected: n,
						onClick: o,
						option: a,
						resolvedOptionId: i,
						userIsLoggedOut: c,
						userSelection: d,
						votePercentage: l
					} = e;
					const u = i === a.id,
						m = t || !!d || !!i;
					return s.a.createElement("button", {
						className: Object(r.a)(Z.a.optionButton, {
							[Z.a.hasVoted]: null !== a.userStakeAmount,
							[Z.a.isCorrect]: u,
							[Z.a.isSelected]: n
						}),
						disabled: m || c,
						onClick: o
					}, s.a.createElement("div", {
						className: Z.a.optionBody
					}, u && s.a.createElement(K.a, {
						className: Z.a.checkmarkIcon
					}), s.a.createElement("div", {
						className: Z.a.optionText
					}, a.text), a.userStakeAmount && s.a.createElement("div", {
						className: Z.a.optionStake
					}, s.a.createElement(V.a, {
						className: Z.a.coinIcon
					}), " ", a.userStakeAmount)), l && l > 0 && s.a.createElement("div", {
						className: Z.a.optionPercentage,
						style: {
							width: "".concat(l, "%")
						}
					}, " "), c && !m && s.a.createElement("div", {
						className: Z.a.loggedOutTooltip
					}, J._("You must be logged in", null, {
						hk: "18KrL7"
					})))
				},
				Q = n("./src/reddit/components/Econ/Prediction/PredictionResolvedEducationMessage/index.m.less"),
				$ = n.n(Q);
			const {
				fbt: ee
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function te(e) {
				let {
					didParticipate: t,
					isWinner: n,
					predictedAmount: o,
					wonAmount: a
				} = e;
				return t && !n ? s.a.createElement("div", null, s.a.createElement(I, {
					title: ee._("Oh noes...", null, {
						hk: "3GXXTD"
					}),
					message: s.a.createElement(s.a.Fragment, null, ee._("You predicted the wrong outcome.", null, {
						hk: "131ybE"
					}), s.a.createElement("div", {
						className: $.a.wonOrLostAmountRow
					}, ee._("You lost", null, {
						hk: "2a3yYP"
					}), s.a.createElement("div", {
						className: $.a.wonOrLostAmount
					}, s.a.createElement(V.a, {
						className: $.a.coinIcon
					}), o))),
					storageKey: "predictionLostEducation"
				})) : t && n && !a ? s.a.createElement("div", null, s.a.createElement(I, {
					title: ee._("Well this is awkward...", null, {
						hk: "2zDaVv"
					}),
					message: s.a.createElement(s.a.Fragment, null, ee._("Everyone predicted the correct outcome.", null, {
						hk: "mubpz"
					}), s.a.createElement("div", {
						className: $.a.wonOrLostAmountRow
					}, ee._("You've been refunded", null, {
						hk: "38ozS2"
					}), s.a.createElement("div", {
						className: $.a.wonOrLostAmount
					}, s.a.createElement(V.a, {
						className: $.a.coinIcon
					}), o))),
					storageKey: "predictionTiedEducation"
				})) : t && n && a ? s.a.createElement("div", null, s.a.createElement(I, {
					title: ee._("Congratulations!", null, {
						hk: "2PdpNS"
					}),
					message: s.a.createElement(s.a.Fragment, null, ee._("You predicted the correct outcome.", null, {
						hk: "24xPRX"
					}), s.a.createElement("div", {
						className: $.a.wonOrLostAmountRow
					}, ee._("You won", null, {
						hk: "3VRseU"
					}), s.a.createElement("div", {
						className: $.a.wonOrLostAmount
					}, s.a.createElement(V.a, {
						className: $.a.coinIcon
					}), a))),
					storageKey: "predictionWonEducation"
				})) : s.a.createElement("div", null, s.a.createElement(I, {
					title: ee._("This prediction has ended", null, {
						hk: "3VMLnq"
					}),
					message: ee._("The outcome has been provided.", null, {
						hk: "4ccLzU"
					}),
					storageKey: "predictionResolvedEducation"
				}))
			}
			var ne = n("./src/reddit/icons/svgs/ClockFilled/index.tsx"),
				oe = n("./src/reddit/components/Econ/Prediction/PredictionStatus/index.m.less"),
				se = n.n(oe);
			const {
				fbt: ae
			} = n("./node_modules/fbt/lib/FbtPublic.js"), ie = e => {
				let {
					endsAt: t,
					resolvedOptionId: n
				} = e;
				return Date.now() > t ? s.a.createElement("div", {
					className: se.a.statusBar
				}, s.a.createElement(ne.a, {
					className: se.a.clockIcon
				}), n ? ae._("Prediction ended", null, {
					hk: "3o79Ig"
				}) : ae._("Ended. Awaiting results", null, {
					hk: "1szagh"
				})) : s.a.createElement("div", {
					className: se.a.statusBar
				}, s.a.createElement(ne.a, {
					className: se.a.clockIcon
				}), ae._("Prediction ends in {expirationDuration}", [ae._param("expirationDuration", Object(c.a)(new Date(t), !0))], {
					hk: "3ysXEE"
				}))
			};
			var re = e => {
					let {
						endsAt: t,
						resolvedOptionId: n,
						totalStakeAmount: o
					} = e;
					return s.a.createElement("div", {
						className: se.a.container
					}, o > 0 && s.a.createElement("div", {
						className: se.a.statusBar
					}, s.a.createElement(V.a, {
						className: se.a.coinIcon
					}), o, " ", ae._("added by participants", null, {
						hk: "PSq3T"
					})), s.a.createElement(ie, {
						endsAt: t,
						resolvedOptionId: n
					}))
				},
				ce = n("./src/reddit/components/Econ/Prediction/index.m.less"),
				de = n.n(ce);
			const {
				fbt: le
			} = n("./node_modules/fbt/lib/FbtPublic.js"), ue = Object(i.c)({
				isEditing: b.G,
				prediction: E.g,
				pollId: E.a,
				post: g.O,
				subredditOrProfile: g.bb,
				userCoins: f.d,
				userIsLoggedIn: f.I
			}), me = {
				onPredictionVote: u.c,
				showToast: m.e
			}, pe = Object(d.t)({
				isCommentsPage: d.w
			}), Ee = e => {
				let {
					className: t,
					isCommentsPage: n,
					isEditing: a,
					onPredictionVote: i,
					prediction: d,
					pollId: u,
					subredditOrProfile: m,
					showToast: E,
					userCoins: b,
					userIsLoggedIn: g
				} = e;
				var f;
				const [h, v] = Object(o.useState)(!1), [x, _] = Object(o.useState)(null);
				if (!u || !d || !m) return s.a.createElement(C, null);
				const {
					endsAt: w,
					options: k,
					resolvedOptionId: P,
					totalStakeAmount: N,
					userSelection: O,
					userWonAmount: I
				} = d, j = w < Date.now(), S = () => {
					_(null)
				}, y = n ? Object(r.a)(t, de.a.container, de.a.forCommentsPage, {
					[de.a.isEditing]: a
				}) : Object(r.a)(t, de.a.container);
				return s.a.createElement("div", {
					className: y,
					onClick: e => {
						d && e.stopPropagation()
					}
				}, n ? j ? P ? s.a.createElement(te, {
					didParticipate: !!O,
					isWinner: P === O,
					predictedAmount: O && (null === (f = k.find(e => {
						let {
							id: t
						} = e;
						return t === O
					})) || void 0 === f ? void 0 : f.userStakeAmount) || 0,
					wonAmount: I
				}) : s.a.createElement(A, {
					didParticipate: !!O
				}) : s.a.createElement(L, null) : null, s.a.createElement("div", {
					className: de.a.poll
				}, k.map(e => s.a.createElement(Y, {
					key: "prediction-option-".concat(e.id),
					isEnded: j,
					isSelected: x === e.id,
					option: e,
					onClick: () => (e => {
						j || O || _(e.id)
					})(e),
					resolvedOptionId: P,
					userSelection: O,
					userIsLoggedOut: !g,
					votePercentage: (O || j) && e.totalStakeAmount ? Math.floor(e.totalStakeAmount / N * 100) : null
				}))), s.a.createElement(re, {
					endsAt: w,
					resolvedOptionId: P,
					totalStakeAmount: N
				}), !!x && s.a.createElement(W, {
					isCreatingVote: h,
					onOverlayClick: S,
					onCancel: S,
					onPredict: async e => {
						if (e.coins > b) Object(l.promptUserToBuyMoreCoins)();
						else {
							if (j) return E({
								duration: 5e3,
								kind: p.b.Error,
								text: le._("Error: Failed to make prediction. This prediction has already ended", null, {
									hk: "22UWEr"
								})
							}), void _(null);
							if (!u || !x) throw new Error("Invalid arguments, optionId and pollId must be strings");
							v(!0);
							try {
								await i({
									coinPackageId: e.id,
									optionId: x,
									postId: u,
									price: e.coins
								}), E({
									duration: 5e3,
									kind: p.b.SuccessCommunity,
									text: le._("Thanks! See if you're right in {timeToResult}", [le._param("timeToResult", Object(c.a)(new Date(w), !0))], {
										hk: "3ZSdoo"
									})
								})
							} catch (t) {
								E({
									duration: 5e3,
									kind: p.b.Error,
									text: le._("Error: Failed to make prediction, please try again later", null, {
										hk: "1tECsx"
									})
								})
							}
							v(!1), _(null)
						}
					},
					pollId: u,
					withOverlay: !0
				}))
			};
			t.default = pe(Object(a.b)(ue, me)(Ee))
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
				a = n("./src/graphql/operations/SubredditTopPredictors.json"),
				i = n("./src/graphql/operations/VotePrediction.json");
			const r = (e, t) => Object(o.a)(e, Object.assign(Object.assign({}, s), {
					variables: {
						subredditName: t
					}
				})),
				c = (e, t) => {
					let {
						postId: n,
						optionId: s,
						coinPackageId: a,
						price: r
					} = t;
					return Object(o.a)(e, Object.assign(Object.assign({}, i), {
						variables: {
							input: {
								postId: n,
								optionId: s,
								coinPackageId: a,
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
					top: i,
					includeCurrentRank: r
				} = t;
				return Object(o.a)(e, Object.assign(Object.assign({}, a), {
					variables: {
						subredditId: n,
						period: s,
						top: i,
						includeCurrentRank: r
					}
				}))
			}
		},
		"./src/reddit/hooks/useLocalStorage.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var o = n("./node_modules/react/index.js"),
				s = n("./src/reddit/helpers/localStorage/index.ts");

			function a(e, t) {
				let n;
				n = Object(s.o)(e);
				const [a, i] = Object(o.useState)(null != n ? n : t);
				return [a, function(t) {
					Object(s.bb)(e, t), i(t)
				}]
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
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/CoinV2/index.m.less"),
				r = n.n(i);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("path", {
				className: Object(a.a)(r.a.shadow, e.shadowClassName),
				d: "M11.1 1.889H8.722v16.219h2.212a5.86 5.86 0 001.951-.274c3.658-1.158 5.837-5.614 4.856-9.933C16.92 4.28 14.134 1.886 11.1 1.89z"
			}), s.a.createElement("path", {
				d: "M11.1 1.889H8.722v16.219h2.212a5.86 5.86 0 001.951-.274c3.658-1.158 5.837-5.614 4.856-9.933C16.92 4.28 14.134 1.886 11.1 1.89z",
				fill: "url(#shine)",
				fillOpacity: ".3"
			}), s.a.createElement("path", {
				className: Object(a.a)(r.a.standardColor, e.standardColorClassName),
				d: "M6.991 2.166C3.334 3.324 1.155 7.78 2.135 12.1c.98 4.32 4.754 6.891 8.411 5.734 3.658-1.157 5.837-5.613 4.857-9.932-.98-4.32-4.754-6.892-8.412-5.735z"
			}), s.a.createElement("path", {
				className: Object(a.a)(r.a.shadow, e.shadowClassName),
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
			const a = {};
			var i = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a,
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
				leaderboards: i
			})
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-Econ-Prediction.bdbfb26edf18e38d0a04.js.map