// https://www.redditstatic.com/desktop2x/reddit-components-SubredditContent-PredictionsContent.ba992b0b2f855c4898be.js
// Retrieved at 3/24/2021, 6:00:05 PM by Reddit Dataminer v1.0.0
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
				a = n("./node_modules/uuid/lib/bytesToUuid.js"),
				c = 0,
				s = 0;
			e.exports = function(e, t, n) {
				var d = t && n || 0,
					u = t || [],
					l = (e = e || {}).node || o,
					p = void 0 !== e.clockseq ? e.clockseq : r;
				if (null == l || null == p) {
					var m = i();
					null == l && (l = o = [1 | m[0], m[1], m[2], m[3], m[4], m[5]]), null == p && (p = r = 16383 & (m[6] << 8 | m[7]))
				}
				var b = void 0 !== e.msecs ? e.msecs : (new Date).getTime(),
					f = void 0 !== e.nsecs ? e.nsecs : s + 1,
					h = b - c + (f - s) / 1e4;
				if (h < 0 && void 0 === e.clockseq && (p = p + 1 & 16383), (h < 0 || b > c) && void 0 === e.nsecs && (f = 0), f >= 1e4) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
				c = b, s = f, r = p;
				var j = (1e4 * (268435455 & (b += 122192928e5)) + f) % 4294967296;
				u[d++] = j >>> 24 & 255, u[d++] = j >>> 16 & 255, u[d++] = j >>> 8 & 255, u[d++] = 255 & j;
				var O = b / 4294967296 * 1e4 & 268435455;
				u[d++] = O >>> 8 & 255, u[d++] = 255 & O, u[d++] = O >>> 24 & 15 | 16, u[d++] = O >>> 16 & 255, u[d++] = p >>> 8 | 128, u[d++] = 255 & p;
				for (var g = 0; g < 6; ++g) u[d + g] = l[g];
				return t || a(u)
			}
		},
		"./src/graphql/operations/AddPredictionDrafts.json": function(e) {
			e.exports = JSON.parse('{"id":"595acecb7f6e"}')
		},
		"./src/graphql/operations/CreatePredictionTournament.json": function(e) {
			e.exports = JSON.parse('{"id":"51591a693756"}')
		},
		"./src/graphql/operations/EndPredictionTournament.json": function(e) {
			e.exports = JSON.parse('{"id":"f18ab01cee78"}')
		},
		"./src/graphql/operations/GetPredictionChipPackages.json": function(e) {
			e.exports = JSON.parse('{"id":"3785e4a718f5"}')
		},
		"./src/graphql/operations/GetPredictionCoinPackages.json": function(e) {
			e.exports = JSON.parse('{"id":"6829c428155b"}')
		},
		"./src/graphql/operations/GetPredictionToken.json": function(e) {
			e.exports = JSON.parse('{"id":"26b911e67a5f"}')
		},
		"./src/graphql/operations/GetTournaments.json": function(e) {
			e.exports = JSON.parse('{"id":"6cd935a036e1"}')
		},
		"./src/graphql/operations/ResolvePrediction.json": function(e) {
			e.exports = JSON.parse('{"id":"45c2e0b86b90"}')
		},
		"./src/graphql/operations/SubredditTopPredictors.json": function(e) {
			e.exports = JSON.parse('{"id":"3407d5f67207"}')
		},
		"./src/graphql/operations/UpdatePredictionTournament.json": function(e) {
			e.exports = JSON.parse('{"id":"2245303550b1"}')
		},
		"./src/graphql/operations/VotePrediction.json": function(e) {
			e.exports = JSON.parse('{"id":"1712829dfb21"}')
		},
		"./src/reddit/actions/economics/predictions/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return x
			})), n.d(t, "h", (function() {
				return k
			})), n.d(t, "k", (function() {
				return v
			})), n.d(t, "j", (function() {
				return y
			})), n.d(t, "g", (function() {
				return w
			})), n.d(t, "b", (function() {
				return C
			})), n.d(t, "l", (function() {
				return I
			})), n.d(t, "c", (function() {
				return E
			})), n.d(t, "a", (function() {
				return T
			})), n.d(t, "m", (function() {
				return N
			})), n.d(t, "i", (function() {
				return q
			})), n.d(t, "d", (function() {
				return A
			})), n.d(t, "e", (function() {
				return F
			}));
			var o = n("./node_modules/uuid/index.js"),
				r = n.n(o),
				i = n("./src/lib/initializeClient/installReducer.ts"),
				a = n("./src/reddit/reducers/features/predictions/index.ts"),
				c = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/reddit/endpoints/economics/predictions.ts"),
				d = n("./src/reddit/models/Poll/index.ts"),
				u = n("./src/reddit/selectors/experiments/econ/predictions.ts"),
				l = n("./src/reddit/selectors/posts.ts"),
				p = n("./src/reddit/selectors/subreddit.ts"),
				m = n("./src/reddit/selectors/user.ts"),
				b = n("./src/reddit/selectors/features/predictions/creation/index.ts"),
				f = n("./src/reddit/selectors/features/predictions/tournaments/index.ts"),
				h = n("./src/reddit/actions/economics/predictions/constants.ts");
			Object(i.a)({
				features: {
					predictions: a.a
				}
			});
			const j = Object(c.a)(h.d),
				O = Object(c.a)(h.g),
				g = Object(c.a)(h.f),
				x = (e, t, n, o) => async (r, i, {
					gqlContext: a
				}) => {
					const c = Object(m.J)(i()),
						d = await Object(s.h)(a(), {
							subredditId: e,
							period: t,
							top: n,
							includeCurrentRank: c,
							tournamentId: o
						});
					if (d.error || !d.ok) throw new Error("Failed to fetch subreddit top predictors");
					const {
						subredditInfoById: u
					} = d.body.data;
					if (!u || !u.predictionWinners) throw new Error("Subreddit has no prediction winners");
					const {
						predictionWinners: l
					} = u, p = {
						subredditId: e,
						...l
					};
					return r(j(p)), p
				}, k = e => async (t, n, {
					gqlContext: o
				}) => {
					const r = n(),
						i = Object(l.P)(r, {
							postId: e,
							disallowProfile: !0
						});
					if (!i) throw new Error("Post does not belong to a subreddit");
					const a = await Object(s.f)(o(), i.name, Object(u.d)(r));
					if (a.error || !a.ok) throw new Error("Failed to fetch coin packs");
					const {
						subredditInfoByName: c
					} = a.body.data;
					if (!c || !c.predictionCoinPackages.length) throw new Error("Subreddit has no coin packs");
					return c.predictionCoinPackages
				}, v = ({
					coinPackageId: e,
					optionId: t,
					postId: n,
					price: o
				}) => async (r, i, {
					gqlContext: a
				}) => {
					const c = await Object(s.l)(a(), {
						coinPackageId: e,
						optionId: t,
						postId: n,
						price: o
					});
					if (c.error || !c.ok) throw new Error("Failed to make prediction");
					const {
						votePrediction: d
					} = c.body.data;
					if (!d) throw new Error("Failed to create prediction vote");
					return r(O({
						pollId: n,
						prediction: d.poll,
						price: o
					})), d.poll
				}, y = ({
					optionId: e,
					postId: t
				}) => async (n, o, {
					gqlContext: r
				}) => {
					const i = await Object(s.j)(r(), {
							optionId: e,
							postId: t
						}),
						{
							resolvePrediction: a
						} = i.body.data;
					if (!(null == a ? void 0 : a.poll)) throw new Error("Failed to resolve prediction");
					return n(g({
						pollId: t,
						prediction: a.poll
					})), a.poll
				}, P = Object(c.a)(h.b), _ = Object(c.a)(h.c), w = e => async (t, n, {
					gqlContext: o
				}) => {
					const r = n(),
						i = Object(p.F)(r, e);
					if (Object(f.k)(r, {
							subredditId: i
						})) return Object(f.f)(r, {
						subredditId: i
					});
					t(P({
						subredditId: i
					}));
					const a = await Object(s.i)(o(), {
						subredditName: e,
						isLatestOnly: !0,
						isIncludingPredictions: !0,
						isIncludingParticipants: !0
					});
					if (a.error || !a.ok) throw new Error("Failed to fetch tournaments");
					const {
						subredditInfoByName: c
					} = a.body.data;
					if (!c.predictionTournaments) return [];
					const d = c.predictionTournaments;
					return t(_({
						subredditId: i,
						tournaments: d
					})), d
				}, C = Object(c.a)(h.a), I = Object(c.a)(h.h), E = ({
					subredditId: e
				}) => async (t, n, {
					gqlContext: o
				}) => {
					const r = n(),
						i = Object(b.b)(r),
						a = Object(u.a)(r);
					if (!i) throw new Error("Failed to create tournament, no prediction drafts attached");
					const c = await Object(s.c)(o(), {
							name: "Predictions Tournament",
							isStartImmediately: !0,
							subredditId: e,
							predictionDrafts: i,
							currency: a ? d.b.Coins : d.b.Tokens
						}),
						{
							createPredictionTournament: l
						} = c.body.data;
					if (!(null == l ? void 0 : l.tournament)) throw new Error("Failed to resolve prediction");
					return l.tournament
				}, T = (e, t) => async (n, o, {
					gqlContext: i
				}) => {
					const a = Object(b.b)(o());
					if (!a) throw new Error("Failed to create prediction post, no prediction drafts attached");
					const c = await Object(s.b)(i(), {
							tournamentId: e,
							isStartImmediately: !0,
							iKey: `add-dfts-${r.a.v4()}`,
							subredditId: t,
							predictionDrafts: a
						}),
						{
							addPredictionDrafts: d
						} = c.body.data;
					if (!(null == d ? void 0 : d.tournament)) throw new Error("Failed to create prediction");
					return d.tournament
				}, S = Object(c.a)(h.i), N = (e, t, n) => async (o, r, {
					gqlContext: i
				}) => {
					const a = await Object(s.k)(i(), {
							tournamentId: e,
							name: n
						}),
						{
							updatePredictionTournament: c
						} = a.body.data;
					if (!c.tournament) throw new Error("Failed to update prediction name");
					return o(S({
						subredditId: t,
						tournament: c.tournament
					})), c.tournament
				}, q = (e, t) => async (n, o, {
					gqlContext: r
				}) => {
					const i = await Object(s.d)(r(), {
							tournamentId: e
						}),
						{
							endPredictionTournament: a
						} = i.body.data;
					if (!a.tournament) throw new Error("Failed to update prediction name");
					return n(S({
						subredditId: t,
						tournament: a.tournament
					})), a.tournament
				}, A = e => async (t, n, {
					gqlContext: o
				}) => {
					const r = await Object(s.e)(o(), {
						postId: e
					});
					if (!r.ok || r.error) throw new Error("Failed to fetch prediction chip packages");
					const {
						postInfoById: i
					} = r.body.data;
					if (!i.predictionChipPackages) throw new Error("Failed to fetch prediction chip packages");
					return i.predictionChipPackages
				}, F = e => async (t, n, {
					gqlContext: o
				}) => {
					const r = await Object(s.g)(o(), {
						tournamentId: e
					});
					if (!r.ok || r.error) throw new Error("Failed to fetch token balance");
					const {
						identity: i
					} = r.body.data;
					if (!i.hasOwnProperty("predictionTokens")) throw new Error("Failed to fetch token balance");
					return i.predictionTokens
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
				a = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				c = n("./src/reddit/constants/keycodes.ts"),
				s = n("./src/reddit/controls/Button/index.tsx"),
				d = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				u = n("./src/reddit/controls/TextButton/index.tsx"),
				l = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				p = n("./src/reddit/components/PostCreationForm/Prompt/PromptModal.m.less"),
				m = n.n(p),
				b = n("./src/lib/lessComponent.tsx");
			const f = b.a.wrapped(s.i, "PrimaryButton", m.a),
				h = b.a.wrapped(a.o, "ModalText", m.a);
			class j extends r.a.PureComponent {
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
					return r.a.createElement(a.d, null, r.a.createElement(a.h, null, r.a.createElement(l.a, null, r.a.createElement(a.p, null, this.props.titleText), r.a.createElement(u.a, {
						onClick: this.props.onClose
					}, r.a.createElement(a.b, null)))), r.a.createElement(a.k, null, r.a.createElement(h, null, this.props.bodyText)), r.a.createElement(a.f, null, r.a.createElement(a.a, {
						onClick: this.props.onSecondaryAction
					}, t ? r.a.createElement(d.a, {
						sizePx: 16
					}) : this.props.secondaryButtonText), r.a.createElement(f, {
						onClick: this.props.onPrimaryAction
					}, e ? r.a.createElement(d.a, {
						sizePx: 16
					}) : this.props.primaryButtonText)))
				}
			}
			t.a = Object(i.a)(j)
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
				return k
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				s = n("./src/reddit/actions/economics/predictions/index.ts"),
				d = n("./src/reddit/actions/toaster.ts"),
				u = n("./src/reddit/controls/Button/index.tsx"),
				l = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				p = n("./src/reddit/helpers/trackers/predictions.ts"),
				m = n("./src/reddit/hooks/useTracking.ts"),
				b = n("./src/reddit/models/Toast/index.ts"),
				f = n("./src/reddit/selectors/features/predictions/tournaments/index.ts"),
				h = n("./src/reddit/components/PostCreationForm/Prompt/PromptModal.tsx");

			function j({
				isEnding: e,
				onClose: t,
				onConfirm: n
			}) {
				return i.a.createElement(h.a, {
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
			var O = n("./src/reddit/components/SubredditContent/PredictionsContent/index.m.less"),
				g = n.n(O);
			const x = 90;

			function k({
				subreddit: e
			}) {
				const t = Object(a.d)(),
					n = Object(m.a)(),
					[h, O] = Object(r.useState)(""),
					[k, v] = Object(r.useState)(!1),
					[y, P] = Object(r.useState)(!1),
					[_, w] = Object(r.useState)(!1),
					[C, I] = Object(r.useState)(null),
					E = Object(a.e)(t => Object(f.b)(t, {
						subredditId: e.id
					})),
					T = Object(a.e)(t => Object(f.k)(t, {
						subredditId: e.id
					})),
					S = Object(a.e)(t => Object(f.g)(t, {
						subredditId: e.id
					}));
				Object(r.useEffect)(() => {
					n(Object(p.s)())
				}, [n]), Object(r.useEffect)(() => {
					t(Object(s.g)(e.name))
				}, [t, e.name]), Object(r.useEffect)(() => {
					E && (O(E.name), I(x - E.name.length))
				}, [E]);
				const N = Object(r.useCallback)(() => {
						n(Object(p.c)()), w(!0)
					}, [n]),
					q = !!h && ((null == E ? void 0 : E.name) !== h && h.length > 3);
				return i.a.createElement("div", {
					className: g.a.predictionsContent
				}, i.a.createElement("h1", {
					className: g.a.heading
				}, o.fbt._("Predictions", null, {
					hk: "1SloUh"
				})), i.a.createElement("div", {
					className: g.a.controls
				}, i.a.createElement("div", {
					className: g.a.section
				}, i.a.createElement("label", {
					className: g.a.label,
					htmlFor: "tournament-name"
				}, o.fbt._("Tournament name", null, {
					hk: "1ZAVPf"
				})), i.a.createElement("input", {
					name: "tournament-name",
					className: g.a.input,
					disabled: !E || T,
					type: "text",
					value: h,
					onChange: e => {
						const {
							value: t
						} = e.target;
						t.length <= x && (O(t), I(x - t.length))
					},
					placeholder: o.fbt._("/r/{subredditName} tournament", [o.fbt._param("subredditName", e.name)], {
						hk: "bN9XA"
					})
				}), i.a.createElement("div", {
					className: Object(c.a)(g.a.remainingCharacters, {
						[g.a.maxCharacters]: (null == h ? void 0 : h.length) === x
					})
				}, E && E.name !== h && null !== C ? o.fbt._({
					"*": "{remaining characters} characters remaining",
					_1: "1 character remaining"
				}, [o.fbt._plural(C, "remaining characters")], {
					hk: "1dBRgv"
				}) : i.a.createElement(i.a.Fragment, null, " ")), i.a.createElement(u.i, {
					className: g.a.button,
					disabled: !h || !E || T || !q,
					onClick: async () => {
						if (!E || !h) return null;
						n(Object(p.g)()), v(!0);
						try {
							await t(Object(s.m)(E.tournamentId, e.id, h))
						} catch (r) {
							t(Object(d.f)({
								kind: b.b.Error,
								text: o.fbt._("Failed to update tournament name, please try again later", null, {
									hk: "3bx78u"
								})
							}))
						}
						v(!1)
					}
				}, k ? i.a.createElement(l.a, {
					sizePx: 16
				}) : o.fbt._("Rename", null, {
					hk: "4z2EPS"
				}))), i.a.createElement("div", null, i.a.createElement("label", {
					className: g.a.label
				}, o.fbt._("End tournament", null, {
					hk: "ZWlOH"
				})), i.a.createElement("p", {
					className: g.a.endConditions
				}, o.fbt._("Tournament can only be ended after its predictions are ended and resolved", null, {
					hk: "2AgZtm"
				})), i.a.createElement(u.i, {
					className: g.a.button,
					disabled: !E || !S || T,
					onClick: N
				}, o.fbt._("End", null, {
					hk: "HWN7f"
				})), _ && i.a.createElement(j, {
					isEnding: y,
					onClose: () => {
						w(!1)
					},
					onConfirm: async () => {
						if (!E || !S) return null;
						P(!0);
						try {
							await t(Object(s.i)(E.tournamentId, e.id))
						} catch (n) {
							t(Object(d.f)({
								kind: b.b.Error,
								text: o.fbt._("Failed to end tournament, please try again later", null, {
									hk: "2huCGU"
								})
							}))
						}
						P(!1), w(!1)
					}
				}))))
			}
		},
		"./src/reddit/endpoints/economics/predictions.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return f
			})), n.d(t, "l", (function() {
				return h
			})), n.d(t, "j", (function() {
				return j
			})), n.d(t, "a", (function() {
				return O
			})), n.d(t, "h", (function() {
				return g
			})), n.d(t, "c", (function() {
				return x
			})), n.d(t, "i", (function() {
				return k
			})), n.d(t, "b", (function() {
				return v
			})), n.d(t, "k", (function() {
				return y
			})), n.d(t, "d", (function() {
				return P
			})), n.d(t, "e", (function() {
				return _
			})), n.d(t, "g", (function() {
				return w
			}));
			var o = n("./src/lib/makeGqlRequest/index.ts"),
				r = n("./src/graphql/operations/AddPredictionDrafts.json"),
				i = n("./src/graphql/operations/CreatePredictionTournament.json"),
				a = n("./src/graphql/operations/EndPredictionTournament.json"),
				c = n("./src/graphql/operations/GetPredictionChipPackages.json"),
				s = n("./src/graphql/operations/GetPredictionCoinPackages.json"),
				d = n("./src/graphql/operations/GetPredictionToken.json"),
				u = n("./src/graphql/operations/GetTournaments.json"),
				l = n("./src/graphql/operations/ResolvePrediction.json"),
				p = n("./src/graphql/operations/SubredditTopPredictors.json"),
				m = n("./src/graphql/operations/UpdatePredictionTournament.json"),
				b = n("./src/graphql/operations/VotePrediction.json");
			const f = (e, t, n) => Object(o.a)(e, {
					...s,
					variables: {
						subredditName: t,
						includeFreePackage: n
					}
				}),
				h = (e, {
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
				j = (e, {
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
			var O;
			! function(e) {
				e.AllTime = "ALL_TIME", e.Monthly = "MONTHLY"
			}(O || (O = {}));
			const g = (e, {
					subredditId: t,
					period: n,
					top: r,
					includeCurrentRank: i,
					tournamentId: a
				}) => Object(o.a)(e, {
					...p,
					variables: {
						subredditId: t,
						period: n,
						top: r,
						includeCurrentRank: i,
						tournamentId: a
					}
				}),
				x = (e, t) => Object(o.a)(e, {
					...i,
					variables: {
						input: t
					}
				}),
				k = (e, t) => Object(o.a)(e, {
					...u,
					variables: t
				}),
				v = (e, t) => Object(o.a)(e, {
					...r,
					variables: {
						input: t
					}
				}),
				y = (e, t) => Object(o.a)(e, {
					...m,
					variables: {
						input: t
					}
				}),
				P = (e, t) => Object(o.a)(e, {
					...a,
					variables: {
						input: t
					}
				}),
				_ = (e, t) => Object(o.a)(e, {
					...c,
					variables: t
				}),
				w = (e, t) => Object(o.a)(e, {
					...d,
					variables: t
				})
		},
		"./src/reddit/helpers/trackers/predictions.ts": function(e, t, n) {
			"use strict";
			n.d(t, "n", (function() {
				return r
			})), n.d(t, "o", (function() {
				return i
			})), n.d(t, "p", (function() {
				return a
			})), n.d(t, "j", (function() {
				return c
			})), n.d(t, "r", (function() {
				return s
			})), n.d(t, "l", (function() {
				return d
			})), n.d(t, "m", (function() {
				return u
			})), n.d(t, "k", (function() {
				return l
			})), n.d(t, "a", (function() {
				return p
			})), n.d(t, "q", (function() {
				return m
			})), n.d(t, "d", (function() {
				return b
			})), n.d(t, "t", (function() {
				return f
			})), n.d(t, "i", (function() {
				return h
			})), n.d(t, "v", (function() {
				return j
			})), n.d(t, "f", (function() {
				return O
			})), n.d(t, "u", (function() {
				return g
			})), n.d(t, "s", (function() {
				return x
			})), n.d(t, "c", (function() {
				return k
			})), n.d(t, "g", (function() {
				return v
			})), n.d(t, "e", (function() {
				return y
			})), n.d(t, "b", (function() {
				return P
			})), n.d(t, "h", (function() {
				return _
			}));
			var o = n("./src/reddit/selectors/telemetry.ts");
			const r = e => ({
					...Object(o.defaults)(e),
					source: "poll",
					action: "select",
					noun: "poll_option"
				}),
				i = e => ({
					...Object(o.defaults)(e),
					source: "poll",
					action: "select",
					noun: "prediction_option"
				}),
				a = e => ({
					...Object(o.defaults)(e),
					source: "poll",
					action: "view",
					noun: "predict_info_modal"
				}),
				c = e => ({
					...Object(o.defaults)(e),
					source: "poll",
					action: "close",
					noun: "predict_info_modal"
				}),
				s = e => ({
					...Object(o.defaults)(e),
					source: "poll",
					action: "view",
					noun: "predict_option_modal"
				}),
				d = ({
					pollId: e,
					selectedNumberCoins: t,
					totalStakeAmount: n
				}) => r => ({
					...Object(o.defaults)(r),
					source: "poll",
					action: "confirm",
					noun: "predict",
					poll: Object(o.poll)(r, e, !1, void 0, t),
					goldPurchase: {
						numberCoins: n
					}
				}),
				u = ({
					pollId: e,
					selectedNumberTokens: t
				}) => n => ({
					...Object(o.defaults)(n),
					source: "poll",
					action: "confirm",
					noun: "predict",
					poll: Object(o.poll)(n, e, !1, void 0, void 0, t)
				}),
				l = ({
					pollId: e,
					selectedNumberCoins: t,
					selectedNumberTokens: n
				}) => r => ({
					...Object(o.defaults)(r),
					source: "poll",
					action: "close",
					noun: "prediction_modal",
					poll: Object(o.poll)(r, e, !1, t, n)
				}),
				p = e => ({
					...Object(o.defaults)(e),
					source: "poll",
					action: "click",
					noun: "add_coins"
				}),
				m = e => t => ({
					...Object(o.defaults)(t),
					source: "global",
					action: "view",
					noun: "screen",
					actionInfo: {
						pageType: "predictions_leaderboard",
						reason: e ? "prediction_details" : "subreddit_header"
					}
				}),
				b = ({
					targetUserId: e
				}) => t => ({
					...Object(o.defaults)(t),
					source: "prediction",
					action: "click",
					noun: "leaderboard_profile",
					targetUser: {
						id: e
					}
				}),
				f = ({
					numberPredictionTokens: e,
					pollId: t
				}) => n => ({
					...Object(o.defaults)(n),
					source: "poll",
					action: "view",
					noun: "token_claim_modal",
					poll: Object(o.poll)(n, t, !1, void 0, void 0, e)
				}),
				h = ({
					pageType: e
				}) => t => ({
					...Object(o.defaults)(t),
					source: "prediction",
					action: "click",
					noun: "tournament",
					actionInfo: {
						pageType: e
					}
				}),
				j = () => e => ({
					...Object(o.defaults)(e),
					source: "global",
					action: "view",
					noun: "screen",
					actionInfo: {
						pageType: "community",
						paneName: "predictions"
					}
				}),
				O = () => e => ({
					...Object(o.defaults)(e),
					source: "prediction",
					action: "click",
					noun: "leaderboard",
					actionInfo: {
						pageType: "community",
						paneName: "predictions"
					}
				}),
				g = () => e => ({
					...Object(o.defaults)(e),
					source: "global",
					action: "view",
					noun: "screen",
					actionInfo: {
						pageType: "tournament_leaderboard",
						reason: "predictions_tab"
					}
				}),
				x = () => e => ({
					...Object(o.defaults)(e),
					source: "global",
					action: "view",
					noun: "screen",
					actionInfo: {
						pageType: "mod_tool_predict"
					}
				}),
				k = () => e => ({
					...Object(o.defaults)(e),
					source: "mod_tool_predict",
					action: "click",
					noun: "end_tournament"
				}),
				v = () => e => ({
					...Object(o.defaults)(e),
					source: "mod_tool_predict",
					action: "click",
					noun: "rename_tournament"
				}),
				y = () => e => ({
					...Object(o.defaults)(e),
					source: "prediction",
					action: "click",
					noun: "next"
				}),
				P = () => e => ({
					...Object(o.defaults)(e),
					source: "prediction",
					action: "click",
					noun: "add_more"
				}),
				_ = () => e => ({
					...Object(o.defaults)(e),
					source: "prediction",
					action: "click",
					noun: "start_tournament"
				})
		},
		"./src/reddit/selectors/features/predictions/creation/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return a
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
			const a = e => {
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
							a = {};
						return n.document ? a.richText = JSON.stringify({
							document: n.document
						}) : n.markdown && (a.markdown = n.markdown), {
							title: n.title,
							isLiveChat: n.isChatPost,
							isNsfw: n.isNSFW,
							isSpoiler: n.isSpoiler,
							votingEndsAt: o.endDate.toISOString(),
							body: a,
							options: r
						}
					}) : []
				},
				c = e => {
					var t, n;
					return !!(null === (n = null === (t = e.features) || void 0 === t ? void 0 : t.predictions) || void 0 === n ? void 0 : n.creation.length)
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-SubredditContent-PredictionsContent.ba992b0b2f855c4898be.js.map