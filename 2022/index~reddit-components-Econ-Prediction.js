// https://www.redditstatic.com/desktop2x/index~reddit-components-Econ-Prediction.9ce1f5f1ca028bc69025.js
// Retrieved at 2/2/2022, 2:10:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["index~reddit-components-Econ-Prediction"], {
		"./src/reddit/components/Econ/Prediction/PredictionCard/PredictionBody/PredictionQuestion/index.m.less": function(e, t, a) {
			e.exports = {
				container: "_2XkexQO5WSnaH2KamuN59o",
				badge: "_3HH01AolBtueJhnmBWcq7i",
				question: "_2zyWv-NhNpIYGWqumULrxq",
				long: "_2BJ-OOmBB_MAs1WZQQQS_5"
			}
		},
		"./src/reddit/components/Econ/Prediction/PredictionCard/PredictionBody/index.m.less": function(e, t, a) {
			e.exports = {
				poll: "_3yLx1E79lHypYxkwmN9urH",
				isNightMode: "-tCaF7I66aW5D5iZMHhg_",
				predictionOptions: "_2N3e-L5zd4J-6b2Qof3_2k",
				loggedOutTooltip: "_11QuxYf3g-rnw6QjNypXgl",
				loggedOutIcon: "_1O48f5HxGU9l8wK-9Di9u4"
			}
		},
		"./src/reddit/components/Econ/Prediction/PredictionCard/PredictionBody/index.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return fe
			}));
			var n = a("./node_modules/react/index.js"),
				c = a.n(n),
				o = a("./node_modules/react-redux/es/index.js"),
				s = a("./src/lib/classNames/index.ts"),
				r = a("./src/reddit/components/Econ/Prediction/themes.ts"),
				l = a("./src/reddit/components/Econ/Prediction/PredictionCard/PredictionBody/PredictionQuestion/index.m.less"),
				i = a.n(l);
			const {
				fbt: d
			} = a("./node_modules/fbt/lib/FbtPublic.js"), m = ({
				theme: e = "theme_4",
				children: t
			}) => {
				const a = t ? t.toString() : "";
				return c.a.createElement("div", {
					className: i.a.container,
					style: {
						backgroundImage: r.a[e] || r.a.theme_4
					}
				}, c.a.createElement("div", {
					className: i.a.badge
				}, d._("Prediction", null, {
					hk: "1MyVWT"
				})), c.a.createElement("div", {
					className: Object(s.a)(i.a.question, {
						[i.a.long]: Boolean(a.length > 100)
					}),
					title: a.length > 140 ? a : void 0
				}, t))
			};
			var u = a("./src/reddit/components/Econ/Prediction/TournamentTokenIcon/index.tsx"),
				p = a("./src/reddit/components/UserIcon/CurrentUserIcon.tsx"),
				f = a("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				h = a("./src/reddit/icons/svgs/CoinV2/index.tsx"),
				E = a("./src/reddit/selectors/user.ts"),
				b = a("./src/reddit/components/Econ/Prediction/PredictionOption/index.m.less"),
				_ = a.n(b);

			function x() {
				return (x = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: g
			} = a("./node_modules/fbt/lib/FbtPublic.js");
			var O = Object(n.forwardRef)(({
					className: e,
					disabled: t,
					isCancelled: a,
					isEnded: n,
					isSelected: r,
					needsResolution: l,
					option: i,
					resolvedOptionId: d,
					tournamentId: m,
					userIsLoggedOut: b,
					userSelection: g,
					votePercentage: O,
					isShowingHint: v,
					...C
				}, k) => {
					const I = Object(o.e)(E.W),
						N = d === i.id,
						j = n || !!g || !!d || a;
					return c.a.createElement("div", {
						className: _.a.optionButtonWrapper
					}, c.a.createElement("button", x({
						"aria-label": i.text,
						className: Object(s.a)(_.a.optionButton, e, {
							[_.a.canVote]: !g && !n && !a,
							[_.a.isVote]: !a && g === i.id,
							[_.a.isCorrect]: N,
							[_.a.isSelected]: r,
							[_.a.isShowingHint]: v && !g,
							[_.a.isNightMode]: I
						}),
						disabled: t || a || !l && (j || b),
						ref: k
					}, C), c.a.createElement("div", {
						className: _.a.optionBody
					}, c.a.createElement("div", {
						className: Object(s.a)(_.a.optionText, {
							[_.a.hasUserAmount]: Boolean(i.userStakeAmount)
						})
					}, N && c.a.createElement(f.a, {
						className: _.a.checkmarkIcon
					}), c.a.createElement("span", {
						className: _.a.optionLabel,
						title: i.text.length > 25 ? i.text : void 0
					}, i.text)), Boolean(i.userStakeAmount && !a) && c.a.createElement("div", {
						className: _.a.optionStake
					}, m ? c.a.createElement(u.a, {
						tournamentId: m,
						className: _.a.icon
					}) : c.a.createElement(h.a, {
						className: _.a.icon
					}), " ", i.userStakeAmount, c.a.createElement(p.a, {
						className: _.a.userIcon
					})), Boolean(!i.userStakeAmount && O && !v && !a) && c.a.createElement("div", {
						className: _.a.optionStake
					}, O, "%")), Boolean(O && !a) && c.a.createElement("div", {
						className: _.a.optionPercentage,
						style: {
							width: `${O}%`,
							maxWidth: `${O}%`
						}
					}, " ")))
				}),
				v = a("./src/reddit/actions/economics/predictions/index.ts"),
				C = a("./node_modules/fbt/lib/FbtPublic.js"),
				k = a("./src/higherOrderComponents/asModal/index.tsx"),
				I = a("./src/lib/initializeClient/installReducer.ts"),
				N = a("./src/reddit/reducers/features/predictions/index.ts"),
				j = a("./src/reddit/actions/toaster.ts"),
				P = a("./src/reddit/endpoints/economics/predictions.ts"),
				M = a("./src/reddit/models/Toast/index.ts");
			const {
				fbt: A
			} = a("./node_modules/fbt/lib/FbtPublic.js");
			Object(I.a)({
				features: {
					predictions: N.a
				}
			});
			const y = e => e(Object(j.f)({
				duration: j.a,
				kind: M.b.Error,
				text: A._("Error: Failed to change prediction selection, please try again later", null, {
					hk: "WLVPy"
				})
			}));
			var w = a("./src/reddit/components/ModalStyledComponents/index.tsx"),
				S = a("./src/reddit/controls/TextButton/index.tsx"),
				T = a("./src/reddit/selectors/telemetry.ts");
			const L = "prediction_sneak_peek",
				B = (e, t) => ({
					...T.m(e),
					post: T.G(e, t),
					subreddit: T.gb(e),
					predictions: T.M(e, t)
				});
			var H = a("./src/reddit/hooks/useTracking.ts"),
				U = a("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				z = a("./src/reddit/components/Econ/Prediction/PredictionChangeModal/index.m.less"),
				F = a.n(z);

			function W() {
				return (W = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
					}
					return e
				}).apply(this, arguments)
			}
			const Z = Object(k.a)(({
					postId: e,
					options: t,
					selectedOptionId: a,
					onClose: r
				}) => {
					const l = Object(o.d)(),
						i = Object(H.a)(),
						[d, m] = Object(n.useState)(null);
					return c.a.createElement(w.e, null, c.a.createElement(w.i, null, c.a.createElement(U.a, null, c.a.createElement(w.q, null, C.fbt._("Change your prediction", null, {
						hk: "34AjlU"
					})), c.a.createElement(S.a, {
						onClick: r
					}, c.a.createElement(w.b, null)))), c.a.createElement(w.l, null, t.map(e => c.a.createElement("button", {
						key: e.id,
						type: "button",
						className: Object(s.a)(F.a.predictionOption, {
							[F.a.selected]: e.id === (null == d ? void 0 : d.id)
						}),
						disabled: e.id === a,
						onClick: () => m(e)
					}, c.a.createElement("span", {
						className: F.a.predictionOptionLabel
					}, e.text), e.id === a && c.a.createElement(p.a, {
						className: F.a.userIcon
					})))), c.a.createElement(w.g, null, c.a.createElement(w.a, {
						onClick: r,
						"data-redditstyle": !0
					}, C.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), c.a.createElement(w.c, {
						disabled: !d,
						onClick: () => {
							d && (l((({
								postId: e,
								optionId: t
							}) => async (a, n, {
								gqlContext: c
							}) => {
								if (e && t) try {
									const n = await Object(P.d)(c(), {
										postId: e,
										optionId: t
									});
									a(Object(v.e)({
										postId: e,
										prediction: n
									})), a(Object(j.f)({
										duration: j.a,
										kind: M.b.SuccessCommunity,
										text: A._("Your prediction has been updated", null, {
											hk: "4wwhZ6"
										})
									}))
								} catch {
									y(a)
								} else y(a)
							})({
								postId: e,
								optionId: d.id
							})), i((e => t => ({
								...B(t, e),
								source: "predictions_option_change",
								action: "click",
								noun: "confirm"
							}))(e)), r())
						}
					}, C.fbt._("Confirm", null, {
						hk: "2Fmv8L"
					}))))
				}),
				V = e => c.a.createElement(Z, W({
					withOverlay: !0,
					onOverlayClick: e.onClose
				}, e));
			var D = a("./src/reddit/controls/Button/index.tsx"),
				R = a("./src/reddit/icons/svgs/Undo/index.tsx");
			const {
				fbt: K
			} = a("./node_modules/fbt/lib/FbtPublic.js"), q = ({
				postId: e,
				options: t,
				selectedOptionId: a,
				isLimitReached: s
			}) => {
				const r = Object(o.d)(),
					l = Object(H.a)(),
					i = Object(o.e)(E.t),
					[d, m] = Object(n.useState)(!1),
					u = K._("Change your prediction", null, {
						hk: "hleE5"
					});
				return c.a.createElement(c.a.Fragment, null, c.a.createElement(D.k, {
					"aria-label": u,
					className: _.a.additionalOptionButton,
					disabled: s,
					isFullWidth: !0,
					onClick: () => {
						i && (m(!0), l((e => t => ({
							...B(t, e),
							source: "predictions",
							action: "click",
							noun: "predictions_option_change"
						}))(e))), i || (r(Object(v.t)("CHANGE_PREDICTION")), l((e => t => ({
							...B(t, e),
							source: "predictions",
							action: "click",
							noun: "premium",
							actionInfo: {
								reason: "predictions_option_change"
							}
						}))(e)))
					}
				}, c.a.createElement(R.a, {
					className: _.a.icon
				}), u), d && c.a.createElement(V, {
					postId: e,
					options: t,
					selectedOptionId: a,
					onClose: () => m(!1)
				}))
			};
			var G = a("./src/reddit/hooks/useLocalStorage.ts"),
				Q = a("./src/reddit/icons/svgs/EyeDouble/index.tsx"),
				Y = a("./src/reddit/icons/svgs/Star6/index.m.less"),
				J = a.n(Y);
			var X = ({
					className: e
				}) => c.a.createElement("svg", {
					className: Object(s.a)(J.a.sparkle, e),
					viewBox: "0 0 12 12",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, c.a.createElement("path", {
					d: "M6.24217.834593C6.17191.634169 5.98271.5 5.77032.5c-.21238 0-.40158.134169-.47184.334593L4.09315 4.27297.820306 5.53341C.627317 5.60773.5 5.79319.5 6s.127317.39227.320306.46659L4.09315 7.72703l1.20533 3.43837c.07026.2004.25946.3346.47184.3346.21239 0 .40159-.1342.47185-.3346L7.4475 7.72703l3.2728-1.26044c.193-.07432.3203-.25978.3203-.46659s-.1273-.39227-.3203-.46659L7.4475 4.27297 6.24217.834593z",
					fill: "url(#paint0_linear)",
					stroke: "inherit",
					strokeLinejoin: "round"
				}), c.a.createElement("defs", null, c.a.createElement("linearGradient", {
					id: "paint0_linear",
					x1: "1",
					y1: "11",
					x2: "10.5506",
					y2: "10.9905",
					gradientUnits: "userSpaceOnUse"
				}, c.a.createElement("stop", {
					stopColor: "#EC0623"
				}), c.a.createElement("stop", {
					offset: "1",
					stopColor: "#FF8717"
				})))),
				$ = a("./src/config.ts"),
				ee = a("./src/reddit/icons/fonts/index.tsx"),
				te = a("./src/reddit/components/Econ/Prediction/SneakPeekEducationModal/index.m.less"),
				ae = a.n(te);
			const {
				fbt: ne
			} = a("./node_modules/fbt/lib/FbtPublic.js");
			var ce = Object(k.a)(({
				postId: e,
				hasSeenSneakPeek: t,
				onReveal: a,
				onClose: o
			}) => {
				const s = Object(H.a)();
				Object(n.useEffect)(() => {
					s((({
						postId: e
					}) => t => ({
						...B(t, e),
						source: L,
						action: "view",
						noun: "continue"
					}))({
						postId: e
					}))
				}, [s, e]);
				return c.a.createElement("div", {
					className: ae.a.modal
				}, c.a.createElement(D.t, {
					"aria-label": ne._("Close", null, {
						hk: "10CQyx"
					}),
					className: ae.a.closeButton,
					Icon: Object(ee.b)("close"),
					onClick: o,
					priority: D.c.Plain
				}), c.a.createElement("header", {
					className: ae.a.header
				}, c.a.createElement("div", {
					className: ae.a.imageWrapper
				}, c.a.createElement("img", {
					className: ae.a.image,
					src: `${$.a.assetPath}/img/econ/predictions/sneak_peek.png`,
					alt: ne._("Snoo peeking behind the curtain", null, {
						hk: "271pCZ"
					})
				}), !t && c.a.createElement(c.a.Fragment, null, c.a.createElement(X, {
					className: ae.a.star1
				}), c.a.createElement(X, {
					className: ae.a.star2
				}), c.a.createElement(X, {
					className: ae.a.star3
				}), c.a.createElement(X, {
					className: ae.a.star4
				}), c.a.createElement(X, {
					className: ae.a.star5
				}))), c.a.createElement("div", {
					className: ae.a.spacer
				}), c.a.createElement("p", {
					className: ae.a.premium
				}, ne._("Premium Feature", null, {
					hk: "32ZWoW"
				})), c.a.createElement("div", {
					className: ae.a.smallSpacer
				}), c.a.createElement("h2", {
					className: ae.a.title
				}, ne._("Sneak Peek", null, {
					hk: "2FAIvU"
				})), c.a.createElement("h3", {
					className: ae.a.subtitle
				}, ne._("Reddit Premium members can see what others have picked before making a prediction.", null, {
					hk: "R7Vkp"
				}))), c.a.createElement(D.t, {
					priority: D.c.Primary,
					className: ae.a.button,
					onClick: () => {
						s((({
							postId: e
						}) => t => ({
							...B(t, e),
							source: L,
							action: "click",
							noun: "continue"
						}))({
							postId: e
						})), a(), o()
					},
					isFullWidth: !0
				}, ne._("Continue", null, {
					hk: "3T00JU"
				})), c.a.createElement("div", {
					className: ae.a.spacer
				}), c.a.createElement("p", {
					className: ae.a.disclaimer
				}, ne._("Limited time feature available for paid Reddit Premium members only.", null, {
					hk: "2F8m1c"
				})))
			});
			const {
				fbt: oe
			} = a("./node_modules/fbt/lib/FbtPublic.js"), se = ({
				disabled: e,
				isEnded: t,
				userSelection: a,
				isShowingHint: s,
				tournamentId: r,
				postId: l,
				onReveal: i
			}) => {
				const d = Object(o.d)(),
					m = Object(H.a)(),
					[u, p] = Object(n.useState)(!1),
					[f, h] = Object(G.a)("hasSeenPredictionSneakPeek", !1),
					b = !!r,
					x = a && !s,
					g = Object(o.e)(E.t),
					O = () => {
						f || h(!0), p(!1)
					};
				return !t && !x && b ? c.a.createElement("div", {
					className: _.a.optionButtonWrapper
				}, !f && !e && c.a.createElement(c.a.Fragment, null, c.a.createElement(X, {
					className: _.a.star1
				}), c.a.createElement(X, {
					className: _.a.star2
				}), c.a.createElement(X, {
					className: _.a.star3
				}), c.a.createElement(X, {
					className: _.a.star4
				}), c.a.createElement(X, {
					className: _.a.star5
				})), c.a.createElement(D.k, {
					"aria-label": oe._("Sneak a peek", null, {
						hk: "1VQ7WW"
					}),
					className: _.a.additionalOptionButton,
					disabled: e,
					isFullWidth: !0,
					onClick: () => {
						if (!g) return m((({
							postId: e
						}) => t => ({
							...B(t, e),
							source: L,
							action: "click",
							noun: "premium"
						}))({
							postId: l
						})), void d(Object(v.t)("SNEAK_PEEK"));
						m((e => t => ({
							...B(t, e),
							source: "predictions",
							action: "click",
							noun: L
						}))(l)), f ? i() : p(!0)
					}
				}, c.a.createElement(Q.a, {
					className: _.a.icon
				}), oe._("See what others predicted", null, {
					hk: "s0o8s"
				})), u && c.a.createElement(ce, {
					postId: l,
					hasSeenSneakPeek: f,
					onReveal: i,
					onClose: O,
					withOverlay: !0,
					onOverlayClick: O
				})) : null
			};
			var re = a("./src/reddit/icons/svgs/MinusCircle/index.tsx"),
				le = a("./src/reddit/models/Prediction/index.ts"),
				ie = a("./src/reddit/selectors/features/predictions/tournaments/index.ts"),
				de = a("./src/reddit/components/Econ/Prediction/PredictionCard/PredictionBody/index.m.less"),
				me = a.n(de);

			function ue() {
				return (ue = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: pe
			} = a("./node_modules/fbt/lib/FbtPublic.js"), fe = ({
				prediction: e,
				selectedOptionId: t,
				onSelectOption: a,
				className: r,
				...l
			}) => {
				const {
					creatorId: i,
					endsAt: d,
					options: u,
					resolvedOptionId: p,
					totalVoters: f,
					tournamentId: h,
					userSelection: b,
					predictionStatus: _,
					voteUpdatesRemained: x
				} = e, g = Boolean((null == e ? void 0 : e.userSelection) && !(null == e ? void 0 : e.resolvedOptionId) && e.predictionStatus === le.b.Open && e.endsAt > Date.now()), v = Object(o.e)(t => (null == e ? void 0 : e.tournamentId) ? Object(ie.a)(t, e.tournamentId) : null), C = Object(o.e)(E.W), k = Object(o.e)(E.tb), I = Object(o.e)(E.J), [N, j] = Object(n.useState)(!1), P = i === k, M = d < Date.now(), A = M && P && !p, y = _ === le.b.Cancelled || _ === le.b.CancelInProgress, w = M || !!b || !!p || y;
				return Object(n.useEffect)(() => {
					j(!1)
				}, [b, e]), c.a.createElement("div", ue({
					className: Object(s.a)(r, me.a.poll, {
						[me.a.isNightMode]: C
					})
				}, l), c.a.createElement(m, {
					theme: null == v ? void 0 : v.theme
				}, e.title), c.a.createElement("div", {
					className: me.a.predictionOptions
				}, !I && !w && c.a.createElement("div", {
					className: me.a.loggedOutTooltip
				}, c.a.createElement(re.a, {
					className: me.a.loggedOutIcon
				}), pe._("You must be logged in", null, {
					hk: "18KrL7"
				})), u.map(e => c.a.createElement(O, {
					key: e.id,
					isCancelled: y,
					isEnded: M,
					isSelected: t === e.id,
					needsResolution: A,
					option: e,
					onClick: () => a(e),
					resolvedOptionId: p,
					tournamentId: h,
					userSelection: b,
					userIsLoggedOut: !I,
					votePercentage: (b || M || N) && e.voteCount ? Math.floor(e.voteCount / f * 100) : null,
					isShowingHint: N
				})), !y && c.a.createElement(se, {
					disabled: N || !!b,
					isEnded: M,
					userSelection: b,
					isShowingHint: N,
					tournamentId: h,
					postId: e.postId,
					onReveal: () => j(!0)
				}), !y && g && c.a.createElement(q, {
					isLimitReached: 0 === x,
					postId: e.postId,
					options: u,
					selectedOptionId: b
				})))
			}
		},
		"./src/reddit/components/Econ/Prediction/PredictionChangeModal/index.m.less": function(e, t, a) {
			e.exports = {
				predictionOption: "_3wvUT6tjOcXB4BiKlEXrxY",
				selected: "_1gT-9Fji_KmUujExIMuFfd",
				userIcon: "k-ZpKUSo0rrrjE-paWfxJ",
				predictionOptionLabel: "_1Vz7v_uQsxv72ujqMsoKZQ"
			}
		},
		"./src/reddit/components/Econ/Prediction/PredictionModal/Header/index.m.less": function(e, t, a) {
			e.exports = {
				header: "_1GnHYLn0aCObcLqTA1xtwR",
				closeButton: "_2iZ-IXZZylrwavp6aeTzFX",
				colorCommentary: "_20HQ1aGzvIpnUMKQggpUrI",
				hasAddedCoins: "_26TE7PvrR6D7io5LwqJShQ",
				highlight: "MhHemiuT8jEMOEZV2ky8T",
				isHighlighting: "Lh1EKHOdpzj9KClHFZO35",
				leftStar: "_2elK6PfkbfOBu-Zo47yqQg",
				rightStar: "itoX1IG77IjNRjLMJw4vg"
			}
		},
		"./src/reddit/components/Econ/Prediction/PredictionModal/Selection/index.m.less": function(e, t, a) {
			e.exports = {
				selection: "_3mXeWtWrQMUrcX5gN64pJZ",
				grow: "_2sH8TgObwzRLtZtrzpMDFv"
			}
		},
		"./src/reddit/components/Econ/Prediction/PredictionModal/TokensBalance/index.m.less": function(e, t, a) {
			e.exports = {
				tokenBalance: "_3FN0WWt8zU4273aLhsg5Mf",
				tokenBalanceAmount: "_1mH1VcHrBLLHVuWEyMjmPc",
				tokenIcon: "meUq1Ym4T72uvWc0573zE"
			}
		},
		"./src/reddit/components/Econ/Prediction/PredictionModal/index.m.less": function(e, t, a) {
			e.exports = {
				modalWrapper: "_1WJUwbe3sPKSU0YD7O6AM1",
				modalContent: "PCljWh8QzWYMvMGLfqHrV",
				wagerSelectorContainer: "Ohg8M4OViq6F3ULEi2saM",
				wagerSelector: "_2os23XvAUtqZ5v2x_vZB4q",
				wagerSelectorButton: "_2fD6RvMV1dH5U6TJHO81PQ",
				wagerSelectorButtonIcon: "_3igSbIyijCUbD3M6-qz2f_",
				wagerSelectorAmount: "_3yy0IyOr4j2OT-I1JKUGDN",
				loadingIcon: "_241eeIb3aLNVitpodV4RX2",
				amountMessage: "_10mtryO-SQvuYq4vTqNH52",
				coinIcon: "_2do4bEk5jSnsiJimU-j6Zg",
				smallCoinIcon: "hnhKerEQMs79r3yG5XMJD",
				tokenIcon: "_1QUcsp5Zu0IbSla7qCxyuV",
				predictButton: "_2VLnd_5JRilEY5bl7h_Ntn",
				isDisabled: "_3L3LyIElyyDCH99LLw9W4c",
				isCreatingVote: "GpWe_Aro2EMEP-Dd8HoN5",
				disclaimer: "_2dot3s8nobkqMUncV3HgJr",
				upsell: "_3qz04nxqANixa5AWLWjvyr"
			}
		},
		"./src/reddit/components/Econ/Prediction/PredictionModal/index.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/react/index.js"),
				c = a.n(n),
				o = a("./node_modules/react-redux/es/index.js"),
				s = a("./node_modules/reselect/es/index.js"),
				r = a("./src/higherOrderComponents/asModal/index.tsx"),
				l = a("./src/lib/classNames/index.ts"),
				i = a("./src/reddit/components/Econ/Prediction/TournamentTokenIcon/index.tsx"),
				d = a("./src/reddit/components/Econ/Prediction/UnicornIcon/index.tsx"),
				m = a("./src/reddit/controls/LoadingIcon/index.tsx"),
				u = a("./src/reddit/icons/svgs/CoinV2/index.tsx"),
				p = a("./src/reddit/icons/svgs/Minus/index.tsx"),
				f = a("./src/reddit/icons/svgs/Plus/index.tsx"),
				h = a("./src/reddit/helpers/trackers/predictions.ts"),
				E = a("./src/reddit/hooks/useTracking.ts"),
				b = a("./src/reddit/models/Prediction/index.ts"),
				_ = a("./src/reddit/selectors/user.ts"),
				x = a("./src/reddit/controls/Button/index.tsx"),
				g = a("./src/reddit/icons/fonts/index.tsx");

			function O({
				className: e
			}) {
				return c.a.createElement("svg", {
					className: e,
					width: "24",
					height: "24",
					viewBox: "0 0 24 24",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, c.a.createElement("path", {
					opacity: "0.4",
					d: "M12 0L13.6971 10.3029L24 12L13.6971 13.6971L12 24L10.3029 13.6971L0 12L10.3029 10.3029L12 0Z",
					fill: "#DDBD37"
				}))
			}
			const {
				fbt: v
			} = a("./node_modules/fbt/lib/FbtPublic.js"), C = {
				0: [v._("IT’S LIKE YOU HAVE ESPN OR SOMETHING", null, {
					hk: "4uUPl5"
				}), v._("SOMEONE’S WEARING THEIR SMARTYPANTS", null, {
					hk: "qN0k"
				}), v._("CARE TO MAKE THIS INTERESTING?", null, {
					hk: "47Xsve"
				}), v._("NOT MUCH OF A RISK TAKER ARE YOU?", null, {
					hk: "2L977G"
				}), v._("YOU HAVE CHOSEN… WISELY", null, {
					hk: "2TtWN7"
				}), v._("EVEN A BROKEN CLOCK…", null, {
					hk: "4hICJf"
				}), v._("THE ONLY DANGEROUS AMOUNT IS NONE", null, {
					hk: "gXUSY"
				}), v._("KNOWING IS NOT ENOUGH, WE MUST APPLY", null, {
					hk: "2TKCxt"
				}), v._("FEEL A SENSE OF PRIDE AND ACCOMPLISHMENT", null, {
					hk: "Fyuw6"
				})],
				10: [v._("YOU’RE GONNA NEED A BIGGER BOAT", null, {
					hk: "10rVXp"
				}), v._("MORE COWBELL!!!", null, {
					hk: "2QxBVm"
				}), v._("THIS X 100", null, {
					hk: "22KiG6"
				}), v._("PUT THEM IN COACH, THEY’RE READY TO PLAY", null, {
					hk: "HSHpa"
				}), v._("LOOK WHO FINALLY DECIDED TO SHOW UP", null, {
					hk: "xiCan"
				})],
				30: [v._("PLAYER 1 HAS ENTERED THE GAME", null, {
					hk: "3ar3RF"
				}), v._("9/10 WOULD ADD MORE AGAIN", null, {
					hk: "4vHoFB"
				}), v._("HAVING NO LIMITATION AS LIMITATION", null, {
					hk: "XCKKV"
				}), v._("LIVE, LAUGH, LOVE, ADD MORE", null, {
					hk: "108oZP"
				})],
				100: [v._("LIKE A BOSS!", null, {
					hk: "1L9c48"
				}), v._("MAKE IT SO", null, {
					hk: "4l4SGb"
				}), v._("SOMEBODY’S GOTTA WIN", null, {
					hk: "AYUg5"
				}), v._("IN IT TO WIN IT", null, {
					hk: "i1Fve"
				}), v._("WELCOME TO THE CENTURY CLUB", null, {
					hk: "2crGlm"
				})]
			}, k = (e = 0) => {
				const t = C[e];
				return t[Math.floor(Math.random() * t.length)]
			};
			var I = a("./src/reddit/components/Econ/Prediction/PredictionModal/Header/index.m.less"),
				N = a.n(I);
			const {
				fbt: j
			} = a("./node_modules/fbt/lib/FbtPublic.js");

			function P({
				onCancel: e,
				selectedChipPack: t
			}) {
				const [a, o] = Object(n.useState)(null), [s, r] = Object(n.useState)(!1), i = (null == t ? void 0 : t.amount) || 0;
				return Object(n.useEffect)(() => {
					o(k(i)), r(!0), setTimeout(() => r(!1), 400)
				}, [i]), c.a.createElement("div", {
					className: N.a.header
				}, c.a.createElement(x.t, {
					"aria-label": j._("Close", null, {
						hk: "40q8CL"
					}),
					className: N.a.closeButton,
					Icon: Object(g.b)("close"),
					onClick: e,
					priority: x.c.Plain
				}), c.a.createElement("h3", {
					className: Object(l.a)(N.a.colorCommentary, {
						[N.a.hasAddedCoins]: !!i
					}),
					"data-testid": "color-commentary"
				}, a || c.a.createElement(c.a.Fragment, null, " "), c.a.createElement("div", {
					className: Object(l.a)(N.a.highlight, {
						[N.a.isHighlighting]: s
					})
				}, c.a.createElement(O, {
					className: N.a.leftStar
				}), c.a.createElement(O, {
					className: N.a.rightStar
				}))))
			}
			var M = a("./src/reddit/components/Econ/Prediction/PredictionModal/Selection/index.m.less"),
				A = a.n(M);
			const {
				fbt: y
			} = a("./node_modules/fbt/lib/FbtPublic.js"), w = ({
				option: e
			}) => c.a.createElement("h1", {
				className: A.a.selection
			}, y._("You picked {lineBreak}{optionText}!", [y._param("lineBreak", c.a.createElement("br", null)), y._param("optionText", `‘${e.text}’`)], {
				hk: "4FrNCA"
			}));
			var S = a("./src/reddit/components/Econ/Prediction/PredictionModal/TokensBalance/index.m.less"),
				T = a.n(S);
			const {
				fbt: L
			} = a("./node_modules/fbt/lib/FbtPublic.js"), B = ({
				tournamentId: e,
				balance: t
			}) => c.a.createElement("div", {
				className: T.a.tokenBalance
			}, L._({
				"*": "You have {=[tokenImage][tokenBalance]} tournament tokens",
				_1: "You have {=[tokenImage][tokenBalance]} tournament token"
			}, [L._param("=[tokenImage][tokenBalance]", c.a.createElement("span", {
				className: T.a.tokenBalanceAmount
			}, L._("{tokenImage}{tokenBalance}", [L._param("tokenImage", c.a.createElement(i.a, {
				tournamentId: e,
				className: T.a.tokenIcon
			})), L._param("tokenBalance", t)], {
				hk: "45pdHg"
			}))), L._plural(t)], {
				hk: "4Gtem2"
			}));
			var H = a("./src/reddit/actions/economics/predictions/index.ts"),
				U = a("./src/reddit/hooks/useToast.tsx"),
				z = a("./src/reddit/selectors/features/predictions/tournaments/index.ts");
			const {
				fbt: F
			} = a("./node_modules/fbt/lib/FbtPublic.js");
			const {
				fbt: W
			} = a("./node_modules/fbt/lib/FbtPublic.js"), Z = 1e3;
			var V = a("./src/reddit/components/Econ/Prediction/PredictionModal/index.m.less"),
				D = a.n(V);
			const {
				fbt: R
			} = a("./node_modules/fbt/lib/FbtPublic.js"), K = Object(s.c)({
				userCoins: _.e
			});
			t.a = Object(o.b)(K)(Object(r.a)(({
				isCreatingVote: e,
				onCancel: t,
				onPredict: a,
				option: s,
				pollId: r,
				tournamentId: _,
				userCoins: x
			}) => {
				const g = function(e, t, a) {
						const [n, s] = c.a.useState([]), r = Object(U.a)(), l = Object(o.d)(), i = Object(o.e)(t => e ? Object(z.a)(t, e) : null), d = c.a.useCallback(async () => {
							try {
								const e = await l(Object(H.i)(t));
								s(e)
							} catch (e) {
								r(F._("Error: Failed to get chip packs for post", null, {
									hk: "1wR7Zy"
								})), a()
							}
						}, [t, l, r, a]);
						return c.a.useEffect(() => {
							(null == i ? void 0 : i.predictionChipPackages) ? s(i.predictionChipPackages): d()
						}, [i, d]), n
					}(_, r, t),
					{
						tokensBalance: O,
						fetched: v
					} = function(e, t) {
						const [a, n] = c.a.useState(null), [s, r] = c.a.useState(!1), l = Object(o.d)(), i = Object(U.a)(), d = c.a.useCallback(async () => {
							if (e) try {
								const t = await l(Object(H.j)(e));
								r(!0), n(null !== t ? t : Z)
							} catch (a) {
								i(W._("Error: Failed to fetch user balance", null, {
									hk: "TF2D5"
								})), t()
							}
						}, [e, l, i, t]);
						return c.a.useEffect(() => {
							e && (n(null), r(!1), d())
						}, [e, d]), {
							tokensBalance: a,
							fetched: s
						}
					}(_, t),
					[C, k] = Object(n.useState)(0),
					[I, N] = Object(n.useState)(!1),
					j = Object(E.a)(),
					M = g.length > 0,
					A = g[C],
					y = M && C === g.length - 1,
					S = (null == A ? void 0 : A.currency) === b.a.Coins,
					T = S && x < ((null == A ? void 0 : A.amount) || 0),
					L = !!A && null !== O && O < A.amount,
					V = T || L,
					K = V || y;
				Object(n.useEffect)(() => {
					I || (j(h.s), N(!0))
				}, [I, j]);
				const q = Object(n.useCallback)(() => {
					j(Object(h.m)({
						pollId: r,
						currency: null == A ? void 0 : A.currency,
						amount: null == A ? void 0 : A.amount
					})), t()
				}, [t, r, A, j]);
				return _ && !v ? null : c.a.createElement("div", {
					className: D.a.modalWrapper
				}, c.a.createElement(P, {
					onCancel: q,
					selectedChipPack: A
				}), c.a.createElement("div", {
					className: D.a.modalContent
				}, c.a.createElement(w, {
					option: s
				}), null !== O && _ && c.a.createElement(B, {
					tournamentId: _,
					balance: O
				}), S && c.a.createElement("p", {
					className: D.a.upsell
				}, R._("Prove you’re right, taunt your fellow redditors, and earn bragging rights.", null, {
					hk: "2fEaS6"
				})), c.a.createElement("div", {
					className: D.a.wagerSelectorContainer
				}, c.a.createElement("div", {
					className: D.a.wagerSelector
				}, c.a.createElement("button", {
					"aria-label": R._("Decrease amount", null, {
						hk: "3CJknV"
					}),
					type: "button",
					disabled: 0 === C,
					className: D.a.wagerSelectorButton,
					onClick: () => {
						M && 0 !== C && k(C - 1)
					}
				}, c.a.createElement(p.a, {
					className: D.a.wagerSelectorButtonIcon
				})), (null == A ? void 0 : A.currency) === b.a.Coins && c.a.createElement("div", {
					className: D.a.wagerSelectorAmount
				}, c.a.createElement(u.a, {
					className: D.a.coinIcon
				}), " ", A.amount ? A.amount : R._("Free", null, {
					hk: "2EqRoV"
				})), (null == A ? void 0 : A.currency) === b.a.Tokens && c.a.createElement("div", {
					className: D.a.wagerSelectorAmount
				}, A.amount > 0 ? c.a.createElement(c.a.Fragment, null, _ ? c.a.createElement(i.a, {
					tournamentId: _,
					className: D.a.tokenIcon
				}) : c.a.createElement(d.a, {
					className: D.a.tokenIcon
				}), " ", A.amount) : R._("Free", null, {
					hk: "1fDvBk"
				})), !A && c.a.createElement(m.a, {
					className: D.a.loadingIcon,
					sizePx: 24
				}), c.a.createElement("button", {
					"aria-label": R._("Increase", null, {
						hk: "3OfAwL"
					}),
					type: "button",
					disabled: Boolean(M && y),
					className: D.a.wagerSelectorButton,
					onClick: () => {
						M && (y || k(C + 1))
					}
				}, c.a.createElement(f.a, {
					className: D.a.wagerSelectorButtonIcon
				}))), K && c.a.createElement("div", {
					className: D.a.amountMessage
				}, T && R._("Insufficient coins", null, {
					hk: "2Mo83P"
				}), L && R._("Insufficient tokens", null, {
					hk: "2XAKK7"
				}), y && !V && R._("Max amount", null, {
					hk: "1BpnPd"
				}))), c.a.createElement("button", {
					className: Object(l.a)(D.a.predictButton, {
						[D.a.isDisabled]: !M || T,
						[D.a.isCreatingVote]: e
					}),
					disabled: !M || e || L,
					onClick: e => {
						e.preventDefault(), A && a(A)
					}
				}, e ? c.a.createElement(m.a, {
					sizePx: 16
				}) : T ? R._("Get Coins", null, {
					hk: "11KD6n"
				}) : R._("Let's do this!", null, {
					hk: "342MNr"
				})), c.a.createElement("div", {
					className: D.a.disclaimer
				}, S && c.a.createElement(c.a.Fragment, null, R._("You must be over 18 to use Predictions. {=Predictions don’t offer an opportunity to win real money or prizes.}", [R._param("=Predictions don’t offer an opportunity to win real money or prizes.", c.a.createElement("a", {
					href: "https://www.redditinc.com/policies/previews-terms",
					target: "_blank",
					rel: "noopener noreferrer"
				}, R._("Predictions don’t offer an opportunity to win real money or prizes.", null, {
					hk: "1BMKCi"
				})))], {
					hk: "7yPT5"
				}), " "), R._("Other redditors will see your username and prediction.", null, {
					hk: "TPwVV"
				}))))
			}))
		},
		"./src/reddit/components/Econ/Prediction/PredictionOption/index.m.less": function(e, t, a) {
			e.exports = {
				optionButtonWrapper: "_34jfwxE2y_snkXA3q3aaQf",
				optionButton: "_2ntp-JcW8WtkgytaV4Ulhf",
				isNightMode: "_17-ocDeIf2QgrKTHF5n7di",
				canVote: "_1fbJ_nQTE-D4anabkE96oz",
				isVote: "_4SUCBqznJCIiyL9k_52hC",
				isCorrect: "_3jmmoq1otA_Twif-J89nrp",
				optionBody: "X-1krr1vt__mfLM_N6-fc",
				optionText: "_2EtRvWvspf1e95m4nOww3i",
				optionLabel: "JNA6AzK0pVROVOqIFFB3G",
				optionStake: "_13IxX5Ek1VDFfqrZVhO_Xz",
				checkmarkIcon: "_2gAEl8yg8wfIPLrKbwHden",
				icon: "mm7Q2UimK8B5N7a2U94Uh",
				optionPercentage: "_3cTLrBysxImecWhQKcy3u_",
				isShowingHint: "_23J3bI5jf022JCgL4vM3Zp",
				showPercentage: "dtXtw-ToVB3DAPXazCaaq",
				userIcon: "_5L5Z5CqK308hQypmxKdC",
				additionalOptionButton: "mi-WqucYD1Uh7MYPt--9p",
				star1: "OvDvpN-0fsFe2vyihFSWI",
				star2: "_1b-Rcn8TB4dTLb7t_11a0",
				star3: "_3DiunxbT_MWQsv1uJCrEvS",
				star4: "_2ASeRoLCrsveZYTJBWi1y3",
				star5: "_19HQMXjQGx095f06-3MUZJ"
			}
		},
		"./src/reddit/components/Econ/Prediction/SneakPeekEducationModal/index.m.less": function(e, t, a) {
			e.exports = {
				spacer: "_2lOF589sck8KQ4FnVEWW0U",
				smallSpacer: "q25tTYLfD3AaNWgMClUW9",
				modal: "_1T1cPQ8A8THV3QMwDEQWxa",
				closeButton: "_2asP7ByDb9TqPgTG5Yipf",
				image: "_2uQkREvcO_IZ8xinUClYPD",
				imageWrapper: "_2f-aBCRtO2okiI_HwHpzFL",
				star1: "_32eOw4JBGw9kCgQbumS9CS",
				star2: "_1_y2fP4exqsKI3QjWyZz3G",
				star3: "_2s1-6DoM2sP6LWqhnZHCtd",
				star4: "_3q1HNUcRHlWHf-dLMVLnq7",
				star5: "z0Yf7Le4jhc_ysKdAezR8",
				header: "_2MI6f2Bk7JWrVszKp6pplV",
				premium: "_3Ok8bf8kgA586EgmlPYEdw",
				title: "_2NTtJ62nZhgKIZsIZwd0x0",
				subtitle: "_26Goo93ZC_1jjnUEGhzPJ0",
				button: "ivi4pKH2EWGJmAzSzhK_c",
				link: "_1cmrgMg2Y5G_7pVsl1FrOj",
				disclaimer: "_1LCzgVcKu-bOGV1_rVsZVG"
			}
		},
		"./src/reddit/components/Econ/Prediction/TournamentTokenIcon/index.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return i
			}));
			var n = a("./node_modules/fbt/lib/FbtPublic.js"),
				c = a("./node_modules/react/index.js"),
				o = a.n(c),
				s = a("./node_modules/react-redux/es/index.js"),
				r = a("./src/reddit/components/Econ/Prediction/UnicornIcon/index.tsx"),
				l = a("./src/reddit/selectors/features/predictions/tournaments/index.ts");
			const i = ({
				tournamentId: e,
				className: t
			}) => {
				const a = Object(s.e)(t => Object(l.a)(t, e));
				return a && a.tokenIconUrl ? o.a.createElement("img", {
					className: t,
					alt: n.fbt._("Tournament token", null, {
						hk: "3cgDZy"
					}),
					src: a.tokenIconUrl
				}) : o.a.createElement(r.a, {
					className: t
				})
			}
		},
		"./src/reddit/components/Econ/Prediction/UnicornIcon/index.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return l
			}));
			var n = a("./node_modules/react/index.js"),
				c = a.n(n),
				o = a("./node_modules/react-redux/es/index.js"),
				s = a("./src/reddit/selectors/experiments/econ/index.ts");
			const r = ({
					className: e
				}) => c.a.createElement("svg", {
					className: e,
					fill: "none",
					height: "20",
					viewBox: "0 0 20 20",
					width: "20",
					xmlns: "http://www.w3.org/2000/svg"
				}, c.a.createElement("path", {
					d: "m11.8373 7.17254c-.0381-2.14805-1.2066-4.26563-3.12608-5.6611-.7001 1.14224-1.0571 2.46166-1.02847 3.80108.02863 1.33941.44168 2.64237 1.18995 3.75365",
					fill: "#ffc2dd"
				}), c.a.createElement("path", {
					d: "m8.87285 9.06578c-.03047.01981-.17672-.13254-.39609-.43722-.29757-.44864-.53424-.93481-.70383-1.44575-.25319-.76597-.37124-1.57014-.34887-2.37656.0185-.47751.08381-.95205.195-1.4168.12075-.49951.29704-.98393.52559-1.44421.04547-.10166.09632-.20083.15234-.29708l.16453-.28792c.0182-.03202.04253-.06014.07159-.08276.02907-.02261.06231-.03928.09782-.04904s.0726-.01243.10914-.00785c.03655.00458.07183.01631.10384.03453l.02742.01828c.38016.28079.73681.5921 1.0664.93082.30177.31806.57737.65991.82417 1.02223.4117.60733.7253 1.27566.9293 1.98046.1388.46809.2126.95301.2194 1.44118 0 .34277-.0396.52863-.0731.52863-.0336 0-.0762-.18281-.1402-.50731-.0876-.45579-.214-.90328-.3778-1.33757-.2445-.64356-.5745-1.25128-.9811-1.8068-.2427-.32728-.50846-.63681-.79524-.92625-.31294-.30838-.64797-.59352-1.00242-.85313l.41742-.08226-.15234.2666c-.05268.08874-.10048.18028-.1432.27422-.20887.42313-.37327.8668-.49055 1.32387-.10969.42749-.18107.8639-.21328 1.30406-.04198.75145.02993 1.50493.21328 2.23488.31535 1.25684.78762 1.94696.70078 1.99875z",
					fill: "#000"
				}), c.a.createElement("path", {
					d: "m15.6001 5.87727c-.8963-.80295-1.9238-1.44605-3.0378-1.90125-.8516-.34734-1.7854-.585-2.69037-.41742-1.00242.18586-1.84945.84246-2.58984 1.55086-.89883.86988-1.70321 1.87383-2.14196 3.04687-.34277.91407-.45703 1.93177-1.02984 2.72697-.44789.6292-1.12582 1.0481-1.73672 1.5234s-1.19894 1.0664-1.32691 1.8281c-.134064.7983.2666 1.5905.76172 2.2349.43629.6039.99546 1.1085 1.64074 1.4808.65104.3698 1.41006.5028 2.14805.3763 1.28273-.2544 2.18918-1.3711 3.33937-2.0018.91406-.4966 1.98046-.6657 2.93876-1.0664 1.7105-.7343 3.0622-2.1139 3.7613-3.8391.6813-1.72672.7474-3.63533.1874-5.40512",
					fill: "#ffc2dd"
				}), c.a.createElement("path", {
					d: "m11.9928 5.88635c-.9902.47227-2.10078.77238-3.13214.36105-.44942-.17824-.91407-.48597-.99633-.96281-.08836-.53777.35648-1.01156.81047-1.31472 1.4823-.98567 3.3333-1.06641 5.0669-.66422 1.7337.40218 3.2663 2.19375 3.4842 3.95941 1.1699.23309 1.6178 1.90582 1.4396 3.08494-.0975.649-.4647 1.2416-.5027 1.8967-.0595 1.042.7175 1.9591.8302 2.9966.0424.4433-.0361.8899-.2271 1.2922-.1909.4024-.4873.7455-.8576.993-.7449.4829-2.1998.8653-2.9661.4174-.5408.5408-1.0664.8531-1.953.5621-.4365-.1597-.8123-.4516-1.075-.835s-.3992-.8392-.3906-1.3039c.0251-.4645.1826-.9122.4539-1.2901.2713-.378.645-.6704 1.0772-.8427-.118-.6928-.0689-1.4038.143-2.0739.212-.6701.5808-1.2799 1.0757-1.7789.4357-.4311.6475-1.2568.8623-1.82809.3184-.84551.0792-1.3589-.7115-1.79461-.7906-.4357-.6322-.91406-1.5356-.93234",
					fill: "#7e53c1"
				}), c.a.createElement("path", {
					d: "m2.93455 11.5232c-.76172.5652-1.73063 2.1861-1.73063 2.1861-.335154.9887-.09293 2.174.67184 2.8839.30469.2803.66879.4814.97347.7617.24375.2209.4479.489.72973.6581.29688.1598.6324.2336.96891.2133 1.02679-.0183 1.96523-.5515 2.83207-1.1014.52711-.3337.74496-.3748 1.08469-.8973.33972-.5226.44179-1.2508.08074-1.7596-.10551-.1489-.24341-.2718-.40332-.3597s-.33766-.1383-.51989-.1476c.14706-.1759.25646-.3801.32145-.5999.06499-.2199.08417-.4507.05637-.6783-.03221-.2274-.1238-.4424-.26556-.6232-.14175-.1808-.32865-.321-.54187-.4066-.21517-.0769-.44922-.0833-.66831-.0184s-.41185.1978-.55044.3795c-.12035-.4571-.26812-.9415-.66117-1.1929-.39304-.2514-.95672-.1706-1.36043.0899s-.73429.2133-1.01156.6094",
					fill: "#ff85c6"
				}), c.a.createElement("g", {
					fill: "#000"
				}, c.a.createElement("path", {
					d: "m12.0369 5.96144c.0076.01828-.0975.08074-.3047.18129-.1051.04875-.2422.09598-.4022.15234-.1874.06167-.3781.11253-.5713.15235l-.1691.03351-.1813.01524-.1904.02133-.2011.00761c-.29982.01193-.59992-.01521-.89273-.08074-.34868-.0711-.67773-.21717-.96434-.42809-.33198-.24583-.57949-.58862-.7084-.98109-.00992-.03112-.01206-.0642-.00622-.09634.00585-.03215.01949-.06236.03974-.088l.18129-.22699.09293-.11578c.03351-.03656.06855-.0716.10359-.10816l.21176-.21633.23613-.20109c.33521-.27221.70445-.49959 1.0984-.67641.86515-.37673 1.79855-.5717 2.74215-.57281.2458 0 .4946.00761.7465.02285.1249.01066.2514.02437.3778.03656l.3885.06703c.5231.11861 1.0247.31749 1.4869.58957.4807.27702.916.62643 1.2903 1.03594.3946.42526.6993.9258.8958 1.47164.1606.44653.2128.92481.1524 1.39547l-.2225-.32449c.3024.07237.582.21897.8136.42656.2182.19639.3962.43337.524.69773.2368.4925.3602 1.03182.3611 1.57828.0036.26324-.0198.52618-.0701.78458-.0515.2498-.1265.4941-.224.7297-.1751.4479-.3458.8471-.3351 1.231.0236.4021.1338.7945.323 1.1502.1736.3762.3762.748.5149 1.1486.0732.1995.1243.4064.1523.617.025.2054.025.4131 0 .6185-.049.3813-.1783.7479-.3793 1.0756-.1803.2992-.4198.5584-.7038.7617-.2515.1695-.5267.3009-.8166.39-.4515.1462-.9263.2072-1.4.1798-.2998-.0157-.5927-.0952-.8593-.2331-.0441-.0259-.0837-.0472-.1142-.0701l-.0747-.064c-.0381-.035-.0548-.0564-.0487-.064s.0335 0 .0792.0168l.0838.0366c.0335.0137.0746.0259.1203.0426.265.0859.5427.1261.8212.1188.4422-.0126.879-.1002 1.2919-.2589.253-.0934.4915-.2222.7083-.3824.2336-.1832.4283-.4111.5729-.6703.1596-.2843.2582-.5987.2894-.9232.0316-.3501-.0206-.7025-.1523-1.0284-.131-.3519-.3321-.7038-.5256-1.0953-.2303-.4174-.366-.8802-.3976-1.3559-.0049-.2555.0316-.5102.1081-.7541.0701-.2376.1524-.457.2407-.6779.083-.2069.1462-.4211.1889-.6399.0401-.2216.0575-.44666.0518-.67179-.0025-.45984-.1065-.91345-.3046-1.32843-.089-.19841-.2208-.37466-.386-.5161-.1651-.14144-.3595-.24457-.5692-.30199-.0707-.01706-.1324-.05965-.1735-.11957s-.0585-.13291-.049-.20492c.0449-.37936.0001-.76396-.131-1.12278-.1711-.47191-.4347-.90491-.7754-1.27359-.3334-.36724-.7207-.68161-1.1487-.93234-.4116-.24365-.858-.42295-1.3238-.53168l-.3504-.06704-.352-.0396c-.2346-.0193-.4671-.02946-.6977-.03047-.8711-.0115-1.7356.15167-2.5426.47988-.69944.29292-1.31358.75772-1.78547 1.35129l.03199-.18738c.09268.31809.28096.59997.5393.80742.23935.19093.5167.32857.81351.40371.26464.07357.53739.114.81197.12035h.1874l.1798-.00762.1721-.00761.163-.01981c.2118-.01828.3976-.06246.5607-.08988.163-.02742.3046-.06856.4082-.0975.2194-.05942.3398-.08379.3474-.06551z"
				}), c.a.createElement("path", {
					d: "m15.1617 6.80064c.032-.01066.16.18738.2529.60938.0533.25693.0661.52062.0381.78152-.0428.34276-.1325.678-.2666.99633-.159.38683-.3724.749-.6338 1.07553-.2727.3504-.5713.684-.8318 1.0664-.1345.1968-.2591.4001-.3732.6094-.1109.2057-.1964.4241-.2544.6505-.126.4741-.116.9741.0289 1.4427l.0549.1523.0655.1524v.0107c.0153.035.0235.0728.0241.1111s-.0063.0763-.0205.1118c-.0142.0356-.0352.068-.062.0954-.0268.0273-.0587.0491-.094.064l-.0228.0092c-.4112.1591-.7588.4486-.9897.8242s-.3322.8166-.2885 1.2553c.0443.3877.1928.7562.4296 1.0664.21.2635.5015.4499.8288.5301.0736.0194.1484.0342.2239.0442.0792.0102.1564.0183.2316.0244.1384.0097.2774.0097.4159 0 .2139-.0066.4231-.0652.6093-.1706.3047-.1874.4007-.3977.4434-.3702.0167.0076.0091.0655-.029.166-.0649.1473-.1623.2781-.2849.3824-.2014.1636-.4437.2689-.7007.3047-.1541.0256-.31.0389-.4662.0396-.0823 0-.1656 0-.2499 0-.0935-.0045-.1866-.0152-.2787-.032-.4244-.0768-.8101-.2954-1.0939-.62-.3157-.3695-.521-.8204-.5926-1.3011-.0783-.5443.0291-1.0992.3047-1.5752.2866-.522.7517-.9233 1.3101-1.1304l-.1645.4022-.0838-.1858c-.0228-.064-.0487-.1265-.0701-.192-.1795-.573-.1895-1.1856-.0289-1.7641.0739-.272.1819-.5336.3215-.7785.1288-.2228.2697-.4385.4219-.646.2956-.4067.6231-.7464.8943-1.06636.2517-.28403.4648-.60009.6337-.93996.1414-.27918.2488-.57429.32-.87903.0485-.23077.0679-.4667.0579-.7023-.0198-.38695-.0732-.6109-.0305-.62461z"
				}), c.a.createElement("path", {
					d: "m11.7475 15.5359c.0397.0198-.0121.1751-.0487.457-.0497.3816-.0079.7696.1219 1.1319.0832.2572.2266.4908.4181.6816.1916.1907.4258.3331.6833.4153.2964.1041.6157.1251.9232.0609.3275-.0754.6263-.2436.8608-.4844.0439-.0439.1008-.0725.1623-.0816.0614-.009.1242.0019.1789.0313l.0229.0122.131.0716c.3301.1294.6855.1815 1.039.1523.3483-.0224.6927-.0874 1.0252-.1935.2948-.0892.572-.2283.8196-.4113.2096-.1663.3885-.3678.5287-.5957.2115-.3484.3397-.741.3747-1.1471.0275-.2879.0153-.457.0595-.4677.0441-.0107.1233.1523.1675.457.0501.4566-.033.918-.2392 1.3285-.1429.2883-.3393.5468-.5789.7617-.2813.2401-.6046.426-.9536.5484-.3748.137-.7663.2231-1.1639.256-.4489.0469-.9024-.017-1.3209-.1859-.07-.0335-.1371-.0746-.2056-.1112l.3626-.0381c-.3113.3274-.7135.554-1.1548.6505-.409.0775-.8316.0374-1.2188-.1158-.1777-.0673-.3469-.1553-.5042-.262-.1473-.1097-.279-.2388-.3915-.3839-.2342-.2994-.39-.6525-.4534-1.0273-.0633-.3748-.0321-.7595.0908-1.1192.1112-.291.2346-.4083.2635-.3915z"
				}), c.a.createElement("path", {
					d: "m12.5288 4.12384c.0335.12188-.6551.38696-1.2964.98567-.6414.59871-.9766 1.24922-1.0939 1.20504-.0533-.01981-.0411-.2209.0792-.51797.1677-.38261.4134-.72603.7214-1.00828.3079-.28226.6714-.49715 1.0672-.63094.3062-.09902.5073-.08836.5225-.03352z"
				}), c.a.createElement("path", {
					d: "m11.1488 3.92917c.0243.12492-.6734.33058-1.32543.89273s-.98262 1.20199-1.10145 1.15781c-.05332-.0198-.04265-.21937.07922-.51187.171-.37717.42374-.71159.73992-.97903.31619-.26744.68794-.4612 1.08824-.56726.3107-.0716.5088-.04723.5195.00762z"
				}), c.a.createElement("path", {
					d: "m16.3803 10.1901c-.1097-.067.3915-.97041.5347-2.19678s-.1005-2.22269.0229-2.26078c.0533-.01676.1935.2148.3047.63223.0647.24543.1066.49635.1249.74953.0464.62313-.0318 1.24927-.23 1.84183-.0799.24049-.1819.47305-.3047.69469-.2118.37938-.4053.56978-.4525.53928z"
				}), c.a.createElement("path", {
					d: "m18.9885 16.1546c-.064-.0137-.0412-.2773-.1036-.6749-.0645-.5111-.2722-.9936-.5992-1.3918-.327-.3981-.7599-.6957-1.2488-.8583-.3793-.1356-.6413-.163-.6429-.23-.0015-.0671.2697-.1402.7191-.0686.5932.102 1.1302.4135 1.5132.8779.383.4643.5866 1.0507.5739 1.6525-.0167.4555-.1538.7069-.2117.6932z"
				}), c.a.createElement("path", {
					d: "m14.8916 15.5424c0 .0549-.2575.0945-.6475-.0213-.5113-.1635-.9518-.4959-1.2494-.9426-.2976-.4468-.4345-.9814-.3882-1.5162.0426-.4038.1767-.6216.2285-.6094s.0411.2513.0792.6094c.0371.4555.1895.8941.443 1.2745.2535.3803.5996.6898 1.0058.8994.3138.1721.5377.2483.5286.3062z"
				}), c.a.createElement("path", {
					d: "m17.5289 17.9844c.0198.0518-.1813.1919-.5546.3047-.2195.0627-.4453.1005-.6733.1127-.2821.0127-.5646-.0104-.841-.0685-.5039-.1057-.972-.3398-1.3589-.6795-.2879-.2651-.4021-.4799-.3625-.5164.0396-.0366.2376.0883.5454.2681.3936.2324.8213.4016 1.2675.5012.2454.051.4945.082.7449.0929.2078.0059.4158.0008.6231-.0152.358-.029.5896-.0625.6094 0z"
				}), c.a.createElement("path", {
					d: "m2.90817 17.6644c.02743-.0336.16758.0441.422.1447.35517.1372.73285.207 1.11363.2056.2607-.0006.52062-.0286.77543-.0837.29447-.0691.58245-.1634.86074-.2819.6451-.2903 1.25785-.6478 1.82813-1.0664.3184-.2194.63527-.4357.95215-.6337.16005-.1033.32643-.1964.49816-.2788.16632-.0783.33786-.145.5134-.1996.33819-.1066.66119-.1691.94909-.2316.2657-.0562.5281-.1269.7861-.2117.9461-.291 1.3894-.7419 1.4503-.6856.0274.0229-.0411.1783-.2529.39-.3054.2895-.6618.5198-1.0511.6795-.2631.1148-.5339.2111-.8105.2879-.2925.0838-.5957.1615-.8943.2712-.1517.0544-.29977.1185-.44329.1919-.15014.0784-.29562.1654-.43571.2605-.30468.1966-.60937.4114-.92929.6323-.60607.446-1.26645.8131-1.96524 1.0923-.31459.118-.64019.2042-.97195.2574-.29262.0427-.58936.0493-.8836.0198-.42771-.0359-.83949-.1789-1.19742-.4159-.24527-.1751-.33668-.3168-.31383-.3442z"
				}), c.a.createElement("path", {
					d: "m6.225 5.96731c.03504.03047-.11882.24832-.27269.70688-.15387.45855-.32906 1.14257-.64289 1.98046-.35795 1.00905-.94757 1.92005-1.72149 2.65995-.44789.4128-.98261.7419-1.41984 1.1365-.22006.1952-.41046.4216-.5652.6718-.15641.2581-.27396.5379-.34886.8303-.1496.5767-.109 1.1864.11578 1.7382.2033.5106.57035.9393 1.04355 1.2188.43841.246.94.3563 1.44117.3168.4522-.035.89467-.1495 1.30711-.3382.62316-.2632 1.19822-.6282 1.70168-1.0801.36106-.3214.55149-.521.585-.4921.03352.029-.09902.2682-.42351.6521-.46912.5411-1.04342.9812-1.68797 1.2934-.4486.2367-.93728.3881-1.44117.4463-.60087.0697-1.20871-.0451-1.74282-.329-.59015-.3284-1.05149-.8472-1.308628-1.4717-.279975-.664-.334037-1.4015-.153867-2.0993.089401-.3498.231157-.6842.420465-.9917.18513-.296.41307-.563.67641-.7922.24386-.2077.49809-.403.76172-.585.24527-.1767.47683-.3473.68707-.5286.39554-.3476.74199-.7474 1.02984-1.18832.25632-.38967.48001-.79986.66879-1.22636.34278-.78153.57586-1.46707.81199-1.91344.23614-.44637.45551-.63984.47836-.61547z"
				}), c.a.createElement("path", {
					d: "m7.61001 17.0368c-.01371-.0229.07312-.096.22852-.227.21967-.1779.4162-.3826.585-.6094.11178-.1553.19769-.3276.25441-.5103.06503-.2047.08222-.4215.05027-.6338-.0336-.226-.14711-.4325-.31992-.5819-.08594-.0808-.18875-.1414-.30099-.1775-.11225-.0361-.23111-.0467-.34799-.0312-.04085.0077-.08309.0029-.12121-.0136-.03812-.0166-.07037-.0443-.09255-.0795-.02219-.0351-.03328-.0762-.03183-.1177.00144-.0416.01535-.0817.03992-.1153.15099-.206.25783-.4409.31383-.6901.0588-.2522.04721-.5157-.03352-.7617-.06006-.1925-.16964-.3659-.31775-.5028s-.32957-.2325-.52623-.2772c-.18409-.0295-.37273-.0078-.54539.0625-.16009.0641-.29709.1751-.39305.3184v.0076c-.02289.0359-.05711.0632-.09724.0776-.04014.0144-.08391.0149-.12442.0017-.0405-.0133-.07544-.0397-.0993-.075s-.03529-.0776-.03247-.1201c.00897-.1905-.02689-.3804-.10468-.5545s-.19534-.3275-.34321-.4479c-.2408-.1906-.54594-.2806-.85161-.2514-.20637.0174-.40675.0781-.58804.1783-.12797.07-.195.1203-.21176.1035-.01676-.0167.02437-.0914.14168-.2026.17711-.1566.39359-.2619.62613-.3047.16814-.034.3411-.0371.51035-.0091.2035.0334.39676.1126.5652.2316.2034.1439.36838.3356.48046.5582.11209.2226.16786.4693.16243.7184l-.35801-.1097c.1399-.2193.34103-.3927.5785-.4989.23747-.1061.50086-.1403.75756-.0983.27463.053.52991.1791.73901.3648.2091.1858.36429.4245.44927.691.10765.3236.12191.671.04113 1.0024-.07296.3061-.21004.5932-.40219.8425l-.20109-.3306c.17731-.0238.3577-.0071.52763.0488s.32497.1497.45346.2741c.2323.2134.37995.5033.4159.8166.02715.2664-.00994.5354-.10816.7846-.08209.2088-.20017.4017-.34887.5697-.20103.2307-.44204.4232-.71145.5683-.18586.099-.29707.131-.30773.1112z"
				}), c.a.createElement("path", {
					d: "m1.63036 14.9239c-.05028-.0671.02742-.2026.10054-.4037.0973-.242.14496-.501.14016-.7618-.00623-.1382-.03082-.275-.07313-.4067-.02438-.0824-.06591-.1587-.12187-.224-.04305-.0401-.0954-.0689-.15235-.0837-.05179-.0153-.10207-.0122-.13253-.0381-.03047-.0259-.03657-.0899.03503-.1646.05278-.0478.11654-.0819.18564-.0991.06909-.0173.14139-.0173.21046.0001.09781.0283.18881.0762.26741.1409s.14313.1448.18962.2354c.14254.2601.1987.5588.16036.8529-.03833.2941-.16918.5684-.37364.7833-.20414.2026-.39305.23-.4357.1691z"
				}), c.a.createElement("path", {
					d: "m3.30922 14.9463c.00761-.0838.2148-.1218.47836-.2529.15103-.0716.29108-.1645.41589-.2757.14195-.126.25387-.2821.32754-.457.02539-.0616.03666-.1281.033-.1946-.00367-.0666-.02218-.1314-.05417-.1899-.03199-.0584-.07666-.1089-.13073-.1479-.05407-.0389-.11616-.0652-.18173-.077-.24375-.0457-.42504.0685-.48598.0152-.02894-.0243-.02742-.0959.04266-.1889.10853-.1306.26266-.215.43113-.2361.1238-.0188.25029-.0073.36868.0335.13848.0489.26222.1322.35953.2422.10996.1238.18329.2757.21175.4388.02862.1723.0102.3491-.05332.5119-.09984.2397-.25932.45-.4633.6108-.20397.1607-.44567.2667-.70213.3078-.15219.0271-.30857.0187-.45703-.0244-.09445-.035-.1432-.0777-.14015-.1158z"
				})), c.a.createElement("path", {
					d: "m3.53778 4.27334c.35264.00703.70225-.06643 1.02223-.2148.5652-.30469.58653-1.05879.69317-1.70473l-.68707-.57586-.29098-.29097c-.40265-.06883-.81671-.01302-1.18676.15996-.11314.03509-.21026.109-.27422.20871-.04419.13436-.03491.28058.0259.40828.20871.67336.43723 1.34824.69773 2.00941z",
					fill: "#fcff78"
				}), c.a.createElement("path", {
					d: "m6.92588 3.76312-1.45336-1.21875c-.08836.62309-.10817 1.28121-.66879 1.66207-.31535.21481-.73582.28793-1.16848.30469.28754.71505.63298 1.40543 1.03289 2.06426.56368.13254 1.12582.15234 1.6636-.21176.81047-.54691.7084-1.71844.59414-2.60051z",
					fill: "#34e2ac"
				}), c.a.createElement("path", {
					d: "m8.74027 5.59247c-.30468-.5591-.8059-.98262-1.2934-1.39242l-.24832-.20719c.0975.87293.10665 1.89668-.59871 2.47558-.54843.45704-1.14867.49665-1.75804.39.19381.29675.40386.58258.62918.85618.30468.35953.64593.70839 1.0923.8455.39305.12036.81809.06246 1.21875 0 .23991-.04098.4642-.14628.64899-.30468.23423-.14822.41471-.36769.51492-.62614.19905-.67984.12528-1.4105-.20567-2.03683z",
					fill: "#4ab6ff"
				}), c.a.createElement("path", {
					d: "m3.63372 1.50807c-.00915.02133-.07922 0-.20262.01066-.17338.01719-.33517.09486-.45703.21938-.08963.10119-.15545.22118-.19262.35115s-.04475.26662-.02219.3999c.03199.32297.21176.66727.45703 1.05117.47989.78 1.04203 1.71387 1.65903 2.75438l.47226.79828c.14562.26333.3215.50874.52407.73125.09393.10008.20166.18626.31992.25594.12269.06894.2545.12023.39152.15234.29024.05902.59075.04276.87293-.04723.14265-.04381.27929-.10522.40676-.18281.12585-.08503.24364-.18141.35191-.28793.21371-.19425.37641-.43804.47379-.70992.18434-.52102 0-1.09231-.33515-1.52344-.33516-.43113-.79067-.79371-1.1959-1.13648l-1.15782-.94149c-1.42593-1.13953-2.32629-1.82812-2.28515-1.89668.04113-.06855 1.02832.50578 2.52586 1.56914.37324.26661.78.56368 1.20961.89121.42961.32754.91406.67336 1.32082 1.18981.21796.26961.37913.58054.47379.91406.0477.17942.07177.36431.0716.54996-.00338.19142-.03469.38131-.09293.56368-.12117.36293-.33056.6901-.60938.95214-.1406.13226-.29366.25062-.45703.35344-.16878.10363-.34998.18553-.53929.24375-.37848.12012-.78173.13955-1.17001.05637-.19307-.04362-.37883-.11494-.55148-.21176-.16901-.097-.32297-.21811-.45703-.35953-.23145-.25682-.43095-.54072-.59414-.84551l-.45703-.81047c-.5911-1.05574-1.11668-2.01093-1.55086-2.81683-.2209-.40067-.41438-.82266-.42047-1.23551-.0138-.17693.01449-.35461.08254-.51851.06804-.16391.17393-.30937.30898-.4245.08602-.06939.18569-.1199.29251-.14825.10683-.02835.21842-.03389.32753-.01628.15844.03047.21328.09141.20567.10512z",
					fill: "#000"
				}), c.a.createElement("path", {
					d: "m4.46393 6.19913c-.07008.03961-.40371-.44332-.88664-1.25836-.24223-.40675-.52102-.8973-.82266-1.44574-.07617-.13558-.15234-.27879-.22395-.43722-.07862-.16703-.13841-.34229-.17824-.52254-.04674-.20918-.04674-.4261 0-.63528.05176-.237.17898-.45082.36258-.60937.19251-.15305.43201-.23486.67793-.23156.21542.00414.42722.05618.62004.15234.16671.07743.32497.17188.47226.28184.13711.10359.25747.20261.38086.30468.4875.38848.91407.74496 1.27969 1.05117.71906.60938 1.13801 1.02223 1.09078 1.08622-.04722.06398-.55605-.23157-1.3391-.76172-.39152-.26356-.85008-.58653-1.35586-.95215-.23758-.19065-.49262-.35846-.76172-.50121-.24527-.11426-.53929-.11578-.69164.01676-.08628.07832-.14594.18165-.17062.29554-.02806.12849-.02806.26152 0 .39.07188.29274.18147.5749.32601.83942.2727.55757.51188 1.0664.70535 1.49144.38086.85617.585 1.40766.51493 1.44574z",
					fill: "#000"
				}), c.a.createElement("path", {
					d: "m3.32259 4.185c.04265-.05027.22089.06856.50425.05637.17023-.01048.33705-.05232.49207-.1234.09475-.04162.18639-.08999.27422-.14473.08767-.05455.16761-.12065.23766-.19652.24239-.29049.364-.66295.33973-1.04051-.00975-.12051-.03484-.23928-.07465-.35343-.02743-.08836-.03809-.15235-.01371-.16454.02437-.01218.07921 0 .15234.07161.11052.10274.19152.23319.23461.37781.06054.21354.072.43801.03351.6566-.04331.27667-.16671.53459-.35496.74191-.09867.10747-.21387.1985-.34125.26965-.11202.0622-.22989.11323-.35191.15235-.21234.07339-.43982.09174-.66117.05332-.1515-.02712-.29151-.09872-.40219-.20567-.07008-.07008-.09445-.12492-.06855-.15082z",
					fill: "#000"
				}), c.a.createElement("path", {
					d: "m4.604 6.28436c.03047-.00914.0716.05637.13864.15234.03548.05467.08035.10264.13253.14168.06723.04371.1441.07037.22395.0777.05049.00737.10135.01195.15234.01371.05353.00107.10705-.00249.15996-.01067.12363-.02073.24399-.05761.35801-.10968.26973-.11881.50848-.29813.69774-.52407.18908-.22808.32585-.49485.40066-.78152.06123-.2426.09295-.49171.09445-.74191 0-.42047-.15234-.67184-.09445-.7084.02285-.01523.09141.02437.1752.13406.11597.16041.19315.34554.22546.54082.04641.28689.0428.57965-.01066.86531-.06644.35874-.2238.69444-.45703.975-.23468.28133-.54026.49486-.88512.61852-.15255.05626-.31288.08863-.47531.09598-.077.00278-.15408-.00232-.23004-.01524-.06368-.0138-.1263-.03213-.18738-.05484-.12349-.03615-.23401-.10701-.3184-.20414-.05878-.07254-.09904-.15829-.11731-.24985-.02742-.13254-.01066-.20718.01676-.2148z",
					fill: "#000"
				}), c.a.createElement("path", {
					d: "m14.8962 8.86965c.8394-1.7809.3564-5.85914-2.2502-7.58672-.6194.71264-1.0159 1.59151-1.1402 2.5275s.029 1.88788.441 2.7375",
					fill: "#ffc2dd"
				}), c.a.createElement("path", {
					d: "m11.9471 6.54651c-.0289.01371-.1264-.10816-.2575-.35953-.178-.36602-.3017-.75607-.3671-1.15781-.1063-.61415-.0898-1.24329.0487-1.85098.1786-.77188.5449-1.48774 1.0664-2.08406v-.00762c.0445-.05081.1065-.08307.1736-.090408.0672-.007334.1346.010798.189.050798l.2956.21937c.1024.07061.1991.14905.2894.23461.1902.16824.367.3511.5287.54692.0807.09902.1675.19347.2391.29707l.2103.30469c.0335.05179.07.10207.102.15234l.0884.16148.1691.32602c.099.21633.195.43113.2773.64441l.1081.32145c.0376.10373.0691.20953.0945.31687.2039.74383.2933 1.5144.2651 2.28516-.0097.52011-.106 1.03497-.2849 1.52344-.0465.13373-.1094.26116-.1874.37933-.0518.08227-.0884.11883-.1066.11121-.0183-.00761-.0183-.06246 0-.15234.0182-.08988.0563-.2209.0777-.39609.0863-.48239.117-.97311.0914-1.4625-.0309-.72382-.1548-1.44065-.3687-2.13282-.0269-.09929-.0594-.19695-.0975-.2925l-.1097-.29554c-.0807-.19653-.1737-.39153-.2681-.58957l-.163-.28946-.0823-.15234c-.0289-.04723-.0625-.09293-.0945-.14016l-.1843-.28031c-.0655-.09293-.1523-.17672-.2163-.2666-.1443-.1766-.3017-.34211-.4708-.49512-.0811-.07598-.1682-.14527-.2605-.20718l-.2589-.19957.3762-.05028c-.4697.52458-.8126 1.15003-1.0024 1.82813-.1534.54814-.2101 1.11883-.1676 1.68644.0747.97196.3382 1.52953.2575 1.56305z",
					fill: "#000"
				}), c.a.createElement("path", {
					d: "m12.4756 10.9713c.6932-.9314.556-2.20692-.3066-2.84893-.8626-.642-2.1238-.40739-2.81708.52403-.69325.93142-.55598 2.2069.30659 2.8489.86259.6421 2.12379.4074 2.81709-.524z",
					fill: "#b8e7ff"
				}), c.a.createElement("path", {
					d: "m12.6477 11.0997c-.3495.475-.8556.8112-1.429.9491-.2925.0698-.596.0806-.8927.032-.3037-.0513-.59239-.1689-.84553-.3443-.256-.1803-.47062-.4131-.62955-.6829s-.25852-.5704-.29213-.8817c-.0368-.31289-.01301-.62995.07008-.93385.16819-.60576.55597-1.12715 1.08773-1.4625.26428-.1668.558-.28159.8653-.33821.308-.05723.6247-.04811.9289.02676s.589.21377.8353.40742c.2408.1922.4364.43511.5728.71145.1316.27014.2083.56376.2254.86379.036.59244-.1401 1.17834-.4966 1.65294zm-.3458-.2575c.1408-.1938.2465-.4109.3123-.6413.0626-.22856.0807-.46699.0533-.70234-.0262-.22746-.1011-.4466-.2197-.64247-.1185-.19586-.278-.36385-.4674-.4925-.1832-.12067-.39-.20124-.6066-.23642s-.4382-.02418-.6502.03228c-.4264.11149-.80187.3653-1.06425.71939s-.39591.7872-.37845 1.22756c.00711.2192.06045.4345.15654.6316.09609.1972.23275.3718.40104.5125.17772.143.38412.2461.60512.3023.2211.0562.4516.0643.6761.0237.2336-.0413.457-.1271.6581-.2529.2016-.1291.379-.2925.5241-.4829z",
					fill: "#000"
				}), c.a.createElement("path", {
					d: "m11.734 10.3357c.3564-.72954.0761-1.59909-.6262-1.94222-.7023-.34314-1.56058-.02993-1.91701.69958-.35643.7295-.07606 1.59904.62623 1.94214.70228.3432 1.56058.03 1.91698-.6995z",
					fill: "#000"
				}), c.a.createElement("path", {
					d: "m10.6281 9.66417c.0662-.43647-.2192-.84166-.63736-.90502-.41814-.06335-.81073.23912-.87686.67559s.21923.84166.63738.90506c.41814.0633.81074-.2392.87684-.67563z",
					fill: "#fff"
				}), c.a.createElement("path", {
					d: "m11.5831 11.1074c.3374 0 .6109-.2851.6109-.6368s-.2735-.6368-.6109-.6368-.6109.2851-.6109.6368.2735.6368.6109.6368z",
					fill: "#fff"
				}), c.a.createElement("path", {
					d: "m12.8948 6.65901c-.0594-.02894.0366-.31687.1158-.78304l.0305-.18282.0228-.20109c.0214-.13711.0244-.28793.0366-.44332.0143-.33972.0097-.67997-.0137-1.01918-.0458-.61737-.1478-1.22927-.3047-1.82812-.1204-.45704-.2224-.74801-.1661-.78.0564-.032.2529.2148.4571.67793.2577.60474.4122 1.24843.457 1.90429.0235.35959.0148.72055-.0259 1.0786-.0259.16605-.0427.32449-.0807.46922l-.0503.21023-.061.19043c-.1706.48293-.3732.73277-.4174.70687z",
					fill: "#000"
				}), c.a.createElement("path", {
					d: "m1.41844 16.2901c.07617-.0472.30469.2834.83789.5652.30658.1598.63944.263.98262.3047.42089.046.8467.0098 1.25379-.1066.88359-.2438 1.57828-.7617 2.06425-1.1639.48598-.4022.7861-.6734.85008-.6201.06399.0534-.12797.4129-.56519.9141-.26033.2951-.55316.5598-.87293.7891-.40061.2889-.84865.5054-1.32387.6399-.48542.1386-.99614.1641-1.49297.0746-.40609-.0764-.78949-.2442-1.12125-.4905-.222-.1628-.40729-.3704-.54387-.6094-.08836-.1676-.10054-.2773-.06855-.2971z",
					fill: "#000"
				}), c.a.createElement("path", {
					d: "m1.2085 15.8394c.70843.486 1.55388.7323 2.4125.703s1.68528-.3328 2.3589-.8661c.23004-.2064.4744-.3963.73125-.5682.12943-.0849.27578-.1405.42889-.1632.15311-.0226.30931-.0116.45775.0322.15254.0661.2835.1737.37801.3105s.14881.2973.15672.4634c.00895.3331-.1037.658-.31688.9141-.21295.2544-.46491.4734-.74648.6489-.83941.5637-1.8525.9933-2.84426.7998-.54082-.1051-1.02984-.3884-1.50515-.6657-.21368-.1179-.41747-.2529-.60938-.4037-.3144-.2606-.5528-.6011-.69012-.9857",
					fill: "#ff85c6"
				}), c.a.createElement("path", {
					d: "m13.3224 5.51322c-.0032.29968-.0637.59597-.1782.87293-.0542.13337-.1411.25098-.2526.34202-.1116.09103-.2442.15259-.3857.179-.3321.03351-.6445-.22242-.7983-.54082-.134-.3332-.1968-.69074-.1844-1.04965-.0259-.98719.061-2.0216.4571-2.92348.1523-.35496.457-1.05422.7845-.45703.2514.45703.3596 1.10754.4479 1.62856.1099.64328.1467 1.29692.1097 1.94847z",
					fill: "#ffc2dd"
				}), c.a.createElement("path", {
					d: "m2.43311 1.8313c.4357-.66727 5.62605 6.34054 5.62605 6.34054l-.4677.41742-1.76566-.26507z",
					fill: "#fff"
				}), c.a.createElement("path", {
					d: "m15.2968 5.96724c1.0832.9293 1.5783 2.68734 1.1944 4.06296 1.4335-1.13034 1.0999 1.88 0 2.9631.2803-.1081.844.2057 1.0222.4479.163.2547.2526.5493.259.8516.0566.6477-.0536 1.2991-.3199 1.8921-.6414 1.4062-2.9829 1.4808-3.6776.972-.1356.5332-.5698.9658-1.3071 1.106.9262.5225 1.7184.4951 2.4253-.3047.8805.2544 2.3628 0 3.1337-.4875s1.2584-1.4579 1.0664-2.3522c-.1341-.6093-.55-1.1197-.7389-1.7154-.227-.7145-.1112-1.4899.0336-2.2257.1447-.7358.3168-1.4884.195-2.22879-.1219-.74039-.6201-1.47622-1.3559-1.62094.0186-.79515-.2157-1.57567-.6691-2.22917-.4533-.6535-1.1024-1.14624-1.8537-1.40728l.5515 2.145",
					fill: "#7e53c1",
					opacity: ".67"
				}), c.a.createElement("path", {
					d: "m14.8307 4.86442c.113 1.0501.0543 2.11159-.1737 3.14285-.2483 1.02375-.7724 1.69559-1.5889 2.96003-1.3666 2.1145-4.16206 4.2123-4.16206 4.2123l-.21024 1.106s3.0012-.914 3.9229-1.5539c.1995-.361.2909-1.2187.3382-1.6316.0895-.7608.3635-1.4883.7982-2.1191.3443-.4997.7298-.8927 1.0375-1.41678.4246-.75116.6314-1.60579.5972-2.46797-.0544-.8398-.2078-1.67024-.457-2.47406",
					fill: "#ffc2dd"
				}), c.a.createElement("path", {
					d: "m13.8086 14.0707c-.0274 0-.0761-.0807-.1173-.2514-.0508-.2446-.058-.4963-.0213-.7434.0512-.3631.1538-.717.3047-1.0512.1823-.399.3931-.7844.6307-1.1532.2422-.387.4677-.7511.6444-1.09233.1603-.2979.29-.61131.387-.93539.1523-.55148.1173-.9232.1858-.93387.0274 0 .0731.08227.1097.25442.0428.24545.0428.49646 0 .74191-.0594.36166-.1686.71336-.3245 1.04508-.1865.39658-.3992.78038-.6368 1.14868-.2422.3854-.457.751-.6368 1.0938-.156.299-.2801.6135-.3702.9385-.1417.5545-.0883.9262-.1554.9384z",
					fill: "#c676ff"
				}), c.a.createElement("path", {
					d: "m14.9072 14.0231c-.0564 0-.1326-.1752-.1524-.4829-.0454-.8133.2322-1.6116.7724-2.2212.2102-.2255.3824-.3199.4235-.2803.0914.0868-.3458.652-.6185 1.4579s-.3047 1.5143-.425 1.5265z",
					fill: "#c676ff"
				}), c.a.createElement("path", {
					d: "m6.19165 7.1707c-.01219-.06246.12949-.13559.32297-.2666.24618-.1607.45882-.36765.62613-.60938.15866-.24732.26783-.52308.32144-.81199.04723-.22852.05942-.38848.12036-.40067.06093-.01218.15234.13407.18738.41133.03174.3671-.06183.73413-.26546 1.04123-.20362.30709-.50528.53614-.85579.64979-.27117.07312-.44637.04266-.45703-.01371z",
					fill: "#fff"
				}), c.a.createElement("path", {
					d: "m4.43023 4.76671c0-.12035.43114-.18434.76172-.50273.33059-.3184.43571-.72821.55758-.72668.05789 0 .11731.1234.10207.33058-.03163.27398-.1599.52771-.36178.71562-.20187.18791-.46413.2977-.73966.30966-.20567 0-.32297-.07313-.31993-.12645z",
					fill: "#fff"
				}), c.a.createElement("path", {
					d: "m3.40812 2.70883c.30037 0 .54387-.2435.54387-.54387s-.2435-.54387-.54387-.54387c-.30036 0-.54386.2435-.54386.54387s.2435.54387.54386.54387z",
					fill: "#fff"
				}), c.a.createElement("path", {
					d: "m16.4716 14.2914c.0168-.0213.0915-.0076.192.0808.1373.1344.2244.3119.2468.5027.0418.2872-.0268.5795-.192.8181-.202.2785-.4875.4856-.815.5911-.5639.1875-1.1772.1593-1.7215-.0792-.4067-.1844-.585-.4037-.5515-.4464.0336-.0427.2682.0625.6521.1523.2215.0538.4484.082.6764.0838.2721.0041.543-.0376.8013-.1234.2476-.0783.4686-.2238.6383-.4204.1276-.1591.2003-.3553.2072-.5591.0152-.3641-.1782-.5515-.1341-.6003z",
					fill: "#c676ff"
				}), c.a.createElement("path", {
					d: "m12.6798 17.3567c-.0442.0365-.1813-.0305-.3199-.2255-.1735-.264-.2528-.5787-.2251-.8933.0276-.3146.1606-.6107.3774-.8404.1691-.1691.3169-.2117.3535-.1691.0365.0427-.0229.1676-.1021.3458-.2153.4435-.2582.9512-.1204 1.4245.0412.1904.0854.3138.0366.358z",
					fill: "#c676ff"
				}), c.a.createElement("path", {
					d: "m12.6432.993331c.0549.001261.1081.019339.1524.051799l.2955.21937c.1024.0706.1992.14904.2895.23461.1902.16823.3669.3511.5286.54692.0807.09902.1676.19347.2392.29707l.2102.30468c.0335.0518.0701.10207.1021.15235l.0883.16148.1311.24223c.1523.0716.3123.15234.457.23613.4808.277.916.62641 1.2903 1.03594.3946.42526.6993.9258.8958 1.47164.1365.37028.2007.76334.1889 1.15781.2065.0822.3969.20031.5622.34887.2183.19639.3963.43337.524.69773.2368.4925.3602 1.03182.3611 1.57829.0037.26323-.0198.52615-.0701.78455-.0515.2498-.1264.4941-.2239.7297-.1752.4479-.3459.8471-.3352 1.231.0236.4022.1338.7945.323 1.1502.1737.3763.3763.748.5149 1.1486.0732.1995.1243.4064.1523.617.0251.2055.0251.4131 0 .6186-.049.3813-.1782.7478-.3793 1.0755-.1265.2034-.2802.3884-.457.55-.032.032-.0625.0655-.096.0959-.2813.2401-.6047.4261-.9537.5485-.3748.1369-.7662.223-1.1639.2559-.096 0-.1935.0107-.2925.0107-.3527.0071-.703-.0598-1.0283-.1965-.2835.2425-.6235.4096-.9887.4859-.1309.0263-.2641.0396-.3976.0396-.1308 0-.2613-.0118-.39-.035-.0691-.0034-.1379-.0121-.2057-.0259-.4243-.0768-.81-.2954-1.0938-.62-.3157-.3695-.5211-.8204-.5926-1.3011-.0692-.4618-.0031-.9338.1904-1.3589-.1661.0625-.3413.1219-.5256.1737-.2925.0838-.5957.1615-.8942.2712-.15177.0544-.29985.1185-.44337.1919-.15013.0784-.29561.1654-.4357.2605-.30469.1966-.60938.4114-.9293.6323-.60606.446-1.26645.8131-1.96523 1.0923-.31459.118-.6402.2042-.97196.2574-.1751.0251-.35174.0378-.52863.0381-.11856.0001-.23704-.006-.35496-.0183-.42771-.0359-.8395-.1789-1.19742-.4159-.24527-.1736-.3382-.3168-.31535-.3427.0035-.0009.00716-.0009.01066 0-.26616-.056-.52276-.1504-.76172-.2803-.59015-.3284-1.05149-.8472-1.308629-1.4717-.285418-.6678-.341666-1.4113-.159961-2.1145.089401-.3499.231157-.6843.42047-.9918.18512-.296.41306-.5629.6764-.7922.24386-.2077.49809-.403.76172-.585.24528-.1767.47684-.3473.68707-.5286.39554-.3476.742-.7473 1.02985-1.18827.25631-.38968.48-.79987.66879-1.22637.09293-.21023.17672-.41133.25593-.60937-.11902-.16844-.22936-.34285-.33058-.52254l-.45703-.81047c-.5911-1.05574-1.11668-2.01094-1.55086-2.81684-.12458-.21556-.23059-.44134-.31688-.67488-.08052-.16829-.14184-.3451-.18281-.52711-.04675-.20918-.04675-.4261 0-.63527.05176-.237.17898-.45082.36258-.60938.19129-.15206.429-.2338.67336-.23156h.00914c.2118.00575.41978.05775.60937.15234.16882.07706.32914.17152.47836.28184.13711.10359.25746.20262.38086.30469.4875.38847.91406.74496 1.27969 1.05117.40066.34125.7084.62004.89273.81047l.41743.30773.04418.03352c.02807-.2051.06723-.40852.1173-.60938.12074-.49951.29704-.98394.52559-1.44422.04547-.10165.09632-.20082.15234-.29707l.16453-.28793c.0182-.03202.04252-.06014.07159-.08275.02907-.02262.06231-.03928.09782-.04904s.0726-.01243.10914-.00785c.03654.00457.07183.01631.10383.03453l.02743.01828c.38016.28079.7368.59209 1.0664.93082.21773.22749.42123.46813.60933.72058.3091-.0716.6226-.12249.9385-.15234.2026-.61813.5268-1.18947.9537-1.68035v-.00762c.0251-.02912.0562-.05248.0911-.06852.035-.01603.073-.024358.1115-.024409zm-7.59736 2.437499c.06405-.15644.10312-.32197.11578-.49055-.02525.16638-.06397.33044-.11578.49055zm-.73125 7.08097.03351-.0076c.02133-.0397.04114-.0808.06094-.1204l-.09293.128zm-.28793.3565c.04937-.0282.10023-.0536.15234-.0762l.02285-.0351c-.03808.0092-.07312.0183-.10664.029l-.07008.0807zm-1.00395 6.8143h-.00761zm9.62049-16.910168c-.0696-.000201-.1385.014672-.2019.043598s-.1197.07122-.1652.123981v.007617c-.4115.478212-.7312 1.028242-.943 1.622462-.2316.02742-.4571.06551-.6902.11426-.1682-.21931-.3483-.42934-.5392-.62918-.33831-.34598-.70412-.6639-1.09388-.95063l-.05027-.03199c-.05671-.03237-.11923-.05323-.18401-.06141-.06478-.00817-.13053-.00349-.1935.01377-.06296.01726-.12191.04677-.17346.08684-.05155.04006-.09469.0899-.12696.14666l-.1691.28336c-.06001.09869-.11492.20038-.16453.30469-.2348.4748-.4152.97461-.53778 1.48992-.02285.08988-.04418.18129-.06246.27726l-.16301-.12187c-.19195-.195-.49359-.4677-.8973-.80438-.36715-.30468-.79981-.66726-1.28578-1.05574l-.09598-.07617c-.08531-.08684-.18586-.15539-.28945-.23918-.15921-.11881-.33023-.22091-.51035-.30469-.22066-.10615-.46202-.162328-.70688-.164529l-.00914.216329v-.223946c-.29523-.003494-.58241.096186-.81199.281836-.21874.18764-.37103.44092-.43418.72211-.0536.24029-.0536.48944 0 .72973.04217.19688.10603.38848.19043.57128.08802.24388.19657.47984.32449.70536.44027.81808.96281 1.76414 1.55238 2.81683l.45704.81199c.0716.12493.16453.28184.27421.44333-.07464.18281-.14168.33972-.20871.48902-.18354.41537-.40112.81486-.65051 1.19437-.2769.42478-.61058.80968-.99175 1.14408-.21328.1844-.44942.358-.67184.518l-.0716.0518c-.24432.1701-.47974.3527-.70535.5469-.27965.2431-.52148.5265-.717541.8409-.201003.3259-.351499.6803-.446367 1.0512-.191573.7431-.132671 1.5287.167578 2.2349.277385.6687.77228 1.2242 1.40461 1.5768.21839.1184.45074.2089.69164.2696.09693.1355.21773.2521.35648.3443.38841.2581.83506.4151 1.2995.457.1255.0132.25161.0198.37781.0198.18655-.0002.37287-.0134.55758-.0396.34488-.0565.68324-.1473 1.01004-.2711.7161-.2867 1.39326-.6624 2.0155-1.1182l.18586-.128c.25594-.1767.49817-.3443.73887-.5012.13372-.0908.27259-.1737.4159-.2483.1356-.0694.27554-.13.41896-.1813.227-.0823.457-.1524.6871-.2118l.1934-.0548.1173-.0351c-.0901.3419-.1088.6987-.0548 1.0481.0765.5219.3 1.0113.6444 1.4107.3166.3609.7463.6037 1.2188.6886.0723.015.1456.0246.2193.029.1379.0242.2775.0364.4175.0366.1478.0002.2952-.0141.4402-.0427.3588-.0709.6965-.2231.9872-.4448.3197.1159.6578.1727.9979.1675.0959 0 .1965 0 .3047-.0106.4164-.0353.8263-.126 1.2187-.2697.375-.1317.7222-.3322 1.0238-.5911.0289-.0259.0533-.0518.0776-.0777l.0244-.0259c.1885-.174.3525-.3729.4875-.5911.2169-.3543.3565-.7504.4098-1.1623.0271-.2227.0271-.4477 0-.6704-.0266-.2257-.0777-.4479-.1523-.6627-.107-.2909-.2312-.5753-.3717-.8516-.0518-.1066-.1036-.2117-.1524-.3184-.176-.3298-.2798-.6933-.3047-1.0664-.0091-.3184.125-.6596.2819-1.0542l.0396-.099c.1028-.2484.1819-.506.2361-.7693.0531-.2709.0776-.54668.0731-.8227-.0008-.5803-.132-1.153-.3839-1.67578-.1406-.28852-.3356-.54716-.5743-.76172-.1482-.13199-.3144-.24227-.4936-.32753-.0056-.36454-.0704-.72574-.192-1.06946-.2059-.57305-.5256-1.09851-.9399-1.54476-.3892-.42647-.8419-.79028-1.3422-1.0786-.1249-.0716-.2589-.14168-.4159-.2148l-.0304-.05789-.0655-.12035-.0884-.16149c-.0228-.03808-.0472-.07465-.0716-.11121l-.0396-.06246-.2118-.31383c-.0548-.07922-.1127-.15234-.1706-.2148l-.0807-.09598c-.139-.17453-.2919-.33755-.4571-.4875l-.0807-.0777c-.0754-.07432-.1569-.14211-.2438-.20261l-.067-.05028-.2437-.176714-.0579-.042657c-.0834-.06156-.1843-.094675-.288-.094453z",
					fill: "#fff"
				})),
				l = ({
					className: e
				}) => {
					return Object(o.e)(s.t) ? c.a.createElement(i, {
						className: e
					}) : c.a.createElement(r, {
						className: e
					})
				},
				i = ({
					className: e
				}) => c.a.createElement("svg", {
					className: e,
					fill: "#000",
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 40 40",
					height: "40",
					width: "40"
				}, c.a.createElement("path", {
					fill: "#ffdce2",
					d: "M11.76,15.15c.91-19.36,7.94-9.23,8-.71"
				}), c.a.createElement("path", {
					d: "M19.8,14.44a8.73,8.73,0,0,1-.45-2.07,14,14,0,0,0-.79-2.82,20,20,0,0,0-1.71-3.19,5.07,5.07,0,0,0-1.11-1.18,1.22,1.22,0,0,0-.47-.2c-.11,0-.17,0-.28.11a2.27,2.27,0,0,0-.65.88,8.65,8.65,0,0,0-.53,1.32c-.29.94-.53,1.91-.72,2.85-.4,1.87-.71,3.62-1.06,5a8.26,8.26,0,0,1-.83-4.73A30,30,0,0,1,13,5.56a6.5,6.5,0,0,1,.68-1c.13-.16.32-.3.47-.45a2.23,2.23,0,0,1,.62-.3A1.73,1.73,0,0,1,16,3.89a3.23,3.23,0,0,1,.95.69A10.88,10.88,0,0,1,19.1,8a13.48,13.48,0,0,1,.9,3.33A9.87,9.87,0,0,1,19.8,14.44Z"
				}), c.a.createElement("path", {
					fill: "#ffdce2",
					d: "M31.58,11.79c-3.31-3.6-8.69-4.11-13.65-2.9-5.63,1.4-7.87,6.7-10.6,10.93C5.6,21.92,3.57,23.67,2.11,26c-2.82,4.11.11,10.29,5.22,11.11,4.86.78,6.84-2.16,9.1-2.71,7.74-1.87,14.39-5.19,16-9.73C33.35,20.6,32.16,15.94,31.58,11.79Z"
				}), c.a.createElement("path", {
					d: "M31.59,11.78a19.39,19.39,0,0,1,.6,2.63A45.81,45.81,0,0,1,33,20a18.12,18.12,0,0,1,0,3.29,9.38,9.38,0,0,1-.31,1.67c-.11.26-.21.52-.32.77l-.41.72a14.17,14.17,0,0,1-3.83,3.82,29.56,29.56,0,0,1-6.61,3.36c-1.18.46-2.4.84-3.64,1.2a17.58,17.58,0,0,0-1.72.51,12.05,12.05,0,0,0-1.56.88,11.7,11.7,0,0,1-3.72,1.68,9.47,9.47,0,0,1-4.17,0A8.55,8.55,0,0,1,.63,32.57,8.24,8.24,0,0,1,.06,29a7,7,0,0,1,1.13-3.45,32.4,32.4,0,0,1,4.12-5c.35-.37.69-.75,1-1.12l.21-.25L6.7,19l.4-.64c.54-.86,1.07-1.73,1.6-2.58A22.63,22.63,0,0,1,12.5,11a11.46,11.46,0,0,1,5.28-2.83,20.36,20.36,0,0,1,5.45-.45,14.1,14.1,0,0,1,4.92,1.18,10.62,10.62,0,0,1,3.64,2.74,12.11,12.11,0,0,0-3.94-2.05,15,15,0,0,0-5-.52,22,22,0,0,0-4.59.76,12.15,12.15,0,0,0-3,1.28,12.59,12.59,0,0,0-3.54,3.18,44.59,44.59,0,0,0-2.77,4l-.66,1-.33.51L7.88,20s-.07.11-.12.17l-.11.12c-.54.61-1.1,1.2-1.65,1.76a34.28,34.28,0,0,0-3,3.43,8.73,8.73,0,0,0-.62.92,4.17,4.17,0,0,0-.48.94,5.91,5.91,0,0,0-.44,2,7.32,7.32,0,0,0,4,6.63,7.71,7.71,0,0,0,3.78.76,8.15,8.15,0,0,0,3.59-1,19.91,19.91,0,0,1,3.47-1.83,50.13,50.13,0,0,0,6.86-2.26,24.52,24.52,0,0,0,5.74-3.3A10.83,10.83,0,0,0,31,26.17a4.09,4.09,0,0,0,.4-.62,2.84,2.84,0,0,0,.33-.65l.15-.33a.34.34,0,0,0,0-.12l0-.18c0-.24.11-.48.14-.72C32.79,19.85,31.58,13.09,31.59,11.78Z"
				}), c.a.createElement("path", {
					fill: "#f9a",
					d: "M15,33.5c-.06-.16.39-.71,1.08-1.17a15.64,15.64,0,0,1,2-1c1.64-.84,3.65-1.16,5.09-1.87a12.34,12.34,0,0,0,3.33-2.36,7.84,7.84,0,0,0,2-2.77,2.59,2.59,0,0,1,.44,2,2.84,2.84,0,0,1-.7,1.6,16.44,16.44,0,0,1-6.26,3.36c-1.95.55-3.56,1-4.89,1.48-.31.13-.76.25-1.16.39S15.07,33.45,15,33.5Z"
				}), c.a.createElement("path", {
					fill: "#6a5cff",
					d: "M16.82,8.12c9.76-1.89,17.3,3.72,16.34,8,5,0,8.71,6.76,4.08,11.49,4.43,5.08,1.94,10.32-4.3,11.6-4.37.89-8.32-.76-9.83-4-1.71-3.65,1.08-7.29,5.78-7.42-5.56-5.2,3.42-8.34-.58-16.55"
				}), c.a.createElement("path", {
					d: "M28.32,11.28a2.88,2.88,0,0,1,.36.62,5.92,5.92,0,0,1,.57,1.41A8.27,8.27,0,0,1,29.32,18c-.43,1.8-1.46,3.56-1.82,5.3a4,4,0,0,0,.31,2.41c.09.17.21.33.31.5a5.45,5.45,0,0,0,.57.72l1.22,1.28c-.94.08-1.81.19-2.58.33a6.13,6.13,0,0,0-2.77,1.56,4,4,0,0,0-1.2,2.74,4.69,4.69,0,0,0,1,2.92,6.42,6.42,0,0,0,2.53,2,9.53,9.53,0,0,0,6.62.3c2.16-.61,4.1-2,4.68-3.84a5.58,5.58,0,0,0-1-4.93,9,9,0,0,0-.59-.77l-.47-.6-.23-.3c-.08-.05,0-.1.05-.15l.12-.14L37,26.28a3.29,3.29,0,0,0,.38-.54,5.5,5.5,0,0,0,.87-2.38A5.24,5.24,0,0,0,38,20.88a5.67,5.67,0,0,0-1.29-2.13,5.58,5.58,0,0,0-2-1.35A5.68,5.68,0,0,0,33,17.09L32.32,17l-.17,0a.92.92,0,0,1,0-.16l0-.34a12.4,12.4,0,0,0,.1-1.27,5.77,5.77,0,0,0-2.43-3.86,13.29,13.29,0,0,0-4.27-2.25,19.73,19.73,0,0,0-8.71-.71,16.24,16.24,0,0,1,9.39-.59,13.49,13.49,0,0,1,4.61,2,7.82,7.82,0,0,1,2.62,2.84l.28.58.2.64a5.36,5.36,0,0,1,.2,1.34s-.08.11,0,.11a2.28,2.28,0,0,0,.49.15,7.13,7.13,0,0,1,3.83,2.69,7.49,7.49,0,0,1,1.45,4.22,7.13,7.13,0,0,1-1.18,4.13l-.29.44a3.51,3.51,0,0,1-.3.36l-.19.21-.09.1s.05.07.07.11l.43.57.53.86a7.58,7.58,0,0,1,1,3.88,5.83,5.83,0,0,1-1.44,3.62,8.16,8.16,0,0,1-3,2.2,11.93,11.93,0,0,1-7,.82,8,8,0,0,1-5.53-3.76,5.77,5.77,0,0,1-.81-3.25,5.11,5.11,0,0,1,1.27-3,6.56,6.56,0,0,1,2.58-1.81,6.13,6.13,0,0,1,.72-.25L27,27.5l.15,0a3.27,3.27,0,0,1,.62-.07,4,4,0,0,1-.46-.55l-.18-.28a2.77,2.77,0,0,1-.22-.37l-.29-.82a5.64,5.64,0,0,1,.23-3.18c.64-1.87,2.06-4,2.21-6.23a8.74,8.74,0,0,0-.19-3C28.66,12.2,28.41,11.59,28.32,11.28Z"
				}), c.a.createElement("path", {
					d: "M21.44,26c4.39-2,1-8.4-3.18-5.83C15,22.4,17.62,27.75,21.44,26Z"
				}), c.a.createElement("path", {
					d: "M21.44,26a2.7,2.7,0,0,1-1.81.47A3.26,3.26,0,0,1,18.2,26a4.74,4.74,0,0,1-.94-.83,3.7,3.7,0,0,1-.74-3.43,3.84,3.84,0,0,1,2.65-2.54,3.49,3.49,0,0,1,3.12.51,4.05,4.05,0,0,1,1.58,2.53,3.41,3.41,0,0,1-.58,2.61,3.64,3.64,0,0,1-1.79,1.27,5.15,5.15,0,0,0,1.21-1.71,4.21,4.21,0,0,0,.23-1.55A3.07,3.07,0,0,0,22.4,21a2.89,2.89,0,0,0-1.53-1.1A3.08,3.08,0,0,0,17.68,21,3,3,0,0,0,17.22,24,3.49,3.49,0,0,0,19,25.89a3.7,3.7,0,0,0,1.39.27h.37L21,26.1Z"
				}), c.a.createElement("path", {
					fill: "#f9a",
					d: "M10.33,26.53c-2.77-.86-3.6-1.91-2.94-3.47C.11,25.47.07,33.88,7.18,36.34,13,38.34,17.35,28.69,10.33,26.53Z"
				}), c.a.createElement("path", {
					fill: "#f9a",
					d: "M10.33,26.52a6,6,0,0,1,1.09.35,7.15,7.15,0,0,1,.93.56,6.61,6.61,0,0,1,.93.91A4.92,4.92,0,0,1,14.13,31,7,7,0,0,1,14,32.23c-.11.37-.17.72-.28,1a6.35,6.35,0,0,1-1.83,2.6A4.9,4.9,0,0,1,8.76,37,5.92,5.92,0,0,1,7,36.75c-.51-.22-1-.39-1.54-.66a8.58,8.58,0,0,1-1.39-.92A7.55,7.55,0,0,1,2.94,34a6.86,6.86,0,0,1-1.51-3.62,6.46,6.46,0,0,1,.74-3.72A7.73,7.73,0,0,1,4.53,24a14.66,14.66,0,0,1,1.41-.82l1-.36.58-.22A1.88,1.88,0,0,1,8,22.47a8.28,8.28,0,0,0-.48,1.43,1.39,1.39,0,0,0,.07.59,2.1,2.1,0,0,0,.76.89,8.54,8.54,0,0,0,2,1A6.6,6.6,0,0,1,8,25.7a2.26,2.26,0,0,1-1-1.14,1.91,1.91,0,0,1-.11-.41c0-.11,0-.31,0-.28s0-.06,0-.07-.07.05-.07.06h0L6.41,24c-.34.18-.61.36-.83.46A6.81,6.81,0,0,0,2.8,27.22a5.82,5.82,0,0,0-.57,3.67A6,6,0,0,0,3.86,34a7.78,7.78,0,0,0,2.82,1.87,4.54,4.54,0,0,0,5.47-1.18,5.69,5.69,0,0,0,1.3-2.36,6.17,6.17,0,0,0,.22-1.26,4.91,4.91,0,0,0-.14-1.22,4.13,4.13,0,0,0-1.43-2.31l-.54-.42a3.12,3.12,0,0,0-.53-.29Z"
				}), c.a.createElement("path", {
					d: "M33,34.05c-.07-.07,0-.48.1-.95a3.82,3.82,0,0,0-.05-1.3,4.28,4.28,0,0,0-1.77-2.53,5.16,5.16,0,0,0-2.41-.83,8.67,8.67,0,0,0-2.22.13,2.56,2.56,0,0,1,2-1.06,6.24,6.24,0,0,1,3.93,2,4.58,4.58,0,0,1,.9,1.6,4.07,4.07,0,0,1,.11,1.61A3.53,3.53,0,0,1,33,34.05Z"
				}), c.a.createElement("path", {
					d: "M11.6,31.34a1.52,1.52,0,0,1-.23,1.17,3.33,3.33,0,0,1-.61.73c-.24.18-.45.38-.61.48a7.05,7.05,0,0,1-4.23,1,6.93,6.93,0,0,1-3.47-1.08A4.36,4.36,0,0,1,.63,31.32c.42.19.81.51,1.24.7s.77.38.9.56A5.23,5.23,0,0,0,5,33.78a6.76,6.76,0,0,0,2.3.15,5.93,5.93,0,0,0,3.37-1.35,4.62,4.62,0,0,0,.61-.63C11.43,31.69,11.55,31.43,11.6,31.34Z"
				}), c.a.createElement("path", {
					fill: "#ffdce2",
					d: "M19.92,15.9c.32-15.81,8.82-12.13,9.16-.18"
				}), c.a.createElement("path", {
					d: "M29.07,15.72a6.88,6.88,0,0,1-.46-2.09,13.82,13.82,0,0,0-.76-2.86,14.36,14.36,0,0,0-1.77-3.13c-.71-.94-1.71-1.52-2.28-1.24a3.32,3.32,0,0,0-1.53,1.77,15,15,0,0,0-.95,2.71c-.49,1.85-.78,3.61-1.1,5a7.42,7.42,0,0,1-.89-4.82,16,16,0,0,1,2.33-4.8A3.25,3.25,0,0,1,23.87,5a3.11,3.11,0,0,1,2.25.82,8.85,8.85,0,0,1,2.32,3.38,12.2,12.2,0,0,1,.87,3.39A11.14,11.14,0,0,1,29.07,15.72Z"
				}), c.a.createElement("path", {
					d: "M6.75,30.09a1,1,0,1,0,.06-2C5.64,28.27,5.51,30,6.75,30.09Z"
				}), c.a.createElement("path", {
					d: "M6.75,30.1A.74.74,0,0,1,6.19,30a1,1,0,0,1-.41-.73,1.19,1.19,0,0,1,.36-1,1.24,1.24,0,0,1,1.12-.3,1.08,1.08,0,0,1,.75.67,1.32,1.32,0,0,1,0,.94,1,1,0,0,1-.58.6,1.06,1.06,0,0,1-.68,0,1.6,1.6,0,0,0,.57-.28,1.6,1.6,0,0,0,.28-.36.93.93,0,0,0,0-1.08.85.85,0,0,0-1-.19,1,1,0,0,0-.45,1.45C6.23,29.91,6.65,30.08,6.75,30.1Z"
				}), c.a.createElement("path", {
					d: "M2.09,28.69c1.06-.05,1.47-2.36.39-2C1.59,27.11,1.2,28.85,2.09,28.69Z"
				}), c.a.createElement("path", {
					d: "M2.09,28.69a.32.32,0,0,1-.16,0,.37.37,0,0,1-.3-.17,1.1,1.1,0,0,1-.06-.7A1.82,1.82,0,0,1,1.94,27a1,1,0,0,1,.85-.44.47.47,0,0,1,.37.29.88.88,0,0,1,.08.41,1.92,1.92,0,0,1-.19.73,1.13,1.13,0,0,1-1,.72A1.46,1.46,0,0,0,2.78,28,1.34,1.34,0,0,0,3,27c-.08-.38-.54-.28-.74-.08a1.73,1.73,0,0,0-.62,1.4.37.37,0,0,0,.16.31A.45.45,0,0,0,2.09,28.69Z"
				}), c.a.createElement("circle", {
					fill: "#19f2c8",
					cx: "20.51",
					cy: "23.28",
					r: "2.04"
				}), c.a.createElement("path", {
					fill: "#19f2c8",
					d: "M22.55,23.28a2.72,2.72,0,0,0-.35-1A1.89,1.89,0,0,0,21,21.4a2,2,0,0,0-1.74.49,1.87,1.87,0,0,0-.56,1.69,1.91,1.91,0,0,0,2.25,1.51,2,2,0,0,0,1.56-1.81,1.81,1.81,0,0,1-.23,1.29,1.84,1.84,0,0,1-.94.78,2.22,2.22,0,0,1-2.5-.78,2.14,2.14,0,0,1,1.49-3.43,2.1,2.1,0,0,1,1.7.61,2,2,0,0,1,.47.85A2.09,2.09,0,0,1,22.55,23.28Z"
				}), c.a.createElement("circle", {
					fill: "#fff",
					cx: "18.9",
					cy: "21.87",
					r: "1.31"
				}), c.a.createElement("path", {
					fill: "#fff",
					d: "M20.21,21.87a2.75,2.75,0,0,0-.25-.65,1.17,1.17,0,0,0-.77-.52,1.22,1.22,0,0,0-1.06.32,1.15,1.15,0,0,0-.34,1,1.18,1.18,0,0,0,1.37.92,1.28,1.28,0,0,0,1-1.11,1.05,1.05,0,0,1-.08.87,1.21,1.21,0,0,1-.62.54,1.52,1.52,0,0,1-1.66-.55,1.44,1.44,0,0,1-.13-1.5,1.42,1.42,0,0,1,1.11-.77,1.34,1.34,0,0,1,1.12.41,1.26,1.26,0,0,1,.3.56A1.41,1.41,0,0,1,20.21,21.87Z"
				}), c.a.createElement("path", {
					fill: "#f9a",
					d: "M26,16.18c-1.46,1-4.82.41-5.26-1.56s.44-6.22,1.55-6.74C23.78,7.2,27.18,15.35,26,16.18Z"
				}), c.a.createElement("path", {
					d: "M26,16.17a1.08,1.08,0,0,0,.13-.59A5.5,5.5,0,0,0,26,14.27a13.67,13.67,0,0,0-1-2.63,14.42,14.42,0,0,0-1.87-3,1.41,1.41,0,0,0-.54-.41s0,0-.08,0-.14.14-.21.23a5.79,5.79,0,0,0-.64,1.52A13.35,13.35,0,0,0,21.16,13a6.94,6.94,0,0,0,.05,1.38,1.75,1.75,0,0,0,.51,1,3.86,3.86,0,0,0,2.16.95A3.71,3.71,0,0,0,26,16.06a3,3,0,0,1-2.21.92,3.5,3.5,0,0,1-2.17-.56,3.09,3.09,0,0,1-.94-1.09A3.12,3.12,0,0,1,20.37,14a11.14,11.14,0,0,1,.19-2.35,13.82,13.82,0,0,1,.53-2.13,6.53,6.53,0,0,1,.41-1,2.11,2.11,0,0,1,.72-.84.75.75,0,0,1,.64,0,1.88,1.88,0,0,1,.45.31,4.87,4.87,0,0,1,.65.73,12.72,12.72,0,0,1,.94,1.54,15.23,15.23,0,0,1,1.21,3,6.67,6.67,0,0,1,.26,1.7,2.64,2.64,0,0,1-.08.78A.63.63,0,0,1,26,16.17Z"
				}), c.a.createElement("path", {
					fill: "#94b3ff",
					d: "M33.47,23.09a.89.89,0,0,1-.11-.3l-.06-.26,0-.14,0-.08-.07.05a6.76,6.76,0,0,0-.63.52,6.62,6.62,0,0,0-.72.77l-.13.16-.13-.17a1.25,1.25,0,0,1-.19-1.07l.08-.32,0-.17s0-.18-.06-.16l-.23.15-.26.2a6.3,6.3,0,0,0-.83.72,2.56,2.56,0,0,0-.58.83c-.1.3-.08.46.11.63L29,25a2.77,2.77,0,0,1-.61-2.35,12.57,12.57,0,0,1,1.14-3,14,14,0,0,0,1-2.64,5.72,5.72,0,0,0,0-2.47c-.1-.38-.24-.73-.36-1.08l-.51-.93a8.88,8.88,0,0,1,.82.76,5.83,5.83,0,0,1,.68,1.14,4.33,4.33,0,0,1,.31,1.24,2.53,2.53,0,0,1,0,.94A17.5,17.5,0,0,1,29.71,21,7.05,7.05,0,0,0,29,22.94a2.13,2.13,0,0,0,.48,1.69l-.27.27a1.13,1.13,0,0,1-.35-.66,1.21,1.21,0,0,1,.12-.71,3.69,3.69,0,0,1,.75-1,7.86,7.86,0,0,1,.91-.75,5.41,5.41,0,0,1,.64-.38c.24-.13.45-.21.7-.32.07,0,0,.25.06.34a2.16,2.16,0,0,1,0,.36,4.34,4.34,0,0,1-.2.79.94.94,0,0,0,0,.83h-.39l.17-.19a6.25,6.25,0,0,1,1.49-1.12l.21-.11c0-.05,0,.05,0,.08v.12l0,.43Z"
				}), c.a.createElement("path", {
					fill: "#94b3ff",
					d: "M27.44,35.4a1.55,1.55,0,0,1-.47-.64,3,3,0,0,1-.23-.68,2.52,2.52,0,0,1-.06-.52l0-.25s0-.11,0-.08l-.1.1a1.38,1.38,0,0,0-.26.39,1.3,1.3,0,0,0-.12.4,2.49,2.49,0,0,0-.08.72,2.42,2.42,0,0,0,.44,1.36l-.56.55a3.74,3.74,0,0,1-1.55-2.34,4.67,4.67,0,0,1,2.14-4.55,4,4,0,0,1,4-.37c-.28,0-.59,0-.9.05a4.93,4.93,0,0,0-.94.21,8.29,8.29,0,0,0-1.35.61,4.13,4.13,0,0,0-2.34,3,3,3,0,0,0,1.28,2.95l-.28.28a3,3,0,0,1-.36-2.69,2.88,2.88,0,0,1,.88-1.29l.26-.22.14-.11c.05,0,.1-.08.08,0s0,.13.14.13h.05a3.9,3.9,0,0,0-.16,2.21A3.41,3.41,0,0,0,27.44,35.4Z"
				}), c.a.createElement("path", {
					fill: "#493ac1",
					d: "M28.06,37.14a11.11,11.11,0,0,0,1.27.18,10.21,10.21,0,0,0,1.84-.17,11.56,11.56,0,0,0,2.17-.61,6.25,6.25,0,0,0,1.79-1.22,4.49,4.49,0,0,0,1.16-3,5.57,5.57,0,0,0-.53-2.88,2.17,2.17,0,0,1,1.47,1,2.51,2.51,0,0,1,.52,1.45,7.52,7.52,0,0,1-1,3.29,4.4,4.4,0,0,1-1.05,1.13,9.61,9.61,0,0,1-1.16.8,6.9,6.9,0,0,1-2.43.81A11.52,11.52,0,0,1,29.9,38a3,3,0,0,1-1.16-.31A1.74,1.74,0,0,1,28.06,37.14Z"
				}), c.a.createElement("path", {
					fill: "#493ac1",
					d: "M33.09,26.76c0-.13.41-.15.79-.21a2,2,0,0,0,1-.34,3.49,3.49,0,0,0,.44-.41c.12-.13.21-.31.34-.48a3.58,3.58,0,0,0,.46-1.1,8.75,8.75,0,0,0-.18-3.77c.82,0,1.72.82,1.68,1.24a8.14,8.14,0,0,1-.88,3.8,3.82,3.82,0,0,1-1.05,1.24,2.52,2.52,0,0,1-1.37.44A2.49,2.49,0,0,1,33.09,26.76Z"
				}), c.a.createElement("path", {
					fill: "#fff8b8",
					d: "M2.29.57C0,2,5.89,16.92,8,19.08c2.8,1.55,7.52-.47,7.38-3.83S3.9-2.36,2.29.57Z"
				}), c.a.createElement("path", {
					d: "M2.27.56A.46.46,0,0,1,2.33.4.49.49,0,0,1,2.56.15a1.27,1.27,0,0,1,1.07,0A8.53,8.53,0,0,1,6.2,1.76a48.61,48.61,0,0,1,4.41,4.49,35.05,35.05,0,0,1,4.79,6.5,7.42,7.42,0,0,1,.83,2.15,4.29,4.29,0,0,1-.42,2.51,6,6,0,0,1-3.61,2.86,6.27,6.27,0,0,1-4,0L7.73,20a1.74,1.74,0,0,1-.35-.19l-.27-.3a8.55,8.55,0,0,1-.57-.79c-.33-.51-.6-1-.87-1.53a47.33,47.33,0,0,1-2.5-6A40,40,0,0,1,1.63,5.49a16.66,16.66,0,0,1-.3-2.67,5.66,5.66,0,0,1,.1-1.3A1.65,1.65,0,0,1,2.14.32a1.41,1.41,0,0,0-.31,1.21,6.29,6.29,0,0,0,.26,1.23c.24.84.56,1.72.89,2.57C3.63,7,4.29,8.6,4.52,9.47a46.46,46.46,0,0,0,1.64,5c.31.79.65,1.57,1,2.31.18.37.37.72.57,1.07.1.16.2.34.31.49s.11.16.17.22.06.1.11.13c2.53,1.36,6.38-.38,6.65-3V15.3a1.75,1.75,0,0,0-.07-.44,5.61,5.61,0,0,0-.34-.91,16.41,16.41,0,0,0-.95-1.75C13,11.08,12.2,10,11.46,9,10,7.06,8.48,5.29,7,3.69A32.32,32.32,0,0,0,4.48,1.12,4,4,0,0,0,3.13.3.77.77,0,0,0,2.27.56Z"
				}), c.a.createElement("path", {
					fill: "#ccffef",
					d: "M10.69,11.08a4.78,4.78,0,0,1-5,2.21c.85,2.93,2.21,5.84,3.6,6.41,2,.82,6.16-.77,6.05-4.37-.05-1.53-2.15-4.85-4-6.41a3.06,3.06,0,0,1-1.36,3"
				}), c.a.createElement("path", {
					d: "M10,11.89a4,4,0,0,0,.7-.78,3.28,3.28,0,0,0,.46-2.47c0-.16.22.08.38.21l.5.46c.37.36.54.56.77.82.43.49.79,1,1.06,1.31a13.15,13.15,0,0,1,1.36,2.22A5.79,5.79,0,0,1,15.66,15a3.73,3.73,0,0,1,0,.74,3.55,3.55,0,0,1-.08.73A4.5,4.5,0,0,1,14.15,19a5.93,5.93,0,0,1-2.51,1.3A4.13,4.13,0,0,1,8.71,20a5.88,5.88,0,0,1-1.77-2.14,15.31,15.31,0,0,1-1-2.29c-.14-.38-.26-.75-.37-1.12l-.23-.78-.26-.94c.27.06.53.13.8.17l.39.07a.58.58,0,0,0,.18,0h.1a3.55,3.55,0,0,0,.73,0,4.65,4.65,0,0,0,1.36-.39,5.37,5.37,0,0,0,2-1.6,4.48,4.48,0,0,1-2,2.32A4.31,4.31,0,0,1,7,13.86a2.56,2.56,0,0,1-.39,0H6.36s0,0,0,.08l.11.43c.08.28.16.56.25.83q.27.83.6,1.59a6.17,6.17,0,0,0,1.8,2.54,3.65,3.65,0,0,0,2.83.07,4.85,4.85,0,0,0,2.28-1.55,3.81,3.81,0,0,0,.81-2.38,5.26,5.26,0,0,0-.75-2.28,17.47,17.47,0,0,0-1.26-2c-.22-.3-.45-.6-.68-.88s-.23-.27-.35-.41l-.2-.23-.17-.17-.1-.11s0,0,0,.07a1.84,1.84,0,0,1-.14.64,2.93,2.93,0,0,1-.46.9A2.48,2.48,0,0,1,10,11.89Z"
				}), c.a.createElement("path", {
					fill: "#19f2c8",
					d: "M8.57,5.17c.14,2.42-2.75,3.95-4.8,3.76.61,1.47,1.56,6,3.36,5.89,2.38,0,5.54-1.7,5.25-4.6A17.52,17.52,0,0,0,8.44,5.46"
				}), c.a.createElement("path", {
					d: "M8.45,5.46A6.8,6.8,0,0,1,10.32,7,23.61,23.61,0,0,1,12.46,9.8c.06.1.27.33.23.56a3.26,3.26,0,0,1,0,.54,4,4,0,0,1-.2,1.08,4.35,4.35,0,0,1-1.29,1.84,6.37,6.37,0,0,1-4.11,1.54h.06a3,3,0,0,1-.53,0,3.14,3.14,0,0,1-.46-.18,3.81,3.81,0,0,1-1.27-1.48,11.83,11.83,0,0,1-.68-1.57c-.19-.52-.35-1-.51-1.54L3.5,9.77,3,8.37c.33,0,.68.05,1,0h.45c.18,0,.17,0,.27,0a4.7,4.7,0,0,0,.83-.17A4.79,4.79,0,0,0,7,7.54,3.1,3.1,0,0,0,8.41,5.18a2.4,2.4,0,0,1,.08,1.33A3.33,3.33,0,0,1,7.72,8,4.42,4.42,0,0,1,5.4,9.34c-.15,0-.29.05-.44.06H4.61L4.4,9.37s0,.05,0,.09a1.75,1.75,0,0,0,0,.25l.25.91a17.49,17.49,0,0,0,.54,1.73A6.71,6.71,0,0,0,6,13.84a1.42,1.42,0,0,0,1.12.76h0a5.26,5.26,0,0,0,4.57-2.48A3.1,3.1,0,0,0,12.05,11a2.72,2.72,0,0,0,0-.57c0-.1,0-.12,0-.17L11.9,10c-.4-.67-.83-1.29-1.25-1.87A27.49,27.49,0,0,0,8.45,5.46Z"
				}), c.a.createElement("path", {
					fill: "#fff",
					d: "M3.3,2.08A31.85,31.85,0,0,1,4.72,5.57c.7,1.64,1.36,3.56,2,5.26a47.44,47.44,0,0,0,3.47,7.56A5.89,5.89,0,0,1,7.76,15.9c-1-2.49-1.65-4.65-2.35-6.56s-1.28-3.56-1.69-5A19.92,19.92,0,0,1,3.3,2.08Z"
				}), c.a.createElement("path", {
					fill: "#6a5cff",
					d: "M20.72,8c-12.86-4.26-7.25,10.38.19,7.55-1.23-1.74-.58-5.59-.18-7.17"
				}), c.a.createElement("path", {
					d: "M20.74,8.4a16.52,16.52,0,0,1-.19,2.41,9.2,9.2,0,0,0,.22,3.3,2.47,2.47,0,0,0,.1.29l.06.14a1.76,1.76,0,0,0,.09.21,12.51,12.51,0,0,0,.67,1.1,10.52,10.52,0,0,1-1.3.49c-.11,0-.25.06-.37.09l-.27.06a4,4,0,0,1-.5.06,5.26,5.26,0,0,1-2.08-.2,7,7,0,0,1-3.39-2.27,6.31,6.31,0,0,1-1.55-3.87,3.51,3.51,0,0,1,.66-2.16,3.44,3.44,0,0,1,1.78-1.23,6.69,6.69,0,0,1,3.48,0,12.83,12.83,0,0,1,2.64,1c-.81.11-1.91.07-2.89.14s-1.81.15-2.21.2a2.36,2.36,0,0,0-1.61.62,2.2,2.2,0,0,0-.58,1.62A5.25,5.25,0,0,0,15,13.73a5.46,5.46,0,0,0,2.89,1.7,4.79,4.79,0,0,0,1.55.08,2.29,2.29,0,0,0,.36-.07l.21,0c.1-.06.28-.07.29-.15a2.12,2.12,0,0,1-.12-.2,1.34,1.34,0,0,1-.11-.31,5.39,5.39,0,0,1-.22-1,9.32,9.32,0,0,1,0-1.9A11.43,11.43,0,0,1,20.74,8.4Z"
				}), c.a.createElement("path", {
					fill: "#94b3ff",
					d: "M17.76,12.22c-.08,0-.17-.4-.36-.73,0-.05-.07,0,0-.08s0,.05,0,.07a2.47,2.47,0,0,0-.21.36l-.41.85-.08,0a1.77,1.77,0,0,1-.58-1,2.63,2.63,0,0,1,.05-1.39l.49.51a1.81,1.81,0,0,0-.41.23l0,0a.36.36,0,0,0-.11.1,1,1,0,0,0-.2.27,11.84,11.84,0,0,0-.49,1.4l-.18-.33-.08-.14h0L15,12.27,14.93,12a2.4,2.4,0,0,1-.29-1,1.92,1.92,0,0,1,.06-.62,1.81,1.81,0,0,1,.2-.54,2.45,2.45,0,0,1,.52-.62,3.09,3.09,0,0,1,2.39-.62c-.28.21-.67.4-1,.62s-.55.4-.69.48a1.51,1.51,0,0,0-.57.46c-.08.12-.1.13-.14.2a.77.77,0,0,0-.07.2,1,1,0,0,0,.05.5c0,.07,0,0,0,0l0-.09a1.18,1.18,0,0,1,.11-.19,1.11,1.11,0,0,1,.29-.28,2.53,2.53,0,0,1,.54-.28l.37-.14-.13.39a1.94,1.94,0,0,0-.06.86,1.13,1.13,0,0,0,.08.22.41.41,0,0,0,0,.09s0,0,.06-.07a1.67,1.67,0,0,1,.18-.28.46.46,0,0,1,.11-.12.56.56,0,0,1,.14-.1.32.32,0,0,1,.27,0c.24.21.19.35.23.49A3.65,3.65,0,0,1,17.76,12.22Z"
				}))
		},
		"./src/reddit/components/Econ/Prediction/hooks/useDelayedUpvoteAnimation.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return s
			}));
			var n = a("./node_modules/react-redux/es/index.js"),
				c = a("./src/reddit/actions/post.ts");
			const o = 3e3;

			function s(e) {
				const t = Object(n.d)();
				return {
					startDelayedUpvoteAnimation: () => setTimeout(() => t(Object(c.q)(e)), o)
				}
			}
		},
		"./src/reddit/components/Econ/Prediction/themes.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return c
			}));
			var n = a("./src/config.ts");
			const c = {
				theme_1: `url(${n.a.assetPath}/img/econ/predictions/theme1.png)`,
				theme_2: `url(${n.a.assetPath}/img/econ/predictions/theme2.png)`,
				theme_3: "linear-gradient(104.49deg, #279A63 7.96%, #B6C048 119.75%)",
				theme_4: "linear-gradient(91.64deg, #F5AC1F -10.49%, #FC7519 52.61%)",
				theme_5: `url(${n.a.assetPath}/img/econ/predictions/theme5.png)`,
				theme_6: `url(${n.a.assetPath}/img/econ/predictions/theme6.png)`,
				theme_7: `url(${n.a.assetPath}/img/econ/predictions/theme7.png)`,
				theme_8: `url(${n.a.assetPath}/img/econ/predictions/theme8.png)`
			}
		},
		"./src/reddit/components/ModalStyledComponents/index.m.less": function(e, t, a) {
			e.exports = {
				CloseIcon: "_3XSQHPxjCTSWWZh_u-d0Xf",
				closeIcon: "_3XSQHPxjCTSWWZh_u-d0Xf",
				ModalBody: "_2R3RlhymCOkPrz9TusvcPq",
				modalBody: "_2R3RlhymCOkPrz9TusvcPq",
				ModalPostPreview: "HydQQ-TD4TUsVnxkYk_5F",
				modalPostPreview: "HydQQ-TD4TUsVnxkYk_5F",
				ModalText: "mFTHPdbEAklUs8yhT4Xm7",
				modalText: "mFTHPdbEAklUs8yhT4Xm7",
				ModalSmallText: "_3cwQrg-XvocnoG0U22wT8t",
				modalSmallText: "_3cwQrg-XvocnoG0U22wT8t",
				ModalDescriptionText: "_12g_PUGHD-w7T1w4Q3oTsq",
				modalDescriptionText: "_12g_PUGHD-w7T1w4Q3oTsq",
				ModalMetaText: "_27eskYssCs-urVW1uHI4YI",
				modalMetaText: "_27eskYssCs-urVW1uHI4YI",
				ModalFormItem: "_3xiY8nTCVp16qSb6CGW2Kv",
				modalFormItem: "_3xiY8nTCVp16qSb6CGW2Kv",
				ModalInput: "_20ZSV7ktyDYzPcd1UMQWZT",
				modalInput: "_20ZSV7ktyDYzPcd1UMQWZT",
				ModalInputLabel: "HVADn-LHFLaS8r6IBJWeq",
				modalInputLabel: "HVADn-LHFLaS8r6IBJWeq",
				ModalFooter: "_-0i7atRJ5NBsrRM5wuPpX",
				modalFooter: "_-0i7atRJ5NBsrRM5wuPpX",
				ModalHeader: "_1Fa5Xv7f16v5IC2Tq1m2Fy",
				modalHeader: "_1Fa5Xv7f16v5IC2Tq1m2Fy",
				ModalTitle: "eLnlHLGCDxjFf3jfGTcZu",
				modalTitle: "eLnlHLGCDxjFf3jfGTcZu",
				ModalMain: "_1uaasV6RaxBfRyVgQJdiKs",
				modalMain: "_1uaasV6RaxBfRyVgQJdiKs",
				ModalAnnotation: "gLlWG7Oj89Ost4_twUu8w",
				modalAnnotation: "gLlWG7Oj89Ost4_twUu8w",
				TextArea: "_2h8O7PjrCXfaJJWKrAxJPL",
				textArea: "_2h8O7PjrCXfaJJWKrAxJPL",
				WarningButton: "_17UyTSs2atqnKg9dIq5ERg",
				warningButton: "_17UyTSs2atqnKg9dIq5ERg",
				PrimaryButton: "_2X1FFYUx3jzlnbcegBC_Sr",
				primaryButton: "_2X1FFYUx3jzlnbcegBC_Sr",
				CancelButton: "_1QUX9-zZuGtifS6jJBUyh-",
				cancelButton: "_1QUX9-zZuGtifS6jJBUyh-",
				RemoveButton: "_2ulRgczjI5SWCMgSA1CNLj",
				removeButton: "_2ulRgczjI5SWCMgSA1CNLj",
				ConfirmButton: "JZC61-VzVuaiHdWuRUiSC",
				confirmButton: "JZC61-VzVuaiHdWuRUiSC"
			}
		},
		"./src/reddit/components/ModalStyledComponents/index.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "b", (function() {
				return p
			})), a.d(t, "e", (function() {
				return f
			})), a.d(t, "n", (function() {
				return h
			})), a.d(t, "p", (function() {
				return E
			})), a.d(t, "o", (function() {
				return b
			})), a.d(t, "f", (function() {
				return _
			})), a.d(t, "m", (function() {
				return x
			})), a.d(t, "h", (function() {
				return g
			})), a.d(t, "j", (function() {
				return O
			})), a.d(t, "k", (function() {
				return v
			})), a.d(t, "g", (function() {
				return C
			})), a.d(t, "i", (function() {
				return k
			})), a.d(t, "q", (function() {
				return I
			})), a.d(t, "d", (function() {
				return N
			})), a.d(t, "l", (function() {
				return j
			})), a.d(t, "t", (function() {
				return P
			})), a.d(t, "u", (function() {
				return M
			})), a.d(t, "r", (function() {
				return A
			})), a.d(t, "a", (function() {
				return y
			})), a.d(t, "s", (function() {
				return w
			})), a.d(t, "c", (function() {
				return S
			}));
			var n = a("./src/lib/classNames/index.ts"),
				c = a("./src/lib/lessComponent.tsx"),
				o = a("./node_modules/react/index.js"),
				s = a.n(o),
				r = a("./src/reddit/controls/Button/index.tsx"),
				l = a("./src/reddit/controls/Input/ModalInput.tsx"),
				i = a("./src/reddit/icons/svgs/Close/index.tsx"),
				d = a("./src/reddit/components/ModalStyledComponents/index.m.less"),
				m = a.n(d);

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
					}
					return e
				}).apply(this, arguments)
			}
			const p = c.a.wrapped(i.a, "CloseIcon", m.a),
				f = c.a.section("ModalBody", m.a),
				h = c.a.section("ModalPostPreview", m.a),
				E = c.a.p("ModalText", m.a),
				b = c.a.div("ModalSmallText", m.a),
				_ = c.a.div("ModalDescriptionText", m.a),
				x = c.a.div("ModalMetaText", m.a),
				g = c.a.label("ModalFormItem", m.a),
				O = c.a.wrapped(l.a, "ModalInput", m.a),
				v = c.a.label("ModalInputLabel", m.a),
				C = c.a.footer("ModalFooter", m.a),
				k = c.a.header("ModalHeader", m.a),
				I = c.a.div("ModalTitle", m.a),
				N = c.a.div("ModalAnnotation", m.a),
				j = c.a.div("ModalMain", m.a),
				P = c.a.textarea("TextArea", m.a),
				M = c.a.wrapped(r.l, "WarningButton", m.a),
				A = c.a.wrapped(r.l, "PrimaryButton", m.a),
				y = c.a.wrapped(r.o, "CancelButton", m.a),
				w = c.a.wrapped(r.r, "RemoveButton", m.a),
				S = ({
					className: e,
					...t
				}) => s.a.createElement(r.t, u({
					kind: r.b.Button,
					priority: r.c.Primary,
					className: Object(n.a)(m.a.ConfirmButton, e)
				}, t))
		},
		"./src/reddit/components/UserIcon/CurrentUserIcon.tsx": function(e, t, a) {
			"use strict";
			var n = a("./src/lib/classNames/index.ts"),
				c = a("./node_modules/react/index.js"),
				o = a.n(c),
				s = a("./node_modules/react-redux/es/index.js"),
				r = a("./node_modules/reselect/es/index.js"),
				l = a("./src/reddit/helpers/userSnoovatar/index.ts"),
				i = a("./src/reddit/selectors/user.ts"),
				d = a("./src/reddit/components/UserIcon/PresenceDot.tsx"),
				m = a("./src/reddit/components/UserIcon/SnoovatarHeadshot.tsx"),
				u = a("./src/reddit/components/UserIcon/UserIcon.tsx"),
				p = a("./src/reddit/components/UserIcon/UserIcon.m.less"),
				f = a.n(p);

			function h() {
				return (h = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
					}
					return e
				}).apply(this, arguments)
			}
			const E = Object(r.c)({
					currentUser: i.k,
					isNightMode: i.W,
					isPresenceUserPrefEnabled: i.O,
					shouldHideNSFW: i.C
				}),
				b = Object(s.b)(E);
			t.a = b(e => {
				const {
					currentUser: t,
					shouldShowPresenceIndicator: a,
					isPresenceUserPrefEnabled: c,
					wrapperClassName: s,
					...r
				} = e, i = Object(l.a)(null == t ? void 0 : t.accountIcon);
				return o.a.createElement("div", {
					className: Object(n.a)(f.a.currentUserIconWrapper, s)
				}, i ? o.a.createElement(m.a, {
					headshot: t.accountIcon,
					className: e.className
				}) : o.a.createElement(u.b, h({}, r, {
					iconUrl: t ? t.accountIcon : void 0,
					isCurrentUser: !0,
					isNSFW: !!t && t.isNSFW
				})), a && o.a.createElement(d.default, {
					showPresence: !0
				}))
			})
		},
		"./src/reddit/controls/Input/ModalInput.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/react/index.js"),
				c = a.n(n),
				o = a("./node_modules/react-redux/es/index.js"),
				s = a("./src/lib/classNames/index.ts"),
				r = a("./src/reddit/actions/modal.ts"),
				l = a("./src/reddit/constants/keycodes.ts"),
				i = a("./src/reddit/controls/Input/index.m.less"),
				d = a.n(i);

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
					}
					return e
				}).apply(this, arguments)
			}
			class u extends c.a.Component {
				constructor() {
					super(...arguments), this.handleKeyDown = ({
						keyCode: e
					}) => {
						e === l.a.Escape && this.props.closeModal()
					}
				}
				render() {
					const {
						className: e,
						closeModal: t,
						...a
					} = this.props;
					return c.a.createElement("input", m({
						className: Object(s.a)(d.a.input, e),
						onKeyDown: this.handleKeyDown
					}, a))
				}
			}
			t.a = Object(o.b)(null, {
				closeModal: r.f
			})(u)
		},
		"./src/reddit/controls/Input/index.m.less": function(e, t, a) {
			e.exports = {
				input: "_3eoXtlBWKbkFYoOHUIcIgK"
			}
		},
		"./src/reddit/helpers/trackers/predictions.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return s
			})), a.d(t, "p", (function() {
				return r
			})), a.d(t, "q", (function() {
				return l
			})), a.d(t, "s", (function() {
				return i
			})), a.d(t, "n", (function() {
				return d
			})), a.d(t, "o", (function() {
				return m
			})), a.d(t, "m", (function() {
				return u
			})), a.d(t, "b", (function() {
				return p
			})), a.d(t, "g", (function() {
				return f
			})), a.d(t, "l", (function() {
				return h
			})), a.d(t, "t", (function() {
				return E
			})), a.d(t, "e", (function() {
				return b
			})), a.d(t, "j", (function() {
				return _
			})), a.d(t, "d", (function() {
				return x
			})), a.d(t, "h", (function() {
				return g
			})), a.d(t, "c", (function() {
				return O
			})), a.d(t, "k", (function() {
				return v
			})), a.d(t, "i", (function() {
				return C
			})), a.d(t, "r", (function() {
				return k
			})), a.d(t, "f", (function() {
				return I
			}));
			var n = a("./src/reddit/models/Prediction/index.ts"),
				c = a("./src/reddit/selectors/telemetry.ts");
			const o = "poll",
				s = "predictions",
				r = e => ({
					...Object(c.m)(e),
					source: o,
					action: "select",
					noun: "poll_option"
				}),
				l = e => ({
					...Object(c.m)(e),
					source: o,
					action: "select",
					noun: "prediction_option"
				}),
				i = e => ({
					...Object(c.m)(e),
					source: o,
					action: "view",
					noun: "predict_option_modal"
				}),
				d = ({
					pollId: e,
					selectedNumberCoins: t,
					totalStakeAmount: a
				}) => n => ({
					...Object(c.m)(n),
					source: o,
					action: "confirm",
					noun: "predict",
					poll: Object(c.F)(n, e, !1, void 0, t),
					goldPurchase: {
						numberCoins: a
					}
				}),
				m = ({
					pollId: e,
					selectedNumberTokens: t
				}) => a => ({
					...Object(c.m)(a),
					source: o,
					action: "confirm",
					noun: "predict",
					poll: Object(c.F)(a, e, !1, void 0, void 0, t)
				}),
				u = ({
					pollId: e,
					currency: t,
					amount: a
				}) => s => {
					const r = t === n.a.Coins ? a : void 0,
						l = t === n.a.Tokens ? a : void 0;
					return {
						...Object(c.m)(s),
						source: o,
						action: "close",
						noun: "prediction_modal",
						poll: Object(c.F)(s, e, !1, r, l)
					}
				},
				p = e => ({
					...Object(c.m)(e),
					source: o,
					action: "click",
					noun: "add_coins"
				}),
				f = ({
					targetUserId: e
				}) => t => ({
					...Object(c.m)(t),
					source: s,
					action: "click",
					noun: "leaderboard_profile",
					targetUser: {
						id: e
					}
				}),
				h = ({
					pageType: e
				}) => t => ({
					...Object(c.m)(t),
					source: s,
					action: "click",
					noun: "tournament",
					actionInfo: {
						pageType: e
					}
				}),
				E = () => e => ({
					...Object(c.m)(e),
					source: "global",
					action: "view",
					noun: "screen",
					actionInfo: {
						pageType: "mod_tool_predict"
					}
				}),
				b = () => e => ({
					...Object(c.m)(e),
					source: "mod_tool_predict",
					action: "click",
					noun: "end_tournament"
				}),
				_ = () => e => ({
					...Object(c.m)(e),
					source: "mod_tool_predict",
					action: "click",
					noun: "rename_tournament"
				}),
				x = e => t => ({
					...Object(c.m)(t),
					source: "mod_tool_predict",
					action: "click",
					noun: "enable_predictions",
					actionInfo: {
						pageType: "predictions_picker"
					},
					setting: {
						value: e ? "1" : "0",
						oldValue: e ? "0" : "1"
					},
					subreddit: Object(c.gb)(t)
				}),
				g = () => e => ({
					...Object(c.m)(e),
					source: s,
					action: "click",
					noun: "next"
				}),
				O = () => e => ({
					...Object(c.m)(e),
					source: s,
					action: "click",
					noun: "add_more"
				}),
				v = () => e => ({
					...Object(c.m)(e),
					source: s,
					action: "click",
					noun: "start_tournament"
				}),
				C = () => e => ({
					...Object(c.m)(e),
					source: "menu_links_bar",
					action: "click",
					noun: "predictions_tab"
				}),
				k = () => e => ({
					...Object(c.m)(e),
					source: "predictions_tab",
					action: "view",
					noun: "predictions_how_it_works",
					subreddit: Object(c.gb)(e)
				}),
				I = () => e => ({
					...Object(c.m)(e),
					source: "predictions_how_it_works",
					action: "click",
					noun: "learn_more",
					subreddit: Object(c.gb)(e)
				})
		},
		"./src/reddit/hooks/useToast.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return r
			}));
			var n = a("./node_modules/react/index.js"),
				c = a("./node_modules/react-redux/es/index.js"),
				o = a("./src/reddit/actions/toaster.ts"),
				s = a("./src/reddit/models/Toast/index.ts");

			function r() {
				const e = function() {
					const e = Object(c.d)();
					return Object(n.useCallback)(t => e(Object(o.f)(t)), [e])
				}();
				return Object(n.useCallback)((t, a) => e({
					duration: 5e3,
					kind: s.b.Error,
					...a,
					text: t
				}), [e])
			}
		},
		"./src/reddit/icons/svgs/CoinV2/index.m.less": function(e, t, a) {
			e.exports = {
				shadow: "_1FZLzx9zXc2B6sAENx2Fl2",
				standardColor: "_1nJ18ao-riTqosaH0xAHuA"
			}
		},
		"./src/reddit/icons/svgs/CoinV2/index.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/react/index.js"),
				c = a.n(n),
				o = a("./src/lib/classNames/index.ts"),
				s = a("./src/reddit/icons/svgs/CoinV2/index.m.less"),
				r = a.n(s);
			t.a = e => c.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, c.a.createElement("path", {
				className: Object(o.a)(r.a.shadow, e.shadowClassName),
				d: "M11.1 1.889H8.722v16.219h2.212a5.86 5.86 0 001.951-.274c3.658-1.158 5.837-5.614 4.856-9.933C16.92 4.28 14.134 1.886 11.1 1.89z"
			}), c.a.createElement("path", {
				d: "M11.1 1.889H8.722v16.219h2.212a5.86 5.86 0 001.951-.274c3.658-1.158 5.837-5.614 4.856-9.933C16.92 4.28 14.134 1.886 11.1 1.89z",
				fill: "url(#shine)",
				fillOpacity: ".3"
			}), c.a.createElement("path", {
				className: Object(o.a)(r.a.standardColor, e.standardColorClassName),
				d: "M6.991 2.166C3.334 3.324 1.155 7.78 2.135 12.1c.98 4.32 4.754 6.891 8.411 5.734 3.658-1.157 5.837-5.613 4.857-9.932-.98-4.32-4.754-6.892-8.412-5.735z"
			}), c.a.createElement("path", {
				className: Object(o.a)(r.a.shadow, e.shadowClassName),
				d: "M7.54 12.335c1.122.765 2.664.277 3.311-1.047.224-.457.718-.613 1.104-.35.387.264.52.847.296 1.304-.54 1.103-1.41 1.892-2.453 2.222-1.043.33-2.13.16-3.065-.476-1.929-1.316-2.592-4.24-1.479-6.517.54-1.104 1.41-1.893 2.453-2.223 1.042-.33 2.13-.16 3.065.477.387.263.52.847.296 1.303-.223.456-.717.612-1.104.35-1.121-.765-2.663-.277-3.31 1.047-.669 1.367-.271 3.121.887 3.91z"
			}), c.a.createElement("defs", null, c.a.createElement("linearGradient", {
				id: "shine",
				x1: "11.107",
				y1: "1.889",
				x2: "11.107",
				y2: "18.111",
				gradientUnits: "userSpaceOnUse"
			}, c.a.createElement("stop", {
				offset: ".063",
				stopColor: "#fff",
				stopOpacity: "0"
			}), c.a.createElement("stop", {
				offset: ".302",
				stopColor: "#fff"
			}), c.a.createElement("stop", {
				offset: "0.432",
				stopColor: "#fff"
			}), c.a.createElement("stop", {
				offset: "0.474",
				stopColor: "#fff",
				stopOpacity: "0"
			}))))
		},
		"./src/reddit/icons/svgs/EyeDouble/index.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/react/index.js"),
				c = a.n(n);
			t.a = e => c.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 21 16",
				fill: "inherit",
				xmlns: "http://www.w3.org/2000/svg"
			}, c.a.createElement("path", {
				d: "M10.5 3.38a4.62 4.62 0 100 9.24 4.62 4.62 0 000-9.24zm0 8A3.38 3.38 0 1113.88 8a3.39 3.39 0 01-3.38 3.38z"
			}), c.a.createElement("path", {
				d: "M20.36 7.57a10.61 10.61 0 00-19.72 0 1.16 1.16 0 000 .86 10.73 10.73 0 002.42 3.65 10.62 10.62 0 0014.44.39 10.72 10.72 0 002.84-4 1.16 1.16 0 00.02-.9zm-3.67 4a9.34 9.34 0 01-12.75-.34A9.79 9.79 0 011.8 8a9.37 9.37 0 0117.4 0 9.4 9.4 0 01-2.51 3.53v.04z"
			}))
		},
		"./src/reddit/icons/svgs/Minus/index.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/react/index.js"),
				c = a.n(n);
			t.a = e => c.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				version: "1.1"
			}, c.a.createElement("g", {
				transform: "translate(4, 8), scale(0.75)"
			}, c.a.createElement("path", {
				d: "M10.3785 4.86328H14.9734C15.6086 4.86328 16.1221 4.3498 16.1221 3.71456V1.41713C16.1221 0.781889 15.6086 0.268413 14.9734 0.268413H10.3785H5.78363H1.18876C0.554665 0.268413 0.0400391 0.781889 0.0400391 1.41713V3.71456C0.0400391 4.3498 0.554665 4.86328 1.18876 4.86328H5.78363H10.3785Z"
			})))
		},
		"./src/reddit/icons/svgs/MinusCircle/index.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return o
			}));
			var n = a("./node_modules/react/index.js"),
				c = a.n(n);
			const o = e => c.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 16 16"
			}, c.a.createElement("path", {
				d: "M7.99981 15.6998C6.47689 15.6998 4.98818 15.2482 3.72192 14.4021C2.45566 13.556 1.46873 12.3535 0.885936 10.9465C0.303141 9.53948 0.150655 7.99127 0.447761 6.49761C0.744868 5.00396 1.47822 3.63195 2.55509 2.55509C3.63195 1.47822 5.00396 0.744868 6.49761 0.447761C7.99127 0.150655 9.53948 0.303141 10.9465 0.885936C12.3535 1.46873 13.556 2.45566 14.4021 3.72192C15.2482 4.98818 15.6998 6.47689 15.6998 7.99981C15.6975 10.0413 14.8855 11.9984 13.442 13.442C11.9984 14.8855 10.0413 15.6975 7.99981 15.6998ZM7.99981 1.29981C6.67467 1.29981 5.3793 1.69276 4.27749 2.42896C3.17568 3.16517 2.31692 4.21156 1.80982 5.43583C1.30271 6.66009 1.17003 8.00724 1.42855 9.30691C1.68707 10.6066 2.32518 11.8004 3.26219 12.7374C4.1992 13.6744 5.39303 14.3125 6.6927 14.5711C7.99238 14.8296 9.33952 14.6969 10.5638 14.1898C11.7881 13.6827 12.8344 12.8239 13.5707 11.7221C14.3069 10.6203 14.6998 9.32494 14.6998 7.99981C14.6979 6.22344 13.9914 4.52038 12.7353 3.2643C11.4792 2.00822 9.77617 1.30171 7.99981 1.29981Z"
			}), c.a.createElement("path", {
				d: "M11.3934 7.49981H4.60621V8.49981H11.3934V7.49981Z"
			}))
		},
		"./src/reddit/icons/svgs/Star6/index.m.less": function(e, t, a) {
			e.exports = {
				sparkle: "_39SsnAyWvt-R7vd5x-DV2p",
				fadeIn: "_2Rb9zPIVWO8_F_3QxHbRSh"
			}
		},
		"./src/reddit/icons/svgs/Undo/index.m.less": function(e, t, a) {
			e.exports = {
				undo: "_2sBykNOXv7XBQtHHHAB1JB"
			}
		},
		"./src/reddit/icons/svgs/Undo/index.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/react/index.js"),
				c = a.n(n),
				o = a("./src/lib/classNames/index.ts"),
				s = a("./src/reddit/icons/svgs/Undo/index.m.less"),
				r = a.n(s);
			t.a = e => c.a.createElement("svg", {
				className: Object(o.a)(r.a.undo, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, c.a.createElement("g", null, c.a.createElement("path", {
				d: "M10,2.375H6.726L8.4.98,7.6.02l-3,2.5a.625.625,0,0,0,0,.96l3,2.5.8-.96L6.726,3.625H10A6.375,6.375,0,1,1,3.625,10H2.375A7.625,7.625,0,1,0,10,2.375ZM5.976,3,6,2.98v.04Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/layout/twoCol/ExpandLeft/index.m.less": function(e, t, a) {
			e.exports = {
				left: "_5gAwSCo7K8G413IoE78Ml",
				right: "_2ghjBMFIsORwdO3oh2Kq6g",
				exapndLeftContainer: "_1zTJo0Ndih4fp__5DjbClN"
			}
		},
		"./src/reddit/layout/twoCol/ExpandLeft/index.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/react/index.js"),
				c = a.n(n),
				o = a("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				s = a("./src/lib/classNames/index.ts"),
				r = a("./src/reddit/layout/twoCol/ExpandLeft/index.m.less"),
				l = a.n(r);
			t.a = Object(o.a)(e => c.a.createElement("div", {
				className: Object(s.a)(l.a.exapndLeftContainer, e.className)
			}, c.a.createElement("div", {
				className: l.a.left
			}, Array.isArray(e.children) && e.children[0]), c.a.createElement("div", {
				className: l.a.right,
				style: {
					flexBasis: e.widthRight
				}
			}, Array.isArray(e.children) && e.children[1])), 2)
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/index~reddit-components-Econ-Prediction.9ce1f5f1ca028bc69025.js.map