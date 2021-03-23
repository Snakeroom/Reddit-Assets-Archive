// https://www.redditstatic.com/desktop2x/reddit-components-SubredditContent-PredictionsContent.c843de89b5a8bd5ec2e1.js
// Retrieved at 3/23/2021, 4:00:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-SubredditContent-PredictionsContent"], {
		"./node_modules/uuid/index.js": function(e, t, n) {
			var r = n("./node_modules/uuid/v1.js"),
				o = n("./node_modules/uuid/v4.js"),
				i = o;
			i.v1 = r, i.v4 = o, e.exports = i
		},
		"./node_modules/uuid/v1.js": function(e, t, n) {
			var r, o, i = n("./node_modules/uuid/lib/rng-browser.js"),
				a = n("./node_modules/uuid/lib/bytesToUuid.js"),
				s = 0,
				d = 0;
			e.exports = function(e, t, n) {
				var c = t && n || 0,
					l = t || [],
					u = (e = e || {}).node || r,
					p = void 0 !== e.clockseq ? e.clockseq : o;
				if (null == u || null == p) {
					var m = i();
					null == u && (u = r = [1 | m[0], m[1], m[2], m[3], m[4], m[5]]), null == p && (p = o = 16383 & (m[6] << 8 | m[7]))
				}
				var b = void 0 !== e.msecs ? e.msecs : (new Date).getTime(),
					f = void 0 !== e.nsecs ? e.nsecs : d + 1,
					h = b - s + (f - d) / 1e4;
				if (h < 0 && void 0 === e.clockseq && (p = p + 1 & 16383), (h < 0 || b > s) && void 0 === e.nsecs && (f = 0), f >= 1e4) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
				s = b, d = f, o = p;
				var x = (1e4 * (268435455 & (b += 122192928e5)) + f) % 4294967296;
				l[c++] = x >>> 24 & 255, l[c++] = x >>> 16 & 255, l[c++] = x >>> 8 & 255, l[c++] = 255 & x;
				var j = b / 4294967296 * 1e4 & 268435455;
				l[c++] = j >>> 8 & 255, l[c++] = 255 & j, l[c++] = j >>> 24 & 15 | 16, l[c++] = j >>> 16 & 255, l[c++] = p >>> 8 | 128, l[c++] = 255 & p;
				for (var g = 0; g < 6; ++g) l[c + g] = u[g];
				return t || a(l)
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
				return O
			})), n.d(t, "h", (function() {
				return P
			})), n.d(t, "k", (function() {
				return k
			})), n.d(t, "j", (function() {
				return v
			})), n.d(t, "g", (function() {
				return y
			})), n.d(t, "b", (function() {
				return w
			})), n.d(t, "l", (function() {
				return I
			})), n.d(t, "c", (function() {
				return _
			})), n.d(t, "a", (function() {
				return S
			})), n.d(t, "m", (function() {
				return N
			})), n.d(t, "i", (function() {
				return q
			})), n.d(t, "d", (function() {
				return A
			})), n.d(t, "e", (function() {
				return F
			}));
			var r = n("./node_modules/uuid/index.js"),
				o = n.n(r),
				i = n("./src/lib/initializeClient/installReducer.ts"),
				a = n("./src/reddit/reducers/features/predictions/index.ts"),
				s = n("./src/lib/makeActionCreator/index.ts"),
				d = n("./src/reddit/endpoints/economics/predictions.ts"),
				c = n("./src/reddit/models/Poll/index.ts"),
				l = n("./src/reddit/selectors/experiments/econ/predictions.ts"),
				u = n("./src/reddit/selectors/posts.ts"),
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
			const x = Object(s.a)(h.d),
				j = Object(s.a)(h.g),
				g = Object(s.a)(h.f),
				O = (e, t, n, r) => async (o, i, {
					gqlContext: a
				}) => {
					const s = Object(m.J)(i()),
						c = await Object(d.h)(a(), {
							subredditId: e,
							period: t,
							top: n,
							includeCurrentRank: s,
							tournamentId: r
						});
					if (c.error || !c.ok) throw new Error("Failed to fetch subreddit top predictors");
					const {
						subredditInfoById: l
					} = c.body.data;
					if (!l || !l.predictionWinners) throw new Error("Subreddit has no prediction winners");
					const {
						predictionWinners: u
					} = l, p = {
						subredditId: e,
						...u
					};
					return o(x(p)), p
				}, P = e => async (t, n, {
					gqlContext: r
				}) => {
					const o = n(),
						i = Object(u.P)(o, {
							postId: e,
							disallowProfile: !0
						});
					if (!i) throw new Error("Post does not belong to a subreddit");
					const a = await Object(d.f)(r(), i.name, Object(l.d)(o));
					if (a.error || !a.ok) throw new Error("Failed to fetch coin packs");
					const {
						subredditInfoByName: s
					} = a.body.data;
					if (!s || !s.predictionCoinPackages.length) throw new Error("Subreddit has no coin packs");
					return s.predictionCoinPackages
				}, k = ({
					coinPackageId: e,
					optionId: t,
					postId: n,
					price: r
				}) => async (o, i, {
					gqlContext: a
				}) => {
					const s = await Object(d.l)(a(), {
						coinPackageId: e,
						optionId: t,
						postId: n,
						price: r
					});
					if (s.error || !s.ok) throw new Error("Failed to make prediction");
					const {
						votePrediction: c
					} = s.body.data;
					if (!c) throw new Error("Failed to create prediction vote");
					return o(j({
						pollId: n,
						prediction: c.poll,
						price: r
					})), c.poll
				}, v = ({
					optionId: e,
					postId: t
				}) => async (n, r, {
					gqlContext: o
				}) => {
					const i = await Object(d.j)(o(), {
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
				}, C = Object(s.a)(h.b), E = Object(s.a)(h.c), y = e => async (t, n, {
					gqlContext: r
				}) => {
					const o = n(),
						i = Object(p.F)(o, e);
					if (Object(f.k)(o, {
							subredditId: i
						})) return Object(f.f)(o, {
						subredditId: i
					});
					t(C({
						subredditId: i
					}));
					const a = await Object(d.i)(r(), {
						subredditName: e,
						isLatestOnly: !0,
						isIncludingPredictions: !0,
						isIncludingParticipants: !0
					});
					if (a.error || !a.ok) throw new Error("Failed to fetch tournaments");
					const {
						subredditInfoByName: s
					} = a.body.data;
					if (!s.predictionTournaments) return [];
					const c = s.predictionTournaments;
					return t(E({
						subredditId: i,
						tournaments: c
					})), c
				}, w = Object(s.a)(h.a), I = Object(s.a)(h.h), _ = ({
					subredditId: e
				}) => async (t, n, {
					gqlContext: r
				}) => {
					const o = n(),
						i = Object(b.b)(o),
						a = Object(l.a)(o);
					if (!i) throw new Error("Failed to create tournament, no prediction drafts attached");
					const s = await Object(d.c)(r(), {
							name: "Predictions Tournament",
							isStartImmediately: !0,
							subredditId: e,
							predictionDrafts: i,
							currency: a ? c.b.Coins : c.b.Tokens
						}),
						{
							createPredictionTournament: u
						} = s.body.data;
					if (!(null == u ? void 0 : u.tournament)) throw new Error("Failed to resolve prediction");
					return u.tournament
				}, S = (e, t) => async (n, r, {
					gqlContext: i
				}) => {
					const a = Object(b.b)(r());
					if (!a) throw new Error("Failed to create prediction post, no prediction drafts attached");
					const s = await Object(d.b)(i(), {
							tournamentId: e,
							isStartImmediately: !0,
							iKey: `add-dfts-${o.a.v4()}`,
							subredditId: t,
							predictionDrafts: a
						}),
						{
							addPredictionDrafts: c
						} = s.body.data;
					if (!(null == c ? void 0 : c.tournament)) throw new Error("Failed to create prediction");
					return c.tournament
				}, T = Object(s.a)(h.i), N = (e, t, n) => async (r, o, {
					gqlContext: i
				}) => {
					const a = await Object(d.k)(i(), {
							tournamentId: e,
							name: n
						}),
						{
							updatePredictionTournament: s
						} = a.body.data;
					if (!s.tournament) throw new Error("Failed to update prediction name");
					return r(T({
						subredditId: t,
						tournament: s.tournament
					})), s.tournament
				}, q = (e, t) => async (n, r, {
					gqlContext: o
				}) => {
					const i = await Object(d.d)(o(), {
							tournamentId: e
						}),
						{
							endPredictionTournament: a
						} = i.body.data;
					if (!a.tournament) throw new Error("Failed to update prediction name");
					return n(T({
						subredditId: t,
						tournament: a.tournament
					})), a.tournament
				}, A = e => async (t, n, {
					gqlContext: r
				}) => {
					const o = await Object(d.e)(r(), {
						postId: e
					});
					if (!o.ok || o.error) throw new Error("Failed to fetch prediction chip packages");
					const {
						postInfoById: i
					} = o.body.data;
					if (!i.predictionChipPackages) throw new Error("Failed to fetch prediction chip packages");
					return i.predictionChipPackages
				}, F = e => async (t, n, {
					gqlContext: r
				}) => {
					const o = await Object(d.g)(r(), {
						tournamentId: e
					});
					if (!o.ok || o.error) throw new Error("Failed to fetch token balance");
					const {
						identity: i
					} = o.body.data;
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
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				i = n("./src/higherOrderComponents/asModal/index.tsx"),
				a = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				s = n("./src/reddit/constants/keycodes.ts"),
				d = n("./src/reddit/controls/Button/index.tsx"),
				c = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				l = n("./src/reddit/controls/TextButton/index.tsx"),
				u = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				p = n("./src/reddit/components/PostCreationForm/Prompt/PromptModal.m.less"),
				m = n.n(p),
				b = n("./src/lib/lessComponent.tsx");
			const f = b.a.wrapped(d.i, "PrimaryButton", m.a),
				h = b.a.wrapped(a.o, "ModalText", m.a);
			class x extends o.a.PureComponent {
				constructor() {
					super(...arguments), this.handleEscapeKey = e => {
						e.keyCode === s.a.Escape && this.props.onClose()
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
					return o.a.createElement(a.d, null, o.a.createElement(a.h, null, o.a.createElement(u.a, null, o.a.createElement(a.p, null, this.props.titleText), o.a.createElement(l.a, {
						onClick: this.props.onClose
					}, o.a.createElement(a.b, null)))), o.a.createElement(a.k, null, o.a.createElement(h, null, this.props.bodyText)), o.a.createElement(a.f, null, o.a.createElement(a.a, {
						onClick: this.props.onSecondaryAction
					}, t ? o.a.createElement(c.a, {
						sizePx: 16
					}) : this.props.secondaryButtonText), o.a.createElement(f, {
						onClick: this.props.onPrimaryAction
					}, e ? o.a.createElement(c.a, {
						sizePx: 16
					}) : this.props.primaryButtonText)))
				}
			}
			t.a = Object(i.a)(x)
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
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				i = n.n(o),
				a = n("./node_modules/react-redux/es/index.js"),
				s = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/actions/economics/predictions/index.ts"),
				c = n("./src/reddit/actions/toaster.ts"),
				l = n("./src/reddit/controls/Button/index.tsx"),
				u = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				p = n("./src/reddit/models/Toast/index.ts"),
				m = n("./src/reddit/selectors/features/predictions/tournaments/index.ts"),
				b = n("./src/reddit/components/PostCreationForm/Prompt/PromptModal.tsx");

			function f({
				isEnding: e,
				onClose: t,
				onConfirm: n
			}) {
				return i.a.createElement(b.a, {
					titleText: r.fbt._("End tournament?", null, {
						hk: "SHmTx"
					}),
					bodyText: r.fbt._("Are you sure you want to end the tournament? Once a tournament has ended, it cannot be restarted again. Ending the tournament also closes the community ‘Tournament’ tab.", null, {
						hk: "fqqXg"
					}),
					onClose: t,
					primaryButtonLoading: e,
					primaryButtonText: r.fbt._("End Tournament", null, {
						hk: "SUDS2"
					}),
					onPrimaryAction: n,
					onSecondaryAction: t,
					secondaryButtonText: r.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})
				})
			}
			var h = n("./src/reddit/components/SubredditContent/PredictionsContent/index.m.less"),
				x = n.n(h);
			const j = 90;

			function g({
				subreddit: e
			}) {
				const t = Object(a.d)(),
					[n, b] = Object(o.useState)(""),
					[h, g] = Object(o.useState)(!1),
					[O, P] = Object(o.useState)(!1),
					[k, v] = Object(o.useState)(!1),
					[C, E] = Object(o.useState)(null),
					y = Object(a.e)(t => Object(m.b)(t, {
						subredditId: e.id
					})),
					w = Object(a.e)(t => Object(m.k)(t, {
						subredditId: e.id
					})),
					I = Object(a.e)(t => Object(m.g)(t, {
						subredditId: e.id
					}));
				Object(o.useEffect)(() => {
					t(Object(d.g)(e.name))
				}, [t, e.name]), Object(o.useEffect)(() => {
					y && (b(y.name), E(j - y.name.length))
				}, [y]);
				const _ = Object(o.useCallback)(() => v(!0), []),
					S = Object(o.useCallback)(() => v(!1), []),
					T = !!n && ((null == y ? void 0 : y.name) !== n && n.length > 3);
				return i.a.createElement("div", {
					className: x.a.predictionsContent
				}, i.a.createElement("h1", {
					className: x.a.heading
				}, r.fbt._("Predictions", null, {
					hk: "1SloUh"
				})), i.a.createElement("div", {
					className: x.a.controls
				}, i.a.createElement("div", {
					className: x.a.section
				}, i.a.createElement("label", {
					className: x.a.label,
					htmlFor: "tournament-name"
				}, r.fbt._("Tournament name", null, {
					hk: "1ZAVPf"
				})), i.a.createElement("input", {
					name: "tournament-name",
					className: x.a.input,
					disabled: !y || w,
					type: "text",
					value: n,
					onChange: e => {
						const {
							value: t
						} = e.target;
						t.length <= j && (b(t), E(j - t.length))
					},
					placeholder: r.fbt._("/r/{subredditName} tournament", [r.fbt._param("subredditName", e.name)], {
						hk: "bN9XA"
					})
				}), i.a.createElement("div", {
					className: Object(s.a)(x.a.remainingCharacters, {
						[x.a.maxCharacters]: (null == n ? void 0 : n.length) === j
					})
				}, y && y.name !== n && null !== C ? r.fbt._({
					"*": "{remaining characters} characters remaining",
					_1: "1 character remaining"
				}, [r.fbt._plural(C, "remaining characters")], {
					hk: "1dBRgv"
				}) : i.a.createElement(i.a.Fragment, null, " ")), i.a.createElement(l.i, {
					className: x.a.button,
					disabled: !n || !y || w || !T,
					onClick: async () => {
						if (!y || !n) return null;
						g(!0);
						try {
							await t(Object(d.m)(y.tournamentId, e.id, n))
						} catch (o) {
							t(Object(c.f)({
								kind: p.b.Error,
								text: r.fbt._("Failed to update tournament name, please try again later", null, {
									hk: "3bx78u"
								})
							}))
						}
						g(!1)
					}
				}, h ? i.a.createElement(u.a, {
					sizePx: 16
				}) : r.fbt._("Rename", null, {
					hk: "4z2EPS"
				}))), i.a.createElement("div", null, i.a.createElement("label", {
					className: x.a.label
				}, r.fbt._("End tournament", null, {
					hk: "ZWlOH"
				})), i.a.createElement("p", {
					className: x.a.endConditions
				}, r.fbt._("Tournament can only be ended after its predictions are ended and resolved", null, {
					hk: "2AgZtm"
				})), i.a.createElement(l.i, {
					className: x.a.button,
					disabled: !y || !I || w,
					onClick: _
				}, r.fbt._("End", null, {
					hk: "HWN7f"
				})), k && i.a.createElement(f, {
					isEnding: O,
					onClose: S,
					onConfirm: async () => {
						if (!y || !I) return null;
						P(!0);
						try {
							await t(Object(d.i)(y.tournamentId, e.id))
						} catch (n) {
							t(Object(c.f)({
								kind: p.b.Error,
								text: r.fbt._("Failed to end tournament, please try again later", null, {
									hk: "2huCGU"
								})
							}))
						}
						P(!1), v(!1)
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
				return x
			})), n.d(t, "a", (function() {
				return j
			})), n.d(t, "h", (function() {
				return g
			})), n.d(t, "c", (function() {
				return O
			})), n.d(t, "i", (function() {
				return P
			})), n.d(t, "b", (function() {
				return k
			})), n.d(t, "k", (function() {
				return v
			})), n.d(t, "d", (function() {
				return C
			})), n.d(t, "e", (function() {
				return E
			})), n.d(t, "g", (function() {
				return y
			}));
			var r = n("./src/lib/makeGqlRequest/index.ts"),
				o = n("./src/graphql/operations/AddPredictionDrafts.json"),
				i = n("./src/graphql/operations/CreatePredictionTournament.json"),
				a = n("./src/graphql/operations/EndPredictionTournament.json"),
				s = n("./src/graphql/operations/GetPredictionChipPackages.json"),
				d = n("./src/graphql/operations/GetPredictionCoinPackages.json"),
				c = n("./src/graphql/operations/GetPredictionToken.json"),
				l = n("./src/graphql/operations/GetTournaments.json"),
				u = n("./src/graphql/operations/ResolvePrediction.json"),
				p = n("./src/graphql/operations/SubredditTopPredictors.json"),
				m = n("./src/graphql/operations/UpdatePredictionTournament.json"),
				b = n("./src/graphql/operations/VotePrediction.json");
			const f = (e, t, n) => Object(r.a)(e, {
					...d,
					variables: {
						subredditName: t,
						includeFreePackage: n
					}
				}),
				h = (e, {
					postId: t,
					optionId: n,
					coinPackageId: o,
					price: i
				}) => Object(r.a)(e, {
					...b,
					variables: {
						input: {
							postId: t,
							optionId: n,
							coinPackageId: o,
							price: i
						}
					}
				}),
				x = (e, {
					postId: t,
					optionId: n
				}) => Object(r.a)(e, {
					...u,
					variables: {
						input: {
							postId: t,
							optionId: n
						}
					}
				});
			var j;
			! function(e) {
				e.AllTime = "ALL_TIME", e.Monthly = "MONTHLY"
			}(j || (j = {}));
			const g = (e, {
					subredditId: t,
					period: n,
					top: o,
					includeCurrentRank: i,
					tournamentId: a
				}) => Object(r.a)(e, {
					...p,
					variables: {
						subredditId: t,
						period: n,
						top: o,
						includeCurrentRank: i,
						tournamentId: a
					}
				}),
				O = (e, t) => Object(r.a)(e, {
					...i,
					variables: {
						input: t
					}
				}),
				P = (e, t) => Object(r.a)(e, {
					...l,
					variables: t
				}),
				k = (e, t) => Object(r.a)(e, {
					...o,
					variables: {
						input: t
					}
				}),
				v = (e, t) => Object(r.a)(e, {
					...m,
					variables: {
						input: t
					}
				}),
				C = (e, t) => Object(r.a)(e, {
					...a,
					variables: {
						input: t
					}
				}),
				E = (e, t) => Object(r.a)(e, {
					...s,
					variables: t
				}),
				y = (e, t) => Object(r.a)(e, {
					...c,
					variables: t
				})
		},
		"./src/reddit/selectors/features/predictions/creation/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return a
			})), n.d(t, "a", (function() {
				return s
			}));
			var r = n("./src/lib/initializeClient/installReducer.ts"),
				o = n("./src/reddit/reducers/features/predictions/index.ts"),
				i = n("./src/reddit/selectors/postCreations.ts");
			Object(r.a)({
				features: {
					predictions: o.a
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
							r = t.formData.polls,
							o = r.options.map(e => ({
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
							votingEndsAt: r.endDate.toISOString(),
							body: a,
							options: o
						}
					}) : []
				},
				s = e => {
					var t, n;
					return !!(null === (n = null === (t = e.features) || void 0 === t ? void 0 : t.predictions) || void 0 === n ? void 0 : n.creation.length)
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-SubredditContent-PredictionsContent.c843de89b5a8bd5ec2e1.js.map