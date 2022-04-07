// https://www.redditstatic.com/desktop2x/index.77f79b3319e7be4e52d1.js
// Retrieved at 4/7/2022, 1:00:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["index"], {
		"./src/reddit/components/Econ/Audio/MuteIcon.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				a = n.n(o);
			t.a = e => {
				let {
					className: t
				} = e;
				return a.a.createElement("svg", {
					className: t,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, a.a.createElement("g", {
					id: "icons_flat",
					"data-name": "icons flat"
				}, a.a.createElement("path", {
					d: "M13.5,9.5v-5A3.493,3.493,0,0,0,6.723,3.3l6.724,6.723A3.524,3.524,0,0,0,13.5,9.5Z"
				}), a.a.createElement("path", {
					d: "M15.5,9.5a5.472,5.472,0,0,1-.436,2.144l1.487,1.486A7.428,7.428,0,0,0,17.5,9.5Z"
				}), a.a.createElement("path", {
					d: "M2.341,4.1,6.5,8.258V9.5A3.5,3.5,0,0,0,10,13a3.441,3.441,0,0,0,1.059-.183l1.529,1.529A5.449,5.449,0,0,1,10,15,5.506,5.506,0,0,1,4.5,9.5h-2A7.5,7.5,0,0,0,9,16.925V18H7.581v2h4.838V18H11V16.925a7.388,7.388,0,0,0,3.026-1.141l1.044,1.044,1.414-1.414L3.755,2.686Z"
				})))
			}
		},
		"./src/reddit/components/Econ/Audio/SpeakerRings.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				a = n.n(o);
			t.a = e => {
				let {
					className: t
				} = e;
				return a.a.createElement("svg", {
					className: t,
					width: "226",
					height: "226",
					viewBox: "0 0 226 226",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, a.a.createElement("g", {
					opacity: "0.8"
				}, a.a.createElement("rect", {
					opacity: "0.8",
					x: "36.7704",
					y: "36.7703",
					width: "152.462",
					height: "152.462",
					rx: "76.2308",
					stroke: "url(#paint0_linear)",
					strokeWidth: "4"
				}), a.a.createElement("rect", {
					opacity: "0.5",
					x: "18.8851",
					y: "18.8822",
					width: "188.231",
					height: "188.231",
					rx: "94.1153",
					stroke: "url(#paint1_linear)",
					strokeWidth: "3"
				}), a.a.createElement("rect", {
					opacity: "0.3",
					x: "1.25",
					y: "1.25",
					width: "223.5",
					height: "223.5",
					rx: "111.75",
					stroke: "url(#paint2_linear)",
					strokeWidth: "2.5"
				})), a.a.createElement("defs", null, a.a.createElement("linearGradient", {
					id: "paint0_linear",
					x1: "17.886",
					y1: "34.7703",
					x2: "213.283",
					y2: "40.3684",
					gradientUnits: "userSpaceOnUse"
				}, a.a.createElement("stop", {
					stopColor: "#FF538C"
				}), a.a.createElement("stop", {
					offset: "0.989583",
					stopColor: "#FFAB39"
				})), a.a.createElement("linearGradient", {
					id: "paint1_linear",
					x1: "-3.25127",
					y1: "17.3822",
					x2: "235.567",
					y2: "24.2243",
					gradientUnits: "userSpaceOnUse"
				}, a.a.createElement("stop", {
					stopColor: "#FF538C"
				}), a.a.createElement("stop", {
					offset: "0.989583",
					stopColor: "#FFAB39"
				})), a.a.createElement("linearGradient", {
					id: "paint2_linear",
					x1: "-24.3885",
					y1: "2.87774e-05",
					x2: "257.851",
					y2: "8.08615",
					gradientUnits: "userSpaceOnUse"
				}, a.a.createElement("stop", {
					stopColor: "#FF538C"
				}), a.a.createElement("stop", {
					offset: "0.989583",
					stopColor: "#FFAB39"
				}))))
			}
		},
		"./src/reddit/components/Econ/Audio/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "AudioPostBody", (function() {
				return E
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./src/config.ts"),
				a = n("./node_modules/react/index.js"),
				s = n.n(a),
				r = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/controls/Button/index.tsx"),
				d = n("./src/reddit/models/Audio/index.ts"),
				l = n("./src/reddit/selectors/user.ts"),
				u = n("./src/reddit/components/Econ/Audio/index.m.less"),
				m = n.n(u),
				p = n("./src/reddit/components/Econ/Audio/MuteIcon.tsx"),
				b = n("./src/reddit/components/Econ/Audio/SpeakerRings.tsx");
			const {
				fbt: v
			} = n("./node_modules/fbt/lib/FbtPublic.js"), E = e => {
				let {
					post: t
				} = e;
				const {
					audioRoom: n
				} = t, {
					recordingStatus: u
				} = n, [E, f] = Object(a.useState)(new Set), [g, h] = Object(a.useState)(new Set), x = Object(r.e)(l.db), [O, P] = Object(a.useState)(-1), _ = e => {
					const t = e ? Array.from(g) : Array.from(E);
					return null == t ? void 0 : t.map((t, n) => {
						return e ? s.a.createElement("div", {
							key: `audioPostAvatar--${t}`,
							className: m.a.listener
						}, s.a.createElement("img", {
							className: Object(i.a)(m.a.snoovatar, m.a.isListener),
							src: `${o.a.assetPath}/img/talk/avatars/${t}.png`,
							alt: v._("Reddit Talk", null, {
								hk: "XNl4V"
							})
						})) : s.a.createElement("div", {
							key: `audioPostAvatar--${t}`,
							className: m.a.speaker
						}, n === O && s.a.createElement(b.a, {
							className: Object(i.a)(m.a.speakerRings, {
								[m.a.nightMode]: x
							})
						}), s.a.createElement("img", {
							className: m.a.snoovatar,
							src: `${o.a.assetPath}/img/talk/avatars/${t}.png`,
							alt: v._("Reddit Talk", null, {
								hk: "XNl4V"
							})
						}), n !== O && s.a.createElement("div", {
							className: m.a.muteContainer
						}, s.a.createElement(p.a, {
							className: m.a.muteIcon
						})))
					})
				}, j = () => Math.floor(40 * Math.random() + 1);
				Object(a.useEffect)(() => {
					const e = new Set;
					for (; e.size < 13;) {
						const t = j();
						e.has(t) || (E.size < 6 ? E.add(t) : g.size < 7 && g.add(t), e.add(t))
					}
					f(E), h(g)
				}, [E, g]), Object(a.useEffect)(() => {
					const e = setInterval(() => {
						const e = Math.floor(6 * Math.random());
						P(e), setTimeout(() => P(-1), 3500)
					}, 4e3);
					return () => clearInterval(e)
				}, []);
				return (() => {
					const e = [d.a.NotAvailable, d.a.Removed].includes(null != u ? u : d.a.NotAvailable);
					return !n.isLive && e ? s.a.createElement("div", {
						className: m.a.endedContainer,
						"data-testid": "audioroom-card-ended"
					}, s.a.createElement(p.a, {
						className: m.a.muteIcon
					}), s.a.createElement("p", null, v._("This talk has ended", null, {
						hk: "3ygafp"
					}))) : s.a.createElement(s.a.Fragment, null, s.a.createElement("a", {
						href: `https://www.reddit.com/talk/${n.roomId}`,
						target: "_blank",
						rel: "noopener noreferrer",
						className: m.a.liveContainer,
						"data-testid": `audioroom-card-${n.isLive?"live":"ended"}`
					}, s.a.createElement("div", {
						className: Object(i.a)(m.a.userRow)
					}, _(!1)), s.a.createElement("div", {
						className: Object(i.a)(m.a.userRow, m.a.isListener)
					}, _(!0))), s.a.createElement("div", {
						className: m.a.buttonContainer
					}, !n.isLive && u === d.a.Processing && s.a.createElement(c.a, {
						kind: c.b.Button,
						priority: c.c.Primary,
						className: m.a.processingButton,
						disabled: !0
					}, v._("Creating Recording...", null, {
						hk: "4gtXIC"
					})), !n.isLive && u === d.a.Available && s.a.createElement(c.a, {
						kind: c.b.ExternalLink,
						priority: c.c.Secondary,
						href: `https://www.reddit.com/talk/${n.roomId}`,
						target: "_blank",
						rel: "noopener noreferrer"
					}, v._("Listen to Recording", null, {
						hk: "tBHae"
					})), n.isLive && s.a.createElement(c.a, {
						kind: c.b.ExternalLink,
						priority: c.c.Primary,
						href: `https://www.reddit.com/talk/${n.roomId}`,
						target: "_blank",
						rel: "noopener noreferrer"
					}, v._("Tune In", null, {
						hk: "1NLAor"
					}))))
				})()
			};
			t.default = E
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
				a = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/classNames/index.ts"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
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
				return i.a.createElement("div", l({
					className: Object(s.a)(d.a.container, t)
				}, n), i.a.createElement("img", {
					className: d.a.left,
					src: `${o.a.assetPath}/img/econ/predictions/confetti-bg.png`,
					alt: a.fbt._("Confetti", null, {
						hk: "3dmR4h"
					})
				}), i.a.createElement("img", {
					className: d.a.right,
					src: `${o.a.assetPath}/img/econ/predictions/confetti-bg.png`,
					alt: a.fbt._("Confetti", null, {
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
				return ae
			}));
			var o = n("./node_modules/react/index.js"),
				a = n.n(o),
				s = n("./node_modules/react-redux/es/index.js"),
				r = n("./src/reddit/helpers/predictions/index.ts"),
				i = n("./src/reddit/selectors/telemetry.ts");
			const c = (e, t) => ({
				...Object(i.n)(e),
				poll: Object(i.M)(e, t),
				post: Object(i.H)(e, t),
				predictions: Object(i.N)(e, t),
				subreddit: Object(i.gb)(e)
			});
			var d = n("./src/reddit/hooks/useTracking.ts"),
				l = n("./src/reddit/models/Prediction/index.ts"),
				u = n("./src/reddit/models/Prediction/Tournament/index.ts"),
				m = n("./src/reddit/selectors/poll/index.ts"),
				p = n("./src/lib/classNames/index.ts"),
				b = n("./src/reddit/contexts/PageLayer/index.tsx"),
				v = n("./src/reddit/selectors/user.ts"),
				E = n("./src/reddit/components/Econ/Prediction/TournamentPostBody/PredictionContainer/index.m.less"),
				f = n.n(E);

			function g() {
				return (g = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const h = e => {
				let {
					className: t,
					...n
				} = e;
				const o = Object(b.fb)(),
					r = Object(b.x)(o),
					i = Object(s.e)(v.db);
				return a.a.createElement("div", g({}, n, {
					className: Object(p.a)(t, f.a.container, {
						[f.a.commentsPage]: r,
						[f.a.isNightMode]: i
					}),
					onClick: e => {
						e.stopPropagation()
					}
				}))
			};
			var x = n("./src/reddit/components/Econ/Prediction/Confetti/index.tsx"),
				O = n("./src/reddit/controls/InternalLink/index.tsx"),
				P = n("./src/reddit/selectors/posts.ts"),
				_ = n("./src/reddit/components/Econ/Prediction/TournamentPostBody/ViewTournamentLink/index.m.less"),
				j = n.n(_);
			const {
				fbt: y
			} = n("./node_modules/fbt/lib/FbtPublic.js"), k = e => {
				let {
					className: t,
					postId: n
				} = e;
				const o = Object(d.a)(),
					r = Object(s.e)(e => Object(P.U)(e, {
						postId: n
					}));
				return a.a.createElement(O.a, {
					className: Object(p.a)(j.a.viewTournament, t),
					to: `${null==r?void 0:r.url}predictions/`,
					onClick: () => o((e => t => ({
						...c(t, e),
						source: "predictions",
						action: "click",
						noun: "view_tournament"
					}))(n))
				}, y._("Go to Tournament", null, {
					hk: "1QaAgH"
				}))
			};
			var I = n("./src/reddit/components/Econ/Prediction/TournamentSnoosImage/index.tsx"),
				N = n("./src/reddit/components/Econ/Prediction/TournamentPostBody/PredictionPostCard/index.m.less"),
				w = n.n(N);
			const {
				fbt: C
			} = n("./node_modules/fbt/lib/FbtPublic.js"), A = e => {
				let {
					header: t,
					description: n,
					cta: o
				} = e;
				return a.a.createElement("section", {
					className: w.a.container
				}, a.a.createElement(x.a, {
					className: w.a.confetti
				}), a.a.createElement(I.a, {
					className: w.a.image
				}), a.a.createElement("div", {
					className: w.a.label
				}, a.a.createElement("div", {
					className: w.a.header
				}, t), a.a.createElement("div", null, n)), o)
			}, S = e => {
				let {
					postId: t
				} = e;
				const n = Object(s.e)(e => Object(P.U)(e, {
					postId: t
				}));
				return a.a.createElement(A, {
					header: C._("Tournament has ended!", null, {
						hk: "2mCj47"
					}),
					description: C._("Your destiny has been decided", null, {
						hk: "vGyB7"
					}),
					cta: a.a.createElement(O.a, {
						className: w.a.cta,
						to: `${null==n?void 0:n.url}predictions/`
					}, C._("View Results", null, {
						hk: "1UFWjc"
					}))
				})
			}, T = e => {
				let {
					postId: t
				} = e;
				return a.a.createElement(A, {
					header: C._("Your predictions are in!", null, {
						hk: "FZJZS"
					}),
					description: C._("May the odds be ever in your favor", null, {
						hk: "1Brw70"
					}),
					cta: a.a.createElement(k, {
						className: w.a.cta,
						postId: t
					})
				})
			};
			var L = n("./node_modules/fbt/lib/FbtPublic.js"),
				F = n("./src/reddit/components/Econ/Prediction/TournamentPostBody/PredictionsCarousel/PredictionsProgress/index.m.less"),
				M = n.n(F);

			function B() {
				return (B = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const V = e => {
				let {
					value: t,
					count: n,
					className: o,
					...r
				} = e;
				const i = Object(s.e)(v.db),
					c = Math.floor(100 * t / n);
				return a.a.createElement("div", B({
					className: Object(p.a)(M.a.container, o, {
						[M.a.isNightMode]: i
					})
				}, r), a.a.createElement("div", {
					className: M.a.bar
				}, a.a.createElement("div", {
					className: M.a.progress,
					style: {
						width: `${c}%`
					}
				})), a.a.createElement("div", {
					className: M.a.label
				}, L.fbt._("{progress} of {count} predicted", [L.fbt._param("progress", t.toString()), L.fbt._param("count", n.toString())], {
					hk: "1dMoEh"
				})))
			};
			var D = n("./src/reddit/icons/fonts/index.tsx"),
				U = n("./src/reddit/components/Econ/Prediction/PredictionCard/PredictionBody/index.tsx"),
				R = n("./src/reddit/components/Econ/Prediction/PredictionModal/index.tsx"),
				$ = n("./src/reddit/actions/economics/helpers/index.ts"),
				G = n("./src/reddit/actions/economics/predictions/index.ts"),
				H = n("./src/reddit/actions/post.ts"),
				z = n("./src/reddit/components/Econ/Prediction/hooks/useDelayedUpvoteAnimation.tsx"),
				W = n("./src/reddit/helpers/trackers/predictions.ts"),
				X = n("./src/reddit/hooks/useToast.tsx"),
				Z = n("./src/reddit/models/Vote/index.ts"),
				q = n("./src/reddit/selectors/experiments/econ/index.ts");
			const {
				fbt: K
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var Y = n("./src/reddit/components/Econ/Prediction/TournamentPostBody/TournamentPrediction/index.m.less"),
				J = n.n(Y);

			function Q() {
				return (Q = Object.assign || function(e) {
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
					...i
				} = e;
				const {
					isLoading: c,
					selectedOption: u,
					selectOption: m,
					predict: p,
					cancelAction: b
				} = function(e, t, n) {
					const o = Object(s.d)(),
						r = Object(s.e)(v.e),
						i = Object(s.e)(q.n),
						c = Object(d.a)(),
						u = Object(X.a)(),
						{
							startDelayedUpvoteAnimation: m
						} = Object(z.a)(n.id),
						{
							id: p,
							endsAt: b,
							options: E
						} = t,
						{
							id: f,
							voteState: g
						} = n,
						h = t.userSelection,
						[x, O] = a.a.useState(!1),
						[P, _] = a.a.useState(null),
						[j, y] = a.a.useState(!1),
						k = b < Date.now();
					return {
						isLoading: x,
						isShowingVoteAnimation: j,
						selectedOption: E.find(e => {
							let {
								id: t
							} = e;
							return t === P
						}),
						selectOption: e => {
							k || h || _(e.id)
						},
						predict: async t => {
							if (t.currency === l.a.Coins && t.amount > r) return Object($.promptUserToBuyMoreCoins)(), void c(W.b);
							if (k) return u(K._("Error: Failed to make prediction. This prediction has already ended", null, {
								hk: "22UWEr"
							})), void _(null);
							if (!p || !P) throw new Error("Invalid arguments, optionId and pollId must be strings");
							O(!0), c(Object(W.o)({
								pollId: p,
								selectedNumberTokens: t.amount
							}));
							try {
								await o(Object(G.s)({
									coinPackageId: t.id,
									selectedOptionId: P,
									price: t.amount,
									pollId: p,
									tournamentId: e,
									tournamentPostId: n.id
								})), i && g < Z.a.upvoted && (o(Object(H.kb)(f)), o(Object(H.kb)(p)), m()), O(!1), _(null), y(!0)
							} catch (a) {
								O(!1), _(null), u(K._("Error: Failed to make prediction, please try again later", null, {
									hk: "1tECsx"
								}))
							}
						},
						cancelAction: a.a.useCallback(() => {
							_(null)
						}, []),
						hideAnimation: a.a.useCallback(() => {
							y(!1)
						}, [])
					}
				}(n, t, o);
				return a.a.createElement(a.a.Fragment, null, a.a.createElement(U.a, Q({
					prediction: t,
					selectedOptionId: u ? u.id : null,
					onSelectOption: m
				}, i)), !!u && a.a.createElement(R.a, {
					className: J.a.modal,
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
					const o = Object(s.e)(v.db),
						r = n.reduce((e, t) => {
							let {
								userSelection: n
							} = t;
							return n ? e + 1 : e
						}, 0),
						i = Object(d.a)(),
						{
							index: l,
							isFirstSlide: u,
							isLastSlide: m,
							nextSlide: b,
							prevSlide: E
						} = function(e) {
							const [t, n] = a.a.useState(0), o = 0 === t, s = t === e - 1;
							return {
								index: t,
								nextSlide: () => !s && n(t + 1),
								prevSlide: () => !o && n(t - 1),
								isFirstSlide: o,
								isLastSlide: s
							}
						}(n.length);
					return a.a.createElement("div", {
						className: Object(p.a)(ne.a.container, {
							[ne.a.isNightMode]: o
						})
					}, n.map((e, n) => Math.abs(l - n) > 1 ? null : a.a.createElement(ee, {
						key: e.id,
						className: ne.a.prediction,
						tournamentId: t.predictionTournament.tournamentId,
						post: t,
						prediction: e,
						onPredict: b,
						style: {
							left: n < l ? "-100%" : n > l ? "100%" : 0
						}
					})), !u && a.a.createElement("button", {
						className: Object(p.a)(ne.a.slideButton, ne.a.prev),
						onClick: () => {
							i((e => t => ({
								...c(t, e),
								source: "predictions",
								action: "click",
								noun: "previous_post"
							}))(t.id)), E()
						}
					}, a.a.createElement(D.a, {
						name: "caret_left",
						className: ne.a.icon,
						isFilled: !0
					})), !m && a.a.createElement("button", {
						className: Object(p.a)(ne.a.slideButton, ne.a.next),
						onClick: () => {
							i((e => t => ({
								...c(t, e),
								source: "predictions",
								action: "click",
								noun: "next_post"
							}))(t.id)), b()
						}
					}, a.a.createElement(D.a, {
						name: "caret_right",
						className: ne.a.icon,
						isFilled: !0
					})), a.a.createElement(V, {
						className: ne.a.counter,
						value: r,
						count: n.length
					}))
				},
				ae = e => {
					let {
						post: t
					} = e;
					const {
						tournamentId: n,
						status: o
					} = t.predictionTournament, i = Object(d.a)(), p = Object(s.e)(e => Object(m.h)(e, n)), b = a.a.useMemo(() => p.filter(e => !e.isSpoiler && !e.isNSFW && !e.resolvedOptionId && e.predictionStatus === l.b.Open && e.endsAt > Date.now()).sort(r.a).map(e => e.id), [p.length]).map(e => p.find(t => t.id === e)).filter(e => Boolean(e)), v = b.some(e => {
						let {
							userSelection: t,
							endsAt: n,
							predictionStatus: o
						} = e;
						return !t && n > Date.now() && o === l.b.Open
					});
					return a.a.useEffect(() => {
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
						i(e)
					}, [t.id, o, v, i]), o === u.a.Closed ? a.a.createElement(h, null, a.a.createElement(S, {
						postId: t.id
					})) : a.a.createElement(h, null, v ? a.a.createElement(oe, {
						post: t,
						predictions: b
					}) : a.a.createElement(T, {
						postId: t.id
					}))
				};
			t.default = ae
		},
		"./src/reddit/components/Econ/Prediction/TournamentSnoosImage/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				a = n.n(o),
				s = n("./src/config.ts");
			const {
				fbt: r
			} = n("./node_modules/fbt/lib/FbtPublic.js"), i = `\n  ${s.a.assetPath}/img/econ/predictions/waiting.png,\n  ${s.a.assetPath}/img/econ/predictions/waiting@2x.png 2x,\n  ${s.a.assetPath}/img/econ/predictions/waiting@3x.png 3x,\n`;
			t.a = e => a.a.createElement("img", {
				className: e.className,
				srcSet: i,
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
			const a = (e, t) => {
					const n = Date.now(),
						a = n <= e.endsAt,
						s = n <= t.endsAt,
						r = e.status === o.b.Cancelled || e.status === o.b.CancelInProgress;
					return r !== (t.status === o.b.Cancelled || t.status === o.b.CancelInProgress) ? r ? 1 : -1 : a !== s ? a ? -1 : 1 : a && e.selectedOptionId !== t.selectedOptionId ? e.selectedOptionId ? 1 : -1 : !e.resolvedOptionId != !t.resolvedOptionId ? e.resolvedOptionId ? 1 : -1 : a || e.selectedOptionId === t.selectedOptionId ? e.createdAt > t.createdAt ? -1 : 1 : e.selectedOptionId ? -1 : 1
				},
				s = (e, t) => a({
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
					return s && r ? a({
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/index.77f79b3319e7be4e52d1.js.map