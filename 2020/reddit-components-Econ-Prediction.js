// https://www.redditstatic.com/desktop2x/reddit-components-Econ-Prediction.b844eff63ead1f6b2f0f.js
// Retrieved at 10/20/2020, 2:50:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-Econ-Prediction"], {
		"./src/graphql/operations/GetPredictionCoinPackages.json": function(e) {
			e.exports = JSON.parse('{"id":"8d63fcc52d73"}')
		},
		"./src/graphql/operations/VotePrediction.json": function(e) {
			e.exports = JSON.parse('{"id":"95f86f022a36"}')
		},
		"./src/reddit/actions/economics/predictions/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			const o = "PREDICTION_VOTE_SUCCESS"
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
				return m
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

			function m(e) {
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
				return ne
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				r = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/timeUntil/index.ts"),
				d = n("./src/reddit/contexts/PageLayer/index.tsx"),
				l = n("./src/reddit/actions/economics/helpers/index.ts"),
				m = n("./src/lib/makeActionCreator/index.ts"),
				u = n("./src/lib/makeGqlRequest/index.ts"),
				p = n("./src/graphql/operations/GetPredictionCoinPackages.json"),
				E = n("./src/graphql/operations/VotePrediction.json");
			var g = n("./src/reddit/selectors/posts.ts"),
				C = n("./src/reddit/actions/economics/predictions/constants.ts");
			const f = Object(m.a)(C.a);
			var b = n("./src/reddit/actions/toaster.ts"),
				x = n("./src/reddit/models/Toast/index.ts"),
				v = n("./src/reddit/selectors/poll/index.ts"),
				_ = n("./src/reddit/selectors/postCreations.ts"),
				h = n("./src/reddit/selectors/user.ts"),
				k = n("./src/reddit/components/Econ/Prediction/NoPredictionError/index.m.less"),
				P = n.n(k);
			const {
				fbt: w
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var I = e => {
					let {
						className: t
					} = e;
					return s.a.createElement("div", {
						className: Object(r.a)(P.a.container, t)
					}, w._("Error: Could not load prediction", null, {
						hk: "3SDSgH"
					}))
				},
				N = n("./src/higherOrderComponents/asModal/index.tsx"),
				O = n("./src/reddit/components/Econ/CoinsModalHeader/index.tsx"),
				S = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				j = n("./src/reddit/icons/svgs/CoinV2/index.tsx"),
				y = n("./src/reddit/icons/svgs/Minus/index.tsx"),
				B = n("./src/reddit/icons/svgs/Plus/index.tsx"),
				A = n("./src/reddit/components/Econ/Prediction/PredictionModal/index.m.less"),
				M = n.n(A);
			const {
				fbt: H
			} = n("./node_modules/fbt/lib/FbtPublic.js"), L = Object(i.c)({
				userCoins: h.d
			}), D = {
				getCoinPacks: e => async (t, n, o) => {
					let {
						gqlContext: s
					} = o;
					const a = n(),
						i = Object(g.ab)(a, {
							postId: e,
							disallowProfile: !0
						});
					if (!i) throw new Error("Post does not belong to a subreddit");
					const r = await ((e, t) => Object(u.a)(e, Object.assign(Object.assign({}, p), {
						variables: {
							subredditName: t
						}
					})))(s(), i.name);
					if (r.error || !r.ok) throw new Error("Failed to fetch coin packs");
					const {
						subredditInfoByName: c
					} = r.body.data;
					if (!c || !c.predictionCoinPackages.length) throw new Error("Subreddit has no coin packs");
					return c.predictionCoinPackages
				},
				showToast: b.e
			};
			var V = Object(a.b)(L, D)(Object(N.a)(e => {
					let {
						getCoinPacks: t,
						isCreatingVote: n,
						onCancel: a,
						onPredict: i,
						pollId: c,
						showToast: d,
						userCoins: m
					} = e;
					var u;
					const [p, E] = Object(o.useState)(0), [g, C] = Object(o.useState)(null);
					Object(o.useEffect)(() => {
						(async () => {
							if (!g) try {
								const e = await t(c);
								e.length || (d({
									duration: 5e3,
									kind: x.b.Error,
									text: H._("Error: Subreddit is not configured with coin packs", null, {
										hk: "2t8uz0"
									})
								}), a()), C(e)
							} catch (e) {
								d({
									duration: 5e3,
									kind: x.b.Error,
									text: H._("Error: Failed to fetch coin packs, please try again later", null, {
										hk: "2aROIr"
									})
								}), a()
							}
						})()
					}, [g, t, a, c, d]);
					const f = (null === (u = null == g ? void 0 : g[p]) || void 0 === u ? void 0 : u.coins) && m < g[p].coins;
					return s.a.createElement("div", null, s.a.createElement(O.a, {
						onAddCoins: l.promptUserToBuyMoreCoins,
						onCancel: a,
						title: H._("Predict the Future", null, {
							hk: "4bHA0N"
						}),
						userCoins: m
					}), s.a.createElement("div", {
						className: M.a.modalContent
					}, s.a.createElement("div", {
						className: M.a.wagerSelectorContainer
					}, s.a.createElement("div", {
						className: M.a.wagerSelector
					}, s.a.createElement("button", {
						disabled: 0 === p,
						className: M.a.wagerSelectorButton,
						onClick: e => {
							e.preventDefault(), g && 0 !== p && E(p - 1)
						}
					}, s.a.createElement(y.a, {
						className: M.a.wagerSelectorButtonIcon
					})), g ? s.a.createElement("div", {
						className: M.a.wagerSelectorAmount
					}, s.a.createElement(j.a, {
						className: M.a.coinIcon
					}), " ", g[p].coins) : s.a.createElement(S.a, {
						sizePx: 24
					}), s.a.createElement("button", {
						disabled: !(!g || p !== g.length - 1),
						className: M.a.wagerSelectorButton,
						onClick: e => {
							e.preventDefault(), g && p !== g.length - 1 && E(p + 1)
						}
					}, s.a.createElement(B.a, {
						className: M.a.wagerSelectorButtonIcon
					}))), f && s.a.createElement("div", {
						className: M.a.insufficientCoinsMessage
					}, H._("Insufficient coins", null, {
						hk: "2Mo83P"
					}))), s.a.createElement("button", {
						className: Object(r.a)(M.a.predictButton, {
							[M.a.isFetchingCoinPacks]: !g,
							[M.a.isCreatingVote]: n
						}),
						disabled: !g || n,
						onClick: e => {
							e.preventDefault(), g && i(g[p])
						}
					}, n ? s.a.createElement(S.a, {
						sizePx: 16
					}) : f ? H._("Get Coins", null, {
						hk: "11KD6n"
					}) : H._("Predict to Win Coins", null, {
						hk: "SjKBe"
					})), s.a.createElement("div", {
						className: M.a.disclaimer
					}, H._("You must be over 18 to use Predictions. {=Predictions don’t offer an opportunity to win real money or prizes.} Your username and prediction is viewable by other redditors.", [H._param("=Predictions don’t offer an opportunity to win real money or prizes.", s.a.createElement("a", {
						href: "https://www.redditinc.com/policies/previews-terms",
						target: "_blank"
					}, H._("Predictions don’t offer an opportunity to win real money or prizes.", null, {
						hk: "2iU1hi"
					})))], {
						hk: "1hLwRa"
					}))))
				})),
				T = n("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				F = n("./src/reddit/components/Econ/Prediction/PredictionOption/index.m.less"),
				G = n.n(F);
			const {
				fbt: U
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var q = e => {
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
					const m = i === a.id,
						u = t || !!d || !!i;
					return s.a.createElement("button", {
						className: Object(r.a)(G.a.optionButton, {
							[G.a.hasVoted]: null !== a.userStakeAmount,
							[G.a.isCorrect]: m,
							[G.a.isSelected]: n
						}),
						disabled: u || c,
						onClick: o
					}, s.a.createElement("div", {
						className: G.a.optionBody
					}, m && s.a.createElement(T.a, {
						className: G.a.checkmarkIcon
					}), s.a.createElement("div", {
						className: G.a.optionText
					}, a.text), a.userStakeAmount && s.a.createElement("div", {
						className: G.a.optionStake
					}, s.a.createElement(j.a, {
						className: G.a.coinIcon
					}), " ", a.userStakeAmount)), l && l > 0 && s.a.createElement("div", {
						className: G.a.optionPercentage,
						style: {
							width: "".concat(l, "%")
						}
					}, " "), c && !u && s.a.createElement("div", {
						className: G.a.loggedOutTooltip
					}, U._("You must be logged in", null, {
						hk: "18KrL7"
					})))
				},
				z = n("./src/reddit/icons/svgs/ClockFilled/index.tsx"),
				W = n("./src/reddit/components/Econ/Prediction/PredictionStatus/index.m.less"),
				R = n.n(W);
			const {
				fbt: Z
			} = n("./node_modules/fbt/lib/FbtPublic.js"), J = e => {
				let {
					endsAt: t,
					resolvedOptionId: n
				} = e;
				return Date.now() > t ? s.a.createElement("div", {
					className: R.a.statusBar
				}, s.a.createElement(z.a, {
					className: R.a.clockIcon
				}), n ? Z._("Prediction ended", null, {
					hk: "3o79Ig"
				}) : Z._("Ended. Awaiting results", null, {
					hk: "1szagh"
				})) : s.a.createElement("div", {
					className: R.a.statusBar
				}, s.a.createElement(z.a, {
					className: R.a.clockIcon
				}), Z._("Prediction ends in {expirationDuration}", [Z._param("expirationDuration", Object(c.a)(new Date(t), !0))], {
					hk: "3ysXEE"
				}))
			};
			var K = e => {
					let {
						endsAt: t,
						resolvedOptionId: n,
						totalStakeAmount: o
					} = e;
					return s.a.createElement("div", {
						className: R.a.container
					}, o > 0 && s.a.createElement("div", {
						className: R.a.statusBar
					}, s.a.createElement(j.a, {
						className: R.a.coinIcon
					}), o, " ", Z._("added by participants", null, {
						hk: "PSq3T"
					})), s.a.createElement(J, {
						endsAt: t,
						resolvedOptionId: n
					}))
				},
				X = n("./src/reddit/components/Econ/Prediction/index.m.less"),
				Q = n.n(X);
			const {
				fbt: Y
			} = n("./node_modules/fbt/lib/FbtPublic.js"), $ = Object(i.c)({
				isEditing: _.G,
				prediction: v.g,
				pollId: v.a,
				post: g.N,
				subredditOrProfile: g.ab,
				userCoins: h.d,
				userIsLoggedIn: h.I
			}), ee = {
				onPredictionVote: e => {
					let {
						coinPackageId: t,
						optionId: n,
						postId: o,
						price: s
					} = e;
					return async (e, a, i) => {
						let {
							gqlContext: r
						} = i;
						const c = await ((e, t) => {
							let {
								postId: n,
								optionId: o,
								coinPackageId: s,
								price: a
							} = t;
							return Object(u.a)(e, Object.assign(Object.assign({}, E), {
								variables: {
									input: {
										postId: n,
										optionId: o,
										coinPackageId: s,
										price: a
									}
								}
							}))
						})(r(), {
							coinPackageId: t,
							optionId: n,
							postId: o,
							price: s
						});
						if (c.error || !c.ok) throw new Error("Failed to make prediction");
						const {
							votePrediction: d
						} = c.body.data;
						if (!d) throw new Error("Failed to create prediction vote");
						return e(f({
							pollId: o,
							prediction: d.poll,
							price: s
						})), d.poll
					}
				},
				showToast: b.e
			}, te = Object(d.t)({
				isCommentsPage: d.w
			}), ne = e => {
				let {
					className: t,
					isCommentsPage: n,
					isEditing: a,
					onPredictionVote: i,
					prediction: d,
					pollId: m,
					subredditOrProfile: u,
					showToast: p,
					userCoins: E,
					userIsLoggedIn: g
				} = e;
				const [C, f] = Object(o.useState)(!1), [b, v] = Object(o.useState)(null);
				if (!m || !d || !u) return s.a.createElement(I, null);
				const {
					endsAt: _,
					options: h,
					resolvedOptionId: k,
					totalStakeAmount: P,
					userSelection: w
				} = d, N = _ < Date.now(), O = () => {
					v(null)
				}, S = n ? Object(r.a)(t, Q.a.container, Q.a.forCommentsPage, {
					[Q.a.isEditing]: a
				}) : Object(r.a)(t, Q.a.container);
				return s.a.createElement("div", {
					className: S,
					onClick: e => {
						d && e.stopPropagation()
					}
				}, s.a.createElement("div", {
					className: Q.a.poll
				}, h.map(e => s.a.createElement(q, {
					key: "prediction-option-".concat(e.id),
					isEnded: N,
					isSelected: b === e.id,
					option: e,
					onClick: () => (e => {
						N || w || v(e.id)
					})(e),
					resolvedOptionId: k,
					userSelection: w,
					userIsLoggedOut: !g,
					votePercentage: (w || N) && e.totalStakeAmount ? Math.floor(e.totalStakeAmount / P * 100) : null
				}))), s.a.createElement(K, {
					endsAt: _,
					resolvedOptionId: k,
					totalStakeAmount: P
				}), !!b && s.a.createElement(V, {
					isCreatingVote: C,
					onOverlayClick: O,
					onCancel: O,
					onPredict: async e => {
						if (e.coins > E) Object(l.promptUserToBuyMoreCoins)();
						else {
							if (N) return p({
								duration: 5e3,
								kind: x.b.Error,
								text: Y._("Error: Failed to make prediction. This prediction has already ended", null, {
									hk: "22UWEr"
								})
							}), void v(null);
							if (!m || !b) throw new Error("Invalid arguments, optionId and pollId must be strings");
							f(!0);
							try {
								await i({
									coinPackageId: e.id,
									optionId: b,
									postId: m,
									price: e.coins
								}), p({
									duration: 5e3,
									kind: x.b.SuccessCommunity,
									text: Y._("Thanks! See if you're right in {timeToResult}", [Y._param("timeToResult", Object(c.a)(new Date(_), !0))], {
										hk: "3ZSdoo"
									})
								})
							} catch (t) {
								p({
									duration: 5e3,
									kind: x.b.Error,
									text: Y._("Error: Failed to make prediction, please try again later", null, {
										hk: "1tECsx"
									})
								})
							}
							f(!1), v(null)
						}
					},
					pollId: m,
					withOverlay: !0
				}))
			};
			t.default = te(Object(a.b)($, ee)(ne))
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
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-Econ-Prediction.b844eff63ead1f6b2f0f.js.map