// https://www.redditstatic.com/desktop2x/index.ae033f957d5e17c95e71.js
// Retrieved at 12/1/2021, 6:50:08 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["index"], {
		"./src/reddit/components/Econ/Audio/MuteIcon.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				a = n.n(o);
			t.a = ({
				className: e
			}) => a.a.createElement("svg", {
				className: e,
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
		},
		"./src/reddit/components/Econ/Audio/SpeakerRings.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				a = n.n(o);
			t.a = ({
				className: e
			}) => a.a.createElement("svg", {
				className: e,
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
		},
		"./src/reddit/components/Econ/Audio/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "AudioPostBody", (function() {
				return E
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./src/config.ts"),
				a = n("./node_modules/react/index.js"),
				i = n.n(a),
				r = n("./node_modules/react-redux/es/index.js"),
				s = n("./src/lib/classNames/index.ts"),
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
				} = n, [E, f] = Object(a.useState)(new Set), [h, O] = Object(a.useState)(new Set), x = Object(r.e)(l.X), [P, g] = Object(a.useState)(-1), I = e => {
					const t = e ? Array.from(h) : Array.from(E);
					return null == t ? void 0 : t.map((t, n) => {
						return e ? i.a.createElement("div", {
							key: `audioPostAvatar--${t}`,
							className: m.a.listener
						}, i.a.createElement("img", {
							className: Object(s.a)(m.a.snoovatar, m.a.isListener),
							src: `${o.a.assetPath}/img/talk/avatars/${t}.png`,
							alt: v._("Reddit Talk", null, {
								hk: "XNl4V"
							})
						})) : i.a.createElement("div", {
							key: `audioPostAvatar--${t}`,
							className: m.a.speaker
						}, n === P && i.a.createElement(b.a, {
							className: Object(s.a)(m.a.speakerRings, {
								[m.a.nightMode]: x
							})
						}), i.a.createElement("img", {
							className: m.a.snoovatar,
							src: `${o.a.assetPath}/img/talk/avatars/${t}.png`,
							alt: v._("Reddit Talk", null, {
								hk: "XNl4V"
							})
						}), n !== P && i.a.createElement("div", {
							className: m.a.muteContainer
						}, i.a.createElement(p.a, {
							className: m.a.muteIcon
						})))
					})
				}, _ = () => Math.floor(40 * Math.random() + 1);
				Object(a.useEffect)(() => {
					const e = new Set;
					for (; e.size < 13;) {
						const t = _();
						e.has(t) || (E.size < 6 ? E.add(t) : h.size < 7 && h.add(t), e.add(t))
					}
					f(E), O(h)
				}, [E, h]), Object(a.useEffect)(() => {
					const e = setInterval(() => {
						const e = Math.floor(6 * Math.random());
						g(e), setTimeout(() => g(-1), 3500)
					}, 4e3);
					return () => clearInterval(e)
				}, []);
				return t ? (() => {
					const e = [d.a.NotAvailable, d.a.Removed].includes(null != u ? u : d.a.NotAvailable);
					return !n.isLive && e ? i.a.createElement("div", {
						className: m.a.endedContainer,
						"data-testid": "audioroom-card-ended"
					}, i.a.createElement(p.a, {
						className: m.a.muteIcon
					}), i.a.createElement("p", null, v._("This talk has ended", null, {
						hk: "3ygafp"
					}))) : i.a.createElement(i.a.Fragment, null, i.a.createElement("a", {
						href: `https://www.reddit.com/talk/${n.roomId}`,
						target: "_blank",
						rel: "noopener noreferrer",
						className: m.a.liveContainer,
						"data-testid": `audioroom-card-${n.isLive?"live":"ended"}`
					}, i.a.createElement("div", {
						className: Object(s.a)(m.a.userRow)
					}, I(!1)), i.a.createElement("div", {
						className: Object(s.a)(m.a.userRow, m.a.isListener)
					}, I(!0))), i.a.createElement("div", {
						className: m.a.buttonContainer
					}, !n.isLive && u === d.a.Processing && i.a.createElement(c.a, {
						kind: c.b.Button,
						priority: c.c.Primary,
						disabled: !0
					}, v._("Creating Recording...", null, {
						hk: "4gtXIC"
					})), !n.isLive && u === d.a.Available && i.a.createElement(c.a, {
						kind: c.b.ExternalLink,
						priority: c.c.Secondary,
						href: `https://www.reddit.com/talk/${n.roomId}`,
						target: "_blank",
						rel: "noopener noreferrer"
					}, v._("Listen to Recording", null, {
						hk: "tBHae"
					})), n.isLive && i.a.createElement(c.a, {
						kind: c.b.ExternalLink,
						priority: c.c.Primary,
						href: `https://www.reddit.com/talk/${n.roomId}`,
						target: "_blank",
						rel: "noopener noreferrer"
					}, v._("Tune In", null, {
						hk: "1NLAor"
					}))))
				})() : (() => n.isLive ? i.a.createElement("a", {
					href: `https://www.reddit.com/talk/${n.roomId}`,
					target: "_blank",
					rel: "noopener noreferrer",
					className: m.a.liveContainer,
					"data-testid": "audioroom-card-live"
				}, i.a.createElement("div", {
					className: Object(s.a)(m.a.userRow)
				}, I(!1)), i.a.createElement("div", {
					className: Object(s.a)(m.a.userRow, m.a.isListener)
				}, I(!0))) : i.a.createElement("div", {
					className: m.a.endedContainer,
					"data-testid": "audioroom-card-ended"
				}, i.a.createElement(p.a, {
					className: m.a.muteIcon
				}), i.a.createElement("p", null, v._("This talk has ended", null, {
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
			var o = n("./src/config.ts"),
				a = n("./node_modules/fbt/lib/FbtPublic.js"),
				i = n("./src/lib/classNames/index.ts"),
				r = n("./node_modules/react/index.js"),
				s = n.n(r),
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
			const u = ({
				className: e,
				...t
			}) => s.a.createElement("div", l({
				className: Object(i.a)(d.a.container, e)
			}, t), s.a.createElement("img", {
				className: d.a.left,
				src: `${o.a.assetPath}/img/econ/predictions/confetti-bg.png`,
				alt: a.fbt._("Confetti", null, {
					hk: "3dmR4h"
				})
			}), s.a.createElement("img", {
				className: d.a.right,
				src: `${o.a.assetPath}/img/econ/predictions/confetti-bg.png`,
				alt: a.fbt._("Confetti", null, {
					hk: "3dmR4h"
				})
			}))
		},
		"./src/reddit/components/Econ/Prediction/TournamentPostBody/ViewTournamentLink/index.m.less": function(e, t, n) {
			e.exports = {
				viewTournament: "_16Mu-Vn-rTtULDzx2p5T80"
			}
		},
		"./src/reddit/components/Econ/Prediction/TournamentPostBody/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "TournamentPostBody", (function() {
				return xe
			}));
			var o = n("./node_modules/react/index.js"),
				a = n.n(o),
				i = n("./node_modules/react-redux/es/index.js"),
				r = n("./src/reddit/selectors/experiments/econ/index.ts"),
				s = n("./src/reddit/models/Prediction/Tournament/index.ts"),
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
				b = n("./src/reddit/selectors/posts.ts"),
				v = n("./src/reddit/components/Econ/Prediction/TournamentPostBody/ViewTournamentLink/index.m.less"),
				E = n.n(v);
			const {
				fbt: f
			} = n("./node_modules/fbt/lib/FbtPublic.js"), h = ({
				className: e,
				postId: t
			}) => {
				const n = Object(p.a)(),
					o = Object(i.e)(e => Object(b.U)(e, {
						postId: t
					}));
				return a.a.createElement(d.a, {
					className: Object(c.a)(E.a.viewTournament, e),
					to: `${null==o?void 0:o.url}predictions/`,
					onClick: () => n(m(t))
				}, f._("Go to Tournament", null, {
					hk: "1QaAgH"
				}))
			};
			var O = n("./src/reddit/components/Econ/Prediction/TournamentPostBody/v1/PredictionContainer/index.m.less"),
				x = n.n(O);

			function P() {
				return (P = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const g = ({
				className: e,
				...t
			}) => {
				return a.a.createElement("div", P({}, t, {
					className: Object(c.a)(e, x.a.container),
					onClick: e => {
						e.stopPropagation()
					}
				}))
			};
			var I = n("./src/reddit/models/Prediction/index.ts"),
				_ = n("./src/reddit/selectors/poll/index.ts"),
				y = n("./src/reddit/selectors/user.ts"),
				j = n("./src/reddit/components/Econ/Prediction/PredictionModal/index.tsx"),
				N = n("./src/reddit/components/Econ/Prediction/PredictionOption/index.tsx"),
				k = n("./src/reddit/components/Econ/Prediction/PredictionOption/SneakPeek.tsx"),
				C = n("./src/reddit/components/Econ/Prediction/VoteAnimation/index.tsx"),
				w = n("./src/reddit/selectors/subreddit.ts"),
				A = n("./src/reddit/components/Econ/Prediction/TournamentPostBody/v1/TournamentOverlay/index.m.less"),
				S = n.n(A);
			const {
				fbt: T
			} = n("./node_modules/fbt/lib/FbtPublic.js"), L = ({
				postId: e,
				subredditId: t,
				isLastPrediction: n
			}) => {
				const o = Object(p.a)(),
					r = Object(i.e)(e => Object(w.Q)(e, {
						subredditId: t
					}));
				return a.a.createElement(d.a, {
					className: S.a.container,
					to: `${null==r?void 0:r.url}predictions/`,
					onClick: () => o(m(e))
				}, a.a.createElement("div", {
					className: S.a.playTournament
				}, n ? T._("View Tournament", null, {
					hk: "4rKPbx"
				}) : T._("Keep Playing", null, {
					hk: "Xa82J"
				})))
			};
			var B = n("./src/reddit/actions/economics/helpers/index.ts"),
				M = n("./src/reddit/actions/economics/predictions/index.ts"),
				F = n("./src/reddit/actions/post.ts"),
				R = n("./src/reddit/components/Econ/Prediction/hooks/useDelayedUpvoteAnimation.tsx"),
				V = n("./src/reddit/helpers/trackers/predictions.ts"),
				D = n("./src/reddit/hooks/useToast.tsx"),
				U = n("./src/reddit/models/Vote/index.ts");
			const {
				fbt: X
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function z(e, t, n) {
				const o = Object(i.d)(),
					s = Object(i.e)(y.e),
					c = Object(i.e)(r.p),
					d = Object(p.a)(),
					l = Object(D.a)(),
					{
						startDelayedUpvoteAnimation: u
					} = Object(R.a)(n.id),
					{
						id: m,
						endsAt: b,
						options: v
					} = t,
					E = t.userSelection || t.selectedOptionId,
					{
						id: f,
						voteState: h
					} = n,
					[O, x] = a.a.useState(!1),
					[P, g] = a.a.useState(null),
					[_, j] = a.a.useState(!1),
					N = b < Date.now();
				return {
					isLoading: O,
					isShowingVoteAnimation: _,
					selectedOption: v.find(({
						id: e
					}) => e === P),
					selectOption: e => {
						N || E || g(e.id)
					},
					predict: async t => {
						if (t.currency === I.a.Coins && t.amount > s) return Object(B.promptUserToBuyMoreCoins)(), void d(V.a);
						if (N) return l(X._("Error: Failed to make prediction. This prediction has already ended", null, {
							hk: "22UWEr"
						})), void g(null);
						if (!m || !P) throw new Error("Invalid arguments, optionId and pollId must be strings");
						x(!0), d(Object(V.o)({
							pollId: m,
							selectedNumberTokens: t.amount
						}));
						try {
							await o(Object(M.r)({
								coinPackageId: t.id,
								selectedOptionId: P,
								price: t.amount,
								pollId: m,
								tournamentId: e,
								tournamentPostId: n.id
							})), c && h < U.a.upvoted && (o(Object(F.db)(f)), o(Object(F.db)(m)), u()), x(!1), g(null), j(!0)
						} catch (a) {
							x(!1), g(null), l(X._("Error: Failed to make prediction, please try again later", null, {
								hk: "1tECsx"
							}))
						}
					},
					cancelAction: a.a.useCallback(() => {
						g(null)
					}, []),
					hideAnimation: a.a.useCallback(() => {
						j(!1)
					}, [])
				}
			}
			var H = n("./src/reddit/components/Econ/Prediction/TournamentPostBody/v1/TournamentPrediction/index.m.less"),
				J = n.n(H);
			const Z = ({
				prediction: e,
				tournamentId: t,
				subredditId: n,
				post: r,
				isLastPrediction: s
			}) => {
				const d = Object(i.e)(y.K),
					l = Object(i.e)(y.X),
					u = Object(i.e)(t => Object(_.g)(t, {
						postId: e.id
					})),
					[m, p] = Object(o.useState)(!1),
					{
						isLoading: b,
						isShowingVoteAnimation: v,
						selectedOption: E,
						selectOption: f,
						predict: h,
						cancelAction: O,
						hideAnimation: x
					} = z(t, e, r),
					{
						options: P,
						userSelection: g
					} = u || {},
					{
						endsAt: w,
						title: A,
						status: S,
						resolvedOptionId: T,
						options: B
					} = e,
					M = w < Date.now(),
					F = S === I.b.Cancelled || S === I.b.CancelInProgress,
					R = null != P ? P : B;
				return a.a.createElement(a.a.Fragment, null, a.a.createElement("div", {
					className: Object(c.a)(J.a.poll, {
						[J.a.nightMode]: l
					})
				}, a.a.createElement("p", {
					className: J.a.pollQuestion
				}, A), R.map(e => a.a.createElement(C.a, {
					endsAt: w,
					key: `prediction-option-${e.id}`,
					isShowingVoteAnimation: v && g === e.id,
					onAnimationEnd: x
				}, a.a.createElement(N.a, {
					disabled: v,
					isCancelled: F,
					isEnded: M,
					isSelected: g === e.id,
					needsResolution: !1,
					option: e,
					onClick: () => f(e),
					resolvedOptionId: T,
					tournamentId: t,
					userSelection: g,
					userIsLoggedOut: !d,
					votePercentage: (g || M || m) && e.voteCount && (null == u ? void 0 : u.totalVoters) ? Math.floor(e.voteCount / u.totalVoters * 100) : null,
					isShowingHint: m
				}))), !F && a.a.createElement(k.a, {
					disabled: v || m || !!g,
					isEnded: M,
					postId: r.id,
					userSelection: g,
					isShowingHint: m,
					tournamentId: t,
					onReveal: () => p(!0)
				})), !!E && a.a.createElement(j.b, {
					className: J.a.modal,
					isCreatingVote: b,
					onOverlayClick: O,
					onCancel: O,
					onPredict: h,
					option: E,
					pollId: e.id,
					subredditId: n,
					tournamentId: t,
					withOverlay: !0
				}), !!g && a.a.createElement(L, {
					postId: r.id,
					subredditId: n,
					isLastPrediction: s
				}))
			};
			var K = n("./src/reddit/helpers/predictions/index.ts");
			const $ = ({
				post: e
			}) => {
				const {
					tournamentId: t,
					predictions: n,
					status: o
				} = e.predictionTournament, i = function(e) {
					return a.a.useMemo(() => {
						if (!e || !e.length) return;
						const t = e.filter(e => !e.isSpoiler && !e.isNSFW && e.status === I.b.Open && !e.selectedOptionId).sort(K.c);
						return {
							prediction: t[0],
							isLastPrediction: t.length <= 1
						}
					}, [])
				}(n);
				return (null == i ? void 0 : i.prediction) && o !== s.a.Closed ? a.a.createElement(g, null, a.a.createElement(Z, {
					subredditId: e.belongsTo.id,
					tournamentId: t,
					post: e,
					prediction: null == i ? void 0 : i.prediction,
					isLastPrediction: null == i ? void 0 : i.isLastPrediction
				})) : a.a.createElement(h, {
					postId: e.id
				})
			};
			var W = n("./node_modules/fbt/lib/FbtPublic.js"),
				Q = n("./src/reddit/components/Econ/Prediction/Confetti/index.tsx"),
				Y = n("./src/reddit/components/Econ/Prediction/TournamentSnoosImage/index.tsx"),
				q = n("./src/reddit/components/Econ/Prediction/TournamentPostBody/v2/AllPredictedCard/index.m.less"),
				G = n.n(q);
			const ee = ({
				postId: e
			}) => {
				const t = Object(i.e)(y.X);
				return a.a.createElement("section", {
					className: G.a.container
				}, a.a.createElement(Q.a, {
					className: G.a.confetti
				}), a.a.createElement(Y.a, {
					className: G.a.image
				}), a.a.createElement("div", {
					className: G.a.label
				}, a.a.createElement("div", {
					className: Object(c.a)(G.a.header, {
						[G.a.isNightMode]: t
					})
				}, W.fbt._("Your predictions are in!", null, {
					hk: "FZJZS"
				})), a.a.createElement("div", {
					className: G.a.description
				}, W.fbt._("May the odds be ever in your favor", null, {
					hk: "1Brw70"
				}))), a.a.createElement(h, {
					className: G.a.cta,
					postId: e
				}))
			};
			var te = n("./src/reddit/contexts/PageLayer/index.tsx"),
				ne = n("./src/reddit/components/Econ/Prediction/TournamentPostBody/v2/PredictionContainer/index.m.less"),
				oe = n.n(ne);

			function ae() {
				return (ae = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const ie = ({
				className: e,
				...t
			}) => {
				const n = Object(te.eb)(),
					o = Object(te.x)(n),
					r = Object(i.e)(y.X);
				return a.a.createElement("div", ae({}, t, {
					className: Object(c.a)(e, oe.a.container, {
						[oe.a.commentsPage]: o,
						[oe.a.isNightMode]: r
					}),
					onClick: e => {
						e.stopPropagation()
					}
				}))
			};
			var re = n("./src/reddit/components/Econ/Prediction/TournamentPostBody/v2/PredictionsCarousel/PredictionsProgress/index.m.less"),
				se = n.n(re);

			function ce() {
				return (ce = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const de = ({
				value: e,
				count: t,
				className: n,
				...o
			}) => {
				const r = Object(i.e)(y.X),
					s = Math.floor(100 * e / t);
				return a.a.createElement("div", ce({
					className: Object(c.a)(se.a.container, n, {
						[se.a.isNightMode]: r
					})
				}, o), a.a.createElement("div", {
					className: se.a.bar
				}, a.a.createElement("div", {
					className: se.a.progress,
					style: {
						width: `${s}%`
					}
				})), a.a.createElement("div", {
					className: se.a.label
				}, W.fbt._("{progress} of {count} predicted", [W.fbt._param("progress", e.toString()), W.fbt._param("count", t.toString())], {
					hk: "1dMoEh"
				})))
			};
			var le = n("./src/reddit/icons/fonts/index.tsx"),
				ue = n("./src/reddit/components/Econ/Prediction/PredictionCard/v2/index.tsx"),
				me = n("./src/reddit/components/Econ/Prediction/TournamentPostBody/v2/TournamentPrediction/index.m.less"),
				pe = n.n(me);

			function be() {
				return (be = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const ve = ({
				prediction: e,
				tournamentId: t,
				subredditId: n,
				post: o,
				onPredict: i,
				...r
			}) => {
				const {
					isLoading: s,
					selectedOption: c,
					selectOption: d,
					predict: l,
					cancelAction: u
				} = z(t, e, o);
				return a.a.createElement(a.a.Fragment, null, a.a.createElement(ue.a, be({
					prediction: e,
					selectedOptionId: c ? c.id : null,
					onSelectOption: d
				}, r)), !!c && a.a.createElement(j.b, {
					className: pe.a.modal,
					isCreatingVote: s,
					onOverlayClick: u,
					onCancel: u,
					onPredict: async e => {
						await l(e), i && i()
					},
					option: c,
					pollId: e.id,
					subredditId: n,
					tournamentId: t,
					withOverlay: !0
				}))
			};
			var Ee = n("./src/reddit/components/Econ/Prediction/TournamentPostBody/v2/PredictionsCarousel/index.m.less"),
				fe = n.n(Ee);
			const he = ({
					post: e,
					predictions: t
				}) => {
					const n = Object(i.e)(y.X),
						o = t.reduce((e, {
							userSelection: t
						}) => t ? e + 1 : e, 0),
						r = Object(p.a)(),
						{
							index: s,
							isFirstSlide: d,
							isLastSlide: l,
							nextSlide: m,
							prevSlide: b
						} = function(e) {
							const [t, n] = a.a.useState(0), o = 0 === t, i = t === e - 1;
							return {
								index: t,
								nextSlide: () => !i && n(t + 1),
								prevSlide: () => !o && n(t - 1),
								isFirstSlide: o,
								isLastSlide: i
							}
						}(t.length);
					return a.a.createElement("div", {
						className: Object(c.a)(fe.a.container, {
							[fe.a.isNightMode]: n
						})
					}, t.map((t, n) => Math.abs(s - n) > 1 ? null : a.a.createElement(ve, {
						key: t.id,
						className: fe.a.prediction,
						subredditId: e.belongsTo.id,
						tournamentId: e.predictionTournament.tournamentId,
						post: e,
						prediction: t,
						onPredict: m,
						style: {
							left: n < s ? "-100%" : n > s ? "100%" : 0
						}
					})), !d && a.a.createElement("button", {
						className: Object(c.a)(fe.a.slideButton, fe.a.prev),
						onClick: () => {
							r((e => t => ({
								...u(t, e),
								source: "predictions",
								action: "click",
								noun: "previous_post"
							}))(e.id)), b()
						}
					}, a.a.createElement(le.a, {
						name: "caret_left",
						className: fe.a.icon,
						isFilled: !0
					})), !l && a.a.createElement("button", {
						className: Object(c.a)(fe.a.slideButton, fe.a.next),
						onClick: () => {
							r((e => t => ({
								...u(t, e),
								source: "predictions",
								action: "click",
								noun: "next_post"
							}))(e.id)), m()
						}
					}, a.a.createElement(le.a, {
						name: "caret_right",
						className: fe.a.icon,
						isFilled: !0
					})), a.a.createElement(de, {
						className: fe.a.counter,
						value: o,
						count: t.length
					}))
				},
				Oe = ({
					post: e
				}) => {
					const {
						tournamentId: t,
						status: n
					} = e.predictionTournament, o = Object(p.a)(), r = Object(i.e)(e => Object(_.h)(e, t)), c = a.a.useMemo(() => r.filter(e => !e.isSpoiler && !e.isNSFW && !e.resolvedOptionId && e.predictionStatus === I.b.Open && e.endsAt > Date.now()).sort(K.a).map(e => e.id), [r.length]).map(e => r.find(t => t.id === e)).filter(e => Boolean(e)), d = c.some(({
						userSelection: e,
						endsAt: t,
						predictionStatus: n
					}) => !e && t > Date.now() && n === I.b.Open);
					return a.a.useEffect(() => {
						if (n === s.a.Closed) return;
						const t = d ? (e => t => ({
							...u(t, e),
							source: "predictions",
							action: "view",
							noun: "predictions_post"
						}))(e.id) : (e => t => ({
							...u(t, e),
							source: "predictions",
							action: "view",
							noun: "predicted_all_post"
						}))(e.id);
						o(t)
					}, [e.id, n, d, o]), n === s.a.Closed ? a.a.createElement(h, {
						postId: e.id
					}) : a.a.createElement(ie, null, d ? a.a.createElement(he, {
						post: e,
						predictions: c
					}) : a.a.createElement(ee, {
						postId: e.id
					}))
				},
				xe = e => {
					return Object(i.e)(r.x) ? a.a.createElement(Oe, e) : a.a.createElement($, e)
				};
			t.default = xe
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
		"./src/reddit/components/Econ/Prediction/TournamentPostBody/v2/AllPredictedCard/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_37Z55CaVrF2cxItf81OqwM",
				confetti: "_3RXDJZyDTOJPB79IFFe-D9",
				image: "_1qpXyTneN2jr_fPlHtDhQD",
				label: "_1Kt3nQaPDuTfRfZ7NxNwE9",
				header: "_1gjTIDkAAldY2dkPKFztcJ",
				isNightMode: "_3hYcKA5tu92TGPbocAsrfp",
				description: "_3FqN9nEkHH9ZFyWPIgG1YA",
				cta: "_37jEK8N9w6Hgw4Jj2cHGXp"
			}
		},
		"./src/reddit/components/Econ/Prediction/TournamentPostBody/v2/PredictionContainer/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_2k-ARnFW1QfgSpVI5a9iMr",
				commentsPage: "J0hIrAJKypecWYMKdh381",
				isNightMode: "_1zfx3blLwR-YsebTUPJjnZ"
			}
		},
		"./src/reddit/components/Econ/Prediction/TournamentPostBody/v2/PredictionsCarousel/PredictionsProgress/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_11_uzH5MGrImnCMS7zch-E",
				isNightMode: "_1VMw79pkaiHU2RJcgYNXq_",
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
				prev: "_3htaCzwa0kbRZ_xIhD7tiM",
				next: "_2WISAZ67pn140yjxzWe9_0",
				icon: "d3Bo2jRSNLbSB0JZkDm1Y",
				isNightMode: "_2zM5XXLeofaLEiF2y0rWCy",
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
				return a
			})), n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return r
			}));
			var o = n("./src/reddit/models/Prediction/index.ts");
			const a = (e, t) => {
					const n = Date.now(),
						a = n <= e.endsAt,
						i = n <= t.endsAt,
						r = e.status === o.b.Cancelled || e.status === o.b.CancelInProgress;
					return r !== (t.status === o.b.Cancelled || t.status === o.b.CancelInProgress) ? r ? 1 : -1 : a !== i ? a ? -1 : 1 : a && e.selectedOptionId !== t.selectedOptionId ? e.selectedOptionId ? 1 : -1 : !e.resolvedOptionId != !t.resolvedOptionId ? e.resolvedOptionId ? 1 : -1 : a || e.selectedOptionId === t.selectedOptionId ? e.createdAt > t.createdAt ? -1 : 1 : e.selectedOptionId ? -1 : 1
				},
				i = (e, t) => a({
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
						pollData: i
					} = e, {
						pollData: r
					} = t;
					return i && r ? a({
						createdAt: e.created,
						endsAt: null == i ? void 0 : i.votingEndTimestamp,
						selectedOptionId: null !== (n = null == i ? void 0 : i.userSelection) && void 0 !== n ? n : null,
						resolvedOptionId: null == i ? void 0 : i.resolvedOptionId,
						totalVoteCount: null == i ? void 0 : i.totalVoteCount,
						status: null == i ? void 0 : i.predictionStatus
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/index.ae033f957d5e17c95e71.js.map