// https://www.redditstatic.com/desktop2x/index.1e1378c756ca02718037.js
// Retrieved at 12/15/2021, 2:20:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["index"], {
		"./src/reddit/components/Econ/Audio/MuteIcon.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				o = n.n(a);
			t.a = ({
				className: e
			}) => o.a.createElement("svg", {
				className: e,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, o.a.createElement("g", {
				id: "icons_flat",
				"data-name": "icons flat"
			}, o.a.createElement("path", {
				d: "M13.5,9.5v-5A3.493,3.493,0,0,0,6.723,3.3l6.724,6.723A3.524,3.524,0,0,0,13.5,9.5Z"
			}), o.a.createElement("path", {
				d: "M15.5,9.5a5.472,5.472,0,0,1-.436,2.144l1.487,1.486A7.428,7.428,0,0,0,17.5,9.5Z"
			}), o.a.createElement("path", {
				d: "M2.341,4.1,6.5,8.258V9.5A3.5,3.5,0,0,0,10,13a3.441,3.441,0,0,0,1.059-.183l1.529,1.529A5.449,5.449,0,0,1,10,15,5.506,5.506,0,0,1,4.5,9.5h-2A7.5,7.5,0,0,0,9,16.925V18H7.581v2h4.838V18H11V16.925a7.388,7.388,0,0,0,3.026-1.141l1.044,1.044,1.414-1.414L3.755,2.686Z"
			})))
		},
		"./src/reddit/components/Econ/Audio/SpeakerRings.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				o = n.n(a);
			t.a = ({
				className: e
			}) => o.a.createElement("svg", {
				className: e,
				width: "226",
				height: "226",
				viewBox: "0 0 226 226",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", {
				opacity: "0.8"
			}, o.a.createElement("rect", {
				opacity: "0.8",
				x: "36.7704",
				y: "36.7703",
				width: "152.462",
				height: "152.462",
				rx: "76.2308",
				stroke: "url(#paint0_linear)",
				strokeWidth: "4"
			}), o.a.createElement("rect", {
				opacity: "0.5",
				x: "18.8851",
				y: "18.8822",
				width: "188.231",
				height: "188.231",
				rx: "94.1153",
				stroke: "url(#paint1_linear)",
				strokeWidth: "3"
			}), o.a.createElement("rect", {
				opacity: "0.3",
				x: "1.25",
				y: "1.25",
				width: "223.5",
				height: "223.5",
				rx: "111.75",
				stroke: "url(#paint2_linear)",
				strokeWidth: "2.5"
			})), o.a.createElement("defs", null, o.a.createElement("linearGradient", {
				id: "paint0_linear",
				x1: "17.886",
				y1: "34.7703",
				x2: "213.283",
				y2: "40.3684",
				gradientUnits: "userSpaceOnUse"
			}, o.a.createElement("stop", {
				stopColor: "#FF538C"
			}), o.a.createElement("stop", {
				offset: "0.989583",
				stopColor: "#FFAB39"
			})), o.a.createElement("linearGradient", {
				id: "paint1_linear",
				x1: "-3.25127",
				y1: "17.3822",
				x2: "235.567",
				y2: "24.2243",
				gradientUnits: "userSpaceOnUse"
			}, o.a.createElement("stop", {
				stopColor: "#FF538C"
			}), o.a.createElement("stop", {
				offset: "0.989583",
				stopColor: "#FFAB39"
			})), o.a.createElement("linearGradient", {
				id: "paint2_linear",
				x1: "-24.3885",
				y1: "2.87774e-05",
				x2: "257.851",
				y2: "8.08615",
				gradientUnits: "userSpaceOnUse"
			}, o.a.createElement("stop", {
				stopColor: "#FF538C"
			}), o.a.createElement("stop", {
				offset: "0.989583",
				stopColor: "#FFAB39"
			}))))
		},
		"./src/reddit/components/Econ/Audio/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "AudioPostBody", (function() {
				return E
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var a = n("./src/config.ts"),
				o = n("./node_modules/react/index.js"),
				s = n.n(o),
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
			} = n("./node_modules/fbt/lib/FbtPublic.js"), E = ({
				post: e,
				isRecordingEnabled: t = !1
			}) => {
				const {
					audioRoom: n
				} = e, {
					recordingStatus: u
				} = n, [E, h] = Object(o.useState)(new Set), [f, g] = Object(o.useState)(new Set), x = Object(r.e)(l.X), [O, P] = Object(o.useState)(-1), _ = e => {
					const t = e ? Array.from(f) : Array.from(E);
					return null == t ? void 0 : t.map((t, n) => {
						return e ? s.a.createElement("div", {
							key: `audioPostAvatar--${t}`,
							className: m.a.listener
						}, s.a.createElement("img", {
							className: Object(i.a)(m.a.snoovatar, m.a.isListener),
							src: `${a.a.assetPath}/img/talk/avatars/${t}.png`,
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
							src: `${a.a.assetPath}/img/talk/avatars/${t}.png`,
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
				Object(o.useEffect)(() => {
					const e = new Set;
					for (; e.size < 13;) {
						const t = j();
						e.has(t) || (E.size < 6 ? E.add(t) : f.size < 7 && f.add(t), e.add(t))
					}
					h(E), g(f)
				}, [E, f]), Object(o.useEffect)(() => {
					const e = setInterval(() => {
						const e = Math.floor(6 * Math.random());
						P(e), setTimeout(() => P(-1), 3500)
					}, 4e3);
					return () => clearInterval(e)
				}, []);
				return t ? (() => {
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
				})() : (() => n.isLive ? s.a.createElement("a", {
					href: `https://www.reddit.com/talk/${n.roomId}`,
					target: "_blank",
					rel: "noopener noreferrer",
					className: m.a.liveContainer,
					"data-testid": "audioroom-card-live"
				}, s.a.createElement("div", {
					className: Object(i.a)(m.a.userRow)
				}, _(!1)), s.a.createElement("div", {
					className: Object(i.a)(m.a.userRow, m.a.isListener)
				}, _(!0))) : s.a.createElement("div", {
					className: m.a.endedContainer,
					"data-testid": "audioroom-card-ended"
				}, s.a.createElement(p.a, {
					className: m.a.muteIcon
				}), s.a.createElement("p", null, v._("This talk has ended", null, {
					hk: "3ygafp"
				}))))()
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
			var a = n("./src/config.ts"),
				o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/classNames/index.ts"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				c = n("./src/reddit/components/Econ/Prediction/Confetti/index.m.less"),
				d = n.n(c);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			const u = ({
				className: e,
				...t
			}) => i.a.createElement("div", l({
				className: Object(s.a)(d.a.container, e)
			}, t), i.a.createElement("img", {
				className: d.a.left,
				src: `${a.a.assetPath}/img/econ/predictions/confetti-bg.png`,
				alt: o.fbt._("Confetti", null, {
					hk: "3dmR4h"
				})
			}), i.a.createElement("img", {
				className: d.a.right,
				src: `${a.a.assetPath}/img/econ/predictions/confetti-bg.png`,
				alt: o.fbt._("Confetti", null, {
					hk: "3dmR4h"
				})
			}))
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
				return oe
			}));
			var a = n("./node_modules/react/index.js"),
				o = n.n(a),
				s = n("./node_modules/react-redux/es/index.js"),
				r = n("./src/reddit/helpers/predictions/index.ts"),
				i = n("./src/reddit/selectors/telemetry.ts");
			const c = (e, t) => ({
				...Object(i.o)(e),
				poll: Object(i.N)(e, t),
				post: Object(i.I)(e, t),
				predictions: Object(i.O)(e, t),
				subreddit: Object(i.hb)(e)
			});
			var d = n("./src/reddit/hooks/useTracking.ts"),
				l = n("./src/reddit/models/Prediction/index.ts"),
				u = n("./src/reddit/models/Prediction/Tournament/index.ts"),
				m = n("./src/reddit/selectors/poll/index.ts"),
				p = n("./src/lib/classNames/index.ts"),
				b = n("./src/reddit/contexts/PageLayer/index.tsx"),
				v = n("./src/reddit/selectors/user.ts"),
				E = n("./src/reddit/components/Econ/Prediction/TournamentPostBody/PredictionContainer/index.m.less"),
				h = n.n(E);

			function f() {
				return (f = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			const g = ({
				className: e,
				...t
			}) => {
				const n = Object(b.eb)(),
					a = Object(b.x)(n),
					r = Object(s.e)(v.X);
				return o.a.createElement("div", f({}, t, {
					className: Object(p.a)(e, h.a.container, {
						[h.a.commentsPage]: a,
						[h.a.isNightMode]: r
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
			} = n("./node_modules/fbt/lib/FbtPublic.js"), k = ({
				className: e,
				postId: t
			}) => {
				const n = Object(d.a)(),
					a = Object(s.e)(e => Object(P.U)(e, {
						postId: t
					}));
				return o.a.createElement(O.a, {
					className: Object(p.a)(j.a.viewTournament, e),
					to: `${null==a?void 0:a.url}predictions/`,
					onClick: () => n((e => t => ({
						...c(t, e),
						source: "predictions",
						action: "click",
						noun: "view_tournament"
					}))(t))
				}, y._("Go to Tournament", null, {
					hk: "1QaAgH"
				}))
			};
			var I = n("./src/reddit/components/Econ/Prediction/TournamentSnoosImage/index.tsx"),
				N = n("./src/reddit/components/Econ/Prediction/TournamentPostBody/PredictionPostCard/index.m.less"),
				w = n.n(N);
			const {
				fbt: C
			} = n("./node_modules/fbt/lib/FbtPublic.js"), A = ({
				header: e,
				description: t,
				cta: n
			}) => o.a.createElement("section", {
				className: w.a.container
			}, o.a.createElement(x.a, {
				className: w.a.confetti
			}), o.a.createElement(I.a, {
				className: w.a.image
			}), o.a.createElement("div", {
				className: w.a.label
			}, o.a.createElement("div", {
				className: w.a.header
			}, e), o.a.createElement("div", null, t)), n), S = ({
				postId: e
			}) => {
				const t = Object(s.e)(t => Object(P.U)(t, {
					postId: e
				}));
				return o.a.createElement(A, {
					header: C._("Tournament has ended!", null, {
						hk: "2mCj47"
					}),
					description: C._("Your destiny has been decided", null, {
						hk: "vGyB7"
					}),
					cta: o.a.createElement(O.a, {
						className: w.a.cta,
						to: `${null==t?void 0:t.url}predictions/`
					}, C._("View Results", null, {
						hk: "1UFWjc"
					}))
				})
			}, T = ({
				postId: e
			}) => o.a.createElement(A, {
				header: C._("Your predictions are in!", null, {
					hk: "FZJZS"
				}),
				description: C._("May the odds be ever in your favor", null, {
					hk: "1Brw70"
				}),
				cta: o.a.createElement(k, {
					className: w.a.cta,
					postId: e
				})
			});
			var L = n("./node_modules/fbt/lib/FbtPublic.js"),
				F = n("./src/reddit/components/Econ/Prediction/TournamentPostBody/PredictionsCarousel/PredictionsProgress/index.m.less"),
				B = n.n(F);

			function M() {
				return (M = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			const V = ({
				value: e,
				count: t,
				className: n,
				...a
			}) => {
				const r = Object(s.e)(v.X),
					i = Math.floor(100 * e / t);
				return o.a.createElement("div", M({
					className: Object(p.a)(B.a.container, n, {
						[B.a.isNightMode]: r
					})
				}, a), o.a.createElement("div", {
					className: B.a.bar
				}, o.a.createElement("div", {
					className: B.a.progress,
					style: {
						width: `${i}%`
					}
				})), o.a.createElement("div", {
					className: B.a.label
				}, L.fbt._("{progress} of {count} predicted", [L.fbt._param("progress", e.toString()), L.fbt._param("count", t.toString())], {
					hk: "1dMoEh"
				})))
			};
			var R = n("./src/reddit/icons/fonts/index.tsx"),
				D = n("./src/reddit/components/Econ/Prediction/PredictionCard/PredictionBody/index.tsx"),
				U = n("./src/reddit/components/Econ/Prediction/PredictionModal/index.tsx"),
				$ = n("./src/reddit/actions/economics/helpers/index.ts"),
				G = n("./src/reddit/actions/economics/predictions/index.ts"),
				X = n("./src/reddit/actions/post.ts"),
				H = n("./src/reddit/components/Econ/Prediction/hooks/useDelayedUpvoteAnimation.tsx"),
				z = n("./src/reddit/helpers/trackers/predictions.ts"),
				W = n("./src/reddit/hooks/useToast.tsx"),
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
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			const ee = ({
				prediction: e,
				tournamentId: t,
				subredditId: n,
				post: a,
				onPredict: r,
				...i
			}) => {
				const {
					isLoading: c,
					selectedOption: u,
					selectOption: m,
					predict: p,
					cancelAction: b
				} = function(e, t, n) {
					const a = Object(s.d)(),
						r = Object(s.e)(v.e),
						i = Object(s.e)(q.n),
						c = Object(d.a)(),
						u = Object(W.a)(),
						{
							startDelayedUpvoteAnimation: m
						} = Object(H.a)(n.id),
						{
							id: p,
							endsAt: b,
							options: E
						} = t,
						{
							id: h,
							voteState: f
						} = n,
						g = t.userSelection,
						[x, O] = o.a.useState(!1),
						[P, _] = o.a.useState(null),
						[j, y] = o.a.useState(!1),
						k = b < Date.now();
					return {
						isLoading: x,
						isShowingVoteAnimation: j,
						selectedOption: E.find(({
							id: e
						}) => e === P),
						selectOption: e => {
							k || g || _(e.id)
						},
						predict: async t => {
							if (t.currency === l.a.Coins && t.amount > r) return Object($.promptUserToBuyMoreCoins)(), void c(z.b);
							if (k) return u(K._("Error: Failed to make prediction. This prediction has already ended", null, {
								hk: "22UWEr"
							})), void _(null);
							if (!p || !P) throw new Error("Invalid arguments, optionId and pollId must be strings");
							O(!0), c(Object(z.o)({
								pollId: p,
								selectedNumberTokens: t.amount
							}));
							try {
								await a(Object(G.r)({
									coinPackageId: t.id,
									selectedOptionId: P,
									price: t.amount,
									pollId: p,
									tournamentId: e,
									tournamentPostId: n.id
								})), i && f < Z.a.upvoted && (a(Object(X.jb)(h)), a(Object(X.jb)(p)), m()), O(!1), _(null), y(!0)
							} catch (o) {
								O(!1), _(null), u(K._("Error: Failed to make prediction, please try again later", null, {
									hk: "1tECsx"
								}))
							}
						},
						cancelAction: o.a.useCallback(() => {
							_(null)
						}, []),
						hideAnimation: o.a.useCallback(() => {
							y(!1)
						}, [])
					}
				}(t, e, a);
				return o.a.createElement(o.a.Fragment, null, o.a.createElement(D.a, Q({
					prediction: e,
					selectedOptionId: u ? u.id : null,
					onSelectOption: m
				}, i)), !!u && o.a.createElement(U.b, {
					className: J.a.modal,
					isCreatingVote: c,
					onOverlayClick: b,
					onCancel: b,
					onPredict: async e => {
						await p(e), r && r()
					},
					option: u,
					pollId: e.id,
					subredditId: n,
					tournamentId: t,
					withOverlay: !0
				}))
			};
			var te = n("./src/reddit/components/Econ/Prediction/TournamentPostBody/PredictionsCarousel/index.m.less"),
				ne = n.n(te);
			const ae = ({
					post: e,
					predictions: t
				}) => {
					const n = Object(s.e)(v.X),
						a = t.reduce((e, {
							userSelection: t
						}) => t ? e + 1 : e, 0),
						r = Object(d.a)(),
						{
							index: i,
							isFirstSlide: l,
							isLastSlide: u,
							nextSlide: m,
							prevSlide: b
						} = function(e) {
							const [t, n] = o.a.useState(0), a = 0 === t, s = t === e - 1;
							return {
								index: t,
								nextSlide: () => !s && n(t + 1),
								prevSlide: () => !a && n(t - 1),
								isFirstSlide: a,
								isLastSlide: s
							}
						}(t.length);
					return o.a.createElement("div", {
						className: Object(p.a)(ne.a.container, {
							[ne.a.isNightMode]: n
						})
					}, t.map((t, n) => Math.abs(i - n) > 1 ? null : o.a.createElement(ee, {
						key: t.id,
						className: ne.a.prediction,
						subredditId: e.belongsTo.id,
						tournamentId: e.predictionTournament.tournamentId,
						post: e,
						prediction: t,
						onPredict: m,
						style: {
							left: n < i ? "-100%" : n > i ? "100%" : 0
						}
					})), !l && o.a.createElement("button", {
						className: Object(p.a)(ne.a.slideButton, ne.a.prev),
						onClick: () => {
							r((e => t => ({
								...c(t, e),
								source: "predictions",
								action: "click",
								noun: "previous_post"
							}))(e.id)), b()
						}
					}, o.a.createElement(R.a, {
						name: "caret_left",
						className: ne.a.icon,
						isFilled: !0
					})), !u && o.a.createElement("button", {
						className: Object(p.a)(ne.a.slideButton, ne.a.next),
						onClick: () => {
							r((e => t => ({
								...c(t, e),
								source: "predictions",
								action: "click",
								noun: "next_post"
							}))(e.id)), m()
						}
					}, o.a.createElement(R.a, {
						name: "caret_right",
						className: ne.a.icon,
						isFilled: !0
					})), o.a.createElement(V, {
						className: ne.a.counter,
						value: a,
						count: t.length
					}))
				},
				oe = ({
					post: e
				}) => {
					const {
						tournamentId: t,
						status: n
					} = e.predictionTournament, a = Object(d.a)(), i = Object(s.e)(e => Object(m.h)(e, t)), p = o.a.useMemo(() => i.filter(e => !e.isSpoiler && !e.isNSFW && !e.resolvedOptionId && e.predictionStatus === l.b.Open && e.endsAt > Date.now()).sort(r.a).map(e => e.id), [i.length]).map(e => i.find(t => t.id === e)).filter(e => Boolean(e)), b = p.some(({
						userSelection: e,
						endsAt: t,
						predictionStatus: n
					}) => !e && t > Date.now() && n === l.b.Open);
					return o.a.useEffect(() => {
						if (n === u.a.Closed) return;
						const t = b ? (e => t => ({
							...c(t, e),
							source: "predictions",
							action: "view",
							noun: "predictions_post"
						}))(e.id) : (e => t => ({
							...c(t, e),
							source: "predictions",
							action: "view",
							noun: "predicted_all_post"
						}))(e.id);
						a(t)
					}, [e.id, n, b, a]), n === u.a.Closed ? o.a.createElement(g, null, o.a.createElement(S, {
						postId: e.id
					})) : o.a.createElement(g, null, b ? o.a.createElement(ae, {
						post: e,
						predictions: p
					}) : o.a.createElement(T, {
						postId: e.id
					}))
				};
			t.default = oe
		},
		"./src/reddit/components/Econ/Prediction/TournamentSnoosImage/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				o = n.n(a),
				s = n("./src/config.ts");
			const {
				fbt: r
			} = n("./node_modules/fbt/lib/FbtPublic.js"), i = `\n  ${s.a.assetPath}/img/econ/predictions/waiting.png,\n  ${s.a.assetPath}/img/econ/predictions/waiting@2x.png 2x,\n  ${s.a.assetPath}/img/econ/predictions/waiting@3x.png 3x,\n`;
			t.a = e => o.a.createElement("img", {
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
			var a = n("./src/reddit/models/Prediction/index.ts");
			const o = (e, t) => {
					const n = Date.now(),
						o = n <= e.endsAt,
						s = n <= t.endsAt,
						r = e.status === a.b.Cancelled || e.status === a.b.CancelInProgress;
					return r !== (t.status === a.b.Cancelled || t.status === a.b.CancelInProgress) ? r ? 1 : -1 : o !== s ? o ? -1 : 1 : o && e.selectedOptionId !== t.selectedOptionId ? e.selectedOptionId ? 1 : -1 : !e.resolvedOptionId != !t.resolvedOptionId ? e.resolvedOptionId ? 1 : -1 : o || e.selectedOptionId === t.selectedOptionId ? e.createdAt > t.createdAt ? -1 : 1 : e.selectedOptionId ? -1 : 1
				},
				s = (e, t) => o({
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
					var n, a;
					const {
						pollData: s
					} = e, {
						pollData: r
					} = t;
					return s && r ? o({
						createdAt: e.created,
						endsAt: null == s ? void 0 : s.votingEndTimestamp,
						selectedOptionId: null !== (n = null == s ? void 0 : s.userSelection) && void 0 !== n ? n : null,
						resolvedOptionId: null == s ? void 0 : s.resolvedOptionId,
						totalVoteCount: null == s ? void 0 : s.totalVoteCount,
						status: null == s ? void 0 : s.predictionStatus
					}, {
						createdAt: t.created,
						endsAt: null == r ? void 0 : r.votingEndTimestamp,
						selectedOptionId: null !== (a = null == r ? void 0 : r.userSelection) && void 0 !== a ? a : null,
						resolvedOptionId: null == r ? void 0 : r.resolvedOptionId,
						totalVoteCount: null == r ? void 0 : r.totalVoteCount,
						status: null == r ? void 0 : r.predictionStatus
					}) : 0
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/index.1e1378c756ca02718037.js.map