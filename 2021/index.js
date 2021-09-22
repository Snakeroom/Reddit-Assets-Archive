// https://www.redditstatic.com/desktop2x/index.4e0d85b7e08572a93244.js
// Retrieved at 9/22/2021, 9:50:06 AM by Reddit Dataminer v1.0.0
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
			var x = n("./src/reddit/components/Econ/Prediction/TournamentPostBody/v1/PredictionContainer/index.m.less"),
				f = n.n(x);

			function g() {
				return (g = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const I = ({
				className: e,
				...t
			}) => {
				return i.a.createElement("div", g({}, t, {
					className: Object(c.a)(e, f.a.container),
					onClick: e => {
						e.stopPropagation()
					}
				}))
			};
			var h = n("./src/reddit/models/Prediction/index.ts"),
				y = n("./src/reddit/selectors/poll/index.ts"),
				C = n("./src/reddit/selectors/user.ts"),
				j = n("./src/reddit/components/Econ/Prediction/PredictionModal/index.tsx"),
				_ = n("./src/reddit/components/Econ/Prediction/PredictionOption/index.tsx"),
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
				D = n("./src/reddit/actions/economics/predictions/index.ts"),
				V = n("./src/reddit/actions/post.ts"),
				M = n("./src/reddit/components/Econ/Prediction/hooks/useDelayedUpvoteAnimation.tsx"),
				F = n("./src/reddit/helpers/trackers/predictions.ts"),
				R = n("./src/reddit/hooks/useToast.tsx"),
				H = n("./src/reddit/models/Vote/index.ts");
			const {
				fbt: Q
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function U(e, t, n) {
				const o = Object(s.d)(),
					a = Object(s.e)(C.e),
					c = Object(s.e)(r.q),
					d = Object(p.a)(),
					l = Object(R.a)(),
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
					[x, f] = i.a.useState(!1),
					[g, I] = i.a.useState(null),
					[y, j] = i.a.useState(!1),
					_ = v < Date.now();
				return {
					isLoading: x,
					isShowingVoteAnimation: y,
					selectedOption: b.find(({
						id: e
					}) => e === g),
					selectOption: e => {
						_ || P || I(e.id)
					},
					predict: async t => {
						if (t.currency === h.a.Coins && t.amount > a) return Object(L.promptUserToBuyMoreCoins)(), void d(F.a);
						if (_) return l(Q._("Error: Failed to make prediction. This prediction has already ended", null, {
							hk: "22UWEr"
						})), void I(null);
						if (!m || !g) throw new Error("Invalid arguments, optionId and pollId must be strings");
						f(!0), d(Object(F.n)({
							pollId: m,
							selectedNumberTokens: t.amount
						}));
						try {
							await o(Object(D.o)({
								coinPackageId: t.id,
								selectedOptionId: g,
								price: t.amount,
								pollId: m,
								tournamentId: e,
								tournamentPostId: n.id
							})), c && E < H.a.upvoted && (o(Object(V.db)(O)), o(Object(V.db)(m)), u()), f(!1), I(null), j(!0)
						} catch (i) {
							f(!1), I(null), l(Q._("Error: Failed to make prediction, please try again later", null, {
								hk: "1tECsx"
							}))
						}
					},
					cancelAction: i.a.useCallback(() => {
						I(null)
					}, []),
					hideAnimation: i.a.useCallback(() => {
						j(!1)
					}, [])
				}
			}
			var J = n("./src/reddit/components/Econ/Prediction/TournamentPostBody/v1/TournamentPrediction/index.m.less"),
				K = n.n(J);
			const W = ({
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
						cancelAction: x,
						hideAnimation: f
					} = U(t, e, r),
					{
						options: g,
						userSelection: I
					} = u || {},
					{
						endsAt: k,
						title: N,
						status: A,
						resolvedOptionId: w,
						options: L
					} = e,
					D = k < Date.now(),
					V = A === h.b.Cancelled || A === h.b.CancelInProgress,
					M = null != g ? g : L;
				return i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
					className: Object(c.a)(K.a.poll, {
						[K.a.nightMode]: l
					})
				}, i.a.createElement("p", {
					className: K.a.pollQuestion
				}, N), M.map(e => i.a.createElement(T.a, {
					endsAt: k,
					key: `prediction-option-${e.id}`,
					isShowingVoteAnimation: b && I === e.id,
					onAnimationEnd: f
				}, i.a.createElement(_.a, {
					disabled: b,
					isCancelled: V,
					isEnded: D,
					isSelected: I === e.id,
					needsResolution: !1,
					option: e,
					onClick: () => O(e),
					resolvedOptionId: w,
					tournamentId: t,
					userSelection: I,
					userIsLoggedOut: !d,
					votePercentage: (I || D || m) && e.voteCount && (null == u ? void 0 : u.totalVoters) ? Math.floor(e.voteCount / u.totalVoters * 100) : null,
					isShowingHint: m
				}))), !V && i.a.createElement(S.a, {
					disabled: b || m || !!I,
					isEnded: D,
					postId: r.id,
					userSelection: I,
					isShowingHint: m,
					tournamentId: t,
					onReveal: () => p(!0)
				})), !!P && i.a.createElement(j.b, {
					className: K.a.modal,
					isCreatingVote: v,
					onOverlayClick: x,
					onCancel: x,
					onPredict: E,
					option: P,
					pollId: e.id,
					subredditId: n,
					tournamentId: t,
					withOverlay: !0
				}), !!I && i.a.createElement(B, {
					postId: r.id,
					subredditId: n,
					isLastPrediction: a
				}))
			};
			var z = n("./src/reddit/helpers/predictions/index.ts");
			const X = ({
				post: e
			}) => {
				const {
					tournamentId: t,
					predictions: n,
					status: o
				} = e.predictionTournament, s = function(e) {
					return i.a.useMemo(() => {
						if (!e || !e.length) return;
						const t = e.filter(e => !e.isSpoiler && !e.isNSFW).sort(z.a);
						return {
							prediction: t[0],
							isLastPrediction: t.length <= 1
						}
					}, [])
				}(n);
				return (null == s ? void 0 : s.prediction) && o !== a.a.Closed ? i.a.createElement(I, null, i.a.createElement(W, {
					subredditId: e.belongsTo.id,
					tournamentId: t,
					post: e,
					prediction: null == s ? void 0 : s.prediction,
					isLastPrediction: null == s ? void 0 : s.isLastPrediction
				})) : i.a.createElement(E, {
					postId: e.id
				})
			};
			var Y = n("./src/reddit/contexts/PageLayer/index.tsx"),
				Z = n("./src/reddit/components/Econ/Prediction/TournamentPostBody/v2/PredictionContainer/index.m.less"),
				q = n.n(Z);

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
				const n = Object(Y.db)(),
					o = Object(Y.x)(n);
				return i.a.createElement("div", G({}, t, {
					className: Object(c.a)(e, q.a.container, {
						[q.a.commentsPage]: o
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
			var le = n("./src/reddit/components/Econ/Prediction/TournamentPostBody/v2/PredictionsCarousel/SlidesCounter/index.m.less"),
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
				index: e,
				count: t,
				className: n,
				...o
			}) => {
				const s = Math.floor(100 * (e + 1) / t);
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
				}, ee.fbt._("{progress} of {count}", [ee.fbt._param("progress", (e + 1).toString()), ee.fbt._param("count", t.toString())], {
					hk: "4FR9HK"
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
			const xe = ({
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
				} = U(t, e, o);
				return i.a.createElement(i.a.Fragment, null, i.a.createElement(be.a, Ee({
					prediction: e,
					selectedOptionId: c ? c.id : null,
					onSelectOption: d
				}, r)), !!c && i.a.createElement(j.b, {
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
			var fe = n("./src/reddit/components/Econ/Prediction/TournamentPostBody/v2/PredictionsCarousel/index.m.less"),
				ge = n.n(fe);
			const Ie = ({
					post: e,
					predictions: t
				}) => {
					const [n, o] = i.a.useState(!1), s = t.some(({
						userSelection: e,
						endsAt: t,
						predictionStatus: n
					}) => !e && t > Date.now() && n !== h.b.Cancelled && n !== h.b.CancelInProgress), r = Object(p.a)(), {
						index: a,
						isFirstSlide: d,
						isLastSlide: l,
						nextSlide: m,
						prevSlide: v
					} = function(e) {
						const [t, n] = i.a.useState(0), o = 0 === t, s = t === e - 1;
						return {
							index: t,
							nextSlide: () => !s && n(t + 1),
							prevSlide: () => !o && n(t - 1),
							isFirstSlide: o,
							isLastSlide: s
						}
					}(s ? t.length : t.length + 1), b = !s && l;
					return i.a.useEffect(() => {
						const t = b ? (e => t => ({
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
						r(t)
					}, [e.id, a, b, r]), i.a.useEffect(() => {
						o(!1)
					}, [a]), i.a.createElement("div", {
						className: ge.a.container
					}, i.a.createElement("div", null, !d && i.a.createElement("button", {
						className: Object(c.a)(ge.a.slideButton, ge.a.prev),
						onClick: () => {
							r((e => t => ({
								...u(t, e),
								source: "predictions",
								action: "click",
								noun: "previous_post"
							}))(e.id)), v()
						}
					}, i.a.createElement(ve.a, {
						name: "upvote",
						className: ge.a.icon,
						isFilled: !0
					}))), !b && i.a.createElement(xe, {
						className: ge.a.prediction,
						subredditId: e.belongsTo.id,
						tournamentId: e.predictionTournament.tournamentId,
						post: e,
						prediction: t[a],
						onPredict: () => o(!0)
					}), b && i.a.createElement(de, {
						postId: e.id
					}), i.a.createElement("div", null, !l && i.a.createElement("button", {
						className: Object(c.a)(ge.a.slideButton, ge.a.next, {
							[ge.a.active]: n
						}),
						onClick: () => {
							r((e => t => ({
								...u(t, e),
								source: "predictions",
								action: "click",
								noun: "next_post"
							}))(e.id)), m()
						}
					}, i.a.createElement(ve.a, {
						name: "upvote",
						className: ge.a.icon,
						isFilled: !0
					}))), !b && i.a.createElement(pe, {
						className: ge.a.counter,
						index: a,
						count: t.length
					}))
				},
				he = ({
					post: e
				}) => {
					const {
						status: t
					} = e.predictionTournament, n = i.a.useMemo(() => {
						const {
							predictions: t
						} = e.predictionTournament;
						return t ? t.filter(e => !e.isSpoiler && !e.isNSFW).sort(z.a) : []
					}, []), o = Object(s.e)(e => n.map(t => Object(y.g)(e, {
						postId: t.id
					})).filter(e => null !== e));
					return t === a.a.Closed ? i.a.createElement(E, {
						postId: e.id
					}) : i.a.createElement($, null, i.a.createElement(Ie, {
						post: e,
						predictions: o
					}))
				},
				ye = e => {
					return Object(s.e)(r.u) ? i.a.createElement(he, e) : i.a.createElement(X, e)
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
		"./src/reddit/components/Econ/Prediction/TournamentPostBody/v2/PredictionsCarousel/SlidesCounter/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1sANDA92mXEySjNLXgsc9v",
				bar: "CtWizCvXcD1Qxp39nIP9Y",
				progress: "DvMDBvHg9kdwVy26HvQ6P",
				label: "_1y5vMfR9-IG-BoRigvyDLk"
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
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return s
			}));
			var o = n("./src/reddit/models/Prediction/index.ts");
			const i = (e, t) => {
					const n = Date.now(),
						i = n <= e.endsAt,
						s = n <= t.endsAt,
						r = e.status === o.b.Cancelled || e.status === o.b.CancelInProgress;
					return r !== (t.status === o.b.Cancelled || t.status === o.b.CancelInProgress) ? r ? 1 : -1 : i !== s ? i ? -1 : 1 : i && e.selectedOptionId !== t.selectedOptionId ? e.selectedOptionId ? 1 : -1 : !e.resolvedOptionId != !t.resolvedOptionId ? e.resolvedOptionId ? 1 : -1 : i || e.selectedOptionId === t.selectedOptionId ? (e.totalVoteCount || 0) >= (t.totalVoteCount || 0) ? -1 : 1 : e.selectedOptionId ? -1 : 1
				},
				s = (e, t) => {
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/index.4e0d85b7e08572a93244.js.map