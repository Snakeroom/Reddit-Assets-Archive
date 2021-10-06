// https://www.redditstatic.com/desktop2x/index.f9eef3620c864d47b4a9.js
// Retrieved at 10/6/2021, 4:50:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["index"], {
		"./src/reddit/components/Econ/Prediction/TournamentPostBody/ViewTournamentLink/index.m.less": function(e, t, n) {
			e.exports = {
				viewTournament: "_16Mu-Vn-rTtULDzx2p5T80"
			}
		},
		"./src/reddit/components/Econ/Prediction/TournamentPostBody/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "TournamentPostBody", (function() {
				return ye
			}));
			var o = n("./node_modules/react/index.js"),
				i = n.n(o),
				s = n("./node_modules/react-redux/es/index.js"),
				r = n("./src/reddit/selectors/experiments/econ/index.ts"),
				a = n("./src/reddit/models/Prediction/Tournament/index.ts"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/controls/InternalLink/index.tsx"),
				l = n("./src/reddit/selectors/telemetry.ts");
			const u = (e, t) => ({
					...Object(l.defaults)(e),
					poll: Object(l.predictionTournamentPoll)(e, t),
					post: Object(l.post)(e, t),
					predictions: Object(l.predictions)(e, t),
					subreddit: Object(l.subreddit)(e)
				}),
				m = e => t => ({
					...u(t, e),
					source: "predictions",
					action: "click",
					noun: "view_tournament"
				});
			var p = n("./src/reddit/hooks/useTracking.ts"),
				v = n("./src/reddit/selectors/posts.ts"),
				b = n("./src/reddit/components/Econ/Prediction/TournamentPostBody/ViewTournamentLink/index.m.less"),
				P = n.n(b);
			const {
				fbt: O
			} = n("./node_modules/fbt/lib/FbtPublic.js"), E = ({
				className: e,
				postId: t
			}) => {
				const n = Object(p.a)(),
					o = Object(s.e)(e => Object(v.U)(e, {
						postId: t
					}));
				return i.a.createElement(d.a, {
					className: Object(c.a)(P.a.viewTournament, e),
					to: `${null==o?void 0:o.url}predictions/`,
					onClick: () => n(m(t))
				}, O._("Go to Tournament", null, {
					hk: "1QaAgH"
				}))
			};
			var f = n("./src/reddit/components/Econ/Prediction/TournamentPostBody/v1/PredictionContainer/index.m.less"),
				x = n.n(f);

			function I() {
				return (I = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const h = ({
				className: e,
				...t
			}) => {
				return i.a.createElement("div", I({}, t, {
					className: Object(c.a)(e, x.a.container),
					onClick: e => {
						e.stopPropagation()
					}
				}))
			};
			var g = n("./src/reddit/models/Prediction/index.ts"),
				y = n("./src/reddit/selectors/poll/index.ts"),
				C = n("./src/reddit/selectors/user.ts"),
				_ = n("./src/reddit/components/Econ/Prediction/PredictionModal/index.tsx"),
				j = n("./src/reddit/components/Econ/Prediction/PredictionOption/index.tsx"),
				S = n("./src/reddit/components/Econ/Prediction/PredictionOption/SneakPeek.tsx"),
				T = n("./src/reddit/components/Econ/Prediction/VoteAnimation/index.tsx"),
				k = n("./src/reddit/selectors/subreddit.ts"),
				N = n("./src/reddit/components/Econ/Prediction/TournamentPostBody/v1/TournamentOverlay/index.m.less"),
				A = n.n(N);
			const {
				fbt: w
			} = n("./node_modules/fbt/lib/FbtPublic.js"), B = ({
				postId: e,
				subredditId: t,
				isLastPrediction: n
			}) => {
				const o = Object(p.a)(),
					r = Object(s.e)(e => Object(k.Q)(e, {
						subredditId: t
					}));
				return i.a.createElement(d.a, {
					className: A.a.container,
					to: `${null==r?void 0:r.url}predictions/`,
					onClick: () => o(m(e))
				}, i.a.createElement("div", {
					className: A.a.playTournament
				}, n ? w._("View Tournament", null, {
					hk: "4rKPbx"
				}) : w._("Keep Playing", null, {
					hk: "Xa82J"
				})))
			};
			var L = n("./src/reddit/actions/economics/helpers/index.ts"),
				V = n("./src/reddit/actions/economics/predictions/index.ts"),
				D = n("./src/reddit/actions/post.ts"),
				M = n("./src/reddit/components/Econ/Prediction/hooks/useDelayedUpvoteAnimation.tsx"),
				F = n("./src/reddit/helpers/trackers/predictions.ts"),
				U = n("./src/reddit/hooks/useToast.tsx"),
				z = n("./src/reddit/models/Vote/index.ts");
			const {
				fbt: H
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function R(e, t, n) {
				const o = Object(s.d)(),
					a = Object(s.e)(C.e),
					c = Object(s.e)(r.s),
					d = Object(p.a)(),
					l = Object(U.a)(),
					{
						startDelayedUpvoteAnimation: u
					} = Object(M.a)(n.id),
					{
						id: m,
						endsAt: v,
						options: b
					} = t,
					P = t.userSelection || t.selectedOptionId,
					{
						id: O,
						voteState: E
					} = n,
					[f, x] = i.a.useState(!1),
					[I, h] = i.a.useState(null),
					[y, _] = i.a.useState(!1),
					j = v < Date.now();
				return {
					isLoading: f,
					isShowingVoteAnimation: y,
					selectedOption: b.find(({
						id: e
					}) => e === I),
					selectOption: e => {
						j || P || h(e.id)
					},
					predict: async t => {
						if (t.currency === g.a.Coins && t.amount > a) return Object(L.promptUserToBuyMoreCoins)(), void d(F.a);
						if (j) return l(H._("Error: Failed to make prediction. This prediction has already ended", null, {
							hk: "22UWEr"
						})), void h(null);
						if (!m || !I) throw new Error("Invalid arguments, optionId and pollId must be strings");
						x(!0), d(Object(F.p)({
							pollId: m,
							selectedNumberTokens: t.amount
						}));
						try {
							await o(Object(V.p)({
								coinPackageId: t.id,
								selectedOptionId: I,
								price: t.amount,
								pollId: m,
								tournamentId: e,
								tournamentPostId: n.id
							})), c && E < z.a.upvoted && (o(Object(D.db)(O)), o(Object(D.db)(m)), u()), x(!1), h(null), _(!0)
						} catch (i) {
							x(!1), h(null), l(H._("Error: Failed to make prediction, please try again later", null, {
								hk: "1tECsx"
							}))
						}
					},
					cancelAction: i.a.useCallback(() => {
						h(null)
					}, []),
					hideAnimation: i.a.useCallback(() => {
						_(!1)
					}, [])
				}
			}
			var Q = n("./src/reddit/components/Econ/Prediction/TournamentPostBody/v1/TournamentPrediction/index.m.less"),
				J = n.n(Q);
			const K = ({
				prediction: e,
				tournamentId: t,
				subredditId: n,
				post: r,
				isLastPrediction: a
			}) => {
				const d = Object(s.e)(C.K),
					l = Object(s.e)(C.X),
					u = Object(s.e)(t => Object(y.g)(t, {
						postId: e.id
					})),
					[m, p] = Object(o.useState)(!1),
					{
						isLoading: v,
						isShowingVoteAnimation: b,
						selectedOption: P,
						selectOption: O,
						predict: E,
						cancelAction: f,
						hideAnimation: x
					} = R(t, e, r),
					{
						options: I,
						userSelection: h
					} = u || {},
					{
						endsAt: k,
						title: N,
						status: A,
						resolvedOptionId: w,
						options: L
					} = e,
					V = k < Date.now(),
					D = A === g.b.Cancelled || A === g.b.CancelInProgress,
					M = null != I ? I : L;
				return i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
					className: Object(c.a)(J.a.poll, {
						[J.a.nightMode]: l
					})
				}, i.a.createElement("p", {
					className: J.a.pollQuestion
				}, N), M.map(e => i.a.createElement(T.a, {
					endsAt: k,
					key: `prediction-option-${e.id}`,
					isShowingVoteAnimation: b && h === e.id,
					onAnimationEnd: x
				}, i.a.createElement(j.a, {
					disabled: b,
					isCancelled: D,
					isEnded: V,
					isSelected: h === e.id,
					needsResolution: !1,
					option: e,
					onClick: () => O(e),
					resolvedOptionId: w,
					tournamentId: t,
					userSelection: h,
					userIsLoggedOut: !d,
					votePercentage: (h || V || m) && e.voteCount && (null == u ? void 0 : u.totalVoters) ? Math.floor(e.voteCount / u.totalVoters * 100) : null,
					isShowingHint: m
				}))), !D && i.a.createElement(S.a, {
					disabled: b || m || !!h,
					isEnded: V,
					postId: r.id,
					userSelection: h,
					isShowingHint: m,
					tournamentId: t,
					onReveal: () => p(!0)
				})), !!P && i.a.createElement(_.b, {
					className: J.a.modal,
					isCreatingVote: v,
					onOverlayClick: f,
					onCancel: f,
					onPredict: E,
					option: P,
					pollId: e.id,
					subredditId: n,
					tournamentId: t,
					withOverlay: !0
				}), !!h && i.a.createElement(B, {
					postId: r.id,
					subredditId: n,
					isLastPrediction: a
				}))
			};
			var W = n("./src/reddit/helpers/predictions/index.ts");
			const Z = ({
				post: e
			}) => {
				const {
					tournamentId: t,
					predictions: n,
					status: o
				} = e.predictionTournament, s = function(e) {
					return i.a.useMemo(() => {
						if (!e || !e.length) return;
						const t = e.filter(e => !e.isSpoiler && !e.isNSFW).sort(W.c);
						return {
							prediction: t[0],
							isLastPrediction: t.length <= 1
						}
					}, [])
				}(n);
				return (null == s ? void 0 : s.prediction) && o !== a.a.Closed ? i.a.createElement(h, null, i.a.createElement(K, {
					subredditId: e.belongsTo.id,
					tournamentId: t,
					post: e,
					prediction: null == s ? void 0 : s.prediction,
					isLastPrediction: null == s ? void 0 : s.isLastPrediction
				})) : i.a.createElement(E, {
					postId: e.id
				})
			};
			var q = n("./src/reddit/contexts/PageLayer/index.tsx"),
				Y = n("./src/reddit/components/Econ/Prediction/TournamentPostBody/v2/PredictionContainer/index.m.less"),
				X = n.n(Y);

			function G() {
				return (G = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const $ = ({
				className: e,
				...t
			}) => {
				const n = Object(q.db)(),
					o = Object(q.x)(n);
				return i.a.createElement("div", G({}, t, {
					className: Object(c.a)(e, X.a.container, {
						[X.a.commentsPage]: o
					}),
					onClick: e => {
						e.stopPropagation()
					}
				}))
			};
			var ee = n("./node_modules/fbt/lib/FbtPublic.js"),
				te = n("./src/reddit/components/Econ/Prediction/TournamentSnoosImage/index.tsx"),
				ne = n("./src/config.ts"),
				oe = n("./src/reddit/components/Econ/Prediction/TournamentPostBody/v2/PredictionsCarousel/AllPredictedCard/Confetti/index.m.less"),
				ie = n.n(oe);

			function se() {
				return (se = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const re = ({
				className: e,
				...t
			}) => i.a.createElement("div", se({
				className: Object(c.a)(ie.a.container, e)
			}, t), i.a.createElement("img", {
				className: ie.a.left,
				src: `${ne.a.assetPath}/img/econ/predictions/confetti-bg.png`,
				alt: ee.fbt._("Confetti", null, {
					hk: "3dmR4h"
				})
			}), i.a.createElement("img", {
				className: ie.a.right,
				src: `${ne.a.assetPath}/img/econ/predictions/confetti-bg.png`,
				alt: ee.fbt._("Confetti", null, {
					hk: "3dmR4h"
				})
			}));
			var ae = n("./src/reddit/components/Econ/Prediction/TournamentPostBody/v2/PredictionsCarousel/AllPredictedCard/index.m.less"),
				ce = n.n(ae);
			const de = ({
				postId: e
			}) => i.a.createElement("section", {
				className: ce.a.container
			}, i.a.createElement(re, {
				className: ce.a.confetti
			}), i.a.createElement(te.a, {
				className: ce.a.image
			}), i.a.createElement("div", {
				className: ce.a.label
			}, i.a.createElement("div", {
				className: ce.a.header
			}, ee.fbt._("Your predictions are in!", null, {
				hk: "FZJZS"
			})), i.a.createElement("div", {
				className: ce.a.description
			}, ee.fbt._("May the odds be ever in your favor", null, {
				hk: "1Brw70"
			}))), i.a.createElement(E, {
				className: ce.a.cta,
				postId: e
			}));
			var le = n("./src/reddit/components/Econ/Prediction/TournamentPostBody/v2/PredictionsCarousel/PredictionsProgress/index.m.less"),
				ue = n.n(le);

			function me() {
				return (me = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const pe = ({
				value: e,
				count: t,
				className: n,
				...o
			}) => {
				const s = Math.floor(100 * e / t);
				return i.a.createElement("div", me({
					className: Object(c.a)(ue.a.container, n)
				}, o), i.a.createElement("div", {
					className: ue.a.bar
				}, i.a.createElement("div", {
					className: ue.a.progress,
					style: {
						width: `${s}%`
					}
				})), i.a.createElement("div", {
					className: ue.a.label
				}, ee.fbt._("{progress} of {count} predicted", [ee.fbt._param("progress", e.toString()), ee.fbt._param("count", t.toString())], {
					hk: "1dMoEh"
				})))
			};
			var ve = n("./src/reddit/icons/fonts/index.tsx"),
				be = n("./src/reddit/components/Econ/Prediction/PredictionCard/v2/index.tsx"),
				Pe = n("./src/reddit/components/Econ/Prediction/TournamentPostBody/v2/TournamentPrediction/index.m.less"),
				Oe = n.n(Pe);

			function Ee() {
				return (Ee = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const fe = ({
				prediction: e,
				tournamentId: t,
				subredditId: n,
				post: o,
				onPredict: s,
				...r
			}) => {
				const {
					isLoading: a,
					selectedOption: c,
					selectOption: d,
					predict: l,
					cancelAction: u
				} = R(t, e, o);
				return i.a.createElement(i.a.Fragment, null, i.a.createElement(be.a, Ee({
					prediction: e,
					selectedOptionId: c ? c.id : null,
					onSelectOption: d
				}, r)), !!c && i.a.createElement(_.b, {
					className: Oe.a.modal,
					isCreatingVote: a,
					onOverlayClick: u,
					onCancel: u,
					onPredict: async e => {
						await l(e), s && s()
					},
					option: c,
					pollId: e.id,
					subredditId: n,
					tournamentId: t,
					withOverlay: !0
				}))
			};
			var xe = n("./src/reddit/components/Econ/Prediction/TournamentPostBody/v2/PredictionsCarousel/index.m.less"),
				Ie = n.n(xe);
			const he = ({
					post: e,
					predictions: t
				}) => {
					const [n, o] = i.a.useState(!1), s = t.some(({
						userSelection: e,
						endsAt: t,
						predictionStatus: n
					}) => !e && t > Date.now() && n === g.b.Open), r = t.reduce((e, {
						userSelection: t
					}) => t ? e + 1 : e, 0), a = Object(p.a)(), {
						index: d,
						isFirstSlide: l,
						isLastSlide: m,
						nextSlide: v,
						prevSlide: b
					} = function(e) {
						const [t, n] = i.a.useState(0), o = 0 === t, s = t === e - 1;
						return {
							index: t,
							nextSlide: () => !s && n(t + 1),
							prevSlide: () => !o && n(t - 1),
							isFirstSlide: o,
							isLastSlide: s
						}
					}(s ? t.length : t.length + 1), P = !s && m;
					return i.a.useEffect(() => {
						const t = P ? (e => t => ({
							...u(t, e),
							source: "predictions",
							action: "view",
							noun: "predicted_all_post"
						}))(e.id) : (e => t => ({
							...u(t, e),
							source: "predictions",
							action: "view",
							noun: "predictions_post"
						}))(e.id);
						a(t)
					}, [e.id, d, P, a]), i.a.useEffect(() => {
						o(!1)
					}, [d]), i.a.createElement("div", {
						className: Ie.a.container
					}, i.a.createElement("div", null, !l && i.a.createElement("button", {
						className: Object(c.a)(Ie.a.slideButton, Ie.a.prev),
						onClick: () => {
							a((e => t => ({
								...u(t, e),
								source: "predictions",
								action: "click",
								noun: "previous_post"
							}))(e.id)), b()
						}
					}, i.a.createElement(ve.a, {
						name: "upvote",
						className: Ie.a.icon,
						isFilled: !0
					}))), !P && i.a.createElement(fe, {
						className: Ie.a.prediction,
						subredditId: e.belongsTo.id,
						tournamentId: e.predictionTournament.tournamentId,
						post: e,
						prediction: t[d],
						onPredict: () => o(!0)
					}), P && i.a.createElement(de, {
						postId: e.id
					}), i.a.createElement("div", null, !m && i.a.createElement("button", {
						className: Object(c.a)(Ie.a.slideButton, Ie.a.next, {
							[Ie.a.active]: n
						}),
						onClick: () => {
							a((e => t => ({
								...u(t, e),
								source: "predictions",
								action: "click",
								noun: "next_post"
							}))(e.id)), v()
						}
					}, i.a.createElement(ve.a, {
						name: "upvote",
						className: Ie.a.icon,
						isFilled: !0
					}))), !P && i.a.createElement(pe, {
						className: Ie.a.counter,
						value: r,
						count: t.length
					}))
				},
				ge = ({
					post: e
				}) => {
					const {
						tournamentId: t,
						status: n
					} = e.predictionTournament, o = Object(s.e)(e => Object(y.h)(e, t)), r = i.a.useMemo(() => o.filter(e => !e.isSpoiler && !e.isNSFW && !e.userSelection && !e.resolvedOptionId && e.predictionStatus === g.b.Open && e.endsAt > Date.now()).sort(W.a).map(e => e.id), [o.length]).map(e => o.find(t => t.id === e)).filter(e => Boolean(e));
					return n === a.a.Closed ? i.a.createElement(E, {
						postId: e.id
					}) : i.a.createElement($, null, i.a.createElement(he, {
						post: e,
						predictions: r
					}))
				},
				ye = e => {
					return Object(s.e)(r.x) ? i.a.createElement(ge, e) : i.a.createElement(Z, e)
				};
			t.default = ye
		},
		"./src/reddit/components/Econ/Prediction/TournamentPostBody/v1/PredictionContainer/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_2cp2BxgYi-UxqtRulkxE7F"
			}
		},
		"./src/reddit/components/Econ/Prediction/TournamentPostBody/v1/TournamentOverlay/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1xchl0Gt9_R639B1h0kj-N",
				playTournament: "_24EquK-CMZCRavYXOOnGE",
				showOverlay: "_2O655W5QzEY46Erifj2fzJ"
			}
		},
		"./src/reddit/components/Econ/Prediction/TournamentPostBody/v1/TournamentPrediction/index.m.less": function(e, t, n) {
			e.exports = {
				poll: "BebHcU-00JN7EVlBDuQYt",
				nightMode: "_135koLx-rNLofB0ohPK6Fp",
				pollQuestion: "_1QM5eUL3qrVfvJQ-eqUbLu"
			}
		},
		"./src/reddit/components/Econ/Prediction/TournamentPostBody/v2/PredictionContainer/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_2k-ARnFW1QfgSpVI5a9iMr",
				commentsPage: "J0hIrAJKypecWYMKdh381"
			}
		},
		"./src/reddit/components/Econ/Prediction/TournamentPostBody/v2/PredictionsCarousel/AllPredictedCard/Confetti/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_2nVW2c32bgT5pnL5UQiybh",
				left: "_2UOFAaLXMcrDjJ-2vtXvA-",
				right: "_32OHK0AzUCzA6EsjOHwl8m"
			}
		},
		"./src/reddit/components/Econ/Prediction/TournamentPostBody/v2/PredictionsCarousel/AllPredictedCard/index.m.less": function(e, t, n) {
			e.exports = {
				container: "nSY_BPoSSyOSp7H9E3JaD",
				confetti: "_1YMUGmpCPaciZIOxS3as5F",
				image: "_1Hvmqy2OCTW1aiQbidjya6",
				label: "_2WSlEHeZRsiddpsRnh6tH-",
				header: "_3YMD0FPmKuQDMpazGX6NT_",
				description: "_1OM28188QcSqL0bml2qhks",
				cta: "usqDPTsOn747jerw03cMz"
			}
		},
		"./src/reddit/components/Econ/Prediction/TournamentPostBody/v2/PredictionsCarousel/PredictionsProgress/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_11_uzH5MGrImnCMS7zch-E",
				bar: "_2M_lzEhEzT6vOp3BGNLdUC",
				progress: "_1y4dmWqVfzz-w6WjNwSOkv",
				label: "_8uX0LCx_qcfK9mZf7AD71"
			}
		},
		"./src/reddit/components/Econ/Prediction/TournamentPostBody/v2/PredictionsCarousel/index.m.less": function(e, t, n) {
			e.exports = {
				container: "JSKZlIPbL6RhcEmyq0TLz",
				prediction: "LXJhEH52HAaSHlKOmcpbs",
				counter: "_3XTPPKYvNIWu0kG3eavIsC",
				slideButton: "_2N7Qmy8zRVH55kU6N9PFAS",
				icon: "d3Bo2jRSNLbSB0JZkDm1Y",
				next: "_2WISAZ67pn140yjxzWe9_0",
				prev: "_3htaCzwa0kbRZ_xIhD7tiM",
				active: "Q6JOZEIrDhSLXUb4kLnIo"
			}
		},
		"./src/reddit/components/Econ/Prediction/TournamentPostBody/v2/TournamentPrediction/index.m.less": function(e, t, n) {
			e.exports = {
				predictionOptions: "_3JvjvyjmR0QpJRZRkMc06t"
			}
		},
		"./src/reddit/helpers/predictions/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return i
			})), n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return r
			}));
			var o = n("./src/reddit/models/Prediction/index.ts");
			const i = (e, t) => {
					const n = Date.now(),
						i = n <= e.endsAt,
						s = n <= t.endsAt,
						r = e.status === o.b.Cancelled || e.status === o.b.CancelInProgress;
					return r !== (t.status === o.b.Cancelled || t.status === o.b.CancelInProgress) ? r ? 1 : -1 : i !== s ? i ? -1 : 1 : i && e.selectedOptionId !== t.selectedOptionId ? e.selectedOptionId ? 1 : -1 : !e.resolvedOptionId != !t.resolvedOptionId ? e.resolvedOptionId ? 1 : -1 : i || e.selectedOptionId === t.selectedOptionId ? (e.totalVoteCount || 0) >= (t.totalVoteCount || 0) ? -1 : 1 : e.selectedOptionId ? -1 : 1
				},
				s = (e, t) => i({
					endsAt: e.endsAt,
					selectedOptionId: e.userSelection || null,
					resolvedOptionId: e.resolvedOptionId,
					totalVoteCount: e.totalVoteCount,
					status: e.predictionStatus
				}, {
					endsAt: t.endsAt,
					selectedOptionId: t.userSelection || null,
					resolvedOptionId: t.resolvedOptionId,
					totalVoteCount: t.totalVoteCount,
					status: t.predictionStatus
				}),
				r = (e, t) => {
					var n, o;
					const {
						pollData: s
					} = e, {
						pollData: r
					} = t;
					return s && r ? i({
						endsAt: null == s ? void 0 : s.votingEndTimestamp,
						selectedOptionId: null !== (n = null == s ? void 0 : s.userSelection) && void 0 !== n ? n : null,
						resolvedOptionId: null == s ? void 0 : s.resolvedOptionId,
						totalVoteCount: null == s ? void 0 : s.totalVoteCount,
						status: null == s ? void 0 : s.predictionStatus
					}, {
						endsAt: null == r ? void 0 : r.votingEndTimestamp,
						selectedOptionId: null !== (o = null == r ? void 0 : r.userSelection) && void 0 !== o ? o : null,
						resolvedOptionId: null == r ? void 0 : r.resolvedOptionId,
						totalVoteCount: null == r ? void 0 : r.totalVoteCount,
						status: null == r ? void 0 : r.predictionStatus
					}) : 0
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/index.f9eef3620c864d47b4a9.js.map