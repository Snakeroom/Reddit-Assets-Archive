// https://www.redditstatic.com/desktop2x/reddit-components-Econ-Prediction.ff6e54fb662bb1b53b8c.js
// Retrieved at 10/14/2020, 1:50:05 PM by Reddit Dataminer v1.0.0
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
				c = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				r = n("./src/reddit/icons/svgs/CoinV2/index.tsx"),
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
				}, s.a.createElement(c.b, {
					className: i.a.closeBtnIcon
				})), s.a.createElement("div", {
					className: i.a.headerText
				}, o), s.a.createElement("button", {
					className: i.a.coinButton,
					onClick: t
				}, s.a.createElement("div", {
					className: i.a.coinBalanceIndicator,
					tabIndex: -1
				}, s.a.createElement(r.a, {
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
				wagerSelector: "_2os23XvAUtqZ5v2x_vZB4q",
				wagerSelectorButton: "_2fD6RvMV1dH5U6TJHO81PQ",
				wagerSelectorButtonIcon: "_3igSbIyijCUbD3M6-qz2f_",
				wagerSelectorAmount: "_3yy0IyOr4j2OT-I1JKUGDN",
				coinIcon: "_2do4bEk5jSnsiJimU-j6Zg",
				predictButton: "_2VLnd_5JRilEY5bl7h_Ntn",
				isFetchingCoinPacks: "_1lGLdd2ymJcfTtlY7_LXAj",
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
				checkmarkIcon: "_2gAEl8yg8wfIPLrKbwHden"
			}
		},
		"./src/reddit/components/Econ/Prediction/PredictionStatus/index.m.less": function(e, t, n) {
			e.exports = {
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
				c = n("./src/lib/classNames/index.ts"),
				r = n("./src/lib/timeUntil/index.ts"),
				d = n("./src/reddit/contexts/PageLayer/index.tsx"),
				l = n("./src/reddit/actions/economics/helpers/index.ts"),
				m = n("./src/lib/makeActionCreator/index.ts"),
				u = n("./src/lib/makeGqlRequest/index.ts"),
				p = n("./src/graphql/operations/GetPredictionCoinPackages.json"),
				x = n("./src/graphql/operations/VotePrediction.json");
			var C = n("./src/reddit/selectors/posts.ts"),
				E = n("./src/reddit/actions/economics/predictions/constants.ts");
			const b = Object(m.a)(E.a);
			var f = n("./src/reddit/actions/toaster.ts"),
				g = n("./src/reddit/models/Toast/index.ts"),
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
						className: Object(c.a)(P.a.container, t)
					}, w._("Error: Could not load prediction", null, {
						hk: "3SDSgH"
					}))
				},
				N = n("./src/higherOrderComponents/asModal/index.tsx"),
				O = n("./src/reddit/components/Econ/CoinsModalHeader/index.tsx"),
				j = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				S = n("./src/reddit/icons/svgs/CoinV2/index.tsx"),
				y = n("./src/reddit/icons/svgs/Minus/index.tsx"),
				A = n("./src/reddit/icons/svgs/Plus/index.tsx"),
				B = n("./src/reddit/components/Econ/Prediction/PredictionModal/index.m.less"),
				H = n.n(B);
			const {
				fbt: M
			} = n("./node_modules/fbt/lib/FbtPublic.js"), D = Object(i.c)({
				userCoins: h.d
			}), V = {
				getCoinPacks: e => async (t, n, o) => {
					let {
						gqlContext: s
					} = o;
					const a = n(),
						i = Object(C.ab)(a, {
							postId: e,
							disallowProfile: !0
						});
					if (!i) throw new Error("Post does not belong to a subreddit");
					const c = await ((e, t) => Object(u.a)(e, Object.assign(Object.assign({}, p), {
						variables: {
							subredditName: t
						}
					})))(s(), i.name);
					if (c.error || !c.ok) throw new Error("Failed to fetch coin packs");
					const {
						subredditInfoByName: r
					} = c.body.data;
					if (!r || !r.predictionCoinPackages.length) throw new Error("Subreddit has no coin packs");
					return r.predictionCoinPackages
				},
				showToast: f.e
			};
			var F = Object(a.b)(D, V)(Object(N.a)(e => {
					let {
						getCoinPacks: t,
						isCreatingVote: n,
						onCancel: a,
						onPredict: i,
						pollId: r,
						showToast: d,
						userCoins: m
					} = e;
					const [u, p] = Object(o.useState)(0), [x, C] = Object(o.useState)(null);
					return Object(o.useEffect)(() => {
						(async () => {
							if (!x) try {
								const e = await t(r);
								e.length || (d({
									duration: 5e3,
									kind: g.b.Error,
									text: M._("Error: Subreddit is not configured with coin packs", null, {
										hk: "2t8uz0"
									})
								}), a()), C(e)
							} catch (e) {
								d({
									duration: 5e3,
									kind: g.b.Error,
									text: M._("Error: Failed to fetch coin packs, please try again later", null, {
										hk: "2aROIr"
									})
								}), a()
							}
						})()
					}, [x, t, a, r, d]), s.a.createElement("div", null, s.a.createElement(O.a, {
						onAddCoins: l.promptUserToBuyMoreCoins,
						onCancel: a,
						title: M._("Predict the Future", null, {
							hk: "4bHA0N"
						}),
						userCoins: m
					}), s.a.createElement("div", {
						className: H.a.modalContent
					}, s.a.createElement("div", {
						className: H.a.wagerSelector
					}, s.a.createElement("button", {
						className: H.a.wagerSelectorButton,
						onClick: e => {
							e.preventDefault(), x && 0 !== u && p(u - 1)
						}
					}, s.a.createElement(y.a, {
						className: H.a.wagerSelectorButtonIcon
					})), x ? s.a.createElement("div", {
						className: H.a.wagerSelectorAmount
					}, s.a.createElement(S.a, {
						className: H.a.coinIcon
					}), " ", x[u].coins) : s.a.createElement(j.a, {
						sizePx: 24
					}), s.a.createElement("button", {
						className: H.a.wagerSelectorButton,
						onClick: e => {
							e.preventDefault(), x && u !== x.length - 1 && p(u + 1)
						}
					}, s.a.createElement(A.a, {
						className: H.a.wagerSelectorButtonIcon
					}))), s.a.createElement("button", {
						className: Object(c.a)(H.a.predictButton, {
							[H.a.isFetchingCoinPacks]: !x
						}),
						disabled: !x || n,
						onClick: e => {
							e.preventDefault(), x && i(x[u])
						}
					}, n ? s.a.createElement(j.a, {
						sizePx: 16
					}) : M._("Predict to Win Coins", null, {
						hk: "SjKBe"
					})), s.a.createElement("div", {
						className: H.a.disclaimer
					}, M._("You must be over 18 to use Predictions. Predictions don’t offer an opportunity to win real money or prizes. Your username and prediction is viewable by other redditors.", null, {
						hk: "FMAjt"
					}))))
				})),
				L = n("./src/reddit/icons/fonts/Coin/index.tsx"),
				T = n("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				U = n("./src/reddit/components/Econ/Prediction/PredictionOption/index.m.less"),
				G = n.n(U);
			var q = e => {
					let {
						isSelected: t,
						onClick: n,
						option: o,
						resolvedOptionId: a,
						votePercentage: i
					} = e;
					const r = a === o.id,
						d = !!a;
					return s.a.createElement("button", {
						className: Object(c.a)(G.a.optionButton, {
							[G.a.hasVoted]: null !== o.userStakeAmount,
							[G.a.isCorrect]: r,
							[G.a.isSelected]: t
						}),
						disabled: d,
						onClick: n
					}, s.a.createElement("div", {
						className: G.a.optionBody
					}, r && s.a.createElement(T.a, {
						className: G.a.checkmarkIcon
					}), s.a.createElement("div", {
						className: G.a.optionText
					}, o.text), o.userStakeAmount && s.a.createElement("div", {
						className: G.a.optionStake
					}, s.a.createElement(L.a, {
						className: G.a.coinIcon
					}), " ", o.userStakeAmount)), i && i > 0 && s.a.createElement("div", {
						className: G.a.optionPercentage,
						style: {
							width: "".concat(i, "%")
						}
					}, " "))
				},
				z = n("./src/reddit/icons/svgs/ClockFilled/index.tsx"),
				W = n("./src/reddit/components/Econ/Prediction/PredictionStatus/index.m.less"),
				R = n.n(W);
			const {
				fbt: J
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Z = e => {
				let {
					endsAt: t,
					resolvedOptionId: n
				} = e;
				return Date.now() > t ? s.a.createElement(s.a.Fragment, null, s.a.createElement(z.a, {
					className: R.a.clockIcon
				}), n ? J._("Prediction ended", null, {
					hk: "3o79Ig"
				}) : J._("Ended. Awaiting results", null, {
					hk: "1szagh"
				})) : J._("Prediction ends in {expirationDuration}", [J._param("expirationDuration", Object(r.a)(new Date(t), !0))], {
					hk: "3ysXEE"
				})
			};
			var Q = e => {
					let {
						endsAt: t,
						resolvedOptionId: n,
						totalStakeAmount: o
					} = e;
					return s.a.createElement("div", {
						className: R.a.statusBar
					}, o > 0 && s.a.createElement(s.a.Fragment, null, s.a.createElement(S.a, {
						className: R.a.coinIcon
					}), o, " ", J._("prize pool", null, {
						hk: "40MUgn"
					}), s.a.createElement("div", {
						className: R.a.divider
					}, "·")), s.a.createElement(Z, {
						endsAt: t,
						resolvedOptionId: n
					}))
				},
				X = n("./src/reddit/components/Econ/Prediction/index.m.less"),
				K = n.n(X);
			const {
				fbt: Y
			} = n("./node_modules/fbt/lib/FbtPublic.js"), $ = Object(i.c)({
				isEditing: _.G,
				prediction: v.g,
				pollId: v.a,
				post: C.N,
				subredditOrProfile: C.ab,
				userCoins: h.d
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
							gqlContext: c
						} = i;
						const r = await ((e, t) => {
							let {
								postId: n,
								optionId: o,
								coinPackageId: s,
								price: a
							} = t;
							return Object(u.a)(e, Object.assign(Object.assign({}, x), {
								variables: {
									input: {
										postId: n,
										optionId: o,
										coinPackageId: s,
										price: a
									}
								}
							}))
						})(c(), {
							coinPackageId: t,
							optionId: n,
							postId: o,
							price: s
						});
						if (r.error || !r.ok) throw new Error("Failed to make prediction");
						const {
							votePrediction: d
						} = r.body.data;
						if (!d) throw new Error("Failed to create prediction vote");
						return e(b({
							pollId: o,
							prediction: d.poll
						})), d.poll
					}
				},
				showToast: f.e
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
					userCoins: x
				} = e;
				const [C, E] = Object(o.useState)(!1), [b, f] = Object(o.useState)(null);
				if (!m || !d || !u) return s.a.createElement(I, null);
				const {
					endsAt: v,
					options: _,
					resolvedOptionId: h,
					totalStakeAmount: k,
					userSelection: P
				} = d, w = v < Date.now(), N = () => {
					f(null)
				}, O = n ? Object(c.a)(t, K.a.container, K.a.forCommentsPage, {
					[K.a.isEditing]: a
				}) : Object(c.a)(t, K.a.container);
				return s.a.createElement("div", {
					className: O,
					onClick: e => {
						d && e.stopPropagation()
					}
				}, s.a.createElement("div", {
					className: K.a.poll
				}, _.map(e => s.a.createElement(q, {
					key: "prediction-option-".concat(e.id),
					isSelected: b === e.id,
					option: e,
					onClick: () => (e => {
						w || P && P !== e.id || f(e.id)
					})(e),
					resolvedOptionId: h,
					votePercentage: (P || w) && e.totalStakeAmount ? Math.floor(e.totalStakeAmount / k * 100) : null
				}))), s.a.createElement(Q, {
					endsAt: v,
					resolvedOptionId: h,
					totalStakeAmount: k
				}), !!b && s.a.createElement(F, {
					isCreatingVote: C,
					onOverlayClick: N,
					onCancel: N,
					onPredict: async e => {
						if (e.coins > x) Object(l.promptUserToBuyMoreCoins)();
						else {
							if (w) return p({
								duration: 5e3,
								kind: g.b.Error,
								text: Y._("Error: Failed to make prediction. This prediction has already ended", null, {
									hk: "22UWEr"
								})
							}), void f(null);
							if (!m || !b) throw new Error("Invalid arguments, optionId and pollId must be strings");
							E(!0);
							try {
								await i({
									coinPackageId: e.id,
									optionId: b,
									postId: m,
									price: e.coins
								}), p({
									duration: 5e3,
									kind: g.b.SuccessCommunity,
									text: Y._("Thanks! See if you're right in {timeToResult}", [Y._param("timeToResult", Object(r.a)(new Date(v), !0))], {
										hk: "3ZSdoo"
									})
								})
							} catch (t) {
								p({
									duration: 5e3,
									kind: g.b.Error,
									text: Y._("Error: Failed to make prediction, please try again later", null, {
										hk: "1tECsx"
									})
								})
							}
							E(!1), f(null)
						}
					},
					pollId: m,
					withOverlay: !0
				}))
			};
			t.default = te(Object(a.b)($, ee)(ne))
		},
		"./src/reddit/icons/fonts/Coin/index.m.less": function(e, t, n) {
			e.exports = {
				CoinIcon: "_12xlue8dQ1odPw1J81FIGQ",
				coinIcon: "_12xlue8dQ1odPw1J81FIGQ"
			}
		},
		"./src/reddit/icons/fonts/Coin/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				a = n("./src/reddit/constants/colors.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				c = n("./src/reddit/icons/fonts/Coin/index.m.less"),
				r = n.n(c);
			const d = n("./src/lib/lessComponent.tsx").a.wrapped(e => s.a.createElement("i", {
				className: "".concat(Object(i.b)("coin"), " ").concat(e.className),
				style: {
					color: e.fillColor || a.a.gold
				}
			}), "CoinIcon", r.a);
			t.a = d
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
				c = n.n(i);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("path", {
				className: Object(a.a)(c.a.shadow, e.shadowClassName),
				d: "M11.1 1.889H8.722v16.219h2.212a5.86 5.86 0 001.951-.274c3.658-1.158 5.837-5.614 4.856-9.933C16.92 4.28 14.134 1.886 11.1 1.89z"
			}), s.a.createElement("path", {
				d: "M11.1 1.889H8.722v16.219h2.212a5.86 5.86 0 001.951-.274c3.658-1.158 5.837-5.614 4.856-9.933C16.92 4.28 14.134 1.886 11.1 1.89z",
				fill: "url(#shine)",
				fillOpacity: ".3"
			}), s.a.createElement("path", {
				className: Object(a.a)(c.a.standardColor, e.standardColorClassName),
				d: "M6.991 2.166C3.334 3.324 1.155 7.78 2.135 12.1c.98 4.32 4.754 6.891 8.411 5.734 3.658-1.157 5.837-5.613 4.857-9.932-.98-4.32-4.754-6.892-8.412-5.735z"
			}), s.a.createElement("path", {
				className: Object(a.a)(c.a.shadow, e.shadowClassName),
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-Econ-Prediction.ff6e54fb662bb1b53b8c.js.map