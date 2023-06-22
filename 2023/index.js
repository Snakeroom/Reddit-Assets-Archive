// https://www.redditstatic.com/desktop2x/index.754a62f483399c999ba0.js
// Retrieved at 6/21/2023, 9:00:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["index"], {
		"./src/reddit/components/Econ/Audio/MuteIcon.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				i = n.n(o);
			t.a = e => {
				let {
					className: t
				} = e;
				return i.a.createElement("svg", {
					className: t,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, i.a.createElement("g", {
					id: "icons_flat",
					"data-name": "icons flat"
				}, i.a.createElement("path", {
					d: "M13.5,9.5v-5A3.493,3.493,0,0,0,6.723,3.3l6.724,6.723A3.524,3.524,0,0,0,13.5,9.5Z"
				}), i.a.createElement("path", {
					d: "M15.5,9.5a5.472,5.472,0,0,1-.436,2.144l1.487,1.486A7.428,7.428,0,0,0,17.5,9.5Z"
				}), i.a.createElement("path", {
					d: "M2.341,4.1,6.5,8.258V9.5A3.5,3.5,0,0,0,10,13a3.441,3.441,0,0,0,1.059-.183l1.529,1.529A5.449,5.449,0,0,1,10,15,5.506,5.506,0,0,1,4.5,9.5h-2A7.5,7.5,0,0,0,9,16.925V18H7.581v2h4.838V18H11V16.925a7.388,7.388,0,0,0,3.026-1.141l1.044,1.044,1.414-1.414L3.755,2.686Z"
				})))
			}
		},
		"./src/reddit/components/Econ/Audio/index.m.less": function(e, t, n) {
			e.exports = {
				liveContainer: "reBgd-KYxGiWr_ZyzPgr_",
				userRow: "poHPrsWD-JtPCRh7foOm-",
				isListener: "_3DcaFqbAKhkVLYT6i2vxLy",
				speakerRings: "_1XlH7yy1d0pGBQ0hDDAaDv",
				listener: "_3fwbxY1I7EhKfr8MK7xT0S",
				speaker: "_1zEocOo_0euorSuKdx4-t2",
				snoovatar: "_23HWId-tu5O6LulDxLoVD1",
				userIcon: "Xzl_H3G7Qyd756Y0rQz4w",
				classic: "_2XdJHCLvUWJ2gdGBnugD5t",
				buttonContainer: "_2yhW3k4B2CUUSvt-3mqV3S",
				muteContainer: "_3mxKqH41iEa2lxIov7Eup-",
				muteIcon: "_18bneLE5nnOdUrY8P-eepo",
				fullRow: "_2cJzNEK-EGk9V7LDTIEFb-",
				endedContainer: "_21e_ZHJXEi7zMZ6XWWBz",
				nightMode: "z6LY0qX0g0puWE-RPF8XB",
				liveClassicContainer: "_3JLTqaLlFv8aPfzi9eQazu",
				classicSpeaker: "QsNKjj4EDQH2hYFYQB6T4",
				snoovatarHeadshotContainer: "_28VC5AU-z3J-h80HdMusUT",
				endedClassicContainer: "_2YXJIDv8TLzRj5vNdYs-_t",
				metaStatus: "OvWqIzFfbWF0I-5FMZ18I",
				isLive: "_3Vqz8YzNczoVWpOtpwXAit",
				processingButton: "nxYqAuGeco2RA9q0e9ECw"
			}
		},
		"./src/reddit/components/Econ/Audio/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "AudioPostBody", (function() {
				return d
			}));
			var o = n("./node_modules/react/index.js"),
				i = n.n(o),
				s = n("./src/reddit/components/Econ/Audio/index.m.less"),
				r = n.n(s),
				a = n("./src/reddit/components/Econ/Audio/MuteIcon.tsx");
			const {
				fbt: c
			} = n("./node_modules/fbt/lib/FbtPublic.js"), d = () => i.a.createElement("div", {
				className: r.a.endedContainer,
				"data-testid": "audioroom-card-ended"
			}, i.a.createElement(a.a, {
				className: r.a.muteIcon
			}), i.a.createElement("p", null, c._("This talk has ended", null, {
				hk: "3ygafp"
			})));
			t.default = d
		},
		"./src/reddit/components/Econ/Prediction/Confetti/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_30UqRfQUvAM856xCCnxuZt",
				left: "NGXhDTfdYyHsV0bMiz8c9",
				right: "_1gN69CDTTgxbquzyeJIRdg"
			}
		},
		"./src/reddit/components/Econ/Prediction/Confetti/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			}));
			var o = n("./src/config.ts"),
				i = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/classNames/index.ts"),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				c = n("./src/reddit/components/Econ/Prediction/Confetti/index.m.less"),
				d = n.n(c);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const u = e => {
				let {
					className: t,
					...n
				} = e;
				return a.a.createElement("div", l({
					className: Object(s.a)(d.a.container, t)
				}, n), a.a.createElement("img", {
					className: d.a.left,
					src: `${o.a.assetPath}/img/econ/predictions/confetti-bg.png`,
					alt: i.fbt._("Confetti", null, {
						hk: "3dmR4h"
					})
				}), a.a.createElement("img", {
					className: d.a.right,
					src: `${o.a.assetPath}/img/econ/predictions/confetti-bg.png`,
					alt: i.fbt._("Confetti", null, {
						hk: "3dmR4h"
					})
				}))
			}
		},
		"./src/reddit/components/Econ/Prediction/TournamentPostBody/PredictionContainer/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_2Dw9el2B-C-Ikbg2Trf7L",
				commentsPage: "_36LgwIKlEdhPmXqH-vw8p3",
				isNightMode: "_2hQlKqsLOn0WVHfCSTp8XL"
			}
		},
		"./src/reddit/components/Econ/Prediction/TournamentPostBody/PredictionPostCard/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3Lv5_clzP98paVWd9bEsq_",
				confetti: "_14q9effqT9K0TOau4WpB_",
				image: "_1FBxVxK8Kn-3M61Kqc4_Tl",
				label: "_2DTXJvvGLIN4wSi4FtFT5X",
				header: "_1zpEu6GGrt_Y2cqZaOAVBz",
				cta: "WKjr3OT4IQGzkV_W-EOmt"
			}
		},
		"./src/reddit/components/Econ/Prediction/TournamentPostBody/PredictionsCarousel/PredictionsProgress/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_29GJkGK9k31HqxcpLLI6CH",
				isNightMode: "sjtE_RClzZwrVdw7zjr05",
				bar: "_3fupgDP1kL5uG5LSxX4cuW",
				progress: "_2VL73TkA-2E5iIyfE8ARal",
				label: "_3nsvp8ZfivjpRU6RchS5P4"
			}
		},
		"./src/reddit/components/Econ/Prediction/TournamentPostBody/PredictionsCarousel/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3jtHFYeWDSTWv7IwY44YFF",
				prediction: "_1yHiJTKFv4fhpF6HvGmLHM",
				counter: "rMnnGASpGLsJFj08qWey5",
				slideButton: "MZr1JvyrAhiVYTyvUs7-N",
				prev: "_5jZ6bMxSyPnhD6asgYif5",
				next: "_2iUTM1uTR3Mcz2wT94nqKV",
				icon: "_3GpU0JZEut3g6kn0j11U3z",
				isNightMode: "_3ISgoRCSVb55xtr0ajfGi1",
				active: "_3MjXOYl5OuDMtFmE479oSj"
			}
		},
		"./src/reddit/components/Econ/Prediction/TournamentPostBody/TournamentPrediction/index.m.less": function(e, t, n) {
			e.exports = {
				predictionOptions: "_3OoOPSijiHrXMa7mYLM2Xi"
			}
		},
		"./src/reddit/components/Econ/Prediction/TournamentPostBody/ViewTournamentLink/index.m.less": function(e, t, n) {
			e.exports = {
				viewTournament: "_16Mu-Vn-rTtULDzx2p5T80"
			}
		},
		"./src/reddit/components/Econ/Prediction/TournamentPostBody/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "TournamentPostBody", (function() {
				return ie
			}));
			var o = n("./node_modules/react/index.js"),
				i = n.n(o),
				s = n("./node_modules/react-redux/es/index.js"),
				r = n("./src/reddit/helpers/predictions/index.ts"),
				a = n("./src/reddit/selectors/telemetry.ts");
			const c = (e, t) => ({
				...Object(a.o)(e),
				poll: Object(a.P)(e, t),
				post: Object(a.K)(e, t),
				predictions: Object(a.Q)(e, t),
				subreddit: Object(a.lb)(e)
			});
			var d = n("./src/reddit/hooks/useTracking.ts"),
				l = n("./src/reddit/models/Prediction/index.ts"),
				u = n("./src/reddit/models/Prediction/Tournament/index.ts"),
				m = n("./src/reddit/selectors/poll/index.ts"),
				p = n("./src/lib/classNames/index.ts"),
				b = n("./src/reddit/contexts/PageLayer/index.tsx"),
				v = n("./src/reddit/selectors/user.ts"),
				f = n("./src/reddit/components/Econ/Prediction/TournamentPostBody/PredictionContainer/index.m.less"),
				x = n.n(f);

			function E() {
				return (E = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const O = e => {
				let {
					className: t,
					...n
				} = e;
				const o = Object(b.ib)(),
					r = Object(b.y)(o),
					a = Object(s.e)(v.fb);
				return i.a.createElement("div", E({}, n, {
					className: Object(p.a)(t, x.a.container, {
						[x.a.commentsPage]: r,
						[x.a.isNightMode]: a
					}),
					onClick: e => {
						e.stopPropagation()
					}
				}))
			};
			var P = n("./src/reddit/components/Econ/Prediction/Confetti/index.tsx"),
				_ = n("./src/reddit/controls/InternalLink/index.tsx"),
				g = n("./src/reddit/selectors/posts.ts"),
				h = n("./src/reddit/components/Econ/Prediction/TournamentPostBody/ViewTournamentLink/index.m.less"),
				j = n.n(h);
			const {
				fbt: I
			} = n("./node_modules/fbt/lib/FbtPublic.js"), C = e => {
				let {
					className: t,
					postId: n
				} = e;
				const o = Object(d.a)(),
					r = Object(s.e)(e => Object(g.U)(e, {
						postId: n
					}));
				return i.a.createElement(_.default, {
					className: Object(p.a)(j.a.viewTournament, t),
					to: `${null==r?void 0:r.url}predictions/`,
					onClick: () => o((e => t => ({
						...c(t, e),
						source: "predictions",
						action: "click",
						noun: "view_tournament"
					}))(n))
				}, I._("Go to Tournament", null, {
					hk: "1QaAgH"
				}))
			};
			var y = n("./src/reddit/components/Econ/Prediction/TournamentSnoosImage/index.tsx"),
				T = n("./src/reddit/components/Econ/Prediction/TournamentPostBody/PredictionPostCard/index.m.less"),
				A = n.n(T);
			const {
				fbt: S
			} = n("./node_modules/fbt/lib/FbtPublic.js"), N = e => {
				let {
					header: t,
					description: n,
					cta: o
				} = e;
				return i.a.createElement("section", {
					className: A.a.container
				}, i.a.createElement(P.a, {
					className: A.a.confetti
				}), i.a.createElement(y.a, {
					className: A.a.image
				}), i.a.createElement("div", {
					className: A.a.label
				}, i.a.createElement("div", {
					className: A.a.header
				}, t), i.a.createElement("div", null, n)), o)
			}, w = e => {
				let {
					postId: t
				} = e;
				const n = Object(s.e)(e => Object(g.U)(e, {
					postId: t
				}));
				return i.a.createElement(N, {
					header: S._("Tournament has ended!", null, {
						hk: "2mCj47"
					}),
					description: S._("Your destiny has been decided", null, {
						hk: "vGyB7"
					}),
					cta: i.a.createElement(_.default, {
						className: A.a.cta,
						to: `${null==n?void 0:n.url}predictions/`
					}, S._("View Results", null, {
						hk: "1UFWjc"
					}))
				})
			}, k = e => {
				let {
					postId: t
				} = e;
				return i.a.createElement(N, {
					header: S._("Your predictions are in!", null, {
						hk: "FZJZS"
					}),
					description: S._("May the odds be ever in your favor", null, {
						hk: "1Brw70"
					}),
					cta: i.a.createElement(C, {
						className: A.a.cta,
						postId: t
					})
				})
			};
			var L = n("./node_modules/fbt/lib/FbtPublic.js"),
				B = n("./src/reddit/components/Econ/Prediction/TournamentPostBody/PredictionsCarousel/PredictionsProgress/index.m.less"),
				M = n.n(B);

			function V() {
				return (V = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const F = e => {
				let {
					value: t,
					count: n,
					className: o,
					...r
				} = e;
				const a = Object(s.e)(v.fb),
					c = Math.floor(100 * t / n);
				return i.a.createElement("div", V({
					className: Object(p.a)(M.a.container, o, {
						[M.a.isNightMode]: a
					})
				}, r), i.a.createElement("div", {
					className: M.a.bar
				}, i.a.createElement("div", {
					className: M.a.progress,
					style: {
						width: `${c}%`
					}
				})), i.a.createElement("div", {
					className: M.a.label
				}, L.fbt._("{progress} of {count} predicted", [L.fbt._param("progress", t.toString()), L.fbt._param("count", n.toString())], {
					hk: "1dMoEh"
				})))
			};
			var D = n("./src/reddit/icons/fonts/index.tsx"),
				z = n("./src/reddit/components/Econ/Prediction/PredictionCard/PredictionBody/index.tsx"),
				H = n("./src/reddit/components/Econ/Prediction/PredictionModal/index.tsx"),
				U = n("./src/reddit/actions/economics/helpers/index.ts"),
				W = n("./src/reddit/actions/economics/predictions/index.ts"),
				Y = n("./src/reddit/actions/post.ts"),
				q = n("./src/reddit/components/Econ/Prediction/hooks/useDelayedUpvoteAnimation.tsx"),
				G = n("./src/reddit/helpers/trackers/predictions.ts"),
				K = n("./src/reddit/hooks/useToast.tsx"),
				X = n("./src/reddit/models/Vote/index.ts"),
				R = n("./src/reddit/selectors/experiments/econ/index.ts");
			const {
				fbt: Z
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var J = n("./src/reddit/components/Econ/Prediction/TournamentPostBody/TournamentPrediction/index.m.less"),
				Q = n.n(J);

			function $() {
				return ($ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const ee = e => {
				let {
					prediction: t,
					tournamentId: n,
					post: o,
					onPredict: r,
					...a
				} = e;
				const {
					isLoading: c,
					selectedOption: u,
					selectOption: m,
					predict: p,
					cancelAction: b
				} = function(e, t, n) {
					const o = Object(s.d)(),
						r = Object(s.e)(v.g),
						a = Object(s.e)(R.h),
						c = Object(d.a)(),
						u = Object(K.a)(),
						{
							startDelayedUpvoteAnimation: m
						} = Object(q.a)(n.id),
						{
							id: p,
							endsAt: b,
							options: f
						} = t,
						{
							id: x,
							voteState: E
						} = n,
						O = t.userSelection,
						[P, _] = i.a.useState(!1),
						[g, h] = i.a.useState(null),
						[j, I] = i.a.useState(!1),
						C = b < Date.now();
					return {
						isLoading: P,
						isShowingVoteAnimation: j,
						selectedOption: f.find(e => {
							let {
								id: t
							} = e;
							return t === g
						}),
						selectOption: e => {
							C || O || h(e.id)
						},
						predict: async t => {
							if (t.currency === l.a.Coins && t.amount > r) return Object(U.promptUserToBuyMoreCoins)(), void c(G.b);
							if (C) return u(Z._("Error: Failed to make prediction. This prediction has already ended", null, {
								hk: "22UWEr"
							})), void h(null);
							if (!p || !g) throw new Error("Invalid arguments, optionId and pollId must be strings");
							_(!0), c(Object(G.n)({
								pollId: p,
								selectedNumberTokens: t.amount
							}));
							try {
								await o(Object(W.s)({
									coinPackageId: t.id,
									selectedOptionId: g,
									price: t.amount,
									pollId: p,
									tournamentId: e,
									tournamentPostId: n.id
								})), a && E < X.a.upvoted && (o(Object(Y.ib)(x)), o(Object(Y.ib)(p)), m()), _(!1), h(null), I(!0)
							} catch (i) {
								_(!1), h(null), u(Z._("Error: Failed to make prediction, please try again later", null, {
									hk: "1tECsx"
								}))
							}
						},
						cancelAction: i.a.useCallback(() => {
							h(null)
						}, []),
						hideAnimation: i.a.useCallback(() => {
							I(!1)
						}, [])
					}
				}(n, t, o);
				return i.a.createElement(i.a.Fragment, null, i.a.createElement(z.a, $({
					prediction: t,
					selectedOptionId: u ? u.id : null,
					onSelectOption: m
				}, a)), !!u && i.a.createElement(H.a, {
					className: Q.a.modal,
					isCreatingVote: c,
					onOverlayClick: b,
					onCancel: b,
					onPredict: async e => {
						await p(e), r && r()
					},
					option: u,
					pollId: t.id,
					tournamentId: n,
					withOverlay: !0
				}))
			};
			var te = n("./src/reddit/components/Econ/Prediction/TournamentPostBody/PredictionsCarousel/index.m.less"),
				ne = n.n(te);
			const oe = e => {
					let {
						post: t,
						predictions: n
					} = e;
					const o = Object(s.e)(v.fb),
						r = n.reduce((e, t) => {
							let {
								userSelection: n
							} = t;
							return n ? e + 1 : e
						}, 0),
						a = Object(d.a)(),
						{
							index: l,
							isFirstSlide: u,
							isLastSlide: m,
							nextSlide: b,
							prevSlide: f
						} = function(e) {
							const [t, n] = i.a.useState(0), o = 0 === t, s = t === e - 1;
							return {
								index: t,
								nextSlide: () => !s && n(t + 1),
								prevSlide: () => !o && n(t - 1),
								isFirstSlide: o,
								isLastSlide: s
							}
						}(n.length);
					return i.a.createElement("div", {
						className: Object(p.a)(ne.a.container, {
							[ne.a.isNightMode]: o
						})
					}, n.map((e, n) => Math.abs(l - n) > 1 ? null : i.a.createElement(ee, {
						key: e.id,
						className: ne.a.prediction,
						tournamentId: t.predictionTournament.tournamentId,
						post: t,
						prediction: e,
						onPredict: b,
						style: {
							left: n < l ? "-100%" : n > l ? "100%" : 0
						}
					})), !u && i.a.createElement("button", {
						className: Object(p.a)(ne.a.slideButton, ne.a.prev),
						onClick: () => {
							a((e => t => ({
								...c(t, e),
								source: "predictions",
								action: "click",
								noun: "previous_post"
							}))(t.id)), f()
						}
					}, i.a.createElement(D.a, {
						name: "caret_left",
						className: ne.a.icon,
						isFilled: !0
					})), !m && i.a.createElement("button", {
						className: Object(p.a)(ne.a.slideButton, ne.a.next),
						onClick: () => {
							a((e => t => ({
								...c(t, e),
								source: "predictions",
								action: "click",
								noun: "next_post"
							}))(t.id)), b()
						}
					}, i.a.createElement(D.a, {
						name: "caret_right",
						className: ne.a.icon,
						isFilled: !0
					})), i.a.createElement(F, {
						className: ne.a.counter,
						value: r,
						count: n.length
					}))
				},
				ie = e => {
					let {
						post: t
					} = e;
					const {
						tournamentId: n,
						status: o
					} = t.predictionTournament, a = Object(d.a)(), p = Object(s.e)(e => Object(m.h)(e, n)), b = i.a.useMemo(() => p.filter(e => !e.isSpoiler && !e.isNSFW && !e.resolvedOptionId && e.predictionStatus === l.b.Open && e.endsAt > Date.now()).sort(r.a).map(e => e.id), [p.length]).map(e => p.find(t => t.id === e)).filter(e => Boolean(e)), v = b.some(e => {
						let {
							userSelection: t,
							endsAt: n,
							predictionStatus: o
						} = e;
						return !t && n > Date.now() && o === l.b.Open
					});
					return i.a.useEffect(() => {
						if (o === u.a.Closed) return;
						const e = v ? (e => t => ({
							...c(t, e),
							source: "predictions",
							action: "view",
							noun: "predictions_post"
						}))(t.id) : (e => t => ({
							...c(t, e),
							source: "predictions",
							action: "view",
							noun: "predicted_all_post"
						}))(t.id);
						a(e)
					}, [t.id, o, v, a]), o === u.a.Closed ? i.a.createElement(O, null, i.a.createElement(w, {
						postId: t.id
					})) : i.a.createElement(O, null, v ? i.a.createElement(oe, {
						post: t,
						predictions: b
					}) : i.a.createElement(k, {
						postId: t.id
					}))
				};
			t.default = ie
		},
		"./src/reddit/components/Econ/Prediction/TournamentSnoosImage/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				i = n.n(o),
				s = n("./src/config.ts");
			const {
				fbt: r
			} = n("./node_modules/fbt/lib/FbtPublic.js"), a = `\n  ${s.a.assetPath}/img/econ/predictions/waiting.png,\n  ${s.a.assetPath}/img/econ/predictions/waiting@2x.png 2x,\n  ${s.a.assetPath}/img/econ/predictions/waiting@3x.png 3x,\n`;
			t.a = e => i.a.createElement("img", {
				className: e.className,
				srcSet: a,
				src: `${s.a.assetPath}/img/econ/predictions/waiting@2x.png 2x`,
				alt: r._("Snoos gazing into a crystal ball", null, {
					hk: "1XM1Zp"
				})
			})
		},
		"./src/reddit/helpers/predictions/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
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
					return r !== (t.status === o.b.Cancelled || t.status === o.b.CancelInProgress) ? r ? 1 : -1 : i !== s ? i ? -1 : 1 : i && e.selectedOptionId !== t.selectedOptionId ? e.selectedOptionId ? 1 : -1 : !e.resolvedOptionId != !t.resolvedOptionId ? e.resolvedOptionId ? 1 : -1 : i || e.selectedOptionId === t.selectedOptionId ? e.createdAt > t.createdAt ? -1 : 1 : e.selectedOptionId ? -1 : 1
				},
				s = (e, t) => i({
					createdAt: e.createdAt,
					endsAt: e.endsAt,
					selectedOptionId: e.userSelection || null,
					resolvedOptionId: e.resolvedOptionId,
					totalVoteCount: e.totalVoteCount,
					status: e.predictionStatus
				}, {
					createdAt: t.createdAt,
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
						createdAt: e.created,
						endsAt: null == s ? void 0 : s.votingEndTimestamp,
						selectedOptionId: null !== (n = null == s ? void 0 : s.userSelection) && void 0 !== n ? n : null,
						resolvedOptionId: null == s ? void 0 : s.resolvedOptionId,
						totalVoteCount: null == s ? void 0 : s.totalVoteCount,
						status: null == s ? void 0 : s.predictionStatus
					}, {
						createdAt: t.created,
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/index.754a62f483399c999ba0.js.map