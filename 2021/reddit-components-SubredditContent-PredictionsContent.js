// https://www.redditstatic.com/desktop2x/reddit-components-SubredditContent-PredictionsContent.95fd23a4430a788edecc.js
// Retrieved at 6/28/2021, 7:50:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-SubredditContent-PredictionsContent"], {
		"./node_modules/uuid/index.js": function(e, t, n) {
			var o = n("./node_modules/uuid/v1.js"),
				r = n("./node_modules/uuid/v4.js"),
				i = r;
			i.v1 = o, i.v4 = r, e.exports = i
		},
		"./node_modules/uuid/v1.js": function(e, t, n) {
			var o, r, i = n("./node_modules/uuid/lib/rng-browser.js"),
				d = n("./node_modules/uuid/lib/bytesToUuid.js"),
				c = 0,
				a = 0;
			e.exports = function(e, t, n) {
				var s = t && n || 0,
					u = t || [],
					l = (e = e || {}).node || o,
					p = void 0 !== e.clockseq ? e.clockseq : r;
				if (null == l || null == p) {
					var m = i();
					null == l && (l = o = [1 | m[0], m[1], m[2], m[3], m[4], m[5]]), null == p && (p = r = 16383 & (m[6] << 8 | m[7]))
				}
				var b = void 0 !== e.msecs ? e.msecs : (new Date).getTime(),
					f = void 0 !== e.nsecs ? e.nsecs : a + 1,
					j = b - c + (f - a) / 1e4;
				if (j < 0 && void 0 === e.clockseq && (p = p + 1 & 16383), (j < 0 || b > c) && void 0 === e.nsecs && (f = 0), f >= 1e4) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
				c = b, a = f, r = p;
				var O = (1e4 * (268435455 & (b += 122192928e5)) + f) % 4294967296;
				u[s++] = O >>> 24 & 255, u[s++] = O >>> 16 & 255, u[s++] = O >>> 8 & 255, u[s++] = 255 & O;
				var h = b / 4294967296 * 1e4 & 268435455;
				u[s++] = h >>> 8 & 255, u[s++] = 255 & h, u[s++] = h >>> 24 & 15 | 16, u[s++] = h >>> 16 & 255, u[s++] = p >>> 8 | 128, u[s++] = 255 & p;
				for (var x = 0; x < 6; ++x) u[s + x] = l[x];
				return t || d(u)
			}
		},
		"./src/reddit/actions/economics/predictions/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return v
			})), n.d(t, "h", (function() {
				return P
			})), n.d(t, "k", (function() {
				return I
			})), n.d(t, "j", (function() {
				return y
			})), n.d(t, "g", (function() {
				return E
			})), n.d(t, "b", (function() {
				return T
			})), n.d(t, "m", (function() {
				return S
			})), n.d(t, "n", (function() {
				return N
			})), n.d(t, "c", (function() {
				return L
			})), n.d(t, "a", (function() {
				return G
			})), n.d(t, "o", (function() {
				return F
			})), n.d(t, "i", (function() {
				return B
			})), n.d(t, "d", (function() {
				return Q
			})), n.d(t, "e", (function() {
				return q
			})), n.d(t, "l", (function() {
				return D
			}));
			var o = n("./node_modules/uuid/index.js"),
				r = n.n(o),
				i = n("./src/lib/initializeClient/installReducer.ts"),
				d = n("./src/reddit/reducers/features/predictions/index.ts"),
				c = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/reddit/endpoints/economics/predictions.ts"),
				s = n("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				u = n("./src/reddit/models/Prediction/index.ts"),
				l = n("./src/reddit/selectors/experiments/econ/index.ts"),
				p = n("./src/reddit/selectors/posts.ts"),
				m = n("./src/reddit/selectors/subreddit.ts"),
				b = n("./src/reddit/selectors/user.ts"),
				f = n("./src/reddit/selectors/features/predictions/creation/index.ts"),
				j = n("./src/reddit/selectors/features/predictions/tournaments/index.ts"),
				O = n("./src/reddit/actions/economics/predictions/constants.ts");
			Object(i.a)({
				features: {
					predictions: d.a
				}
			});
			const h = Object(c.a)(O.d),
				x = Object(c.a)(O.h),
				k = Object(c.a)(O.k),
				g = Object(c.a)(O.g),
				v = (e, t, n, o) => async (r, i, {
					gqlContext: d
				}) => {
					const c = Object(b.K)(i()),
						s = await Object(a.h)(d(), {
							subredditId: e,
							period: t,
							top: n,
							includeCurrentRank: c,
							tournamentId: o
						});
					if (s.error || !s.ok) throw new Error("Failed to fetch subreddit top predictors");
					const {
						subredditInfoById: u
					} = s.body.data;
					if (!u || !u.predictionWinners) throw new Error("Subreddit has no prediction winners");
					const {
						predictionWinners: l
					} = u, p = {
						subredditId: e,
						...l
					};
					return r(h(p)), p
				}, P = e => async (t, n, {
					gqlContext: o
				}) => {
					const r = n(),
						i = Object(p.R)(r, {
							postId: e,
							disallowProfile: !0
						});
					if (!i) throw new Error("Post does not belong to a subreddit");
					const d = await Object(a.f)(o(), i.name, Object(l.g)(r));
					if (d.error || !d.ok) throw new Error("Failed to fetch coin packs");
					const {
						subredditInfoByName: c
					} = d.body.data;
					if (!c || !c.predictionCoinPackages.length) throw new Error("Subreddit has no coin packs");
					return c.predictionCoinPackages
				}, I = ({
					coinPackageId: e,
					optionId: t,
					postId: n,
					price: o
				}) => async (r, i, {
					gqlContext: d
				}) => {
					const c = await Object(a.l)(d(), {
						coinPackageId: e,
						optionId: t,
						postId: n,
						price: o
					});
					if (c.error || !c.ok) throw new Error("Failed to make prediction");
					const {
						votePrediction: s
					} = c.body.data;
					if (!s) throw new Error("Failed to create prediction vote");
					return r(x({
						pollId: n,
						prediction: s.poll,
						price: o
					})), s.poll
				}, y = ({
					optionId: e,
					postId: t
				}) => async (n, o, {
					gqlContext: r
				}) => {
					const i = await Object(a.j)(r(), {
							optionId: e,
							postId: t
						}),
						{
							resolvePrediction: d
						} = i.body.data;
					if (!(null == d ? void 0 : d.poll)) throw new Error("Failed to resolve prediction");
					return n(g({
						pollId: t,
						prediction: d.poll
					})), d.poll
				}, _ = Object(c.a)(O.b), w = Object(c.a)(O.c), C = Object(c.a)(O.f), E = e => async (t, n, {
					gqlContext: o
				}) => {
					const r = n(),
						i = Object(m.F)(r, e);
					if (Object(j.i)(r, {
							subredditId: i
						})) return Object(j.e)(r, {
						subredditId: i
					});
					t(_({
						subredditId: i
					}));
					const d = await Object(a.i)(o(), {
						subredditName: e,
						isLatestOnly: !0,
						isIncludingPredictions: !0,
						isIncludingParticipants: !0
					});
					if (d.error || !d.ok) throw new Error("Failed to fetch tournaments");
					const {
						subredditInfoByName: c
					} = d.body.data;
					if (!c.predictionTournaments) return [];
					const u = c.predictionTournaments.map(e => {
							var t, n;
							const o = null !== (n = null === (t = e.predictionPosts) || void 0 === t ? void 0 : t.map(e => {
								const t = Object(s.e)(e),
									n = t.pollData;
								return {
									...t,
									pollData: n
								}
							})) && void 0 !== n ? n : [];
							return {
								...e,
								predictionPosts: o
							}
						}),
						l = u.reduce((e, t) => (t.predictionPosts.length && t.predictionPosts.forEach(t => {
							e[t.id] = t
						}), e), {});
					return t(w({
						subredditId: i,
						tournaments: u
					})), t(C({
						posts: l,
						meta: r.meta
					})), u
				}, T = Object(c.a)(O.a), S = Object(c.a)(O.i), N = Object(c.a)(O.j), L = ({
					subredditId: e
				}) => async (t, n, {
					gqlContext: o
				}) => {
					const r = n(),
						i = Object(f.b)(r),
						d = Object(l.a)(r);
					if (!i) throw new Error("Failed to create tournament, no prediction drafts attached");
					const c = await Object(a.c)(o(), {
							name: "Predictions Tournament",
							isStartImmediately: !0,
							subredditId: e,
							predictionDrafts: i,
							currency: d ? u.a.Coins : u.a.Tokens
						}),
						{
							createPredictionTournament: s
						} = c.body.data;
					if (!(null == s ? void 0 : s.tournament)) throw new Error("Failed to resolve prediction");
					const {
						tournament: p
					} = s;
					return t(w({
						subredditId: e,
						tournaments: [p]
					})), p
				}, G = (e, t) => async (n, o, {
					gqlContext: i
				}) => {
					var d;
					const c = Object(f.b)(o());
					if (!c) throw new Error("Failed to create prediction post, no prediction drafts attached");
					const s = await Object(a.b)(i(), {
							tournamentId: e,
							isStartImmediately: !0,
							iKey: `add-dfts-${r.a.v4()}`,
							subredditId: t,
							predictionDrafts: c
						}),
						{
							addPredictionDrafts: u
						} = s.body.data;
					if (null === (d = u.errors) || void 0 === d ? void 0 : d.length) throw new Error(u.errors[0].message);
					if (!(null == u ? void 0 : u.tournament)) throw new Error("Failed to create prediction");
					return u.tournament
				}, A = Object(c.a)(O.l), F = (e, t, n) => async (o, r, {
					gqlContext: i
				}) => {
					const d = await Object(a.k)(i(), {
							tournamentId: e,
							name: n
						}),
						{
							updatePredictionTournament: c
						} = d.body.data;
					if (!c.tournament) throw new Error("Failed to update prediction name");
					return o(A({
						subredditId: t,
						tournament: c.tournament
					})), c.tournament
				}, B = (e, t) => async (n, o, {
					gqlContext: r
				}) => {
					const i = await Object(a.d)(r(), {
							tournamentId: e
						}),
						{
							endPredictionTournament: d
						} = i.body.data;
					if (!d.tournament) throw new Error("Failed to update prediction name");
					return n(A({
						subredditId: t,
						tournament: d.tournament
					})), d.tournament
				}, Q = e => async (t, n, {
					gqlContext: o
				}) => {
					const r = await Object(a.e)(o(), {
						postId: e
					});
					if (!r.ok || r.error) throw new Error("Failed to fetch prediction chip packages");
					const {
						postInfoById: i
					} = r.body.data;
					if (!i.predictionChipPackages) throw new Error("Failed to fetch prediction chip packages");
					return i.predictionChipPackages
				}, q = e => async (t, n, {
					gqlContext: o
				}) => {
					const r = await Object(a.g)(o(), {
						tournamentId: e
					});
					if (!r.ok || r.error) throw new Error("Failed to fetch token balance");
					const {
						identity: i
					} = r.body.data;
					if (!i.hasOwnProperty("predictionTokens")) throw new Error("Failed to fetch token balance");
					return i.predictionTokens
				}, D = ({
					coinPackageId: e,
					selectedOptionId: t,
					price: n,
					pollId: o,
					postId: r,
					subredditId: i
				}) => async d => {
					const c = await d(I({
						coinPackageId: e,
						optionId: t,
						postId: o,
						price: n
					}));
					return d(k({
						postId: r,
						predictionId: o,
						selectedOptionId: t,
						subredditId: i
					})), c
				}
		},
		"./src/reddit/components/PostCreationForm/Prompt/PromptModal.m.less": function(e, t, n) {
			e.exports = {
				PrimaryButton: "_35XIX8S5eAkigMxHxx98TS",
				primaryButton: "_35XIX8S5eAkigMxHxx98TS",
				ModalText: "_1ShPAP1uGnX3ZkiyNiigAA",
				modalText: "_1ShPAP1uGnX3ZkiyNiigAA"
			}
		},
		"./src/reddit/components/PostCreationForm/Prompt/PromptModal.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				i = n("./src/higherOrderComponents/asModal/index.tsx"),
				d = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				c = n("./src/reddit/constants/keycodes.ts"),
				a = n("./src/reddit/controls/Button/index.tsx"),
				s = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				u = n("./src/reddit/controls/TextButton/index.tsx"),
				l = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				p = n("./src/reddit/components/PostCreationForm/Prompt/PromptModal.m.less"),
				m = n.n(p),
				b = n("./src/lib/lessComponent.tsx");
			const f = b.a.wrapped(a.i, "PrimaryButton", m.a),
				j = b.a.wrapped(d.o, "ModalText", m.a);
			class O extends r.a.PureComponent {
				constructor() {
					super(...arguments), this.handleEscapeKey = e => {
						e.keyCode === c.a.Escape && this.props.onClose()
					}
				}
				componentDidMount() {
					document.addEventListener("keydown", this.handleEscapeKey)
				}
				componentWillUnmount() {
					document.removeEventListener("keydown", this.handleEscapeKey)
				}
				render() {
					const {
						primaryButtonLoading: e,
						secondaryButtonLoading: t
					} = this.props;
					return r.a.createElement(d.d, null, r.a.createElement(d.h, null, r.a.createElement(l.a, null, r.a.createElement(d.p, null, this.props.titleText), r.a.createElement(u.a, {
						onClick: this.props.onClose
					}, r.a.createElement(d.b, null)))), r.a.createElement(d.k, null, r.a.createElement(j, null, this.props.bodyText)), r.a.createElement(d.f, null, r.a.createElement(d.a, {
						onClick: this.props.onSecondaryAction
					}, t ? r.a.createElement(s.a, {
						sizePx: 16
					}) : this.props.secondaryButtonText), r.a.createElement(f, {
						onClick: this.props.onPrimaryAction
					}, e ? r.a.createElement(s.a, {
						sizePx: 16
					}) : this.props.primaryButtonText)))
				}
			}
			t.a = Object(i.a)(O)
		},
		"./src/reddit/components/SubredditContent/PredictionsContent/index.m.less": function(e, t, n) {
			e.exports = {
				heading: "_3Ssm2Ifc9S1clbSFvddidr",
				predictionsContent: "NdeYom0Z9WAUwaGGUyf8G",
				controls: "_35knGUH_2n9AWNWijjTkrx",
				section: "_2hoxzC76nJ4tpcsYP942SN",
				label: "_1MBlUmiILkLotthnhcd1nu",
				input: "_396wd5yvfuYWVPSFsGLHqh",
				remainingCharacters: "_-9MbRCBvNxlV3EEDAazGJ",
				maxCharacters: "_3uljCwdnrGjddmhPXNHt-V",
				button: "_33GlBs_giNlvXXfcKIA-TF",
				endConditions: "_3-xXOP_z4fWBQebZPItzVd"
			}
		},
		"./src/reddit/components/SubredditContent/PredictionsContent/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "default", (function() {
				return g
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				d = n("./node_modules/react-redux/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/actions/economics/predictions/index.ts"),
				s = n("./src/reddit/actions/toaster.ts"),
				u = n("./src/reddit/controls/Button/index.tsx"),
				l = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				p = n("./src/reddit/helpers/trackers/predictions.ts"),
				m = n("./src/reddit/hooks/useTracking.ts"),
				b = n("./src/reddit/models/Toast/index.ts"),
				f = n("./src/reddit/selectors/features/predictions/tournaments/index.ts"),
				j = n("./src/reddit/components/PostCreationForm/Prompt/PromptModal.tsx");

			function O({
				isEnding: e,
				onClose: t,
				onConfirm: n
			}) {
				return i.a.createElement(j.a, {
					titleText: o.fbt._("End tournament?", null, {
						hk: "SHmTx"
					}),
					bodyText: o.fbt._("Are you sure you want to end the tournament? Once a tournament has ended, it cannot be restarted again. Ending the tournament also closes the community ‘Tournament’ tab.", null, {
						hk: "fqqXg"
					}),
					onClose: t,
					primaryButtonLoading: e,
					primaryButtonText: o.fbt._("End Tournament", null, {
						hk: "SUDS2"
					}),
					onPrimaryAction: n,
					onSecondaryAction: t,
					secondaryButtonText: o.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})
				})
			}
			var h = n("./src/reddit/components/SubredditContent/PredictionsContent/index.m.less"),
				x = n.n(h);
			const k = 90;

			function g({
				subreddit: e
			}) {
				const t = Object(d.d)(),
					n = Object(m.a)(),
					[j, h] = Object(r.useState)(""),
					[g, v] = Object(r.useState)(!1),
					[P, I] = Object(r.useState)(!1),
					[y, _] = Object(r.useState)(!1),
					[w, C] = Object(r.useState)(null),
					E = Object(d.e)(t => Object(f.a)(t, {
						subredditId: e.id
					})),
					T = Object(d.e)(t => Object(f.i)(t, {
						subredditId: e.id
					})),
					S = Object(d.e)(t => Object(f.f)(t, {
						subredditId: e.id
					}));
				Object(r.useEffect)(() => {
					n(Object(p.u)())
				}, [n]), Object(r.useEffect)(() => {
					t(Object(a.g)(e.name))
				}, [t, e.name]), Object(r.useEffect)(() => {
					E && (h(E.name), C(k - E.name.length))
				}, [E]);
				const N = Object(r.useCallback)(() => {
						n(Object(p.c)()), _(!0)
					}, [n]),
					L = !!j && ((null == E ? void 0 : E.name) !== j && j.length > 3);
				return i.a.createElement("div", {
					className: x.a.predictionsContent
				}, i.a.createElement("h1", {
					className: x.a.heading
				}, o.fbt._("Predictions", null, {
					hk: "1SloUh"
				})), i.a.createElement("div", {
					className: x.a.controls
				}, i.a.createElement("div", {
					className: x.a.section
				}, i.a.createElement("label", {
					className: x.a.label,
					htmlFor: "tournament-name"
				}, o.fbt._("Tournament name", null, {
					hk: "1ZAVPf"
				})), i.a.createElement("input", {
					name: "tournament-name",
					className: x.a.input,
					disabled: !E || T,
					type: "text",
					value: j,
					onChange: e => {
						const {
							value: t
						} = e.target;
						t.length <= k && (h(t), C(k - t.length))
					},
					placeholder: o.fbt._("/r/{subredditName} tournament", [o.fbt._param("subredditName", e.name)], {
						hk: "bN9XA"
					})
				}), i.a.createElement("div", {
					className: Object(c.a)(x.a.remainingCharacters, {
						[x.a.maxCharacters]: (null == j ? void 0 : j.length) === k
					})
				}, E && E.name !== j && null !== w ? o.fbt._({
					"*": "{remaining characters} characters remaining",
					_1: "1 character remaining"
				}, [o.fbt._plural(w, "remaining characters")], {
					hk: "1dBRgv"
				}) : i.a.createElement(i.a.Fragment, null, " ")), i.a.createElement(u.i, {
					className: x.a.button,
					disabled: !j || !E || T || !L,
					onClick: async () => {
						if (!E || !j) return null;
						n(Object(p.i)()), v(!0);
						try {
							await t(Object(a.o)(E.tournamentId, e.id, j))
						} catch (r) {
							t(Object(s.f)({
								kind: b.b.Error,
								text: o.fbt._("Failed to update tournament name, please try again later", null, {
									hk: "3bx78u"
								})
							}))
						}
						v(!1)
					}
				}, g ? i.a.createElement(l.a, {
					sizePx: 16
				}) : o.fbt._("Rename", null, {
					hk: "4z2EPS"
				}))), i.a.createElement("div", null, i.a.createElement("label", {
					className: x.a.label
				}, o.fbt._("End tournament", null, {
					hk: "ZWlOH"
				})), i.a.createElement("p", {
					className: x.a.endConditions
				}, o.fbt._("Tournament can only be ended after its predictions are ended and resolved", null, {
					hk: "2AgZtm"
				})), i.a.createElement(u.i, {
					className: x.a.button,
					disabled: !E || !S || T,
					onClick: N
				}, o.fbt._("End", null, {
					hk: "HWN7f"
				})), y && i.a.createElement(O, {
					isEnding: P,
					onClose: () => {
						_(!1)
					},
					onConfirm: async () => {
						if (!E || !S) return null;
						I(!0);
						try {
							await t(Object(a.i)(E.tournamentId, e.id))
						} catch (n) {
							t(Object(s.f)({
								kind: b.b.Error,
								text: o.fbt._("Failed to end tournament, please try again later", null, {
									hk: "2huCGU"
								})
							}))
						}
						I(!1), _(!1)
					}
				}))))
			}
		},
		"./src/reddit/endpoints/economics/predictions.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return f
			})), n.d(t, "l", (function() {
				return j
			})), n.d(t, "j", (function() {
				return O
			})), n.d(t, "a", (function() {
				return h
			})), n.d(t, "h", (function() {
				return x
			})), n.d(t, "c", (function() {
				return k
			})), n.d(t, "i", (function() {
				return g
			})), n.d(t, "b", (function() {
				return v
			})), n.d(t, "k", (function() {
				return P
			})), n.d(t, "d", (function() {
				return I
			})), n.d(t, "e", (function() {
				return y
			})), n.d(t, "g", (function() {
				return _
			}));
			var o = n("./src/lib/makeGqlRequest/index.ts"),
				r = n("./src/redditGQL/operations/AddPredictionDrafts.json"),
				i = n("./src/redditGQL/operations/CreatePredictionTournament.json"),
				d = n("./src/redditGQL/operations/EndPredictionTournament.json"),
				c = n("./src/redditGQL/operations/GetPredictionChipPackages.json"),
				a = n("./src/redditGQL/operations/GetPredictionCoinPackages.json"),
				s = n("./src/redditGQL/operations/GetPredictionToken.json"),
				u = n("./src/redditGQL/operations/GetTournaments.json"),
				l = n("./src/redditGQL/operations/ResolvePrediction.json"),
				p = n("./src/redditGQL/operations/SubredditTopPredictors.json"),
				m = n("./src/redditGQL/operations/UpdatePredictionTournament.json"),
				b = n("./src/redditGQL/operations/VotePrediction.json");
			const f = (e, t, n) => Object(o.a)(e, {
					...a,
					variables: {
						subredditName: t,
						includeFreePackage: n
					}
				}),
				j = (e, {
					postId: t,
					optionId: n,
					coinPackageId: r,
					price: i
				}) => Object(o.a)(e, {
					...b,
					variables: {
						input: {
							postId: t,
							optionId: n,
							coinPackageId: r,
							price: i
						}
					}
				}),
				O = (e, {
					postId: t,
					optionId: n
				}) => Object(o.a)(e, {
					...l,
					variables: {
						input: {
							postId: t,
							optionId: n
						}
					}
				});
			var h;
			! function(e) {
				e.AllTime = "ALL_TIME", e.Monthly = "MONTHLY"
			}(h || (h = {}));
			const x = (e, {
					subredditId: t,
					period: n,
					top: r,
					includeCurrentRank: i,
					tournamentId: d
				}) => Object(o.a)(e, {
					...p,
					variables: {
						subredditId: t,
						period: n,
						top: r,
						includeCurrentRank: i,
						tournamentId: d
					}
				}),
				k = (e, t) => Object(o.a)(e, {
					...i,
					variables: {
						input: t
					}
				}),
				g = (e, t) => Object(o.a)(e, {
					...u,
					variables: t
				}),
				v = (e, t) => Object(o.a)(e, {
					...r,
					variables: {
						input: t
					}
				}),
				P = (e, t) => Object(o.a)(e, {
					...m,
					variables: {
						input: t
					}
				}),
				I = (e, t) => Object(o.a)(e, {
					...d,
					variables: {
						input: t
					}
				}),
				y = (e, t) => Object(o.a)(e, {
					...c,
					variables: t
				}),
				_ = (e, t) => Object(o.a)(e, {
					...s,
					variables: t
				})
		},
		"./src/reddit/helpers/trackers/predictions.ts": function(e, t, n) {
			"use strict";
			n.d(t, "p", (function() {
				return i
			})), n.d(t, "q", (function() {
				return d
			})), n.d(t, "r", (function() {
				return c
			})), n.d(t, "l", (function() {
				return a
			})), n.d(t, "t", (function() {
				return s
			})), n.d(t, "n", (function() {
				return u
			})), n.d(t, "o", (function() {
				return l
			})), n.d(t, "m", (function() {
				return p
			})), n.d(t, "a", (function() {
				return m
			})), n.d(t, "s", (function() {
				return b
			})), n.d(t, "d", (function() {
				return f
			})), n.d(t, "v", (function() {
				return j
			})), n.d(t, "k", (function() {
				return O
			})), n.d(t, "x", (function() {
				return h
			})), n.d(t, "g", (function() {
				return x
			})), n.d(t, "w", (function() {
				return k
			})), n.d(t, "u", (function() {
				return g
			})), n.d(t, "c", (function() {
				return v
			})), n.d(t, "i", (function() {
				return P
			})), n.d(t, "e", (function() {
				return I
			})), n.d(t, "b", (function() {
				return y
			})), n.d(t, "j", (function() {
				return _
			})), n.d(t, "h", (function() {
				return w
			})), n.d(t, "f", (function() {
				return C
			}));
			var o = n("./src/reddit/selectors/telemetry.ts");
			const r = "poll",
				i = e => ({
					...Object(o.defaults)(e),
					source: r,
					action: "select",
					noun: "poll_option"
				}),
				d = e => ({
					...Object(o.defaults)(e),
					source: r,
					action: "select",
					noun: "prediction_option"
				}),
				c = e => ({
					...Object(o.defaults)(e),
					source: r,
					action: "view",
					noun: "predict_info_modal"
				}),
				a = e => ({
					...Object(o.defaults)(e),
					source: r,
					action: "close",
					noun: "predict_info_modal"
				}),
				s = e => ({
					...Object(o.defaults)(e),
					source: r,
					action: "view",
					noun: "predict_option_modal"
				}),
				u = ({
					pollId: e,
					selectedNumberCoins: t,
					totalStakeAmount: n
				}) => i => ({
					...Object(o.defaults)(i),
					source: r,
					action: "confirm",
					noun: "predict",
					poll: Object(o.poll)(i, e, !1, void 0, t),
					goldPurchase: {
						numberCoins: n
					}
				}),
				l = ({
					pollId: e,
					selectedNumberTokens: t
				}) => n => ({
					...Object(o.defaults)(n),
					source: r,
					action: "confirm",
					noun: "predict",
					poll: Object(o.poll)(n, e, !1, void 0, void 0, t)
				}),
				p = ({
					pollId: e,
					selectedNumberCoins: t,
					selectedNumberTokens: n
				}) => i => ({
					...Object(o.defaults)(i),
					source: r,
					action: "close",
					noun: "prediction_modal",
					poll: Object(o.poll)(i, e, !1, t, n)
				}),
				m = e => ({
					...Object(o.defaults)(e),
					source: r,
					action: "click",
					noun: "add_coins"
				}),
				b = e => t => ({
					...Object(o.defaults)(t),
					source: "global",
					action: "view",
					noun: "screen",
					actionInfo: {
						pageType: "predictions_leaderboard",
						reason: e ? "prediction_details" : "subreddit_header"
					}
				}),
				f = ({
					targetUserId: e
				}) => t => ({
					...Object(o.defaults)(t),
					source: "predictions",
					action: "click",
					noun: "leaderboard_profile",
					targetUser: {
						id: e
					}
				}),
				j = ({
					numberPredictionTokens: e,
					pollId: t
				}) => n => ({
					...Object(o.defaults)(n),
					source: r,
					action: "view",
					noun: "token_claim_modal",
					poll: Object(o.poll)(n, t, !1, void 0, void 0, e)
				}),
				O = ({
					pageType: e
				}) => t => ({
					...Object(o.defaults)(t),
					source: "predictions",
					action: "click",
					noun: "tournament",
					actionInfo: {
						pageType: e
					}
				}),
				h = () => e => ({
					...Object(o.defaults)(e),
					source: "global",
					action: "view",
					noun: "screen",
					actionInfo: {
						pageType: "community",
						paneName: "predictions"
					}
				}),
				x = () => e => ({
					...Object(o.defaults)(e),
					source: "predictions",
					action: "click",
					noun: "leaderboard",
					actionInfo: {
						pageType: "community",
						paneName: "predictions"
					}
				}),
				k = () => e => ({
					...Object(o.defaults)(e),
					source: "global",
					action: "view",
					noun: "screen",
					actionInfo: {
						pageType: "tournament_leaderboard",
						reason: "predictions_tab"
					}
				}),
				g = () => e => ({
					...Object(o.defaults)(e),
					source: "global",
					action: "view",
					noun: "screen",
					actionInfo: {
						pageType: "mod_tool_predict"
					}
				}),
				v = () => e => ({
					...Object(o.defaults)(e),
					source: "mod_tool_predict",
					action: "click",
					noun: "end_tournament"
				}),
				P = () => e => ({
					...Object(o.defaults)(e),
					source: "mod_tool_predict",
					action: "click",
					noun: "rename_tournament"
				}),
				I = () => e => ({
					...Object(o.defaults)(e),
					source: "predictions",
					action: "click",
					noun: "next"
				}),
				y = () => e => ({
					...Object(o.defaults)(e),
					source: "predictions",
					action: "click",
					noun: "add_more"
				}),
				_ = () => e => ({
					...Object(o.defaults)(e),
					source: "predictions",
					action: "click",
					noun: "start_tournament"
				}),
				w = () => e => ({
					...Object(o.defaults)(e),
					source: "menu_links_bar",
					action: "click",
					noun: "predictions_tab"
				}),
				C = e => t => ({
					...Object(o.defaults)(t),
					source: "predictions",
					action: "click",
					noun: "play_tournament",
					poll: Object(o.predictionTournamentPoll)(t, e),
					post: Object(o.post)(t, e),
					predictions: Object(o.predictions)(t, e),
					subreddit: Object(o.subreddit)(t)
				})
		},
		"./src/reddit/selectors/features/predictions/creation/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return d
			})), n.d(t, "a", (function() {
				return c
			}));
			var o = n("./src/lib/initializeClient/installReducer.ts"),
				r = n("./src/reddit/reducers/features/predictions/index.ts"),
				i = n("./src/reddit/selectors/postCreations.ts");
			Object(o.a)({
				features: {
					predictions: r.a
				}
			});
			const d = e => {
					const t = (e => {
						var t, n;
						return null === (n = null === (t = e.features) || void 0 === t ? void 0 : t.predictions) || void 0 === n ? void 0 : n.creation
					})(e);
					return (null == t ? void 0 : t.length) ? null == t ? void 0 : t.map(t => {
						const n = Object(i.cb)({
								...e,
								creations: {
									...e.creations,
									formData: t.formData,
									formState: t.formState
								}
							}, {}),
							o = t.formData.polls,
							r = o.options.map(e => ({
								text: e.text
							})),
							d = {};
						return n.document ? d.richText = JSON.stringify({
							document: n.document
						}) : n.markdown && (d.markdown = n.markdown), {
							title: n.title,
							isLiveChat: n.isChatPost,
							isNsfw: n.isNSFW,
							isSpoiler: n.isSpoiler,
							votingEndsAt: o.endDate.toISOString(),
							body: d,
							options: r
						}
					}) : []
				},
				c = e => {
					var t, n;
					return !!(null === (n = null === (t = e.features) || void 0 === t ? void 0 : t.predictions) || void 0 === n ? void 0 : n.creation.length)
				}
		},
		"./src/redditGQL/operations/AddPredictionDrafts.json": function(e) {
			e.exports = JSON.parse('{"id":"84c24426ab00"}')
		},
		"./src/redditGQL/operations/CreatePredictionTournament.json": function(e) {
			e.exports = JSON.parse('{"id":"b8bc80c247a6"}')
		},
		"./src/redditGQL/operations/EndPredictionTournament.json": function(e) {
			e.exports = JSON.parse('{"id":"160c1d2839c1"}')
		},
		"./src/redditGQL/operations/GetPredictionChipPackages.json": function(e) {
			e.exports = JSON.parse('{"id":"3785e4a718f5"}')
		},
		"./src/redditGQL/operations/GetPredictionCoinPackages.json": function(e) {
			e.exports = JSON.parse('{"id":"6829c428155b"}')
		},
		"./src/redditGQL/operations/GetPredictionToken.json": function(e) {
			e.exports = JSON.parse('{"id":"26b911e67a5f"}')
		},
		"./src/redditGQL/operations/GetTournaments.json": function(e) {
			e.exports = JSON.parse('{"id":"d2575383d168"}')
		},
		"./src/redditGQL/operations/ResolvePrediction.json": function(e) {
			e.exports = JSON.parse('{"id":"45c2e0b86b90"}')
		},
		"./src/redditGQL/operations/SubredditTopPredictors.json": function(e) {
			e.exports = JSON.parse('{"id":"3407d5f67207"}')
		},
		"./src/redditGQL/operations/UpdatePredictionTournament.json": function(e) {
			e.exports = JSON.parse('{"id":"aeb2b0e42e97"}')
		},
		"./src/redditGQL/operations/VotePrediction.json": function(e) {
			e.exports = JSON.parse('{"id":"1712829dfb21"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-SubredditContent-PredictionsContent.95fd23a4430a788edecc.js.map