// https://www.redditstatic.com/desktop2x/PostCreation.6e46f4f8de5ce257954a.js
// Retrieved at 3/22/2021, 6:50:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["PostCreation", "ContributorRequestButton"], {
		"./src/graphql/operations/AddPredictionDrafts.json": function(e) {
			e.exports = JSON.parse('{"id":"595acecb7f6e"}')
		},
		"./src/graphql/operations/CommentToxicity.json": function(e) {
			e.exports = JSON.parse('{"id":"445164f0825f"}')
		},
		"./src/graphql/operations/CreatePredictionTournament.json": function(e) {
			e.exports = JSON.parse('{"id":"51591a693756"}')
		},
		"./src/graphql/operations/CreateScheduledPost.json": function(e) {
			e.exports = JSON.parse('{"id":"1e0a4bfe5ac9"}')
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
		"./src/graphql/operations/PollVote.json": function(e) {
			e.exports = JSON.parse('{"id":"a20cc8dd230d"}')
		},
		"./src/graphql/operations/ResolvePrediction.json": function(e) {
			e.exports = JSON.parse('{"id":"45c2e0b86b90"}')
		},
		"./src/graphql/operations/SubredditScheduledPosts.json": function(e) {
			e.exports = JSON.parse('{"id":"de72339b938a"}')
		},
		"./src/graphql/operations/SubredditTopPredictors.json": function(e) {
			e.exports = JSON.parse('{"id":"3407d5f67207"}')
		},
		"./src/graphql/operations/SubscribedSubreddits.json": function(e) {
			e.exports = JSON.parse('{"id":"84f02d14f38a"}')
		},
		"./src/graphql/operations/UpdatePredictionTournament.json": function(e) {
			e.exports = JSON.parse('{"id":"2245303550b1"}')
		},
		"./src/graphql/operations/UpdateScheduledPost.json": function(e) {
			e.exports = JSON.parse('{"id":"f5276d63e133"}')
		},
		"./src/graphql/operations/VotePrediction.json": function(e) {
			e.exports = JSON.parse('{"id":"1712829dfb21"}')
		},
		"./src/higherOrderComponents/makeAsync.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);

			function r(e) {
				var t;
				return (t = class t extends o.a.Component {
					constructor(e) {
						super(e), this.mounted = !1, this.state = {
							Component: t.Component
						}
					}
					componentDidMount() {
						this.mounted = !0, this.state.Component !== e.ErrorComponent && e.getComponent().then(e => {
							t.Component = e, this.mounted && this.setState({
								Component: e
							})
						}, t => (this.mounted && this.setState({
							Component: e.ErrorComponent
						}), Promise.reject(t)))
					}
					componentWillUnmount() {
						this.mounted = !1
					}
					render() {
						const t = this.state.Component || e.LoadingComponent;
						return o.a.createElement(t, this.props)
					}
				}).Component = null, t
			}
		},
		"./src/lib/bigNumberUtils/percent.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./node_modules/bignumber.js/bignumber.js");

			function o(e, t) {
				const n = new s.BigNumber(e),
					o = new s.BigNumber(t),
					r = new s.BigNumber(n.dividedBy(o)),
					i = new s.BigNumber("100").multipliedBy(r);
				return new s.BigNumber(i).toNumber()
			}
		},
		"./src/lib/combineRefs/index.tsx": function(e, t, n) {
			"use strict";
			t.a = (...e) => t => {
				e.forEach(e => {
					if (e) return "function" == typeof e ? e(t) : void(e.current = t)
				})
			}
		},
		"./src/lib/constants/specialMembership.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			const s = "custom"
		},
		"./src/lib/convertToCamelCase/index.ts": function(e, t, n) {
			"use strict";
			t.a = e => {
				const t = {};
				for (const n in e) {
					t[n.replace(/_\w/g, e => e[1].toUpperCase())] = e[n]
				}
				return t
			}
		},
		"./src/lib/forceHttps/index.ts": function(e, t, n) {
			"use strict";
			t.a = function(e) {
				return e.startsWith("http") ? e.replace(/^http:\/\//i, "https://") : `https://${e}`
			}
		},
		"./src/lib/getShortenedLink.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/reddit/models/Media/index.ts"),
				o = n("./node_modules/node-libs-browser/node_modules/url/url.js"),
				r = n.n(o);
			t.a = function(e) {
				const {
					source: t,
					isSponsored: n,
					domainOverride: o
				} = e;
				let i = "";
				if (n) {
					if (t && t.displayText) return t.displayText.length > 30 ? t.displayText.substring(0, 30) + "..." : t.displayText;
					i = o || Object(s.D)(e)
				} else i = Object(s.D)(e);
				const a = r.a.parse(i),
					c = a.path || "",
					d = c.length > 7 ? c.substring(0, 7) + "..." : c;
				return (a.hostname ? a.hostname.replace("www.", "") : "") + d
			}
		},
		"./src/lib/intersectionObserver/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return a
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			let s;
			const o = new Map,
				r = new Map;
			"undefined" != typeof window && (n("./node_modules/intersection-observer/intersection-observer.js"), s = new IntersectionObserver(e => {
				e.forEach(e => {
					const t = e.target,
						n = e.intersectionRatio > 0;
					if (n !== !!r.get(t)) {
						r.set(t, n);
						const s = o.get(t);
						if (s) {
							s(e, n && !!r.get(t))
						}
					}
				})
			}, {
				threshold: [.001]
			}));
			const i = (e, t) => {
					try {
						o.set(e, t), s && s.observe(e)
					} catch (n) {
						0
					}
				},
				a = e => {
					try {
						o.delete(e), s && s.unobserve(e)
					} catch (t) {
						0
					}
				}
		},
		"./src/lib/makeCommentPermalink/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/redditId/index.ts");
			t.a = (e, t) => {
				let n = e;
				return "/" !== n.substr(-1) && (n += "/"), n += Object(s.c)(t)
			}
		},
		"./src/lib/memoizeByReference/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./node_modules/lodash/every.js"),
				o = n.n(s);

			function r(e) {
				let t = null,
					n = null;
				return (...s) => (null !== t && s.length === t.length && o()(s, (e, n) => e === t[n]) || (t = s, n = e(...s)), n)
			}
		},
		"./src/lib/onFocusAndVisibilityChange/index.ts": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/brcast/dist/brcast.es.js");
			const o = () => "undefined" != typeof document,
				r = () => o() && "visible" === document.visibilityState,
				i = () => ({
					documentInFocus: r()
				}),
				{
					subscribe: a,
					unsubscribe: c,
					setState: d
				} = Object(s.a)(i()),
				l = {
					hidden: "visibilitychange",
					webkitHidden: "webkitvisibilitychange",
					mozHidden: "mozvisibilitychange",
					msHidden: "msvisibilitychange"
				},
				u = () => d(i());
			(() => {
				const e = (() => {
					if (!o()) return;
					const e = Object.keys(l).find(e => e in document);
					return e ? l[e] : void 0
				})();
				e && document.addEventListener(e, u)
			})(), t.a = {
				isDocumentHidden: () => !r(),
				isDocumentVisible: r,
				subscribe: a,
				unsubscribe: c
			}
		},
		"./src/lib/prettyPrintNumber/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return u
			}));
			const s = e => {
					const t = e.split(".");
					return [t[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",")].concat(t.slice(1)).join(".")
				},
				o = 1e3,
				r = 100 * o,
				i = 10 * r,
				a = 100 * i,
				c = 10 * a,
				d = 100 * c,
				l = 51;

			function u(e, t) {
				return (null == t ? void 0 : t.displayFull) ? s(e.toString()) : e >= d - l ? `${Math.floor(e/c)}b` : e >= c - l && e < d - l ? `${(e/c).toFixed(1)}b` : e >= a - l && e < c - l ? `${Math.floor(e/i)}m` : e >= i - l && e < a - l ? `${(e/i).toFixed(1)}m` : e >= r - l && e < i - l ? `${Math.floor(e/o)}k` : e >= o && e < r - l ? (null == t ? void 0 : t.roundDown) ? `${m(e,o)}k` : `${(e/o).toFixed(1)}k` : String(e)
			}
			const m = (e, t, n = 1) => {
				const s = Math.pow(10, n);
				return (Math.floor(e / (t / s)) / s).toFixed(n)
			}
		},
		"./src/lib/timeUntil/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/lib/constants/index.ts");
			const r = [o.dc, o.hb, o.x, o.J, o.db, o.Hb],
				i = {
					[o.Hb]: e => s.fbt._({
						"*": "{number} seconds",
						_1: "1 second"
					}, [s.fbt._plural(e, "number")], {
						hk: "3pTp9Z"
					}),
					[o.db]: e => s.fbt._({
						"*": "{number} minutes",
						_1: "1 minute"
					}, [s.fbt._plural(e, "number")], {
						hk: "2gB3sf"
					}),
					[o.J]: e => s.fbt._({
						"*": "{number} hours",
						_1: "1 hour"
					}, [s.fbt._plural(e, "number")], {
						hk: "2w4n8B"
					}),
					[o.x]: e => s.fbt._({
						"*": "{number} days",
						_1: "1 day"
					}, [s.fbt._plural(e, "number")], {
						hk: "3zIGRH"
					}),
					[o.hb]: e => s.fbt._({
						"*": "{number} months",
						_1: "1 month"
					}, [s.fbt._plural(e, "number")], {
						hk: "28DQqD"
					}),
					[o.dc]: e => s.fbt._({
						"*": "{number} years",
						_1: "1 year"
					}, [s.fbt._plural(e, "number")], {
						hk: "Gqzh3"
					})
				},
				a = {
					[o.Hb]: e => s.fbt._("{amount}s", [s.fbt._param("amount", String(e))], {
						hk: "F4qog"
					}),
					[o.db]: e => s.fbt._("{amount}m", [s.fbt._param("amount", String(e))], {
						hk: "43tM5H"
					}),
					[o.J]: e => s.fbt._("{amount}h", [s.fbt._param("amount", String(e))], {
						hk: "19NsxU"
					}),
					[o.x]: e => s.fbt._("{amount}d", [s.fbt._param("amount", String(e))], {
						hk: "39MDc9"
					}),
					[o.hb]: e => s.fbt._("{amount}m", [s.fbt._param("amount", String(e))], {
						hk: "28feBj"
					}),
					[o.dc]: e => s.fbt._("{amount}y", [s.fbt._param("amount", String(e))], {
						hk: "10bv8G"
					}),
					[o.hb]: e => s.fbt._("{amount}m", [s.fbt._param("amount", String(e))], {
						hk: "28feBj"
					}),
					[o.dc]: e => s.fbt._("{amount}y", [s.fbt._param("amount", String(e))], {
						hk: "10bv8G"
					})
				};

			function c(e, t = !1, n = !1) {
				const c = Date.now(),
					d = new Date(e).getTime(),
					l = {
						[o.dc]: "",
						[o.hb]: "",
						[o.x]: "",
						[o.J]: "",
						[o.db]: "",
						[o.Hb]: ""
					};
				let u = d - c;
				if (u <= 0) return s.fbt._("a moment", null, {
					hk: "3QLaye"
				}).toString();
				for (const s of r) {
					const e = Math.floor(u / s);
					e && (l[s] = (t ? a : i)[s](e).toString()), u -= e * s
				}
				const m = r.map(e => l[e]).filter(Boolean).slice(0, 2).join(" ");
				return t || n ? m : s.fbt._("{amount of time left} left", [s.fbt._param("amount of time left", m)], {
					hk: "7VjAI"
				}).toString()
			}
		},
		"./src/reddit/actions/comment/authoring.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return Y
			})), n.d(t, "o", (function() {
				return Q
			})), n.d(t, "m", (function() {
				return X
			})), n.d(t, "q", (function() {
				return te
			})), n.d(t, "s", (function() {
				return ne
			})), n.d(t, "n", (function() {
				return oe
			})), n.d(t, "r", (function() {
				return re
			})), n.d(t, "l", (function() {
				return ie
			})), n.d(t, "a", (function() {
				return ce
			})), n.d(t, "b", (function() {
				return ue
			})), n.d(t, "p", (function() {
				return me
			})), n.d(t, "f", (function() {
				return pe
			})), n.d(t, "g", (function() {
				return he
			})), n.d(t, "j", (function() {
				return be
			})), n.d(t, "d", (function() {
				return ge
			})), n.d(t, "c", (function() {
				return ve
			})), n.d(t, "i", (function() {
				return _e
			})), n.d(t, "h", (function() {
				return je
			})), n.d(t, "k", (function() {
				return Se
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				i = n("./src/lib/makeDraftKey/index.ts"),
				a = n("./src/reddit/actions/changeUsername.ts"),
				c = n("./src/reddit/actions/login.ts"),
				d = n("./src/reddit/actions/modal.ts"),
				l = n("./src/reddit/actions/post.ts"),
				u = n("./src/reddit/actions/postCreation/editorContent.ts"),
				m = n("./src/reddit/actions/publicAccessNetwork/automute.ts"),
				p = n("./src/reddit/actions/shortcuts/utils.ts"),
				h = n("./src/reddit/actions/toaster.ts"),
				b = n("./src/reddit/components/RichTextEditor/RTEState/index.tsx"),
				f = n("./src/reddit/constants/adEvents.ts"),
				g = n("./src/graphql/operations/CommentToxicity.json"),
				C = n("./src/lib/makeApiRequest/index.ts"),
				x = n("./src/lib/makeGqlRequest/index.ts"),
				E = n("./src/lib/omitHeaders/index.ts"),
				v = n("./src/reddit/constants/headers.ts"),
				_ = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				O = n("./src/reddit/helpers/genericServerError/index.ts"),
				y = n("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts"),
				k = n("./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts"),
				j = n("./src/reddit/models/PostCreationForm/index.ts"),
				S = n("./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts"),
				I = n("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const T = (e, t, n, s) => {
					let o, r;
					if (s === j.h.MARKDOWN) o = n.text, r = null;
					else {
						o = null;
						let e = null;
						n.rteState && (e = b.a.toRichTextJSON(n.rteState).document), r = JSON.stringify({
							document: e
						})
					}
					return Object(x.a)(e, {
						...g,
						variables: {
							subredditName: t,
							markdown: o,
							richText: r
						}
					}).then(e => !e.ok || e.body.data.isValidComment)
				},
				w = async (e, t, n, s, r) => {
					const i = {
						api_type: "json",
						return_rtjson: !0,
						thing_id: t
					};
					if (r === j.h.MARKDOWN) i.text = n.text;
					else {
						i.text = null;
						let e = null;
						n.rteState && (e = b.a.toRichTextJSON(n.rteState).document), i.richtext_json = JSON.stringify({
							document: e
						})
					}
					return Object(C.a)(Object(E.a)(e, [v.a]), {
						method: o.cb.POST,
						endpoint: Object(_.a)(Object(S.a)(Object(I.a)(`${e.apiUrl}/api/comment.json`))),
						data: i
					}).then(e => e.ok ? e.body.json ? e.body.json.errors.length ? {
						...e,
						ok: !1,
						error: Object(k.a)(e)
					} : {
						...e,
						body: {
							comment: Object(y.a)(e.body.json.data.things[0].data, s)
						}
					} : {
						...e,
						body: {
							comment: Object(y.a)(e.body, s)
						}
					} : {
						...e,
						error: e.error || Object(O.a)()
					})
				};
			var P = n("./src/reddit/endpoints/post/index.tsx"),
				N = n("./src/reddit/endpoints/post/convert.ts"),
				M = n("./src/reddit/endpoints/publicAccessNetwork/index.ts"),
				D = n("./src/reddit/featureFlags/index.ts"),
				L = n("./src/reddit/helpers/dom/index.ts"),
				R = n("./src/reddit/helpers/trackers/commentsPage.ts"),
				F = n("./src/reddit/models/PostDraft/index.ts"),
				A = n("./src/reddit/models/RichTextJson/index.ts"),
				B = n("./src/reddit/models/RichTextJson/nodeMakers.ts"),
				U = n("./src/reddit/models/Toast/index.ts"),
				V = n("./src/reddit/selectors/comments.ts"),
				W = n("./src/reddit/selectors/commentSelector.ts"),
				G = n("./src/reddit/selectors/platform.ts"),
				H = n("./src/reddit/selectors/posts.ts"),
				q = n("./src/reddit/selectors/user.ts"),
				K = n("./src/reddit/actions/comment/index.ts"),
				z = n("./src/reddit/actions/comment/constants.ts");
			const J = Object(r.a)(z.j),
				Y = ({
					hasFocus: e,
					draftKey: t
				}) => async (n, s) => {
					const o = s();
					if (!!o.features.comments.drafts[t])
						if (Object(q.L)(o) && e) {
							const s = J({
								hasFocus: e,
								draftKey: t
							});
							n(Object(a.f)(s))
						} else n(J({
							hasFocus: e,
							draftKey: t
						}))
				}, Z = Object(r.a)(z.E), Q = Object(r.a)(z.G), X = Object(r.a)(z.F), $ = Object(r.a)(z.D), ee = (e, t, n, s) => {
					const o = s.ok && s.body,
						r = o && o.comment && o.comment.id;
					R.f(e, n, t, r)
				}, te = "Toxicity_Warning__Modal", ne = (e, t, n, s, o, r) => async (i, a, {
					gqlContext: c
				}) => {
					const l = a(),
						u = Object(G.e)(l);
					let m = "";
					if (u && (m = u.name), D.d.enableToxicityWarning(l)) {
						if (!(await T(c(), m, s, o))) return void i(Object(d.i)(te))
					}
					i(oe(e, t, n, s, o, r))
				}, se = e => e.rteState ? b.a.toRichTextJSON(e.rteState) : e.rtJson || e.text, oe = (e, t, n, r, i, a, c) => async (u, b, {
					apiContext: g
				}) => {
					u(Object(d.g)(te));
					const C = b(),
						x = C.features.comments.submit.pending[n];
					if (!C.user.account || x) return;
					u(Z({
						draftKey: n,
						draft: r
					}));
					const E = C.user.account.displayText,
						v = r.commentMode;
					let _;
					if (c ? (_ = await Object(M.i)(g(), e, r, E), u(Object(m.a)({
							streamId: e,
							level: _.body.automuteLevel
						}))) : _ = await w(g(), e, r, E, v), _.ok) {
						let s;
						s = _.body, u(Q({
							...s,
							headCommentId: Object(V.w)(C, {
								commentsPageKey: t
							}),
							commentsPageKey: t,
							draftKey: n
						}));
						const o = Object(H.D)(b(), {
							postId: e
						});
						u(Object(l.u)(o, f.a.CommentSubmitted))
					} else {
						_.error && _.error.type === o.Ab && R.g(C, se(r), e);
						const t = _.error && _.error.fields && _.error.fields[0] ? _.error.fields[0].msg : s.fbt._("Something went wrong", null, {
							hk: "LWFS0"
						});
						u($({
							draftKey: n,
							error: _.error
						})), u(Object(h.f)({
							duration: h.a,
							kind: U.b.Error,
							text: t
						}))
					}
					ee(b(), t, i, _), a || Object(p.d)()
				}, re = e => async (t, n, {
					gqlContext: s
				}) => {
					const {
						parentCommentId: o,
						commentsPageKey: r,
						parentCommentDepth: i,
						draftKey: a,
						formData: c,
						editorMode: l
					} = e, u = n(), m = Object(G.e)(u);
					let p = "";
					if (m && (p = m.name), D.d.enableToxicityWarning(u)) {
						if (!(await T(s(), p, c, l))) return void t(Object(d.i)(te))
					}
					t(ie({
						commentsPageKey: r,
						draftKey: a,
						parentCommentDepth: i,
						parentCommentId: o,
						formData: c,
						editorMode: l
					}))
				}, ie = e => async (t, n, {
					apiContext: s
				}) => {
					const {
						parentCommentId: r,
						commentsPageKey: i,
						parentCommentDepth: a,
						draftKey: c,
						formData: l,
						editorMode: u
					} = e;
					t(Object(d.g)(te));
					const m = n(),
						h = m.features.comments.submit.pending[c];
					if (!m.user.account || h) return;
					t(Z({
						draftKey: c,
						draft: l
					}));
					const b = m.user.account.displayText,
						f = l.commentMode,
						g = await w(s(), r, l, b, f);
					if (g.ok) t(X({
						...g.body,
						parentCommentId: r,
						commentsPageKey: i,
						draftKey: c,
						depth: a + 1
					}));
					else {
						if (g.error && g.error.type === o.Ab) {
							const e = Object(W.a)(m, {
								commentId: r
							});
							if (!e) return;
							R.g(m, se(l), e.postId, r)
						}
						t($({
							draftKey: c,
							error: g.error
						}))
					}
					ee(n(), i, u, g), Object(p.d)()
				}, ae = Object(r.a)(z.p), ce = Object(r.a)(z.o), de = Object(r.a)(z.k), le = (Object(r.a)(z.f), Object(r.a)(z.l)), ue = (Object(r.a)(z.s), (e, t, n) => async (o, r, {
					apiContext: i
				}) => {
					const a = e === j.h.RICH_TEXT;
					if (!t || "object" == typeof t && Object(A.G)(t)) o(le({
						editorMode: e,
						draftKey: n,
						content: a ? A.i : ""
					})), o(Object(u.c)(e));
					else {
						o(Object(u.b)(n));
						const r = await Object(N.a)(i(), e, a ? t : JSON.stringify(t));
						if (r.ok) {
							const t = r.body.output;
							o(Object(u.a)(n)), o(le({
								editorMode: e,
								draftKey: n,
								content: t
							})), o(Object(u.c)(e))
						} else o(Object(u.a)(n)), o(Object(h.f)({
							duration: h.a,
							kind: U.b.Error,
							text: s.fbt._("Something went wrong", null, {
								hk: "LWFS0"
							})
						}))
					}
				}), me = ({
					commentsPageKey: e,
					parentCommentId: t,
					singleOpen: n
				}) => async (s, o) => {
					const r = o(),
						l = Object(i.a)(F.c.replyToComment, t);
					if (!Object(q.J)(o())) return s(Object(c.j)()), void s(Object(d.k)({
						actionSource: d.a.Reply,
						redirectUrl: Object(V.m)(o(), {
							commentId: t
						})
					}));
					const u = r.features.comments.replyFormOpen[e],
						m = u && u[t];
					if ((m || u && n) && (Object.keys(u).forEach(t => u[t] && s(ce({
							parentCommentId: t,
							commentsPageKey: e
						}))), m)) return;
					let p = "",
						h = null;
					const b = r.user.prefs.commentMode,
						f = Object(L.d)();
					if (f) {
						const e = f.filter(e => !!e && 10 !== e.charCodeAt(0));
						if (b === j.h.MARKDOWN) p = e.map(e => `> ${e}\n`).join("");
						else {
							const t = e.map(e => B.s(e, null)).map(e => B.l([e])),
								n = B.s("", null),
								s = B.l([n]);
							h = {
								document: [B.c(t), s]
							}
						}
					}
					const g = r.features.comments.drafts[l];
					let C;
					if (C = f ? {
							commentMode: b,
							draftType: F.c.replyToComment,
							rtJson: h,
							text: `${p}\n`
						} : g || {
							commentMode: b,
							draftType: F.c.replyToComment,
							rtJson: h,
							text: ""
						}, Object(q.L)(r)) {
						const n = ae({
							parentCommentId: t,
							commentsPageKey: e,
							draftKey: l,
							formData: C
						});
						s(Object(a.f)(n))
					} else s(ae({
						parentCommentId: t,
						commentsPageKey: e,
						draftKey: l,
						formData: C
					}))
				}, pe = e => async t => {
					t(Object(K.m)(e)), t(ge(e))
				}, he = ({
					parentCommentId: e,
					commentsPageKey: t
				}) => async n => {
					n(ce({
						parentCommentId: e,
						commentsPageKey: t
					})), n(me({
						parentCommentId: e,
						commentsPageKey: t
					})), n(Object(K.m)({
						commentId: e,
						commentsPageKey: t
					}))
				}, be = (e, t) => n => n(de({
					draftKey: e,
					formData: t
				})), fe = Object(r.a)(z.r), ge = ({
					commentId: e,
					commentMode: t,
					commentsPageKey: n,
					draftKey: s,
					text: o
				}) => async (r, i) => {
					const a = i();
					a.user.account && (R.c(a), r(fe({
						commentId: e,
						commentsPageKey: n,
						draftKey: s,
						formData: {
							text: o,
							commentMode: t,
							rteState: null,
							draftType: F.c.edit,
							hasFocus: !0
						}
					})))
				}, Ce = Object(r.a)(z.A), xe = Object(r.a)(z.z), Ee = Object(r.a)(z.B), ve = Object(r.a)(z.g), _e = ({
					id: e,
					commentsPageKey: t,
					depth: n,
					draftKey: s,
					formData: r
				}) => async (n, i, {
					apiContext: a
				}) => {
					const c = i();
					if (!c.user.account) return;
					n(Ce({
						draftKey: s
					})), R.d(c);
					const d = c.user.account.displayText || "",
						l = r.commentMode,
						u = await (async (e, t, n, s, r, i) => {
							const a = {
								api_type: "json",
								return_rtjson: !0,
								thing_id: t
							};
							if (i === j.h.MARKDOWN) a.text = s.text;
							else {
								a.text = null;
								let e = null;
								s.rteState && (e = b.a.toRichTextJSON(s.rteState).document), a.richtext_json = JSON.stringify({
									document: e
								})
							}
							return Object(C.a)(Object(E.a)(e, [v.a]), {
								endpoint: Object(_.a)(Object(I.a)(Object(S.a)(`${e.apiUrl}/api/editusertext`))),
								method: o.cb.POST,
								data: a
							}).then(e => e.ok ? e.body.json ? e.body.json.errors.length ? {
								...e,
								ok: !1,
								error: Object(k.a)(e)
							} : {
								...e,
								body: {
									comment: Object(y.a)(e.body.json.data.things[0].data, r)
								}
							} : {
								...e,
								body: {
									comment: Object(y.a)(e.body, r)
								}
							} : {
								...e,
								error: e.error || Object(O.a)()
							})
						})(a(), e, 0, r, d, l);
					if (u.ok) {
						const o = u.body;
						n(Ee({
							commentId: e,
							commentsPageKey: t,
							draftKey: s
						})), n(Object(K.h)({
							[e]: {
								...o.comment
							}
						}))
					} else n(xe({
						draftKey: s,
						error: u.error
					}))
				}, Oe = Object(r.a)(z.x), ye = Object(r.a)(z.w), ke = Object(r.a)(z.y), je = (e, t) => async (n, s, {
					apiContext: r
				}) => {
					const i = s();
					n(Oe({
						id: e
					})), R.a(e, i);
					const a = await ((e, t) => Object(C.a)(Object(E.a)(e, [v.a]), {
						endpoint: Object(_.a)(`${e.apiUrl}/api/del`),
						method: o.cb.POST,
						data: {
							id: t
						}
					}).then(e => e.ok ? e.body.json && e.body.json.errors.length ? {
						...e,
						ok: !1,
						error: Object(k.a)(e)
					} : {
						...e,
						body: {}
					} : {
						...e,
						error: e.error || Object(O.a)()
					}))(r(), e);
					a.ok ? n(ke({
						id: e,
						postId: t
					})) : n(ye({
						id: e,
						error: a.error
					}))
				}, Se = e => async (t, n, {
					apiContext: s
				}) => {
					const o = !n().features.comments.models[e].sendReplies;
					t(Object(K.h)({
						[e]: {
							sendReplies: o
						}
					})), (await Object(P.q)(s(), e, o)).ok || t(Object(K.h)({
						[e]: {
							sendReplies: !o
						}
					}))
				}
		},
		"./src/reddit/actions/comment/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "h", (function() {
				return I
			})), n.d(t, "k", (function() {
				return T
			})), n.d(t, "d", (function() {
				return N
			})), n.d(t, "g", (function() {
				return M
			})), n.d(t, "j", (function() {
				return F
			})), n.d(t, "n", (function() {
				return A
			})), n.d(t, "i", (function() {
				return B
			})), n.d(t, "f", (function() {
				return U
			})), n.d(t, "e", (function() {
				return V
			})), n.d(t, "l", (function() {
				return H
			})), n.d(t, "m", (function() {
				return q
			})), n.d(t, "c", (function() {
				return K
			})), n.d(t, "a", (function() {
				return J
			})), n.d(t, "b", (function() {
				return Y
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./src/config.ts"),
				o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/telemetry/index.ts"),
				i = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/reddit/actions/economics/helpers/async.ts"),
				c = n("./src/reddit/actions/login.ts"),
				d = n("./src/reddit/actions/modal.ts"),
				l = n("./src/reddit/actions/presence.ts"),
				u = n("./src/reddit/actions/shortcuts/utils.ts"),
				m = n("./src/reddit/actions/toaster.ts"),
				p = n("./src/reddit/actions/vote.ts"),
				h = n("./src/reddit/endpoints/comment/index.tsx"),
				b = n("./src/reddit/helpers/commentList/index.ts"),
				f = n("./src/reddit/helpers/trackers/comment.ts"),
				g = n("./src/reddit/models/Comment/index.ts"),
				C = n("./src/reddit/models/Post/index.ts"),
				x = n("./src/reddit/models/Toast/index.ts"),
				E = n("./src/reddit/models/Vote/index.ts"),
				v = n("./src/reddit/selectors/comments.ts"),
				_ = n("./src/reddit/selectors/commentSelector.ts"),
				O = n("./src/reddit/selectors/experiments/avatarsInComments.ts"),
				y = n("./src/reddit/selectors/moderatingComments.ts"),
				k = n("./src/reddit/selectors/user.ts"),
				j = n("./src/reddit/actions/comment/constants.ts");
			const S = {},
				I = Object(i.a)(j.n),
				T = e => async (t, n, {
					apiContext: s
				}) => {
					if (!Object(k.J)(n())) return t(Object(c.j)()), void t(Object(d.k)({
						actionSource: d.a.Save,
						redirectUrl: Object(v.m)(n(), {
							commentId: e
						})
					}));
					const r = n().features.comments.models[e];
					if (!r) return;
					const i = r.isSaved ? h.k : h.g;
					if (t(I({
							[e]: {
								isSaved: !r.isSaved
							}
						})), (await i(s(), e)).ok) {
						const n = r.isSaved ? o.fbt._("Comment unsaved successfully", null, {
								hk: "UGKHZ"
							}) : o.fbt._("Comment saved successfully", null, {
								hk: "1BZqMx"
							}),
							s = o.fbt._("Undo", null, {
								hk: "46OwLP"
							});
						t(Object(m.f)({
							text: n,
							kind: x.b.Undo,
							buttonText: s,
							buttonAction: T(e)
						}))
					} else t(I({
						[e]: {
							isSaved: r.isSaved
						}
					}))
				}, w = e => `viewing-comment-${e}`, P = s.a.telemetry.commentConsumedThreshold, N = e => async (t, n) => {
					const o = n();
					if (!Object(_.a)(o, {
							commentId: e
						}) || Math.random() > s.a.telemetry.commentSampleRate) return;
					f.c({
						state: o,
						commentId: e
					}), r.c.start(w(e));
					const i = setTimeout(() => f.a({
						state: o,
						commentId: e
					}), P);
					S[e] = i
				}, M = (e, t) => async (n, s) => {
					const o = s(),
						i = w(e);
					if (Object(_.a)(o, {
							commentId: e
						}) && r.c.has(i)) {
						const n = r.c.end(i);
						!t && n < P && (clearTimeout(S[e]), delete S[e])
					}
				}, D = Object(i.a)(j.v), L = Object(i.a)(j.u), R = Object(i.a)(j.t), F = (e, t) => async (n, s, {
					apiContext: o
				}) => {
					const r = s(),
						i = r.moreComments.models[t],
						c = r.platform.currentPage,
						d = c && c.routeMatch,
						u = d && d.match,
						{
							partialPostId: m
						} = u ? u.params : null;
					if (!m) return;
					const p = Object(C.r)(m);
					n(D({
						moreCommentsId: i.id
					}));
					const f = await Object(h.e)(o(), p, {
						token: i.token
					}, Object(O.a)(r));
					if (f.ok) {
						const t = f.body,
							s = Object(b.a)(t, p, r);
						n(L({
							key: e,
							moreCommentsItem: i,
							shouldCollapse: s,
							...t
						}));
						const o = r.posts.models[p];
						let c;
						o && "subreddit" === o.belongsTo.type && t.comments && (c = o.belongsTo.id, await n(Object(a.a)({
							commentIds: Object.keys(f.body.comments),
							postIds: [o.id],
							skip: ["communityDetails", "subscription"],
							subredditId: c
						})));
						const d = f.body.comments,
							u = f.body.posts;
						await n(Object(l.b)(u, d, c))
					} else n(R({
						moreCommentsItem: i,
						...f.error
					}))
				}, A = Object(p.a)(b.b, E.a.upvoted), B = Object(p.a)(b.b, E.a.downvoted), U = Object(i.a)(j.i), V = Object(i.a)(j.h), W = Object(i.a)(j.d), G = Object(i.a)(j.e), H = (Object(i.a)(j.b), Object(i.a)(j.c), ({
					commentId: e,
					commentsPageKey: t,
					scrollToAndRemeasure: n
				}) => async (s, o) => {
					const r = o(),
						i = Object(g.g)(e),
						a = Object(v.n)(r, {
							commentLink: i,
							commentsPageKey: t
						}),
						c = Object(y.b)(r, {
							commentId: e,
							commentsPageKey: t
						}),
						d = a.depth;
					s(W({
						commentId: e,
						commentsPageKey: t,
						isCollapsed: c
					})), c || 0 !== d || n(e, !0), Object(u.d)()
				}), q = ({
					commentId: e,
					commentsPageKey: t
				}) => async n => {
					n(G({
						commentId: e,
						commentsPageKey: t
					}))
				}, K = ({
					commentLink: e,
					commentsPageKey: t,
					lineDepth: n,
					scrollToAndRemeasure: s
				}) => async (o, r) => {
					const i = r(),
						a = Object(b.e)(t, e, n, i),
						c = Object(y.b)(i, {
							commentId: e.id,
							commentsPageKey: t
						});
					o(W({
						commentId: a,
						commentsPageKey: t,
						isCollapsed: c
					})), 0 === n && s(a, !0), Object(u.d)()
				}, z = Object(i.a)(j.q), J = e => t => t(z({
					draftKey: e
				})), Y = Object(i.a)(j.a)
		},
		"./src/reddit/actions/economics/me/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "c", (function() {
				return r
			}));
			const s = "ECONOMICS__ME__ME_DATA_SUCCESS",
				o = "ECONOMICS__ME__POINTS_COPY_REQUESTED",
				r = "ECONOMICS__ME__POINTS_COPY_SUCCESS"
		},
		"./src/reddit/actions/economics/me/thunkedActions.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return m
			})), n.d(t, "a", (function() {
				return p
			}));
			var s = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/makeRequest/index.ts"),
				r = n("./src/config.ts"),
				i = n("./src/reddit/endpoints/governance/requester.ts");
			var a = n("./src/lib/makeActionCreator/index.ts"),
				c = n("./src/reddit/actions/economics/me/constants.ts");
			const d = Object(a.a)(c.a),
				l = Object(a.a)(c.b),
				u = Object(a.a)(c.c),
				m = e => async (t, n, {
					apiContext: s
				}) => {
					const o = e && e.includeMemberships || !1,
						a = e && e.forceFetch || !1,
						c = n();
					if (!c.economics.me.fetched || o && !c.economics.me.data.specialMemberships || a) {
						const e = await
						function(e, t) {
							return Object(i.a)(e, {
								method: "get",
								endpoint: `${r.a.metaUrl}/users/me${t?"?fields=specialMemberships":""}`
							})
						}(s(), o);
						if (e.ok) {
							const n = e.body;
							o && !n.specialMemberships && (n.specialMemberships = {}), t(d(n))
						}
					}
				}, p = () => async (e, t) => {
					const n = t(),
						r = n.economics.me.data;
					if (!r) throw new Error("me data required for copy to be fetched");
					if (!n.economics.pointsCopy.fetched) {
						e(l());
						const t = `https://${r.pointsDocsBaseUrl}v1.json?web`,
							n = await Object(o.b)({
								endpoint: t,
								method: s.cb.GET
							});
						n.ok && n.body && e(u(n.body))
					}
				}
		},
		"./src/reddit/actions/economics/paymentSystems/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "e", (function() {
				return o
			})), n.d(t, "b", (function() {
				return r
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "d", (function() {
				return a
			}));
			const s = "ECONOMICS__PAYMENT_SYSTEM__CARD_DELETE_SUCCESS",
				o = "ECONOMICS__PAYMENT_SYSTEM__PAYPAL_DELETE_SUCCESS",
				r = "ECONOMICS__PAYMENT_SYSTEM__INFO_FAILURE",
				i = "ECONOMICS__PAYMENT_SYSTEM__INFO_FETCHED",
				a = "ECONOMICS__PAYMENT_SYSTEM__INFO_PENDING"
		},
		"./src/reddit/actions/economics/predictions/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return E
			})), n.d(t, "h", (function() {
				return v
			})), n.d(t, "k", (function() {
				return _
			})), n.d(t, "j", (function() {
				return O
			})), n.d(t, "g", (function() {
				return j
			})), n.d(t, "b", (function() {
				return S
			})), n.d(t, "l", (function() {
				return I
			})), n.d(t, "c", (function() {
				return T
			})), n.d(t, "a", (function() {
				return w
			})), n.d(t, "m", (function() {
				return N
			})), n.d(t, "i", (function() {
				return M
			})), n.d(t, "d", (function() {
				return D
			})), n.d(t, "e", (function() {
				return L
			}));
			var s = n("./node_modules/uuid/index.js"),
				o = n.n(s),
				r = n("./src/lib/initializeClient/installReducer.ts"),
				i = n("./src/reddit/reducers/features/predictions/index.ts"),
				a = n("./src/lib/makeActionCreator/index.ts"),
				c = n("./src/reddit/endpoints/economics/predictions.ts"),
				d = n("./src/reddit/models/Poll/index.ts"),
				l = n("./src/reddit/selectors/experiments/econ/predictions.ts"),
				u = n("./src/reddit/selectors/posts.ts"),
				m = n("./src/reddit/selectors/subreddit.ts"),
				p = n("./src/reddit/selectors/user.ts"),
				h = n("./src/reddit/selectors/features/predictions/creation/index.ts"),
				b = n("./src/reddit/selectors/features/predictions/tournaments/index.ts"),
				f = n("./src/reddit/actions/economics/predictions/constants.ts");
			Object(r.a)({
				features: {
					predictions: i.a
				}
			});
			const g = Object(a.a)(f.d),
				C = Object(a.a)(f.g),
				x = Object(a.a)(f.f),
				E = (e, t, n, s) => async (o, r, {
					gqlContext: i
				}) => {
					const a = Object(p.J)(r()),
						d = await Object(c.h)(i(), {
							subredditId: e,
							period: t,
							top: n,
							includeCurrentRank: a,
							tournamentId: s
						});
					if (d.error || !d.ok) throw new Error("Failed to fetch subreddit top predictors");
					const {
						subredditInfoById: l
					} = d.body.data;
					if (!l || !l.predictionWinners) throw new Error("Subreddit has no prediction winners");
					const {
						predictionWinners: u
					} = l, m = {
						subredditId: e,
						...u
					};
					return o(g(m)), m
				}, v = e => async (t, n, {
					gqlContext: s
				}) => {
					const o = n(),
						r = Object(u.P)(o, {
							postId: e,
							disallowProfile: !0
						});
					if (!r) throw new Error("Post does not belong to a subreddit");
					const i = await Object(c.f)(s(), r.name, Object(l.d)(o));
					if (i.error || !i.ok) throw new Error("Failed to fetch coin packs");
					const {
						subredditInfoByName: a
					} = i.body.data;
					if (!a || !a.predictionCoinPackages.length) throw new Error("Subreddit has no coin packs");
					return a.predictionCoinPackages
				}, _ = ({
					coinPackageId: e,
					optionId: t,
					postId: n,
					price: s
				}) => async (o, r, {
					gqlContext: i
				}) => {
					const a = await Object(c.l)(i(), {
						coinPackageId: e,
						optionId: t,
						postId: n,
						price: s
					});
					if (a.error || !a.ok) throw new Error("Failed to make prediction");
					const {
						votePrediction: d
					} = a.body.data;
					if (!d) throw new Error("Failed to create prediction vote");
					return o(C({
						pollId: n,
						prediction: d.poll,
						price: s
					})), d.poll
				}, O = ({
					optionId: e,
					postId: t
				}) => async (n, s, {
					gqlContext: o
				}) => {
					const r = await Object(c.j)(o(), {
							optionId: e,
							postId: t
						}),
						{
							resolvePrediction: i
						} = r.body.data;
					if (!(null == i ? void 0 : i.poll)) throw new Error("Failed to resolve prediction");
					return n(x({
						pollId: t,
						prediction: i.poll
					})), i.poll
				}, y = Object(a.a)(f.b), k = Object(a.a)(f.c), j = e => async (t, n, {
					gqlContext: s
				}) => {
					const o = n(),
						r = Object(m.F)(o, e);
					if (Object(b.i)(o, {
							subredditId: r
						})) return Object(b.f)(o, {
						subredditId: r
					});
					t(y({
						subredditId: r
					}));
					const i = await Object(c.i)(s(), {
						subredditName: e,
						isLatestOnly: !0,
						isIncludingPredictions: !0,
						isIncludingParticipants: !0
					});
					if (i.error || !i.ok) throw new Error("Failed to fetch tournaments");
					const {
						subredditInfoByName: a
					} = i.body.data;
					if (!a.predictionTournaments) return [];
					const d = a.predictionTournaments;
					return t(k({
						subredditId: r,
						tournaments: d
					})), d
				}, S = Object(a.a)(f.a), I = Object(a.a)(f.h), T = ({
					subredditId: e
				}) => async (t, n, {
					gqlContext: s
				}) => {
					const o = n(),
						r = Object(h.b)(o),
						i = Object(l.a)(o);
					if (!r) throw new Error("Failed to create tournament, no prediction drafts attached");
					const a = await Object(c.c)(s(), {
							name: "Predictions Tournament",
							isStartImmediately: !0,
							subredditId: e,
							predictionDrafts: r,
							currency: i ? d.b.Coins : d.b.Tokens
						}),
						{
							createPredictionTournament: u
						} = a.body.data;
					if (!(null == u ? void 0 : u.tournament)) throw new Error("Failed to resolve prediction");
					return u.tournament
				}, w = (e, t) => async (n, s, {
					gqlContext: r
				}) => {
					const i = Object(h.b)(s());
					if (!i) throw new Error("Failed to create prediction post, no prediction drafts attached");
					const a = await Object(c.b)(r(), {
							tournamentId: e,
							isStartImmediately: !0,
							iKey: `add-dfts-${o.a.v4()}`,
							subredditId: t,
							predictionDrafts: i
						}),
						{
							addPredictionDrafts: d
						} = a.body.data;
					if (!(null == d ? void 0 : d.tournament)) throw new Error("Failed to create prediction");
					return d.tournament
				}, P = Object(a.a)(f.i), N = (e, t, n) => async (s, o, {
					gqlContext: r
				}) => {
					const i = await Object(c.k)(r(), {
							tournamentId: e,
							name: n
						}),
						{
							updatePredictionTournament: a
						} = i.body.data;
					if (!a.tournament) throw new Error("Failed to update prediction name");
					return s(P({
						subredditId: t,
						tournament: a.tournament
					})), a.tournament
				}, M = (e, t) => async (n, s, {
					gqlContext: o
				}) => {
					const r = await Object(c.d)(o(), {
							tournamentId: e
						}),
						{
							endPredictionTournament: i
						} = r.body.data;
					if (!i.tournament) throw new Error("Failed to update prediction name");
					return n(P({
						subredditId: t,
						tournament: i.tournament
					})), i.tournament
				}, D = e => async (t, n, {
					gqlContext: s
				}) => {
					const o = await Object(c.e)(s(), {
						postId: e
					});
					if (!o.ok || o.error) throw new Error("Failed to fetch prediction chip packages");
					const {
						postInfoById: r
					} = o.body.data;
					if (!r.predictionChipPackages) throw new Error("Failed to fetch prediction chip packages");
					return r.predictionChipPackages
				}, L = e => async (t, n, {
					gqlContext: s
				}) => {
					const o = await Object(c.g)(s(), {
						tournamentId: e
					});
					if (!o.ok || o.error) throw new Error("Failed to fetch token balance");
					const {
						identity: r
					} = o.body.data;
					if (!r.hasOwnProperty("predictionTokens")) throw new Error("Failed to fetch token balance");
					return r.predictionTokens
				}
		},
		"./src/reddit/actions/economics/subredditPremium/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "c", (function() {
				return r
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "e", (function() {
				return a
			})), n.d(t, "f", (function() {
				return c
			})), n.d(t, "g", (function() {
				return d
			})), n.d(t, "h", (function() {
				return l
			})), n.d(t, "i", (function() {
				return u
			}));
			const s = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_APPLIED",
				o = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_BADGE_TYPE_CHANGED",
				r = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_MODAL_OPENED",
				i = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_VIEW_CHANGED",
				a = "ECONOMICS__SUBREDDIT_PREMIUM__EDITOR_PRODUCTS_FETCH_SUCCESS",
				c = "ECONOMICS__SUBREDDIT_PREMIUM__ORDER_SUCCESS",
				d = "ECONOMICS__SUBREDDIT_PREMIUM__SUBREDDIT_INFO_SUCCESS",
				l = "ECONOMICS__SUBREDDIT_PREMIUM__SUBSCRIPTION_CANCEL_SUCCESS",
				u = "ECONOMICS__SUBREDDIT_PREMIUM__SUBSCRIPTION_DATA_SUCCESS"
		},
		"./src/reddit/actions/gold/communityAwards/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "i", (function() {
				return i
			})), n.d(t, "d", (function() {
				return a
			})), n.d(t, "e", (function() {
				return c
			})), n.d(t, "f", (function() {
				return d
			})), n.d(t, "b", (function() {
				return l
			})), n.d(t, "c", (function() {
				return u
			})), n.d(t, "j", (function() {
				return m
			})), n.d(t, "g", (function() {
				return p
			})), n.d(t, "h", (function() {
				return h
			}));
			var s = n("./src/lib/loadableAction/index.ts");
			const o = e => () => n.e("CommunityAwards").then(n.bind(null, "./src/reddit/actions/gold/communityAwards/communityAwards.ts")).then(t => t[e]),
				r = Object(s.a)(o("awardSheetInfoRequested")),
				i = Object(s.a)(o("manageableAwardsRequested")),
				a = Object(s.a)(o("createCommunityAward")),
				c = Object(s.a)(o("createGlobalAward")),
				d = Object(s.a)(o("createModAward")),
				l = Object(s.a)(o("createAwardFailed")),
				u = Object(s.a)(o("createAwardSuccessful")),
				m = Object(s.a)(o("removeCommunityAward")),
				p = Object(s.a)(o("disableAwardinCommunity")),
				h = Object(s.a)(o("enableAwardinCommunity"))
		},
		"./src/reddit/actions/gold/modals.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return f
			})), n.d(t, "b", (function() {
				return C
			})), n.d(t, "d", (function() {
				return E
			})), n.d(t, "c", (function() {
				return _
			})), n.d(t, "a", (function() {
				return O
			})), n.d(t, "f", (function() {
				return y
			}));
			var s = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/lib/postParentMessage/index.ts"),
				r = n("./src/reddit/helpers/isPost.ts"),
				i = n("./src/reddit/constants/modals.ts"),
				a = n("./src/reddit/selectors/gild.ts"),
				c = n("./src/reddit/helpers/correlationIdTracker.ts"),
				d = n("./src/reddit/actions/gold/communityAwards/index.ts"),
				l = n("./src/reddit/actions/modal.ts"),
				u = n("./src/reddit/selectors/communityAwards.ts"),
				m = n("./src/reddit/selectors/posts.ts"),
				p = n("./src/reddit/selectors/subreddit.ts"),
				h = n("./src/telemetry/index.ts"),
				b = n("./src/reddit/actions/gold/constants.ts");
			const f = Object(s.a)(b.L),
				g = Object(s.a)(b.g),
				C = () => async (e, t) => {
					const s = t();
					e(g()), Object(c.b)(c.a.GiftPremiumFlow);
					const {
						clickCloseModalEvent: o
					} = await n.e("givePremiumTrackers").then(n.bind(null, "./src/reddit/helpers/trackers/givePremium.ts"));
					Object(h.a)(o()(s))
				}, x = Object(s.a)(b.K), E = ({
					awardId: e,
					correlationId: t,
					thingId: n
				}) => async (s, o) => {
					const a = o(),
						c = e ? Object(u.a)(a, e) : void 0;
					s(x({
						award: c && c.isEnabled ? c : void 0,
						thingId: n,
						correlationId: t
					})), s(Object(l.h)(i.a.GOLD_GILD_MODAL));
					const h = Object(p.J)(a, {
						thingId: n
					});
					let b = null;
					if (h) b = h.id;
					else if (Object(r.a)(n)) {
						const e = Object(m.D)(a, {
							postId: n
						});
						e && (b = e.belongsTo.id)
					}
					b && Object(d.a)(b, n)
				}, v = Object(s.a)(b.f), _ = Object(s.a)(b.J), O = () => async (e, t) => {
					const s = t(),
						r = Object(a.d)(s);
					if (Object(a.g)(s)) {
						const e = "close.gild";
						Object(o.a)({
							type: e
						})
					}
					e(v()), e(Object(l.g)(i.a.GOLD_GILD_MODAL));
					const {
						clickCloseGildModalEvent: d
					} = await Promise.resolve().then(n.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
					Object(h.a)(d(r)(s)), Object(c.b)(c.a.GildingFlow)
				}, y = () => async () => {
					Object(o.a)({
						type: "login.gild"
					})
				}
		},
		"./src/reddit/actions/governance/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "c", (function() {
				return r
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "e", (function() {
				return a
			})), n.d(t, "f", (function() {
				return c
			})), n.d(t, "g", (function() {
				return d
			})), n.d(t, "h", (function() {
				return l
			})), n.d(t, "i", (function() {
				return u
			})), n.d(t, "j", (function() {
				return m
			})), n.d(t, "k", (function() {
				return p
			})), n.d(t, "l", (function() {
				return h
			})), n.d(t, "m", (function() {
				return b
			})), n.d(t, "n", (function() {
				return f
			})), n.d(t, "o", (function() {
				return g
			})), n.d(t, "p", (function() {
				return C
			})), n.d(t, "q", (function() {
				return x
			})), n.d(t, "r", (function() {
				return E
			})), n.d(t, "s", (function() {
				return v
			})), n.d(t, "t", (function() {
				return _
			})), n.d(t, "u", (function() {
				return O
			})), n.d(t, "v", (function() {
				return y
			})), n.d(t, "w", (function() {
				return k
			})), n.d(t, "x", (function() {
				return j
			}));
			const s = "GOVERNANCE__COMMUNITY_DETAILS_SUCCESS",
				o = "GOVERNANCE__NEW_SUBREDDIT_SUGGESTED",
				r = "GOVERNANCE__NEW_TOP_MOD_SUGGESTED",
				i = "GOVERNANCE__OPT_OUT_MODAL_OPENED",
				a = "POLL_VOTE_SUCCESS",
				c = "GOVERNANCE__PROPOSAL_CREATION_FAILURE",
				d = "GOVERNANCE__PROPOSAL_CREATION_PENDING",
				l = "GOVERNANCE__PROPOSAL_CREATION_SUCCESS",
				u = "GOVERNANCE__PROPOSAL_OPTION_VOTE_FAILURE",
				m = "GOVERNANCE__PROPOSAL_OPTION_VOTE_PENDING",
				p = "GOVERNANCE__PROPOSAL_OPTION_VOTE_SUCCESS",
				h = "GOVERNANCE__PUBLIC_WALLET_INFO_FAILURE",
				b = "GOVERNANCE__PUBLIC_WALLET_INFO_PENDING",
				f = "GOVERNANCE__PUBLIC_WALLET_INFO_SUCCESS",
				g = "GOVERNANCE__RELEASE_NOTES_MODAL_OPENED",
				C = "GOVERNANCE__RELEASE_NOTES_SUCCESS",
				x = "GOVERNANCE__TRANSFER_FAILURE",
				E = "GOVERNANCE__TRANSFER_MODAL_OPENED",
				v = "GOVERNANCE__TRANSFER_PENDING",
				_ = "GOVERNANCE__TRANSFER_SUCCESS",
				O = "GOVERNANCE__WALLETS_FETCH_FAILURE",
				y = "GOVERNANCE__WALLETS_FETCH_PENDING",
				k = "GOVERNANCE__WALLETS_FETCH_SUCCESS",
				j = "GOVERNANCE__WALLET_REGISTRATION_MODAL_OPENED"
		},
		"./src/reddit/actions/governance/errorToast.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var s = n("./src/reddit/actions/toaster.ts"),
				o = n("./src/reddit/helpers/governanceErrorText/index.ts"),
				r = n("./src/reddit/models/Toast/index.ts");

			function i(e, t) {
				e(Object(s.f)({
					duration: 5e3,
					kind: r.b.Error,
					text: Object(o.a)(t)
				}))
			}
		},
		"./src/reddit/actions/governance/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return E
			})), n.d(t, "b", (function() {
				return v
			})), n.d(t, "c", (function() {
				return O
			})), n.d(t, "f", (function() {
				return I
			})), n.d(t, "g", (function() {
				return D
			})), n.d(t, "d", (function() {
				return L
			})), n.d(t, "e", (function() {
				return R
			})), n.d(t, "h", (function() {
				return F
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/lib/prettyPrintNumber/index.ts"),
				i = n("./src/reddit/actions/modal.ts"),
				a = n("./src/reddit/actions/post.ts"),
				c = n("./src/reddit/actions/toaster.ts"),
				d = n("./src/config.ts"),
				l = n("./src/graphql/operations/PollVote.json"),
				u = n("./src/lib/makeGqlRequest/index.ts"),
				m = n("./src/reddit/models/Poll/index.ts"),
				p = n("./src/reddit/endpoints/governance/requester.ts");
			var h = n("./src/reddit/endpoints/governance/wallet.ts"),
				b = n("./src/reddit/models/Toast/index.ts"),
				f = n("./src/reddit/models/Vote/index.ts"),
				g = n("./src/reddit/selectors/gov.ts"),
				C = n("./src/reddit/actions/governance/constants.ts"),
				x = n("./src/reddit/actions/governance/errorToast.ts");
			const E = Object(o.a)(C.b),
				v = Object(o.a)(C.c),
				_ = Object(o.a)(C.e),
				O = (Object(o.a)(C.f), Object(o.a)(C.g), Object(o.a)(C.h)),
				y = Object(o.a)(C.i),
				k = Object(o.a)(C.j),
				j = Object(o.a)(C.k),
				S = Object(o.a)(C.q),
				I = Object(o.a)(C.r),
				T = Object(o.a)(C.s),
				w = Object(o.a)(C.t),
				P = Object(o.a)(C.u),
				N = Object(o.a)(C.v),
				M = Object(o.a)(C.w),
				D = Object(o.a)(C.x),
				L = (e, t) => async (n, s, {
					apiContext: o,
					gqlContext: r
				}) => {
					let i, c = s().polls.models[e];
					if (n(k({
							pollId: e
						})), (i = c.type === m.a.GA ? await ((e, t, n) => Object(u.a)(e, {
								...l,
								variables: {
									input: {
										postId: t,
										optionId: n
									}
								}
							}))(r(), e, t) : await
							function(e, t, n, s) {
								return Object(p.a)(e, {
									method: "put",
									endpoint: `${d.a.metaUrl}/polls/${t}/${n}/votes/me/${s}`
								})
							}(o(), c.subredditId, e, t)).ok) {
						if (c.type === m.a.GA) {
							const {
								options: e
							} = i.body.data.updatePostPollVoteState.poll;
							n(_({
								pollId: c.id,
								optionId: t,
								options: e
							}))
						} else n(j(i.body));
						const o = s();
						if ((c = o.polls.models[e]) && Object(m.f)(c)) {
							const {
								postId: e
							} = c, t = o.posts.models[e];
							t && t.voteState === f.a.notVoted && n(Object(a.U)(e))
						}
					} else n(y({
						pollId: e,
						error: i.error || i.errors[0].message
					})), Object(x.a)(n, i.error || i.errors[0].messsage)
				}, R = (e, t) => async (n, o, {
					apiContext: a
				}) => {
					n(T());
					const l = o().transfers.communityPoints.contentId || void 0,
						u = await
					function(e, t) {
						return Object(p.a)(e, {
							data: {
								amount: t.amount,
								contentId: t.contentId,
								description: t.message,
								receiveUserName: t.recipient
							},
							endpoint: `${d.a.metaUrl}/wallets/me/${t.subredditId}/transfers`,
							method: "post"
						})
					}(a(), {
						...e,
						contentId: l
					});
					u.ok ? (n(w({
						...u.body,
						subredditId: e.subredditId
					})), n(Object(c.f)({
						kind: b.b.SuccessCommunity,
						text: s.fbt._("Success! You just transferred {amount} {tokenName} to {recipient}", [s.fbt._param("amount", Object(r.a)(e.amount)), s.fbt._param("tokenName", Object(g.n)(o(), {
							subredditId: e.subredditId
						})), s.fbt._param("recipient", e.recipient)], {
							hk: "3klrhq"
						})
					})), t && n(Object(i.f)())) : (n(S({
						error: u.error
					})), Object(x.a)(n, u.error))
				}, F = e => async (t, n, {
					apiContext: s
				}) => {
					t(N());
					const o = await Object(h.a)(s(), e);
					o.ok ? t(M(o.body)) : t(P({
						error: o.error
					}))
				}
		},
		"./src/reddit/actions/jsApi.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return r
			}));
			var s = n("./src/lib/makeActionCreator/index.ts");
			const o = "JSAPI__CONSUMER_SUBSCRIBED",
				r = Object(s.a)(o)
		},
		"./src/reddit/actions/polls.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return r
			}));
			var s = n("./src/lib/makeActionCreator/index.ts");
			const o = "POLLS__POLL_CREATION_UPDATED",
				r = Object(s.a)(o)
		},
		"./src/reddit/actions/postCollection/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return s
			})), n.d(t, "d", (function() {
				return o
			})), n.d(t, "b", (function() {
				return r
			})), n.d(t, "f", (function() {
				return i
			})), n.d(t, "g", (function() {
				return a
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "t", (function() {
				return d
			})), n.d(t, "e", (function() {
				return l
			})), n.d(t, "r", (function() {
				return u
			})), n.d(t, "s", (function() {
				return m
			})), n.d(t, "n", (function() {
				return p
			})), n.d(t, "l", (function() {
				return h
			})), n.d(t, "m", (function() {
				return b
			})), n.d(t, "k", (function() {
				return f
			})), n.d(t, "i", (function() {
				return g
			})), n.d(t, "j", (function() {
				return C
			})), n.d(t, "h", (function() {
				return x
			})), n.d(t, "p", (function() {
				return E
			})), n.d(t, "q", (function() {
				return v
			})), n.d(t, "o", (function() {
				return _
			}));
			const s = "CREATE_COLLECTION_PENDING",
				o = "CREATE_COLLECTION_SUCCESS",
				r = "CREATE_COLLECTION_FAILED",
				i = "GET_SUBREDDIT_COLLECTION_SUCCESS",
				a = "REMOVE_POST_FROM_COLLECTION_SUCCESS",
				c = "ADD_POST_TO_COLLECTION_SUCCESS",
				d = "UPDATE_POST_WITH_COLLECTION_ID",
				l = "DELETE_COLLECTION_SUCCESS",
				u = "UPDATE_COLLECTION_PENDING",
				m = "UPDATE_COLLECTION_SUCCESS",
				p = "UPDATE_COLLECTION_FAILED",
				h = "UPDATE_COLLECTION_DESCRIPTION_PENDING",
				b = "UPDATE_COLLECTION_DESCRIPTION_SUCCESS",
				f = "UPDATE_COLLECTION_DESCRIPTION_FAILED",
				g = "REORDER_COLLECTION_PENDING",
				C = "REORDER_COLLECTION_SUCCESS",
				x = "REORDER_COLLECTION_FAILED",
				E = "UPDATE_COLLECTION_LAYOUT_PENDING",
				v = "UPDATE_COLLECTION_LAYOUT_SUCCESS",
				_ = "UPDATE_COLLECTION_LAYOUT_FAILED"
		},
		"./src/reddit/actions/postCollection/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return M
			})), n.d(t, "e", (function() {
				return L
			})), n.d(t, "g", (function() {
				return F
			})), n.d(t, "a", (function() {
				return U
			})), n.d(t, "c", (function() {
				return W
			})), n.d(t, "h", (function() {
				return K
			})), n.d(t, "f", (function() {
				return Z
			})), n.d(t, "d", (function() {
				return se
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react-router-redux/es/index.js"),
				r = n("./src/lib/filterQueryParams/index.ts"),
				i = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/reddit/actions/postCollection/constants.ts"),
				c = n("./src/reddit/actions/toaster.ts"),
				d = n("./src/reddit/constants/history.ts"),
				l = n("./src/lib/constants/index.ts"),
				u = n("./src/lib/makeApiRequest/index.ts"),
				m = n("./src/lib/omitHeaders/index.ts"),
				p = n("./src/reddit/constants/headers.ts");
			var h = (e, t, n) => Object(u.a)(Object(m.a)(e, [p.a]), {
				endpoint: `${e.apiUrl}/api/v1/collections/add_post_to_collection.json`,
				method: l.cb.POST,
				data: {
					collection_id: t,
					link_fullname: n
				}
			});
			var b = (e, t, n) => Object(u.a)(Object(m.a)(e, [p.a]), {
				endpoint: `${e.apiUrl}/api/v1/collections/create_collection.json`,
				method: l.cb.POST,
				data: {
					title: t,
					sr_fullname: n
				}
			});
			var f = (e, t) => Object(u.a)(Object(m.a)(e, [p.a]), {
					endpoint: `${e.apiUrl}/api/v1/collections/delete_collection.json`,
					method: l.cb.POST,
					data: {
						collection_id: t
					}
				}),
				g = n("./src/config.ts");
			var C = (e, t) => Object(u.a)(Object(m.a)(e, [p.a]), {
				endpoint: `${g.a.gatewayUrl}/desktopapi/v1/subreddit_collections/${t}`,
				method: l.cb.GET
			});
			var x = (e, t, n) => Object(u.a)(Object(m.a)(e, [p.a]), {
				endpoint: `${e.apiUrl}/api/v1/collections/remove_post_in_collection.json`,
				method: l.cb.POST,
				data: {
					collection_id: t,
					link_fullname: n
				}
			});
			var E = (e, t, n) => Object(u.a)(Object(m.a)(e, [p.a]), {
				endpoint: `${e.apiUrl}/api/v1/collections/update_collection_title.json`,
				method: l.cb.POST,
				data: {
					collection_id: t,
					title: n
				}
			});
			var v = (e, t, n) => Object(u.a)(Object(m.a)(e, [p.a]), {
				endpoint: `${e.apiUrl}/api/v1/collections/reorder_collection.json`,
				method: l.cb.POST,
				data: {
					collection_id: t,
					link_ids: n.join(",")
				}
			});
			var _ = (e, t, n) => Object(u.a)(Object(m.a)(e, [p.a]), {
				endpoint: `${e.apiUrl}/api/v1/collections/update_collection_description.json`,
				method: l.cb.POST,
				data: {
					collection_id: t,
					description: n
				}
			});
			var O = (e, t, n) => Object(u.a)(Object(m.a)(e, [p.a]), {
					endpoint: `${e.apiUrl}/api/v1/collections/update_collection_display_layout.json`,
					method: l.cb.POST,
					data: {
						collection_id: t,
						display_layout: n
					}
				}),
				y = n("./src/reddit/helpers/overlay/index.ts"),
				k = n("./src/reddit/helpers/path/index.ts"),
				j = n("./src/reddit/models/Toast/index.ts"),
				S = n("./src/reddit/selectors/postCollection.ts"),
				I = n("./src/reddit/selectors/posts.ts"),
				T = n("./src/reddit/selectors/subreddit.ts");
			const w = Object(i.a)(a.c),
				P = Object(i.a)(a.b),
				N = Object(i.a)(a.d),
				M = (e, t) => async (n, s, {
					apiContext: o
				}) => {
					n(w());
					const r = await b(o(), e, t);
					let i;
					if (r.ok) {
						const e = s().meta,
							t = (e => ({
								author: e.author_name || void 0,
								createdAtUTC: e.created_at_utc,
								description: e.description,
								displayLayout: e.display_layout,
								id: e.collection_id,
								lastUpdateUTC: e.last_update_utc,
								permalink: e.permalink,
								postIds: e.link_ids,
								primaryPostId: e.primary_link_id || void 0,
								subredditId: e.subreddit_id,
								title: e.title
							}))(r.body);
						n(N({
							collection: t,
							meta: e
						})), i = t
					} else {
						const e = r.error;
						n(P(e))
					}
					return i
				}, D = Object(i.a)(a.f), L = e => async (t, n, {
					apiContext: o
				}) => {
					const r = n().postCollection.subredditToIds || {};
					if (Object.keys(r).length > 0) return;
					const i = await C(o(), e);
					i.ok ? t(D(i.body)) : t(Object(c.f)({
						kind: j.b.Error,
						text: s.fbt._("Something went wrong. Just don't panic.", null, {
							hk: "4Ck6Cm"
						})
					}))
				}, R = Object(i.a)(a.g), F = (e, t, n) => async (o, r, {
					apiContext: i
				}) => {
					if ((await x(i(), e, t)).ok) {
						const i = r(),
							a = Object(I.D)(i, {
								postId: t
							}),
							d = a && a.title || "",
							l = Object(S.q)(i, {
								collectionId: e
							}),
							u = (l && l.postIds && l.postIds.indexOf(t) || -1) - 1;
						if (o(R({
								collectionId: e,
								postId: t
							})), n && u >= 0) {
							const t = r(),
								n = Object(S.q)(t, {
									collectionId: e
								}),
								s = n && n.postIds && n.postIds[u] || "",
								i = Object(I.D)(t, {
									postId: s
								});
							i && i.permalink && o(Object(y.a)(i.permalink))
						}
						o(Object(c.f)({
							kind: j.b.SuccessMod,
							text: s.fbt._("Following post removed from collection successfully: {postTitle}", [s.fbt._param("postTitle", d)], {
								hk: "8e1lV"
							}),
							buttonText: s.fbt._("UNDO", null, {
								hk: "3KPLib"
							}),
							buttonAction: U(e, t)
						}))
					} else o(Object(c.f)({
						kind: j.b.Error,
						text: s.fbt._("Something went wrong. Just don't panic.", null, {
							hk: "4Ck6Cm"
						})
					}))
				}, A = Object(i.a)(a.a), B = Object(i.a)(a.t), U = (e, t) => async (n, o, {
					apiContext: r
				}) => {
					const i = o();
					if ((await h(r(), e, t)).ok) {
						n(A({
							collectionId: e,
							postId: t
						})), n(B({
							collectionId: e,
							postId: t
						}));
						const o = Object(I.D)(i, {
								postId: t
							}),
							r = Object(S.q)(i, {
								collectionId: e
							}),
							a = r && r.title || "";
						n(Object(c.f)({
							kind: j.b.SuccessMod,
							text: s.fbt._("Success! You added a post to the collection: {title}", [s.fbt._param("title", a)], {
								hk: "3KNJWi"
							}),
							buttonText: s.fbt._("VIEW", null, {
								hk: "1SSkgL"
							}),
							buttonAction: Object(y.a)(o.permalink)
						}))
					} else n(Object(c.f)({
						kind: j.b.Error,
						text: s.fbt._("Something went wrong. Just don't panic.", null, {
							hk: "4Ck6Cm"
						})
					}))
				}, V = Object(i.a)(a.e), W = (e, t) => async (n, i, {
					apiContext: a
				}) => {
					const d = i();
					if ((await f(a(), e)).ok) {
						const {
							url: i
						} = d.platform.currentPage, a = Object(S.q)(d, {
							collectionId: e
						}), l = a && a.title || "", u = a && a.subredditId, m = u ? Object(T.c)(d, u) : "/";
						n(V({
							collectionId: e,
							collection: a
						})), n(t ? Object(o.c)(Object(r.a)(i, ["collection"])) : Object(o.b)(m)), n(Object(c.f)({
							kind: j.b.SuccessMod,
							text: s.fbt._("Collection deleted successfully: {title}", [s.fbt._param("title", l)], {
								hk: "4tcOKB"
							})
						}))
					} else n(Object(c.f)({
						kind: j.b.Error,
						text: s.fbt._("Something went wrong. Just don't panic.", null, {
							hk: "4Ck6Cm"
						})
					}))
				}, G = Object(i.a)(a.r), H = Object(i.a)(a.n), q = Object(i.a)(a.s), K = (e, t) => async (n, o, {
					apiContext: r
				}) => {
					n(G());
					const i = await E(r(), e, t);
					let a = !1;
					if (i.ok) n(q({
						collectionId: e,
						newTitle: t
					})), n(Object(c.f)({
						kind: j.b.SuccessMod,
						text: s.fbt._("Collection title updated successfully", null, {
							hk: "2hKzKl"
						})
					})), a = !0;
					else {
						const e = i.error;
						n(H(e)), n(Object(c.f)({
							kind: j.b.Error,
							text: s.fbt._("Something went wrong. Just don't panic.", null, {
								hk: "4Ck6Cm"
							})
						}))
					}
					return a
				}, z = Object(i.a)(a.l), J = Object(i.a)(a.m), Y = Object(i.a)(a.k), Z = e => async (t, n) => {
					const s = n().platform.currentPage.locationState;
					t(!(!s || !s[d.a.IsOverlay]) ? Object(y.a)(e.permalink) : Object(o.b)(Object(k.b)(e.permalink)))
				}, Q = Object(i.a)(a.i), X = Object(i.a)(a.j), $ = Object(i.a)(a.h), ee = Object(i.a)(a.p), te = Object(i.a)(a.o), ne = Object(i.a)(a.q), se = e => async t => {
					const n = [],
						{
							collectionId: o,
							description: r,
							displayLayout: i,
							postIds: a,
							title: d
						} = e;
					a && n.push(t(((e, t) => async (n, o, {
						apiContext: r
					}) => {
						n(Q());
						const i = await v(r(), e, t);
						let a = !1;
						return i.ok ? (n(X({
							collectionId: e,
							postIds: t
						})), n(Object(c.f)({
							kind: j.b.SuccessMod,
							text: s.fbt._("Collection order updated successfully", null, {
								hk: "4ccHEL"
							})
						})), a = !0) : (n($({
							error: i.error
						})), n(Object(c.f)({
							kind: j.b.Error,
							text: s.fbt._("Something went wrong. Just don't panic.", null, {
								hk: "4Ck6Cm"
							})
						}))), a
					})(o, a))), d && n.push(t(K(o, d))), void 0 !== r && n.push(t(((e, t) => async (n, o, {
						apiContext: r
					}) => {
						n(z());
						const i = await _(r(), e, t);
						let a = !1;
						if (i.ok) n(J({
							collectionId: e,
							newDescription: t
						})), n(Object(c.f)({
							kind: j.b.SuccessMod,
							text: s.fbt._("Collection description updated successfully", null, {
								hk: "1rIDCC"
							})
						})), a = !0;
						else {
							const e = i.error;
							n(Y(e)), n(Object(c.f)({
								kind: j.b.Error,
								text: s.fbt._("Something went wrong. Just don't panic.", null, {
									hk: "4Ck6Cm"
								})
							}))
						}
						return a
					})(o, r))), i && n.push(t(((e, t) => async (n, o, {
						apiContext: r
					}) => {
						n(ee());
						const i = await O(r(), e, t);
						let a = !1;
						if (i.ok) n(ne({
							collectionId: e,
							newLayout: t
						})), n(Object(c.f)({
							kind: j.b.SuccessMod,
							text: s.fbt._("Collection layout updated successfully", null, {
								hk: "1Rs19j"
							})
						})), a = !0;
						else {
							const e = i.error;
							n(te(e)), n(Object(c.f)({
								kind: j.b.Error,
								text: s.fbt._("Something went wrong. Just don't panic.", null, {
									hk: "4Ck6Cm"
								})
							}))
						}
						return a
					})(o, i)));
					let l = !0;
					return await Promise.all(n).then(e => {
						e.forEach(e => {
							e || (l = !1)
						})
					}), l
				}
		},
		"./src/reddit/actions/postCreation/editorContent.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return p
			})), n.d(t, "a", (function() {
				return h
			})), n.d(t, "d", (function() {
				return f
			})), n.d(t, "c", (function() {
				return g
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/reddit/actions/toaster.ts"),
				i = n("./src/reddit/endpoints/post/convert.ts"),
				a = n("./src/reddit/helpers/localStorage/index.ts"),
				c = n("./src/reddit/helpers/trackers/postComposer.ts"),
				d = n("./src/reddit/models/PostCreationForm/index.ts"),
				l = n("./src/reddit/models/RichTextJson/index.ts"),
				u = n("./src/reddit/models/Toast/index.ts"),
				m = n("./src/reddit/actions/postCreation/constants.ts");
			const p = Object(o.a)(m.C),
				h = Object(o.a)(m.p),
				b = Object(o.a)(m.M),
				f = (e, t, n) => async (o, a, {
					apiContext: f
				}) => {
					c.i(a(), t);
					const C = t === d.h.MARKDOWN,
						x = t === d.h.RICH_TEXT,
						E = m.k;
					if (C && Object(l.G)(n)) return o(b({
						editorKey: e,
						editorMode: d.h.MARKDOWN,
						content: ""
					})), void o(g(t));
					if (x && !n) return o(b({
						editorKey: e,
						editorMode: d.h.RICH_TEXT,
						content: l.i
					})), void o(g(t));
					o(p(E));
					const v = await Object(i.a)(f(), t, C ? JSON.stringify(n) : n);
					v.ok ? (o(h(E)), o(b({
						editorKey: e,
						editorMode: t,
						content: v.body.output
					})), o(g(t))) : (o(h(E)), o(Object(r.f)({
						duration: r.a,
						kind: u.b.Error,
						text: s.fbt._("Something went wrong", null, {
							hk: "3UtpxU"
						})
					})))
				}, g = e => async (t, n) => {
					const o = Object(a.k)();
					if (o >= 3) return;
					const i = n().user.prefs.useMarkdown ? d.h.MARKDOWN : d.h.RICH_TEXT;
					if (e === i) return;
					const c = e === d.h.MARKDOWN ? s.fbt._("You can set Markdown as the default editor mode in the settings", null, {
						hk: "yvN18"
					}) : s.fbt._("You can set Fancy Pants as the default editor mode in the settings", null, {
						hk: "4kQi5k"
					});
					t(Object(r.f)({
						buttonAction: async () => {
							window.open("/settings/feed")
						},
						buttonText: s.fbt._("Open Settings", null, {
							hk: "1CKz9o"
						}),
						kind: u.b.SuccessCommunity,
						text: c
					})), Object(a.cb)(o + 1)
				}
		},
		"./src/reddit/actions/presence.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			})), n.d(t, "b", (function() {
				return m
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/makeApiRequest/index.ts"),
				i = n("./src/lib/omitHeaders/index.ts"),
				a = n("./src/reddit/constants/headers.ts"),
				c = n("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			var d = n("./src/reddit/selectors/experiments/presenceIndicator.ts");
			const l = "PRESENCE__PRESENTUSERS_LOADED",
				u = Object(s.a)(l),
				m = (e, t, n) => async (s, l, {
					apiContext: m
				}) => {
					const p = l();
					if (!Object(d.a)(p)) return;
					const h = new Set;
					e && Object.values(e).map(e => {
						e.authorId && h.add(e.authorId)
					}), t && Object.values(t).map(e => {
						e.authorId && h.add(e.authorId)
					});
					const b = await (async (e, t, n) => Object(r.a)(Object(i.a)(e, [a.a]), {
						endpoint: Object(c.a)(`${e.apiUrl}/api/presence`),
						method: o.cb.POST,
						data: {
							user_fullnames: t.join(","),
							subreddit_fullname: n || ""
						}
					}).then(e => {
						if (!e.ok) return {
							presentUsers: []
						};
						const n = e.body.present_user_fullnames || [],
							s = new Set(n),
							o = {};
						return t.forEach(e => {
							o[e] = s.has(e)
						}), {
							presentUsers: o
						}
					}))(m(), Array.from(h), n);
					s(u(b))
				}
		},
		"./src/reddit/actions/publicAccessNetwork/automute.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return c
			}));
			var s = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/reddit/endpoints/publicAccessNetwork/index.ts"),
				r = n("./src/reddit/actions/publicAccessNetwork/constants.ts");
			const i = Object(s.a)(r.r),
				a = Object(s.a)(r.F),
				c = e => async (t, n, {
					apiContext: s
				}) => {
					const r = await Object(o.a)(s(), e);
					r && r.ok ? t(i({
						streamId: e,
						level: r.body.data.auto_mute_status.level
					})) : t(a(e))
				}
		},
		"./src/reddit/actions/scheduledPosts/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "g", (function() {
				return o
			})), n.d(t, "f", (function() {
				return r
			})), n.d(t, "m", (function() {
				return i
			})), n.d(t, "a", (function() {
				return a
			})), n.d(t, "e", (function() {
				return c
			})), n.d(t, "h", (function() {
				return d
			})), n.d(t, "l", (function() {
				return l
			})), n.d(t, "k", (function() {
				return u
			})), n.d(t, "j", (function() {
				return m
			})), n.d(t, "o", (function() {
				return p
			})), n.d(t, "d", (function() {
				return h
			})), n.d(t, "c", (function() {
				return b
			})), n.d(t, "b", (function() {
				return f
			})), n.d(t, "n", (function() {
				return g
			})), n.d(t, "i", (function() {
				return C
			})), n.d(t, "r", (function() {
				return x
			})), n.d(t, "u", (function() {
				return E
			})), n.d(t, "p", (function() {
				return v
			})), n.d(t, "q", (function() {
				return _
			})), n.d(t, "v", (function() {
				return O
			})), n.d(t, "s", (function() {
				return y
			})), n.d(t, "x", (function() {
				return k
			})), n.d(t, "w", (function() {
				return j
			})), n.d(t, "t", (function() {
				return S
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js");
			const o = "SCHEDULED_POSTS_REQUESTED",
				r = "SCHEDULED_POSTS_LOADED",
				i = "STANDALONE_SCHEDULED_POSTS_LOADED",
				a = "RECURRING_SCHEDULED_POSTS_LOADED",
				c = "SCHEDULED_POSTS_FAILED",
				d = "SCHEDULED_POST_CREATION_SUCCEEDED",
				l = "SCHEDULED_POST_SUBMIT_NOW_SUCCESS",
				u = "SCHEDULED_POST_MUTATE_REQUESTED",
				m = "SCHEDULED_POST_MUTATE_FAILED",
				p = "STANDALONE_POST_MUTATE_SUCCESS",
				h = "RECURRING_POST_MUTATE_SUCCESS",
				b = "RECURRING_POST__EDIT_MODAL_LOAD",
				f = "RECURRING_POST__EDIT_LOAD",
				g = "STANDALONE_POST__EDIT_LOAD",
				C = "SCHEDULED_POST__DELETE_SUCCESS",
				x = () => s.fbt._("Failed to load scheduled posts", null, {
					hk: "1fhkq4"
				}),
				E = () => s.fbt._("Whoops! Invalid scheduled post", null, {
					hk: "35jBb6"
				}),
				v = () => s.fbt._("Unable to delete scheduled post", null, {
					hk: "23nWms"
				}),
				_ = () => s.fbt._("Successfully deleted scheduled post", null, {
					hk: "1Lk7r2"
				}),
				O = () => s.fbt._("Unable to submit scheduled post", null, {
					hk: "vCW43"
				}),
				y = () => s.fbt._("Retry", null, {
					hk: "4bCZ7M"
				}),
				k = () => s.fbt._("Successfully submitted scheduled post!", null, {
					hk: "ONo6q"
				}),
				j = () => s.fbt._("Successfully edited scheduled post!", null, {
					hk: "HfGcT"
				}),
				S = () => s.fbt._("Failed to update scheduled post", null, {
					hk: "2zBuRu"
				})
		},
		"./src/reddit/actions/scheduledPosts/edit.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return x
			})), n.d(t, "a", (function() {
				return v
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react-router-redux/es/index.js"),
				r = n("./src/telemetry/index.ts"),
				i = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/reddit/actions/scheduledPosts/index.ts"),
				c = n("./src/reddit/actions/scheduledPosts/constants.ts"),
				d = n("./src/reddit/actions/toaster.ts"),
				l = n("./src/reddit/endpoints/scheduledPosts/update.ts"),
				u = n("./src/reddit/helpers/graphql/normalizeSubredditScheduledPostsFromGql/index.ts"),
				m = n("./src/reddit/helpers/trackers/scheduledPosts.ts"),
				p = n("./src/reddit/models/ScheduledPost/index.ts"),
				h = n("./src/reddit/models/Toast/index.ts"),
				b = n("./src/reddit/routes/postCreation/index.ts"),
				f = n("./src/reddit/selectors/scheduledPosts/index.ts");
			const g = Object(i.a)(c.n),
				C = Object(i.a)(c.b),
				x = (e, t) => async (n, s, r) => {
					const i = Object(f.a)(s(), {
						scheduledPostId: t,
						subredditId: e
					});
					i && (await n(Object(o.b)(Object(b.c)(i.subreddit.name, i.collectionId))), n((Object(p.p)(i) ? C : g)(i)))
				}, E = (e, t) => {
					Object(p.p)(t) ? e(Object(a.d)({
						scheduledPost: t
					})) : e(Object(a.h)({
						scheduledPost: t
					}))
				}, v = (e, t, n) => async (o, i, {
					gqlContext: b
				}) => {
					o(Object(a.g)());
					const g = Object(f.a)(i(), {
						subredditId: e,
						scheduledPostId: t
					});
					if (g && Object(p.p)(g) && Object(r.a)(Object(m.u)()(i(), g)), !g) return void o(Object(a.f)({
						message: s.fbt._("Scheduled post not found", null, {
							hk: "2zjM55"
						})
					}));
					if (!Object.keys(n).length) return void E(o, g);
					const C = await Object(l.a)(b(), {
							...n,
							id: t
						}),
						x = C.body;
					if (!(C.ok && x && x.data && x.data.updateScheduledPost && x.data.updateScheduledPost.ok && x.data.updateScheduledPost.scheduledPost)) return o(Object(a.f)({
						message: C.error && C.error.fields && C.error.fields.length && C.error.fields[0].msg || s.fbt._("Unknown error", null, {
							hk: "fXs5s"
						})
					})), void o(Object(d.f)(Object(d.e)(c.t(), h.b.Error, c.s(), v(e, t, n))));
					o(Object(d.f)(Object(d.e)(c.w(), h.b.SuccessCommunity))), E(o, Object(u.d)(x.data.updateScheduledPost.scheduledPost))
				}
		},
		"./src/reddit/actions/scheduledPosts/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "g", (function() {
				return f
			})), n.d(t, "f", (function() {
				return g
			})), n.d(t, "h", (function() {
				return C
			})), n.d(t, "d", (function() {
				return x
			})), n.d(t, "c", (function() {
				return O
			})), n.d(t, "e", (function() {
				return k
			})), n.d(t, "i", (function() {
				return S
			})), n.d(t, "a", (function() {
				return I
			})), n.d(t, "b", (function() {
				return w
			}));
			var s = n("./src/lib/assertNever.ts"),
				o = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/reddit/actions/scheduledPosts/constants.ts"),
				i = n("./src/reddit/actions/scheduledPosts/edit.ts"),
				a = n("./src/reddit/actions/toaster.ts"),
				c = n("./src/reddit/endpoints/scheduledPosts/index.ts"),
				d = n("./src/reddit/helpers/graphql/normalizeSubredditScheduledPostsFromGql/index.ts"),
				l = n("./src/reddit/helpers/trackers/scheduledPosts.ts"),
				u = n("./src/reddit/models/ScheduledPost/index.ts"),
				m = n("./src/reddit/models/Toast/index.ts"),
				p = n("./src/reddit/selectors/scheduledPosts/index.ts"),
				h = n("./src/telemetry/index.ts");
			const b = Object(o.a)(r.g),
				f = Object(o.a)(r.k),
				g = Object(o.a)(r.j),
				C = Object(o.a)(r.o),
				x = Object(o.a)(r.d),
				E = Object(o.a)(r.f),
				v = Object(o.a)(r.m),
				_ = Object(o.a)(r.a),
				O = Object(o.a)(r.c),
				y = Object(o.a)(r.e),
				k = Object(o.a)(r.h),
				j = (e, t) => {
					e(y()), e(Object(a.f)(Object(a.e)(r.r(), m.b.Error, r.s(), S(t))))
				},
				S = ({
					subredditId: e,
					includeStandalone: t = {
						standaloneFirst: 25
					},
					includeRecurring: n = {
						recurringFirst: 1e4
					},
					...s
				}) => async (o, r, {
					gqlContext: i
				}) => {
					if (Object(p.h)(r(), {
							subredditId: e
						})) return;
					o(b());
					const a = {
							subredditId: e,
							includeRecurring: n,
							includeStandalone: t,
							...s
						},
						l = await Object(c.b)(i(), a);
					Object(c.f)(l, a) ? T(o, Object(d.e)(l.body.data), a) : j(o, a)
				}, I = e => async (t, n, {
					gqlContext: s
				}) => {
					const o = n();
					if (!Object(p.h)(o, {
							subredditId: e
						})) return t(S({
						subredditId: e
					}));
					if (!Object(p.g)(o, {
							subredditId: e,
							type: u.f.standalonePosts
						})) return;
					const r = Object(p.c)(o, {
						subredditId: e,
						type: u.f.standalonePosts
					});
					if (!r) return;
					t(b());
					const i = {
							subredditId: e,
							includeStandalone: {
								standaloneFirst: 25,
								standaloneAfter: r
							}
						},
						a = await Object(c.b)(s(), i);
					a.ok ? T(t, Object(d.e)(a.body.data), i) : t(y())
				}, T = (e, t, n) => {
					Object(d.b)(t) ? e(E(t)) : Object(d.a)(t) ? e(_(t)) : Object(d.c)(t) ? e(v(t)) : j(e, n)
				}, w = (e, t) => async (n, o, r) => {
					const a = {},
						c = o();
					switch (e) {
						case "isModDistinguished":
						case "isNsfw":
						case "isOriginalContent":
						case "isContestMode":
						case "isPostAsMetaMod":
						case "isSpoiler":
							a[e] = !t[e];
							break;
						case "isSticky":
							const n = !!t.sticky && "NONE" !== t.sticky;
							a.sticky = n ? "NONE" : "SECOND";
							break;
						default:
							return Object(s.a)(e)
					}
					Object(h.a)(Object(l.t)(e, a[e], Object(u.p)(t))(c)), n(Object(i.a)(t.subreddit.id, t.id, a))
				}
		},
		"./src/reddit/actions/subredditAutocomplete/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return s
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "a", (function() {
				return r
			}));
			const s = "SUBREDDIT_AUTOCOMPLETE__PENDING",
				o = "SUBREDDIT_AUTOCOMPLETE__LOADED",
				r = "SUBREDDIT_AUTOCOMPLETE__FAILED"
		},
		"./src/reddit/actions/subredditCrosspostable.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return l
			})), n.d(t, "b", (function() {
				return u
			})), n.d(t, "a", (function() {
				return m
			})), n.d(t, "d", (function() {
				return b
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/reddit/actions/subscription/index.ts"),
				r = n("./src/lib/constants/index.ts"),
				i = n("./src/lib/makeApiRequest/index.ts"),
				a = n("./src/lib/omitHeaders/index.ts"),
				c = n("./src/reddit/constants/headers.ts"),
				d = n("./src/reddit/selectors/subreddit.ts");
			const l = "SUBREDDIT_CROSSPOSTABLE__PENDING",
				u = "SUBREDDIT_CROSSPOSTABLE__LOADED",
				m = "SUBREDDIT_CROSSPOSTABLE__FAILED",
				p = (Object(s.a)(l), Object(s.a)(u)),
				h = Object(s.a)(m),
				b = () => async (e, t, {
					apiContext: n
				}) => {
					await e(o.e());
					const {
						api: s,
						ids: l
					} = t().subreddits.crosspostable;
					if (s.pending || Object.keys(l).length) return;
					const u = await ((e, t) => Object(i.a)(Object(a.a)(e, [c.a]), {
						data: t,
						endpoint: `${e.apiUrl}/api/crosspostable_subreddits.json`,
						method: r.cb.GET
					}))(n(), {
						sr_detail: !1
					});
					if (u.ok) {
						const n = t(),
							s = u.body && u.body.length ? u.body.map(e => Object(d.F)(n, e)).filter(e => !!e).reduce((e, t) => (e[t] = !0, e), {}) : {};
						e(p({
							subredditIds: s
						}))
					} else e(h({
						error: u.error
					}))
				}
		},
		"./src/reddit/actions/subscription/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "c", (function() {
				return o
			})), n.d(t, "a", (function() {
				return r
			})), n.d(t, "h", (function() {
				return i
			})), n.d(t, "i", (function() {
				return a
			})), n.d(t, "g", (function() {
				return c
			})), n.d(t, "f", (function() {
				return d
			})), n.d(t, "d", (function() {
				return l
			})), n.d(t, "e", (function() {
				return u
			}));
			const s = "SUBSCRIPTION__FETCH_DATA_PENDING",
				o = "SUBSCRIPTION__FETCH_DATA_SUCCESS",
				r = "SUBSCRIPTION__FETCH_DATA_FAILURE",
				i = "SUBSCRIPTION__SUBSCRIPTION_TOGGLED",
				a = "SUBSCRIPTION__SUBSCIPTION_TOGGLE_FAILED",
				c = "SUBSCRIPTION__ORDER_LOADED",
				d = "SUBSCRIPTION__SUBREDDIT_FAVORITE_TOGGLED",
				l = "SUBSCRIPTION__MULTI_FAVORITE_TOGGLED",
				u = "SUBSCRIPTION__MULTI_FOLLOW_TOGGLED"
		},
		"./src/reddit/actions/subscription/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return M
			})), n.d(t, "d", (function() {
				return L
			})), n.d(t, "c", (function() {
				return F
			})), n.d(t, "a", (function() {
				return B
			})), n.d(t, "b", (function() {
				return V
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				i = n("./src/lib/linkMatchers/customLinks.ts"),
				a = n("./src/reddit/actions/login.ts"),
				c = n("./src/reddit/actions/modal.ts"),
				d = n("./src/reddit/actions/subscription/constants.ts"),
				l = n("./src/reddit/actions/toaster.ts"),
				u = n("./src/reddit/constants/posts.ts"),
				m = n("./src/lib/makeApiRequest/index.ts"),
				p = n("./src/lib/omitHeaders/index.ts"),
				h = n("./src/reddit/constants/headers.ts");
			var b = n("./src/graphql/operations/SubscribedSubreddits.json"),
				f = n("./src/lib/makeGqlRequest/index.ts"),
				g = n("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			var C = n("./src/reddit/helpers/graphql/normalizeProfileFromGql/index.ts"),
				x = n("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				E = n("./src/reddit/models/GqlTopLevelField.ts"),
				v = n("./src/reddit/models/User/index.ts");

			function _(e) {
				const t = [],
					n = [],
					s = {},
					o = {},
					{
						followedRedditorsInfo: r
					} = e.identity;
				for (const a of r.edges) {
					if (a.node.__typename !== v.c.AvailableRedditor) continue;
					const e = Object(C.a)(a.node.profile);
					s[e.id] = e;
					const {
						isFavorite: n
					} = a.node.profile;
					n && t.push(e.id)
				}
				const {
					subscribedSubreddits: i
				} = e.identity;
				for (const a of i.edges) {
					if (a.node.__typename !== E.a.Subreddit) continue;
					const e = Object(x.a)(a.node);
					o[e.id] = e;
					const {
						isFavorite: t
					} = a.node;
					t && n.push(e.id)
				}
				return {
					favoriteProfileIds: t,
					favoriteSubredditIds: n,
					profiles: s,
					subreddits: o
				}
			}
			var O = n("./src/reddit/models/Toast/index.ts"),
				y = n("./src/reddit/selectors/profile.ts"),
				k = n("./src/reddit/selectors/subreddit.ts"),
				j = n("./src/reddit/selectors/subscriptions.ts"),
				S = n("./src/reddit/selectors/user.ts");
			const I = () => s.fbt._("Sorry, failed to update favorites.", null, {
					hk: "40XHkp"
				}),
				T = Object(r.a)(d.c),
				w = Object(r.a)(d.b),
				P = Object(r.a)(d.a),
				N = Object(r.a)(d.h),
				M = (Object(r.a)(d.i), Object(r.a)(d.g), () => async (e, t, {
					gqlContext: n
				}) => {
					const s = t();
					if (!s.user.account || s.subscriptions.api.fetched) return;
					e(w());
					const o = await (e => Object(f.a)(e, b))(n());
					if (o.ok) {
						const t = _(o.body.data);
						e(T(t))
					} else e(P({
						error: o.error
					}))
				}),
				D = (e, t) => t.type === u.a.PROFILE && e.displayText === t.name.replace("u_", ""),
				L = (e, t, n) => async (r, d, {
					apiContext: b
				}) => {
					let f = e.map(e => e.type === u.a.SUBREDDIT ? {
						id: Object(k.F)(d(), e.name),
						name: e.name,
						type: e.type
					} : {
						id: Object(y.m)(d(), e.name),
						name: `${o.Wb}${e.name}`,
						type: e.type
					});
					if (!Object(S.J)(d())) return r(Object(c.k)({
						actionSource: c.a.Subscribe
					})), void r(Object(a.j)());
					const C = Object(S.i)(d());
					if (C) {
						const t = f.length,
							n = e.length;
						if (f = f.filter(e => !D(C, e)), (e = e.filter(e => !D(C, e))).length !== n || f.length !== t) {
							const e = s.fbt._("You cannot follow yourself!", null, {
								hk: "3tfSaq"
							});
							r(Object(l.f)(Object(l.e)(e, O.b.Error)))
						}
						if (!e.length && !f.length) return
					}
					if (r(N({
							identifiers: f,
							nameIdentifiers: e,
							profileModels: d().profiles.models,
							subredditModels: d().subreddits.models,
							subscriptionsCount: Object(j.b)(d()),
							userIsSubscriber: t,
							widgetId: n
						})), (await ((e, {
							subredditIds: t,
							subredditNames: n,
							subscribe: s
						}) => Object(m.a)(Object(p.a)(e, [h.a]), {
							method: o.cb.POST,
							endpoint: Object(g.a)(`${e.apiUrl}/api/subscribe`),
							data: {
								action: s ? "sub" : "unsub",
								sr: t && t.join(",") || void 0,
								sr_name: n && n.join(",") || void 0,
								api_type: "json"
							}
						}))(b(), {
							subredditNames: f.map(({
								name: e
							}) => e),
							subscribe: t
						})).ok) {
						const n = 1 === e.length ? `${"subreddit"===e[0].type?i.d.subreddit:i.d.profile}${e[0].name}` : `${s.fbt.plural("community",e.length,{many:"communities",name:"communities",showCount:"yes"})}`;
						r(Object(l.f)({
							text: 1 === e.length && "profile" === e[0].type ? s.fbt._("Sucсessfully {verb} {communityname}", [s.fbt._param("verb", t ? "followed" : "unfollowed"), s.fbt._param("communityname", n)], {
								hk: "1hY5KX"
							}) : s.fbt._("Sucсessfully {verb} {communityname}", [s.fbt._param("verb", t ? "joined" : "left"), s.fbt._param("communityname", n)], {
								hk: "1hY5KX"
							})
						}))
					} else {
						r(N({
							identifiers: f,
							nameIdentifiers: e,
							profileModels: d().profiles.models,
							subredditModels: d().subreddits.models,
							subscriptionsCount: Object(j.b)(d()),
							userIsSubscriber: !t,
							widgetId: n
						}));
						const o = s.fbt._("Something went wrong. Please try again!", null, {
							hk: "1zlDeq"
						});
						r(Object(l.f)(Object(l.e)(o, O.b.Error)))
					}
				}, R = Object(r.a)(d.f), F = e => async (t, n, {
					apiContext: s
				}) => {
					const r = n(),
						i = Object(k.L)(r, {
							identifier: e
						});
					if (!i) throw new Error(`actions.subscription -- No subreddit or profile found with id ${e.id}`);
					const a = e.type === u.a.SUBREDDIT ? i.name : `u_${i.name}`,
						c = r.subscriptions.favoriteSubredditOrder || [],
						d = r.subscriptions.favoriteProfileOrder || [],
						b = c.indexOf(e.id),
						f = d.indexOf(e.id),
						g = -1 === b && -1 === f,
						C = r.subreddits.models,
						x = r.profiles.models;
					t(R({
						makeFavorite: g,
						identifier: e,
						subredditModels: C,
						profileModels: x
					}));
					const E = {
							type: e.type,
							name: i.name
						},
						v = () => Object(k.gb)(n(), {
							identifier: E
						});
					(v() || (await t(L([E], !0)), v())) && ((await ((e, t, n) => Object(m.a)(Object(p.a)(e, [h.a]), {
						method: o.cb.POST,
						endpoint: `${e.apiUrl}/api/favorite`,
						data: {
							make_favorite: n ? "true" : "false",
							sr_name: t,
							api_type: "json"
						}
					}))(s(), a, g)).ok || (t(R({
						makeFavorite: !g,
						identifier: e,
						subredditModels: C,
						profileModels: x
					})), t(Object(l.f)({
						text: I(),
						kind: O.b.Error
					}))))
				}, A = Object(r.a)(d.d), B = e => async (t, n, {
					apiContext: s
				}) => {
					const r = n().multireddits.models,
						i = () => {
							t(Object(l.f)({
								text: I(),
								kind: O.b.Error
							}))
						},
						a = r[e];
					if (!a) return void i();
					const c = !a.isFavorited;
					t(A({
						makeFavorite: c,
						multiredditPath: e,
						multiredditsModelsState: r
					})), (await ((e, t, n) => Object(m.a)(Object(p.a)(e, [h.a]), {
						method: o.cb.POST,
						endpoint: `${e.apiUrl}/api/multi/favorite`,
						data: {
							make_favorite: n ? "true" : "false",
							multipath: t,
							api_type: "json"
						}
					}))(s(), e, c)).ok || (t(A({
						makeFavorite: !c,
						multiredditPath: e,
						multiredditsModelsState: r
					})), i())
				}, U = Object(r.a)(d.e), V = e => async (t, n, {
					apiContext: r
				}) => {
					const i = n(),
						a = i.multireddits.models;
					if (!Object(S.J)(i)) return;
					const c = (e = !0) => {
							t(Object(l.f)({
								text: s.fbt._("Sorry, failed to {followAction}", [s.fbt._param("followAction", e ? s.fbt._("follow", null, {
									hk: "2I4uia"
								}) : s.fbt._("unfollow", null, {
									hk: "1ZDqgR"
								}))], {
									hk: "1ufRSl"
								}),
								kind: O.b.Error
							}))
						},
						d = a[e];
					if (!d) return void c();
					const u = !d.isFollowed;
					t(U({
						follow: u,
						multiredditPath: e,
						multiredditsModelsState: a
					})), (await ((e, t, n) => Object(m.a)(Object(p.a)(e, [h.a]), {
						method: o.cb.POST,
						endpoint: `${e.apiUrl}/api/multi/subscribe`,
						data: {
							action: n ? "sub" : "unsub",
							path: t,
							api_type: "json"
						},
						type: "json"
					}))(r(), e, u)).ok || (t(U({
						follow: !u,
						multiredditPath: e,
						multiredditsModelsState: a
					})), c(u))
				}
		},
		"./src/reddit/actions/upload.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return l
			})), n.d(t, "h", (function() {
				return u
			})), n.d(t, "c", (function() {
				return m
			})), n.d(t, "e", (function() {
				return p
			})), n.d(t, "g", (function() {
				return h
			})), n.d(t, "b", (function() {
				return b
			})), n.d(t, "a", (function() {
				return f
			})), n.d(t, "f", (function() {
				return g
			})), n.d(t, "m", (function() {
				return E
			})), n.d(t, "k", (function() {
				return S
			})), n.d(t, "l", (function() {
				return I
			})), n.d(t, "i", (function() {
				return T
			})), n.d(t, "j", (function() {
				return w
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/lodash/get.js"),
				o = n.n(s),
				r = n("./node_modules/uuid/v4.js"),
				i = n.n(r),
				a = n("./src/lib/makeActionCreator/index.ts"),
				c = n("./src/lib/uploadToS3/index.ts"),
				d = n("./src/reddit/models/Upload/index.ts");
			const l = "UPLOAD_PENDING",
				u = "UPLOAD_UPLOADING",
				m = "UPLOAD_METADATA_CHANGED",
				p = "UPLOAD_PROGRESS",
				h = "UPLOAD_SUCCESS",
				b = "UPLOAD_FAILED",
				f = "UPLOAD_CANCELED",
				g = "UPLOAD_REMOVED",
				C = Object(a.a)(l),
				x = Object(a.a)(u),
				E = Object(a.a)(m),
				v = Object(a.a)(p),
				_ = Object(a.a)(h),
				O = Object(a.a)(b),
				y = Object(a.a)(f),
				k = Object(a.a)(g),
				j = new Map,
				S = (e, t) => {
					const n = j.get(e) || [];
					n.push(t), j.set(e, n)
				},
				I = (e, t, n, s = !1) => async (r, a, {
					apiContext: l
				}) => {
					const u = t;
					if (a().uploads[u] && Object(d.c)(a().uploads[u])) return;
					const m = i()(),
						p = () => {
							const e = a().uploads[u];
							return !e || e.id !== m || e.status === d.a.CANCELED
						};
					r(C({
						key: u,
						id: m,
						file: e
					}));
					const {
						uploadLease: h,
						error: b
					} = await n(a().uploads[u]);
					if (p()) return;
					if (b || !h) return void r(O({
						key: u,
						error: b
					}));
					let f;
					S(m, () => {
						f && f.abort()
					}), r(x({
						key: u
					}));
					const g = await Object(c.a)(e, h, e => (f = e, s && e.on("progress", e => {
						if (!p() && "upload" === e.direction) {
							const t = {
								percent: e.percent,
								total: e.total,
								uploaded: e.loaded
							};
							r(v({
								key: u,
								progress: t
							}))
						}
					}), e));
					if (f = null, !p())
						if (g.ok) {
							const e = decodeURIComponent(g.body.PostResponse.Location);
							r(_({
								key: u,
								url: e
							}))
						} else {
							const e = o()(g, "body.Error.Message.0"),
								t = {
									type: "ERROR",
									...e ? {
										fields: [{
											field: "0",
											msg: e
										}]
									} : {}
								};
							r(O({
								key: u,
								error: t
							}))
						}
				}, T = (e, t = !1) => (n, s) => {
					const o = s().uploads[e];
					o && (((e, t) => {
						const n = j.get(e);
						n && n.forEach(n => n(e, t)), j.delete(e)
					})(o.id, t), n(t ? k({
						key: e
					}) : y({
						key: e
					})))
				}, w = (e, t = !1) => (n, s) => {
					Object.keys(s().uploads).forEach(s => {
						s.startsWith(e) && n(T(s, t))
					})
				}
		},
		"./src/reddit/actions/userFlair/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "r", (function() {
				return s
			})), n.d(t, "a", (function() {
				return o
			})), n.d(t, "i", (function() {
				return r
			})), n.d(t, "j", (function() {
				return i
			})), n.d(t, "h", (function() {
				return a
			})), n.d(t, "c", (function() {
				return c
			})), n.d(t, "d", (function() {
				return d
			})), n.d(t, "b", (function() {
				return l
			})), n.d(t, "p", (function() {
				return u
			})), n.d(t, "q", (function() {
				return m
			})), n.d(t, "o", (function() {
				return p
			})), n.d(t, "f", (function() {
				return h
			})), n.d(t, "g", (function() {
				return b
			})), n.d(t, "e", (function() {
				return f
			})), n.d(t, "m", (function() {
				return g
			})), n.d(t, "n", (function() {
				return C
			})), n.d(t, "l", (function() {
				return x
			})), n.d(t, "k", (function() {
				return E
			}));
			const s = "USER_FLAIR_DATA__MUTATED",
				o = "AUTHOR_FLAIR_DATA__MUTATED",
				r = "STRUCTURED_STYLES__USERFLAIR_ENABLED_SETTING_PENDING",
				i = "STRUCTURED_STYLES__USERFLAIR_ENABLED_SETTING_SUCCESS",
				a = "STRUCTURED_STYLES__USERFLAIR_ENABLED_SETTING_FAILED",
				c = "STRUCTURED_STYLES__USERFLAIR_ALLOW_ASSIGN_OWN_SETTING_PENDING",
				d = "STRUCTURED_STYLES__USERFLAIR_ALLOW_ASSIGN_OWN_SETTING_SUCCESS",
				l = "STRUCTURED_STYLES__USERFLAIR_ALLOW_ASSIGN_OWN_SETTING_FAILED",
				u = "STRUCTURED_STYLES__USERFLAIR_SAVETEMPLATE_PENDING",
				m = "STRUCTURED_STYLES__USERFLAIR_SAVETEMPLATE_SUCCESS",
				p = "STRUCTURED_STYLES__USERFLAIR_SAVETEMPLATE_FAILED",
				h = "STRUCTURED_STYLES__USERFLAIR_DELETETEMPLATE_PENDING",
				b = "STRUCTURED_STYLES__USERFLAIR_DELETETEMPLATE_SUCCESS",
				f = "STRUCTURED_STYLES__USERFLAIR_DELETETEMPLATE_FAILED",
				g = "STRUCTURED_STYLES__USERFLAIR_REORDERTEMPLATES_PENDING",
				C = "STRUCTURED_STYLES__USERFLAIR_REORDERTEMPLATES_SUCCESS",
				x = "STRUCTURED_STYLES__USERFLAIR_REORDERTEMPLATES_FAILED",
				E = "USERFLAIR_FETCH_SUCCESS"
		},
		"./src/reddit/components/AdViewability/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/lodash/isEqual.js"),
				o = n.n(s),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				a = n("./node_modules/reselect/es/index.js"),
				c = n("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				d = n("./src/lib/ads/index.ts"),
				l = n("./src/lib/ads/store.ts"),
				u = n("./src/lib/onFocusAndVisibilityChange/index.ts"),
				m = n("./src/reddit/connectors/PostViewable/index.ts"),
				p = n("./src/reddit/constants/adEvents.ts"),
				h = n("./src/reddit/selectors/media.ts"),
				b = n("./src/reddit/selectors/video.ts");
			const f = [{
					event: p.a.ViewableImpression,
					threshold: d.l,
					viewabilityMinimum: d.m
				}, {
					event: p.a.Impression,
					threshold: d.c,
					viewabilityMinimum: d.d
				}, {
					event: p.a.GalleryItemImpression,
					threshold: d.c,
					viewabilityMinimum: d.d
				}, {
					event: p.a.VendorFullyInView,
					threshold: d.b,
					viewabilityMinimum: d.f
				}, {
					event: p.a.GroupMViewable,
					threshold: d.b,
					viewabilityMinimum: d.m
				}, {
					event: p.a.VendorFullyInViewSeconds5,
					threshold: d.l,
					viewabilityMinimum: d.h,
					remainingTime: d.h,
					timeViewingInterrupted: 0,
					cumulative: !0,
					cumulativeElapsedTime: 0
				}, {
					event: p.a.VendorFullyInViewSeconds15,
					threshold: d.l,
					viewabilityMinimum: d.g,
					remainingTime: d.g,
					timeViewingInterrupted: 0,
					cumulative: !0,
					cumulativeElapsedTime: 0
				}],
				g = [{
					event: p.a.VideoViewableImpression,
					threshold: d.l,
					viewabilityMinimum: d.k,
					remainingTime: d.k,
					timeViewingInterrupted: 0
				}, {
					event: p.a.VideoFullyViewableImpression,
					threshold: d.a,
					viewabilityMinimum: d.i,
					remainingTime: d.i,
					timeViewingInterrupted: 0
				}, {
					event: p.a.VideoGroupMViewable,
					threshold: void 0,
					viewabilityMinimum: d.k,
					remainingTime: d.k,
					timeViewingInterrupted: 0,
					cumulative: !0,
					cumulativeElapsedTime: 0,
					checkAudible: !0
				}, {
					event: p.a.VideoVendorFullyViewable50,
					threshold: d.a,
					viewabilityMinimum: void 0,
					remainingTime: void 0,
					timeViewingInterrupted: 0,
					cumulative: !0,
					cumulativeElapsedTime: 0
				}],
				C = e => e.map(({
					event: e,
					cumulative: t = !1,
					cumulativeElapsedTime: n,
					remainingTime: s,
					threshold: o = null,
					viewabilityMinimum: r,
					checkAudible: i = !1,
					timeViewingInterrupted: a
				}) => ({
					event: e,
					cumulative: t,
					checkAudible: i,
					timer: null,
					fired: !1,
					threshold: o,
					remainingTime: s,
					cumulativeElapsedTime: 0,
					viewabilityMinimum: r,
					timeViewingInitialized: 0,
					timeViewingInterrupted: a
				})),
				x = () => C(f),
				E = () => C(g),
				v = [d.c, d.e, d.l, d.j, d.a, d.b],
				_ = [d.c, d.l, d.j, d.a],
				O = [d.c, d.e, d.l, d.b],
				y = e => "boolean" == typeof e.cumulative && e.cumulative,
				k = Object(a.c)({
					continuousViewingStartedAt: (e, {
						post: t
					}) => Object(b.b)(e, {
						postId: t.id
					}),
					videoDuration: (e, {
						post: t
					}) => {
						const n = Object(b.h)(e, {
							postId: t.id
						});
						if (n) return n.length
					},
					isAudible: e => Object(h.a)(e),
					isPlaying: (e, {
						post: t
					}) => Object(b.d)(e, {
						postId: t.id
					}),
					isFullScreen: (e, {
						post: t
					}) => Object(b.e)(e, {
						postId: t.id
					})
				}),
				j = Object(m.a)(k);
			class S extends r.Component {
				constructor(e) {
					super(e), this.viewabilityStats = x(), this.videoStats = E(), this.pageInFocus = !0, this.inViewStats = [], this.outOfViewStats = [], this.handleViewabilityChange = e => {
						this.props.trackDisplay && this.handleThresholds(e, d.r), this.props.trackVideo && this.handleThresholds(e, d.p, !0), this.checkViewabilityByType(e)
					}, this.checkViewabilityByType = e => {
						o()(this.state.event, e) || this.setState({
							event: e
						}), this.props.trackDisplay && this.viewabilityStats.forEach(t => {
							this.checkViewability(e, t)
						}), this.props.isPlaying && this.props.trackVideo && this.videoStats.forEach(t => {
							t.checkAudible && !this.props.isAudible || this.checkViewability(e, t)
						})
					}, this.state = {
						event: null,
						currentContinuousViewingStartedAt: e.continuousViewingStartedAt
					}
				}
				componentDidMount() {
					this.visibilityChangeSubscriptionId = u.a.subscribe(e => {
						this.pageInFocus = e.documentInFocus, this.state.event && this.handleViewabilityChange(this.state.event)
					})
				}
				componentWillUnmount() {
					const {
						post: e,
						trackDisplay: t,
						trackVideo: n
					} = this.props;
					this.visibilityChangeSubscriptionId && u.a.unsubscribe(this.visibilityChangeSubscriptionId), t && (l.d(e.id, d.r, !1), this.viewabilityStats.forEach(e => {
						y(e) && e.cumulative && this.pauseCumulativeStats(e), this.clearTimer(e)
					})), n && (l.d(e.id, d.p, !0), this.videoStats.forEach(e => {
						y(e) && e.cumulative && this.pauseCumulativeStats(e), this.clearTimer(e)
					})), this.outOfViewStats = [], this.inViewStats = []
				}
				componentDidUpdate() {
					this.props.trackVideo && (this.state.currentContinuousViewingStartedAt === this.props.continuousViewingStartedAt ? (this.handleThresholds(this.state.event, d.p, !0), this.videoStats.forEach(e => {
						!this.props.isPlaying || e.checkAudible && !this.props.isAudible ? e.cumulative ? this.pauseCumulativeStats(e) : this.pauseViewableStats(e) : this.checkViewability(this.state.event, e)
					})) : this.resetTimers())
				}
				resetTimers() {
					this.videoStats.forEach(e => {
						e.cumulative || this.resetTimer(e)
					}), this.setState({
						currentContinuousViewingStartedAt: this.props.continuousViewingStartedAt
					})
				}
				resetTimer(e) {
					this.clearTimer(e), e.timeViewingInitialized = 0, void 0 !== e.viewabilityMinimum && (e.remainingTime = e.viewabilityMinimum)
				}
				pauseViewableStats(e) {
					let t;
					if (!e.timer || e.fired) return;
					e.timeViewingInterrupted = Date.now();
					const n = e.timeViewingInterrupted - e.timeViewingInitialized;
					t = (e.viewabilityMinimum || 0) - n, e.remainingTime = t > 0 ? t : 0, this.clearTimer(e)
				}
				pauseCumulativeStats(e) {
					let t;
					e.timer && !e.fired && (e.timeViewingInterrupted = Date.now(), e.cumulativeElapsedTime += e.timeViewingInterrupted - e.timeViewingInitialized, t = (e.viewabilityMinimum || 0) - e.cumulativeElapsedTime, e.remainingTime = t > 0 ? t : 0, this.clearTimer(e))
				}
				meetsViewabilityRequirements(e, t) {
					let n, s = !1,
						o = !1;
					return "object" == typeof t ? (n = t.threshold, s = !!t.playing, o = !!t.withSound) : n = t, this.isAdequatelyInView(e, n) && (!s || this.props.isPlaying) && (!o || this.props.isAudible)
				}
				handleThresholds(e, t, n = !1) {
					const {
						post: s
					} = this.props, r = t.filter(t => this.meetsViewabilityRequirements(e, t));
					!o()(r, this.inViewStats) && r.length > 0 && l.b(s.id, r, n);
					const i = t.filter(t => !this.meetsViewabilityRequirements(e, t));
					!o()(i, this.outOfViewStats) && i.length > 0 && l.d(s.id, i, n), this.outOfViewStats = i, this.inViewStats = r
				}
				isAdequatelyInView(e, t) {
					return !!this.props.isFullScreen || !!e && e.intersectionRatio >= t && this.pageInFocus
				}
				addDurationBasedViewabilityMinimum(e) {
					this.props.videoDuration ? e.viewabilityMinimum = Math.min(.5 * this.props.videoDuration, d.g) : e.viewabilityMinimum = d.g, e.remainingTime = e.viewabilityMinimum
				}
				adjustThreshold(e, t) {
					const {
						height: n,
						width: s
					} = e.boundingClientRect;
					return !t.threshold && t.event === p.a.VideoGroupMViewable && this.props.videoDuration && (t.threshold = s * n < 3e5 ? d.a : d.j, t.viewabilityMinimum = .5 * this.props.videoDuration), t.event === p.a.GroupMViewable && s * n > 242500 && (t.threshold = d.l), t
				}
				checkViewability(e, t) {
					if (y(t) && t.event === p.a.VideoVendorFullyViewable50 && this.addDurationBasedViewabilityMinimum(t), e && e.target && this.adjustThreshold(e, t), t.threshold && void 0 !== t.viewabilityMinimum) {
						if (this.isAdequatelyInView(e, t.threshold) && !t.fired) {
							if (t.timer) return;
							const e = this.getLengthForTimer(t);
							return e > 0 ? this.initTimer(t, e) : this.fireStat(t), void(t.timeViewingInitialized = Date.now())
						}
						y(t) && t.cumulative && this.pauseCumulativeStats(t), this.clearTimer(t)
					}
				}
				clearTimer(e) {
					e.timer && (clearTimeout(e.timer), e.timer = null)
				}
				getLengthForTimer(e) {
					return void 0 !== e.remainingTime ? e.remainingTime : e.viewabilityMinimum || 0
				}
				fireStat(e) {
					setTimeout(() => this.props.onPostViewable(this.props.post, e.event), 0), e.fired = !0
				}
				initTimer(e, t) {
					this.clearTimer(e), e.timer = window.setTimeout(() => {
						this.fireStat(e)
					}, t)
				}
				render() {
					const {
						trackDisplay: e,
						trackVideo: t
					} = this.props;
					let n = v;
					return e && !t ? n = O : !e && t && (n = _), i.a.createElement(c.a, {
						threshold: n,
						onChange: this.handleViewabilityChange
					}, this.props.children)
				}
			}
			t.a = j(S)
		},
		"./src/reddit/components/CategoryTag/index.m.less": function(e, t, n) {
			e.exports = {
				metaFlair: "_7_d4sJjd2oYzaJuU_QpOI",
				"m-lightboxHeader": "_1rtoCmW_7bFJWYffSOwt4R",
				mLightboxHeader: "_1rtoCmW_7bFJWYffSOwt4R"
			}
		},
		"./src/reddit/components/CategoryTagList/index.m.less": function(e, t, n) {
			e.exports = {
				categoryTagWrapper: "_13jLUpnQtcA8FXyw5Kv06q"
			}
		},
		"./src/reddit/components/CategoryTagList/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/reddit/components/TrackingHelper/index.tsx"),
				c = n("./src/reddit/selectors/user.ts"),
				d = n("./src/lib/classNames/index.ts"),
				l = n("./src/lib/constants/index.ts"),
				u = n("./src/reddit/constants/posts.ts"),
				m = n("./src/reddit/controls/InternalLink/index.tsx"),
				p = n("./src/lib/addQueryParams/index.ts");
			const h = (e, t, n, s, o) => {
				const r = o || "*:*",
					i = n || l.Q;
				return Object(p.a)("/search", {
					q: r,
					sort: i,
					t: s,
					category_name: e,
					category: t
				})
			};
			var b = n("./src/reddit/helpers/correlationIdTracker.ts"),
				f = n("./src/reddit/selectors/telemetry.ts");
			const g = (e, t) => n => ({
				source: "post",
				action: "click",
				noun: "meta_flair",
				...f.defaults(n),
				correlationId: Object(b.c)(b.a.SearchResults),
				post: f.post(n, e),
				search: f.postFlairClickToSearch(n, t),
				subreddit: f.subreddit(n)
			});
			var C = n("./src/reddit/components/CategoryTag/index.m.less"),
				x = n.n(C);
			class E extends o.a.Component {
				constructor() {
					super(...arguments), this.onClick = () => {
						const e = {
							id: this.props.category.categoryId,
							title: this.props.category.categoryName,
							eventType: u.a.SUBREDDIT,
							originElement: "meta_flair"
						};
						this.props.sendEvent(g(this.props.postId, e))
					}
				}
				render() {
					const e = this.props.category,
						t = this.props.inLightboxHeader,
						n = e.categoryId,
						s = e.categoryName,
						r = o.a.createElement("span", null, s);
					return o.a.createElement("span", {
						className: Object(d.a)(x.a.metaFlair, {
							[x.a["m-lightboxHeader"]]: t
						})
					}, o.a.createElement(m.a, {
						onClick: this.onClick,
						to: h(s, n, l.Nb.Relevance, l.Ub.DAY),
						children: r
					}))
				}
			}
			var v = n("./src/reddit/components/CategoryTagList/index.m.less"),
				_ = n.n(v);
			const O = Object(r.b)(() => Object(i.c)({
				labelNSFW: c.S
			}));
			t.a = O(Object(a.c)(({
				postCategories: e,
				postId: t,
				inLightboxHeader: n,
				sendEvent: s
			}) => o.a.createElement("span", {
				className: n ? void 0 : _.a.categoryTagWrapper
			}, e.map(e => o.a.createElement(E, {
				postId: t,
				category: e,
				key: e.categoryId,
				inLightboxHeader: n,
				sendEvent: s
			})))))
		},
		"./src/reddit/components/CommentCreation/ExpandingFormDiv.m.less": function(e, t, n) {
			e.exports = {
				breakout: "_1VBLErIxAjOke05q8yLOyf"
			}
		},
		"./src/reddit/components/CommentCreation/ExpandingFormDiv.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/components/CommentCreation/ExpandingFormDiv.m.less"),
				a = n.n(i);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const d = (e, t) => 21 * e + 33 + (t ? 10 : 0);
			t.a = ({
				breakOut: e,
				depth: t,
				isEditing: n,
				...s
			}) => o.a.createElement("div", c({
				className: Object(r.a)({
					[a.a.breakout]: e
				}),
				style: {
					left: d(t, n)
				}
			}, s))
		},
		"./src/reddit/components/CommentCreation/FormFooter/index.m.less": function(e, t, n) {
			e.exports = {
				SubmitButton: "_22S4OsoDdOqiM-hPTeOURa",
				submitButton: "_22S4OsoDdOqiM-hPTeOURa",
				LoadingIcon: "_2qsMO_C_HwxgUgktaOeqZ2",
				loadingIcon: "_2qsMO_C_HwxgUgktaOeqZ2",
				CancelButton: "cZz52cPDbNgzrR1Oo1k27",
				cancelButton: "cZz52cPDbNgzrR1Oo1k27",
				ButtonWrapper: "_3SNMf5ZJL_5F1qxcZkD0Cp",
				buttonWrapper: "_3SNMf5ZJL_5F1qxcZkD0Cp",
				FormFooterWrapper: "_17TqawK-44tH0psnHPIhzS",
				formFooterWrapper: "_17TqawK-44tH0psnHPIhzS",
				pending: "_5p2VqxvUAZTtPIXr7XU5p"
			}
		},
		"./src/reddit/components/CommentCreation/FormFooter/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/controls/Button/index.tsx"),
				c = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				d = n("./src/reddit/components/CommentCreation/FormFooter/index.m.less"),
				l = n.n(d);
			const {
				fbt: u
			} = n("./node_modules/fbt/lib/FbtPublic.js"), m = i.a.div("FormFooterWrapper", l.a), p = i.a.wrapped(a.i, "SubmitButton", l.a), h = i.a.wrapped(c.a, "LoadingIcon", l.a), b = i.a.wrapped(a.l, "CancelButton", l.a), f = i.a.div("ButtonWrapper", l.a), g = e => e.preventDefault();
			t.a = ({
				pending: e,
				cancelButtonEnabled: t = !0,
				children: n,
				className: s,
				submitButtonText: i,
				canSubmit: c,
				onSubmit: d,
				onCancel: C
			}) => o.a.createElement(m, {
				className: Object(r.a)(s, {
					[l.a.pending]: e
				})
			}, o.a.createElement(f, null, o.a.createElement(p, {
				size: a.c.XS,
				type: "submit",
				disabled: !c,
				onClick: d,
				onMouseDown: g
			}, e ? o.a.createElement(h, {
				sizePx: 10
			}) : i), t && o.a.createElement(b, {
				size: a.c.XS,
				type: "reset",
				disabled: e,
				onClick: C,
				onMouseDown: g
			}, u._("Cancel", null, {
				hk: "2TSLl5"
			}))), n)
		},
		"./src/reddit/components/CommentCreation/MarkdownCommentForm/MarkdownModeButton.m.less": function(e, t, n) {
			e.exports = {
				Wrapper: "_3oZ5XBWSc3x7cXsvdt3fJ",
				wrapper: "_3oZ5XBWSc3x7cXsvdt3fJ",
				MarkdownModeIcon: "_1EifMLRAKpii4eqciAhY4q",
				markdownModeIcon: "_1EifMLRAKpii4eqciAhY4q",
				Button: "_1Q2Vq3gesOWZA73NbspEiQ",
				button: "_1Q2Vq3gesOWZA73NbspEiQ"
			}
		},
		"./src/reddit/components/CommentCreation/MarkdownCommentForm/index.m.less": function(e, t, n) {
			e.exports = {
				LoadingIcon: "_2izw1tRcQRvnfuR1E05Cy4",
				loadingIcon: "_2izw1tRcQRvnfuR1E05Cy4",
				CommentHeader: "PN-j_b1WdWATQha3fOgkV",
				commentHeader: "PN-j_b1WdWATQha3fOgkV",
				HelpButton: "MQruKnjMvMoDlmee_nF40",
				helpButton: "MQruKnjMvMoDlmee_nF40",
				SwitchModeButton: "_2UH-_HmB6X-2cCsOZVDtC5",
				switchModeButton: "_2UH-_HmB6X-2cCsOZVDtC5",
				FormHeaderText: "_1EQf9w-o91arfThHA8fn-N",
				formHeaderText: "_1EQf9w-o91arfThHA8fn-N",
				HelpIcon: "_3TI2tdRj3loY834ns393zu",
				helpIcon: "_3TI2tdRj3loY834ns393zu",
				Wrapper: "B0932G-wzdOKwoaSaKsKU",
				wrapper: "B0932G-wzdOKwoaSaKsKU",
				isTopLevelComment: "_3-O087Fe8Gpv51vkui03iG",
				mRedesign: "dDb_knwHdpaUGniyi2rvM",
				FormWrapper: "_2LoNYeXgOQfq1adQ3jWSbi",
				formWrapper: "_2LoNYeXgOQfq1adQ3jWSbi",
				ResizableAutosizeTextarea: "AISc5olsWsxMr-ZvG8ywU",
				resizableAutosizeTextarea: "AISc5olsWsxMr-ZvG8ywU",
				mExpanded: "_2FiN5dLqiHVqs1l1NeoU-W",
				FormFooter: "OQubMtSYxy2qH2Q1upQvp",
				formFooter: "OQubMtSYxy2qH2Q1upQvp",
				userIcon: "_1LJWM5yPEtZv26nvbB_mvr",
				CurrentUserIcon: "_6R8kWvljXn9F_7IAh1RG4",
				currentUserIcon: "_6R8kWvljXn9F_7IAh1RG4",
				pending: "_1N53zdZlGyvjHMUoXkJa42",
				focused: "_2sPOgUISlhUYTMcHhUPCTP"
			}
		},
		"./src/reddit/components/CommentCreation/MarkdownCommentForm/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return de
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				i = n("./node_modules/react-dom/index.js"),
				a = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				d = n("./src/reddit/actions/comment/authoring.ts"),
				l = n("./src/reddit/components/AuthorLink/index.tsx"),
				u = n("./src/reddit/components/CommentCreation/NavigationModule/index.ts"),
				m = n("./src/reddit/components/CommentCreation/ToxicityWarningModal.tsx"),
				p = n("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				h = n("./src/reddit/components/MarkdownHelp/index.tsx"),
				b = n("./src/reddit/components/UserIcon/CurrentUserIcon.tsx"),
				f = n("./src/reddit/controls/ErrorText/index.tsx"),
				g = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				C = n("./src/reddit/icons/svgs/Help/index.tsx"),
				x = n("./src/reddit/components/CommentCreation/ExpandingFormDiv.tsx"),
				E = n("./src/reddit/components/CommentCreation/FormFooter/index.tsx"),
				v = n("./src/lib/fastdom/index.ts"),
				_ = n("./src/reddit/components/CommentCreation/ToolbarSelector.m.less"),
				O = n.n(_),
				y = n("./src/lib/lessComponent.tsx");
			const k = 310,
				j = y.a.div("Container", O.a);
			class S extends r.a.Component {
				constructor() {
					super(...arguments), this.state = {
						toolbarType: null
					}, this.setContainerRef = e => this.container = e, this.selectToolbar = () => {
						const e = this.container && this.container.parentElement;
						if (!e) return;
						const {
							width: t
						} = e.getBoundingClientRect(), n = t < k ? "compact" : "full";
						n !== this.state.toolbarType && v.a.write(() => {
							this.setState({
								toolbarType: n
							})
						})
					}
				}
				componentDidMount() {
					v.a.read(this.selectToolbar), window.addEventListener("resize", this.selectToolbar)
				}
				componentWillUnmount() {
					window.removeEventListener("resize", this.selectToolbar)
				}
				render() {
					return r.a.createElement(j, {
						innerRef: this.setContainerRef
					}, this.state.toolbarType ? this.props.children(this.state.toolbarType) : null)
				}
			}
			var I = n("./src/reddit/icons/svgs/MarkdownMode/index.tsx"),
				T = n("./src/reddit/components/RichTextEditor/HoverTooltip/index.tsx"),
				w = n("./src/reddit/components/CommentCreation/MarkdownCommentForm/MarkdownModeButton.m.less"),
				P = n.n(w),
				N = n("./src/reddit/controls/Button/index.tsx");
			const M = y.a.wrapped(g.a, "LoadingIcon", P.a),
				D = ({
					isFilled: e,
					...t
				}) => r.a.createElement(M, t),
				L = y.a.div("Wrapper", P.a),
				R = y.a.wrapped(I.a, "MarkdownModeIcon", P.a),
				F = ({
					isFilled: e,
					...t
				}) => r.a.createElement(R, t);
			var A = r.a.memo((function(e) {
					const t = s.fbt._("Switch to fancy pants editor", null, {
						hk: "1XOb4H"
					});
					return r.a.createElement(L, null, r.a.createElement(N.q, {
						priority: N.b.Plain,
						size: N.c.XS,
						"aria-label": t,
						innerRef: e.buttonRef,
						className: e.className,
						onClick: e.onClick,
						Icon: e.isConverting ? D : F
					}, r.a.createElement(T.a, {
						text: t
					})))
				})),
				B = n("./src/lib/classNames/index.ts"),
				U = n("./src/reddit/constants/keycodes.ts"),
				V = n("./src/reddit/components/CommentCreation/getCancelModalId.ts"),
				W = n("./src/reddit/constants/componentSizes.ts"),
				G = n("./src/reddit/constants/componentTestIds.ts"),
				H = n("./src/reddit/selectors/activeModalId.ts"),
				q = n("./src/reddit/selectors/comments.ts"),
				K = n("./src/reddit/selectors/editorContent.ts"),
				z = n("./src/reddit/actions/modal.ts"),
				J = n("./src/reddit/components/ResizableAutosizeTextarea/index.tsx"),
				Y = n("./src/reddit/models/PostCreationForm/index.ts"),
				Z = n("./src/reddit/models/PostDraft/index.ts"),
				Q = n("./src/reddit/models/User/index.ts"),
				X = n("./src/reddit/components/CommentCreation/MarkdownCommentForm/index.m.less"),
				$ = n.n(X);
			const ee = y.a.button("SwitchModeButton", $.a),
				te = y.a.wrapped(g.a, "LoadingIcon", $.a),
				ne = y.a.div("CommentHeader", $.a),
				se = y.a.span("FormHeaderText", $.a),
				oe = y.a.button("HelpButton", $.a),
				re = y.a.wrapped(C.a, "HelpIcon", $.a),
				ie = y.a.wrapped(J.a, "ResizableAutosizeTextarea", $.a),
				ae = y.a.wrapped(E.a, "FormFooter", $.a),
				ce = y.a.wrapped(b.a, "CurrentUserIcon", $.a),
				de = e => r.a.createElement(oe, {
					className: e.className,
					onClick: e.onClick
				}, r.a.createElement(re, null)),
				le = 8,
				ue = 16,
				me = y.a.div("Wrapper", $.a),
				pe = y.a.div("FormWrapper", $.a),
				he = Object(a.b)(() => Object(c.c)({
					activeModalId: H.a,
					userName: e => e.user.account ? Object(Q.e)(e.user.account) : "",
					pending: (e, t) => e.features.comments.submit.pending[t.draftKey],
					draft: q.i,
					isConverting: (e, t) => Object(K.a)(e, t.draftKey)
				}), (e, t) => ({
					cancelModalToggled: () => e(Object(z.i)(Object(V.a)(t.draftKey))),
					helpModalToggled: () => e(Object(z.i)(h.b))
				}));
			class be extends r.a.Component {
				constructor(e) {
					super(e), this.textAreaRef = null, this.cancelForm = () => {
						this.props.onCancel(), this.onBlur()
					}, this.detectBreakout = () => {
						if (!this.wrapperEl || !this.wrapperEl.parentElement || this.props.isTopLevelComment) return;
						const e = this.wrapperEl.parentElement.getBoundingClientRect().width < W.c,
							t = this.getWrapperHeight();
						e === this.state.breakOut && t === this.state.wrapperHeight || v.a.write(() => {
							this.setState({
								breakOut: e,
								wrapperHeight: t
							})
						})
					}, this.focus = () => {
						this.textAreaRef && this.textAreaRef.focus()
					}, this.onChange = e => {
						const {
							value: t
						} = e.currentTarget;
						this.props.onChange && this.props.onChange({
							text: t,
							editorState: null
						}), this.setState(() => ({
							text: t,
							hasChanged: !0,
							showError: !1
						}), () => {
							v.a.read(this.detectBreakout)
						})
					}, this.shouldConfirmCancel = () => this.userHasEnteredText() && this.state.hasChanged && this.props.draftType === Z.c.edit, this.onCancel = () => {
						this.shouldConfirmCancel() ? this.props.cancelModalToggled() : this.cancelForm()
					}, this.onBlur = e => {
						(!e || e && e.relatedTarget !== this.switchModeBtn) && (this.textAreaRef && this.textAreaRef.blur(), this.props.onFocusChanged(!1))
					}, this.onFocus = () => {
						this.props.onFocus(), this.props.onFocusChanged(!0)
					}, this.handleKeyDown = e => {
						const {
							ctrlKey: t,
							metaKey: n,
							keyCode: s
						} = e;
						(t || n) && s === U.a.Enter && this.onSubmit()
					}, this.onSubmit = () => {
						this.props.onSubmit({
							commentMode: Y.h.MARKDOWN,
							draftType: this.props.draftType,
							editorState: null,
							text: this.getCurrentText(),
							validate: this.props.showWarningModal
						}), this.onBlur()
					}, this.userHasEnteredText = () => {
						const {
							text: e
						} = this.state;
						return !!e.trim()
					}, this.setWrapperRef = e => {
						this.wrapperEl = e, this.props.editorElementRef && this.props.editorElementRef(e)
					}, this.setTextAreaRef = e => this.textAreaRef = e;
					const {
						draftType: t,
						hasError: n,
						initialText: o
					} = e;
					this.state = {
						text: o || "",
						autofocusDisabled: !1,
						hasChanged: !1,
						showError: n,
						breakOut: !1,
						wrapperHeight: void 0,
						formHeight: null,
						cancelModalText: t === Z.c.edit ? s.fbt._("Are you sure that you want to discard your edits?", null, {
							hk: "1ZfaWW"
						}) : s.fbt._("Are you sure that you want to discard your comment?", null, {
							hk: "3d8gJY"
						})
					}
				}
				componentDidMount() {
					this.props.onMount(), window.addEventListener("resize", this.detectBreakout), v.a.read(this.detectBreakout), v.a.write(() => {
						this.props.draft.hasFocus && this.textAreaRef && this.textAreaRef.focus()
					}), this.props.instanceRef && this.props.instanceRef(this)
				}
				componentWillUnmount() {
					this.props.onUnmount({
						text: this.getCurrentText()
					}), window.removeEventListener("resize", this.detectBreakout), this.props.instanceRef && this.props.instanceRef(null)
				}
				componentDidUpdate(e) {
					const t = e.pending,
						{
							hasError: n,
							pending: s
						} = this.props;
					t && !s && !n ? this.setState({
						text: "",
						showError: !1
					}) : e.hasError !== this.props.hasError && this.setState({
						showError: this.props.hasError
					})
				}
				getCurrentText() {
					const {
						draft: e
					} = this.props, t = e && e.text;
					return this.state.text || t
				}
				getWrapperHeight() {
					if (!this.textAreaRef) return;
					const e = Object(i.findDOMNode)(this.textAreaRef);
					return e instanceof Element ? e.getBoundingClientRect().height + le + ue + W.o : void 0
				}
				render() {
					const {
						activeModalId: e,
						autofocus: t,
						cancelModalToggled: n,
						className: o,
						disableAutofocus: i,
						depth: a,
						draft: c,
						draftKey: b,
						draftType: g,
						errorMsgs: C,
						pending: E,
						modalSeen: v,
						submitButtonText: _,
						isCommentBoxDesignEnabled: O,
						isExpanded: y,
						isTopLevelComment: k,
						onSwitchMode: j,
						userName: I
					} = this.props, {
						cancelModalText: T,
						showError: w,
						text: P,
						breakOut: N,
						wrapperHeight: M
					} = this.state, D = Object(V.a)(b), L = c.draftType === Z.c.edit;
					return r.a.createElement(me, {
						"data-test-id": G.b,
						className: Object(B.a)(o, {
							[$.a.isTopLevelComment]: k,
							[$.a.mExpanded]: y,
							[$.a.mRedesign]: O
						}),
						ref: this.setWrapperRef,
						style: {
							height: N ? M : void 0
						}
					}, !O && k && r.a.createElement(ne, null, r.a.createElement(se, null, s.fbt._("Comment as {authorLink}", [s.fbt._param("authorLink", r.a.createElement(l.a, {
						author: I,
						isAdmin: !1,
						isAdminEmeritus: !1,
						isAuthorDeleted: !1,
						isMod: !1,
						isOp: !1
					}, I))], {
						hk: "4pMWAk"
					}))), r.a.createElement(x.a, {
						breakOut: N,
						depth: a,
						isEditing: L
					}, O && r.a.createElement("div", {
						className: $.a.userIcon
					}, r.a.createElement(ce, null)), r.a.createElement(pe, {
						className: Object(B.a)({
							[$.a.pending]: E,
							[$.a.focused]: c.hasFocus
						})
					}, r.a.createElement(ie, {
						innerRef: this.setTextAreaRef,
						autoFocus: t && !i,
						disabled: E,
						initialHeight: this.props.initialHeight,
						onBlur: this.onBlur,
						onChange: this.onChange,
						onEditorResize: this.props.onEditorResize,
						onFocus: this.onFocus,
						onKeyDown: this.handleKeyDown,
						placeholder: O ? s.fbt._("Add a comment", null, {
							hk: "39ZBm0"
						}) : s.fbt._("What are your thoughts?", null, {
							hk: "4or1AH"
						}),
						value: P
					}), (!O || y) && r.a.createElement(ae, {
						cancelButtonEnabled: g !== Z.c.replyToPost,
						onSubmit: this.onSubmit,
						onCancel: this.onCancel,
						pending: E,
						submitButtonText: _,
						canSubmit: this.userHasEnteredText()
					}, r.a.createElement(S, null, e => "compact" === e ? r.a.createElement(A, {
						buttonRef: e => this.switchModeBtn = e,
						onClick: () => j(Y.h.RICH_TEXT, P, b),
						isConverting: this.props.isConverting
					}) : r.a.createElement("div", null, r.a.createElement(ee, {
						innerRef: e => this.switchModeBtn = e,
						onClick: () => j(Y.h.RICH_TEXT, P, b)
					}, "Switch to Fancy Pants Editor", this.props.isConverting && r.a.createElement(te, {
						sizePx: 12
					})))), r.a.createElement(de, {
						onClick: this.props.helpModalToggled
					})))), w && Object(f.c)(C), e === D && r.a.createElement(p.a, {
						actionText: s.fbt._("Discard", null, {
							hk: "1kJ5PR"
						}),
						cancelActionText: s.fbt._("keep", null, {
							hk: "J0ER1"
						}),
						modalText: T,
						onConfirm: () => this.cancelForm(),
						toggleModal: n,
						trackClick: () => {}
					}), e === h.b && r.a.createElement(h.a, null), e === d.q && r.a.createElement(m.a, {
						onSubmit: this.onSubmit,
						modalSeen: v,
						withOverlay: !0
					}), r.a.createElement(u.a, {
						editKey: b,
						hasValue: !!P
					}))
				}
			}
			t.b = he(be)
		},
		"./src/reddit/components/CommentCreation/NavigationModule/index.ts": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				i = n("./node_modules/react-router/esm/react-router.js");
			let a = null;
			class c extends r.a.PureComponent {
				constructor() {
					super(...arguments), this.unblock = e => {
						c.blockers.delete(e), c.blockers.size || (a && a(), a = null, window.removeEventListener("beforeunload", c.navigationBlocker))
					}
				}
				componentDidUpdate(e) {
					!e.hasValue && this.props.hasValue ? this.block(this.props.editKey) : e.hasValue && !this.props.hasValue && this.unblock(this.props.editKey)
				}
				componentWillUnmount() {
					this.unblock(this.props.editKey)
				}
				componentDidMount() {
					this.props.hasValue && this.block(this.props.editKey)
				}
				block(e) {
					c.blockers.add(e), a || (window.addEventListener("beforeunload", c.navigationBlocker), a = this.props.history.block(() => {
						const e = this.props.isPostEdit ? s.fbt._("You have a post edit in progress, are you sure you want to discard it?", null, {
							hk: "4u5L7p"
						}) : s.fbt._("You have a comment in progress, are you sure you want to discard it?", null, {
							hk: "rgscd"
						});
						return window.confirm(e) ? void 0 : s.fbt._("Are you sure you want to leave?", null, {
							hk: "1Ua5kc"
						})
					}))
				}
				render() {
					return null
				}
			}
			c.blockers = new Set, c.navigationBlocker = e => {
				const t = "Are you sure you want to leave?";
				return e.returnValue = t, t
			}, t.a = Object(i.i)(c)
		},
		"./src/reddit/components/CommentCreation/ToolbarSelector.m.less": function(e, t, n) {
			e.exports = {
				Container: "_1XC-wMQsKPqfaPcfWQCZdW",
				container: "_1XC-wMQsKPqfaPcfWQCZdW"
			}
		},
		"./src/reddit/components/CommentCreation/ToxicityWarningModal.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/uuid/v4.js"),
				a = n.n(i),
				c = n("./src/higherOrderComponents/asModal/index.tsx"),
				d = n("./src/reddit/actions/comment/authoring.ts"),
				l = n("./src/reddit/actions/modal.ts"),
				u = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				m = n("./src/reddit/components/TrackingHelper/index.tsx"),
				p = n("./src/reddit/controls/TextButton/index.tsx"),
				h = n("./src/reddit/constants/tracking.ts"),
				b = n("./src/reddit/selectors/telemetry.ts");
			const f = e => ({
					source: "toxicity_modal",
					...b.defaults(e),
					screen: b.screen(e),
					subreddit: b.subreddit(e)
				}),
				g = e => t => ({
					action: h.c.VIEW,
					noun: "modal",
					correlationId: e,
					...f(t)
				}),
				C = e => t => ({
					action: h.c.CLICK,
					noun: "submit",
					correlationId: e,
					...f(t)
				}),
				x = e => t => ({
					action: h.c.CLICK,
					noun: "edit",
					correlationId: e,
					...f(t)
				}),
				E = e => t => ({
					action: h.c.CLICK,
					noun: "close",
					correlationId: e,
					...f(t)
				});
			var v = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx");
			const {
				fbt: _
			} = n("./node_modules/fbt/lib/FbtPublic.js"), O = Object(r.b)(null, (e, t) => ({
				closeModal: () => {
					e(Object(l.g)(d.q))
				},
				continue: () => {
					t.onSubmit()
				}
			}));
			class y extends o.a.Component {
				constructor(e) {
					super(e), this.state = {
						correlationId: a()()
					}
				}
				componentDidMount() {
					this.props.modalSeen(), this.props.sendEvent(g(this.state.correlationId))
				}
				render() {
					return o.a.createElement(u.d, null, o.a.createElement(u.h, null, o.a.createElement(v.a, null, o.a.createElement(u.p, null, _._("Are you sure you want to post that?", null, {
						hk: "4yXqtu"
					})), o.a.createElement(p.a, {
						onClick: () => {
							this.props.sendEvent(E(this.state.correlationId)), this.props.closeModal()
						}
					}, o.a.createElement(u.b, null)))), o.a.createElement(u.k, null, o.a.createElement(u.o, null, _._("A reminder from the mods: Please follow community rules when commenting.", null, {
						hk: "Hdi9f"
					}))), o.a.createElement(u.f, null, o.a.createElement(u.a, {
						onClick: () => {
							this.props.sendEvent(x(this.state.correlationId)), this.props.closeModal()
						},
						"data-redditstyle": !0
					}, _._("Go back and edit", null, {
						hk: "3nGNI7"
					})), o.a.createElement(u.q, {
						onClick: () => {
							this.props.sendEvent(C(this.state.correlationId)), this.props.continue()
						},
						"data-redditstyle": !0
					}, _._("Comment", null, {
						hk: "1leYg7"
					}))))
				}
			}
			t.a = Object(c.a)(O(Object(m.c)(y)))
		},
		"./src/reddit/components/CommentCreation/getCancelModalId.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			const s = e => `Comment-cancelModal__${e}`
		},
		"./src/reddit/components/ConfirmUserActionModal/index.m.less": function(e, t, n) {
			e.exports = {
				buttonWidth: "ogOEj4x-0BpDZWeccJwxx",
				ModalText: "_2YxEi97B6Nm7NCgLG6pCud",
				modalText: "_2YxEi97B6Nm7NCgLG6pCud"
			}
		},
		"./src/reddit/components/ConfirmUserActionModal/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				i = n("./src/higherOrderComponents/asModal/index.tsx"),
				a = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				c = n("./src/reddit/controls/TextButton/index.tsx"),
				d = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				l = n("./src/reddit/components/ConfirmUserActionModal/index.m.less"),
				u = n.n(l);
			const m = e => e.preventDefault();
			t.a = Object(i.a)(e => r.a.createElement(a.d, null, r.a.createElement(a.h, null, r.a.createElement(d.a, null, r.a.createElement(a.p, null, e.headerText || s.fbt._("Confirm", null, {
				hk: "2zlvKa"
			})), r.a.createElement(c.a, {
				onClick: () => {
					e.onClose && e.onClose(), e.toggleModal && e.toggleModal()
				}
			}, r.a.createElement(a.b, null)))), r.a.createElement(a.k, null, r.a.createElement(a.o, {
				className: u.a.ModalText
			}, e.modalText)), r.a.createElement(a.f, null, !e.hideCancelButton && r.a.createElement(a.a, {
				className: u.a.buttonWidth,
				onMouseDown: m,
				onClick: () => {
					e.onCancel && e.onCancel(), e.toggleModal && e.toggleModal()
				},
				"data-redditstyle": !e.disableRedditStyle
			}, e.cancelActionText || s.fbt._("Cancel", null, {
				hk: "2TSLl5"
			})), r.a.createElement(a.t, {
				className: u.a.buttonWidth,
				onMouseDown: m,
				onClick: t => {
					e.onConfirm(), e.toggleModal && e.toggleModal(), e.trackClick && e.trackClick()
				},
				"data-redditstyle": !e.disableRedditStyle
			}, e.actionText))))
		},
		"./src/reddit/components/ContentTooltip/index.m.less": function(e, t, n) {
			e.exports = {
				StyledTooltipContainer: "_2uSuNRa3OeptFDJCKQ3vU6",
				styledTooltipContainer: "_2uSuNRa3OeptFDJCKQ3vU6",
				fadeIn: "_2bkYZH_kJx5pIHW0Ts5P6e",
				caretOnBottom: "_1rF-A55THyDL-rQ9ZUDQ4_",
				caretOnTop: "_1MHCyMQAMeqRqf5DPWWeq3",
				caretOnLeft: "nVD-oexLbZI_4QjhrkLFz",
				caretOnRight: "KRVDnoE1RIC5qyqQLXxGG"
			}
		},
		"./src/reddit/components/ContentTooltip/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/higherOrderComponents/addOverlayEvents.tsx"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				c = n("./src/higherOrderComponents/asTooltip.tsx"),
				d = n("./src/lib/classNames/index.ts"),
				l = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				u = n("./src/lib/fastdom/index.ts"),
				m = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				p = n("./src/reddit/selectors/tooltip.ts"),
				h = n("./src/reddit/components/ContentTooltip/index.m.less"),
				b = n.n(h);

			function f() {
				return (f = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const g = {
					height: 200,
					width: 200
				},
				C = e => {
					switch (e) {
						case "top":
							return "bottom";
						case "right":
							return "left";
						case "left":
							return "right";
						case "bottom":
						default:
							return "top"
					}
				},
				x = Object(l.a)(e => {
					const {
						children: t,
						className: n,
						style: s,
						caretPosition: o,
						caretColor: i,
						onClick: a,
						...c
					} = e;
					return r.a.createElement("div", f({
						onClick: a,
						className: Object(d.a)(n, b.a.StyledTooltipContainer, {
							[b.a.caretOnTop]: "top" === o,
							[b.a.caretOnLeft]: "left" === o,
							[b.a.caretOnRight]: "right" === o,
							[b.a.caretOnBottom]: "bottom" === o
						}),
						style: {
							...s,
							"--contentTooltip-caretColor": i && i[o] ? i[o] : Object(m.a)(e).body
						}
					}, c), t)
				}),
				E = Object(a.c)({
					isOpen: (e, {
						tooltipId: t
					}) => Object(p.b)(t)(e)
				}),
				v = Object(c.a)(x, [s.a.Click, s.a.Keydown]),
				_ = Object(i.b)(E);
			class O extends r.a.Component {
				constructor(e) {
					super(e), this.checkAndSetPosition = () => {
						const {
							tooltipId: e,
							tooltipSizeEstimate: t = g
						} = this.props;
						u.a.read(() => {
							const n = document.getElementById(e);
							if (!n) return;
							const s = n.getBoundingClientRect();
							if (!("undefined" != typeof window)) return void this.setState({
								position: this.props.defaultTooltipPosition
							});
							let o = !0;
							switch (this.props.defaultTooltipPosition) {
								case "bottom":
									o = window.innerHeight - s.bottom > t.height;
									break;
								case "left":
									o = s.left > t.width;
									break;
								case "right":
									o = s.right <= window.innerWidth - t.width;
									break;
								case "top":
								default:
									o = s.top > t.height
							}
							this.setState({
								position: o ? this.props.defaultTooltipPosition : C(this.props.defaultTooltipPosition)
							})
						})
					}, this.state = {
						position: null
					}
				}
				componentDidUpdate(e) {
					!e.isOpen && this.props.isOpen && this.checkAndSetPosition(), e.isOpen && !this.props.isOpen && this.setState({
						position: null
					})
				}
				getPositions(e) {
					switch (e || this.props.defaultTooltipPosition) {
						case "bottom":
							return {
								tooltipPosition: ["center", "top"], targetPosition: ["center", "bottom"], caretPosition: "top"
							};
						case "left":
							return {
								tooltipPosition: ["right", "center"], targetPosition: ["left", "center"], caretPosition: "right"
							};
						case "right":
							return {
								tooltipPosition: ["left", "center"], targetPosition: ["right", "center"], caretPosition: "left"
							};
						case "top":
						default:
							return {
								tooltipPosition: ["center", "bottom"], targetPosition: ["center", "top"], caretPosition: "bottom"
							}
					}
				}
				render() {
					const {
						position: e
					} = this.state, {
						targetPosition: t,
						tooltipPosition: n,
						caretPosition: s
					} = this.getPositions(e);
					return r.a.createElement(v, f({}, this.props, {
						caretPosition: s,
						targetPosition: t,
						tooltipPosition: n
					}))
				}
			}
			t.a = _(O)
		},
		"./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/index.m.less": function(e, t, n) {
			e.exports = {
				RequestButton: "_3K2ydhts9_ES4s9UpcXqBi",
				requestButton: "_3K2ydhts9_ES4s9UpcXqBi"
			}
		},
		"./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/actions/modal.ts"),
				d = n("./src/reddit/components/TrackingHelper/index.tsx"),
				l = n("./src/reddit/constants/modals.ts"),
				u = n("./src/reddit/controls/Button/index.tsx"),
				m = n("./src/reddit/helpers/trackers/privateCommunity.ts"),
				p = n("./src/reddit/helpers/trackers/restrictedCommunity.ts"),
				h = n("./src/reddit/models/SubredditRestrictions/index.ts"),
				b = n("./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/index.m.less"),
				f = n.n(b);
			const g = () => ({
				[h.b.Comment]: s.fbt._("Request to Comment", null, {
					hk: "3KRhw5"
				}),
				[h.b.IdCard]: s.fbt._("Request to Post", null, {
					hk: "2xsrGd"
				}),
				[h.b.PostSubmission]: s.fbt._("Request to Post", null, {
					hk: "2xsrGd"
				}),
				[h.b.ContentGate]: s.fbt._("Request to Join", null, {
					hk: "1nK8Vv"
				})
			});
			class C extends r.a.Component {
				constructor() {
					super(...arguments), this.onRequest = () => {
						const {
							sendEvent: e,
							eventSource: t,
							openRequestToJoinSubredditModal: n,
							openContributorRequestModal: s
						} = this.props;
						t === h.b.ContentGate ? (e(Object(m.a)(t)), n()) : (e(Object(p.a)(t)), s())
					}
				}
				render() {
					const {
						eventSource: e,
						smallButton: t,
						className: n,
						isContributorRequestPending: o
					} = this.props;
					return r.a.createElement(u.q, {
						priority: e === h.b.ContentGate ? u.b.Secondary : u.b.Primary,
						className: Object(a.a)(t ? null : f.a.RequestButton, n),
						onClick: this.onRequest,
						size: t ? u.c.S : u.c.M,
						disabled: o
					}, o ? s.fbt._("Request Pending", null, {
						hk: "hVswi"
					}) : g()[e])
				}
			}
			t.default = Object(i.b)(null, e => ({
				openContributorRequestModal: () => e(Object(c.i)(l.a.CONTRIBUTOR_REQUEST)),
				openRequestToJoinSubredditModal: () => e(Object(c.i)(l.a.CONTRIBUTOR_REQUEST_PRIVATE_SUREDDIT))
			}))(Object(d.c)(C))
		},
		"./src/reddit/components/Econ/Prediction/EducationMessage/constants.ts": function(e, t, n) {
			"use strict";
			var s;
			n.d(t, "a", (function() {
					return s
				})),
				function(e) {
					e.nonDismissable = "predictionEducationNonDismissable", e.creation = "predictionEducationCreation", e.feature = "predictionEducationFeature"
				}(s || (s = {}))
		},
		"./src/reddit/components/Econ/Prediction/EducationMessage/index.m.less": function(e, t, n) {
			e.exports = {
				educationMessage: "_26GJLzgfE0wgM-CnXwauPN",
				titleRow: "vZoXjCnTHVyUauLNVGVfk",
				header: "_27PnGSqq2_i7iJirZpjlvp",
				title: "_3tXfrHlKYl3OfwzJeHj2TF",
				newBadge: "_2xWQI6x-vSCyMVG0rWrUv",
				closeButton: "_2fuSvPWThjhQeduKzDNNsl"
			}
		},
		"./src/reddit/components/Econ/Prediction/EducationMessage/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return p
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/hooks/useLocalStorage.ts"),
				i = n("./src/reddit/controls/Button/index.tsx"),
				a = n("./src/reddit/icons/svgs/Close/index.tsx"),
				c = n("./src/reddit/components/Econ/Prediction/EducationMessage/constants.ts"),
				d = n("./src/reddit/components/Econ/Prediction/EducationMessage/index.m.less"),
				l = n.n(d);
			const {
				fbt: u
			} = n("./node_modules/fbt/lib/FbtPublic.js"), m = ({
				isFilled: e,
				...t
			}) => o.a.createElement(a.a, t);

			function p({
				message: e,
				newBadge: t,
				onClose: n,
				onView: a,
				storageKey: d = c.a.nonDismissable,
				title: p
			}) {
				const h = d !== c.a.nonDismissable,
					[b, f] = Object(r.a)(d, !h || !1),
					[g, C] = Object(s.useState)(!1);
				return Object(s.useEffect)(() => {
					b || g || !a || (a(), C(!0))
				}, [b, g, a]), h && b ? null : o.a.createElement("div", {
					className: l.a.educationMessage
				}, o.a.createElement("div", {
					className: l.a.titleRow
				}, o.a.createElement("div", {
					className: l.a.header
				}, o.a.createElement("h3", {
					className: l.a.title
				}, p), t && o.a.createElement("div", {
					className: l.a.newBadge
				}, u._("New", null, {
					hk: "2N0EBb"
				}))), h && o.a.createElement(i.q, {
					"aria-label": u._("Close", null, {
						hk: "2UjnU"
					}),
					className: l.a.closeButton,
					Icon: m,
					onClick: () => {
						f(!0), n && n()
					},
					priority: i.b.Plain
				})), e)
			}
		},
		"./src/reddit/components/Econ/Prediction/NewBadge/index.m.less": function(e, t, n) {
			e.exports = {
				newBadge: "_25Zpk4lWyvwk-rK1hZ0N8m"
			}
		},
		"./src/reddit/components/Econ/Prediction/PredictionFeatureEducationMessage/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				i = n("./src/reddit/components/Econ/Prediction/EducationMessage/index.tsx");

			function a({
				isTokens: e,
				onClose: t,
				onView: n,
				storageKey: o
			}) {
				const a = s.fbt._("Predictions", null, {
						hk: "3X6mhV"
					}),
					c = e ? s.fbt._("Redditors add tokens to their answers, then everyone who gets it right splits the winnings", null, {
						hk: "FDY0l"
					}) : s.fbt._("Redditors add coins to their answers, then everyone who gets it right splits the winnings", null, {
						hk: "4eP2MR"
					});
				return r.a.createElement("div", null, r.a.createElement(i.a, {
					onClose: t,
					onView: n,
					title: a,
					newBadge: !0,
					message: c,
					storageKey: o
				}))
			}
		},
		"./src/reddit/components/Emoji/index.m.less": function(e, t, n) {
			e.exports = {
				EmojiDisplay: "_2Gt13AX94UlLxkluAMsZqP",
				emojiDisplay: "_2Gt13AX94UlLxkluAMsZqP"
			}
		},
		"./src/reddit/components/Flair/index.m.less": function(e, t, n) {
			e.exports = {
				FlairEmojiDisplay: "_1QwShihKKlyRXyQSlqYaWW",
				flairEmojiDisplay: "_1QwShihKKlyRXyQSlqYaWW",
				FlairWrapper: "_2X6EB3ZhEeXCh1eIVA64XM",
				flairWrapper: "_2X6EB3ZhEeXCh1eIVA64XM",
				TextFlair: "_1jNPl3YUk6zbpLWdjaJT1r",
				textFlair: "_1jNPl3YUk6zbpLWdjaJT1r",
				transparentBackgroundColor: "_39BEcWjOlYi1QGcJil6-yl",
				RichTextFlair: "_2hSecp_zkPm_s5ddV2htoj",
				richTextFlair: "_2hSecp_zkPm_s5ddV2htoj",
				MetaFlair: "_1wzhGvvafQFOWAyA157okr",
				metaFlair: "_1wzhGvvafQFOWAyA157okr",
				CloseButton: "_3BPVpMSn5b1vb1yTQuqCRH",
				closeButton: "_3BPVpMSn5b1vb1yTQuqCRH",
				CloseIcon: "_2cvySYWkqJfynvXFOpNc5L",
				closeIcon: "_2cvySYWkqJfynvXFOpNc5L",
				small: "aJrgrewN9C8x1Fusdx4hh",
				large: "_1wj6zoMi6hRP5YhJ8nXWXE",
				flairVariant: "_2VqfzH0dZ9dIl3XWNxs42y"
			}
		},
		"./src/reddit/components/Flair/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return U
			})), n.d(t, "a", (function() {
				return V
			})), n.d(t, "b", (function() {
				return q
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/lodash/pick.js"),
				r = n.n(o),
				i = n("./node_modules/polished/dist/polished.es.js"),
				a = n("./node_modules/react/index.js"),
				c = n.n(a),
				d = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				l = n("./src/lib/addQueryParams/index.ts"),
				u = n("./src/lib/classNames/index.ts"),
				m = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				p = n("./src/lib/lessComponent.tsx"),
				h = n("./src/reddit/components/Emoji/index.m.less"),
				b = n.n(h);

			function f() {
				return (f = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const g = p.a.wrapped(({
				backgroundImage: e,
				style: t,
				...n
			}) => c.a.createElement("div", f({
				style: {
					...t || {},
					backgroundImage: `url('${e}')`
				}
			}, n)), "EmojiDisplay", b.a);
			var C = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				x = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				E = n("./src/reddit/constants/colors.ts"),
				v = n("./src/reddit/constants/parameters.ts"),
				_ = n("./src/reddit/controls/InternalLink/index.tsx"),
				O = n("./src/reddit/helpers/styles/smartTextColor.ts"),
				y = n("./src/reddit/icons/svgs/Close/index.tsx"),
				k = n("./src/reddit/models/Flair/index.ts"),
				j = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				S = n("./src/reddit/components/Flair/index.m.less"),
				I = n.n(S);

			function T() {
				return (T = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const w = Object(x.a)(C.b),
				P = p.a.div("FlairWrapper", I.a),
				N = p.a.wrapped(d.a, "CloseButton", I.a),
				M = p.a.wrapped(Object(m.a)(({
					forceSmallEmojis: e,
					theme: t,
					...n
				}) => {
					const s = t;
					return c.a.createElement(g, T({
						style: {
							...D(!!e, s) || {}
						}
					}, n))
				}), "FlairEmojiDisplay", I.a),
				D = (e, t) => {
					if (!e && !!t.subredditContext.emojiHeight && !!t.subredditContext.emojiWidth) return {
						height: `${t.subredditContext.emojiHeight}px`,
						width: `${t.subredditContext.emojiWidth}px`
					}
				},
				L = (e, t) => {
					const n = t ? `/r/${t}/search` : "/search",
						s = `${t?"flair_name":"flair"}:"${e}"`;
					return Object(l.a)(n, {
						[v.p]: s,
						[v.s]: t ? "1" : ""
					})
				},
				R = e => e.isFlairFilter ? c.a.createElement(_.a, {
					onMouseDown: e.onMouseDown,
					to: e.to || ""
				}, e.flair) : e.onClick ? c.a.createElement(_.a, {
					onClick: () => e.onClick(e.searchableTerm),
					to: L(e.searchableTerm, e.subredditName)
				}, e.flair) : e.flair;
			class F extends c.a.Component {
				constructor() {
					super(...arguments), this.tooltipTargetElement = null, this.state = {
						isTooltipOpen: !1
					}, this.setTooltipTargetRef = e => this.tooltipTargetElement = e, this.onShowTooltip = () => {
						this.setState({
							isTooltipOpen: !0
						})
					}, this.onHideTooltip = () => {
						this.setState({
							isTooltipOpen: !1
						})
					}
				}
				render() {
					const e = c.a.createElement("span", {
						className: Object(u.a)(this.props.className, {
							[I.a.transparentBackgroundColor]: "transparent" === this.props.backgroundColor
						}),
						onMouseEnter: this.props.tooltip ? this.onShowTooltip : void 0,
						onMouseLeave: this.props.tooltip ? this.onHideTooltip : void 0,
						ref: this.setTooltipTargetRef,
						style: {
							backgroundColor: this.props.backgroundColor || Object(j.a)(this.props).flair,
							color: `${U(this.props)}`
						}
					}, this.props.text, this.props.isSelected && c.a.createElement(N, {
						to: "./",
						onClick: this.props.onCloseClick
					}, c.a.createElement(y.a, {
						className: I.a.CloseIcon,
						style: {
							fill: this.props.backgroundColor || Object(j.a)(this.props).flair
						}
					})), !!this.props.tooltip && c.a.createElement(w, {
						text: this.props.tooltip,
						isOpen: this.state.isTooltipOpen,
						tooltipTarget: this.tooltipTargetElement,
						targetPosition: ["center", "top"],
						tooltipPosition: ["center", "bottom"]
					}));
					return c.a.createElement(R, {
						flair: e,
						isFlairFilter: this.props.isFlairFilter,
						onClick: this.props.onClick,
						onMouseDown: this.props.onMouseDown,
						searchableTerm: this.props.text,
						subredditName: this.props.subredditName,
						to: this.props.to
					})
				}
			}
			const A = Object(m.a)(F),
				B = Object(m.a)(e => {
					let t = "",
						n = !1;
					const s = e.richtext.map((s, o) => {
						if (s.e === k.c.Emoji) {
							const r = s;
							return t += r.a, n = !0, c.a.createElement(M, {
								forceSmallEmojis: e.forceSmallEmojis,
								backgroundImage: r.u,
								key: o,
								title: r.a
							})
						} {
							const e = s;
							return t += e.t, c.a.createElement("span", {
								key: o
							}, e.t)
						}
					});
					let o;
					n && !e.forceSmallEmojis && e.theme && e.theme.subredditContext.emojiWidth && e.theme.subredditContext.emojiHeight && e.theme.subredditContext.emojiHeight > 16 && (o = {
						marginTop: `-${e.theme.subredditContext.emojiHeight-16}px`
					});
					const r = c.a.createElement(P, {
						className: Object(u.a)(e.className, {
							[I.a.transparentBackgroundColor]: "transparent" === e.backgroundColor
						}),
						style: {
							...o,
							backgroundColor: e.backgroundColor || Object(j.a)(e).flair,
							color: `${U(e)}`
						}
					}, s, e.isSelected && c.a.createElement(N, {
						to: "./",
						onClick: e.onCloseClick
					}, c.a.createElement(y.a, {
						className: I.a.CloseIcon,
						style: {
							fill: e.backgroundColor || Object(j.a)(e).flair
						}
					})));
					return c.a.createElement(R, {
						flair: r,
						isFlairFilter: e.isFlairFilter,
						onClick: e.onClick ? () => {
							e.onClick(t)
						} : void 0,
						onMouseDown: e.onMouseDown,
						searchableTerm: t,
						subredditName: e.subredditName,
						to: e.to
					})
				}),
				U = e => !e.textColor || e.textColor && !e.backgroundColor ? Object(j.a)(e).postFlairText : "transparent" === e.backgroundColor ? Object(O.a)(Object(j.a)(e).post, E.b.black, E.b.white) : e.textColor === k.e.Dark ? E.b.black : E.b.white,
				V = p.a.wrapped(A, "TextFlair", I.a),
				W = p.a.wrapped(B, "RichTextFlair", I.a),
				G = e => {
					switch (e.type) {
						case "spoiler":
							return "#A4A7A8";
						case "nsfw":
							return "#FF585B";
						default:
							return Object(i.j)(.1, Object(j.a)(r()(e, "theme", "redditStyle", "data-redditstyle")).button)
					}
				},
				H = p.a.wrapped(e => {
					const t = G(e),
						n = c.a.createElement("span", {
							className: e.className,
							style: {
								border: `1px solid ${t}`,
								color: t
							}
						}, e.text);
					return c.a.createElement(R, {
						flair: n,
						searchableTerm: e.text
					})
				}, "MetaFlair", I.a);

			function q(e) {
				const {
					className: t,
					disabled: n = !1,
					flair: o,
					isFlairFilter: r,
					isSelected: i,
					onClick: a,
					onCloseClick: d,
					onMouseDown: l,
					subredditName: m,
					usesCommunityStyles: p,
					forceSmallEmojis: h,
					to: b
				} = e, f = Object(u.a)({
					[I.a.flairVariant]: r,
					[I.a.small]: r && !e.large,
					[I.a.large]: r && e.large
				}, t);
				switch (o.type) {
					case k.f.Richtext:
						return n || !o.richtext ? null : c.a.createElement(W, {
							backgroundColor: o.backgroundColor,
							className: f,
							forceSmallEmojis: h,
							isFlairFilter: r,
							isSelected: i,
							onClick: a,
							onCloseClick: d,
							onMouseDown: l,
							redditStyle: !p,
							richtext: o.richtext,
							subredditName: m,
							textColor: o.textColor,
							to: b
						});
					case k.f.Text:
						return n || !o.text ? null : c.a.createElement(V, {
							backgroundColor: o.backgroundColor,
							className: f,
							isFlairFilter: r,
							isSelected: i,
							onClick: a,
							onCloseClick: d,
							onMouseDown: l,
							subredditName: m,
							text: o.text,
							textColor: o.textColor,
							redditStyle: !p,
							to: b
						});
					case k.f.Meta:
						return c.a.createElement(V, {
							backgroundColor: o.backgroundColor,
							className: t,
							isFlairFilter: r,
							subredditName: m,
							text: o.text,
							textColor: o.textColor,
							redditStyle: !p,
							to: b
						});
					case k.f.Nsfw:
					case k.f.Spoiler:
						return c.a.createElement(H, {
							className: t,
							text: o.text,
							type: o.type
						});
					case k.f.Quarantined:
						return null;
					case k.f.Oc:
						return c.a.createElement(V, {
							backgroundColor: E.b.alienblue,
							text: o.text,
							textColor: k.e.Light,
							tooltip: s.fbt._("This post is marked as Original Content [OC]", null, {
								hk: "h7je6"
							})
						});
					default:
						return o.text ? c.a.createElement(V, {
							backgroundColor: o.backgroundColor,
							className: f,
							isFlairFilter: r,
							onClick: a,
							onCloseClick: d,
							onMouseDown: l,
							subredditName: m,
							text: o.text,
							redditStyle: !p,
							to: b
						}) : null
				}
			}
		},
		"./src/reddit/components/FlairList/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/lodash/noop.js"),
				o = n.n(s),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				d = n("./src/reddit/components/Flair/index.tsx"),
				l = n("./src/reddit/helpers/flair.ts"),
				u = n("./src/reddit/models/Flair/index.ts"),
				m = n("./src/reddit/selectors/user.ts");
			const p = Object(c.c)({
					labelNSFW: m.S
				}),
				h = Object(a.b)(p),
				b = e => {
					if (e.type === u.f.Richtext && e.richtext) {
						const t = e.richtext.map(e => e.e === u.c.Emoji ? e.u : e.t).join("-");
						return `${e.type}--${t}`
					}
					return `${e.type}--${e.text}`
				};
			t.a = h(({
				className: e,
				isFlairFilter: t,
				onClick: n,
				onMouseDown: s,
				disabled: r = !1,
				flair: a,
				labelNSFW: c,
				subredditName: m
			}) => {
				const p = !!a.find(e => e.type === u.f.Richtext),
					h = a.map(e => {
						if (e.type === u.f.Text && p) return null;
						if (!c && e.type === u.f.Nsfw) return null;
						const a = Object(l.j)(e),
							h = `/r/${m}/`,
							f = s ? () => s(e) : o.a;
						return i.a.createElement(d.b, {
							isFlairFilter: t,
							key: b(e),
							onClick: n,
							onMouseDown: f,
							disabled: r,
							flair: e,
							forceSmallEmojis: !0,
							subredditName: m,
							to: Object(l.e)(h, a)
						})
					});
				return i.a.createElement("div", {
					className: e
				}, h)
			})
		},
		"./src/reddit/components/FlairPickerTitle/index.m.less": function(e, t, n) {
			e.exports = {
				modalHeader: "_26bOTAKvGixX5tMC3vGfTv"
			}
		},
		"./src/reddit/components/FlairPickerTitle/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/lodash/noop.js"),
				o = n.n(s),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				a = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				c = n("./src/reddit/controls/TextButton/index.tsx"),
				d = n("./src/reddit/components/FlairPickerTitle/index.m.less"),
				l = n.n(d);
			t.a = e => i.a.createElement(a.h, {
				className: l.a.modalHeader
			}, i.a.createElement(a.p, null, e.title), i.a.createElement(c.a, {
				onClick: e.onClosePressed || o.a
			}, i.a.createElement(a.b, null)))
		},
		"./src/reddit/components/FlairPickerWrapper/index.m.less": function(e, t, n) {
			e.exports = {
				Wrapper: "_3nRJIwLuth2pKYrXnr2jPN",
				wrapper: "_3nRJIwLuth2pKYrXnr2jPN"
			}
		},
		"./src/reddit/components/FlairPickerWrapper/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/lessComponent.tsx"),
				o = n("./src/reddit/components/FlairPickerWrapper/index.m.less"),
				r = n.n(o);
			const i = s.a.div("Wrapper", r.a);
			t.a = i
		},
		"./src/reddit/components/FlairPreview/index.m.less": function(e, t, n) {
			e.exports = {
				Placeholder: "_30zvTaAcvBFmwfelq6Bvwg",
				placeholder: "_30zvTaAcvBFmwfelq6Bvwg",
				SelectedFlair: "BzonfS85jX2JTiu_i0Jyd",
				selectedFlair: "BzonfS85jX2JTiu_i0Jyd",
				FlairComponent: "vynkb69RQyUY-PA6bCaW0",
				flairComponent: "vynkb69RQyUY-PA6bCaW0"
			}
		},
		"./src/reddit/components/FlairPreview/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				i = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/components/Flair/index.tsx"),
				c = n("./src/reddit/components/FlairPreview/index.m.less"),
				d = n.n(c);
			const l = i.a.span("Placeholder", d.a),
				u = i.a.div("SelectedFlair", d.a),
				m = i.a.wrapped(a.b, "FlairComponent", d.a);
			t.a = e => e.flair ? r.a.createElement(u, null, r.a.createElement(l, null, s.fbt._("{placeholder}", [s.fbt._param("placeholder", e.placeholderText)], {
				hk: "4G6VRy"
			})), r.a.createElement(m, {
				flair: e.flair,
				forceSmallEmojis: !0
			})) : r.a.createElement(u, null, s.fbt._("No flair selected", null, {
				hk: "1XPXbv"
			}))
		},
		"./src/reddit/components/FlairSearch/FlairEdit/helper.m.less": function(e, t, n) {
			e.exports = {
				FlairEditStub: "Z7x0t_45z9vZGN2zw6US6",
				flairEditStub: "Z7x0t_45z9vZGN2zw6US6",
				isCompact: "_3YjPWOd9tK9O_DN50RI_FN"
			}
		},
		"./src/reddit/components/FlairSearch/FlairEdit/helper.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return h
			}));
			var s = n("./node_modules/lodash/once.js"),
				o = n.n(s),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				a = n("./src/higherOrderComponents/makeAsync.tsx"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/lessComponent.tsx"),
				l = n("./src/lib/loadWithRetries/index.ts"),
				u = n("./src/reddit/components/FlairSearch/FlairEdit/helper.m.less"),
				m = n.n(u);
			const p = d.a.wrapped(e => i.a.createElement("div", {
					className: Object(c.a)(e.className, {
						[m.a.isCompact]: e.isCompact
					})
				}), "FlairEditStub", m.a),
				h = o()((e = p) => Object(a.a)({
					getComponent: () => Object(l.a)(() => Promise.all([n.e("vendors~Chat~ChatMessageInput~FlairEdit~MembershipPaywallPage~PostCreation~RedesignChat~RichTextEditor"), n.e("FlairEdit")]).then(n.bind(null, "./src/reddit/components/FlairSearch/FlairEdit/index.tsx")).then(e => e.default)),
					ErrorComponent: e,
					LoadingComponent: e
				}))
		},
		"./src/reddit/components/FlairSearch/FlairTemplateList/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1bdAduczElF9-gLoCvHz-p",
				flairComponent: "_2leID3tMN8hpvVd4XhEqTl",
				radioOption: "FJIE5E2gciCA8q3Jzvcyg",
				pencil: "_3H_wwe03-Fkrm6oWGakXI8",
				searchBoxWrapper: "_18cuM8Uu7RcIFu1bCT0r4t",
				searchIcon: "_2bECVWL_WJ9RGBx7-RnzfO",
				searchInput: "_1nQbRaoAvb6Uy0oI-OfDtZ"
			}
		},
		"./src/reddit/components/FlairSearch/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_2AKP6aCod0Z6TuXXfc1ZqL",
				buttonsRow: "_3w7b_fPwMuVD17J7epjTXi",
				clearButton: "_3WykjMvdVO5xibqd5xlfTC",
				flairEditSection: "SVd7IxchgiWetdYbftTHx",
				editLabel: "KTa3kg9lzGPUeLuhAHMT_",
				restrictionHintText: "_1fV9kJfKnED9qQ2AF8f3iT"
			}
		},
		"./src/reddit/components/FlairSearch/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/memoizeByReference/index.ts"),
				l = n("./src/reddit/featureFlags/index.ts"),
				u = n("./src/reddit/helpers/flair.ts"),
				m = n("./src/reddit/selectors/moderatorPermissions.ts"),
				p = n("./src/reddit/components/FlairSearch/FlairEdit/helper.tsx"),
				h = n("./src/reddit/components/Flair/index.tsx"),
				b = n("./src/reddit/controls/RadioInput/index.tsx"),
				f = n("./src/reddit/controls/RadioInput/RadioOption/index.tsx"),
				g = n("./src/reddit/icons/svgs/Pencil/index.tsx"),
				C = n("./src/reddit/icons/svgs/Search/index.tsx"),
				x = n("./src/reddit/components/FlairSearch/FlairTemplateList/index.m.less"),
				E = n.n(x);
			class v extends r.a.Component {
				constructor() {
					super(...arguments), this.state = {
						searchQuery: ""
					}, this.onSearchChange = e => {
						this.setState({
							searchQuery: e.target.value
						})
					}
				}
				render() {
					const {
						templates: e,
						templateIds: t,
						selectedTemplateId: n
					} = this.props, {
						searchQuery: o
					} = this.state, i = t.map(t => e[t]).filter(e => e.text.toLowerCase().includes(o)), a = !!n && i.some(e => e.id === n);
					return r.a.createElement("div", {
						className: E.a.container
					}, r.a.createElement("div", {
						className: E.a.searchBoxWrapper
					}, r.a.createElement("input", {
						className: E.a.searchInput,
						onChange: this.onSearchChange,
						type: "text",
						placeholder: s.fbt._("Search for flair", null, {
							hk: "jQdqA"
						}),
						value: o
					}), r.a.createElement(C.a, {
						className: E.a.searchIcon
					})), r.a.createElement(b.a, {
						name: "flair_picker",
						onChange: this.props.onChange,
						value: n
					}, i.map((e, t) => {
						const s = Object(u.c)(e),
							o = n === e.id || !a && 0 === t;
						return r.a.createElement(f.a, {
							className: E.a.radioOption,
							key: e.id,
							showButton: !0,
							tabIndex: o ? 0 : -1,
							value: e.id
						}, r.a.createElement(h.b, {
							className: E.a.flairComponent,
							flair: s,
							forceSmallEmojis: !0
						}), e.textEditable && r.a.createElement(g.a, {
							className: E.a.pencil
						}))
					})))
				}
			}
			var _ = n("./src/reddit/components/FlairSearch/index.m.less"),
				O = n.n(_);
			const y = "FlairSearch-EmojiPicker-DropdownId",
				k = Object(d.a)(e => e && Object(u.c)(e)),
				j = Object(a.c)({
					areFlairRestrictionsEnabled: l.d.flairRestrictions,
					isModerator: m.f
				}),
				S = Object(i.b)(j);
			class I extends r.a.Component {
				constructor() {
					super(...arguments), this.onFlairEdit = e => {
						const {
							templates: t
						} = this.props, n = t && e.templateId ? t[e.templateId] : void 0;
						let s = e;
						n && (s = Object(u.d)({
							flair: e,
							template: n,
							ignoreTextAllowance: !0
						})), this.props.onChange(s)
					}, this.onTemplateSelected = e => {
						const {
							templates: t
						} = this.props;
						if (t) {
							const n = t[e],
								s = Object(u.c)(n);
							this.props.onChange(s)
						}
					}
				}
				render() {
					const {
						props: e
					} = this, {
						isModerator: t,
						templates: n,
						templateIds: o,
						subredditId: i
					} = e, a = n && e.flair && e.flair.templateId && n[e.flair.templateId] || void 0, d = Object(p.a)(), l = e.flair || k(a);
					return r.a.createElement("div", {
						className: Object(c.a)(e.className, O.a.container)
					}, n && o && r.a.createElement(v, {
						flairTemplateType: e.flairTemplateType,
						onChange: this.onTemplateSelected,
						selectedTemplateId: a ? a.id : "",
						templateIds: o,
						templates: n
					}), l && a && (t || a.textEditable) ? r.a.createElement("div", {
						className: O.a.flairEditSection
					}, r.a.createElement("div", {
						className: O.a.editLabel
					}, s.fbt._("Edit flair", null, {
						hk: "1APWWu"
					})), e.areFlairRestrictionsEnabled && r.a.createElement("div", {
						className: O.a.restrictionHintText
					}, Object(u.k)(a)), r.a.createElement(d, {
						autofocus: !0,
						emojiPickerId: y,
						flair: l,
						flairTemplate: a,
						flairTemplateType: e.flairTemplateType,
						isFlairModOnly: a.modOnly,
						onChange: this.onFlairEdit,
						subredditId: i
					})) : null)
				}
			}
			t.a = S(I)
		},
		"./src/reddit/components/FlairWrapper/index.m.less": function(e, t, n) {
			e.exports = {
				flairList: "lrzZ8b0L6AzLkQj5Ww7H1",
				flairWrapper: "_2fiIRtMpITeCAzXc4cANKp",
				flairNoWrap: "_2xu1HuBz1Yx6SP10AGVx_I"
			}
		},
		"./src/reddit/components/FlairWrapper/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return O
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/components/CategoryTagList/index.tsx"),
				l = n("./src/reddit/components/FlairList/index.tsx"),
				u = n("./src/reddit/components/SearchResultsContent/searchResultsPageTreatment/searchIgnoreClickContext.ts"),
				m = n("./src/reddit/contexts/PageLayer/index.tsx"),
				p = n("./src/reddit/helpers/correlationIdTracker.ts"),
				h = n("./src/reddit/helpers/flair.ts"),
				b = n("./src/reddit/helpers/trackers/postFlair.ts"),
				f = n("./src/reddit/models/Flair/index.ts"),
				g = n("./src/reddit/selectors/postFlair.ts"),
				C = n("./src/reddit/selectors/posts.ts"),
				x = n("./src/reddit/selectors/subreddit.ts"),
				E = n("./src/reddit/components/FlairWrapper/index.m.less"),
				v = n.n(E);
			const _ = Object(i.b)(() => Object(a.c)({
					flairPosition: (e, {
						pageLayer: t
					}) => Object(m.p)(e, {
						pageLayer: t
					}),
					isPostFlairEnabled: (e, t) => Object(g.c)(e, {
						subredditId: t.post.belongsTo.id
					}),
					postCategories: (e, {
						post: t
					}) => Object(C.u)(e, t),
					subredditName: (e, {
						post: t
					}) => Object(x.T)(e, {
						subredditId: t.belongsTo.id
					}).name
				})),
				O = e => {
					const t = [];
					return e.isOriginalContent && t.push({
						text: s.fbt._("OC", null, {
							hk: "1i721p"
						}),
						type: f.f.Oc
					}), e.isMeta && t.push({
						text: s.fbt._("Poll", null, {
							hk: "1scdU1"
						}),
						type: f.f.Meta
					}), t.push(...e.flair), t
				};
			t.a = _(({
				className: e,
				disableFlair: t,
				flairPosition: n,
				isFlairFilter: s,
				isPostFlairEnabled: o,
				nowrap: i,
				post: a,
				postCategories: m,
				sendEvent: g,
				showCategoryTag: C,
				subredditName: x,
				titleFlair: E
			}) => {
				const _ = Object(u.b)(),
					y = n === f.b.Left,
					k = E || O(a),
					j = [];
				let S = [];
				y ? k.map(e => {
					Object(h.p)(e.type) ? j.push(e) : S.push(e)
				}) : S = k;
				const I = i ? v.a.flairNoWrap : j.length > 0 || S.length > 0 || m && C ? v.a.flairWrapper : null,
					T = e => {
						const t = {
							id: a.belongsTo.id,
							eventType: a.belongsTo.type,
							originElement: "post_flair",
							postFlairName: e
						};
						Object(p.d)(p.a.SearchResults), g && g(Object(b.a)(a.id, t))
					},
					w = e => {
						Object(p.d)(p.a.SearchResults), g && g(Object(b.e)(e, a.id))
					},
					P = !(t || !k || !k.length),
					N = !!(C && m && m.length);
				return P || N ? r.a.createElement("div", {
					className: Object(c.a)(I, e),
					"data-ignore-click": _
				}, P && j && r.a.createElement(l.a, {
					className: v.a.flairList,
					isFlairFilter: s,
					key: "leftFlair",
					onClick: T,
					onMouseDown: w,
					flair: j,
					disabled: !o,
					subredditName: x
				}), P && r.a.createElement(l.a, {
					className: v.a.flairList,
					isFlairFilter: s,
					key: "rightFlair",
					onClick: T,
					onMouseDown: w,
					flair: S,
					disabled: !o,
					subredditName: x
				}), N && r.a.createElement(d.a, {
					inLightboxHeader: i,
					postId: a.id,
					postCategories: m
				})) : null
			})
		},
		"./src/reddit/components/FocusableContent/index.m.less": function(e, t, n) {
			e.exports = {
				FocusableContent: "_3MknXZVbkWU8JL9XGlzASi",
				focusableContent: "_3MknXZVbkWU8JL9XGlzASi",
				isFocused: "_3F2J0fSnCI3ZvF_tBSaV0s",
				noBorder: "_1CpUVAt2tGEwaaBV3nZNJs"
			}
		},
		"./src/reddit/components/FocusableContent/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/components/FocusableContent/index.m.less"),
				c = n.n(a);
			t.a = i.a.wrapped(e => o.a.createElement("div", {
				className: Object(r.a)(e.className, {
					[c.a.isFocused]: e.isFocused,
					[c.a.noBorder]: e.noBorder
				})
			}, e.children), "FocusableContent", c.a)
		},
		"./src/reddit/components/Gold/PowerupEntryTooltip/index.m.less": function(e, t, n) {
			e.exports = {
				contentTooltip: "_1XeLrW3pb3frRYSz9vS8EJ",
				icon: "d27KaHBPtWSrtRSZAh3e1",
				content: "SmrLCKsx-Of2JFg-rZLmQ",
				iconImage: "_1ZEjI8OK6g8UVNGEC8cwA3",
				chevronImage: "_2mIoAykX4OsvfRpXR5Y8jR"
			}
		},
		"./src/reddit/components/Gold/PowerupEntryTooltip/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/reddit/actions/gold/powerups.ts"),
				a = n("./src/reddit/actions/tooltip.ts"),
				c = n("./src/reddit/components/ContentTooltip/index.tsx"),
				d = n("./src/reddit/constants/localStorage.ts"),
				l = n("./src/reddit/helpers/localStorage/index.ts"),
				u = n("./src/reddit/icons/svgs/Chevron/index.tsx"),
				m = n("./src/reddit/icons/svgs/Lock/index.tsx"),
				p = n("./src/reddit/components/Gold/PowerupEntryTooltip/index.m.less"),
				h = n.n(p);
			t.a = e => {
				const t = Object(r.d)(),
					{
						tooltipId: n,
						offsetY: p,
						width: f,
						height: g
					} = e,
					C = Object(s.useMemo)(() => {
						const e = !Object(l.i)(d.a.POWERUPS_TOOLTIP_VISIBILITY_STORE);
						return e && Object(l.ab)(d.a.POWERUPS_TOOLTIP_VISIBILITY_STORE), e
					}, [n]),
					[x, E] = Object(s.useState)(C);
				Object(s.useEffect)(() => {
					const e = x ? Object(a.l)({
						tooltipId: n
					}) : Object(a.k)({
						tooltipId: n
					});
					t(e)
				}, [x, n, t]);
				return o.a.createElement(c.a, {
					style: {
						transform: `translateY(${b(p)})`,
						backgroundColor: "#24A0ED",
						width: b(f),
						height: b(g)
					},
					className: h.a.contentTooltip,
					caretColor: {
						bottom: "#24A0ED",
						top: "#24A0ED"
					},
					tooltipSizeEstimate: {
						height: g,
						width: f
					},
					tooltipId: n,
					defaultTooltipPosition: "top",
					onClick: () => {
						t(Object(i.c)()), E(!1)
					}
				}, o.a.createElement("div", {
					className: h.a.icon
				}, o.a.createElement(m.a, {
					className: h.a.iconImage
				})), o.a.createElement("div", {
					className: h.a.content
				}, e.children), o.a.createElement(u.a, {
					className: h.a.chevronImage
				}))
			};
			const b = e => `${e}px`
		},
		"./src/reddit/components/Governance/PollHelpText/index.m.less": function(e, t, n) {
			e.exports = {
				pollHelpText: "_13USlqK0GlZqaPCBL0zKGR",
				decisionThreholdAmount: "_2c1NZvJKkI6yBivC77FPD4",
				decisionThresholdTitle: "_3awYIQIHL4ztIb5nZDL46P",
				decisionThresholdExplanation: "_1GSbrVpv76_yXM2VcUM3zK"
			}
		},
		"./src/reddit/components/Governance/PostPollMetaData/index.m.less": function(e, t, n) {
			e.exports = {
				proposalMetaData: "_2uZcUQgumllsYgn5TxSizG",
				proposalMetaDataTime: "_1u5ghYiKbGasP3ORCsbasV"
			}
		},
		"./src/reddit/components/Governance/ProposalTemplates/Generic/index.m.less": function(e, t, n) {
			e.exports = {
				hintText: "_1iTDa11Wj-8Ogp0kHlXhus",
				text: "_3Q86vH6B2mMSV8rHtZq4H9",
				topline: "_12_7Q434C71LJVJC_6GX71"
			}
		},
		"./src/reddit/components/Governance/ProposalTemplates/Spinoff/index.m.less": function(e, t, n) {
			e.exports = {
				input: "_2clkG943bEk_52p-4FBzwJ"
			}
		},
		"./src/reddit/components/Governance/ProposalTemplates/TopModReplacement/index.m.less": function(e, t, n) {
			e.exports = {
				input: "AyMlaMkumG28uV6ZIz9ed"
			}
		},
		"./src/reddit/components/Governance/Token/index.m.less": function(e, t, n) {
			e.exports = {
				grey: "_3oUx7R2UEz3llZLsIONH4x"
			}
		},
		"./src/reddit/components/Governance/Token/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/config.ts"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/selectors/gov.ts"),
				l = n("./src/reddit/components/Governance/Token/index.m.less"),
				u = n.n(l);
			const m = Object(i.c)({
				tokenSymbol: d.o
			});
			t.a = Object(r.b)(m)((function(e) {
				const t = e.grey ? e.tokenSymbol.greyVector || e.tokenSymbol.grey : e.tokenSymbol.filledVector || e.tokenSymbol.filled,
					n = `${a.a.assetPath}/${t}`;
				if (e.grey && n.endsWith(".svg")) {
					const t = `url(${n}) center/cover`;
					return o.a.createElement("div", {
						className: Object(c.a)(u.a.grey, e.className),
						style: {
							mask: t,
							WebkitMask: t
						}
					})
				}
				return o.a.createElement("img", {
					className: e.className,
					src: n
				})
			}))
		},
		"./src/reddit/components/Governance/TokenAmount/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1_TXyD8cel36iFhXWbXulM",
				small: "_1MnpXAw_e6q3FjPvZfRITL",
				token: "_3ugCwJ_lmINM5PwXoNm8XD"
			}
		},
		"./src/reddit/components/Governance/TokenAmount/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/prettyPrintNumber/index.ts"),
				d = n("./src/reddit/components/Governance/Token/index.tsx"),
				l = n("./src/reddit/helpers/governance/tokens.ts"),
				u = n("./src/reddit/selectors/gov.ts"),
				m = n("./src/reddit/components/Governance/TokenAmount/index.m.less"),
				p = n.n(m);
			const h = Object(i.c)({
				tokenDisplayConversion: u.m
			});
			t.a = Object(r.b)(h)((function(e) {
				return o.a.createElement("div", {
					className: Object(a.a)(p.a.container, e.className, {
						[p.a.small]: e.small
					})
				}, o.a.createElement(d.a, {
					className: Object(a.a)(p.a.token, {
						[p.a.small]: e.small
					}),
					grey: e.grey,
					subredditId: e.subredditId
				}), Object(c.a)(Object(l.b)(e.amount, e.tokenDisplayConversion)), e.additionalText || null)
			}))
		},
		"./src/reddit/components/Hovercards/SubredditHovercard/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/higherOrderComponents/makeAsync.tsx"),
				o = n("./src/lib/loadWithRetries/index.ts");
			const r = () => null;
			t.a = Object(s.a)({
				ErrorComponent: r,
				getComponent: () => Object(o.a)(() => n.e("SubredditHovercard").then(n.bind(null, "./src/reddit/components/Hovercards/SubredditHovercard/_SubredditHovercard.tsx"))).then(e => e.default),
				LoadingComponent: r
			})
		},
		"./src/reddit/components/IdCard/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(s.a)({
				resolved: {},
				chunkName: () => "IdCard",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("IdCard").then(n.bind(null, "./src/reddit/components/IdCard/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/IdCard/index.tsx"
				}
			})
		},
		"./src/reddit/components/ImageWithFallback/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			n("./node_modules/react/index.js");
			const s = e => new Promise((t, n) => {
				const s = new Image;
				s.onload = () => t(s), s.onerror = n, s.src = e
			})
		},
		"./src/reddit/components/InfoBanners/BannerBase/index.m.less": function(e, t, n) {
			e.exports = {
				IconWrapper: "_2p07tPrx9WpxDTQJ5cmVNe",
				iconWrapper: "_2p07tPrx9WpxDTQJ5cmVNe",
				TextWrapper: "_2jpm-rNr0Hniw6BX3NWMVe",
				textWrapper: "_2jpm-rNr0Hniw6BX3NWMVe",
				leftSideRectangle: "_3TLlMYjrPH9Kl9522LpSxb",
				wrapper: "_1DUKbp8va6vxOv9zemBDBi",
				subtitle: "_2J85dtk0HKQBLk8HTSWduv",
				title: "Nt8TnDvJ2BsL8KWcFQKy5"
			}
		},
		"./src/reddit/components/InfoBanners/BannerBase/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/components/InfoBanners/BannerBase/index.m.less"),
				a = n.n(i),
				c = n("./src/lib/lessComponent.tsx");
			const d = c.a.div("IconWrapper", a.a),
				l = c.a.div("TextWrapper", a.a);

			function u(e) {
				const {
					className: t,
					color: n,
					icon: s,
					subtitle: i,
					title: c
				} = e;
				return o.a.createElement("div", {
					className: Object(r.a)(t, a.a.wrapper),
					style: n && {
						borderColor: n
					} || {}
				}, o.a.createElement("div", {
					className: a.a.leftSideRectangle,
					style: n && {
						backgroundColor: n
					} || {}
				}), s ? o.a.createElement(d, null, s) : o.a.createElement(d, null), o.a.createElement(l, null, o.a.createElement("div", {
					className: a.a.title
				}, c), i && o.a.createElement("div", {
					className: a.a.subtitle
				}, i)))
			}
		},
		"./src/reddit/components/InfoTextTooltip/Hooked.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/components/InfoTextTooltip/hooked.m.less"),
				a = n.n(i);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = o.a.memo((function({
				visible: e,
				...t
			}) {
				const [n, i] = Object(s.useState)(e);
				return Object(s.useEffect)(() => {
					let t = window.setTimeout(() => {
						t = void 0, i(e)
					}, 0);
					return () => {
						t && window.clearTimeout(t), i(!1)
					}
				}, [e]), e ? o.a.createElement("div", c({
					className: Object(r.a)(a.a.tooltip, {
						[a.a.visible]: n
					})
				}, t.popperProps), t.children, n && o.a.createElement("div", c({
					className: a.a.arrow
				}, t.arrowProps))) : null
			}))
		},
		"./src/reddit/components/InfoTextTooltip/hooked.m.less": function(e, t, n) {
			e.exports = {
				arrow: "_1jsc29CjRXZWjd2tr0Ji0Y",
				tooltip: "_2J_zB4R1FH2EjGMkQjedwc",
				visible: "u6HtAZu8_LKL721-EnKuR"
			}
		},
		"./src/reddit/components/InfoTextTooltip/index.m.less": function(e, t, n) {
			e.exports = {
				BottomText: "_3uK2I0hi3JFTKnMUFHD2Pd",
				bottomText: "_3uK2I0hi3JFTKnMUFHD2Pd",
				Text: "HQ2VJViRjokXpRbJzPvvc",
				text: "HQ2VJViRjokXpRbJzPvvc",
				"fade-in": "_1tIZttmhLdrIGrB-6VvZcT",
				fadeIn: "_1tIZttmhLdrIGrB-6VvZcT"
			}
		},
		"./src/reddit/components/InfoTextTooltip/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return f
			})), n.d(t, "a", (function() {
				return g
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/higherOrderComponents/addOverlayEvents.tsx"),
				c = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				d = n("./src/reddit/selectors/tooltip.ts"),
				l = n("./src/reddit/components/InfoTextTooltip/index.m.less"),
				u = n.n(l),
				m = n("./src/lib/lessComponent.tsx");

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const h = m.a.div("Text", u.a),
				b = m.a.div("BottomText", u.a),
				f = e => o.a.createElement(h, {
					className: e.className,
					style: e.style
				}, e.text, e.children),
				g = e => {
					const t = e.overflow ? e.overflow.left : 0;
					return o.a.createElement(b, {
						className: e.className,
						style: {
							...e.style,
							"--infoTextTooltip-overflow-left": `${t}px`
						}
					}, e.text, e.children)
				},
				C = Object(i.c)({
					isOpen: (e, {
						tooltipId: t
					}) => Object(d.b)(t)(e)
				}),
				x = Object(c.a)(g, [a.a.Click, a.a.Keydown]),
				E = Object(c.a)(f, [a.a.Click, a.a.Keydown]),
				v = Object(r.b)(C);
			t.c = v(e => {
				const {
					caretOnTop: t
				} = e;
				return t ? o.a.createElement(x, p({}, e, {
					targetPosition: ["center", "bottom"],
					tooltipPosition: ["center", "top"]
				})) : o.a.createElement(E, p({}, e, {
					targetPosition: ["center", "top"],
					tooltipPosition: ["center", "bottom"]
				}))
			})
		},
		"./src/reddit/components/JumpToContent/index.m.less": function(e, t, n) {
			e.exports = {
				button: "_3KaTO_3YaHK3SMocnu8jV9",
				rightBorder: "_1Bt_cwKVUG30M9eNB-9rU4",
				wrapper: "_32Xa3voy05uAFz3ZnopP_S"
			}
		},
		"./src/reddit/components/JumpToContent/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return m
			})), n.d(t, "b", (function() {
				return h
			})), n.d(t, "a", (function() {
				return b
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				i = n("./src/reddit/constants/componentSizes.ts"),
				a = n("./src/reddit/controls/Button/index.tsx"),
				c = n("./src/reddit/components/JumpToContent/index.m.less"),
				d = n.n(c);
			const l = Object(o.createContext)(null),
				u = Object(o.createContext)(null);
			class m extends r.a.Component {
				constructor() {
					super(...arguments), this.state = {
						handleRef: null
					}, this.setHandleRef = e => {
						this.state.handleRef !== e && this.setState({
							handleRef: e
						})
					}
				}
				render() {
					return r.a.createElement(l.Provider, {
						value: this.props.isOverlayOpen ? null : this.state.handleRef
					}, r.a.createElement(u.Provider, {
						value: this.setHandleRef
					}, this.props.children))
				}
			}
			const p = i.f + 10,
				h = r.a.memo(() => r.a.createElement(l.Consumer, null, e => e && r.a.createElement("div", {
					className: d.a.wrapper
				}, r.a.createElement(a.o, {
					className: d.a.button,
					onClick: () => {
						e.focus(), e.scrollIntoView(), window.scrollBy(0, -p)
					}
				}, s.fbt._("Jump to content", null, {
					hk: "2zWOmQ"
				})), r.a.createElement("div", {
					className: d.a.rightBorder
				})))),
				b = r.a.memo(() => r.a.createElement(u.Consumer, null, e => r.a.createElement("div", {
					ref: e,
					tabIndex: 0
				})))
		},
		"./src/reddit/components/LinkOrOverlayLink/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				i = n("./src/reddit/controls/UnstyledInternalLink/index.tsx"),
				a = n("./src/reddit/helpers/overlay/index.ts");

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}

			function d(e) {
				const {
					children: t,
					className: n,
					to: s,
					...r
				} = e, d = Object(a.b)(s);
				return o.a.createElement(i.a, c({
					className: n,
					to: d
				}, r), t)
			}

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => {
				const {
					isOverlay: t,
					...n
				} = e, s = t ? d : r.a;
				return o.a.createElement(s, l({}, n, {
					children: n.children,
					className: n.className,
					onClick: n.onClick,
					to: n.to
				}))
			}
		},
		"./src/reddit/components/MarkdownHelp/index.m.less": function(e, t, n) {
			e.exports = {
				Section: "_1gF-JM2Md5QrEmUiEkRvLZ",
				section: "_1gF-JM2Md5QrEmUiEkRvLZ",
				Container: "C8uCM4XqGMA6xiIu7zfJl",
				container: "C8uCM4XqGMA6xiIu7zfJl",
				helpTable: "_3E7k-M4lVIYGW6Z7QoiPc9",
				Table: "_1t5z5ubOp-UUzTGLJr43d0",
				table: "_1t5z5ubOp-UUzTGLJr43d0",
				P: "_3MhMubukVABghyvZNN2X65",
				p: "_3MhMubukVABghyvZNN2X65"
			}
		},
		"./src/reddit/components/MarkdownHelp/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return E
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/reddit/components/FlairPickerTitle/index.tsx"),
				c = n("./src/reddit/components/FlairPickerWrapper/index.tsx"),
				d = n("./src/reddit/components/RichTextJson/elements.tsx"),
				l = n("./src/reddit/components/RichTextJson/SpoilerText.tsx"),
				u = n("./src/reddit/components/TrackingHelper/index.tsx"),
				m = n("./src/higherOrderComponents/asModal/index.tsx"),
				p = n("./src/reddit/actions/modal.ts"),
				h = n("./src/reddit/controls/Button/index.tsx"),
				b = n("./src/reddit/layout/row/Inline/index.tsx"),
				f = n("./src/reddit/layout/row/RightAlign/index.tsx"),
				g = n("./src/reddit/components/MarkdownHelp/index.m.less"),
				C = n.n(g),
				x = n("./src/lib/lessComponent.tsx");
			const E = "Markdown_Help__Modal",
				v = x.a.wrapped(b.a, "Section", C.a),
				_ = x.a.div("Container", C.a),
				O = x.a.table("Table", C.a),
				y = x.a.p("P", C.a);
			class k extends r.a.Component {
				render() {
					return r.a.createElement(c.a, null, r.a.createElement(a.a, {
						onClosePressed: this.props.closeModal,
						title: "Markdown Help"
					}), r.a.createElement(_, null, r.a.createElement(O, {
						className: C.a.helpTable
					}, r.a.createElement("tr", null, r.a.createElement(d.s, null, r.a.createElement(d.j, null, "Type this:")), r.a.createElement(d.s, null, r.a.createElement(d.j, null, "to get this:"))), r.a.createElement("tr", null, r.a.createElement(d.p, null, r.a.createElement(d.j, null, "*italics*")), r.a.createElement(d.p, null, r.a.createElement(d.f, null, "italics"))), r.a.createElement("tr", null, r.a.createElement(d.p, null, r.a.createElement(d.j, null, "**bold**")), r.a.createElement(d.p, null, r.a.createElement(d.b, null, "bold"))), r.a.createElement("tr", null, r.a.createElement(d.p, null, r.a.createElement(d.j, null, "[reddit!](https://reddit.com)")), r.a.createElement(d.p, null, r.a.createElement(d.a, {
						href: "https://www.reddit.com"
					}, "reddit!"))), r.a.createElement("tr", null, r.a.createElement(d.p, null, r.a.createElement(d.j, null, "* item 1"), r.a.createElement(d.j, null, "* item 2"), r.a.createElement(d.j, null, "* item 3")), r.a.createElement(d.p, null, r.a.createElement(d.v, null, r.a.createElement(d.g, null, "item 1"), r.a.createElement(d.g, null, "item 2"), r.a.createElement(d.g, null, "item 3")))), r.a.createElement("tr", null, r.a.createElement(d.p, null, r.a.createElement(d.j, null, "> quoted text")), r.a.createElement(d.p, null, r.a.createElement(d.c, null, "quoted text"))), r.a.createElement("tr", null, r.a.createElement(d.p, null, r.a.createElement(d.j, null, "~~strikethrough~~")), r.a.createElement(d.p, null, r.a.createElement(d.d, null, "strikethrough"))), r.a.createElement("tr", null, r.a.createElement(d.p, null, r.a.createElement(d.j, null, "super^script")), r.a.createElement(d.p, null, "super", r.a.createElement(d.m, null, "script"))), r.a.createElement("tr", null, r.a.createElement(d.p, null, r.a.createElement(d.j, null, ">!spoilers!<")), r.a.createElement(d.p, null, r.a.createElement(l.a, null, "spoilers")))), r.a.createElement(y, null, "Check the", r.a.createElement(d.a, {
						href: "https://www.reddit.com/wiki/commenting"
					}, " commenting wiki page "), "for more help")), r.a.createElement(v, null, r.a.createElement(f.a, null, r.a.createElement(h.i, {
						onClick: this.props.closeModal,
						"data-redditstyle": !0
					}, s.fbt._("Close", null, {
						hk: "4gbyAA"
					})))))
				}
			}
			const j = Object(i.b)(null, (e, t) => ({
				closeModal: () => e(Object(p.i)(E))
			}))(k);
			t.a = Object(m.a)(Object(u.c)(j))
		},
		"./src/reddit/components/OverflowMenu/index.m.less": function(e, t, n) {
			e.exports = {
				_Dropdown: "ehsOqYO6dxn_Pf9Dzwu37",
				dropdown: "ehsOqYO6dxn_Pf9Dzwu37",
				MenuButton: "_2pFdCpgBihIaYh9DSMWBIu",
				menuButton: "_2pFdCpgBihIaYh9DSMWBIu",
				mIsEnabled: "uMPgOFYlCc5uvpa2Lbteu",
				MenuIcon: "_38GxRFSqSC-Z2VLi5Xzkjy",
				menuIcon: "_38GxRFSqSC-Z2VLi5Xzkjy",
				DropdownRow: "_2DO72U0b_6CUw3msKGrnnT",
				dropdownRow: "_2DO72U0b_6CUw3msKGrnnT"
			}
		},
		"./src/reddit/components/OverflowMenu/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return y
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/lessComponent.tsx"),
				l = n("./src/reddit/actions/tooltip.ts"),
				u = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				m = n("./src/reddit/controls/Dropdown/index.tsx"),
				p = n("./src/reddit/controls/Dropdown/Row.tsx"),
				h = n("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				b = n("./src/reddit/icons/fonts/index.tsx"),
				f = n("./src/reddit/icons/fonts/Menu/index.tsx"),
				g = n("./src/reddit/selectors/tooltip.ts"),
				C = n("./src/reddit/components/OverflowMenu/index.m.less"),
				x = n.n(C);
			const E = d.a.wrapped(m.a, "_Dropdown", x.a),
				v = Object(u.a)(E),
				_ = d.a.button("MenuButton", x.a),
				O = d.a.wrapped(f.a, "MenuIcon", x.a),
				y = d.a.wrapped(p.b, "DropdownRow", x.a),
				k = Object(a.c)({
					dropdownIsOpen: (e, {
						dropdownId: t
					}) => Object(g.b)(t)(e)
				}),
				j = Object(i.b)(k, (e, {
					dropdownId: t
				}) => ({
					toggleDropdown: () => e(Object(l.h)({
						tooltipId: t
					}))
				})),
				S = e => t => {
					e.onClick && e.onClick(), e.toggleDropdown(), t.stopPropagation()
				};
			t.b = j(e => {
				const t = Object(h.a)();
				return r.a.createElement(_, {
					"aria-expanded": e.dropdownIsOpen,
					"aria-haspopup": !0,
					"aria-label": s.fbt._("more options", null, {
						hk: "2EnY1x"
					}),
					className: Object(c.a)(e.className, {
						[x.a.mIsEnabled]: !e.disabled && !e.defaultButtonOutline
					}),
					disabled: e.disabled,
					onClick: S(e),
					onMouseDown: e.handleMouseDown,
					id: e.dropdownId
				}, e.icon ? e.icon : t ? r.a.createElement(b.a, {
					name: "overflow_horizontal"
				}) : r.a.createElement(O, null), r.a.createElement(v, {
					className: e.dropdownClassName,
					isOpen: e.dropdownIsOpen,
					tooltipId: e.dropdownId,
					isFixed: e.isFixed,
					targetPosition: e.targetPosition,
					tooltipPosition: e.tooltipPosition,
					style: e.style
				}, e.children))
			})
		},
		"./src/reddit/components/OverlayAwareTooltip/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/higherOrderComponents/asTooltip.tsx"),
				i = n("./src/reddit/constants/elementIds.ts"),
				a = n("./src/reddit/contexts/InsideOverlay.tsx");

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}

			function d(e, t) {
				const n = Object(r.a)(e, t);
				class s extends o.a.PureComponent {
					constructor() {
						super(...arguments), this.state = {
							container: null
						}
					}
					componentDidMount() {
						if (this.props.isOverlay) {
							const e = document.getElementById(i.d);
							this.setState({
								container: e
							})
						}
					}
					render() {
						return o.a.createElement(n, c({}, this.props, {
							container: this.state.container,
							excludeContainerPosition: this.props.isOverlay
						}))
					}
				}
				return Object(a.b)(s)
			}
		},
		"./src/reddit/components/Poll/MetaData/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/lib/timeAgo/index.ts"),
				r = n("./src/lib/timeUntil/index.ts"),
				i = n("./node_modules/react/index.js"),
				a = n.n(i);

			function c(e) {
				const t = new Date(e.poll.endsAt).getTime() - Date.now() <= 0;
				return a.a.createElement("span", {
					className: e.className
				}, t ? s.fbt._("Voting closed {timeAgo}", [s.fbt._param("timeAgo", Object(o.d)(e.poll.endsAt / 1e3))], {
					hk: "3OERID"
				}) : Object(r.a)(new Date(e.poll.endsAt)))
			}
		},
		"./src/reddit/components/PollCreator/DefaultHintText/index.m.less": function(e, t, n) {
			e.exports = {
				helpTextItem: "wYdL1V7fxOtMwgvL8gt4a",
				helpTextList: "_23_RY8_TK404O0hdN7zpNn",
				helpTitle: "_3qXjOYMFBOO47HoteguQiz",
				helpTitleText: "_1NjVVC7kcVvJTLxxbNEi0S",
				infoIcon: "_2EKnk91_WzE7ao5vX6K5cC"
			}
		},
		"./src/reddit/components/PollCreator/EndDatePicker/index.m.less": function(e, t, n) {
			e.exports = {
				endDatePicker: "_11No5LInq3EU9b_SdtgV5r",
				title: "_2OgmT0eiv8yeZkNv_R4vFy",
				dateTime: "_24VUErhy8JiR-xw9cMsdx0",
				timeZone: "jHZVOve2QGoctU0iDnnCI"
			}
		},
		"./src/reddit/components/PollCreator/Option/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1RbFYzRB1jybmSRJ1VD_3f",
				grapple: "_3uUTBg1zNH9BKBOP3vVw6R",
				input: "CdINWDy27JLWIBXz488aN",
				trash: "_3AvADfaxGi-rnV-WFuWxTA"
			}
		},
		"./src/reddit/components/PollCreator/PollTypePicker/index.m.less": function(e, t, n) {
			e.exports = {
				pollTypePicker: "drrpCJbRPvWIi1se7oigP",
				button: "_39suzYUnvfHrQXd0LE1RYx",
				pollTypePickerButton: "_28-N09acaS2LiVHc52ApJg",
				buttonContent: "_2_qeC1tN1L5P6Y0YRK53bG",
				buttonBackground: "_3RjfM9k2XuNzq3D4Zhj4uT",
				predictionLabel: "xRe7YxsTBpNw2SR22vmzr",
				education: "lqD-1gWpcZmY0UJOP1zSl"
			}
		},
		"./src/reddit/components/PollCreator/TournamentPicker/index.m.less": function(e, t, n) {
			e.exports = {
				tournamentPicker: "_25F8doc5ufAo8JIxMy7xJZ",
				title: "_16nXKAYcvkyC8JhINAzIRG",
				input: "jiVuYdcb1GhQgH7_UaB1P"
			}
		},
		"./src/reddit/components/PollCreator/index.m.less": function(e, t, n) {
			e.exports = {
				flexRow: "_2G4E6Ja1LjN3lvEFdvCAMM",
				addButton: "_1MW4m9_ojHA4AO_I1MhQf3",
				container: "_3S9C536IVs6t9fXO2fE_Yq",
				controls: "_2RaOqu97VZrV7eSMAd--Fj",
				help: "_1kYOBe87AO-Ly-PkWe8yd8",
				options: "_26J8Tm1n-2QR6K2VOyZvJk",
				votingLengthCaret: "ekKR9rTD5h3p7yQ4SaLoa",
				votingLengthDropdown: "_1Sbl_DKDMJM71lJ_1GQgbB",
				votingLengthDropdownContainer: "_24W8XLxQSgwVVFneYfHsJR",
				votingLengthSelector: "_3TH3dFaVjJ2OSx-B_N3pDU",
				votingLengthSelector__disabled: "_2Wc5VFPksdxez0HQRlpdeE",
				votingLengthSelectorDisabled: "_2Wc5VFPksdxez0HQRlpdeE",
				votingLengthTitleText: "_1-ozAll8fJXOJ9tr9TwS1r",
				votingLengthDisplay: "gj1NXudk861pHzMz3jvCj",
				predictionSettings: "HXVbpI7By73VaXfNbuqeV"
			}
		},
		"./src/reddit/components/PostCreationForm/Button/index.m.less": function(e, t, n) {
			e.exports = {
				PrimaryButton: "_18Bo5Wuo3tMV-RDB8-kh8Z",
				primaryButton: "_18Bo5Wuo3tMV-RDB8-kh8Z",
				SecondaryButton: "lUsjLveKkZWUAgDDyU1rD",
				secondaryButton: "lUsjLveKkZWUAgDDyU1rD"
			}
		},
		"./src/reddit/components/PostCreationForm/CollectionListModal/CollectionListItem/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1IZotn_IQQ1fgtUjaFYbkd",
				onHoverActionText: "_1Zlk1VrZ8puYZy5lJOfz--",
				Container: "_1IZotn_IQQ1fgtUjaFYbkd",
				PostTitle: "_1hzDym_NpIlizkTDXc_rQj",
				postTitle: "_1hzDym_NpIlizkTDXc_rQj",
				MetaLine: "_67JuJTdFwIJPLPDkyPX-f",
				metaLine: "_67JuJTdFwIJPLPDkyPX-f",
				SubredditName: "_88OYON0K3w_tpnmCSWlUX",
				subredditName: "_88OYON0K3w_tpnmCSWlUX",
				InfoSpan: "_3DFfW-OG-MvCLiiEN18mpq",
				infoSpan: "_3DFfW-OG-MvCLiiEN18mpq"
			}
		},
		"./src/reddit/components/PostCreationForm/CollectionListModal/index.m.less": function(e, t, n) {
			e.exports = {
				Wrapper: "_1QvpnsvD_e--dvDTEcz7_w",
				wrapper: "_1QvpnsvD_e--dvDTEcz7_w",
				TopRow: "vuQEtla32r0kemmh11Hov",
				topRow: "vuQEtla32r0kemmh11Hov",
				TitleRow: "_1eSyFPTFSsfyp8BVxs83PB",
				titleRow: "_1eSyFPTFSsfyp8BVxs83PB",
				DetailsContainer: "_87UrrqUro4oVpXFAElZUX",
				detailsContainer: "_87UrrqUro4oVpXFAElZUX",
				ButtonRow: "_1CUOht5hsM0AF9T3Ox1yos",
				buttonRow: "_1CUOht5hsM0AF9T3Ox1yos",
				CloseWrapper: "_3OsXrjEdHgK1wJBfPX6IhR",
				closeWrapper: "_3OsXrjEdHgK1wJBfPX6IhR",
				Close: "_1TaKYhB80ExuTPoLaQZMRE",
				close: "_1TaKYhB80ExuTPoLaQZMRE",
				Empty: "_20K7F6rAgXGH5z83v7Ifiv",
				empty: "_20K7F6rAgXGH5z83v7Ifiv",
				EmptyImage: "_2eLeResic3Gc77W_edgNGt",
				emptyImage: "_2eLeResic3Gc77W_edgNGt",
				EmptyText: "_3t6VBoBsR8CGQvaPLHPjmW",
				emptyText: "_3t6VBoBsR8CGQvaPLHPjmW",
				FilterWrapper: "pKfhphFBuya82DYP2Q90X",
				filterWrapper: "pKfhphFBuya82DYP2Q90X",
				FilterInput: "_3W5cary86KmYWrVgEpGKPb",
				filterInput: "_3W5cary86KmYWrVgEpGKPb",
				SearchIcon: "_9T_dguVcd795c_vOyl9s4",
				searchIcon: "_9T_dguVcd795c_vOyl9s4",
				PlusIcon: "hfmgzmXCLe3hvSyZad9WP",
				plusIcon: "hfmgzmXCLe3hvSyZad9WP",
				CreateCollectionButton: "_34_h0zRV3AgFr_0sh99pKz",
				createCollectionButton: "_34_h0zRV3AgFr_0sh99pKz"
			}
		},
		"./src/reddit/components/PostCreationForm/CollectionListModal/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/config.ts"),
				o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				d = n("./src/higherOrderComponents/asModal/index.tsx"),
				l = n("./src/lib/memoizeByReference/index.ts"),
				u = n("./src/reddit/actions/postCreation/general.ts"),
				m = n("./src/reddit/components/TrackingHelper/index.tsx"),
				p = n("./src/reddit/constants/keycodes.ts"),
				h = n("./src/reddit/controls/Button/index.tsx"),
				b = n("./src/reddit/controls/Input/index.tsx"),
				f = n("./src/reddit/icons/svgs/Close/index.tsx"),
				g = n("./src/reddit/icons/svgs/Plus/index.tsx"),
				C = n("./src/reddit/icons/svgs/Search/index.tsx"),
				x = n("./src/reddit/layout/row/Inline/index.tsx"),
				E = n("./src/reddit/models/PostCreationForm/index.ts"),
				v = n("./src/reddit/selectors/postCollection.ts"),
				_ = n("./src/lib/timeAgo/index.ts"),
				O = n("./src/reddit/controls/MetaSeparator/index.tsx"),
				y = n("./src/reddit/helpers/name/index.ts"),
				k = n("./src/reddit/models/Subreddit/index.ts"),
				j = n("./src/reddit/models/User/index.ts"),
				S = n("./src/reddit/selectors/subreddit.ts"),
				I = n("./src/reddit/selectors/user.ts"),
				T = n("./src/reddit/components/PostCreationForm/CollectionListModal/CollectionListItem/index.m.less"),
				w = n.n(T),
				P = n("./src/lib/lessComponent.tsx");
			const {
				fbt: N
			} = n("./node_modules/fbt/lib/FbtPublic.js"), M = P.a.div("Container", w.a), D = P.a.h2("PostTitle", w.a), L = P.a.div("MetaLine", w.a), R = P.a.span("SubredditName", w.a), F = P.a.time("InfoSpan", w.a), A = Object(c.c)({
				subreddit: (e, {
					collection: {
						subredditId: t
					}
				}) => t ? Object(S.T)(e, {
					subredditId: t
				}) : void 0,
				user: I.i
			});
			class B extends i.a.PureComponent {
				constructor() {
					super(...arguments), this.onClick = () => {
						this.props.onClick(this.props.collection.id)
					}
				}
				render() {
					const {
						collection: e,
						subreddit: t,
						user: n,
						onHoverActionText: s
					} = this.props, o = t && Object(k.g)(t) && n ? Object(y.d)(Object(j.e)(n)) : t ? t.displayText : "", r = e.postIds.length;
					return i.a.createElement(M, {
						onClick: this.onClick,
						className: w.a.container
					}, i.a.createElement(D, {
						"data-redditstyle": !0
					}, e.title), i.a.createElement(L, {
						"data-redditstyle": !0
					}, o && i.a.createElement(R, {
						"data-redditstyle": !0
					}, o), o && i.a.createElement(O.b, null), i.a.createElement(F, null, N._({
						"*": "{number of posts} posts",
						_1: "1 post"
					}, [N._plural(r, "number of posts")], {
						hk: "1Uy96U"
					})), i.a.createElement(O.b, null), i.a.createElement(F, null, N._("created {time}", [N._param("time", Object(_.d)(e.createdAtUTC))], {
						hk: "2cUc5m"
					}))), s && i.a.createElement("div", {
						className: w.a.onHoverActionText
					}, i.a.createElement("span", null, s)))
				}
			}
			var U = Object(a.b)(A)(B),
				V = n("./src/reddit/helpers/trackers/postCollection.ts"),
				W = n("./src/reddit/components/PostCreationForm/CollectionListModal/index.m.less"),
				G = n.n(W);
			const H = `${s.a.assetPath}/img/snoo-drafts.png`,
				q = P.a.div("TopRow", G.a),
				K = P.a.div("TitleRow", G.a),
				z = P.a.div("DetailsContainer", G.a),
				J = P.a.wrapped(x.a, "ButtonRow", G.a),
				Y = P.a.div("CloseWrapper", G.a),
				Z = P.a.wrapped(f.a, "Close", G.a),
				Q = P.a.div("Empty", G.a),
				X = P.a.img("EmptyImage", G.a),
				$ = P.a.p("EmptyText", G.a),
				ee = P.a.div("FilterWrapper", G.a),
				te = P.a.wrapped(b.a, "FilterInput", G.a),
				ne = P.a.wrapped(C.a, "SearchIcon", G.a),
				se = P.a.wrapped(g.a, "PlusIcon", G.a),
				oe = P.a.wrapped(h.m, "CreateCollectionButton", G.a),
				re = Object(l.a)((e, t) => {
					const n = t.toLowerCase();
					return e.filter(e => e.title.toLowerCase().includes(n))
				}),
				ie = Object(c.c)({
					collections: v.v
				}),
				ae = Object(a.b)(ie, (e, {
					postId: t,
					isOverlay: n
				}) => ({
					onOpenCreateCollectionModal: () => {
						let s = E.b;
						t && (s = Object(E.t)(t, !!n)), e(Object(u.x)(s))
					}
				}));
			class ce extends i.a.PureComponent {
				constructor() {
					super(...arguments), this.state = {
						filterStr: ""
					}, this.close = () => {
						this.props.sendEvent(Object(V.c)()), this.props.onClose()
					}, this.handleEscapeKey = e => {
						e.keyCode === p.a.Escape && this.close()
					}, this.handleCreateCollectionClicked = () => {
						this.props.onOpenCreateCollectionModal(), this.props.sendEvent(Object(V.j)())
					}, this.handleCollectionSelected = e => {
						this.props.onSelectCollection(e), this.props.sendEvent(Object(V.q)())
					}, this.onFilterStringChange = e => {
						this.setState({
							filterStr: e.target.value
						})
					}, this.renderItem = e => i.a.createElement(U, {
						key: e.id,
						collection: e,
						onClick: () => this.handleCollectionSelected(e),
						onHoverActionText: this.props.onItemHoverActionText
					})
				}
				componentDidMount() {
					document.addEventListener("keydown", this.handleEscapeKey), this.props.sendEvent(Object(V.d)())
				}
				componentWillUnmount() {
					document.removeEventListener("keydown", this.handleEscapeKey)
				}
				renderNoCollections() {
					return i.a.createElement(Q, null, i.a.createElement(X, {
						src: H
					}), i.a.createElement($, null, o.fbt._("Your collections will live here", null, {
						hk: "FCxWg"
					})))
				}
				renderNoFilterMatches() {
					return i.a.createElement(Q, null, i.a.createElement($, null, o.fbt._("No collection matching filter", null, {
						hk: "2vawdK"
					}), ";"))
				}
				render() {
					const {
						collections: e,
						titleText: t
					} = this.props;
					let n;
					if (0 === e.length) n = this.renderNoCollections();
					else {
						const t = re(e, this.state.filterStr);
						n = 0 === t.length ? this.renderNoFilterMatches() : t.map(this.renderItem)
					}
					return i.a.createElement("div", {
						className: G.a.wrapper,
						"data-redditstyle": !0
					}, i.a.createElement(q, null, i.a.createElement(K, {
						"data-redditstyle": !0
					}, t || o.fbt._("My collections", null, {
						hk: "3yKovS"
					}), i.a.createElement(Y, {
						onClick: this.close
					}, i.a.createElement(Z, {
						"data-redditstyle": !0
					}))), i.a.createElement(ee, null, i.a.createElement(ne, null), i.a.createElement(te, {
						placeholder: o.fbt._("Find a collection", null, {
							hk: "3DbFBU"
						}),
						value: this.state.filterStr,
						onChange: this.onFilterStringChange
					}))), i.a.createElement(z, null, n), i.a.createElement(J, null, i.a.createElement(oe, {
						onClick: this.handleCreateCollectionClicked
					}, i.a.createElement(se, null), o.fbt._("Create a collection", null, {
						hk: "37xJVm"
					}))))
				}
			}
			const de = Object(d.a)(ae(Object(m.c)(ce)));
			t.a = de
		},
		"./src/reddit/components/PostCreationForm/ControlRow/AddTournamentPredictionButton/index.m.less": function(e, t, n) {
			e.exports = {
				addTournamentPredictionButton: "_379A0ry8uhFTCCqbGtPG08"
			}
		},
		"./src/reddit/components/PostCreationForm/ControlRow/PostModifiers/OCDisclaimer/index.m.less": function(e, t, n) {
			e.exports = {
				DontShowButton: "_1GOEXFnWfJy7WEF43f7RJk",
				dontShowButton: "_1GOEXFnWfJy7WEF43f7RJk",
				Component: "w3m9FyPsy2phDlWxoznhq",
				component: "w3m9FyPsy2phDlWxoznhq"
			}
		},
		"./src/reddit/components/PostCreationForm/ControlRow/PostModifiers/PostModifierButton/index.m.less": function(e, t, n) {
			e.exports = {
				PostModifierButton: "_5x1WjCc4HQF6tqnODOql0",
				postModifierButton: "_5x1WjCc4HQF6tqnODOql0",
				active: "HvFw1XKOfl5Jh7Run7iq4",
				HoverTooltip: "zprH8YpG-gVpFuEr-eQJw",
				hoverTooltip: "zprH8YpG-gVpFuEr-eQJw",
				TintOverlay: "stbc2Exoq0W4ZkGltglct",
				tintOverlay: "stbc2Exoq0W4ZkGltglct",
				isDisabled: "_3rEHSruwAvICnPAngYiIW1",
				mShiftTooltipToTheRight: "gceWvjO6tPHW1sEDhwkGK",
				Icon: "_3DWz59jTNPem2lIMybAGb8",
				icon: "_3DWz59jTNPem2lIMybAGb8"
			}
		},
		"./src/reddit/components/PostCreationForm/ControlRow/PostModifiers/index.m.less": function(e, t, n) {
			e.exports = {
				CalendarIcon: "_2EMgBR7XXJPBqzlciwA5q-",
				calendarIcon: "_2EMgBR7XXJPBqzlciwA5q-",
				ChatIcon: "Tb5Juq1WzFvhLo_xE7E0U",
				chatIcon: "Tb5Juq1WzFvhLo_xE7E0U",
				PencilIcon: "_3fLEcC4lV7R4T0nWSix8gz",
				pencilIcon: "_3fLEcC4lV7R4T0nWSix8gz",
				CheckmarkIcon: "_1UzslKYEQzOzo6YjHnE2g",
				checkmarkIcon: "_1UzslKYEQzOzo6YjHnE2g",
				PlusIcon: "_3KTRWtVakNSggrbPPnHkHf",
				plusIcon: "_3KTRWtVakNSggrbPPnHkHf",
				FlairComponent: "_2YM79GnDqrRjQQcFtEokkY",
				flairComponent: "_2YM79GnDqrRjQQcFtEokkY",
				FlairTextWrapper: "_1pXTTYLLHHqfgwyMuCqT6T",
				flairTextWrapper: "_1pXTTYLLHHqfgwyMuCqT6T",
				ModifierRow: "_2_rA2mCdhHc1Lr7Ff1ygvH",
				modifierRow: "_2_rA2mCdhHc1Lr7Ff1ygvH",
				AddFlair: "_1LD2Xsr3fioSkWZ13vMORC",
				addFlair: "_1LD2Xsr3fioSkWZ13vMORC",
				TintOverlay: "_2vWD8kW1_iU4dc3CgY9_gH",
				tintOverlay: "_2vWD8kW1_iU4dc3CgY9_gH",
				FlairIcon: "_2U5dhGN1LkTGmvfDSXp7Pn",
				flairIcon: "_2U5dhGN1LkTGmvfDSXp7Pn",
				StyledCaretIcon: "MZjVSHyz_JYuVJV8JeezH",
				styledCaretIcon: "MZjVSHyz_JYuVJV8JeezH",
				mHasError: "_12W0J-fwDQQ6_tQ9fdpzqG",
				errorMessages: "_29DzChs2ytJ2zOxDSU_YZZ"
			}
		},
		"./src/reddit/components/PostCreationForm/ControlRow/ToggleDestCollectionButton/index.m.less": function(e, t, n) {
			e.exports = {
				button: "_1FASP6jHc95Gr8_JE5NtRM",
				active: "_2cgz1Psg0iRSwK2eF0PY7a"
			}
		},
		"./src/reddit/components/PostCreationForm/ControlRow/index.m.less": function(e, t, n) {
			e.exports = {
				ButtonLayout: "_1T0P_YQg7fOYLCRoKl_xxO",
				buttonLayout: "_1T0P_YQg7fOYLCRoKl_xxO",
				buttonLayoutStyles: "_1BOItL6vmZFDKOuaOKKJHf",
				SaveDraftButtonLayout: "_2qdAvPbBMsK4TpwNnVe-pj",
				saveDraftButtonLayout: "_2qdAvPbBMsK4TpwNnVe-pj",
				Container: "_1d1--0DMy_jAIxCCoYMo1k",
				container: "_1d1--0DMy_jAIxCCoYMo1k",
				ButtonsAndErrors: "_2DHDj0dbS1TkKD3fMqSbHy",
				buttonsAndErrors: "_2DHDj0dbS1TkKD3fMqSbHy",
				ButtonRow: "_2RmKGBRP9puAMQITZ7HMaB",
				buttonRow: "_2RmKGBRP9puAMQITZ7HMaB",
				autoWidth: "_2lg9-dlsll34oz__8Kmxk7",
				errorMessages: "_2kLLxn1y9vaTeT0OAc-Ikc",
				PostLoadingIcon: "_2QZRXSFrX2qcSjZIV5mRzK",
				postLoadingIcon: "_2QZRXSFrX2qcSjZIV5mRzK",
				DraftLoadingIcon: "_4S5sqoV61IY7tpZqBwoKQ",
				draftLoadingIcon: "_4S5sqoV61IY7tpZqBwoKQ",
				Token: "_1TIes8fbwL-i8e6hUlw5jF",
				token: "_1TIes8fbwL-i8e6hUlw5jF",
				postModifiers: "_2pAQpGYEPAVsPmV5uVmGGU",
				clockIcon: "_1z-5BtMZ_1-gl9JLssX5SJ",
				postScheduleButton: "_2cMg4VsPGSoc_OwPOPRAie",
				postScheduleIcon: "_1ND9PCHVFG_UrSPdlJqv5W",
				removeRightBorderRadius: "_1_Xn_Na9NfUSd_yoc1w2Eb"
			}
		},
		"./src/reddit/components/PostCreationForm/CreateOrEditCollectionModal/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "_3vV_tKesULQ5WMGh38lX4b",
				container: "_3vV_tKesULQ5WMGh38lX4b",
				Content: "_11JSvybbRhcX_cfoagpne_",
				content: "_11JSvybbRhcX_cfoagpne_",
				TitleRow: "_3Ev4JRxdS9-3GTBR5M1yCP",
				titleRow: "_3Ev4JRxdS9-3GTBR5M1yCP",
				Details: "_3Uw02TWwSQhLfCJkPsihqr",
				details: "_3Uw02TWwSQhLfCJkPsihqr",
				Footer: "_25MDqXgOCWDBjtAEBi2cmy",
				footer: "_25MDqXgOCWDBjtAEBi2cmy",
				CancelButton: "_2tLOIj2nClBaVRuMBIJE8X",
				cancelButton: "_2tLOIj2nClBaVRuMBIJE8X",
				CloseWrapper: "_GVnqGyX40oKfgIS56Q-k",
				closeWrapper: "_GVnqGyX40oKfgIS56Q-k",
				CloseIcon: "_1GgoANMMbLQJ-gSefDJZuZ",
				closeIcon: "_1GgoANMMbLQJ-gSefDJZuZ",
				Label: "_3QPFKpxsmu6j_gbiAuVgfW",
				label: "_3QPFKpxsmu6j_gbiAuVgfW",
				TitleInput: "ZEfw7a99aHsmkl4fx38l5",
				titleInput: "ZEfw7a99aHsmkl4fx38l5",
				AddCollectionIcon: "_30BNMMyQPTPvHEoL3-LXrM",
				addCollectionIcon: "_30BNMMyQPTPvHEoL3-LXrM",
				PrimaryActionButton: "_22f_S1XUre_FujBgOgEHJe",
				primaryActionButton: "_22f_S1XUre_FujBgOgEHJe",
				LoadingIcon: "_3cD2qECfUUTwega16qDhBc",
				loadingIcon: "_3cD2qECfUUTwega16qDhBc",
				ErrorText: "GIQ2YnBHQtY1QM1yPEhCR",
				errorText: "GIQ2YnBHQtY1QM1yPEhCR"
			}
		},
		"./src/reddit/components/PostCreationForm/CreateOrEditCollectionModal/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				c = n("./src/higherOrderComponents/asModal/index.tsx"),
				d = n("./src/lib/formatApiError/index.ts"),
				l = n("./src/reddit/actions/postCollection/index.ts"),
				u = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				m = n("./src/reddit/constants/postCreation.ts"),
				p = n("./src/reddit/controls/Button/index.tsx"),
				h = n("./src/reddit/controls/ErrorText/index.tsx"),
				b = n("./src/reddit/controls/Input/index.tsx"),
				f = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				g = n("./src/reddit/icons/svgs/AddCollection/index.tsx"),
				C = n("./src/reddit/icons/svgs/Close/index.tsx"),
				x = n("./src/reddit/layout/row/Inline/index.tsx"),
				E = n("./src/reddit/selectors/postCollection.ts"),
				v = n("./src/reddit/components/PostCreationForm/CreateOrEditCollectionModal/index.m.less"),
				_ = n.n(v),
				O = n("./src/lib/lessComponent.tsx");
			const y = O.a.div("Container", _.a),
				k = O.a.div("Content", _.a),
				j = O.a.div("TitleRow", _.a),
				S = O.a.div("Details", _.a),
				I = O.a.wrapped(u.f, "Footer", _.a),
				T = O.a.wrapped(p.l, "CancelButton", _.a),
				w = O.a.div("CloseWrapper", _.a),
				P = O.a.wrapped(C.a, "CloseIcon", _.a),
				N = O.a.label("Label", _.a),
				M = O.a.wrapped(b.a, "TitleInput", _.a),
				D = O.a.wrapped(g.a, "AddCollectionIcon", _.a),
				L = O.a.wrapped(p.i, "PrimaryActionButton", _.a),
				R = O.a.wrapped(f.a, "LoadingIcon", _.a),
				F = O.a.wrapped(h.b, "ErrorText", _.a),
				A = Object(a.c)({
					collection: E.q,
					error: E.c,
					isPending: E.g
				}),
				B = Object(i.b)(A, (e, t) => ({
					onCreate: (t, n) => e(Object(l.b)(t, n)),
					onUpdate: n => e(Object(l.h)(t.collectionId, n))
				}));
			class U extends r.a.PureComponent {
				constructor(e) {
					super(e), this.onTitleChange = e => {
						this.setState({
							collectionTitle: e.target.value
						})
					}, this.onPrimaryButtonClick = async () => {
						const {
							collectionId: e,
							subredditId: t
						} = this.props, {
							collectionTitle: n
						} = this.state;
						if (e) {
							await this.props.onUpdate(n) && this.props.onCollectionUpdated && this.props.onCollectionUpdated()
						} else {
							const e = await this.props.onCreate(n, t);
							e && this.props.onCollectionCreated && this.props.onCollectionCreated(e)
						}
					}, this.onClose = () => {
						this.props.onCancel()
					};
					const {
						collection: t
					} = e;
					this.state = {
						collectionTitle: t ? t.title : ""
					}
				}
				render() {
					const {
						collectionId: e,
						error: t,
						isPending: n
					} = this.props, o = !e, i = !!this.state.collectionTitle.trim(), a = o ? s.fbt._("Create", null, {
						hk: "Ijp7n"
					}) : s.fbt._("Save", null, {
						hk: "2Onrrv"
					});
					return r.a.createElement(y, null, r.a.createElement(w, {
						onClick: this.props.onCancel
					}, r.a.createElement(P, null)), r.a.createElement(k, null, o && r.a.createElement(r.a.Fragment, null, r.a.createElement(j, null, r.a.createElement(D, null), s.fbt._("Create a collection", null, {
						hk: "3ndxk5"
					})), r.a.createElement(S, null, s.fbt._("Group posts into one feed. Create a series of events or just a group of random things. Make something awesome!", null, {
						hk: "2eCAQw"
					}))), r.a.createElement(N, null, o ? s.fbt._("Give a title for your collection", null, {
						hk: "Uaqbe"
					}) : s.fbt._("Edit title", null, {
						hk: "1jzweg"
					}), r.a.createElement(M, {
						maxLength: m.e,
						onChange: this.onTitleChange,
						placeholder: s.fbt._("Enter title", null, {
							hk: "3B0iRI"
						}),
						value: this.state.collectionTitle
					}))), r.a.createElement(I, null, r.a.createElement(x.a, null, r.a.createElement(T, {
						onClick: this.props.onCancel
					}, s.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), r.a.createElement(L, {
						onClick: this.onPrimaryButtonClick,
						disabled: n || !i
					}, n ? r.a.createElement(R, {
						sizePx: 10
					}) : a)), t && r.a.createElement(F, null, Object(d.a)(t))))
				}
			}
			t.a = Object(c.a)(B(U))
		},
		"./src/reddit/components/PostCreationForm/CreationControls/index.m.less": function(e, t, n) {
			e.exports = {
				SubredditPicker: "k3D4EVssJ1w-8irx6jW6k",
				subredditPicker: "k3D4EVssJ1w-8irx6jW6k",
				ControlRow: "i0kJNtq5ma1uzbOX9_mM4",
				controlRow: "i0kJNtq5ma1uzbOX9_mM4"
			}
		},
		"./src/reddit/components/PostCreationForm/DraftListModal/DraftListItem/Icon.m.less": function(e, t, n) {
			e.exports = {
				Component: "_2zmE2mxeSGThXfrD20TENk",
				component: "_2zmE2mxeSGThXfrD20TENk"
			}
		},
		"./src/reddit/components/PostCreationForm/DraftListModal/DraftListItem/Placeholder.m.less": function(e, t, n) {
			e.exports = {
				Container: "_3s9TqP-_YHesViWXcd4cMj",
				container: "_3s9TqP-_YHesViWXcd4cMj",
				LeftBlock: "_3ZfLmI01IKam1zqUNiCCY6",
				leftBlock: "_3ZfLmI01IKam1zqUNiCCY6",
				Content: "_3GIbVaHf4QKOhABI3DhSMo",
				content: "_3GIbVaHf4QKOhABI3DhSMo",
				MediaIcon: "_31VuujawtoKX7A_ykq786h",
				mediaIcon: "_31VuujawtoKX7A_ykq786h",
				Title: "_24WZEeSSq6ekrxl4oZMhB3",
				title: "_24WZEeSSq6ekrxl4oZMhB3",
				Secondary: "_1a6BjjqFgWMfDd1GftKY3a",
				secondary: "_1a6BjjqFgWMfDd1GftKY3a"
			}
		},
		"./src/reddit/components/PostCreationForm/DraftListModal/DraftListItem/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "_2mGd4F9ksQ8wRlvFjnL0wz",
				container: "_2mGd4F9ksQ8wRlvFjnL0wz",
				LeftBlock: "_32kTNEqb0vEW5J0BmJdwnn",
				leftBlock: "_32kTNEqb0vEW5J0BmJdwnn",
				Content: "wrG0DeMFlU8RmFoT1gUDM",
				content: "wrG0DeMFlU8RmFoT1gUDM",
				RightBlock: "AnY3sJDM9Z2aUfyXs2Hfl",
				rightBlock: "AnY3sJDM9Z2aUfyXs2Hfl",
				PostTitle: "_25WWHqf4udQb0G9Wa_ar6s",
				postTitle: "_25WWHqf4udQb0G9Wa_ar6s",
				EditingPostTitle: "_3kH-PKnEjv45UIFAwY_XwK",
				editingPostTitle: "_3kH-PKnEjv45UIFAwY_XwK",
				MetaLine: "_1P65-c5DlnBqJL1jOa9TFr",
				metaLine: "_1P65-c5DlnBqJL1jOa9TFr",
				SubredditName: "_2cQKCpCLQTg1gPnnhEqZ6z",
				subredditName: "_2cQKCpCLQTg1gPnnhEqZ6z",
				DraftSavedTime: "Aegaj4-SLZNjFEolptURF",
				draftSavedTime: "Aegaj4-SLZNjFEolptURF",
				TrashIcon: "lWsFaDYxW8Sc4sqVTxVGv",
				trashIcon: "lWsFaDYxW8Sc4sqVTxVGv",
				InteractiveDiv: "_1nhwaUh9TlWeM5H9a_E18l",
				interactiveDiv: "_1nhwaUh9TlWeM5H9a_E18l",
				ConfirmDelete: "_3lIfF-MBpq24PJLxdGfIWQ",
				confirmDelete: "_3lIfF-MBpq24PJLxdGfIWQ"
			}
		},
		"./src/reddit/components/PostCreationForm/DraftListModal/index.m.less": function(e, t, n) {
			e.exports = {
				Wrapper: "_29SuZj4Q_M_-p6FwlKJw2V",
				wrapper: "_29SuZj4Q_M_-p6FwlKJw2V",
				TitleRow: "_1t9vurufwtvAZm6k-7T1N0",
				titleRow: "_1t9vurufwtvAZm6k-7T1N0",
				DraftsNumber: "VA7GC_5VP6Yx4VSLaCW7T",
				draftsNumber: "VA7GC_5VP6Yx4VSLaCW7T",
				DetailsContainer: "_2ffvzlYi6yd1I-j5ndDKFm",
				detailsContainer: "_2ffvzlYi6yd1I-j5ndDKFm",
				ButtonRow: "_3JS6XDYnB0zNhQRfV4rLl0",
				buttonRow: "_3JS6XDYnB0zNhQRfV4rLl0",
				CancelButton: "_2AHvxdRmdK6Dve6_MNs6YW",
				cancelButton: "_2AHvxdRmdK6Dve6_MNs6YW",
				CloseWrapper: "_2put2qtgUIjmVIlQlZxeTb",
				closeWrapper: "_2put2qtgUIjmVIlQlZxeTb",
				Close: "_1Ojj3n0SwnEevN0xKAhtFi",
				close: "_1Ojj3n0SwnEevN0xKAhtFi",
				Empty: "_3j6Qa8OS7J6clTSNxqrADq",
				empty: "_3j6Qa8OS7J6clTSNxqrADq",
				EmptyImage: "_13SmMRVwMLfOrhzEqQQXrJ",
				emptyImage: "_13SmMRVwMLfOrhzEqQQXrJ",
				EmptyText: "_2OF81CBhfbV9gjOU-5n9Dr",
				emptyText: "_2OF81CBhfbV9gjOU-5n9Dr",
				DraftListModal: "_2bMp7e8oHvukp1hKtlg1r-",
				draftListModal: "_2bMp7e8oHvukp1hKtlg1r-"
			}
		},
		"./src/reddit/components/PostCreationForm/EduTooltips/BaseEduTooltip/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1LVDV1pks4den73WWY46GI",
				contentContainer: "_3v3OHx0_DIBm8WcTKrQ_Vj",
				description: "_1ZyYR40qdR1KVaYW3JJnFF",
				gotIt: "_31UHkJmzR05A-oHijI9dsj",
				hero: "_3KJU9tTmfe-f0PGdg1hJ6O",
				icon: "_1TqYQFIF_2oaFDavvx7TEE",
				iconExplanation: "_2gaQgwvoc2dROc2Uramfat",
				iconsExplanations: "_1IKgmmXb6LA2blrkyfqnxx",
				title: "_1ZeryymPzBgAm7zK9oPs3l",
				Container: "_1LVDV1pks4den73WWY46GI",
				OuterContainer: "_3cH-rE_yhLIp3GscF-WShj",
				outerContainer: "_3cH-rE_yhLIp3GscF-WShj"
			}
		},
		"./src/reddit/components/PostCreationForm/EduTooltips/CollectionButtonTooltip/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3zSOhojke1hMymIth30Ue"
			}
		},
		"./src/reddit/components/PostCreationForm/EduTooltips/EventButtonTooltip/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_RsSSHM-K9MvWN3u6Jxnf"
			}
		},
		"./src/reddit/components/PostCreationForm/LinkEditor/index.m.less": function(e, t, n) {
			e.exports = {
				URLInput: "_3zY6b4QJpSz1067ahq73_K",
				urlInput: "_3zY6b4QJpSz1067ahq73_K",
				mHasError: "_1WipnslOO1oVfOEMxsrYU3"
			}
		},
		"./src/reddit/components/PostCreationForm/MarkdownEditor/index.m.less": function(e, t, n) {
			e.exports = {
				LoadingIcon: "dyBWJSV5slC_6_q-avEAz",
				loadingIcon: "dyBWJSV5slC_6_q-avEAz",
				ModeDescription: "_2wjlEqW6Mz7pFfwBHVpPEA",
				modeDescription: "_2wjlEqW6Mz7pFfwBHVpPEA",
				ModeWrapper: "_2IWlVWhYLpVswet-ElQ9xx",
				modeWrapper: "_2IWlVWhYLpVswet-ElQ9xx",
				SwitchModeButton: "_2POD_tWc9UVvI3zBwPH9Yu",
				switchModeButton: "_2POD_tWc9UVvI3zBwPH9Yu",
				MarkdownHelpButton: "oqXBQCZarmL4V15c4Izxm",
				markdownHelpButton: "oqXBQCZarmL4V15c4Izxm",
				Toolbar: "_1HVLi6b9dq2O2gkgGAO1Fa",
				toolbar: "_1HVLi6b9dq2O2gkgGAO1Fa"
			}
		},
		"./src/reddit/components/PostCreationForm/MarkdownEditor/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				c = n("./src/reddit/actions/postCreation/general.ts"),
				d = n("./src/reddit/components/CommentCreation/MarkdownCommentForm/index.tsx"),
				l = n("./src/reddit/components/FocusableContent/index.tsx"),
				u = n("./src/reddit/components/MarkdownHelp/index.tsx"),
				m = n("./src/reddit/components/PostCreationForm/Prompt/index.tsx"),
				p = n("./src/reddit/components/ResizableAutosizeTextarea/index.tsx"),
				h = n("./src/reddit/constants/keycodes.ts"),
				b = n("./src/reddit/controls/Button/index.tsx"),
				f = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				g = n("./src/reddit/models/PostCreationForm/index.ts"),
				C = n("./src/reddit/selectors/activeModalId.ts"),
				x = n("./src/reddit/selectors/editorContent.ts"),
				E = n("./src/reddit/components/PostCreationForm/MarkdownEditor/index.m.less"),
				v = n.n(E),
				_ = n("./src/lib/lessComponent.tsx");
			const O = _.a.wrapped(f.a, "LoadingIcon", v.a),
				y = ({
					isFilled: e,
					...t
				}) => r.a.createElement(O, t),
				k = _.a.span("ModeDescription", v.a),
				j = _.a.div("ModeWrapper", v.a),
				S = _.a.wrapped(d.a, "MarkdownHelpButton", v.a),
				I = _.a.div("Toolbar", v.a),
				T = Object(a.c)({
					activeModalId: C.a,
					isConverting: e => Object(x.a)(e)
				}),
				w = Object(i.b)(T, (e, t) => ({
					onChange: n => {
						e(Object(c.c)(n)), t.onChange && t.onChange(n)
					},
					helpModalToggled: () => e(Object(c.x)(u.b)),
					switchToRTEModalToggled: () => e(Object(c.x)(m.a.SWITCH_TO_RTE_MODAL_ID))
				}));
			class P extends r.a.Component {
				constructor(e) {
					super(e), this.textAreaRef = null, this.onChange = e => {
						const {
							value: t
						} = e.currentTarget;
						this.props.onChange(t)
					}, this.onBlur = () => {
						this.setState({
							isFocused: !1
						}), this.props.onBlur && this.props.onBlur()
					}, this.onFocus = () => {
						const {
							onFocus: e
						} = this.props;
						e && e(), this.setState({
							isFocused: !0
						})
					}, this.handleKeyDown = e => {
						const {
							ctrlKey: t,
							metaKey: n,
							keyCode: s
						} = e;
						(t || n) && s === h.a.Enter && this.props.onSubmit()
					}, this.handleSwitchModeClick = () => {
						this.props.value ? this.props.switchToRTEModalToggled() : this.props.onSwitchEditorMode(g.h.RICH_TEXT, this.props.value)
					}, this.handleSwitchToRTEConfirm = () => {
						this.props.switchToRTEModalToggled(), this.props.onSwitchEditorMode(g.h.RICH_TEXT, this.props.value)
					}, this.setTextAreaRef = e => this.textAreaRef = e, this.state = {
						isFocused: !1
					}
				}
				componentDidMount() {
					const {
						instanceRef: e
					} = this.props;
					e && e(this)
				}
				componentWillUnmount() {
					const {
						instanceRef: e
					} = this.props;
					e && e(null)
				}
				focus() {
					this.textAreaRef && this.textAreaRef.focus()
				}
				render() {
					const {
						className: e,
						isConverting: t,
						placeholderText: n,
						focusableContentMarkdownClassName: s,
						value: o
					} = this.props, {
						isFocused: i
					} = this.state;
					return r.a.createElement("div", {
						className: e
					}, r.a.createElement(l.a, {
						className: s,
						isFocused: i
					}, r.a.createElement(I, null, r.a.createElement(j, null, r.a.createElement(k, null, "Markdown"), r.a.createElement(S, {
						onClick: this.props.helpModalToggled
					})), r.a.createElement(N, {
						isConverting: t,
						onClick: this.handleSwitchModeClick
					})), r.a.createElement(p.a, {
						disabled: !!this.props.disabled,
						initialHeight: this.props.initialHeight,
						innerRef: this.setTextAreaRef,
						onBlur: this.onBlur,
						onChange: this.onChange,
						onEditorResize: this.props.onEditorResize,
						onFocus: this.onFocus,
						onKeyDown: this.handleKeyDown,
						placeholder: n,
						value: o
					})), this.props.activeModalId === u.b && r.a.createElement(u.a, null), this.props.activeModalId === m.a.SWITCH_TO_RTE_MODAL_ID && r.a.createElement(m.b, {
						modalId: m.a.SWITCH_TO_RTE_MODAL_ID,
						onCancel: this.props.switchToRTEModalToggled,
						onConfirm: this.handleSwitchToRTEConfirm
					}))
				}
			}
			const N = r.a.memo(({
				isConverting: e,
				onClick: t
			}) => {
				const n = s.fbt._("Switch to Fancy Pants Editor", null, {
					hk: "1AKY7t"
				});
				return r.a.createElement(b.q, {
					priority: b.b.Plain,
					size: b.c.XS,
					onClick: t,
					Icon: e ? y : void 0,
					text: n
				})
			});
			t.a = w(P)
		},
		"./src/reddit/components/PostCreationForm/MediaInput/DropArea/index.m.less": function(e, t, n) {
			e.exports = {
				HiddenInput: "sU2P34us34ODfjtvAFHEh",
				hiddenInput: "sU2P34us34ODfjtvAFHEh",
				UploadButton: "_3O09Fh0CTb1KXH9g--pyTm",
				uploadButton: "_3O09Fh0CTb1KXH9g--pyTm",
				HamsterSmall: "_2O_N8Ef-BG5Cfd4rpYn2gC",
				hamsterSmall: "_2O_N8Ef-BG5Cfd4rpYn2gC",
				HamsterLarge: "wV8IXIxvKm8PPZrR4ID63",
				hamsterLarge: "wV8IXIxvKm8PPZrR4ID63",
				Container: "_1Ts5GUNze2r03Hs4YNM7R7",
				container: "_1Ts5GUNze2r03Hs4YNM7R7",
				DropArea: "_1U5lLS9mQzBY-ItvbtGGLz",
				dropArea: "_1U5lLS9mQzBY-ItvbtGGLz",
				DropAreaActive: "_3dk8Anard_IzanCLoEOxwY",
				dropAreaActive: "_3dk8Anard_IzanCLoEOxwY",
				DropAreaOver: "_2u00X-QMmF0nCuc0JgGiPG",
				dropAreaOver: "_2u00X-QMmF0nCuc0JgGiPG",
				Paragraph: "_23Ktfv_B7IB6GfAwZ1n5KM",
				paragraph: "_23Ktfv_B7IB6GfAwZ1n5KM",
				ErrorMsg: "_1g07w9noInEjzrHqFqXu7p",
				errorMsg: "_1g07w9noInEjzrHqFqXu7p",
				Box: "_2bMJxWQqwzcVG4QCyh3UhG",
				box: "_2bMJxWQqwzcVG4QCyh3UhG"
			}
		},
		"./src/reddit/components/PostCreationForm/MediaInput/ImageGalleryDrop/MultipleUploadStatusBar/index.m.less": function(e, t, n) {
			e.exports = {
				ControlRow: "XAYmQCRZd6pa1gK4J2Irv",
				controlRow: "XAYmQCRZd6pa1gK4J2Irv",
				OuterDivProgressBar: "_3lnXFUS1rk-i2bmQ9tBVAg",
				outerDivProgressBar: "_3lnXFUS1rk-i2bmQ9tBVAg",
				ProgressBar: "_2h9OzlkpNau2hE61muUCcM",
				progressBar: "_2h9OzlkpNau2hE61muUCcM",
				Status: "_2QlfNrUATpUf8fxWF3xLUc",
				status: "_2QlfNrUATpUf8fxWF3xLUc"
			}
		},
		"./src/reddit/components/PostCreationForm/MediaInput/ImageGalleryDrop/components/AddImageItem.m.less": function(e, t, n) {
			e.exports = {
				AddImageWrapper: "_3mOObaE2qUuGBwPZt06QMP",
				addImageWrapper: "_3mOObaE2qUuGBwPZt06QMP",
				AddImageItem: "_1PHeBCrOhYxisqmUW-NOTZ",
				addImageItem: "_1PHeBCrOhYxisqmUW-NOTZ",
				plusIcon: "_3fjztH0o3WW8ugsD8VUpdG",
				hiddenInput: "_8GGSjoMJRi3bIAaFgk5VT"
			}
		},
		"./src/reddit/components/PostCreationForm/MediaInput/ImageGalleryDrop/components/ImageItem.m.less": function(e, t, n) {
			e.exports = {
				GalleryMediaUpload: "_3cm8_J6ytCvL4Z0YkUO6fO",
				galleryMediaUpload: "_3cm8_J6ytCvL4Z0YkUO6fO",
				isDragging: "_1hQY_UY2EioccXnSHJuH2j",
				isSelected: "_3mV402dYSBG5F3rfKzCHih",
				isError: "_10Cb6hifpOfnmfdg7Zetit",
				galleryImage: "-_ofbVTDK5uSQ60HcXH2-",
				deleteButton: "_3611iw8TKLU1FFCTSMHMWl",
				deleteIcon: "_1RI3AZPuym8dOTJt-TRI38",
				showDeleteNormal: "_2LKMLYT_7bo_5rfh9705Pg"
			}
		},
		"./src/reddit/components/PostCreationForm/MediaInput/ImageGalleryDrop/components/ImageItemsWrapper.m.less": function(e, t, n) {
			e.exports = {
				itemsWrapper: "_3BGk3QOycswdTTmIh9R56y",
				sortableImages: "_7eeHxLESKnWVh8uefc7iN",
				imageStyles: "_2175QbehBw28eJRKOGrVKp",
				hoverMarker: "_1q50A238Zq0unVV8sFYvEm",
				pendingItem: "_1liymuUZSLP_05fSC0_0iQ"
			}
		},
		"./src/reddit/components/PostCreationForm/MediaInput/ImageGalleryDrop/components/InputWrapper.m.less": function(e, t, n) {
			e.exports = {
				inputWrapper: "_1ZgKdgcmpiQuMxVOb36gpi",
				inputStyles: "_3QhJ8Am-icOjVUrut4LpNH",
				urlInputStyles: "_2P6NoGE4s1hTODn5PMPuIh",
				charsCounter: "_18XDqj2Sr9Pi7101fkIdE3"
			}
		},
		"./src/reddit/components/PostCreationForm/MediaInput/ImageGalleryDrop/components/Layout.m.less": function(e, t, n) {
			e.exports = {
				Layout: "_3uExMaQ9CE8L0F97PE7ESO",
				layout: "_3uExMaQ9CE8L0F97PE7ESO",
				hero: "_3cjkwfQbHf5cGuN_2K1uvN",
				mainContent: "D_D1mksZjLSJKHZf-qFgh",
				sideMetaContent: "_3s8GQtCSn-VS8biCUpM7QQ",
				bottomContent: "_1ipt9uyZjJ4fiF29YsWqgy"
			}
		},
		"./src/reddit/components/PostCreationForm/MediaInput/ImageGalleryDrop/components/SelectedImage.m.less": function(e, t, n) {
			e.exports = {
				selectedImage: "_1HQ9Q4NlQY-2w_yLQXa4MW",
				pendingImage: "_16rNFI0ovowGxjX85OoDQ7"
			}
		},
		"./src/reddit/components/PostCreationForm/MediaInput/ImageGalleryDrop/index.m.less": function(e, t, n) {
			e.exports = {
				dropArea: "_37BTO6li-OWodKOMQsps09",
				isDropAreaActive: "OPoLiV8gJNj-kgaS3TA6s",
				isDropAreaOver: "_2dpUJvIRjH1lQlhWr9Ln7B",
				errorMessage: "_1geBZyOTOcY8e2hp9dLJBb"
			}
		},
		"./src/reddit/components/PostCreationForm/MediaInput/MediaUpload/Preview/index.m.less": function(e, t, n) {
			e.exports = {
				Img: "_2CZpGuT-0gMB2CW-1Z4Rzr",
				img: "_2CZpGuT-0gMB2CW-1Z4Rzr",
				BlurImg: "_3lXopXY4SQ5xn1DGFU-6mv",
				blurImg: "_3lXopXY4SQ5xn1DGFU-6mv",
				ImagePreview: "_1x86R_C1SXWhk5Ta6ZwgCE",
				imagePreview: "_1x86R_C1SXWhk5Ta6ZwgCE",
				VideoPreview: "_1qFo28RpDjnwvvZFYuoYw1",
				videoPreview: "_1qFo28RpDjnwvvZFYuoYw1",
				Component: "_32O_ZBzCA0KWydc-ydD4Ut",
				component: "_32O_ZBzCA0KWydc-ydD4Ut"
			}
		},
		"./src/reddit/components/PostCreationForm/MediaInput/MediaUpload/UploadStatusBar/index.m.less": function(e, t, n) {
			e.exports = {
				ControlRow: "_2UeBgPJSAh_VteJrmt29jr",
				controlRow: "_2UeBgPJSAh_VteJrmt29jr",
				Button: "mU3hHnDkWt1Fu4t0MzJ3D",
				button: "mU3hHnDkWt1Fu4t0MzJ3D",
				Status: "_2tgT4LseX3Xg9TNczoQt_8",
				status: "_2tgT4LseX3Xg9TNczoQt_8",
				Component: "_1ou_efVZQLBrztRrswvRdK",
				component: "_1ou_efVZQLBrztRrswvRdK"
			}
		},
		"./src/reddit/components/PostCreationForm/MediaInput/MediaUpload/index.m.less": function(e, t, n) {
			e.exports = {
				Wrapper: "_2WJ7xvGE_xrehqTKCrcVpN",
				wrapper: "_2WJ7xvGE_xrehqTKCrcVpN",
				UploadStatusBar: "_1cAEFWtInMytYP6NpKBxK7",
				uploadStatusBar: "_1cAEFWtInMytYP6NpKBxK7",
				Controls: "_2Hg3aAL1qjiKtlSICSWx59",
				controls: "_2Hg3aAL1qjiKtlSICSWx59",
				ThumbnailSelect: "_3Beo1Ag8mmirgP8ObHTty9",
				thumbnailSelect: "_3Beo1Ag8mmirgP8ObHTty9",
				Trash: "_18Z2AbfCvCglpgZoyExSaS",
				trash: "_18Z2AbfCvCglpgZoyExSaS"
			}
		},
		"./src/reddit/components/PostCreationForm/MediaInput/RemovePrompt/index.m.less": function(e, t, n) {
			e.exports = {
				Wrapper: "RbI4r-xLIZTGjyNNqMkc2",
				wrapper: "RbI4r-xLIZTGjyNNqMkc2",
				TitleRow: "_3KkK2UFvbWMkRb887z28Ay",
				titleRow: "_3KkK2UFvbWMkRb887z28Ay",
				DetailsContainer: "_3x1u7rU-TVemMtzZVifQk",
				detailsContainer: "_3x1u7rU-TVemMtzZVifQk",
				ButtonRow: "_1rR3d9OXZt1cL70vCFunZP",
				buttonRow: "_1rR3d9OXZt1cL70vCFunZP",
				CancelButton: "_2JpoeseNULOIs1m0HM_FkJ",
				cancelButton: "_2JpoeseNULOIs1m0HM_FkJ",
				ConfirmButton: "_1-56PBUj1A-mgJh4Uhz5Jd",
				confirmButton: "_1-56PBUj1A-mgJh4Uhz5Jd"
			}
		},
		"./src/reddit/components/PostCreationForm/MediaInput/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "_1UbcPNs4A8n5PIWX0H5sGt",
				container: "_1UbcPNs4A8n5PIWX0H5sGt"
			}
		},
		"./src/reddit/components/PostCreationForm/PostCreationFooter/PostSettings/Hint/index.m.less": function(e, t, n) {
			e.exports = {
				Info: "_2kALbPZ2PwY7w-w3Mtrxpl",
				info: "_2kALbPZ2PwY7w-w3Mtrxpl",
				TooltipContent: "c_vthvCq93OKrS5BGZYdr",
				tooltipContent: "c_vthvCq93OKrS5BGZYdr",
				Hint: "_2yxSY9022XfAJtQVxxa1lL",
				hint: "_2yxSY9022XfAJtQVxxa1lL",
				HoverTooltip: "_3M5yvX2tFyuTet4AEPmVDL",
				hoverTooltip: "_3M5yvX2tFyuTet4AEPmVDL",
				tooltipContentClass: "_2AY8LM9XpfuTjCMB4PF1mj"
			}
		},
		"./src/reddit/components/PostCreationForm/PostCreationFooter/PostSettings/index.m.less": function(e, t, n) {
			e.exports = {
				CheckboxInput: "rLLDF6zuY7gDPdOpDtryW",
				checkboxInput: "rLLDF6zuY7gDPdOpDtryW",
				ConnectAccountLink: "_2XixtsvkuzAkwuKe93t7Bd",
				connectAccountLink: "_2XixtsvkuzAkwuKe93t7Bd",
				Container: "_1WZBFo38dOAZ_-qyyA6sNh",
				container: "_1WZBFo38dOAZ_-qyyA6sNh",
				ContainerLeft: "ncWlnJtypP1_Mwohv06zd",
				containerLeft: "ncWlnJtypP1_Mwohv06zd",
				ContainerRight: "_1rdhEwGT1578MFV4zdgyXX",
				containerRight: "_1rdhEwGT1578MFV4zdgyXX",
				CheckboxText: "_1sBmqB8geWKIW5Nt8svFgc",
				checkboxText: "_1sBmqB8geWKIW5Nt8svFgc",
				Option: "_367d1mrPAvSzXPXQZfPXq5",
				option: "_367d1mrPAvSzXPXQZfPXq5",
				TextButton: "_5SJ8wEtj0ehde_UTuEUJL",
				textButton: "_5SJ8wEtj0ehde_UTuEUJL",
				TextBox: "_1TBGkOAQIuFnbqFv3ePDxT",
				textBox: "_1TBGkOAQIuFnbqFv3ePDxT",
				Wrapper: "_2CXYv7vwpCTLV6wKUwqkBz",
				wrapper: "_2CXYv7vwpCTLV6wKUwqkBz"
			}
		},
		"./src/reddit/components/PostCreationForm/PostCreationFooter/ScheduledTimeInfo/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "_3iy2yiZt_m40oq7tdW_klw",
				container: "_3iy2yiZt_m40oq7tdW_klw",
				replayIcon: "_2ks2fE4UUmcEWL1vQnR7wp"
			}
		},
		"./src/reddit/components/PostCreationForm/PostCreationFooter/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "_22Te0a5VxZnLITkTavQh95",
				container: "_22Te0a5VxZnLITkTavQh95"
			}
		},
		"./src/reddit/components/PostCreationForm/PostCreationHeader/index.m.less": function(e, t, n) {
			e.exports = {
				CreateLabel: "_3M6BmdyQcCEQZu-MylN14",
				createLabel: "_3M6BmdyQcCEQZu-MylN14",
				CountIndicator: "_3-lCASba1yl0jeRpeQ5jwm",
				countIndicator: "_3-lCASba1yl0jeRpeQ5jwm",
				LinkButton: "_3KQDVc4kBIwA5u7S9n99NQ",
				linkButton: "_3KQDVc4kBIwA5u7S9n99NQ",
				CreatePostHeader: "_1HWpiNu6dkOnZixxwDYTVJ",
				createPostHeader: "_1HWpiNu6dkOnZixxwDYTVJ"
			}
		},
		"./src/reddit/components/PostCreationForm/PostEditor/GovTypeSelector/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1kR_hX_PP5udhk-mtPuavx",
				currentSelection: "_1ZxmKr4SrkV__KWvI2gxKt",
				flexRow: "wIleinjtpdijasCWI_jCU",
				dropdownIcon: "oK9t9SNnOOCu-BraimNJE",
				newLabel: "_1pi_9nWsspppnkpr0Km1Hl",
				pollTypeIcon: "_1ZEeQaLhgbqgxX5zvvM2OO",
				text: "_3BIAW_hHKHgVyTnhczBT4A"
			}
		},
		"./src/reddit/components/PostCreationForm/PostEditor/index.m.less": function(e, t, n) {
			e.exports = {
				focusableContent: "Mb0x12Cu8JKRJRJCcf9_K",
				mPollBorder: "_3tqYz5xeUZo9em1LrxMZOB",
				mHasError: "_24RennTZzi_jyZ_kdBt9U2",
				govToggle: "_2VmXXwMxyQk230gkKvJTzF",
				pollCreator: "_3GqK73QyFc10CoXE2bReko"
			}
		},
		"./src/reddit/components/PostCreationForm/PostTitle/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3zkbHfhLbXp21FwGj_kNZV",
				inputWrapper: "_2wyvfFW3oNcCs5GVkmcJ8z",
				PostTitleInput: "_1ec_Oj5SWdypd8L-VELKg-",
				postTitleInput: "_1ec_Oj5SWdypd8L-VELKg-",
				mHasError: "_1dItJbdjTchVLwC0krCsr3",
				charsCounter: "_10vnCUi_uRLhIdKnPglWAw"
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
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/higherOrderComponents/asModal/index.tsx"),
				i = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				a = n("./src/reddit/constants/keycodes.ts"),
				c = n("./src/reddit/controls/Button/index.tsx"),
				d = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				l = n("./src/reddit/controls/TextButton/index.tsx"),
				u = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				m = n("./src/reddit/components/PostCreationForm/Prompt/PromptModal.m.less"),
				p = n.n(m),
				h = n("./src/lib/lessComponent.tsx");
			const b = h.a.wrapped(c.i, "PrimaryButton", p.a),
				f = h.a.wrapped(i.o, "ModalText", p.a);
			class g extends o.a.PureComponent {
				constructor() {
					super(...arguments), this.handleEscapeKey = e => {
						e.keyCode === a.a.Escape && this.props.onClose()
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
					return o.a.createElement(i.d, null, o.a.createElement(i.h, null, o.a.createElement(u.a, null, o.a.createElement(i.p, null, this.props.titleText), o.a.createElement(l.a, {
						onClick: this.props.onClose
					}, o.a.createElement(i.b, null)))), o.a.createElement(i.k, null, o.a.createElement(f, null, this.props.bodyText)), o.a.createElement(i.f, null, o.a.createElement(i.a, {
						onClick: this.props.onSecondaryAction
					}, t ? o.a.createElement(d.a, {
						sizePx: 16
					}) : this.props.secondaryButtonText), o.a.createElement(b, {
						onClick: this.props.onPrimaryAction
					}, e ? o.a.createElement(d.a, {
						sizePx: 16
					}) : this.props.primaryButtonText)))
				}
			}
			t.a = Object(r.a)(g)
		},
		"./src/reddit/components/PostCreationForm/Prompt/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var s, o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				a = n("./src/reddit/components/PostCreationForm/Prompt/PromptModal.tsx");
			! function(e) {
				e.LOAD_DRAFT_MODAL_ID = "POST_CREATION__LOAD_DRAFT_MODAL_ID", e.MAX_DRAFTS_MODAL_ID = "POST_CREATION__MAX_DRAFTS_MODAL_ID", e.SWITCH_TO_RTE_MODAL_ID = "MARKDOWN_EDITOR__SWITCH_TO_RTE_MODAL_ID"
			}(s || (s = {}));
			const c = {
					title: () => o.fbt._("Load draft", null, {
						hk: "VQ7SS"
					}),
					body: () => o.fbt._("Loading this draft will discard your current post.", null, {
						hk: "49vMci"
					}),
					confirm: () => o.fbt._("Load Draft", null, {
						hk: "29mFSs"
					}),
					cancel: () => o.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})
				},
				d = {
					title: () => o.fbt._("Save draft", null, {
						hk: "36SGct"
					}),
					body: () => o.fbt._("Looks like you’ve hit your max number of drafts. Please delete one to make room.", null, {
						hk: "4g9gOF"
					}),
					confirm: () => o.fbt._("Manage Drafts", null, {
						hk: "3a6SXJ"
					}),
					cancel: () => o.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})
				},
				l = {
					title: () => o.fbt._("Switch to Fancy Pants Editor", null, {
						hk: "22mr8J"
					}),
					body: () => o.fbt._("Switching to Fancy Pants Editor may result in a loss of content", null, {
						hk: "1cWryd"
					}),
					confirm: () => o.fbt._("Switch", null, {
						hk: "36pRzE"
					}),
					cancel: () => o.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})
				},
				u = {
					[s.LOAD_DRAFT_MODAL_ID]: c,
					[s.MAX_DRAFTS_MODAL_ID]: d,
					[s.SWITCH_TO_RTE_MODAL_ID]: l
				};
			class m extends i.a.PureComponent {
				constructor() {
					super(...arguments), this.onCancel = () => {
						this.props.onCancel(this.props.modalId)
					}, this.onConfirm = () => {
						this.props.onConfirm(this.props.modalId)
					}
				}
				render() {
					const {
						modalId: e
					} = this.props, t = u[e];
					return i.a.createElement(a.a, {
						bodyText: t.body(),
						secondaryButtonText: t.cancel(),
						primaryButtonText: t.confirm(),
						titleText: t.title(),
						onClose: this.onCancel,
						onPrimaryAction: this.onConfirm,
						onSecondaryAction: this.onCancel
					})
				}
			}
			t.b = m
		},
		"./src/reddit/components/PostCreationForm/RecaptchaOverlay/index.m.less": function(e, t, n) {
			e.exports = {
				OverlayWrapper: "_36HnnNoO8oBJDJnOgDiENG",
				overlayWrapper: "_36HnnNoO8oBJDJnOgDiENG",
				OverlayContent: "_3Ye_87oAzGPJr-7DymIhl0",
				overlayContent: "_3Ye_87oAzGPJr-7DymIhl0",
				ExplanationText: "_17qYQd3F9TbaKxu_Q0ssNq",
				explanationText: "_17qYQd3F9TbaKxu_Q0ssNq"
			}
		},
		"./src/reddit/components/PostCreationForm/SafeHarborText/index.m.less": function(e, t, n) {
			e.exports = {
				TextContainer: "_3sXblbCnnsbtHR0izSxX-Q",
				textContainer: "_3sXblbCnnsbtHR0izSxX-Q"
			}
		},
		"./src/reddit/components/PostCreationForm/SchedulePickerModal/DateInput/FallbackDateInput/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "_3A53iTDZ6H1L--Ky3qNCTO",
				container: "_3A53iTDZ6H1L--Ky3qNCTO",
				Select: "_2ryUqzbCnNhx8nbFXg9-c0",
				select: "_2ryUqzbCnNhx8nbFXg9-c0",
				Delimiter: "_1X2oFpzvpth9SVe2-xCR9D",
				delimiter: "_1X2oFpzvpth9SVe2-xCR9D"
			}
		},
		"./src/reddit/components/PostCreationForm/SchedulePickerModal/DateInput/index.m.less": function(e, t, n) {
			e.exports = {
				Input: "_1Css-vhkiry0RZJBBPrnRI",
				input: "_1Css-vhkiry0RZJBBPrnRI"
			}
		},
		"./src/reddit/components/PostCreationForm/SchedulePickerModal/DateInput/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return k
			}));
			var s = n("./node_modules/lodash/once.js"),
				o = n.n(s),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				a = n("./node_modules/lodash/range.js"),
				c = n.n(a),
				d = n("./src/reddit/components/PostCreationForm/SchedulePickerModal/DateInput/FallbackDateInput/index.m.less"),
				l = n.n(d),
				u = n("./src/lib/lessComponent.tsx");
			const m = u.a.div("Container", l.a),
				p = u.a.select("Select", l.a),
				h = u.a.span("Delimiter", l.a),
				b = 2018,
				f = e => {
					const t = new Date;
					return new Date(t.getFullYear(), e).toLocaleDateString([], {
						month: "short"
					})
				},
				g = e => {
					const [t, n, s] = e.split("-").map(Number);
					return {
						year: t,
						month: n - 1,
						day: s
					}
				};
			class C extends i.a.PureComponent {
				constructor() {
					super(...arguments), this.onChange = e => {
						const t = {
								...g(this.props.value),
								...e
							},
							{
								year: n,
								month: s,
								day: o
							} = t,
							r = new Date(Date.UTC(n, s, o)).toISOString().slice(0, 10);
						this.props.onChange(r)
					}, this.onChangeYear = e => {
						const t = +e.target.value;
						this.onChange({
							year: t
						})
					}, this.onChangeMonth = e => {
						const t = +e.target.value;
						this.onChange({
							month: t
						})
					}, this.onChangeDay = e => {
						const t = +e.target.value;
						this.onChange({
							day: t
						})
					}
				}
				render() {
					const {
						year: e,
						month: t,
						day: n
					} = g(this.props.value);
					return i.a.createElement(m, {
						className: this.props.className
					}, i.a.createElement(p, {
						onChange: this.onChangeMonth,
						value: t
					}, c()(12).map(e => i.a.createElement("option", {
						key: e,
						value: e
					}, f(e)))), i.a.createElement(h, null, "/"), i.a.createElement(p, {
						onChange: this.onChangeDay,
						value: n
					}, c()(1, 32).map(e => i.a.createElement("option", {
						key: e,
						value: e
					}, ("0" + e).slice(-2)))), i.a.createElement(h, null, "/"), i.a.createElement(p, {
						onChange: this.onChangeYear,
						value: e
					}, c()(b, b + 10).map(e => i.a.createElement("option", {
						key: e,
						value: e
					}, e))))
				}
			}
			var x = C,
				E = n("./src/reddit/components/PostCreationForm/SchedulePickerModal/DateInput/index.m.less"),
				v = n.n(E);

			function _() {
				return (_ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const O = o()(() => {
					const e = document.createElement("input");
					return e.setAttribute("type", "date"), e.setAttribute("value", "not-a-date"), "not-a-date" !== e.value
				}),
				y = u.a.input("Input", v.a);

			function k(e) {
				return O() ? i.a.createElement(y, _({
					type: "date"
				}, e, {
					onChange: t => e.onChange(t.target.value)
				})) : i.a.createElement(x, e)
			}
		},
		"./src/reddit/components/PostCreationForm/SchedulePickerModal/TimeInput/FallbackTimeInput/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "Q-u1MdpyF-DbsLmmseQmg",
				container: "Q-u1MdpyF-DbsLmmseQmg",
				Input: "_2UYlo-ZbVNGY329O9jwCzC",
				input: "_2UYlo-ZbVNGY329O9jwCzC",
				Delimiter: "_2a_r5Jp8FH3k8flNGKLy5f",
				delimiter: "_2a_r5Jp8FH3k8flNGKLy5f"
			}
		},
		"./src/reddit/components/PostCreationForm/SchedulePickerModal/TimeInput/index.m.less": function(e, t, n) {
			e.exports = {
				TimeInput: "gRgwdQKTQf9yT3db3ACAy",
				timeInput: "gRgwdQKTQf9yT3db3ACAy"
			}
		},
		"./src/reddit/components/PostCreationForm/SchedulePickerModal/TimeInput/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return k
			}));
			var s = n("./node_modules/lodash/once.js"),
				o = n.n(s),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				a = n("./node_modules/lodash/clamp.js"),
				c = n.n(a),
				d = n("./src/reddit/components/FocusableContent/index.tsx"),
				l = n("./src/reddit/components/PostCreationForm/SchedulePickerModal/TimeInput/FallbackTimeInput/index.m.less"),
				u = n.n(l),
				m = n("./src/lib/lessComponent.tsx");
			const p = m.a.wrapped(d.a, "Container", u.a),
				h = m.a.input("Input", u.a),
				b = m.a.span("Delimiter", u.a),
				f = e => ("0" + e).slice(-2),
				g = (e, t) => {
					const n = +e.slice(-2);
					if (Number.isInteger(n)) return n > t ? 0 : n
				};
			class C extends i.a.PureComponent {
				constructor(e) {
					super(e), this.callOnChange = () => {
						let e = c()(+this.state.hour, 0, 24);
						const t = c()(+this.state.minute, 0, 59);
						24 === e && t > 0 && (e = 0), this.setState({
							hour: e,
							minute: t
						});
						const n = `${f(e)}:${f(t)}`;
						this.props.onChange(n)
					}, this.onChangeHour = e => {
						const t = g(e.target.value, 24);
						void 0 !== t && this.setState({
							hour: t
						}, this.callOnChange)
					}, this.onChangeMinute = e => {
						const t = g(e.target.value, 59);
						void 0 !== t && this.setState({
							minute: t
						}, this.callOnChange)
					}, this.onHourInputBlur = () => this.setState({
						isHourInputFocused: !1
					}), this.onHourInputFocus = () => this.setState({
						isHourInputFocused: !0
					}), this.onMinuteInputBlur = () => this.setState({
						isMinuteInputFocused: !1
					}), this.onMinuteInputFocus = () => this.setState({
						isMinuteInputFocused: !0
					});
					const [t, n] = e.value.split(":").map(Number);
					this.state = {
						hour: t,
						minute: n,
						isHourInputFocused: !1,
						isMinuteInputFocused: !1
					}
				}
				componentWillReceiveProps(e) {
					const [t, n] = e.value.split(":").map(Number);
					this.setState({
						hour: t,
						minute: n
					})
				}
				render() {
					const e = this.state.isHourInputFocused || this.state.isMinuteInputFocused;
					return i.a.createElement(p, {
						className: this.props.className,
						isFocused: e
					}, i.a.createElement(h, {
						type: "number",
						onChange: this.onChangeHour,
						onFocus: this.onHourInputFocus,
						onBlur: this.onHourInputBlur,
						value: f(this.state.hour)
					}), i.a.createElement(b, null, ":"), i.a.createElement(h, {
						type: "number",
						onChange: this.onChangeMinute,
						onFocus: this.onMinuteInputFocus,
						onBlur: this.onMinuteInputBlur,
						value: f(this.state.minute)
					}))
				}
			}
			var x = C,
				E = n("./src/reddit/components/PostCreationForm/SchedulePickerModal/TimeInput/index.m.less"),
				v = n.n(E);

			function _() {
				return (_ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const O = o()(() => {
					const e = document.createElement("input");
					return e.setAttribute("type", "time"), e.setAttribute("value", "not-a-time"), "not-a-time" !== e.value
				}),
				y = m.a.input("TimeInput", v.a);

			function k(e) {
				return O() ? i.a.createElement(y, _({
					type: "time"
				}, e, {
					onChange: t => e.onChange(t.target.value)
				})) : i.a.createElement(x, e)
			}
		},
		"./src/reddit/components/PostCreationForm/SchedulePickerModal/TimezoneSelector/index.m.less": function(e, t, n) {
			e.exports = {
				select: "_1gQeiuYndtyKo6Or5iS8xL"
			}
		},
		"./src/reddit/components/PostCreationForm/SchedulePickerModal/TimezoneSelector/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/loadWithRetries/index.ts"),
				a = n("./src/reddit/helpers/scheduledPosts/index.ts"),
				c = n("./src/reddit/components/PostCreationForm/SchedulePickerModal/TimezoneSelector/index.m.less"),
				d = n.n(c);
			const l = e => {
				const t = e.map(a.d);
				return t.sort((e, t) => {
					const n = -1440,
						{
							offset: s = n
						} = e,
						{
							offset: o = n
						} = t;
					return o - s || (e.displayText < t.displayText ? -1 : 1) || 0
				}), t
			};
			class u extends o.a.PureComponent {
				constructor(e) {
					super(e), this.onSelect = e => {
						const t = e.target.value;
						this.props.onChange(t)
					};
					const t = u.cachedTimezoneOptions || l([this.props.selectedTimezoneName]);
					this.state = {
						timezoneOptions: t
					}
				}
				async loadTimezones() {
					const e = (await Object(i.a)(() => n.e("TimezoneList").then(n.bind(null, "./src/lib/timezone/timezoneList.ts")))).default,
						t = l(e);
					this.setState({
						timezoneOptions: t
					}), u.cachedTimezoneOptions = t
				}
				componentDidMount() {
					u.cachedTimezoneOptions || this.loadTimezones()
				}
				render() {
					return o.a.createElement("select", {
						onChange: this.onSelect,
						value: this.props.selectedTimezoneName,
						className: Object(r.a)(d.a.select, this.props.className)
					}, this.state.timezoneOptions.map(({
						name: e,
						displayText: t
					}) => o.a.createElement("option", {
						key: e,
						value: e
					}, t)))
				}
			}
			t.a = u
		},
		"./src/reddit/components/PostCreationForm/SchedulePickerModal/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "ppLwDvFzc7jVTiV_5euUj",
				container: "ppLwDvFzc7jVTiV_5euUj",
				Content: "_3VbwtRsayHUBLVMtjkul4u",
				content: "_3VbwtRsayHUBLVMtjkul4u",
				TitleRow: "_2aRE3m6KuLAhRIDmdmFKaY",
				titleRow: "_2aRE3m6KuLAhRIDmdmFKaY",
				Hr: "_1aShcxrllO1loaDr49TUUo",
				hr: "_1aShcxrllO1loaDr49TUUo",
				TimeInput: "_1bu7h4vK0WEgtRzSz-_mbA",
				timeInput: "_1bu7h4vK0WEgtRzSz-_mbA",
				TimeSelectionRow: "BUT684iT0_upDm6a1x4q_",
				timeSelectionRow: "BUT684iT0_upDm6a1x4q_",
				RadioOptionContent: "_3Ry1zpEULyeAACzRNZgIHN",
				radioOptionContent: "_3Ry1zpEULyeAACzRNZgIHN",
				OptionDetails: "_3imVLMudY3hxD1tq8KO6MB",
				optionDetails: "_3imVLMudY3hxD1tq8KO6MB",
				RadioInput: "_3VPprBv9bGCEm-hzjVWKmd",
				radioInput: "_3VPprBv9bGCEm-hzjVWKmd",
				RadioOption: "V4Tm9i9X2Co6LU8ez1zlw",
				radioOption: "V4Tm9i9X2Co6LU8ez1zlw",
				Delimiter: "_2bajvlJVcTANoHFRcmq7lu",
				delimiter: "_2bajvlJVcTANoHFRcmq7lu",
				Footer: "_3KeMI-XaG-5bILTvrCkaGS",
				footer: "_3KeMI-XaG-5bILTvrCkaGS",
				CancelButton: "_2NvAutu3QQJ9DwGHa83msC",
				cancelButton: "_2NvAutu3QQJ9DwGHa83msC",
				DeleteButton: "_3mKiK6bFRKi6y6Wkk1xLyp",
				deleteButton: "_3mKiK6bFRKi6y6Wkk1xLyp",
				ErrorMessage: "ZK5-SDSIvd4eGlmmbaRoO",
				errorMessage: "ZK5-SDSIvd4eGlmmbaRoO",
				ClearIcon: "E0CXpIVd8SDvRSwZFAmCn",
				clearIcon: "E0CXpIVd8SDvRSwZFAmCn"
			}
		},
		"./src/reddit/components/PostCreationForm/SchedulePickerModal/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				i = n("./src/higherOrderComponents/asModal/index.tsx"),
				a = n("./src/lib/constants/index.ts"),
				c = n("./src/lib/lessComponent.tsx"),
				d = n("./src/lib/timezone/index.ts"),
				l = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				u = n("./src/reddit/components/PostCreationForm/SchedulePickerModal/utils.ts"),
				m = n("./src/reddit/components/TrackingHelper/index.tsx"),
				p = n("./src/reddit/controls/Button/index.tsx"),
				h = n("./src/reddit/controls/RadioInput/index.tsx"),
				b = n("./src/reddit/controls/RadioInput/RadioOption/index.tsx"),
				f = n("./src/reddit/helpers/scheduledPosts/index.ts"),
				g = n("./src/reddit/helpers/trackers/postEvent.ts"),
				C = n("./src/reddit/icons/svgs/Clear/index.tsx"),
				x = n("./src/reddit/layout/row/Inline/index.tsx"),
				E = n("./src/reddit/models/PostCreationForm/index.ts"),
				v = n("./src/reddit/components/PostCreationForm/SchedulePickerModal/DateInput/index.tsx"),
				_ = n("./src/reddit/components/PostCreationForm/SchedulePickerModal/TimeInput/index.tsx"),
				O = n("./src/reddit/components/PostCreationForm/SchedulePickerModal/TimezoneSelector/index.tsx"),
				y = n("./src/reddit/components/PostCreationForm/SchedulePickerModal/index.m.less"),
				k = n.n(y);
			const j = 240,
				S = () => {
					const e = new Date;
					e.setMinutes(60);
					const t = Object(d.g)(e);
					return e.setMinutes(e.getMinutes() + j), {
						startDate: t,
						endDate: Object(d.g)(e),
						submitTime: E.i.Now,
						timezoneName: Object(d.b)() || d.a
					}
				},
				I = c.a.div("Container", k.a),
				T = c.a.div("Content", k.a),
				w = c.a.div("TitleRow", k.a),
				P = c.a.hr("Hr", k.a),
				N = c.a.wrapped(_.a, "TimeInput", k.a),
				M = c.a.div("TimeSelectionRow", k.a),
				D = c.a.div("RadioOptionContent", k.a),
				L = c.a.span("OptionDetails", k.a),
				R = c.a.wrapped(h.a, "RadioInput", k.a),
				F = c.a.wrapped(b.a, "RadioOption", k.a),
				A = c.a.span("Delimiter", k.a),
				B = c.a.wrapped(l.f, "Footer", k.a),
				U = c.a.wrapped(p.l, "CancelButton", k.a),
				V = c.a.wrapped(p.l, "DeleteButton", k.a),
				W = c.a.div("ErrorMessage", k.a),
				G = c.a.wrapped(C.a, "ClearIcon", k.a);
			class H extends r.a.PureComponent {
				constructor(e) {
					super(e), this.currentTimezone = Object(d.b)(), this.maxDate = Object(u.a)(), this.buildEventSchedule = () => ({
						startDate: Object(f.a)(this.state.startDate, this.state.startTime),
						endDate: Object(f.a)(this.state.endDate, this.state.endTime),
						timezoneName: this.state.timezoneName,
						submitTime: this.state.submitTime
					}), this.onStartDateChange = e => {
						this.setState({
							startDate: e
						}, this.updateEndDatetime)
					}, this.onStartTimeChange = e => {
						this.setState({
							startTime: e
						}, this.updateEndDatetime)
					}, this.updateEndDatetime = () => {
						if (this.state.isEndTimeTouched) return;
						const {
							startDate: e,
							startTime: t
						} = this.state;
						if (e && t) {
							const n = Object(d.f)(Object(f.a)(e, t));
							n.setMinutes(n.getMinutes() + j);
							const [s, o] = Object(f.i)(Object(d.g)(n));
							this.setState({
								endDate: s,
								endTime: o
							})
						}
					}, this.onEndDateChange = e => {
						this.setState({
							endDate: e,
							isEndTimeTouched: !0
						})
					}, this.onEndTimeChange = e => {
						this.setState({
							endTime: e,
							isEndTimeTouched: !0
						})
					}, this.onTimezoneChange = e => {
						this.setState({
							timezoneName: e
						})
					}, this.onSubmitTimeChange = e => {
						this.setState({
							submitTime: e
						})
					}, this.onApplyClick = () => {
						const e = this.buildEventSchedule();
						this.props.sendEvent(Object(g.b)(e)), this.props.onChange(e), this.props.onClose()
					}, this.onDeleteButtonClick = () => {
						const e = this.buildEventSchedule();
						this.props.sendEvent(Object(g.d)(e)), this.props.onChange(null), this.props.onClose()
					}, this.onCancelButtonClick = () => {
						this.props.sendEvent(Object(g.c)()), this.props.onClose()
					}, this.getValidationError = () => {
						const {
							endDate: e,
							endTime: t,
							startDate: n,
							startTime: o
						} = this.state;
						if (!(n && o && e && t)) return s.fbt._("Please enter valid start and end time", null, {
							hk: "2IyBsT"
						});
						const r = Object(d.f)(Object(f.a)(n, o)),
							i = Object(d.f)(Object(f.a)(e, t));
						return r < (this.currentTimezone === this.state.timezoneName ? new Date : new Date(Date.now() - a.x)) ? s.fbt._("Event start time needs to be in the future", null, {
							hk: "3oL3LM"
						}) : i < r ? s.fbt._("End time must be after start time", null, {
							hk: "3C3TKE"
						}) : null
					}, this.getSubmitAtLabel = () => {
						const {
							startDate: e,
							startTime: t
						} = this.state;
						return Object(f.b)(e, t)
					}, this.renderSubmitTimeRadio = () => r.a.createElement(R, {
						value: this.state.submitTime,
						name: "submit_time",
						onChange: this.onSubmitTimeChange
					}, r.a.createElement(F, {
						showButton: !0,
						value: E.i.Now
					}, r.a.createElement(D, null, r.a.createElement("span", null, s.fbt._("Submit post now", null, {
						hk: "2ueTnc"
					})), r.a.createElement(L, null, s.fbt._("Submitting post before your event allows people to follow your event and come back at the event time", null, {
						hk: "3LTavv"
					})))), r.a.createElement(F, {
						showButton: !0,
						value: E.i.AtEventTime
					}, r.a.createElement(D, null, r.a.createElement("span", null, this.getSubmitAtLabel()), r.a.createElement(L, null, s.fbt._("This post will be editable and hidden from people visiting your community until the event starts.", null, {
						hk: "1fGKlZ"
					})))));
					const t = e.schedule || S(),
						[n, o] = Object(f.i)(t.startDate),
						[i, c] = Object(f.i)(t.endDate);
					this.state = {
						startDate: n,
						startTime: o,
						endDate: i,
						endTime: c,
						timezoneName: t.timezoneName,
						submitTime: t.submitTime,
						isEndTimeTouched: !!e.schedule
					}
				}
				componentDidMount() {
					this.props.sendEvent(Object(g.e)())
				}
				render() {
					const {
						shouldShowSubmitTime: e
					} = this.props, t = this.getValidationError();
					return r.a.createElement(I, null, r.a.createElement(T, null, r.a.createElement(w, null, s.fbt._("When is the event?", null, {
						hk: "2fTD7f"
					})), r.a.createElement(M, null, s.fbt._("{start time}{to}{end time}", [s.fbt._param("start time", r.a.createElement("fieldset", null, r.a.createElement("legend", null, s.fbt._("Start time", null, {
						hk: "3nqplI"
					})), r.a.createElement(v.a, {
						max: this.maxDate,
						onChange: this.onStartDateChange,
						value: this.state.startDate
					}), r.a.createElement(N, {
						onChange: this.onStartTimeChange,
						value: this.state.startTime
					}))), s.fbt._param("to", r.a.createElement(A, null, s.fbt._("to", null, {
						hk: "2tWTBK"
					}))), s.fbt._param("end time", r.a.createElement("fieldset", {
						style: {
							opacity: this.state.isEndTimeTouched ? 1 : .5
						}
					}, r.a.createElement("legend", null, s.fbt._("End time (optional)", null, {
						hk: "2XKdsz"
					})), r.a.createElement(v.a, {
						max: this.maxDate,
						onChange: this.onEndDateChange,
						value: this.state.endDate
					}), r.a.createElement(N, {
						onChange: this.onEndTimeChange,
						value: this.state.endTime
					})))], {
						hk: "3MRWfF"
					})), r.a.createElement("div", null, r.a.createElement("label", null, s.fbt._("Time zone", null, {
						hk: "3F7Bko"
					}), r.a.createElement(O.a, {
						selectedTimezoneName: this.state.timezoneName,
						onChange: this.onTimezoneChange
					}))), e && r.a.createElement(r.a.Fragment, null, r.a.createElement(P, null), r.a.createElement("fieldset", null, r.a.createElement("legend", null, s.fbt._("When do you want to submit this post?", null, {
						hk: "3kBgxg"
					})), this.renderSubmitTimeRadio()))), r.a.createElement(B, null, r.a.createElement(x.a, null, this.props.schedule && this.props.shouldShowDeleteButton && r.a.createElement(V, {
						onClick: this.onDeleteButtonClick
					}, r.a.createElement(G, null), s.fbt._("Clear", null, {
						hk: "npkgK"
					})), r.a.createElement(U, {
						onClick: this.onCancelButtonClick
					}, s.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), r.a.createElement(p.i, {
						onClick: this.onApplyClick,
						disabled: !!t
					}, s.fbt._("Apply", null, {
						hk: "2TE8JD"
					}))), t && r.a.createElement(W, null, t)))
				}
			}
			t.default = Object(i.a)(Object(m.c)(H))
		},
		"./src/reddit/components/PostCreationForm/SchedulePickerModal/utils.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./src/lib/timezone/index.ts"),
				o = n("./src/reddit/helpers/scheduledPosts/index.ts");
			const r = () => {
				const e = new Date;
				e.setFullYear(e.getFullYear() + 1);
				const [t] = Object(o.i)(Object(s.g)(e));
				return t
			}
		},
		"./src/reddit/components/PostCreationForm/SubredditChangePrompt/index.m.less": function(e, t, n) {
			e.exports = {
				Wrapper: "_1elQqozWN8v7kNb3-2JJnv",
				wrapper: "_1elQqozWN8v7kNb3-2JJnv",
				TitleRow: "_21ZJQglqJoGvKPVrE1g6y4",
				titleRow: "_21ZJQglqJoGvKPVrE1g6y4",
				DetailsContainer: "_2BCyPW29meUC7c2ZvAIF6O",
				detailsContainer: "_2BCyPW29meUC7c2ZvAIF6O",
				ButtonRow: "_3-rBvo8wMI4G0IKFdRF5et",
				buttonRow: "_3-rBvo8wMI4G0IKFdRF5et",
				CancelButton: "_12whVTuRHmPsEJZdopRGQN",
				cancelButton: "_12whVTuRHmPsEJZdopRGQN",
				ConfirmButton: "ERUkO2xr-Jto7MQoScSJG",
				confirmButton: "ERUkO2xr-Jto7MQoScSJG"
			}
		},
		"./src/reddit/components/PostCreationForm/Tabs/index.m.less": function(e, t, n) {
			e.exports = {
				Component: "_2rS9BNjL3uxg61zOx2zyOH",
				component: "_2rS9BNjL3uxg61zOx2zyOH",
				PollIcon: "_1wjrzsZm0XSDAKK8PykcNE",
				pollIcon: "_1wjrzsZm0XSDAKK8PykcNE",
				Container: "_3vyt9N_0jfZuOwByiKDi9x",
				container: "_3vyt9N_0jfZuOwByiKDi9x",
				Stretched: "zvJD12Xx7AKjzhwAslrBy",
				stretched: "zvJD12Xx7AKjzhwAslrBy",
				Tab: "Z1w8VkpQ23E1Wdq_My3U4",
				tab: "Z1w8VkpQ23E1Wdq_My3U4",
				isActive: "j1Q89sB76i7EBRDhnQhlr"
			}
		},
		"./src/reddit/components/PostCreationForm/index.m.less": function(e, t, n) {
			e.exports = {
				FormContent: "_3w_665DK_NH7yIsRMuZkqB",
				formContent: "_3w_665DK_NH7yIsRMuZkqB",
				CrosspostBox: "QQaE6143-4kvEuZSTBX7_",
				crosspostBox: "QQaE6143-4kvEuZSTBX7_",
				FormContainer: "HOFZo2X7Fr6JVBztpsByj",
				formContainer: "HOFZo2X7Fr6JVBztpsByj",
				TabContent: "_1zq6UabIEJJ-z9grsiCJY7",
				tabContent: "_1zq6UabIEJJ-z9grsiCJY7",
				PostingGuidelines: "_2vcPDTxC76PPQ70AdMkN0C",
				postingGuidelines: "_2vcPDTxC76PPQ70AdMkN0C"
			}
		},
		"./src/reddit/components/PostFlairPicker/helpers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return c
			})), n.d(t, "a", (function() {
				return d
			})), n.d(t, "b", (function() {
				return l
			}));
			var s = n("./node_modules/lodash/isEqual.js"),
				o = n.n(s),
				r = n("./src/reddit/constants/flair.ts"),
				i = n("./src/reddit/helpers/flair.ts"),
				a = n("./src/reddit/models/Flair/index.ts");
			const c = e => (e || []).find(e => e.type === a.f.Text || e.type === a.f.Image || e.type === a.f.Richtext);
			var d;
			! function(e) {
				e[e.InvalidTemplate = 0] = "InvalidTemplate", e[e.NoChanges = 1] = "NoChanges", e[e.NotSelected = 2] = "NotSelected", e[e.TextIsNotAllowed = 3] = "TextIsNotAllowed", e[e.TextIsEmpty = 4] = "TextIsEmpty", e[e.TextIsTooLong = 5] = "TextIsTooLong"
			}(d || (d = {}));
			const l = (e, t, n) => {
				if (n && !t) return {
					canSave: !0
				};
				if (!t) return {
					canSave: !1,
					reason: d.NotSelected
				};
				const s = e && t.templateId ? e[t.templateId] : void 0;
				if (!s) return {
					canSave: !1,
					reason: d.InvalidTemplate
				};
				const a = Object(i.g)(t).length;
				return 0 === a ? {
					canSave: !1,
					reason: d.TextIsEmpty
				} : a > r.g ? {
					canSave: !1,
					reason: d.TextIsTooLong
				} : Object(i.n)(t) && !Object(i.q)(s) ? {
					canSave: !1,
					reason: d.TextIsNotAllowed
				} : o()(n, t) ? {
					canSave: !1,
					reason: d.NoChanges
				} : {
					canSave: !0
				}
			}
		},
		"./src/reddit/components/PostFlairPicker/index.m.less": function(e, t, n) {
			e.exports = {
				buttonsRow: "cF9DU_4WDAKS4gs43ct2_",
				clearButton: "_3vB6Y9PiwJ0YV6c9MGbDwT"
			}
		},
		"./src/reddit/components/PostFlairPicker/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return k
			}));
			var s, o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				d = n("./src/reddit/components/TrackingHelper/index.tsx"),
				l = n("./src/higherOrderComponents/asModal/index.tsx"),
				u = n("./src/reddit/actions/modal.ts"),
				m = n("./src/reddit/components/FlairPickerTitle/index.tsx"),
				p = n("./src/reddit/components/FlairPickerWrapper/index.tsx"),
				h = n("./src/reddit/components/FlairPreview/index.tsx"),
				b = n("./src/reddit/components/FlairSearch/index.tsx"),
				f = n("./src/reddit/controls/Button/index.tsx"),
				g = n("./src/reddit/models/Flair/index.ts"),
				C = n("./src/reddit/selectors/moderatorPermissions.ts"),
				x = n("./src/reddit/selectors/postFlair.ts"),
				E = n("./src/reddit/selectors/subreddit.ts"),
				v = n("./src/reddit/selectors/telemetry.ts"),
				_ = n("./src/reddit/components/PostFlairPicker/helpers.ts"),
				O = n("./src/reddit/components/PostFlairPicker/index.m.less"),
				y = n.n(O);
			! function(e) {
				e.UNSET = "unset", e.MOD_FLATLIST = "postModFlatlist", e.POST_OVERFLOW = "postOverlay"
			}(s || (s = {}));
			const k = (e, t = !1, n = s.UNSET) => `PostFlair__Modal-[postId: ${e}]-isOverlay[${t}]-position[${n}]`,
				j = Object(c.c)({
					flairData: x.d,
					subreddit: E.T,
					isMod: (e, t) => !!Object(C.k)(e, t)
				});
			class S extends i.a.Component {
				constructor(e) {
					super(e), this.getTrackingNoun = (e, t) => this.props.isMod ? e : t, this.onApply = () => {
						const {
							previewFlair: e
						} = this.state, t = e && e.templateId;
						this.props.onFlairChanged({
							previewFlair: e,
							selectedTemplateId: t
						}), this.props.closeModal && this.props.closeModal(), this.track(this.getTrackingNoun("flairadd_mod", "flairadd_user"))
					}, this.onClear = () => this.setSelectedFlair(null), this.setSelectedFlair = e => {
						this.setState({
							previewFlair: e
						})
					}, this.track = e => this.props.sendEvent(t => ({
						source: "post_flair_picker",
						action: "click",
						noun: e,
						subreddit: Object(v.subredditById)(t, this.props.subredditId)
					}));
					const t = Object(_.c)(e.flairs);
					this.state = {
						previewFlair: t || null
					}
				}
				canSave() {
					const {
						templates: e
					} = this.props.flairData, {
						previewFlair: t
					} = this.state, n = Object(_.c)(this.props.flairs) || null;
					return Object(_.b)(e, t, n)
				}
				render() {
					const {
						props: e
					} = this, {
						previewFlair: t
					} = this.state, {
						className: n,
						flairData: s,
						subreddit: r
					} = e, a = r.displayText, {
						templates: c,
						templateIds: d
					} = s, {
						canSave: l
					} = this.canSave();
					return i.a.createElement(p.a, {
						className: n
					}, i.a.createElement(m.a, {
						onClosePressed: e.closeModal,
						title: o.fbt._("Select {subredditName} flair", [o.fbt._param("subredditName", a)], {
							hk: "1lDMWS"
						})
					}), i.a.createElement(h.a, {
						flair: t,
						flairTemplateType: g.d.LinkFlair,
						placeholderText: o.fbt._("Post Title", null, {
							hk: "43RsbC"
						})
					}), i.a.createElement(b.a, {
						flair: t,
						flairTemplateType: g.d.LinkFlair,
						subredditId: r.id,
						templates: c,
						templateIds: d,
						onChange: this.setSelectedFlair
					}), i.a.createElement("div", {
						className: y.a.buttonsRow
					}, i.a.createElement(f.i, {
						disabled: !l,
						onClick: this.onApply
					}, o.fbt._("Apply", null, {
						hk: "3mAjVQ"
					})), i.a.createElement(f.l, {
						className: y.a.clearButton,
						onClick: this.onClear
					}, o.fbt._("Clear Flair", null, {
						hk: "3jvT0B"
					}))))
				}
			}
			const I = Object(a.b)(j, (e, t) => ({
				closeModal: () => e(Object(u.i)(t.modalId))
			}))(S);
			t.a = Object(l.a)(Object(d.c)(I))
		},
		"./src/reddit/components/PostTitle/index.m.less": function(e, t, n) {
			e.exports = {
				outboundLinkIcon: "qgDkGQIoFEpMMeNtfI0BY",
				pollMeta: "FKej75-i0z1XubMqeVh9Q",
				styledLink: "SQnoC3ObvgnGjWt90zD9Z",
				isVisitedEnabled: "_2INHSNB8V5eaWp4P0rY_mE",
				Title: "_2SdHzo12ISmrC8H86TgSCp",
				title: "_2SdHzo12ISmrC8H86TgSCp",
				titleContainer: "y8HYJ-y_lTUHkQIc1mdCq",
				isNoWrap: "_2_QBmCTk6VD4M3dvKqXD23",
				postTitleVisibility: "_1hLrLjnE1G_RBCNcN9MVQf",
				ExtraLarge: "_29WrubtjAcKqzJSPdQqQ4h",
				extraLarge: "_29WrubtjAcKqzJSPdQqQ4h",
				Large: "_3wqmjmv3tb_k-PROt7qFZe",
				large: "_3wqmjmv3tb_k-PROt7qFZe",
				Medium: "_1zpZYP8cFNLfLDexPY65Y7",
				medium: "_1zpZYP8cFNLfLDexPY65Y7",
				Small: "uWdXen_41bh0iwLrgzFkc",
				small: "uWdXen_41bh0iwLrgzFkc",
				ExtraSmall: "_1aqE18-N18ZIRlkE1wa7DP",
				extraSmall: "_1aqE18-N18ZIRlkE1wa7DP",
				Component: "_2FCtq-QzlfuN-SwVMUZMM3",
				component: "_2FCtq-QzlfuN-SwVMUZMM3"
			}
		},
		"./src/reddit/components/PostTitle/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return P
			})), n.d(t, "a", (function() {
				return V
			}));
			var s = n("./node_modules/polished/dist/polished.es.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/ads/index.ts"),
				l = n("./src/lib/classNames/index.ts"),
				u = n("./src/reddit/components/TrackingHelper/index.tsx"),
				m = n("./src/reddit/contexts/PageLayer/index.tsx"),
				p = n("./src/reddit/controls/OutboundLink/index.tsx"),
				h = n("./src/reddit/controls/OutboundLink/styled.tsx"),
				b = n("./src/lib/permalinkToOverlayLocation/index.ts"),
				f = n("./src/reddit/helpers/flair.ts"),
				g = n("./src/reddit/helpers/path/index.ts"),
				C = n("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				x = n("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				E = n("./src/reddit/models/Flair/index.ts"),
				v = n("./src/reddit/models/Media/index.ts"),
				_ = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				O = n("./src/lib/getShortenedLink.ts"),
				y = n("./src/reddit/components/FlairWrapper/index.tsx"),
				k = n("./node_modules/fbt/lib/FbtPublic.js"),
				j = n("./src/lib/prettyPrintNumber/index.ts"),
				S = n("./src/reddit/components/Poll/MetaData/index.tsx"),
				I = n("./src/reddit/components/Governance/PostPollMetaData/index.m.less"),
				T = n.n(I);
			const w = Object(c.c)({
				poll: (e, t) => e.polls.models[t.pollId],
				resultsByVoters: (e, t) => e.polls.results.byVoters[t.pollId]
			});
			var P, N = Object(i.b)(w)((function(e) {
					const {
						poll: t,
						resultsByVoters: n
					} = e, s = n ? n.totalVotes : "0";
					return r.a.createElement("div", {
						className: Object(l.a)(e.className, T.a.proposalMetaData)
					}, r.a.createElement("span", null, k.fbt._({
						"*": "{count} votes",
						_1: "{count} vote"
					}, [k.fbt._param("count", Object(j.a)(s)), k.fbt._plural(parseInt(s))], {
						hk: "4rP1VK"
					})), t && r.a.createElement(S.a, {
						className: T.a.proposalMetaDataTime,
						poll: t
					}))
				})),
				M = n("./src/reddit/components/SEOTitle/index.tsx"),
				D = n("./src/reddit/selectors/user.ts"),
				L = n("./src/reddit/components/PostTitle/index.m.less"),
				R = n.n(L),
				F = n("./src/config.ts"),
				A = n("./src/reddit/hooks/usePostContext.ts"),
				B = n("./src/reddit/hooks/useTheme.ts");

			function U() {
				return (U = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}! function(e) {
				e[e.ExtraLarge = 0] = "ExtraLarge", e[e.Large = 1] = "Large", e[e.Medium = 2] = "Medium", e[e.Small = 3] = "Small", e[e.ExtraSmall = 4] = "ExtraSmall"
			}(P || (P = {}));
			const V = ({
					size: e,
					titleColor: t,
					titleType: n,
					nowrap: s,
					children: o,
					className: i,
					redditStyle: a
				}) => {
					const c = Object(B.a)();
					let d = "";
					switch (e) {
						case P.ExtraLarge:
							d = R.a.ExtraLarge;
							break;
						case P.Large:
							d = R.a.Large;
							break;
						case P.Medium:
							d = R.a.Medium;
							break;
						case P.Small:
							d = R.a.Small;
							break;
						case P.ExtraSmall:
							d = R.a.ExtraSmall
					}
					return r.a.createElement("div", {
						className: Object(l.a)(R.a.Title, i, d, {
							[R.a.isNoWrap]: s
						}),
						style: {
							"--posttitletextcolor": t || Object(_.a)({
								redditStyle: a,
								theme: c
							}).titleText
						}
					}, n ? r.a.createElement(M.b, {
						type: n
					}, o) : o)
				},
				W = ({
					className: e,
					disableVisited: t,
					titleColor: n,
					children: s,
					...o
				}) => r.a.createElement(a.a, U({}, o, {
					className: Object(l.a)(e, R.a.styledLink, {
						[R.a.isVisitedEnabled]: !t
					})
				}), s),
				G = ({
					disableVisited: e,
					nowrap: t,
					className: n,
					children: s
				}) => r.a.createElement("div", {
					className: Object(l.a)(R.a.titleContainer, n, {
						[R.a.isNoWrap]: t,
						[R.a.isVisitedEnabled]: !e
					})
				}, s),
				H = Object(c.c)({
					flairPosition: (e, {
						pageLayer: t
					}) => Object(m.p)(e, {
						pageLayer: t
					}),
					shouldOpenPostInNewTab: D.bb
				}),
				q = e => {
					const {
						post: t,
						subreddit: n
					} = e, {
						isSponsored: s
					} = t;
					if (e.isCommentsPage && !e.isCommentPermalink && !e.shouldLinkWrap) return r.a.createElement(G, {
						nowrap: e.nowrap
					}, r.a.createElement(K, e));
					if (e.isCommentsPageAd && t.source && t.source.url) return r.a.createElement(p.b, {
						href: t.source.url,
						isSponsored: s,
						postId: t.id,
						source: t.source
					}, r.a.createElement(K, e)); {
						const o = t.media && Object(v.G)(t.media) ? Object(C.c)(t.id, n.name) : t.permalink,
							i = e.isCommentPermalink ? Object(g.b)(o) : Object(b.a)(o);
						return r.a.createElement(G, {
							disableVisited: e.disableVisited,
							nowrap: e.nowrap
						}, s ? ((e, t) => {
							const {
								source: n
							} = Object(d.t)(e, t.imageGalleryCurrentItem);
							return n ? r.a.createElement(p.b, {
								href: n.url,
								isSponsored: e.isSponsored,
								postId: e.id,
								source: n
							}, r.a.createElement(K, t)) : r.a.createElement(K, t)
						})(t, e) : r.a.createElement(W, {
							className: e.titleLinkClassName,
							"data-click-id": "body",
							disableVisited: e.disableVisited,
							target: e.shouldOpenPostInNewTab ? "_blank" : void 0,
							titleColor: e.titleColor,
							to: i
						}, r.a.createElement(K, e)))
					}
				},
				K = e => {
					const {
						leftFlair: t,
						isCommentsPageAd: n,
						post: s
					} = e;
					let o = e.format ? e.format(s) : s.title;
					n && "string" == typeof o && (o = (e => {
						return e.length >= 250 ? e.slice(0, 250 - "...".length) + "..." : e
					})(o));
					const i = e.isCommentsPage ? M.a.PostComments : M.a.PostItem;
					return r.a.createElement(V, {
						className: e.titleClassName,
						nowrap: e.nowrap,
						redditStyle: e.redditStyle || e.isCommentsPage,
						size: e.size,
						titleColor: e.titleColor,
						titleType: i
					}, t && r.a.createElement(y.a, {
						titleFlair: t,
						nowrap: !0,
						post: s,
						sendEvent: e.sendEvent,
						showCategoryTag: !1
					}), o)
				},
				z = e => {
					const {
						hideSourceLink: t,
						post: n
					} = e, {
						isSponsored: s
					} = n, o = !t && !e.isCrosspost && e.size !== P.Large && !n.isSponsored && !(n.media && Object(v.G)(n.media)) && (n.source || n.media && (n.media.type === v.o.GIFVIDEO || n.media.type === v.o.IMAGE || n.media.type === v.o.EMBED));
					if (t || !e.isCommentsPage || e.isCommentPermalink || e.shouldLinkWrap) {
						if (o) return r.a.createElement(h.a, {
							className: e.outboundLinkClassName,
							href: Object(v.D)(n),
							isSponsored: s,
							postId: n.id,
							source: n.source
						}, Object(O.a)(n), !n.isSponsored && r.a.createElement(x.a, {
							className: R.a.outboundLinkIcon
						}))
					} else if (n.source && !e.isCrosspost && e.size !== P.Large && e.size !== P.ExtraLarge) return r.a.createElement(h.a, {
						className: e.outboundLinkClassName,
						href: n.source.url,
						isSponsored: s,
						postId: n.id,
						source: n.source
					}, Object(O.a)(n), !n.isSponsored && r.a.createElement(x.a, {
						className: R.a.outboundLinkIcon
					}));
					return null
				};
			class J extends r.a.Component {
				getDynamicStyleTags() {
					return r.a.createElement("style", {
						dangerouslySetInnerHTML: {
							__html: `\n        .${this.props.post.id} .${R.a.Component} {\n          --postTitle-VisitedLinkColor: ${Object(s.c)(.45,Object(_.a)(this.props).titleText,"#FFFFFF")};\n          --postTitleLink-VisitedLinkColor: ${Object(s.c)(.45,this.props.titleColor||Object(_.a)(this.props).titleText,Object(_.a)(this.props).body)};\n        }\n      `
						}
					})
				}
				render() {
					const {
						className: e,
						disableFlair: t,
						flairPosition: n,
						isCommentsPage: s,
						isOverlay: o,
						poll: i,
						post: a,
						showNSFWSpoilerFlairsOnly: c
					} = this.props, d = n === E.b.Left, u = Object(y.b)(a), m = c ? u.filter(e => e.type === E.f.Nsfw || e.type === E.f.Spoiler) : d ? u.filter(e => Object(f.p)(e.type)) : [], p = c ? [] : d ? u.filter(e => !Object(f.p)(e.type)) : u, h = !o && !s, b = !t && m && m.length > 0 && h, g = !t && p && p.length > 0 && h;
					return r.a.createElement("div", {
						className: Object(l.a)(R.a.Component, e, a.id)
					}, !c && b && r.a.createElement(y.a, {
						isFlairFilter: !0,
						titleFlair: m,
						nowrap: !0,
						post: a,
						sendEvent: this.props.sendEvent,
						showCategoryTag: !1
					}), r.a.createElement(q, U({}, this.props, {
						leftFlair: c ? m : void 0
					})), i && r.a.createElement(N, {
						className: R.a.pollMeta,
						pollId: i.id
					}), r.a.createElement(z, this.props), g && r.a.createElement(y.a, {
						isFlairFilter: !0,
						titleFlair: p,
						nowrap: !0,
						post: a,
						sendEvent: this.props.sendEvent,
						showCategoryTag: !1
					}), r.a.createElement("div", {
						className: R.a.postTitleVisibility,
						dangerouslySetInnerHTML: {
							__html: `\n              <img alt="" src="${F.a.assetPath}/img/renderTimingPixel.png" style="width: 1px; height: 1px;" onLoad="(__markFirstPostVisible || function(){})();" />\n            `
						}
					}), this.getDynamicStyleTags())
				}
			}
			t.c = r.a.memo((function(e) {
				const t = Object(m.Z)(),
					n = Object(m.v)(t),
					s = Object(A.a)(),
					o = Object(i.e)(o => H(o, {
						...s,
						...e,
						isCommentPermalink: n,
						pageLayer: t
					})),
					a = Object(B.a)(),
					c = Object(u.b)();
				return r.a.createElement(J, U({
					pageLayer: t,
					isCommentPermalink: n
				}, s, o, e, {
					theme: a,
					sendEvent: c
				}))
			}))
		},
		"./src/reddit/components/PostingSidebar/PolicyRow/index.m.less": function(e, t, n) {
			e.exports = {
				PolicyRow: "_2N9ShiilNyzdd0B_i9geBj",
				policyRow: "_2N9ShiilNyzdd0B_i9geBj"
			}
		},
		"./src/reddit/components/PostingSidebar/PolicyRow/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/config.ts");
			const {
				redditUrl: i
			} = r.a, a = `${i}/help/contentpolicy`, c = `${i}/wiki/reddiquette`;
			var d = n("./src/reddit/components/PostingSidebar/PolicyRow/index.m.less"),
				l = n.n(d);
			const {
				fbt: u
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			t.a = e => o.a.createElement("div", {
				className: l.a.PolicyRow
			}, u._("Please be mindful of reddit's {=content policy} and practice good {=reddiquette}.", [u._param("=content policy", o.a.createElement("a", {
				href: a
			}, u._("content policy", null, {
				hk: "2PeDvo"
			}))), u._param("=reddiquette", o.a.createElement("a", {
				href: c
			}, u._("reddiquette", null, {
				hk: "uPdiw"
			})))], {
				hk: "4yQuKr"
			}))
		},
		"./src/reddit/components/PostingSidebar/PostingReddiquette/index.m.less": function(e, t, n) {
			e.exports = {
				Snoo: "_1XXU14d6sjwsheKLMcy7ro",
				snoo: "_1XXU14d6sjwsheKLMcy7ro",
				Li: "_2aD4E5YdfsXR-e8kLRuTEp",
				li: "_2aD4E5YdfsXR-e8kLRuTEp",
				Ol: "a5fJMl2u0aujwukxWH3if",
				ol: "a5fJMl2u0aujwukxWH3if",
				Title: "_27SYzmGZdspPn9yA9voNCY",
				title: "_27SYzmGZdspPn9yA9voNCY",
				Component: "_1Zj2sAyYL2zB-kzZQcWiW",
				component: "_1Zj2sAyYL2zB-kzZQcWiW"
			}
		},
		"./src/reddit/components/PostingSidebar/PostingReddiquette/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/constants/index.ts"),
				d = n("./src/reddit/icons/svgs/SnooPosting/index.tsx"),
				l = n("./src/reddit/selectors/postCreations.ts"),
				u = n("./src/reddit/components/PostingSidebar/PostingReddiquette/index.m.less"),
				m = n.n(u),
				p = n("./src/lib/lessComponent.tsx");
			const h = p.a.wrapped(d.a, "Snoo", m.a),
				b = p.a.li("Li", m.a),
				f = p.a.ol("Ol", m.a),
				g = p.a.div("Title", m.a),
				C = Object(a.c)({
					submissionType: l.kb
				});
			t.a = p.a.wrapped(Object(i.b)(C)(e => {
				const {
					className: t,
					submissionType: n
				} = e, o = n === c.Lb.CROSSPOST;
				return r.a.createElement("div", {
					className: t
				}, r.a.createElement(g, null, r.a.createElement(h, null), o ? s.fbt._("Crossposting to Reddit", null, {
					hk: "2ODPDt"
				}) : s.fbt._("Posting to Reddit", null, {
					hk: "8eEIT"
				})), r.a.createElement(f, null, r.a.createElement(b, null, s.fbt._("Remember the human", null, {
					hk: "1x3u5R"
				})), r.a.createElement(b, null, s.fbt._("Behave like you would in real life", null, {
					hk: "3pxfk1"
				})), r.a.createElement(b, null, s.fbt._("Look for the original source of content", null, {
					hk: "1FfUM4"
				})), r.a.createElement(b, null, s.fbt._("Search for duplicates before posting", null, {
					hk: "3Ij1gf"
				})), r.a.createElement(b, null, s.fbt._("Read the community’s rules", null, {
					hk: "3RNQW2"
				})), o && r.a.createElement(b, null, s.fbt._("You must join a community to crosspost there", null, {
					hk: "1YAEPX"
				}))))
			}), "Component", m.a)
		},
		"./src/reddit/components/PostingSidebar/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "itxZANPrH4AAYOj6VgfL9",
				container: "itxZANPrH4AAYOj6VgfL9"
			}
		},
		"./src/reddit/components/PostingSidebar/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/core-js/modules/web.dom.iterable.js"),
				o = n.n(s),
				r = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				i = n("./node_modules/react/index.js"),
				a = n.n(i),
				c = n("./node_modules/react-redux/es/index.js"),
				d = n("./node_modules/reselect/es/index.js"),
				l = n("./src/reddit/components/IdCard/async.tsx"),
				u = n("./src/reddit/components/SidebarFooter/index.tsx"),
				m = n("./src/reddit/components/SidebarSpacer/index.tsx"),
				p = n("./src/reddit/components/Widgets/PostCollection/index.tsx"),
				h = n("./src/reddit/components/Widgets/SubredditRules/index.tsx"),
				b = n("./src/reddit/contexts/PageLayer/index.tsx"),
				f = n("./src/reddit/models/Widgets/index.ts"),
				g = n("./src/reddit/selectors/postCreations.ts"),
				C = n("./src/reddit/selectors/profile.ts"),
				x = n("./src/reddit/selectors/subreddit.ts"),
				E = n("./src/reddit/selectors/widgets.ts"),
				v = n("./src/reddit/components/PostingSidebar/PolicyRow/index.tsx"),
				_ = n("./src/reddit/components/PostingSidebar/PostingReddiquette/index.tsx"),
				O = n("./src/reddit/components/PostingSidebar/index.m.less"),
				y = n.n(O),
				k = n("./src/lib/lessComponent.tsx");
			const j = Object(r.a)({
					resolved: {},
					chunkName: () => "reddit-components-ProfileIdCard",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("reddit-components-ProfileIdCard").then(n.bind(null, "./src/reddit/components/ProfileIdCard/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/components/ProfileIdCard/index.tsx"
					}
				}),
				S = k.a.div("Container", y.a),
				I = Object(b.t)(),
				T = new Set(["all", "post"]),
				w = Object(d.a)((e, {
					pageLayer: t
				}) => {
					const n = Object(b.q)(e, {
						pageLayer: t
					});
					return n && Object(x.S)(e, {
						subredditId: n.id
					})
				}, e => (e || []).filter(e => T.has(e.kind))),
				P = (e, {
					pageLayer: t
				}) => {
					const n = Object(b.q)(e, {
						pageLayer: t
					});
					return !(!n || !Object(E.d)(e, {
						subredditName: n.name
					}))
				},
				N = Object(d.c)({
					hasIdCardWidgetData: P,
					isCreationPagePending: g.J,
					profile: (e, {
						pageLayer: t,
						subredditOrProfileId: n
					}) => n ? Object(C.p)(e, {
						profileId: n
					}) : Object(b.j)(e, {
						pageLayer: t
					}),
					subreddit: b.q,
					subredditRules: w,
					currentPostCollection: b.f
				}),
				M = Object(c.b)(N),
				D = e => {
					const {
						className: t,
						currentPostCollection: n,
						hasIdCardWidgetData: s,
						isCreationPagePending: o,
						profile: r,
						subreddit: i,
						subredditRules: c
					} = e, d = s || o;
					return a.a.createElement(S, {
						className: t
					}, n && a.a.createElement(p.a, {
						collection: n
					}), i && d && a.a.createElement(m.a, null, a.a.createElement(l.a, {
						isSubmissionPage: !0,
						listingName: i.name
					})), r && !i && a.a.createElement(m.a, null, a.a.createElement(j, {
						profileName: r.name,
						isOverlay: !1,
						isSubmissionPage: !0
					})), i && c && a.a.createElement(m.a, null, a.a.createElement(h.a, {
						subredditName: i.name,
						display: f.e.COMPACT,
						rules: c,
						redditStyle: !0
					})), a.a.createElement(_.a, null), a.a.createElement(m.a, null), a.a.createElement(v.a, null), a.a.createElement(u.a, {
						redditStyle: !0
					}))
				};
			t.a = I(M(D))
		},
		"./src/reddit/components/RequestPendingBanner/index.m.less": function(e, t, n) {
			e.exports = {
				Banner: "_1AD-JX9FUzLgvv8A5yaVqV",
				banner: "_1AD-JX9FUzLgvv8A5yaVqV",
				Subtitle: "_1ljRPHbvpC41amZF9_xBeb",
				subtitle: "_1ljRPHbvpC41amZF9_xBeb"
			}
		},
		"./src/reddit/components/RequestPendingBanner/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/components/InfoBanners/BannerBase/index.tsx"),
				l = n("./src/reddit/models/SubredditRestrictions/index.ts"),
				u = n("./src/reddit/selectors/platform.ts"),
				m = n("./src/reddit/selectors/subreddit.ts"),
				p = n("./src/reddit/components/RequestPendingBanner/index.m.less"),
				h = n.n(p);
			const b = c.a.wrapped(d.a, "Banner", h.a),
				f = Object(i.b)(() => Object(a.c)({
					restrictions: m.p,
					subreddit: u.e
				}));
			t.a = f(({
				restrictions: e,
				subreddit: t
			}) => {
				if (!t) return null;
				const n = e === l.e.Comment ? l.a.Create : l.a.Draft;
				return r.a.createElement(b, {
					subtitle: r.a.createElement("span", {
						className: h.a.Subtitle
					}, s.fbt._("Your request to {restrictions} in {displayName} was sent and is pending. In the meantime, you can {action} a post and {=browse the community}", [s.fbt._param("restrictions", l.d[e]()), s.fbt._param("displayName", t.name), s.fbt._param("action", l.c[n]()), s.fbt._param("=browse the community", r.a.createElement("a", {
						href: `${t.url}`
					}, s.fbt._("browse the community", null, {
						hk: "3hwgAC"
					})))], {
						hk: "2CX6Q6"
					})),
					title: s.fbt._("Request to {restrictions} is pending...", [s.fbt._param("restrictions", l.d[e]())], {
						hk: "1tQuSr"
					})
				})
			})
		},
		"./src/reddit/components/ResizableAutosizeTextarea/index.m.less": function(e, t, n) {
			e.exports = {
				editorWrapper: "VBa-xDMEbFi3vsO4id4OC",
				textareaAutosize: "_6Ej82J4aTDK36LLOcpFbC",
				mIsFullHeight: "aZb6a46diyLdUQJynW3aD"
			}
		},
		"./src/reddit/components/ResizableAutosizeTextarea/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-autosize-textarea/lib/index.js"),
				i = n.n(r),
				a = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/components/ResizableAutosizeTextarea/index.m.less"),
				d = n.n(c);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const u = ({
					className: e,
					children: t,
					editorWrapperRef: n,
					initialHeight: s
				}) => o.a.createElement("div", {
					className: Object(a.a)(d.a.editorWrapper, e),
					style: s ? {
						height: s
					} : void 0,
					ref: n
				}, t),
				m = ({
					isFullHeight: e,
					textAreaRef: t,
					...n
				}) => o.a.createElement(i.a, l({
					className: Object(a.a)(d.a.textareaAutosize, {
						[d.a.mIsFullHeight]: e
					}),
					innerRef: t
				}, n));
			class p extends o.a.Component {
				constructor(e) {
					super(e), this.editorHeight = null, this.editorRef = null, this.editorStyleMutationObserver = null, this.onEditorStyleChanged = () => {
						if (!this.editorRef) return;
						const {
							isResized: e
						} = this.state;
						e || this.setState({
							isResized: !0
						});
						const t = this.editorRef.style.height ? Number.parseInt(this.editorRef.style.height) : null;
						this.editorHeight !== t && (this.editorHeight = t, t && this.props.onEditorResize && this.props.onEditorResize(t))
					}, this.setEditorWrapperRef = e => this.editorRef = e, this.state = {
						initialHeight: e.initialHeight,
						isResized: !!e.initialHeight
					}
				}
				componentDidMount() {
					this.editorRef && (this.editorStyleMutationObserver = new MutationObserver(this.onEditorStyleChanged), this.editorStyleMutationObserver.observe(this.editorRef, {
						attributes: !0,
						attributeFilter: ["style"]
					}))
				}
				componentWillUnmount() {
					this.editorStyleMutationObserver && (this.editorStyleMutationObserver.disconnect(), this.editorStyleMutationObserver = null)
				}
				render() {
					const {
						className: e,
						initialHeight: t,
						innerRef: n,
						onEditorResize: s,
						...r
					} = this.props, {
						isResized: i
					} = this.state;
					return o.a.createElement(u, {
						className: e,
						editorWrapperRef: this.setEditorWrapperRef,
						initialHeight: t
					}, o.a.createElement(m, l({}, r, {
						children: !0,
						isFullHeight: !!i,
						textAreaRef: n
					})))
				}
			}
			t.a = p
		},
		"./src/reddit/components/RestrictedFlatlistButton/index.m.less": function(e, t, n) {
			e.exports = {
				removalReasonButton: "_3IEDcFIIs_TeXsZtKZGzUd",
				TextWrapper: "smOzqVIOoNqmSJcyBX2N6",
				textWrapper: "smOzqVIOoNqmSJcyBX2N6",
				Button: "_1rNBkuuOkN2SorEXyRkYjB",
				button: "_1rNBkuuOkN2SorEXyRkYjB",
				ApproveButton: "_2T9IigN7CfZvuc5KSKs2hx",
				approveButton: "_2T9IigN7CfZvuc5KSKs2hx",
				RemoveButton: "_2OvUr_pd3kddsNP_f35S28",
				removeButton: "_2OvUr_pd3kddsNP_f35S28"
			}
		},
		"./src/reddit/components/RestrictedFlatlistButton/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return d
			})), n.d(t, "b", (function() {
				return l
			})), n.d(t, "d", (function() {
				return u
			})), n.d(t, "a", (function() {
				return m
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/components/RestrictedFlatlistButton/index.m.less"),
				c = n.n(a);
			const d = e => o.a.createElement("button", {
					className: Object(r.a)(c.a.Button, e.className),
					disabled: e.disabled,
					id: e.id,
					onClick: e.disabled ? void 0 : e.onClick
				}, e.children, e.text && o.a.createElement("span", {
					className: c.a.TextWrapper
				}, e.text, " ")),
				l = i.a.wrapped(d, "ApproveButton", c.a),
				u = i.a.wrapped(d, "RemoveButton", c.a),
				m = e => o.a.createElement("button", {
					className: Object(r.a)(c.a.removalReasonButton, e.className),
					onClick: e.onClick
				}, e.text)
		},
		"./src/reddit/components/ScheduledPost/PostSchedulePickerModal/loader.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(s.a)({
				resolved: {},
				chunkName: () => "reddit-components-ScheduledPost-PostSchedulePickerModal",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("reddit-components-ScheduledPost-PostSchedulePickerModal").then(n.bind(null, "./src/reddit/components/ScheduledPost/PostSchedulePickerModal/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/ScheduledPost/PostSchedulePickerModal/index.tsx"
				}
			})
		},
		"./src/reddit/components/SearchResultsContent/searchResultsPageTreatment/searchIgnoreClickContext.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return r
			}));
			var s = n("./node_modules/react/index.js");
			const o = Object(s.createContext)(!1);

			function r() {
				return Object(s.useContext)(o)
			}
		},
		"./src/reddit/components/SidebarFooter/index.m.less": function(e, t, n) {
			e.exports = {
				Widget: "_2wqyhtudP4weVGsZdVXJgt",
				widget: "_2wqyhtudP4weVGsZdVXJgt",
				LinkContainer: "_1KrMye71CT332tKKKUWAj6",
				linkContainer: "_1KrMye71CT332tKKKUWAj6",
				Column: "_3f2nSSsPBqVDV6Sz82qgrR",
				column: "_3f2nSSsPBqVDV6Sz82qgrR",
				Link: "_3Eyh3vRo5o4IfzVZXhaWAG",
				link: "_3Eyh3vRo5o4IfzVZXhaWAG",
				Copyright: "_34dh2eyzMvJfjCBLeoWiDD",
				copyright: "_34dh2eyzMvJfjCBLeoWiDD"
			}
		},
		"./src/reddit/components/SidebarFooter/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				a = n("./src/reddit/contexts/PageLayer/index.tsx"),
				c = n("./src/reddit/components/SidebarFooter/index.m.less"),
				d = n.n(c);
			const {
				fbt: l
			} = n("./node_modules/fbt/lib/FbtPublic.js"), u = r.a.a("Link", d.a), m = Object(a.t)({
				isFrontpage: a.y
			});
			t.a = m(e => o.a.createElement(i.a, {
				className: d.a.Widget,
				redditStyle: e.redditStyle,
				contentOnly: !0
			}, o.a.createElement("div", {
				className: d.a.LinkContainer
			}, o.a.createElement("div", {
				className: d.a.Column
			}, o.a.createElement(u, {
				href: "https://www.reddithelp.com"
			}, l._("help", null, {
				hk: "4lyYaD"
			})), o.a.createElement(u, {
				href: "https://www.reddit.com/mobile/download"
			}, l._("Reddit App", null, {
				hk: "1ehrjP"
			})), o.a.createElement(u, {
				href: "https://www.reddit.com/coins"
			}, l._("Reddit coins", null, {
				hk: "32iMaN"
			})), o.a.createElement(u, {
				href: "https://www.reddit.com/premium"
			}, l._("Reddit premium", null, {
				hk: "RuO3A"
			})), o.a.createElement(u, {
				href: "https://redditgifts.com/"
			}, l._("Reddit gifts", null, {
				hk: "2XziRN"
			})), e.isFrontpage && o.a.createElement(o.a.Fragment, null, o.a.createElement(u, {
				href: "https://www.reddit.com/subreddits/a-1/"
			}, l._("Communities", null, {
				hk: "3CJu37"
			})), o.a.createElement(u, {
				href: "https://www.reddit.com/posts/2020/"
			}, l._("Rereddit", null, {
				hk: "1z3k7C"
			})), o.a.createElement(u, {
				href: "https://www.reddit.com/topics/a-1/"
			}, l._("Topics", null, {
				hk: "349RFt"
			})))), o.a.createElement("div", {
				className: d.a.Column
			}, o.a.createElement(u, {
				href: "https://about.reddit.com"
			}, l._("about", null, {
				hk: "1sqJKs"
			})), o.a.createElement(u, {
				href: "https://about.reddit.com/careers/"
			}, l._("careers", null, {
				hk: "26ABvc"
			})), o.a.createElement(u, {
				href: "https://about.reddit.com/press/"
			}, l._("press", null, {
				hk: "2Qmgdz"
			})), o.a.createElement(u, {
				href: "https://www.redditinc.com/advertising"
			}, l._("advertise", null, {
				hk: "Mt40U"
			})), o.a.createElement(u, {
				href: "http://www.redditblog.com/"
			}, l._("blog", null, {
				hk: "46IQJw"
			})), o.a.createElement(u, {
				href: "https://www.redditinc.com/policies/user-agreement"
			}, l._("Terms", null, {
				hk: "4qRzfE"
			})), o.a.createElement(u, {
				href: "https://www.redditinc.com/policies/content-policy"
			}, l._("Content policy", null, {
				hk: "1DyxZS"
			})), o.a.createElement(u, {
				href: "https://www.reddit.com/help/privacypolicy"
			}, l._("Privacy policy", null, {
				hk: "10K04G"
			})), o.a.createElement(u, {
				href: "https://www.reddit.com/help/healthycommunities/"
			}, l._("Mod policy", null, {
				hk: "2gYc2T"
			})))), o.a.createElement("div", {
				className: d.a.Copyright
			}, l._("Reddit Inc © {year}. All rights reserved", [l._param("year", (new Date).getFullYear().toString())], {
				hk: "4BrCkA"
			}))))
		},
		"./src/reddit/components/SidebarSpacer/index.m.less": function(e, t, n) {
			e.exports = {
				Component: "_2vEf-C2keJaBMY9qk_BxVn",
				component: "_2vEf-C2keJaBMY9qk_BxVn"
			}
		},
		"./src/reddit/components/SidebarSpacer/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/reddit/components/SidebarSpacer/index.m.less"),
				o = n.n(s),
				r = n("./src/lib/lessComponent.tsx");
			t.a = r.a.div("Component", o.a)
		},
		"./src/reddit/components/StructuredStyles/StyledComponents/navs.m.less": function(e, t, n) {
			e.exports = {
				FormNavElement: "KLpkXNw-FZfqtRK9U_8HB",
				formNavElement: "KLpkXNw-FZfqtRK9U_8HB",
				disabled: "_2omjYUqCweNidaShU2H5EC",
				DragCard: "ygS6b189jD1GHwzotinJB",
				dragCard: "ygS6b189jD1GHwzotinJB",
				isOverAndCanDrop: "_3_GRCa3UIhqQ68fvB00PLZ",
				isDragging: "_2yg01oNjKP8Gcb4HPjf58k"
			}
		},
		"./src/reddit/components/StructuredStyles/StyledComponents/navs.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return d
			})), n.d(t, "a", (function() {
				return l
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/components/StructuredStyles/StyledComponents/navs.m.less"),
				a = n.n(i);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const d = ({
					disabled: e,
					...t
				}) => o.a.createElement("div", c({}, t, {
					className: Object(r.a)(a.a.FormNavElement, {
						[a.a.disabled]: e
					})
				}), t.children),
				l = ({
					canDrop: e,
					className: t,
					isDragging: n,
					isOver: s,
					disabled: i,
					...d
				}) => o.a.createElement("div", c({}, d, {
					className: Object(r.a)(a.a.DragCard, {
						[a.a.disabled]: i,
						[a.a.isDraffing]: n,
						[a.a.isOverAndCanDrop]: s && e
					}, t)
				}))
		},
		"./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js");
			const o = ({
					type: e
				}) => "subreddit" === e ? "subredditActions" : "profileActions",
				r = {
					subredditActions: {
						subscribe: () => s.fbt._("Join", null, {
							hk: "3Nhj3V"
						}),
						subscribed: () => s.fbt._("Joined", null, {
							hk: "1YGago"
						}),
						unsubscribe: () => s.fbt._("Leave", null, {
							hk: "299znK"
						})
					},
					profileActions: {
						subscribe: () => s.fbt._("Follow", null, {
							hk: "18PRa5"
						}),
						subscribed: () => s.fbt._("Following", null, {
							hk: "sjS3y"
						}),
						unsubscribe: () => s.fbt._("Unfollow", null, {
							hk: "3c0uwF"
						})
					}
				},
				i = ({
					type: e,
					key: t
				}) => r[o({
					type: e
				})][t]()
		},
		"./src/reddit/components/Thumbnail/index.m.less": function(e, t, n) {
			e.exports = {
				blurredThumbnail: "GnWcY6GPzeZ5rzsiQ98fo",
				container: "_2MkcR85HDnYngvlVW2gMMa",
				contentType: "_2hIvPRO2xz4rn9LXAJXYDa",
				hasType: "_10qSZsDWnOBwx4bc7GJ1QF",
				hiddenImage: "_25ZOvQhQdAqwdxPd5z-KFB",
				imageThumbnail: "_33Pa96SGhFVpZeI6a7Y_Pl",
				verticallyCenterThumbnail: "Fq7oYOARH1VVCaLAuAh37",
				linkIcon: "m0n699kowSp8Wfa40lqpF",
				outboundLinkIcon: "_2rOixIHGmpfZB93ihJsw3V",
				placeholderThumbnail: "_2YO2O4rMRYYMeH_t2y8M5w",
				thumbnail: "_2c1ElNxHftd8W_nZtcG9zf",
				usePreview: "_78ohNtfA1urjgUhnN1jLi",
				LinkText: "_3HXDOeeCKnmgu_pIdoLofi",
				linkText: "_3HXDOeeCKnmgu_pIdoLofi"
			}
		},
		"./src/reddit/components/Thumbnail/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return G
			}));
			var s = n("./src/lib/isUrl/index.ts"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				l = n("./src/reddit/components/ImageWithFallback/index.tsx"),
				u = n("./src/reddit/icons/fonts/Gif/index.tsx"),
				m = n("./src/reddit/icons/fonts/Link/index.tsx"),
				p = n("./src/reddit/icons/fonts/Photos/index.tsx"),
				h = n("./src/reddit/icons/fonts/Text/index.tsx"),
				b = n("./src/reddit/icons/fonts/Video/index.tsx"),
				f = n("./src/reddit/icons/svgs/Gallery/index.tsx"),
				g = n("./src/reddit/icons/svgs/Poll/index.tsx"),
				C = n("./src/reddit/constants/elementClassNames.ts"),
				x = n("./src/reddit/controls/ContentType/index.m.less"),
				E = n.n(x);
			const v = e => Object(i.a)(E.a.contentTypeIcon, e.className),
				_ = e => r.a.createElement(m.a, {
					className: Object(i.a)(C.a, v(e))
				});

			function O(e) {
				const t = v(e);
				switch (e.type) {
					case "gifvideo":
						return r.a.createElement(u.a, {
							className: t
						});
					case "image":
						return r.a.createElement(p.a, {
							className: t
						});
					case "meta":
						return r.a.createElement(g.a, {
							className: t
						});
					case "rtjson":
					case "text":
						return r.a.createElement(h.a, {
							className: t
						});
					case "video":
						return r.a.createElement(b.a, {
							className: t
						});
					case "gallery":
						return r.a.createElement(f.a, {
							className: t
						});
					default:
						return r.a.createElement(_, e)
				}
			}
			var y = n("./src/reddit/controls/OutboundLink/index.tsx"),
				k = n("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				j = n("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				S = n("./src/reddit/models/Media/index.ts"),
				I = n("./src/reddit/models/Theme/index.ts"),
				T = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				w = n("./src/reddit/components/Thumbnail/index.m.less"),
				P = n.n(w);

			function N() {
				return (N = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const M = e => e.placeholderImage || Object(T.a)(e).placeholderImage,
				D = e => e.placeholderImage ? "cover" : Object(T.a)(e).placeholderImagePosition,
				L = c.a.span("LinkText", P.a),
				R = ({
					className: e,
					onClick: t,
					children: n
				}) => r.a.createElement("div", {
					onClick: t,
					className: Object(i.a)(P.a.linkIcon, e)
				}, n),
				F = e => r.a.createElement("img", {
					alt: e.alt,
					className: Object(i.a)(P.a.hiddenImage, e.className)
				}),
				A = e => {
					const t = r.a.createRef(),
						{
							src: n,
							errorSrc: s
						} = e;
					return n && s && Object(l.a)(n).catch(() => {
						t.current && (t.current.style.backgroundImage = `url(${s})`)
					}), r.a.createElement("div", {
						"aria-label": e.alt,
						className: Object(i.a)(P.a.thumbnail, P.a.imageThumbnail, e.className),
						"data-click-id": "image",
						ref: t,
						role: "img",
						style: {
							backgroundImage: `url(${e.src})`,
							borderColor: e.isOutbound ? Object(T.a)(e).button : Object(T.a)(e).line
						}
					}, e.isOutbound && r.a.createElement(R, {
						className: e.linkIconClassName
					}, r.a.createElement(j.a, {
						className: Object(i.a)(P.a.outboundLinkIcon, e.outboundLinkIconClassName),
						isFilled: e.isInIcons2020
					}), e.text && r.a.createElement(L, {
						className: e.linkTextClassName
					}, e.text)), r.a.createElement(F, {
						alt: e.alt,
						className: "hiddenImg"
					}))
				},
				B = e => e.isOutbound ? Object(T.a)(e).button : e.placeholderImage ? "transparent" : Object(T.a)(e).line,
				U = e => {
					const t = M(e),
						n = t && {
							background: Object(I.g)(Object(T.a)(e).placeholder, t, D(e))
						};
					return r.a.createElement("div", {
						className: Object(i.a)(P.a.thumbnail, P.a.placeholderThumbnail, e.className),
						"data-click-id": "image",
						style: {
							...n,
							borderColor: B(e)
						}
					}, (!e.placeholderImage || e.showContentType) && r.a.createElement(O, {
						className: Object(i.a)(e.contentTypeClassName, P.a.contentType, {
							[P.a.hasType]: e.type && !e.isOutbound
						}),
						type: e.isMeta || e.isPoll ? "meta" : e.type
					}), e.isOutbound && r.a.createElement(R, {
						className: e.linkIconClassName
					}, r.a.createElement(j.a, {
						className: Object(i.a)(P.a.outboundLinkIcon, e.outboundLinkIconClassName),
						isFilled: e.isInIcons2020
					}), e.text && r.a.createElement(L, {
						className: e.linkTextClassName
					}, e.text)))
				},
				V = e => r.a.createElement(A, N({}, e, {
					className: Object(i.a)(P.a.blurredThumbnail, e.className)
				})),
				W = Object(a.a)(e => {
					const {
						className: t,
						containerClassName: n,
						contentTypeClassName: o,
						crosspost: a,
						forceShowNSFW: c,
						isMeta: d,
						linkIconClassName: l,
						linkTextClassName: u,
						outboundLinkIconClassName: m,
						post: p,
						redditStyle: h,
						removeLink: b,
						showContentType: f,
						templatePlaceholderImage: g,
						text: C,
						theme: x,
						usePreview: E
					} = e, v = Object(k.a)(), _ = !x.subredditContext.shouldShowNSFWContent && (p.isNSFW || !(!a || !a.isNSFW)) && !c, O = M({
						placeholderImage: g,
						redditStyle: h,
						theme: x
					}), j = G(e), I = q(p, t, O, _, C, x, j, d, f, b, h, l, u, m, o, v), T = Object(S.D)(p);
					return Object(s.a)(T) && !b && T.indexOf("redditmedia") < 0 ? r.a.createElement("div", {
						className: Object(i.a)(P.a.container, E ? P.a.usePreview : "", n)
					}, r.a.createElement(y.b, {
						href: Object(S.D)(p),
						isSponsored: p.isSponsored,
						postId: p.id,
						source: p.source
					}, I)) : r.a.createElement("div", {
						className: Object(i.a)(P.a.container, E ? P.a.usePreview : "", n)
					}, I)
				}),
				G = ({
					crosspost: e,
					post: t,
					url: n,
					usePreview: s
				}) => {
					if (n) return n;
					const {
						preview: o,
						media: r,
						thumbnail: i
					} = e || t;
					return s && o ? o.url : t.isSponsored && o && "default" === i.url ? o.url : H(r) ? r.scrubberThumbSource : i.url
				},
				H = e => !!e && e.type === S.o.LIVEVIDEO,
				q = (e, t, n, o, a, c, l, u, m, p, h, b, f, g, C, x) => {
					const E = e.source && !e.isSponsored || !1;
					if (Object(s.a)(l)) {
						const n = H(e.media),
							s = n ? {
								errorSrc: d.U
							} : {},
							u = Object(i.a)(t, {
								[P.a.verticallyCenterThumbnail]: n
							});
						return o ? r.a.createElement(V, N({
							"data-click-id": "image",
							src: l
						}, s, {
							className: u,
							isOutbound: E && !p,
							linkIconClassName: b,
							linkTextClassName: f,
							outboundLinkIconClassName: g,
							redditStyle: h,
							text: a,
							theme: c,
							isInIcons2020: x
						})) : r.a.createElement(A, N({
							alt: e.title,
							className: u,
							src: l
						}, s, {
							isOutbound: E && !p,
							linkIconClassName: b,
							linkTextClassName: f,
							outboundLinkIconClassName: g,
							redditStyle: h,
							text: a,
							theme: c,
							isInIcons2020: x
						}))
					}
					return r.a.createElement(U, {
						className: t,
						contentTypeClassName: C,
						placeholderImage: n,
						isMeta: u,
						isOutbound: E && !p,
						linkIconClassName: b,
						linkTextClassName: f,
						outboundLinkIconClassName: g,
						redditStyle: h,
						showContentType: m,
						text: a,
						theme: c,
						type: e.media ? e.media.type : null,
						isPoll: !!e.pollData,
						isInIcons2020: x
					})
				};
			t.a = W
		},
		"./src/reddit/components/UserIcon/CurrentUserIcon.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/classNames/index.ts"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				c = n("./src/reddit/helpers/userSnoovatar/index.ts"),
				d = n("./src/reddit/selectors/user.ts"),
				l = n("./src/reddit/components/UserIcon/PresenceDot.tsx"),
				u = n("./src/reddit/components/UserIcon/SnoovatarHeadshot.tsx"),
				m = n("./src/reddit/components/UserIcon/UserIcon.tsx"),
				p = n("./src/reddit/components/UserIcon/UserIcon.m.less"),
				h = n.n(p);

			function b() {
				return (b = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const f = Object(a.c)({
					currentUser: d.i,
					isNightMode: d.V,
					isPresenceUserPrefEnabled: d.hb,
					shouldHideNSFW: d.B
				}),
				g = Object(i.b)(f);
			t.a = g(e => {
				const {
					currentUser: t,
					shouldShowPresenceIndicator: n,
					isPresenceUserPrefEnabled: o,
					wrapperClassName: i,
					...a
				} = e, d = Object(c.a)(null == t ? void 0 : t.accountIcon);
				return r.a.createElement("div", {
					className: Object(s.a)(h.a.currentUserIconWrapper, i)
				}, d ? r.a.createElement(u.a, {
					headshot: t.accountIcon,
					className: e.className
				}) : r.a.createElement(m.a, b({}, a, {
					iconUrl: t ? t.accountIcon : void 0,
					isCurrentUser: !0,
					isNSFW: !!t && t.isNSFW
				})), n && r.a.createElement(l.a, {
					showPresence: !0
				}))
			})
		},
		"./src/reddit/components/Widgets/PostCollection/CollectionOverflowMenu/index.m.less": function(e, t, n) {
			e.exports = {
				DropdownRow: "JoWBeMWu_l8J_Hn6Udz_j",
				dropdownRow: "JoWBeMWu_l8J_Hn6Udz_j"
			}
		},
		"./src/reddit/components/Widgets/PostCollection/CollectionOverflowMenu/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/lodash/noop.js"),
				o = n.n(s),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/react-router-redux/es/index.js"),
				d = n("./src/lib/lessComponent.tsx"),
				l = n("./src/reddit/actions/modal.ts"),
				u = n("./src/reddit/actions/post.ts"),
				m = n("./src/reddit/actions/postCollection/index.ts"),
				p = n("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				h = n("./src/reddit/components/OverflowMenu/index.tsx"),
				b = n("./src/reddit/components/TrackingHelper/index.tsx"),
				f = n("./src/reddit/controls/Dropdown/Row.tsx"),
				g = n("./src/reddit/selectors/activeModalId.ts"),
				C = n("./src/reddit/selectors/postCollection.ts"),
				x = n("./node_modules/reselect/es/index.js"),
				E = n("./src/reddit/helpers/trackers/postCollection.ts"),
				v = n("./src/reddit/components/Widgets/PostCollection/CollectionOverflowMenu/index.m.less"),
				_ = n.n(v),
				O = n("./node_modules/fbt/lib/FbtPublic.js");
			const y = d.a.wrapped(f.b, "DropdownRow", _.a);
			let k;
			const j = Object(g.b)("DELETE_COLLECTION_CONFM_MODAL_ID"),
				S = Object(g.b)("EDIT_POST_COLLECTION_MODAL_ID"),
				I = Object(x.c)({
					createPostUrl: C.d,
					isDeleteConfirmModalOpen: j,
					isEditCollectionModalOpen: S,
					shouldShowCollectionEditOptions: C.s
				}),
				T = Object(a.b)(I, (e, t) => ({
					copyLink: () => e(Object(u.x)(t.permalink)),
					onCreatePost: n => {
						t.shouldShowCreatePost && e(Object(c.b)(n))
					},
					onRemoveCollection: () => e(Object(m.c)(t.collectionId, t.isSubmitPage)),
					onToggleDeleteConfirmModal: () => e(l.i("DELETE_COLLECTION_CONFM_MODAL_ID")),
					onToggleEditModal: async () => {
						k || (k = await Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("editCollectionModal")]).then(n.bind(null, "./src/reddit/components/EditCollectionModal/index.tsx")).then(e => e.EditCollectionModal)), e(l.i("EDIT_POST_COLLECTION_MODAL_ID"))
					}
				}));
			t.a = T(Object(b.c)(e => {
				const {
					className: t,
					collectionId: n,
					copyLink: s,
					createPostUrl: r,
					isDeleteConfirmModalOpen: a,
					isEditCollectionModalOpen: c,
					onCreatePost: d,
					onRemoveCollection: l,
					onToggleDeleteConfirmModal: u,
					onToggleEditModal: m,
					shouldShowCollectionEditOptions: b,
					shouldShowCreatePost: f,
					targetPosition: g,
					tooltipPosition: C,
					sendEvent: x
				} = e;
				return i.a.createElement(i.a.Fragment, null, i.a.createElement(h.b, {
					className: t,
					dropdownId: `collection-menu-${n}-${f?1:2}`,
					onClick: o.a,
					targetPosition: g,
					tooltipPosition: C
				}, i.a.createElement(y, {
					onClick: s,
					displayText: O.fbt._("Copy collection link", null, {
						hk: "3Rfodz"
					})
				}), b && i.a.createElement(i.a.Fragment, null, i.a.createElement(y, {
					onClick: () => {
						x(Object(E.l)(n)), m()
					},
					displayText: O.fbt._("Edit", null, {
						hk: "1nftDt"
					})
				}), i.a.createElement(y, {
					onClick: () => {
						x(Object(E.k)(n)), u()
					},
					displayText: O.fbt._("Delete collection", null, {
						hk: "2FyIJB"
					})
				}), f && i.a.createElement(y, {
					onClick: () => {
						d(r)
					},
					displayText: O.fbt._("Create post", null, {
						hk: "1v2jHl"
					})
				}))), c && k && i.a.createElement(k, {
					collectionId: n,
					onClose: m,
					onEditSuccess: m
				}), a && i.a.createElement(p.a, {
					actionText: O.fbt._("Yes, Delete", null, {
						hk: "15Espn"
					}),
					headerText: O.fbt._("Delete Collection", null, {
						hk: "1QJ3as"
					}),
					modalText: O.fbt._("Are you sure you want to delete this collection? The posts within the collection won't be deleted.", null, {
						hk: "36jKp5"
					}),
					onConfirm: l,
					toggleModal: u,
					trackClick: o.a
				}))
			}))
		},
		"./src/reddit/components/Widgets/PostCollection/PendingItem/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_135f7-HhEMvekPzYxVBaFE",
				activeItemIndicator: "_31zbCRopTPo2NGtlgVsrBX",
				metaLine: "_1OrlyQwYIehGSk4bhP_l2R",
				title: "_2jvQA1RLlcCLU44q6eB3g0"
			}
		},
		"./src/reddit/components/Widgets/PostCollection/PostItem/OverflowMenu/index.m.less": function(e, t, n) {
			e.exports = {
				DropdownRow: "_3V8ByF4idIiROiWQ9i468R",
				dropdownRow: "_3V8ByF4idIiROiWQ9i468R"
			}
		},
		"./src/reddit/components/Widgets/PostCollection/PostItem/OverflowMenu/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/lodash/noop.js"),
				r = n.n(o),
				i = n("./node_modules/react/index.js"),
				a = n.n(i),
				c = n("./src/lib/lessComponent.tsx"),
				d = n("./src/lib/opener/index.ts"),
				l = n("./src/reddit/components/LinkOrOverlayLink/index.tsx"),
				u = n("./src/reddit/components/OverflowMenu/index.tsx"),
				m = n("./src/reddit/controls/Dropdown/Row.tsx"),
				p = n("./src/reddit/components/Widgets/PostCollection/PostItem/OverflowMenu/index.m.less"),
				h = n.n(p);
			const b = c.a.wrapped(m.b, "DropdownRow", h.a);
			t.a = e => {
				const {
					isFutureEvent: t,
					onAddEventStartTime: n,
					onEditStartTime: o,
					onStartEventNow: i,
					postPermalink: c,
					shouldShowAddEventStartTime: m,
					targetPosition: p,
					tooltipPosition: h
				} = e;
				return a.a.createElement(u.b, {
					className: e.className,
					dropdownId: e.dropdownId,
					onClick: r.a,
					targetPosition: p,
					tooltipPosition: h
				}, m && n && a.a.createElement(b, {
					onClick: n,
					displayText: s.fbt._("Add event start time", null, {
						hk: "4xWttR"
					})
				}), t && i && a.a.createElement(b, {
					onClick: i,
					displayText: s.fbt._("Start event now", null, {
						hk: "2TTNfJ"
					})
				}), t && o && a.a.createElement(b, {
					onClick: o,
					displayText: s.fbt._("Edit start time", null, {
						hk: "44XUxC"
					})
				}), a.a.createElement(b, {
					onClick: e.onRemoveClick,
					displayText: s.fbt._("Remove from collection", null, {
						hk: "qsiiu"
					})
				}), c && a.a.createElement(l.a, {
					target: d.c.BLANK,
					rel: d.b,
					isOverlay: !1,
					to: c
				}, a.a.createElement(b, {
					displayText: s.fbt._("View post", null, {
						hk: "1PtvnG"
					})
				})))
			}
		},
		"./src/reddit/components/Widgets/PostCollection/PostItem/Placeholder.m.less": function(e, t, n) {
			e.exports = {
				Container: "I9mI9NePKM1BEsmfZR-6H",
				container: "I9mI9NePKM1BEsmfZR-6H",
				Content: "_6d8yyfLZcJ1OXLzEXoApB",
				content: "_6d8yyfLZcJ1OXLzEXoApB",
				Title: "_1efKScSk4JSYvERdEecZnZ",
				title: "_1efKScSk4JSYvERdEecZnZ",
				Secondary: "_3fCsv_r4CtfCTdAzBRaR9N",
				secondary: "_3fCsv_r4CtfCTdAzBRaR9N"
			}
		},
		"./src/reddit/components/Widgets/PostCollection/PostItem/index.m.less": function(e, t, n) {
			e.exports = {
				container: "ceAYEjQdznT14GrQQ52QV",
				content: "_36S4oraLw5gf--rC9-aWZs",
				overflowMenu: "MiZ0gbh9xe5Yiwt3RQf2o",
				metaLine: "_2JVAK9jCDOKkFXe1XS6gwH",
				title: "_2U-RjfXG1sY-NtByFOS-uC"
			}
		},
		"./src/reddit/components/Widgets/PostCollection/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3_XzG2WCa3EYhqzE_vUcMN",
				topRow: "r_Dz4suUXbQkBdwR-eQ77",
				collectionDescription: "_3K3iJQYRdF3d2n1WlPxkpr",
				listContainer: "_2K8wDNk-kaP5gX-QEAXuMc",
				listWrapper: "VYYQfc9_vtbBaR47zbXdB",
				menuButton: "_1BX9a5jz4LWzuQohy4Cvz4"
			}
		},
		"./src/reddit/components/Widgets/PostCollection/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/components/Widgets/PostCollection/CollectionOverflowMenu/index.tsx"),
				a = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				d = n("./src/reddit/selectors/postCreations.ts"),
				l = n("./src/reddit/components/Widgets/PostCollection/PendingItem/index.m.less"),
				u = n.n(l);
			const {
				fbt: m
			} = n("./node_modules/fbt/lib/FbtPublic.js"), p = Object(c.c)({
				title: d.pb
			});
			var h = Object(a.b)(p)(e => {
					const {
						title: t
					} = e;
					return o.a.createElement("div", {
						className: u.a.container
					}, o.a.createElement("div", {
						className: u.a.activeItemIndicator
					}), t && o.a.createElement("h2", {
						className: u.a.title
					}, t), o.a.createElement("div", {
						className: u.a.metaLine
					}, m._("Editing", null, {
						hk: "2w5fAf"
					})))
				}),
				b = n("./node_modules/fbt/lib/FbtPublic.js"),
				f = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				g = n("./src/lib/timeAgo/index.ts"),
				C = n("./src/reddit/actions/postCollection/index.ts"),
				x = n("./src/reddit/selectors/posts.ts"),
				E = n("./src/reddit/components/Widgets/PostCollection/PostItem/index.m.less"),
				v = n.n(E),
				_ = n("./src/reddit/components/Widgets/PostCollection/PostItem/OverflowMenu/index.tsx"),
				O = n("./src/reddit/helpers/styles/mixins/loading.ts"),
				y = n("./src/reddit/components/Widgets/PostCollection/PostItem/Placeholder.m.less"),
				k = n.n(y);

			function j({
				className: e,
				isLoading: t
			}) {
				const n = Object(O.a)({
					isLoading: t
				});
				return o.a.createElement("div", {
					className: Object(r.a)(k.a.Container, e)
				}, o.a.createElement("div", {
					className: k.a.Content
				}, o.a.createElement("div", {
					className: Object(r.a)(k.a.Title, n)
				}), o.a.createElement("div", {
					className: Object(r.a)(k.a.Secondary, n)
				})))
			}
			const S = ["right", "bottom"],
				I = ["right", "top"];
			var T = Object(a.b)(() => Object(c.c)({
					post: x.D
				}), (e, t) => ({
					onRemovePostFromCollection: () => e(Object(C.g)(t.collectionId, t.postId))
				}))(e => {
					const {
						post: t,
						onRemovePostFromCollection: n
					} = e;
					return t ? o.a.createElement("div", {
						className: v.a.container
					}, o.a.createElement("div", {
						className: v.a.content
					}, o.a.createElement(f.a, {
						className: v.a.title,
						target: "_blank",
						to: t.permalink
					}, t.title), o.a.createElement("div", {
						className: v.a.metaLine
					}, b.fbt._("Posted · {timeAgo}", [b.fbt._param("timeAgo", Object(g.d)(t.created / 1e3))], {
						hk: "ZVJpV"
					}))), o.a.createElement(_.a, {
						onRemoveClick: n,
						className: v.a.overflowMenu,
						dropdownId: "collection-widget-item" + t.id,
						postPermalink: t.permalink,
						targetPosition: S,
						tooltipPosition: I
					})) : o.a.createElement(j, {
						className: v.a.container,
						isLoading: !0
					})
				}),
				w = n("./src/reddit/components/Widgets/PostCollection/index.m.less"),
				P = n.n(w);
			const {
				fbt: N
			} = n("./node_modules/fbt/lib/FbtPublic.js"), M = ["right", "bottom"], D = ["right", "top"];
			class L extends o.a.PureComponent {
				constructor() {
					super(...arguments), this.renderItem = (e, t) => o.a.createElement(T, {
						collectionId: this.props.collection.id,
						key: e,
						postId: e
					})
				}
				render() {
					const {
						className: e,
						collection: t
					} = this.props, n = t.postIds.map(this.renderItem).reverse();
					return o.a.createElement("div", {
						className: Object(r.a)(e, P.a.container)
					}, o.a.createElement("div", {
						className: P.a.topRow
					}, N._("Collection", null, {
						hk: "1pY1s2"
					}), o.a.createElement(i.a, {
						className: P.a.menuButton,
						collectionId: t.id,
						isSubmitPage: !0,
						permalink: t.permalink,
						targetPosition: M,
						tooltipPosition: D
					})), o.a.createElement("h4", {
						className: P.a.collectionDescription
					}, t.title), o.a.createElement("div", {
						className: P.a.listWrapper
					}, o.a.createElement("div", {
						className: P.a.listContainer
					}, n)), o.a.createElement(h, null))
				}
			}
			t.a = L
		},
		"./src/reddit/components/Widgets/SubredditRules/Rule/index.m.less": function(e, t, n) {
			e.exports = {
				RawHTMLDisplay: "_2vztYwRKSDZV2ISjSixByA",
				rawHtmlDisplay: "_2vztYwRKSDZV2ISjSixByA",
				Chevron: "_2U-LBUvfr1W6MEMTGXgzmh",
				chevron: "_2U-LBUvfr1W6MEMTGXgzmh",
				RuleShortName: "_8ZLJI1-ZiP7pHJ_yO1L4Z",
				ruleShortName: "_8ZLJI1-ZiP7pHJ_yO1L4Z",
				pointerCursor: "_3osxlOKfiylmgqNqsW7erB",
				RuleIndex: "_36D5hmBSZbFxkFMkiWg6cY",
				ruleIndex: "_36D5hmBSZbFxkFMkiWg6cY",
				RuleTitle: "tbIApBd2DM_drfZQJjIum",
				ruleTitle: "tbIApBd2DM_drfZQJjIum",
				RuleDescription: "_2QhEclR_DjIrTv_oNU5MMN",
				ruleDescription: "_2QhEclR_DjIrTv_oNU5MMN"
			}
		},
		"./src/reddit/components/Widgets/SubredditRules/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return S
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				i = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				a = n("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/lessComponent.tsx"),
				l = n("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				u = n("./src/reddit/components/RichTextJson/index.tsx"),
				m = n("./src/reddit/helpers/dom/index.ts"),
				p = n("./src/reddit/icons/fonts/index.tsx"),
				h = n("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				b = n("./src/reddit/icons/svgs/ChevronUp/index.tsx"),
				f = n("./src/reddit/layout/threeCol/ExpandCenter/index.tsx"),
				g = n("./src/reddit/models/Widgets/index.ts"),
				C = n("./src/reddit/components/Widgets/SubredditRules/Rule/index.m.less"),
				x = n.n(C);
			const E = d.a.div("RuleShortName", x.a),
				v = d.a.div("RuleIndex", x.a),
				_ = d.a.div("RuleTitle", x.a),
				O = d.a.div("RuleDescription", x.a),
				y = d.a.wrapped(l.a, "RawHTMLDisplay", x.a),
				k = {};
			class j extends r.a.Component {
				constructor(e) {
					super(e), this.onClick = () => {
						Object(m.f)() || this.setState({
							isVisible: !this.state.isVisible
						})
					}, this.state = {
						isVisible: this.shouldShowFullDisplay(e)
					}
				}
				shouldShowFullDisplay(e) {
					return e.display === g.e.FULL
				}
				render() {
					const {
						props: e,
						state: t,
						onClick: n,
						shouldShowFullDisplay: s
					} = this, o = !!(e.rule.descriptionRichText || e.rule.descriptionHtml || e.rule.description), i = !s(e) && !!o;
					return r.a.createElement(E, {
						className: Object(c.a)({
							[x.a.pointerCursor]: i
						}),
						onClick: s(e) || !o ? void 0 : n
					}, r.a.createElement(f.a, null, r.a.createElement(v, null, `${e.humanIndex}.`), r.a.createElement(_, null, `${e.rule.shortName}`), r.a.createElement("div", null, !s(e) && o && (e.isInIcons2020 ? r.a.createElement(p.a, {
						name: t.isVisible ? "caret_up" : "caret_down"
					}) : t.isVisible ? r.a.createElement(b.a, {
						className: x.a.Chevron
					}) : r.a.createElement(h.a, {
						className: x.a.Chevron
					})))), t.isVisible && r.a.createElement(O, null, e.rule.descriptionRichText ? r.a.createElement(u.a, {
						content: JSON.parse(e.rule.descriptionRichText),
						useExplicitTextColor: !0,
						rtJsonElementProps: k
					}) : e.rule.descriptionHtml ? r.a.createElement(y, {
						html: e.rule.descriptionHtml
					}) : e.rule.description))
				}
			}
			const S = e => {
				const t = Object(a.a)();
				return e.rules.length > 0 ? r.a.createElement(i.a, {
					className: e.className,
					styles: e.styles,
					title: s.fbt._("{subredditName} Rules", [s.fbt._param("subredditName", `r/${e.subredditName}`)], {
						hk: "2AwRLk"
					}),
					redditStyle: e.redditStyle
				}, e.rules.map((function(n, s) {
					return r.a.createElement(j, {
						key: `rule${n.shortName}${n.createdUtc}`,
						rule: n,
						display: e.display,
						humanIndex: s + 1,
						isInIcons2020: t
					})
				}))) : null
			};
			t.b = e => r.a.createElement(S, {
				rules: e.widget.data || [],
				subredditName: e.subredditName,
				display: e.widget.display,
				redditStyle: e.redditStyle,
				styles: e.widget.styles
			})
		},
		"./src/reddit/components/Widgets/ThemedWidget/index.m.less": function(e, t, n) {
			e.exports = {
				widgetBackground: "_1G4yU68P50vRZ4USXfaceV",
				clickable: "_2mtWlchu4uQf339v56bSha",
				redditStyle: "_2QeqBqfT5UbHBoViZUt-wX",
				truncatedGradient: "_1lvCNVth3dt5y8lu3vT95L",
				widgetHeader: "_ZhON3a3vplThB8NFwuJn",
				widgetTitle: "_2sggAEfRQLyoAl4J__5twU",
				widgetContent: "TmgZY6tDcdErbE5d7E0HJ",
				widgetContentOnly: "_3RPJ8hHnfFohktLZca18J6",
				truncated: "r5dzQq7dgZyAmve8abbbt",
				seeMore: "_3dbp6Cm9uKkkIBr9EsU-qS"
			}
		},
		"./src/reddit/components/Widgets/ThemedWidget/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = n("./src/reddit/components/SEOTitle/index.tsx"),
				l = n("./src/reddit/components/TrackingHelper/index.tsx"),
				u = n("./src/reddit/contexts/PageLayer/index.tsx"),
				m = n("./src/reddit/controls/Button/index.tsx"),
				p = n("./src/reddit/helpers/trackers/widgets.ts"),
				h = n("./src/reddit/models/NewStructuredStyles/index.ts"),
				b = n("./src/reddit/selectors/experiments/topPosts.ts"),
				f = n("./src/reddit/selectors/structuredStyles.ts"),
				g = n("./src/reddit/selectors/user.ts"),
				C = n("./src/reddit/models/Theme/index.ts"),
				x = n("./src/reddit/models/Theme/NewColorSystem/index.ts");
			const E = e => e.styles && e.styles.backgroundColor ? e.styles.backgroundColor : Object(x.a)(e).widgetColors.sidebarWidgetBackgroundColor,
				v = e => e.styles && e.styles.headerColor ? e.styles.headerColor : Object(x.a)(e).widgetColors.sidebarWidgetHeaderColor,
				_ = e => {
					const t = E(e);
					return Object(C.f)(t)
				},
				O = e => {
					const t = v(e);
					return Object(C.f)(t)
				};
			var y = n("./src/reddit/components/Widgets/ThemedWidget/index.m.less"),
				k = n.n(y);
			const {
				fbt: j
			} = n("./node_modules/fbt/lib/FbtPublic.js"), S = Object(u.t)(), I = Object(r.b)(() => Object(i.c)({
				forceRedditStyle: (e, t) => {
					const n = Object(u.m)(e, t) || void 0,
						s = t.redditStyle || Object(f.l)(e, {
							subredditId: n
						}),
						o = Object(g.V)(e);
					return s || o
				},
				nigtmode: g.V,
				subredditId: u.m,
				topPostVariant: b.d
			}));
			class T extends o.a.Component {
				constructor() {
					super(...arguments), this.contentRef = o.a.createRef(), this.state = {
						isTruncated: !1
					}, this.handleSeeMoreClick = () => {
						const {
							subredditId: e,
							widgetKind: t
						} = this.props;
						e && t && this.props.sendEvent(Object(p.b)(e, t)), this.setState({
							isTruncated: !1
						})
					}
				}
				componentDidMount() {
					const e = this.contentRef.current,
						t = e && e.offsetHeight;
					this.props.truncateThreshold && t && t > this.props.truncateThreshold && this.setState({
						isTruncated: !0
					})
				}
				getWidgetBackgroundStyles() {
					const e = {};
					return e.backgroundColor = E(this.props), e.borderColor = Object(h.d)(e.backgroundColor, this.props.nigtmode), e.color = e.fill = _(this.props), e
				}
				getWidgetHeaderStyles() {
					const e = {};
					return e.backgroundColor = v(this.props), e.color = e.fill = O(this.props), e
				}
				render() {
					const {
						children: e,
						className: t,
						contentOnly: n,
						forceRedditStyle: s,
						headerButton: r,
						onClick: i,
						title: c,
						titleClassName: l,
						truncateThreshold: u
					} = this.props, p = n ? k.a.widgetContentOnly : k.a.widgetContent, h = !s && this.props.styles, b = h ? this.getWidgetBackgroundStyles() : {}, f = h ? this.getWidgetHeaderStyles() : {};
					return o.a.createElement("div", {
						className: Object(a.a)(t, k.a.widgetBackground, {
							[k.a.redditStyle]: s,
							[k.a.clickable]: !!i,
							[k.a.truncatedGradient]: this.state.isTruncated && !this.props.noGradient
						}),
						"data-redditstyle": s,
						onClick: i,
						style: b
					}, c && o.a.createElement("div", {
						className: k.a.widgetHeader,
						style: f
					}, o.a.createElement("div", {
						className: Object(a.a)(k.a.widgetTitle, l)
					}, o.a.createElement(d.b, {
						type: d.a.Widget
					}, c)), r), o.a.createElement("div", {
						className: Object(a.a)(p, {
							[k.a.truncated]: this.state.isTruncated
						}),
						ref: this.contentRef,
						style: {
							maxHeight: this.state.isTruncated ? u : "none"
						}
					}, e), this.state.isTruncated && o.a.createElement(m.o, {
						className: k.a.seeMore,
						onClick: this.handleSeeMoreClick
					}, j._("See More", null, {
						hk: "4w47Qu"
					})))
				}
			}
			t.a = S(I(Object(c.a)(Object(l.c)(T))))
		},
		"./src/reddit/connectors/PostViewable/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/reddit/actions/post.ts");
			t.a = (e, t) => Object(s.b)(e, ((e = {}) => ({
				...e,
				onPostViewable: o.J
			}))(t))
		},
		"./src/reddit/connectors/SubscribeButton/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				r = n("./src/reddit/actions/subscription/index.ts"),
				i = n("./src/reddit/selectors/subreddit.ts");
			t.a = Object(s.b)(() => Object(o.c)({
				userIsSubscriber: i.gb
			}), (e, {
				identifier: t
			}) => ({
				onSubscribe: () => e(r.d([t], !0)),
				onSubscriptionsRequested: () => e(r.e()),
				onUnsubscribe: () => e(r.d([t], !1))
			}))
		},
		"./src/reddit/connectors/connectClickToToggleEditor.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				r = n("./src/reddit/actions/structuredStyles/index.ts"),
				i = n("./src/reddit/selectors/activeModalId.ts"),
				a = n("./src/reddit/selectors/structuredStyles.ts"),
				c = n("./src/reddit/constants/modals.ts");
			const d = Object(o.c)({
				bladeHasUnsavedChanges: a.a,
				isEditing: a.i,
				isBladeEditorDirty: a.h,
				isModalOpen: Object(i.b)(c.a.BLADE_UNSAVED_CHANGES)
			});
			t.a = Object(s.b)(d, (e, {
				subredditId: t
			}) => ({
				requestCloseBlade: () => t && e(Object(r.h)(t))
			}))
		},
		"./src/reddit/constants/componentTestIds.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return s
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "c", (function() {
				return r
			})), n.d(t, "a", (function() {
				return i
			})), n.d(t, "e", (function() {
				return a
			}));
			const s = "comment",
				o = "comment-submission-form-markdown",
				r = "comment-submission-form-richtext",
				i = "comments-page-link-num-comments",
				a = "post-content"
		},
		"./src/reddit/constants/jsapiEvents.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "c", (function() {
				return r
			}));
			const s = "reddit",
				o = "reddit.ready",
				r = "reddit.urlChanged"
		},
		"./src/reddit/constants/postCreation.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "c", (function() {
				return r
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "f", (function() {
				return a
			})), n.d(t, "e", (function() {
				return c
			})), n.d(t, "g", (function() {
				return d
			}));
			const s = "PostCreation-AddEventButton",
				o = 500,
				r = "PostCreation-CollectionEducationTooltip",
				i = "PostCreation-EventEducationTooltip",
				a = 300,
				c = a,
				d = "PostCreation-AddToCollectionButton"
		},
		"./src/reddit/contexts/Post/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return b
			})), n.d(t, "d", (function() {
				return f
			})), n.d(t, "b", (function() {
				return g
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/reddit/constants/posts.ts"),
				a = n("./src/reddit/hooks/useMemoShallowEqual.ts"),
				c = n("./src/reddit/hooks/useUserContext.ts"),
				d = n("./src/reddit/models/User/index.ts"),
				l = n("./src/reddit/selectors/posts.ts"),
				u = n("./src/reddit/selectors/subreddit.ts");

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const p = o.a.createContext(null);

			function h(e) {
				const t = Object(r.e)(t => Object(l.D)(t, {
						postId: e
					})),
					{
						currentUser: n
					} = Object(c.a)(),
					s = Object(r.e)(e => t ? Object(u.L)(e, {
						identifier: t.belongsTo
					}) : null),
					o = (null == t ? void 0 : t.belongsTo.type) === i.a.SUBREDDIT ? s : null,
					m = !(!n || (null == t ? void 0 : t.author) !== Object(d.e)(n)),
					p = Object(r.e)(r => ({
						currentUser: n,
						imageGalleryCurrentItem: Object(l.i)(r, {
							postId: e
						}),
						isModerator: !(!o || !r.moderatingSubreddits[o.name]),
						post: t,
						postId: e,
						subreddit: o,
						subredditOrProfile: s,
						userIsOp: m
					}));
				return Object(a.a)(p)
			}

			function b(e) {
				const {
					postId: t,
					children: n
				} = e, s = h(t);
				return o.a.createElement(p.Provider, {
					value: s
				}, n)
			}

			function f(e) {
				const t = e.displayName || e.name;

				function n(n) {
					return o.a.createElement(p.Consumer, null, s => {
						if (!s) throw new Error(`No Post context for <${t}/>!`);
						return o.a.createElement(e, m({}, n, s))
					})
				}
				return n.displayName = `PostContext(${t})`, n
			}

			function g(e) {
				const t = e.displayName || e.name;

				function n(t) {
					const n = h(t.postId);
					return o.a.createElement(p.Provider, {
						value: n
					}, o.a.createElement(e, m({}, t, n)))
				}
				return n.displayName = `PostProvider(${t})`, n
			}
			t.c = p
		},
		"./src/reddit/contexts/User/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			})), n.d(t, "b", (function() {
				return m
			})), n.d(t, "c", (function() {
				return p
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/reddit/hooks/useMemoShallowEqual.ts"),
				a = n("./src/reddit/reducers/user/prefs/index.ts"),
				c = n("./src/reddit/selectors/user.ts");

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const l = o.a.createContext({
				currentUser: null,
				modModeEnabled: !1,
				nightmodeEnabled: !1,
				prefs: a.a,
				isLoggedIn: !1
			});

			function u() {
				const e = Object(r.e)(e => ({
					currentUser: Object(c.i)(e),
					modModeEnabled: e.modModeEnabled,
					nightmodeEnabled: Object(c.V)(e),
					prefs: e.user.prefs,
					isLoggedIn: Object(c.J)(e)
				}));
				return Object(i.a)(e)
			}

			function m(e) {
				return o.a.createElement(l.Provider, {
					value: u()
				}, e.children)
			}

			function p(e) {
				const t = e.displayName || e.name;

				function n(t) {
					return o.a.createElement(l.Consumer, null, n => o.a.createElement(e, d({}, t, n)))
				}
				return n.displayName = `UserContext(${t})`, n
			}
		},
		"./src/reddit/controls/CheckboxInput/index.m.less": function(e, t, n) {
			e.exports = {
				checkboxInput: "_2BPowd18EKTnfZFrj5kY3G",
				disabled: "_303iMx_S0pgrbpYhsYTV6K",
				checkboxSelected: "_2VtQ8EjxlJXdicVJhc73gQ"
			}
		},
		"./src/reddit/controls/CheckboxInput/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/Checkbox/index.tsx"),
				a = n("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
				c = n("./src/reddit/layout/row/Inline/index.tsx"),
				d = n("./src/reddit/controls/CheckboxInput/index.m.less"),
				l = n.n(d);
			t.a = e => o.a.createElement(c.a, {
				"aria-checked": !!e.value,
				"aria-disabled": e.disabled,
				"aria-labelledby": e.name,
				className: Object(r.a)(e.className, l.a.checkboxInput, e.disabled ? l.a.disabled : null),
				onClick: e.onChange && !e.disabled ? () => e.onChange(!e.value) : void 0,
				role: "checkbox"
			}, o.a.createElement("input", {
				value: e.value ? e.value.toString() : "",
				type: "hidden"
			}), e.value ? o.a.createElement(a.a, {
				className: l.a.checkboxSelected
			}) : o.a.createElement(i.a, null), e.children)
		},
		"./src/reddit/controls/ContentType/index.m.less": function(e, t, n) {
			e.exports = {
				contentTypeIcon: "_3CquMWJ6RMh8E9D-_84AtZ"
			}
		},
		"./src/reddit/controls/Dropdown/Row.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return g
			}));
			var s = n("./node_modules/lodash/throttle.js"),
				o = n.n(s),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				a = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/controls/UnstyledInternalLink/index.tsx"),
				d = n("./src/reddit/icons/fonts/DropdownTriangle/index.tsx"),
				l = n("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				u = n("./src/reddit/layout/row/InlineButton/index.tsx"),
				m = n("./src/reddit/controls/Dropdown/index.m.less"),
				p = n.n(m),
				h = n("./src/reddit/controls/Dropdown/row.m.less"),
				b = n.n(h);

			function f() {
				return (f = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			class g extends i.a.Component {
				constructor() {
					super(...arguments), this.handleMouseMove = o()(() => {
						const {
							props: e
						} = this;
						e.handleActivateRow && e.handleActivateRow(e.index)
					}, 500)
				}
				render() {
					const {
						props: e
					} = this, t = e.skipRoleAttr ? null : {
						role: "menuitem"
					}, n = Object(a.a)(b.a.iconWrapper, e.iconWrapperClassName);
					return e.href ? i.a.createElement(c.a, f({}, t, {
						id: e.id,
						className: e.className,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onMouseDown: e.onMouseDown,
						onMouseMove: this.handleMouseMove,
						onKeyDown: e.onKeydown,
						rel: e.rel,
						to: e.href
					}), e.children && i.a.createElement("span", {
						className: n
					}, e.children), i.a.createElement("span", {
						className: Object(a.a)(b.a.text, e.textClassName)
					}, e.displayText)) : i.a.createElement(u.a, f({}, t, {
						id: e.id,
						className: e.className,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onKeyDown: e.onKeydown,
						onMouseDown: e.onMouseDown,
						onMouseMove: o()(this.handleMouseMove, 500)
					}), e.children && (e.noIcon ? i.a.createElement("div", null, e.children) : i.a.createElement("span", {
						className: n
					}, e.children)), e.displayText && i.a.createElement("span", {
						className: Object(a.a)(b.a.text, e.textClassName)
					}, e.displayText), e.showSelectedCheckmark && e.isSelected && i.a.createElement(l.a, {
						className: b.a.checkmark
					}), e.showDropdownTriangle && i.a.createElement(d.a, {
						className: p.a.dropdownTriangle
					}))
				}
			}
			t.b = ({
				className: e,
				...t
			}) => {
				const n = Object(a.a)(b.a.row, e, {
					[b.a.mIsInteractive]: !t.noHover,
					[b.a.mIsSelected]: t.isSelected,
					[b.a.topics]: t.isTopicsStyle
				});
				return i.a.createElement(g, f({
					className: n
				}, t))
			}
		},
		"./src/reddit/controls/Dropdown/row.m.less": function(e, t, n) {
			e.exports = {
				iconWrapper: "pthKOcceozMuXLYrLlbL1",
				iconStyles: "_2XOVBjNLHjJIznEsn35vs2",
				text: "_2-cXnP74241WI7fpcpfPmg",
				row: "_3LwUIE7yX7CZQKmD2L87vf",
				topics: "kR_ljR-F8vtc-ORj1uipB",
				checkmark: "_3Iua3qlR9JiTwjjk6NKye1",
				mIsSelected: "_1IKtbRloF_LV1hPqMzP3MC",
				mIsInteractive: "_1oYEKCssGFjqxQ9jJMNj5G"
			}
		},
		"./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less": function(e, t, n) {
			e.exports = {
				wrapper: "_2AfJEqW9tv4b_kolKEuS9K",
				titleRow: "p4QfstubN5cRxd-gy8gFH",
				detailsContainer: "_2V3KEAhexNh-mP3TbrVClC",
				buttonRow: "_1fcbQFwN65ik28DNmWnpX4",
				confirmButton: "zcMEJWBL7q-mYGOPSpjN-"
			}
		},
		"./src/reddit/controls/ErrorText/index.m.less": function(e, t, n) {
			e.exports = {
				wrapper: "_2hGJP-9xfXBXd0wqhBLHhY",
				description: "_3h_9YwxjuOr77VhScPrjCI",
				moreText: "_1Y0BrhDgcSTeSYvmSPYepI"
			}
		},
		"./src/reddit/controls/ErrorText/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return j
			})), n.d(t, "c", (function() {
				return S
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/lodash/uniqueId.js"),
				r = n.n(o),
				i = n("./node_modules/raf/index.js"),
				a = n.n(i),
				c = n("./node_modules/react/index.js"),
				d = n.n(c),
				l = n("./node_modules/react-redux/es/index.js"),
				u = n("./node_modules/reselect/es/index.js"),
				m = n("./src/lib/classNames/index.ts"),
				p = n("./src/reddit/actions/modal.ts"),
				h = n("./src/reddit/selectors/activeModalId.ts"),
				b = n("./src/higherOrderComponents/asModal/index.tsx"),
				f = n("./src/reddit/controls/Button/index.tsx"),
				g = n("./src/reddit/layout/row/Inline/index.tsx"),
				C = n("./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less"),
				x = n.n(C);
			var E = Object(b.a)(e => {
					const {
						children: t,
						title: n
					} = e;
					return d.a.createElement("div", {
						className: x.a.wrapper
					}, d.a.createElement(g.a, {
						className: x.a.titleRow
					}, n), d.a.createElement("div", {
						className: x.a.detailsContainer
					}, t), d.a.createElement(g.a, {
						className: x.a.buttonRow
					}, d.a.createElement(f.i, {
						className: x.a.confirmButton,
						onClick: e.onConfirmed
					}, s.fbt._("Ok", null, {
						hk: "2Giu9U"
					}))))
				}),
				v = n("./src/reddit/controls/ErrorText/index.m.less"),
				_ = n.n(v);
			const O = Object(u.c)({
				activeModalId: h.a
			});
			class y extends d.a.Component {
				constructor(e) {
					super(e), this.spanRef = d.a.createRef(), this.toggleModal = () => {
						this.props.toggleErrorTextModal(this.state.modalId)
					}, this.state = {
						textHasOverflowed: !1,
						modalId: `ErrorTextModal--${r()()}`
					}
				}
				componentDidMount() {
					this.calcTextDidOverflow()
				}
				componentDidUpdate() {
					this.calcTextDidOverflow()
				}
				calcTextDidOverflow() {
					a()(() => {
						const e = this.spanRef.current;
						if (!e) return;
						const t = e.scrollWidth > e.clientWidth;
						this.setState(e => e.textHasOverflowed !== t ? {
							textHasOverflowed: t
						} : null)
					})
				}
				render() {
					const {
						children: e,
						activeModalId: t,
						className: n,
						errorModalBody: o,
						errorModalTitle: r = s.fbt._("Error", null, {
							hk: "2nPF4G"
						}),
						moreText: i = s.fbt._("More", null, {
							hk: "1bCAQ0"
						})
					} = this.props, {
						modalId: a,
						textHasOverflowed: c
					} = this.state;
					return d.a.createElement("div", {
						className: Object(m.a)(_.a.wrapper, n)
					}, d.a.createElement("span", {
						className: _.a.description,
						ref: this.spanRef
					}, e), c && d.a.createElement("span", {
						className: _.a.moreText,
						onClick: this.toggleModal
					}, i), t === a && d.a.createElement(E, {
						onConfirmed: this.toggleModal,
						title: r
					}, o || e))
				}
			}
			const k = Object(l.b)(O, e => ({
					toggleErrorTextModal: t => e(Object(p.i)(t))
				}))(y),
				j = e => {
					const {
						className: t,
						errorClassName: n,
						errorModalTitle: s,
						fallbackMessage: o,
						messages: r = []
					} = e, i = r.length ? r : o ? [o] : [];
					return i.length ? d.a.createElement("div", {
						className: t
					}, i.map((e, t) => d.a.createElement(k, {
						className: n,
						errorModalTitle: s,
						key: t
					}, e))) : null
				},
				S = e => d.a.createElement(j, {
					fallbackMessage: s.fbt._("Something went wrong", null, {
						hk: "Cw1BT"
					}),
					messages: e
				});
			t.b = k
		},
		"./src/reddit/controls/FileDrop/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/lodash/flow.js"),
				o = n.n(s),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				a = n("./node_modules/react-dnd/lib/index.js"),
				c = n("./node_modules/react-dnd-html5-backend/lib/index.js"),
				d = n("./src/reddit/helpers/dragDropContext/index.ts");
			const l = c.NativeTypes.FILE,
				u = o()(Object(a.DropTarget)(l, {
					drop: (e, t) => {
						if (t && t.didDrop() || !t) return;
						const n = t.getItem();
						n.files && e.onDrop(n.files)
					}
				}, (e, t) => ({
					connectDropTarget: e.dropTarget(),
					isOver: t.isOver(),
					canDrop: t.canDrop()
				})), d.a);
			class m extends i.a.Component {
				render() {
					return this.props.connectDropTarget ? this.props.connectDropTarget(i.a.createElement("div", {
						className: this.props.className
					}, this.props.render(this.props.isOver, this.props.canDrop))) : null
				}
			}
			t.a = u(m)
		},
		"./src/reddit/controls/FormFields/index.m.less": function(e, t, n) {
			e.exports = {
				input: "_3CWuMoFPzdbJCxYJVmEw00",
				label: "J4DegnzzIY1-C2PFzYkrA",
				mHasValue: "t09kxBqaSw0Is_F5sUdQ1",
				inputWrapper: "_3TCLGRXxb1PXK-_sziBD2q",
				mIsInvalid: "_1pMjk4nL9CObVggXCSuELu",
				inputMovingLabelWrapper: "_2-meAmTwsZSCNYrpbEy7BX",
				mIsRedditStyle: "_3ONm7CsU4BtjX9jO5WYv2X",
				trash: "_2YUtyje1Y5rUty_3zgPOGM",
				trashContainer: "_2wjFyjW1rwWs4WFcSc7xNl",
				plus: "_3o11DwChSYlSiDT6FYqOIE",
				addValueButton: "_1Dm7EZTfDne90O5xANs501",
				multiInputWrapper: "_3CjWcr8XyX0xN32ADxPngu",
				errorText: "_2JNX-DiHbrfxhFYgkcBNaK"
			}
		},
		"./src/reddit/controls/FormFields/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return p
			})), n.d(t, "b", (function() {
				return b
			})), n.d(t, "c", (function() {
				return f
			})), n.d(t, "d", (function() {
				return x
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/controls/ErrorText/index.tsx"),
				c = n("./src/reddit/icons/svgs/Plus/index.tsx"),
				d = n("./src/reddit/icons/svgs/Trash2/index.tsx"),
				l = n("./src/reddit/controls/FormFields/index.m.less"),
				u = n.n(l);

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const p = i.a.input("input", u.a),
				h = e => {
					"LABEL" === e.target.tagName && (e.target.parentElement.firstElementChild.focus(), e.stopPropagation())
				},
				b = e => {
					const {
						label: t,
						children: n,
						inputRef: s,
						className: i,
						...a
					} = e, c = void 0 !== e.value && "" !== e.value;
					return o.a.createElement("div", {
						className: Object(r.a)(u.a.inputWrapper, i, {
							[u.a.mIsInvalid]: e.isInvalid
						}),
						onClick: h
					}, o.a.createElement(p, m({
						"aria-invalid": e.isInvalid,
						innerRef: s
					}, a)), e.label && o.a.createElement("label", {
						className: Object(r.a)(u.a.label, {
							[u.a.mHasValue]: c
						})
					}, e.label), e.children)
				},
				f = e => {
					const {
						label: t,
						children: n,
						inputRef: s,
						isInvalid: i,
						className: a,
						redditStyle: c,
						...d
					} = e, l = void 0 !== e.value && "" !== e.value;
					return o.a.createElement("div", {
						className: Object(r.a)(u.a.inputMovingLabelWrapper, a, {
							[u.a.mIsInvalid]: i,
							[u.a.mIsRedditStyle]: c
						}),
						onClick: h
					}, o.a.createElement(p, m({
						innerRef: s
					}, d)), e.label && o.a.createElement("label", {
						className: Object(r.a)(u.a.label, {
							[u.a.mHasValue]: l
						})
					}, e.label), e.children)
				},
				g = e => o.a.createElement("div", {
					className: Object(r.a)(u.a.addValueButton, e.className),
					onClick: e.onClick
				}, e.text, " ", o.a.createElement(c.a, {
					className: u.a.plus
				}));
			var C;
			! function(e) {
				e[e.ADD = 0] = "ADD", e[e.REMOVE = 1] = "REMOVE"
			}(C || (C = {}));
			class x extends o.a.Component {
				constructor() {
					super(...arguments), this.state = {
						addingNewInputs: !1
					}, this.addValue = () => {
						const e = this.props.values.slice();
						this.props.buttonOnTop ? e.unshift("") : e.push(""), this.props.onChange(e), this.props.onEvent && this.props.onEvent({
							action: C.ADD
						})
					}, this.updateValue = (e, t) => {
						const n = this.props.values.slice();
						n[t] = e.target.value, this.props.onChange(n)
					}, this.removeValue = e => {
						const t = this.props.values.slice(),
							n = t[e];
						t.splice(e, 1), this.props.onChange(t), this.props.onEvent && this.props.onEvent({
							action: C.REMOVE,
							value: n,
							index: e
						})
					}
				}
				componentWillReceiveProps(e) {
					e.values.length > this.props.values.length && this.setState({
						addingNewInputs: !0
					})
				}
				componentDidUpdate() {
					this.focusedInput && this.state.addingNewInputs && (this.focusedInput.focus(), this.setState({
						addingNewInputs: !1
					}))
				}
				setInputRef(e, t) {
					this.state.addingNewInputs && (!this.props.buttonOnTop || this.props.buttonOnTop && !t) && (this.focusedInput = e)
				}
				renderFields() {
					const {
						values: e,
						disabled: t,
						label: n,
						placeholder: s,
						errors: r = []
					} = this.props;
					return e.map((e, i) => o.a.createElement(b, {
						inputRef: e => this.setInputRef(e, i),
						isInvalid: !!r[i],
						disabled: t,
						type: "text",
						label: n,
						onChange: e => this.updateValue(e, i),
						placeholder: s,
						value: e,
						style: {
							paddingRight: "36px"
						}
					}, o.a.createElement("div", {
						className: u.a.trashContainer,
						onClick: () => this.removeValue(i)
					}, o.a.createElement(d.b, {
						className: u.a.trash
					})), !!r[i] && o.a.createElement(a.b, {
						className: u.a.errorText
					}, r[i])))
				}
				render() {
					const {
						className: e,
						buttonOnTop: t,
						values: n,
						maxLength: s,
						addValueText: i,
						disabled: a
					} = this.props;
					this.focusedInput = null;
					const c = !(!!s && n.length >= s) && !a;
					return o.a.createElement("div", {
						className: Object(r.a)(u.a.multiInputWrapper, e)
					}, t && c && o.a.createElement(g, {
						onClick: this.addValue,
						text: i
					}), this.renderFields(), !t && c && o.a.createElement(g, {
						onClick: this.addValue,
						text: i
					}))
				}
			}
		},
		"./src/reddit/controls/GrowingOutlinedInput/index.m.less": function(e, t, n) {
			e.exports = {
				growingOutlinedInput: "PqYQ3WC15KaceZuKcFI02"
			}
		},
		"./src/reddit/controls/Input/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/lessComponent.tsx"),
				o = n("./src/reddit/controls/Input/index.m.less"),
				r = n.n(o);
			t.a = s.a.input("input", r.a)
		},
		"./src/reddit/controls/LoadingIcon/index.m.less": function(e, t, n) {
			e.exports = {
				loadingIcon: "_3LwT7hgGcSjmJ7ng7drAuq",
				spin: "ibDwUVR1CAykturOgqOS5",
				mCentered: "_2qr28EeyPvBWAsPKl-KuWN"
			}
		},
		"./src/reddit/controls/LoadingIcon/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/controls/LoadingIcon/index.m.less"),
				a = n.n(i);
			t.a = ({
				center: e,
				className: t,
				sizePx: n = 10
			}) => o.a.createElement("div", {
				className: Object(r.a)(a.a.loadingIcon, t, {
					[a.a.mCentered]: e
				}),
				style: {
					"--sizePx": `${n}px`
				}
			})
		},
		"./src/reddit/controls/OutboundLink/styled.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/lessComponent.tsx"),
				o = n("./src/reddit/constants/elementClassNames.ts"),
				r = n("./src/reddit/controls/OutboundLink/index.tsx"),
				i = n("./src/reddit/controls/OutboundLink/styles.m.less"),
				a = n.n(i);
			t.a = s.a.wrapped(r.b, "styledOutboundLink", {
				styledOutboundLink: `${a.a.styledOutboundLink} ${o.l}`
			})
		},
		"./src/reddit/controls/OutboundLink/styles.m.less": function(e, t, n) {
			e.exports = {
				styledOutboundLink: "_13svhQIUZqD9PVzFcLwOKT"
			}
		},
		"./src/reddit/controls/PillButton/index.m.less": function(e, t, n) {
			e.exports = {
				buttonContent: "_1HZjnB8bOdf81CZAkyN--u",
				PostActionButton: "YfC3dzPFWzw5Uh7t4eyxX",
				postActionButton: "YfC3dzPFWzw5Uh7t4eyxX",
				hasChildren: "_3sJWr2xzgQoVrLxbXYMKMY",
				background: "_3LYd27k2O7QQ4CB0n5l7IN",
				dark: "_11omUhmjhXU71rMQXq6aUQ",
				nightmode: "_2u4At4RuG5uMjsOyaMMJf-",
				upvote: "n74nWMQQf9xC988xNT4Od",
				activated: "E_CLGFtNN90EX8GK9sLoc",
				downvote: "_3D7vLfQ-NjeRYo1ZkeKvV5",
				gold: "_1x7f7HYHYhd_oc-kQKIj0G",
				blue: "_1dkGQtTxIMonqw2p5jWSbs",
				approve: "NhkZC_8NIYGBrP6qpr3PO",
				remove: "U0T8jceDCBfr8JH93t7wD",
				buttonChildren: "_3SSQaDQCW4r6GrvCSg9opO",
				compact: "_2OVRjKU_PrPyp2RjgIaMmv",
				classic: "_12vyrBVZ9uMjEDwrAWWkNl"
			}
		},
		"./src/reddit/controls/RadioInput/RadioOption/index.m.less": function(e, t, n) {
			e.exports = {
				radioOption: "_2e6fJknJ4noSygWYov8-F1",
				radioOff: "_1lzSnSABNXX12WerTnwqI3",
				radioOn: "_3PYsg_uRJ6AGptv-hi7kqu"
			}
		},
		"./src/reddit/controls/RadioInput/RadioOption/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/constants/keycodes.ts"),
				a = n("./src/reddit/icons/svgs/RadioOff/index.tsx"),
				c = n("./src/reddit/icons/svgs/RadioOn/index.tsx"),
				d = n("./src/reddit/layout/row/Inline/index.tsx"),
				l = n("./src/reddit/controls/RadioInput/RadioOption/index.m.less"),
				u = n.n(l);
			class m extends o.a.Component {
				constructor() {
					super(...arguments), this.ref = null, this.onKeyPress = e => {
						const {
							props: t
						} = this;
						t.disabled || e.key !== i.b.Enter && e.key !== i.b.Space || (t.onClick && t.onClick(t.value), e.preventDefault())
					}
				}
				componentDidUpdate(e) {
					this.props.selected && !e.selected && this.ref && this.ref.focus()
				}
				render() {
					const {
						props: e
					} = this;
					return e.hidden ? null : o.a.createElement(d.a, {
						"aria-checked": e.selected,
						className: Object(r.a)(e.className, u.a.radioOption),
						innerRef: e => this.ref = e,
						onClick: e.disabled ? void 0 : e.onClick,
						onKeyPress: this.onKeyPress,
						role: "radio",
						tabIndex: e.tabIndex
					}, e.showButton && (e.selected ? o.a.createElement(c.a, {
						className: u.a.radioOn,
						role: "presentation"
					}) : o.a.createElement(a.a, {
						className: u.a.radioOff,
						role: "presentation"
					})), e.children)
				}
			}
			t.a = m
		},
		"./src/reddit/controls/RadioInput/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/constants/keycodes.ts");
			class i extends o.a.Component {
				constructor(e) {
					super(e), this.handleClick = e => {
						const {
							disabled: t,
							onChange: n
						} = this.props;
						t || this.state.value !== e && (n(e), this.setState({
							value: e
						}))
					}, this.getValues = () => {
						const e = [];
						return o.a.Children.forEach(this.props.children, t => {
							t.props.hidden || t.props.disabled || e.push(t.props.value)
						}), e
					}, this.onKeyDown = e => {
						const {
							disabled: t,
							onChange: n
						} = this.props, {
							value: s
						} = this.state;
						if (t) return;
						const o = e.key === r.b.ArrowUp,
							i = e.key === r.b.ArrowDown;
						if (o || i) {
							const t = this.getValues();
							if (!t.length) return;
							const r = s ? t.indexOf(s) : 0,
								i = t[((o ? r - 1 : r + 1) + t.length) % t.length];
							n(i), this.setState({
								value: i
							}), e.preventDefault()
						}
					}, this.state = {
						value: e.value || null
					}
				}
				UNSAFE_componentWillReceiveProps(e) {
					e.value !== this.props.value && this.setState({
						value: e.value || null
					})
				}
				render() {
					const {
						props: e
					} = this, {
						value: t
					} = this.state;
					return o.a.createElement("div", {
						"aria-label": e.name,
						className: e.className,
						role: "radiogroup",
						onKeyDown: this.onKeyDown
					}, o.a.createElement("input", {
						disabled: e.disabled,
						type: "hidden",
						value: t || ""
					}), o.a.Children.map(e.children, (n, s) => {
						const r = 0 === s,
							i = n.props.value === t,
							a = null !== t ? i ? 0 : -1 : r ? 0 : -1;
						return o.a.cloneElement(n, {
							disabled: e.disabled,
							onClick: e => this.handleClick(n.props.value),
							selected: i,
							tabIndex: a
						})
					}))
				}
			}
		},
		"./src/reddit/controls/Sortable/index.tsx": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/helpers/dragDropContext/index.ts"),
				i = n("./node_modules/lodash/flow.js"),
				a = n.n(i),
				c = n("./node_modules/react-dnd/lib/index.js");
			class d extends o.a.Component {
				constructor() {
					super(...arguments), this.handleClick = () => {
						this.props.onClick && this.props.onClick(this.props.id, this.props.index)
					}
				}
				render() {
					const {
						props: e
					} = this;
					return e.connectDropTarget && e.connectDragSource ? a()(e.connectDropTarget, e.connectDragSource)(o.a.createElement("div", {
						onClick: this.handleClick
					}, e.render(e.id, e.index, e.isDragging, e.isOver, e.canDrop))) : null
				}
			}
			var l = a()(Object(c.DragSource)("card", {
				beginDrag: e => ({
					id: e.id,
					index: e.index
				}),
				endDrag: (e, t) => {
					if (t && t.didDrop()) {
						const n = t.getDropResult();
						e.onDrop(e.id, n.id)
					}
				}
			}, (e, t) => ({
				connectDragSource: e.dragSource(),
				isDragging: t.isDragging()
			})), Object(c.DropTarget)("card", {
				drop: (e, t) => {
					if (!t || !t.didDrop()) return {
						id: e.id,
						index: e.index
					}
				},
				canDrop: (e, t) => {
					if (!t) return !1;
					const n = t.getItem();
					return e.id !== n.id
				}
			}, (e, t) => ({
				connectDropTarget: e.dropTarget(),
				isOver: t.isOver(),
				canDrop: t.canDrop()
			})))(d);
			class u extends o.a.Component {
				constructor(e) {
					super(e), this.onDrop = (e, t) => {
						this.setState(n => {
							const s = n.values.slice(),
								o = s.indexOf(e),
								r = s.splice(o, 1)[0];
							let i = s.indexOf(t);
							return o <= i && (i += 1), s.splice(i, 0, r), this.props.onDrop(e, t, s), {
								values: s
							}
						})
					}, this.state = {
						values: e.values
					}
				}
				componentWillReceiveProps(e) {
					this.setState(() => ({
						values: e.values
					}))
				}
				render() {
					const {
						className: e,
						getReactKey: t,
						onClick: n,
						render: s
					} = this.props;
					return o.a.createElement("div", {
						className: e
					}, this.state.values.map((e, r) => o.a.createElement(l, {
						id: e,
						key: t && t(e, r),
						index: r,
						render: s,
						onDrop: this.onDrop,
						onClick: n
					})))
				}
			}
			t.a = Object(r.a)(u)
		},
		"./src/reddit/controls/SubredditPicker/Picker/SearchBar/index.m.less": function(e, t, n) {
			e.exports = {
				input: "_1MHSX9NVr4C2QxH2dMcg4M",
				inputWrapper: "anPJr_ybRailY8NbAunl2",
				searchBar: "_3cWzf-usAKfGV1Ay7h2zM_",
				commonIconStyles: "_3UX5zf2Jh7UCwxr3e1Rrt2",
				dropdownIcon: "_15FJlGHQ_lg8wmnMsXlnes",
				iconEmpty: "_3adQsrepNO01e3sMjt2z0P",
				subredditRoundIcon: "jpIFeDw811_DQwlQEqBjm",
				userIcon: "_1Xb3_WGBJKTWZNy0MHWTsR",
				searchIcon: "_2MCEtCukiOUDUHF1PDgWwH",
				mDisabled: "I8Mbkr_v6UNBq2UjXD24r"
			}
		},
		"./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/DropdownEntry/index.m.less": function(e, t, n) {
			e.exports = {
				entry: "_2_6Q3rlmltjQM8nEBoNJr-",
				disabled: "_1eGUunOsIyMkgTF3IiieVl"
			}
		},
		"./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/DropdownSection/index.m.less": function(e, t, n) {
			e.exports = {
				title: "-T-WBPEANCCRwTdAGSdj_",
				dropdownSection: "_2MAa_9ffQVHzsZ-RD1dD5F"
			}
		},
		"./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/EntryContent/PostTypes/index.m.less": function(e, t, n) {
			e.exports = {
				iconWrapper: "_2jjSvas2tvdAFgIvSzSBax",
				mDisabled: "_2PoEIlhFzgV0sUWfM40K-N",
				rowStyle: "_3DfMNtnkrzHeGN0WyUTTuX"
			}
		},
		"./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/EntryContent/index.m.less": function(e, t, n) {
			e.exports = {
				subredditIcon: "vxu9qtznQ1Kvakd5mtfxV",
				main: "_11CAFoZ5ryUXHrO5iX6Ktk",
				title: "_1bEDlh2fhWPx9-h3IqUvFa",
				secondary: "_2q4aqq7yddFWa3SfRCihRH",
				container: "_3oyS3dPRsa51zDEONlIdts",
				mHighLight: "F6s6qTIrbT1UvKhtNmPq4"
			}
		},
		"./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/ProfileEntryContent/index.m.less": function(e, t, n) {
			e.exports = {
				profileIcon: "_3JCR5jV3N1dbyHaUswxl4K"
			}
		},
		"./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/SubredditEntryContent/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_20inB3H1vZ94tVilqSJmU2"
			}
		},
		"./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/index.m.less": function(e, t, n) {
			e.exports = {
				noMatches: "kaGogHhtbK_vPZj9943oa",
				container: "_3DQXGvoE1SM3Kmz20of7Iz",
				mIsValid: "_28z84WGIIVp4uDMcA3-Kgw",
				mIsVisible: "_3009h778F7QI2qu6YmsxVV"
			}
		},
		"./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return J
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/lodash/debounce.js"),
				r = n.n(o),
				i = n("./node_modules/react/index.js"),
				a = n.n(i),
				c = n("./src/lib/classNames/index.ts");
			const d = {
				leading: !0,
				trailing: !1
			};
			var l = (e, t, n, s = d) => {
					const o = {
							...d,
							...s
						},
						r = t > e ? 1 : -1;
					let i = e;
					if (e !== t) {
						for (o.leading || (i += r); i !== t;) n(i), i += r;
						o.trailing && n(i)
					} else(o.leading || o.trailing) && n(e)
				},
				u = n("./src/lib/forEachGroup/index.ts"),
				m = n("./src/reddit/models/SubredditAutocomplete/index.ts"),
				p = n("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/DropdownEntry/index.m.less"),
				h = n.n(p);
			class b extends i.Component {
				constructor(e) {
					super(e), this.mouseDown = !1, this.element = null, this.setRef = e => this.element = e, this.onMouseUp = () => {
						this.mouseDown && (this.props.disabled || this.props.onSelect(this.props.entryIndex), this.mouseDown = !1)
					}, this.onMouseDown = e => {
						this.mouseDown = !0, e.preventDefault()
					}, this.onMouseOver = () => {
						this.props.onOver(this.props.entryIndex)
					}, this.mouseDown = !1
				}
				componentDidUpdate() {
					this.mouseDown = !1, this.element && this.props.onUpdate(this.props.entryIndex, this.element)
				}
				render() {
					return a.a.createElement("div", {
						className: Object(c.a)(h.a.entry, this.props.disabled && h.a.disabled),
						onMouseDown: this.onMouseDown,
						onMouseOver: this.onMouseOver,
						onMouseUp: this.onMouseUp,
						ref: this.setRef
					}, this.props.children)
				}
			}
			var f = n("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/DropdownSection/index.m.less"),
				g = n.n(f);

			function C() {
				return (C = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var x = ({
					className: e,
					children: t,
					title: n,
					...s
				}) => a.a.createElement("div", C({
					className: Object(c.a)(g.a.dropdownSection, e)
				}, s), n && a.a.createElement("div", {
					className: g.a.title
				}, n), t),
				E = n("./src/reddit/components/UserIcon/CurrentUserIcon.tsx"),
				v = n("./src/reddit/helpers/name/index.ts"),
				_ = n("./src/lib/lessComponent.tsx"),
				O = n("./src/reddit/components/SubredditIcon/index.tsx"),
				y = n("./src/reddit/icons/svgs/ImagePost/index.tsx"),
				k = n("./src/reddit/icons/svgs/Link/index.tsx"),
				j = n("./src/reddit/icons/svgs/TextPost/index.tsx"),
				S = n("./src/reddit/icons/svgs/Video/index.tsx"),
				I = n("./src/reddit/layout/row/Inline/index.tsx"),
				T = n("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/EntryContent/PostTypes/index.m.less"),
				w = n.n(T);
			const P = [{
				type: "text",
				Icon: j.a
			}, {
				type: "images",
				Icon: y.a
			}, {
				type: "videos",
				Icon: S.a
			}, {
				type: "links",
				Icon: k.a
			}];

			function N(e) {
				const {
					allowedPostTypes: t,
					className: n
				} = e;
				return a.a.createElement(I.a, {
					className: Object(c.a)(w.a.rowStyle, n)
				}, P.map(({
					type: e,
					Icon: n
				}) => a.a.createElement("div", {
					className: Object(c.a)(w.a.iconWrapper, {
						[w.a.mDisabled]: !t[e]
					})
				}, a.a.createElement(n, null))))
			}
			var M = n("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/EntryContent/index.m.less"),
				D = n.n(M);
			const L = _.a.wrapped(O.b, "subredditIcon", D.a);

			function R(e) {
				const {
					highlight: t,
					icon: n,
					title: s,
					secondaryText: o,
					item: r
				} = e, {
					allowedPostTypes: i
				} = r;
				return a.a.createElement("div", {
					className: Object(c.a)(D.a.container, {
						[D.a.mHighlight]: t
					})
				}, n, a.a.createElement("div", {
					className: D.a.main
				}, a.a.createElement("span", {
					className: D.a.title
				}, s), o && a.a.createElement("span", {
					className: D.a.secondary
				}, o)), t && i && a.a.createElement(N, {
					allowedPostTypes: i
				}))
			}
			var F = n("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/ProfileEntryContent/index.m.less"),
				A = n.n(F);

			function B() {
				return (B = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}

			function U(e) {
				const {
					item: {
						name: t,
						subscribers: n
					}
				} = e, o = Object(v.d)(t), r = void 0 !== n ? s.fbt._({
					"*": "{number} members",
					_1: "1 member"
				}, [s.fbt._plural(n, "number")], {
					hk: "2SvJUX"
				}) : void 0, i = a.a.createElement(E.a, {
					className: Object(c.a)(A.a.profileIcon, D.a.subredditIcon)
				});
				return a.a.createElement(R, B({
					icon: i,
					title: o,
					secondaryText: r
				}, e))
			}
			var V = n("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/SubredditEntryContent/index.m.less"),
				W = n.n(V);

			function G() {
				return (G = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}

			function H(e) {
				const {
					item: {
						primaryColor: t,
						iconUrl: n,
						name: o,
						subscribers: r
					}
				} = e, i = Object(v.c)(o), c = void 0 !== r ? s.fbt._({
					"*": "{number} members",
					_1: "1 member"
				}, [s.fbt._plural(r, "number")], {
					hk: "2SvJUX"
				}) : void 0, d = a.a.createElement(L, {
					className: W.a.icon,
					iconUrl: n,
					primaryColor: t,
					redditStyle: !0
				});
				return a.a.createElement(R, G({
					icon: d,
					title: i,
					secondaryText: c
				}, e))
			}
			var q = n("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/index.m.less"),
				K = n.n(q);
			const z = {
				[m.a.OWN_PROFILE]: () => s.fbt._("Your profile", null, {
					hk: "1Qoy4P"
				}),
				[m.a.SUBSCRIBED_TO_SUBREDDIT]: () => s.fbt._("My communities", null, {
					hk: "2NVUpl"
				}),
				[m.a.OTHER_SUBREDDIT]: () => s.fbt._("Others", null, {
					hk: "3WQHlu"
				}),
				[m.a.MODERATED_SUBREDDIT]: () => s.fbt._("Moderated subreddits", null, {
					hk: "uZtld"
				})
			};
			class J extends a.a.PureComponent {
				constructor() {
					super(...arguments), this.selectedEntryElement = null, this.containerElement = null, this.ignoreEntryOverEvents = !1, this.activateEntryOverEvents = r()(() => this.ignoreEntryOverEvents = !1, 100), this.setContainerRef = e => this.containerElement = e, this.onEntryUpdate = (e, t) => {
						e === this.props.focusedIndex && (this.selectedEntryElement = t)
					}, this.onScroll = () => {
						this.ignoreEntryOverEvents && this.activateEntryOverEvents()
					}, this.onEntryOver = e => {
						this.ignoreEntryOverEvents || this.props.items[e].disabled || this.props.onEntryFocus(e), this.ignoreEntryOverEvents = !1
					}
				}
				componentDidUpdate() {
					if (this.props.focusedIndex >= 0 && this.selectedEntryElement && this.containerElement) {
						const e = this.selectedEntryElement.getBoundingClientRect(),
							t = this.containerElement.getBoundingClientRect();
						(e.top < t.top || e.bottom > t.bottom) && (this.ignoreEntryOverEvents = !0, 0 === this.props.focusedIndex ? this.containerElement.scrollTop = 0 : this.selectedEntryElement.scrollIntoView(e.top < t.top)), this.props.onEntryFocus(this.props.focusedIndex)
					}
				}
				getEntryContentComponent(e, t) {
					switch (e) {
						case m.a.OWN_PROFILE:
							return U;
						default:
							return H
					}
				}
				render() {
					const {
						focusedIndex: e,
						items: t
					} = this.props, n = [];
					return this.props.showNoMatchesCaption && n.push(a.a.createElement(x, {
						key: "no-matches"
					}, a.a.createElement("div", {
						className: K.a.noMatches
					}, s.fbt._("No communities found", null, {
						hk: "4wDUHv"
					})))), Object(u.a)(t, {
						keyFn: e => e.type
					}, (s, o, r, i) => {
						const c = [];
						l(r, i, n => {
							const s = t[n],
								o = n === e,
								r = this.getEntryContentComponent(s.type, s.name);
							r && c.push(a.a.createElement(b, {
								entryIndex: n,
								disabled: s.disabled,
								key: s.id || s.name,
								onSelect: this.props.onEntrySelect,
								onOver: this.onEntryOver,
								onUpdate: this.onEntryUpdate
							}, a.a.createElement(r, {
								highlight: o,
								item: s
							})))
						});
						const d = z[o];
						n.push(a.a.createElement(x, {
							key: o,
							title: d && d()
						}, c))
					}), a.a.createElement("div", {
						className: Object(c.a)(K.a.container, this.props.className, {
							[K.a.mIsValid]: this.props.isValid,
							[K.a.mIsVisible]: n.length > 0
						}),
						ref: this.setContainerRef,
						onMouseDown: this.props.onContainerMouseDown,
						onScroll: this.onScroll
					}, n)
				}
			}
		},
		"./src/reddit/controls/SubredditPicker/Picker/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_2sfaZWDVT8JLAt2J9p4IzV",
				mIsActive: "_1d_qHIhircwk0cy-gLlRQq",
				mIsInvalid: "_3sp2CpDC4eODg63Hhf8_lz"
			}
		},
		"./src/reddit/controls/SubredditPicker/helpers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return l
			})), n.d(t, "a", (function() {
				return u
			})), n.d(t, "c", (function() {
				return h
			}));
			var s = n("./src/reddit/constants/posts.ts"),
				o = n("./src/reddit/helpers/getSubredditOrProfileIconData/index.tsx"),
				r = n("./src/reddit/helpers/name/index.ts"),
				i = n("./src/reddit/models/SubredditAutocomplete/index.ts"),
				a = n("./src/reddit/models/User/index.ts");
			const c = (e, t, n) => {
					if (Object(r.a)(e, t.name)) {
						const {
							id: e,
							name: i
						} = t, {
							url: a,
							color: c
						} = Object(o.a)({
							shouldHideNsfwIcon: n,
							subredditOrProfile: t
						});
						return {
							rawString: Object(r.c)(i),
							record: {
								id: e,
								name: i,
								iconUrl: a,
								primaryColor: c,
								type: s.a.SUBREDDIT
							}
						}
					}
					return {
						rawString: e,
						record: null
					}
				},
				d = (e, t, n) => {
					const o = Object(a.e)(t);
					if (Object(r.a)(e, o)) {
						const {
							id: e,
							accountIcon: n
						} = t;
						return {
							rawString: Object(r.d)(o),
							record: {
								id: e,
								name: o,
								iconUrl: n,
								type: s.a.PROFILE
							}
						}
					}
					return {
						rawString: e,
						record: null
					}
				},
				l = (e, t, n, s) => {
					if (t && (!n || Object(r.e)(e))) return c(e, t, s);
					if (n && (!t || Object(r.f)(e))) return d(e, n);
					if (t && n) {
						const o = c(e, t, s);
						return o.record ? o : d(e, n)
					}
					return {
						rawString: e,
						record: null
					}
				},
				u = e => {
					let t;
					return t = e.type === s.a.PROFILE ? i.a.OWN_PROFILE : i.a.OTHER_SUBREDDIT, {
						...e,
						type: t
					}
				},
				m = new RegExp("^(r/)?[A-Za-z0-9][A-Za-z0-9_]{1,20}$", "i"),
				p = new RegExp("^u/[A-Za-z0-9_-]{2,20}$", "i"),
				h = e => m.test(e) || p.test(e) || "" === e
		},
		"./src/reddit/controls/SubredditPicker/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return Y
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/lodash/isEqual.js"),
				i = n.n(r),
				a = n("./src/reddit/helpers/name/index.ts");
			class c extends o.a.Component {
				constructor(e) {
					super(e), this.isFocused = !1, this.onFocus = () => {
						this.isFocused = !0, this.props.onFocus && this.props.onFocus()
					}, this.onChange = (e, t) => {
						this.setState({
							value: e
						}, () => {
							t && (this.props.onSelect(e), this.isFocused = !1)
						})
					}, this.state = {
						value: e.value
					}
				}
				componentWillReceiveProps(e) {
					const {
						value: t
					} = this.state, {
						value: n
					} = e;
					if (!i()(t, n) && !this.isFocused) {
						t.record && !n.record && Object(a.a)(t.record.name, n.rawString) ? this.setState({
							value: {
								rawString: n.rawString,
								record: t.record
							}
						}) : this.setState({
							value: n
						})
					}
				}
				render() {
					return o.a.createElement(o.a.Fragment, null, this.props.renderPicker({
						onChange: this.onChange,
						onFocus: this.onFocus,
						value: this.state.value
					}))
				}
			}
			var d = n("./node_modules/react-redux/es/index.js"),
				l = n("./node_modules/reselect/es/index.js"),
				u = n("./src/lib/objectSelector/index.ts"),
				m = n("./src/reddit/actions/subredditAutocomplete/index.ts"),
				p = n("./src/reddit/actions/subredditCrosspostable.ts"),
				h = n("./src/reddit/actions/subscription/index.ts"),
				b = n("./src/reddit/controls/SubredditPicker/helpers.ts"),
				f = n("./node_modules/lodash/debounce.js"),
				g = n.n(f),
				C = n("./src/lib/classNames/index.ts"),
				x = n("./src/reddit/constants/keycodes.ts"),
				E = n("./src/reddit/constants/posts.ts"),
				v = n("./src/reddit/models/SubredditAutocomplete/index.ts"),
				_ = n("./node_modules/fbt/lib/FbtPublic.js"),
				O = n("./src/lib/lessComponent.tsx"),
				y = n("./src/reddit/components/SubredditIcon/index.tsx"),
				k = n("./src/reddit/components/UserIcon/CurrentUserIcon.tsx"),
				j = n("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				S = n("./src/reddit/icons/svgs/Search/index.tsx"),
				I = n("./src/reddit/controls/SubredditPicker/Picker/SearchBar/index.m.less"),
				T = n.n(I);
			const w = O.a.wrapped(y.b, "subredditRoundIcon", T.a),
				P = O.a.wrapped(S.a, "searchIcon", T.a),
				N = O.a.wrapped(k.a, "userIcon", T.a),
				M = O.a.span("iconEmpty", T.a),
				D = ({
					className: e,
					disabled: t
				}) => o.a.createElement(j.b, {
					className: Object(C.a)(T.a.dropdownIcon, e, {
						[T.a.mDisabled]: t
					})
				});

			function L() {
				return (L = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const R = e => {
				e.preventDefault(), e.stopPropagation()
			};

			function F(e) {
				const {
					className: t,
					disabled: n,
					isActive: s,
					onDropdownClick: r,
					inputRef: i,
					record: a,
					value: c,
					...d
				} = e;
				let l = o.a.createElement(M, null);
				return s ? l = o.a.createElement(P, null) : a && (l = a.type === E.a.SUBREDDIT ? o.a.createElement(w, a) : o.a.createElement(N, null)), o.a.createElement("div", {
					className: Object(C.a)(T.a.searchBar, t)
				}, l, o.a.createElement("div", {
					className: T.a.inputWrapper
				}, o.a.createElement("input", L({
					className: T.a.input,
					ref: i,
					disabled: n,
					placeholder: s ? _.fbt._("Search communities", null, {
						hk: "1mtF5A"
					}) : _.fbt._("Choose a community", null, {
						hk: "44gKTd"
					}),
					spellCheck: !1,
					value: c
				}, d))), o.a.createElement("div", {
					onClick: r,
					onMouseDown: R
				}, o.a.createElement(D, {
					disabled: n
				})))
			}
			var A = n("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/index.tsx"),
				B = n("./src/reddit/controls/SubredditPicker/Picker/index.m.less"),
				U = n.n(B);
			class V extends o.a.Component {
				constructor(e) {
					super(e), this.inputRef = null, this.setInputRef = e => {
						this.inputRef = e, this.props.inputRef && this.props.inputRef(e)
					}, this.commitSelection = () => {
						const e = this.getPickerValue(!0);
						Object(b.c)(e.rawString) ? this.props.onChange(e, !0) : this.props.onChange({
							rawString: "",
							record: null
						}, !0), this.state.isOpen && this.setState({
							isOpen: !1
						})
					}, this.callOnChange = () => this.props.onChange(this.getPickerValue()), this.requestAutocomplete = g()(e => this.props.onGetSubredditAutocomplete(e), 200, {
						maxWait: 200
					}), this.selectItem = e => {
						const t = this.props.items[e];
						if (!t) throw new Error("Invalid item index");
						let n;
						n = t.type === v.a.OWN_PROFILE ? Object(a.d)(t.name) : Object(a.c)(t.name), this.setState({
							inputValue: n,
							focusedIndex: e
						}, this.commitSelection)
					}, this.getPickerValue = (e = !1) => {
						const t = this.state.inputValue,
							n = this.state.focusedIndex,
							{
								items: s,
								value: o
							} = this.props;
						if (o && o.record && Object(a.a)(t, o.record.name)) return {
							...o,
							rawString: t
						};
						const r = s[n] || e && s.find(e => Object(a.a)(e.name, t));
						if (!r) return {
							rawString: t,
							record: null
						};
						const {
							type: i,
							id: c,
							name: d,
							iconUrl: l,
							primaryColor: u,
							allowedPostTypes: m
						} = r;
						return {
							rawString: t,
							record: Object(a.a)(t, d) ? {
								id: c,
								name: d,
								iconUrl: l,
								primaryColor: u,
								allowedPostTypes: m,
								type: i === v.a.OWN_PROFILE ? E.a.PROFILE : E.a.SUBREDDIT
							} : null
						}
					}, this.findNextEnabledItemIndex = e => {
						const t = e ? -1 : 1;
						let n = this.state.focusedIndex + t,
							s = this.props.items[n];
						for (; s;) {
							if (!s.disabled) return n;
							n += t, s = this.props.items[n]
						}
						return n
					}, this.moveSelection = (e = !1) => {
						const {
							value: t,
							items: n
						} = this.props;
						let s = this.findNextEnabledItemIndex(e);
						s < -1 ? s = n.length - 1 : s >= n.length && (s = -1);
						const o = -1 === s ? t.rawString : n[s].name;
						o && this.setState({
							focusedIndex: s,
							inputValue: o
						})
					}, this.placeCursorAtTheEnd = () => {
						const e = this.state.inputValue.length;
						this.inputRef && this.inputRef.setSelectionRange(e, e)
					}, this.onDropdownClick = e => {
						const {
							inputRef: t
						} = this;
						this.state.isOpen ? this.setState({
							isOpen: !1
						}) : (t && t.focus(), this.setState({
							isOpen: !0
						}), this.placeCursorAtTheEnd()), e.preventDefault(), e.stopPropagation()
					}, this.onFocus = () => {
						this.props.onFocus && this.props.onFocus(), this.setState({
							isActive: !0,
							isOpen: !0
						}), this.inputRef && this.inputRef.select()
					}, this.onBlur = () => {
						this.props.selectOnBlur && this.state.isOpen ? (this.commitSelection(), this.setState({
							isActive: !1
						})) : this.setState({
							isActive: !1,
							isOpen: !1
						})
					}, this.onDropdownContainerMouseDown = e => {
						e.preventDefault()
					}, this.onEntryFocus = e => {
						this.setState({
							focusedIndex: e
						})
					}, this.onEntrySelect = e => {
						this.selectItem(e)
					}, this.onInputChange = e => {
						this.state.isOpen || this.setState({
							isOpen: !0
						});
						const t = e.target.value;
						this.requestAutocomplete(t), this.setState({
							inputValue: t
						}, this.callOnChange)
					}, this.onKeyDown = e => {
						e.which === x.a.ArrowUp ? (this.moveSelection(!0), e.preventDefault()) : e.which === x.a.ArrowDown ? (this.moveSelection(), e.preventDefault()) : e.which === x.a.Enter || e.which === x.a.Tab ? (-1 !== this.state.focusedIndex ? this.selectItem(this.state.focusedIndex) : this.commitSelection(), e.which !== x.a.Tab && e.preventDefault()) : e.which === x.a.Escape && (this.inputRef && this.inputRef.blur(), e.preventDefault())
					}, this.state = {
						isActive: !1,
						isOpen: !1,
						focusedIndex: 0,
						inputValue: e.value.rawString
					}
				}
				componentDidMount() {
					const {
						value: {
							rawString: e
						}
					} = this.props;
					e && this.requestAutocomplete(e)
				}
				UNSAFE_componentWillReceiveProps(e) {
					this.setState({
						focusedIndex: -1,
						inputValue: e.value.rawString
					})
				}
				render() {
					const {
						className: e,
						disabled: t,
						isValid: n = !0,
						items: s,
						value: r
					} = this.props, {
						isActive: i,
						isOpen: a
					} = this.state, c = r.record;
					return o.a.createElement("div", {
						className: Object(C.a)(U.a.container, e, {
							[U.a.mIsActive]: i,
							[U.a.mIsInvalid]: !n
						})
					}, o.a.createElement(F, {
						disabled: t,
						isActive: this.state.isActive,
						value: this.state.inputValue,
						inputRef: this.setInputRef,
						onDropdownClick: this.onDropdownClick,
						onChange: this.onInputChange,
						onFocus: this.onFocus,
						onBlur: this.onBlur,
						onKeyDown: this.onKeyDown,
						record: c
					}), a && o.a.createElement(A.a, {
						items: s,
						isValid: n,
						focusedIndex: this.state.focusedIndex,
						showNoMatchesCaption: !this.props.haveSuggestions && this.props.isAllDataRetrieved,
						onContainerMouseDown: this.onDropdownContainerMouseDown,
						onEntryFocus: this.onEntryFocus,
						onEntrySelect: this.onEntrySelect
					}))
				}
			}
			var W = V,
				G = n("./src/reddit/selectors/subredditAutocomplete.ts");

			function H() {
				return (H = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const q = Object(u.a)(Object(l.a)((e, t) => t.value, (e, {
					allowCrosspostableOnly: t,
					includeUserProfile: n,
					value: s
				}) => Object(G.a)(e, {
					allowCrosspostableOnly: t,
					includeUserProfile: n,
					substring: s.rawString
				}), (e, t) => {
					const {
						suggestedItems: n,
						fallbackItems: s,
						isAllDataRetrieved: o
					} = t, r = n.length ? n : e.record ? [Object(b.a)(e.record)] : [];
					return {
						items: 0 === r.length && o ? s : r,
						haveSuggestions: r.length > 0,
						isAllDataRetrieved: t.isAllDataRetrieved,
						isAutocompletePending: t.isPending
					}
				})),
				K = {
					onGetInitialData: e => t => t(e ? p.d() : h.e()),
					onGetSubredditAutocomplete: m.a
				};
			class z extends o.a.Component {
				constructor() {
					super(...arguments), this.onGetSubredditAutocomplete = e => {
						this.props.onGetSubredditAutocomplete(e)
					}
				}
				componentDidMount() {
					this.props.onGetInitialData(!!this.props.allowCrosspostableOnly)
				}
				render() {
					return o.a.createElement(W, H({}, this.props, {
						onGetSubredditAutocomplete: this.onGetSubredditAutocomplete
					}))
				}
			}
			var J = Object(d.b)(q, K)(z);
			class Y extends o.a.Component {
				constructor() {
					super(...arguments), this.renderPicker = e => o.a.createElement(J, {
						allowCrosspostableOnly: this.props.allowCrosspostableOnly,
						className: this.props.className,
						disabled: this.props.disabled || !1,
						includeUserProfile: this.props.includeUserProfile,
						inputRef: this.props.inputRef,
						isValid: this.props.isValid,
						onChange: e.onChange,
						onFocus: e.onFocus,
						value: e.value,
						selectOnBlur: this.props.selectOnBlur || !1
					})
				}
				render() {
					return o.a.createElement(c, {
						onFocus: this.props.onFocus,
						onSelect: this.props.onSelect,
						renderPicker: this.renderPicker,
						value: this.props.value
					})
				}
			}
		},
		"./src/reddit/controls/ToggleSwitch/index.m.less": function(e, t, n) {
			e.exports = {
				toggleDisplay: "_2FKpII1jz0h6xCAw1kQAvS",
				toggleSwitch: "_2e2g485kpErHhJQUiyvvC2",
				redditStyle: "_3kUvbpMbR21zJBboDdBH7D",
				mActive: "_1L5kUnhRYhUJ4TkMbOTKkI",
				mDisabled: "_3clF3xRMqSWmoBQpXv8U5z",
				xs: "_1asGWL2_XadHoBuUlNArOq",
				s: "_1hku5xiXsbqzLmszstPyR3",
				m: "_10hZCcuqkss2sf5UbBMCSD",
				l: "_1fCdbQCDv6tiX242k80-LO",
				xl: "_2Jp5Pv4tgpAsTcnUzTsXgO"
			}
		},
		"./src/reddit/controls/ToggleSwitch/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/controls/Button/index.tsx"),
				a = n("./src/reddit/controls/ToggleSwitch/index.m.less"),
				c = n.n(a);
			t.a = o.a.memo(e => {
				const t = e.size || i.c.XS;
				return o.a.createElement("button", {
					"aria-checked": e.on,
					className: Object(r.a)(c.a.toggleSwitch, e.className, c.a[t], {
						[c.a.mActive]: e.on && !e.disabled || e.forceOn && e.on,
						[c.a.mDisabled]: e.disabled,
						[c.a.redditStyle]: e.redditStyle
					}),
					style: e.on && !e.disabled && e.activeColorOverride ? {
						backgroundColor: e.activeColorOverride
					} : void 0,
					id: e.id,
					role: "switch",
					tabIndex: e.tabIndex,
					type: "button",
					onClick: () => !e.disabled && e.onToggle && e.onToggle()
				}, o.a.createElement("div", {
					className: c.a.toggleDisplay
				}))
			})
		},
		"./src/reddit/controls/Typography/index.m.less": function(e, t, n) {
			e.exports = {
				heading1: "_37JeV292IJA7_x1qej_-2H",
				heading2: "p13k-tsMcatGBlVpJBZmw",
				heading3: "_1nHvvYpmn7q9eWDAGzKcce",
				heading4: "_1-rwUWsB5F8WmYI8F66dai",
				heading5: "_22RKdGqihAj6MFumW6DuRV",
				heading6: "_4xqrI_N1UdqsK9E1RSisG",
				body1: "_2HJOIn4SJm4z1NeCv_hNFu",
				body2: "_3ImIPX9rfoPmUrZ1R8KGqS",
				actionFont: "_3uShGanwyVFBaTiPMFzfAC",
				metadata: "_2nyJGeaFJbXTqTh9OGwxfu",
				metadata3: "_3BIqvjJkJKZfH4vtC11dGF"
			}
		},
		"./src/reddit/controls/Typography/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return i
			})), n.d(t, "a", (function() {
				return a
			})), n.d(t, "c", (function() {
				return c
			}));
			var s = n("./src/lib/lessComponent.tsx"),
				o = n("./src/reddit/controls/Typography/index.m.less"),
				r = n.n(o);
			s.a.h1("heading1", r.a), s.a.h2("heading2", r.a), s.a.h3("heading3", r.a), s.a.h4("heading4", r.a);
			const i = s.a.h5("heading5", r.a),
				a = (s.a.h6("heading6", r.a), s.a.p("body1", r.a), s.a.p("body2", r.a)),
				c = (s.a.p("actionFont", r.a), s.a.p("metadata", r.a));
			s.a.p("metadata3", r.a)
		},
		"./src/reddit/controls/UnstyledInternalLink/index.m.less": function(e, t, n) {
			e.exports = {
				unstyledInternalLink: "_39Glgtoolpdt4PIzcnjPSW"
			}
		},
		"./src/reddit/controls/UnstyledInternalLink/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/lessComponent.tsx"),
				o = n("./src/reddit/controls/InternalLink/index.tsx"),
				r = n("./src/reddit/controls/UnstyledInternalLink/index.m.less"),
				i = n.n(r);
			t.a = s.a.wrapped(o.a, "unstyledInternalLink", i.a)
		},
		"./src/reddit/endpoints/comment/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "g", (function() {
				return m
			})), n.d(t, "k", (function() {
				return p
			})), n.d(t, "d", (function() {
				return h
			})), n.d(t, "j", (function() {
				return b
			})), n.d(t, "a", (function() {
				return f
			})), n.d(t, "f", (function() {
				return g
			})), n.d(t, "c", (function() {
				return C
			})), n.d(t, "i", (function() {
				return x
			})), n.d(t, "h", (function() {
				return E
			})), n.d(t, "e", (function() {
				return v
			})), n.d(t, "b", (function() {
				return _
			}));
			var s = n("./src/config.ts"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/makeApiRequest/index.ts"),
				i = n("./src/lib/omitHeaders/index.ts"),
				a = n("./src/reddit/constants/headers.ts"),
				c = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				d = n("./src/reddit/models/Comment/addProfileImgParam.ts"),
				l = n("./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts"),
				u = n("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const m = (e, t) => Object(r.a)(Object(i.a)(e, [a.a]), {
					endpoint: Object(c.a)(`${e.apiUrl}/api/save`),
					method: o.cb.POST,
					data: {
						id: t
					}
				}),
				p = (e, t) => Object(r.a)(Object(i.a)(e, [a.a]), {
					endpoint: Object(c.a)(`${e.apiUrl}/api/unsave`),
					method: o.cb.POST,
					data: {
						id: t
					}
				}),
				h = (e, t) => Object(r.a)(Object(i.a)(e, [a.a]), {
					endpoint: Object(c.a)(`${e.apiUrl}/api/lock`),
					method: o.cb.POST,
					data: {
						id: t
					}
				}),
				b = (e, t) => Object(r.a)(Object(i.a)(e, [a.a]), {
					endpoint: Object(c.a)(`${e.apiUrl}/api/unlock`),
					method: o.cb.POST,
					data: {
						id: t
					}
				}),
				f = (e, t) => Object(r.a)(Object(i.a)(e, [a.a]), {
					endpoint: Object(c.a)(`${e.apiUrl}/api/approve`),
					method: o.cb.POST,
					data: {
						id: t
					}
				}),
				g = (e, t, n) => Object(r.a)(Object(i.a)(e, [a.a]), {
					endpoint: Object(c.a)(`${e.apiUrl}/api/remove`),
					method: o.cb.POST,
					data: {
						id: t,
						spam: n
					}
				}),
				C = (e, t) => Object(r.a)(Object(i.a)(e, [a.a]), {
					endpoint: `${e.apiUrl}/api/ignore_reports`,
					method: o.cb.POST,
					data: {
						id: t
					}
				}),
				x = (e, t) => Object(r.a)(Object(i.a)(e, [a.a]), {
					endpoint: `${e.apiUrl}/api/unignore_reports`,
					method: o.cb.POST,
					data: {
						id: t
					}
				}),
				E = (e, t) => Object(r.a)(Object(i.a)(e, [a.a]), {
					endpoint: `${e.apiUrl}/api/show_comment`,
					method: o.cb.POST,
					data: {
						id: t
					}
				}),
				v = (e, t, n, i) => {
					let a = Object(u.a)(Object(l.a)(`${s.a.gatewayUrl}/desktopapi/v1/morecomments/${t}`));
					return i && (a = Object(d.a)(a)), Object(r.a)(e, {
						data: n,
						endpoint: a,
						method: o.cb.POST,
						type: "json",
						traceRequestName: "more_comments"
					})
				},
				_ = (e, t, n, s) => Object(r.a)(Object(i.a)(e, [a.a]), {
					endpoint: Object(c.a)(`${e.apiUrl}/api/distinguish/${n}`),
					method: o.cb.POST,
					data: {
						id: t,
						sticky: s
					}
				})
		},
		"./src/reddit/endpoints/economics/predictions.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return b
			})), n.d(t, "l", (function() {
				return f
			})), n.d(t, "j", (function() {
				return g
			})), n.d(t, "a", (function() {
				return C
			})), n.d(t, "h", (function() {
				return x
			})), n.d(t, "c", (function() {
				return E
			})), n.d(t, "i", (function() {
				return v
			})), n.d(t, "b", (function() {
				return _
			})), n.d(t, "k", (function() {
				return O
			})), n.d(t, "d", (function() {
				return y
			})), n.d(t, "e", (function() {
				return k
			})), n.d(t, "g", (function() {
				return j
			}));
			var s = n("./src/lib/makeGqlRequest/index.ts"),
				o = n("./src/graphql/operations/AddPredictionDrafts.json"),
				r = n("./src/graphql/operations/CreatePredictionTournament.json"),
				i = n("./src/graphql/operations/EndPredictionTournament.json"),
				a = n("./src/graphql/operations/GetPredictionChipPackages.json"),
				c = n("./src/graphql/operations/GetPredictionCoinPackages.json"),
				d = n("./src/graphql/operations/GetPredictionToken.json"),
				l = n("./src/graphql/operations/GetTournaments.json"),
				u = n("./src/graphql/operations/ResolvePrediction.json"),
				m = n("./src/graphql/operations/SubredditTopPredictors.json"),
				p = n("./src/graphql/operations/UpdatePredictionTournament.json"),
				h = n("./src/graphql/operations/VotePrediction.json");
			const b = (e, t, n) => Object(s.a)(e, {
					...c,
					variables: {
						subredditName: t,
						includeFreePackage: n
					}
				}),
				f = (e, {
					postId: t,
					optionId: n,
					coinPackageId: o,
					price: r
				}) => Object(s.a)(e, {
					...h,
					variables: {
						input: {
							postId: t,
							optionId: n,
							coinPackageId: o,
							price: r
						}
					}
				}),
				g = (e, {
					postId: t,
					optionId: n
				}) => Object(s.a)(e, {
					...u,
					variables: {
						input: {
							postId: t,
							optionId: n
						}
					}
				});
			var C;
			! function(e) {
				e.AllTime = "ALL_TIME", e.Monthly = "MONTHLY"
			}(C || (C = {}));
			const x = (e, {
					subredditId: t,
					period: n,
					top: o,
					includeCurrentRank: r,
					tournamentId: i
				}) => Object(s.a)(e, {
					...m,
					variables: {
						subredditId: t,
						period: n,
						top: o,
						includeCurrentRank: r,
						tournamentId: i
					}
				}),
				E = (e, t) => Object(s.a)(e, {
					...r,
					variables: {
						input: t
					}
				}),
				v = (e, t) => Object(s.a)(e, {
					...l,
					variables: t
				}),
				_ = (e, t) => Object(s.a)(e, {
					...o,
					variables: {
						input: t
					}
				}),
				O = (e, t) => Object(s.a)(e, {
					...p,
					variables: {
						input: t
					}
				}),
				y = (e, t) => Object(s.a)(e, {
					...i,
					variables: {
						input: t
					}
				}),
				k = (e, t) => Object(s.a)(e, {
					...a,
					variables: t
				}),
				j = (e, t) => Object(s.a)(e, {
					...d,
					variables: t
				})
		},
		"./src/reddit/endpoints/governance/badges.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "a", (function() {
				return a
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./src/config.ts"),
				o = n("./src/reddit/endpoints/governance/requester.ts");
			async function r(e, t, n) {
				const r = Object(o.a)(e, {
						headers: {
							"X-HTTP-Method-Override": "GET"
						},
						method: "post",
						endpoint: `${s.a.metaUrl}/badges/${t}`,
						data: {
							selected: !0,
							users: n
						}
					}),
					i = await r;
				if (i.ok) {
					const e = {},
						t = {},
						n = i.body;
					return Object.keys(n).forEach(s => {
						const o = n[s];
						t[s] = o, e[o.userId] || (e[o.userId] = []), e[o.userId].push(o.id)
					}), {
						...i,
						body: {
							badges: t,
							usersAppliedBadges: e
						}
					}
				}
				return i
			}
			async function i(e, t, n) {
				const r = await Object(o.a)(e, {
					method: "get",
					endpoint: `${s.a.metaUrl}/badges/${t}?users=${n}`
				});
				if (r.ok) {
					const e = {},
						t = [],
						n = r.body;
					return Object.keys(n).forEach(s => {
						const o = n[s];
						e[s] = o, t.push(o.id)
					}), {
						...r,
						body: {
							badges: e,
							userOwnedBadges: t
						}
					}
				}
				return r
			}

			function a(e, t, n, r = !0) {
				return Object(o.a)(e, {
					method: "patch",
					endpoint: `${s.a.metaUrl}/badges/${t}/${n}`,
					data: {
						selected: r
					}
				})
			}
		},
		"./src/reddit/endpoints/governance/crypto.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "j", (function() {
				return i
			})), n.d(t, "i", (function() {
				return a
			})), n.d(t, "h", (function() {
				return c
			})), n.d(t, "k", (function() {
				return d
			})), n.d(t, "l", (function() {
				return l
			})), n.d(t, "g", (function() {
				return u
			})), n.d(t, "b", (function() {
				return m
			})), n.d(t, "d", (function() {
				return p
			})), n.d(t, "c", (function() {
				return h
			})), n.d(t, "e", (function() {
				return b
			})), n.d(t, "f", (function() {
				return f
			})), n.d(t, "m", (function() {
				return g
			}));
			var s, o = n("./src/config.ts"),
				r = n("./src/reddit/endpoints/governance/requester.ts");

			function i(e) {
				switch (e) {
					case s.Ethereum:
					case s.EthTraderEthereum:
						return "Ethereum Main Network";
					case s.Rinkeby:
					case s.EthTraderRinkeby:
						return "Rinkeby Test Network"
				}
				return e + " Network"
			}

			function a(e) {
				switch (e) {
					case s.Ethereum:
					case s.EthTraderEthereum:
						return "https://meta-api.reddit.com/ethereum/ethereum";
					case s.Rinkeby:
					case s.EthTraderRinkeby:
						return "https://meta-api.reddit.com/ethereum/rinkeby"
				}
				throw new Error(`No JSON RPC url for provider: ${e}`)
			}

			function c(e) {
				switch (e) {
					case s.Ethereum:
					case s.EthTraderEthereum:
						return "homestead";
					case s.Rinkeby:
					case s.EthTraderRinkeby:
						return "rinkeby"
				}
				throw new Error(`No ethereum network for provider: ${e}`)
			}
			async function d(e, t, n) {
				return Object(r.a)(e, {
					method: "post",
					endpoint: `${o.a.metaUrl}/crypto/${t}/challenges`,
					data: {
						challengeType: "registration-challenge-EIP712",
						address: n
					}
				})
			}
			async function l(e, t, n) {
				return await Object(r.a)(e, {
					method: "post",
					endpoint: `${o.a.metaUrl}/crypto/${t}/registrations`,
					data: n
				})
			}
			async function u(e, t, n) {
				return await Object(r.a)(e, {
					method: "delete",
					endpoint: `${o.a.metaUrl}/crypto/${t}/registrations/${n}`
				})
			}! function(e) {
				e.Ethereum = "ethereum:1", e.Rinkeby = "ethereum:4", e.EthTraderEthereum = "ethereum:1:ethtrader", e.EthTraderRinkeby = "ethereum:4:ethtrader", e.Stellar = "stellar"
			}(s || (s = {}));
			const m = (e, t, n) => ({
					type: "burn-link",
					subredditId: e,
					amount: t,
					burnMemo: n
				}),
				p = e => ({
					type: "convert-to-coins",
					subredditId: e
				}),
				h = e => ({
					type: "claim",
					subredditId: e
				}),
				b = e => ({
					type: "subscribe",
					subredditId: e
				}),
				f = (e, t, n, s) => ({
					type: "transfer",
					subredditId: e,
					recipient: t,
					recipientAddress: n,
					amount: s
				});
			async function g(e, t) {
				return await Object(r.a)(e, {
					method: "put",
					endpoint: `${o.a.metaUrl}/crypto/ethereum/transaction-intent`,
					data: t
				})
			}
		},
		"./src/reddit/endpoints/governance/products/badges.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "c", (function() {
				return a
			})), n.d(t, "d", (function() {
				return c
			}));
			var s = n("./src/config.ts"),
				o = n("./src/reddit/endpoints/governance/requester.ts");

			function r(e, t) {
				return Object(o.a)(e, {
					method: "get",
					endpoint: `${s.a.metaUrl}/products/${t}?types=badge`
				})
			}

			function i(e, t) {
				return Object(o.a)(e, {
					method: "get",
					endpoint: `${s.a.metaUrl}/products/${t}?types=badge,membership`
				})
			}

			function a(e, t) {
				return Object(o.a)(e, {
					method: "post",
					endpoint: `${s.a.metaUrl}/orders`,
					data: t
				})
			}

			function c(e, t) {
				return Object(o.a)(e, {
					method: "post",
					endpoint: `${s.a.metaUrl}/orders`,
					data: {
						currency: "usd",
						price: t.price,
						products: t.products,
						providerArgs: {
							paymentNonce: t.nonce
						},
						providerName: "braintree",
						subredditId: t.subredditId
					}
				})
			}
		},
		"./src/reddit/endpoints/governance/wallet.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return a
			}));
			var s = n("./src/config.ts"),
				o = (n("./src/lib/bigNumberUtils/percent.ts"), n("./src/lib/constants/index.ts")),
				r = n("./src/reddit/endpoints/governance/requester.ts");

			function i(e, t) {
				return Object(r.a)(e, {
					endpoint: `${s.a.metaUrl}/wallets/${t.subredditId}/me`,
					method: o.cb.GET
				}).then(e => {
					if (e.ok) {
						const n = e.body,
							s = {
								[t.subredditId]: n
							};
						return {
							...e,
							body: s
						}
					}
					return e
				})
			}

			function a(e, t) {
				return Object(r.a)(e, {
					headers: {
						"X-HTTP-Method-Override": "GET"
					},
					endpoint: `${s.a.metaUrl}/wallets/${t.subredditId}`,
					method: o.cb.POST,
					data: t.userIds
				}).then(e => e.ok ? {
					...e,
					body: {
						wallets: e.body
					}
				} : e)
			}
		},
		"./src/reddit/endpoints/post/convert.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/makeApiRequest/index.ts"),
				r = n("./src/lib/omitHeaders/index.ts"),
				i = n("./src/reddit/constants/headers.ts"),
				a = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				c = n("./src/reddit/models/PostCreationForm/index.ts");
			t.a = (e, t, n) => {
				const d = {
					output_mode: "markdown" === t ? t : "rtjson"
				};
				return t === c.h.MARKDOWN ? d.richtext_json = n : d.markdown_text = n, Object(o.a)(Object(r.a)(e, [i.a]), {
					endpoint: Object(a.a)(`${e.apiUrl}/api/convert_rte_body_format`),
					method: s.cb.POST,
					data: d
				})
			}
		},
		"./src/reddit/endpoints/scheduledPosts/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return u
			})), n.d(t, "f", (function() {
				return p
			})), n.d(t, "d", (function() {
				return h
			})), n.d(t, "c", (function() {
				return f
			})), n.d(t, "e", (function() {
				return g
			})), n.d(t, "a", (function() {
				return _
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./src/graphql/operations/CreateScheduledPost.json"),
				o = n("./src/graphql/operations/SubredditScheduledPosts.json"),
				r = n("./src/lib/makeGqlRequest/index.ts"),
				i = n("./src/reddit/helpers/flair.ts"),
				a = n("./src/reddit/helpers/richTextJson/index.ts"),
				c = n("./src/reddit/models/Post/index.ts"),
				d = n("./src/reddit/models/PostCreationForm/index.ts"),
				l = n("./src/reddit/models/ScheduledPost/index.ts");
			const u = (e, t) => Object(r.a)(e, {
					...o,
					variables: {
						...t,
						includeRecurring: !(!t.includeRecurring || !t.includeRecurring.recurringFirst),
						includeStandalone: !(!t.includeStandalone || !t.includeStandalone.standaloneFirst),
						recurringAfter: t.includeRecurring ? t.includeRecurring.recurringAfter : void 0,
						recurringFirst: t.includeRecurring ? t.includeRecurring.recurringFirst : void 0,
						standaloneAfter: t.includeStandalone ? t.includeStandalone.standaloneAfter : void 0,
						standaloneFirst: t.includeStandalone ? t.includeStandalone.standaloneFirst : void 0
					}
				}),
				m = (e, t) => {
					if (!e.ok || !e.body) return !1;
					const n = e.body;
					return !!(n.data && n.data.subredditInfoById && n.data.subredditInfoById.scheduledPosts && n.data.subredditInfoById.scheduledPosts[t] && n.data.subredditInfoById.scheduledPosts[t].edges)
				},
				p = (e, t) => !(!e.ok || !e.body) && (!(t.includeStandalone && !(e => m(e, l.f.standalonePosts))(e)) && !(t.includeRecurring && !(e => m(e, l.f.recurringPosts))(e))),
				h = ({
					poll: e,
					schedule: t,
					submission: n,
					subredditId: s
				}) => ({
					collectionId: n.collectionId || "",
					discussionType: n.isChatPost ? c.b.Chat : c.b.Comment,
					isContestMode: n.isContestMode,
					isPostAsMetaMod: n.isPostAsMetaMod,
					isSpoiler: n.isSpoiler,
					isNsfw: n.isNSFW,
					poll: e && v(e),
					title: n.title,
					isOriginalContent: n.isOC,
					flair: n.flair ? {
						id: n.flair.templateId,
						text: Object(i.g)(n.flair)
					} : {},
					sticky: n.sticky,
					subredditId: s,
					suggestedCommentSort: n.suggestedSort,
					isSendReplies: n.sendReplies,
					...b(t),
					...x(n),
					assetIds: E(n)
				}),
				b = e => ({
					scheduling: {
						publishAt: e.submitDate,
						clientTimezone: e.timezoneName,
						frequency: e.recurrenceInfo ? e.recurrenceInfo.frequency : void 0,
						interval: e.recurrenceInfo ? e.recurrenceInfo.interval : void 0,
						byMonthDays: e.recurrenceInfo ? e.recurrenceInfo.byMonthDays : void 0,
						byWeekDays: e.recurrenceInfo ? e.recurrenceInfo.byWeekDays : void 0
					}
				}),
				f = e => ({
					scheduling: Object.keys(e).length > 0 ? {
						clientTimezone: e.timezoneName || void 0,
						publishAt: e.submitDate || void 0,
						frequency: e.recurrenceInfo ? e.recurrenceInfo.frequency : void 0,
						interval: e.recurrenceInfo ? e.recurrenceInfo.interval : void 0,
						byMonthDays: e.recurrenceInfo ? e.recurrenceInfo.byMonthDays : void 0,
						byWeekDays: e.recurrenceInfo ? e.recurrenceInfo.byWeekDays : void 0
					} : void 0
				}),
				g = ({
					poll: e,
					schedule: t,
					scheduledPostId: n,
					submission: s,
					subredditId: o
				}) => {
					const r = h({
						poll: e,
						schedule: t,
						submission: s,
						subredditId: o
					});
					return {
						id: n,
						...r,
						flair: Object.keys(r.flair || {}).length ? {
							...r.flair
						} : {
							id: "",
							text: ""
						}
					}
				},
				C = e => /^https?:\/\//i.test(e) ? e : `http://${e}`,
				x = e => {
					switch (e.kind) {
						case d.o.RICH_TEXT:
							return {
								content: {
									richText: JSON.stringify({
										document: e.document
									})
								}
							};
						case d.o.MARKDOWN:
							return {
								content: {
									markdown: e.markdown
								}
							};
						case d.o.LINK:
							return {
								content: {}, link: {
									url: C(e.url)
								}
							};
						default:
							return {
								content: {}
							}
					}
				},
				E = e => {
					let t = [];
					if (e.document) {
						const n = e.document || [];
						t = Object(a.c)(n)
					}
					return t
				},
				v = e => {
					if (e && e.options && e.duration && (e.options = e.options.map(e => ({
							text: e.text.trim()
						})).filter(e => !!e.text), e.options.length)) return e.duration = Math.floor(e.duration / 864e5), e
				},
				_ = (e, t) => Object(r.a)(e, {
					...s,
					variables: {
						input: t
					}
				})
		},
		"./src/reddit/endpoints/scheduledPosts/update.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./src/graphql/operations/UpdateScheduledPost.json"),
				o = n("./src/lib/makeGqlRequest/index.ts");
			const r = (e, t) => Object(o.a)(e, {
				...s,
				variables: {
					input: t
				}
			})
		},
		"./src/reddit/featureFlags/component.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/reddit/featureFlags/index.ts");

			function c(e, t, n) {
				const s = Object(i.c)({
					featureEnabled: t => a.d[e](t)
				});
				return Object(r.b)(s)(e => {
					const {
						featureEnabled: s,
						...r
					} = e, i = r;
					return s ? o.a.createElement(t, i) : void 0 !== n ? o.a.createElement(n, i) : null
				})
			}
		},
		"./src/reddit/helpers/commentList/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return a
			})), n.d(t, "c", (function() {
				return c
			})), n.d(t, "d", (function() {
				return d
			})), n.d(t, "e", (function() {
				return l
			})), n.d(t, "a", (function() {
				return u
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./src/reddit/constants/comments.ts"),
				o = n("./src/reddit/selectors/comments.ts"),
				r = n("./src/reddit/constants/experiments.ts"),
				i = n("./src/reddit/helpers/chooseVariant/index.ts");
			const a = (e, t) => t().features.comments.models[e],
				c = e => {
					switch (e.commentLink.type) {
						case s.a.Comment:
							return e.commentsDict[e.commentLink.id];
						case s.a.MoreComments:
							return e.moreCommentsDict[e.commentLink.id];
						case s.a.ContinueThread:
							return e.continueThreadDict[e.commentLink.id]
					}
				},
				d = (e, t) => e.type === s.a.MoreComments ? t[e.id].numComments : 1,
				l = (e, t, n, s) => {
					let r = Object(o.n)(s, {
							commentLink: t,
							commentsPageKey: e
						}),
						i = t;
					for (; r && r.depth > n && r.prev && (i = r.prev, (r = Object(o.n)(s, {
							commentLink: i,
							commentsPageKey: e
						})) && !(r.depth <= n)););
					return i.id
				},
				u = (e, t, n) => {
					const {
						commentLists: s,
						comments: o
					} = e, {
						head: a
					} = s[t];
					if (a) return Object.keys(o).filter(e => {
						const t = o[e];
						return !(!t.isStickied || !((e, t) => {
							const n = Object(i.c)(e, {
								experimentEligibilitySelector: i.a,
								experimentName: r.w,
								expEventOverride: t
							});
							return !!(Object(r.Fd)(n) ? void 0 : n)
						})(n)) || (e => !1 !== e.collapsed)(t)
					})
				}
		},
		"./src/reddit/helpers/crypto/vaultActionLink.ts": function(e, t, n) {
			"use strict";

			function s(e) {
				return e.match(/^https:\/\/www\.reddit\.com\/vault\/burn/)
			}

			function o(e) {
				const {
					subreddit: t,
					amount: n,
					memo: s,
					cta: o
				} = e;
				return t && n && s && o ? {
					subreddit: t,
					amount: n,
					memo: s,
					cta: o
				} : (console.error("subreddit, amount, and memo query params required for vault action"), null)
			}
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return o
			}))
		},
		"./src/reddit/helpers/dragDropContext/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react-dnd/lib/index.js"),
				o = n("./node_modules/react-dnd-html5-backend/lib/index.js"),
				r = n.n(o);
			t.a = Object(s.DragDropContext)(r.a)
		},
		"./src/reddit/helpers/economics/sortBadges.ts": function(e, t, n) {
			"use strict";

			function s(e, t) {
				if (e.placement && !t.placement) return -1;
				if (t.placement && !e.placement) return 1;
				if (e.position && !t.position) return -1;
				if (t.position && !e.position) return 1;
				let n = 0;
				return e.placement && t.placement && (n = e.placement.localeCompare(t.placement)), 0 === n && e.position && t.position && (n = e.position - t.position), 0 === n && (n = e.title.localeCompare(t.title)), n
			}

			function o(e) {
				return [...e].sort(s)
			}
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return o
			}))
		},
		"./src/reddit/helpers/externalAccount/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return o
			}));
			const s = () => new BroadcastChannel("external_account"),
				o = e => {
					const t = s();
					t.postMessage({
						type: "connected",
						provider: e
					}), t.close()
				}
		},
		"./src/reddit/helpers/genericServerError/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/lib/constants/index.ts");
			t.a = () => ({
				type: o.E.SERVER_ERROR,
				fields: [{
					field: "",
					msg: s.fbt._("Something went wrong.", null, {
						hk: "RcX5A"
					})
				}]
			})
		},
		"./src/reddit/helpers/governance/tokens.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "a", (function() {
				return a
			}));
			var s = n("./node_modules/bignumber.js/bignumber.js"),
				o = n("./src/lib/prettyPrintNumber/index.ts");

			function r(e, t) {
				const n = new s.BigNumber(e),
					o = new s.BigNumber(t);
				return n.dividedToIntegerBy(o).toString()
			}

			function i(e, t) {
				return Object(o.b)(parseInt(r(e, t), 10))
			}

			function a(e, t) {
				const n = new s.BigNumber(e),
					o = new s.BigNumber(t);
				return n.multipliedBy(o).toFixed(0)
			}
		},
		"./src/reddit/helpers/governanceErrorText/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return i
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/fbt/lib/FbtPublic.js");

			function o(e) {
				return e[0].toUpperCase() + e.slice(1)
			}

			function r(e) {
				return "extra" in e ? "string" == typeof e.extra ? e.extra : Object.keys(e.extra).map(t => e.extra[t]).map(o).join(" ") : s.fbt._("Something went wrong. Please try again later.", null, {
					hk: "16ibYk"
				})
			}

			function i(e) {
				const t = `${e.type} (${e.code})`;
				return "message" in e ? `${t}: ${e.message}` : t
			}
		},
		"./src/reddit/helpers/graphql/normalizeSubredditScheduledPostsFromGql/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return r
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "a", (function() {
				return l
			})), n.d(t, "d", (function() {
				return b
			}));
			const s = e => e.subredditInfoById.scheduledPosts.recurringPosts ? {
					recurringPosts: {
						models: p(e.subredditInfoById.scheduledPosts.recurringPosts.edges),
						pageInfo: {
							...e.subredditInfoById.scheduledPosts.recurringPosts.pageInfo
						}
					},
					recurringPostsIds: e.subredditInfoById.scheduledPosts.recurringPosts.edges.map(e => e.node.id)
				} : {},
				o = e => e.subredditInfoById.scheduledPosts.standalonePosts ? {
					standalonePosts: {
						models: u(e.subredditInfoById.scheduledPosts.standalonePosts.edges),
						pageInfo: {
							...e.subredditInfoById.scheduledPosts.standalonePosts.pageInfo
						}
					},
					standalonePostsIds: e.subredditInfoById.scheduledPosts.standalonePosts.edges.map(e => e.node.id)
				} : {},
				r = e => ({
					...e,
					subredditInfoById: {
						id: e.subredditInfoById.id,
						scheduledPosts: {
							...s(e),
							...o(e)
						}
					}
				}),
				i = e => e.subredditInfoById.scheduledPosts && !!e.subredditInfoById.scheduledPosts.recurringPosts && !!e.subredditInfoById.scheduledPosts.recurringPostsIds,
				a = e => e.subredditInfoById.scheduledPosts && !!e.subredditInfoById.scheduledPosts.standalonePosts && !!e.subredditInfoById.scheduledPosts.standalonePostsIds,
				c = e => i(e) && a(e),
				d = e => !i(e) && a(e),
				l = e => i(e) && !a(e),
				u = e => e.map(e => m(e.node)),
				m = e => ({
					id: e.id,
					title: e.title,
					body: e.body,
					postKind: e.postKind,
					collectionId: e.collections.edges.length ? e.collections.edges[0].node.id : void 0,
					discussionType: e.discussionType,
					isContestMode: e.isContestMode,
					isPostAsMetaMod: e.isPostAsMetaMod,
					isSpoiler: e.isSpoiler,
					isNsfw: e.isNsfw,
					isOriginalContent: e.isOriginalContent,
					isSendReplies: e.isSendReplies,
					isSticky: !!e.sticky && "NONE" !== e.sticky,
					mediaAssets: e.mediaAssets,
					subreddit: {
						...e.subreddit
					},
					suggestedCommentSort: e.suggestedCommentSort,
					owner: {
						...e.owner
					},
					poll: e.poll,
					contentType: e.contentType,
					clientTimezone: e.clientTimezone,
					publishAt: e.publishAt.split(".")[0],
					state: e.state,
					flair: e.flair ? {
						...e.flair
					} : void 0,
					sticky: e.sticky,
					isModDistinguished: "MODERATOR" === e.distinguishedAs,
					url: e.url
				}),
				p = e => e.map(e => h(e.node)),
				h = e => ({
					...m(e),
					frequency: e.frequency,
					byMonthDays: e.byMonthDays || [],
					byWeekDays: e.byWeekDays || [],
					interval: e.interval || 1
				}),
				b = e => (e => !!e.frequency && !!e.interval)(e) ? h(e) : m(e)
		},
		"./src/reddit/helpers/isArrayEqual.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/lodash/isEqual.js"),
				o = n.n(s),
				r = n("./node_modules/lodash/xorWith.js"),
				i = n.n(r);
			t.a = (e, t) => {
				const n = i()(e, t, o.a);
				return !(!n || 0 !== n.length)
			}
		},
		"./src/reddit/helpers/ordinal/index.ts": function(e, t, n) {
			"use strict";
			t.a = function(e) {
				const t = ["th", "st", "nd", "rd"],
					n = e % 100;
				return e + (t[(n - 20) % 10] || t[n] || t[0])
			}
		},
		"./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return i
			}));
			var s = n("./src/lib/constants/index.ts");
			const o = e => {
					for (const t of e) {
						const e = t[0] || "";
						switch (e) {
							case s.E.NO_STRIPE_SUBSCRIPTION:
							case s.E.USER_DOESNT_EXIST:
							case s.E.USER_REQUIRED_ERROR:
							case s.E.VALIDATION_ERROR:
								return e;
							case s.E.NO_USER:
							case s.E.NO_TEXT:
							case s.E.NO_URL:
								return s.E.VALIDATION_ERROR;
							case s.E.CREDIT_CARD_FAILURE:
							case s.E.CREDIT_CARD_FAILURE_GENERIC:
								return s.E.CREDIT_CARD_FAILURE;
							default:
								if (e.startsWith("SUBMIT_VALIDATION")) return s.E.SUBMIT_VALIDATION_ERROR
						}
					}
					return s.E.VALIDATION_ERROR
				},
				r = e => {
					const t = e.body;
					return {
						type: o(t.json.errors),
						fields: t.json.errors.map(e => ({
							field: e[2] || "",
							msg: e[1]
						}))
					}
				},
				i = e => {
					const t = e.body;
					return !e.ok && t && t.json && t.json.errors ? {
						...e,
						error: r(e)
					} : e
				};
			t.a = r
		},
		"./src/reddit/helpers/scheduledPosts/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return h
			})), n.d(t, "a", (function() {
				return f
			})), n.d(t, "i", (function() {
				return g
			})), n.d(t, "c", (function() {
				return C
			})), n.d(t, "d", (function() {
				return x
			})), n.d(t, "f", (function() {
				return E
			})), n.d(t, "e", (function() {
				return _
			})), n.d(t, "h", (function() {
				return O
			})), n.d(t, "g", (function() {
				return y
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js");
			n("./node_modules/react/index.js");
			const o = function(e) {
				if (void 0 === e) throw new Error("invariant(...): Second argument must be a string.")
			};

			function r(e, t, ...n) {
				if (o(t), !e) {
					let e;
					if (void 0 === t) e = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
					else {
						let s = 0;
						(e = new Error(t.replace(/%s/g, () => String(n[s++])))).name = "Invariant Violation"
					}
					throw e.framesToPop = 1, e
				}
			}
			const i = {
					AND: "AND",
					NONE: "NONE",
					OR: "OR"
				},
				a = {
					COMMA: "COMMA",
					SEMICOLON: "SEMICOLON"
				};
			var c = function(e, t, n) {
					const o = e.length;
					if (0 === o) return "";
					if (1 === o) return e[0];
					const c = e[o - 1];
					let d = e[0];
					for (let r = 1; r < o - 1; ++r) switch (n) {
						case a.SEMICOLON:
							d = s.fbt._("{previous items}; {following items}", [s.fbt._param("previous items", d), s.fbt._param("following items", e[r])], {
								hk: "4hs4xq"
							});
							break;
						default:
							d = s.fbt._("{previous items}, {following items}", [s.fbt._param("previous items", d), s.fbt._param("following items", e[r])], {
								hk: "2z8RMb"
							})
					}
					return function(e, t, n, o) {
						switch (n) {
							case i.AND:
								return s.fbt._("{list of items} and {last item }", [s.fbt._param("list of items", e), s.fbt._param("last item ", t)], {
									hk: "1ylan1"
								});
							case i.OR:
								return s.fbt._("{list of items} or {last item}", [s.fbt._param("list of items", e), s.fbt._param("last item", t)], {
									hk: "3q8AmB"
								});
							case i.NONE:
								switch (o) {
									case a.SEMICOLON:
										return s.fbt._("{previous item}; {last item}", [s.fbt._param("previous item", e), s.fbt._param("last item", t)], {
											hk: "1h77rJ"
										});
									default:
										return s.fbt._("{list of items}, {last item}", [s.fbt._param("list of items", e), s.fbt._param("last item", t)], {
											hk: "3Q0iaX"
										})
								}
								default:
									r(!1, "Invalid conjunction %s provided to intlList", n)
						}
					}(d, c, t || i.AND, n || a.COMMA)
				},
				d = n("./src/lib/timezone/index.ts"),
				l = n("./src/reddit/helpers/isArrayEqual.ts"),
				u = n("./src/reddit/helpers/ordinal/index.ts"),
				m = n("./src/reddit/models/ScheduledPost/index.ts");
			const p = e => {
					return `${e.toLocaleDateString(void 0,{month:"numeric",day:"numeric"})} @ ${e.toLocaleTimeString(void 0,{hour:"numeric",minute:"numeric"}).replace(" ","").toLowerCase()}`
				},
				h = (e, t) => {
					if (e && t) {
						const n = Object(d.f)(f(e, t)),
							o = p(n);
						return s.fbt._("Submit post at {time}", [s.fbt._param("time", o)], {
							hk: "IZ3L"
						})
					}
					return s.fbt._("Submit post at scheduled event time", null, {
						hk: "lYsoU"
					})
				},
				b = e => e.slice(0, 5),
				f = (e, t) => `${e}T${b(t)}:00`,
				g = e => {
					const [t, n] = e.split("T");
					return [t, b(n)]
				},
				C = e => {
					const [t, n] = g(e);
					if (t && n) {
						const e = Object(d.f)(f(t, n));
						return p(e)
					}
					return ""
				},
				x = e => {
					const t = Object(d.d)(e);
					let n, s = e;
					if (t) {
						n = t.offset, s = `(GMT${Object(d.e)(t.offset)}) ${e.replace("/"," - ").replace(/_/g," ")}`
					}
					return {
						name: e,
						displayText: s,
						offset: n
					}
				},
				E = e => "string" == typeof e,
				v = e => {
					const t = new Date,
						n = e - t.getDay();
					return t.setDate(t.getDate() + n), t.toLocaleDateString(void 0, {
						weekday: "long"
					})
				},
				_ = e => {
					const t = (e => {
						const [t, n] = g(e);
						if (t && n) {
							return Object(d.f)(f(t, n)).toLocaleTimeString(void 0, {
								hour: "numeric",
								minute: "numeric"
							})
						}
						return ""
					})(e.publishAt);
					if (e.frequency === m.d.Hourly) return 2 === e.interval ? s.fbt._("Every other hour", null, {
						hk: "64vzK"
					}) : e.interval > 1 ? s.fbt._("Every {hour interval} hours", [s.fbt._param("hour interval", e.interval.toString())], {
						hk: "3x8zaD"
					}) : s.fbt._("Every hour", null, {
						hk: "1VzCs"
					});
					if (e.frequency === m.d.Daily) return 2 === e.interval ? s.fbt._("Every other day at {start time}", [s.fbt._param("start time", t)], {
						hk: "yTynp"
					}) : e.interval > 1 ? s.fbt._("Every {day interval} days at {start time}", [s.fbt._param("day interval", e.interval.toString()), s.fbt._param("start time", t)], {
						hk: "2OoGlG"
					}) : s.fbt._("Every day at {start time}", [s.fbt._param("start time", t)], {
						hk: "1cvwm2"
					});
					if (e.frequency === m.d.Weekly) {
						const n = (e => c(e.map(m.k).sort((e, t) => e - t).map(v), i.AND, a.COMMA))(e.byWeekDays);
						return 2 === e.interval ? s.fbt._("Every other week on {days of week } at {start time}", [s.fbt._param("days of week ", n), s.fbt._param("start time", t)], {
							hk: "43xwaa"
						}) : e.interval > 1 ? s.fbt._("Every {interval} weeks on {days of week} at {start time}", [s.fbt._param("interval", e.interval.toString()), s.fbt._param("days of week", n), s.fbt._param("start time", t)], {
							hk: "2IVbH"
						}) : s.fbt._("Every week on {days of week} at {start time}", [s.fbt._param("days of week", n), s.fbt._param("start time", t)], {
							hk: "2Zl0L"
						})
					}
					const n = (e => c(e.sort((e, t) => e - t).map(u.a), i.AND, a.COMMA))(e.byMonthDays);
					return 2 === e.interval ? s.fbt._({
						"*": "Every other month on the {days of month} days at {start time}",
						_1: "Every other month on the {days of month} day at {start time}"
					}, [s.fbt._param("days of month", n), s.fbt._plural(e.byMonthDays.length), s.fbt._param("start time", t)], {
						hk: "okH9o"
					}) : e.interval > 1 ? s.fbt._({
						"*": "Every {interval} months on the {days of month} days at {start time}",
						_1: "Every {interval} months on the {days of month} day at {start time}"
					}, [s.fbt._param("interval", e.interval.toString()), s.fbt._param("days of month", n), s.fbt._plural(e.byMonthDays.length), s.fbt._param("start time", t)], {
						hk: "KqN3x"
					}) : s.fbt._({
						"*": "Every month on the {days of month} days at {start time}",
						_1: "Every month on the {days of month} day at {start time}"
					}, [s.fbt._param("days of month", n), s.fbt._plural(e.byMonthDays.length), s.fbt._param("start time", t)], {
						hk: "1jBuYc"
					})
				},
				O = e => {
					let t = null;
					e.frequency && (t = e.frequency), (e.byWeekDays.length > 1 || e.byMonthDays.length > 1 || e.interval > 1) && (t = m.b);
					const n = Object(d.f)(e.publishAt),
						s = Object(m.q)(n.getDay()),
						o = n.getDate();
					return 1 === e.byWeekDays.length && e.byWeekDays[0] !== s && (t = m.b), 1 === e.byMonthDays.length && e.byMonthDays[0] !== o && (t = m.b), {
						recurrenceInfo: e.frequency ? {
							frequency: e.frequency,
							byMonthDays: e.byMonthDays,
							byWeekDays: e.byWeekDays,
							interval: e.interval
						} : null,
						frequencyOption: t,
						submitDate: e.publishAt,
						timezoneName: e.clientTimezone
					}
				},
				y = (e, t) => {
					if (!e && t || e && !t) return !1;
					if (!e && !t) return !0;
					for (const n in e) {
						if (!t) return !1;
						if (e.hasOwnProperty(n)) {
							if (Array.isArray(e[n]) && (!Array.isArray(t[n]) || !Object(l.a)(e[n], t[n]))) return !1;
							if (e[n] !== t[n]) return !1
						}
					}
					return !0
				}
		},
		"./src/reddit/helpers/styles/mixins/loading.m.less": function(e, t, n) {
			e.exports = {
				loadingBackground: "fzTkuBRFT8iIn1XnJX_Yn",
				"m-loading": "_34yMY7-6MNnz3utfjExvIq",
				mLoading: "_34yMY7-6MNnz3utfjExvIq",
				gradientAnimation: "vnt666wwqSK5qL63sBn9P",
				loadingBar: "_3giTODNeZ-Po90u8Ghs4aI",
				loadingContainer: "VRC9QT7CgUxvhK0ceQSrn"
			}
		},
		"./src/reddit/helpers/styles/mixins/loading.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return a
			}));
			var s = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/helpers/styles/mixins/loading.m.less"),
				r = n.n(o);
			const i = ({
					isLoading: e
				}) => Object(s.a)(r.a.loadingBackground, {
					[r.a["m-loading"]]: e
				}),
				a = e => Object(s.a)(r.a.loadingBar, i(e))
		},
		"./src/reddit/helpers/trackers/comment.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return r
			})), n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return a
			}));
			var s = n("./src/telemetry/index.ts"),
				o = n("./src/reddit/selectors/telemetry.ts");
			const r = ({
					state: e,
					commentId: t
				}) => Object(s.a)({
					source: "comment",
					action: "view",
					noun: "comment",
					...o.defaults(e),
					profile: o.profile(e),
					post: o.post(e, t),
					media: o.media(e, t),
					subreddit: o.subreddit(e),
					comment: o.comment(e, t)
				}),
				i = ({
					state: e,
					commentId: t
				}) => Object(s.a)({
					source: "comment",
					action: "consume",
					noun: "comment",
					...o.defaults(e),
					profile: o.profile(e),
					post: o.post(e, t),
					media: o.media(e, t),
					subreddit: o.subreddit(e),
					comment: o.comment(e, t)
				}),
				a = e => t => ({
					source: "online_presence",
					action: "view",
					noun: "user",
					user: o.user(t),
					subreddit: o.subreddit(t),
					post: o.post(t, e),
					actionInfo: o.actionInfo(t),
					app: o.app(t),
					referrer: o.referrer(t),
					session: o.session(t)
				})
		},
		"./src/reddit/helpers/trackers/commentsPage.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return l
			})), n.d(t, "g", (function() {
				return u
			})), n.d(t, "b", (function() {
				return m
			})), n.d(t, "e", (function() {
				return p
			})), n.d(t, "a", (function() {
				return h
			})), n.d(t, "c", (function() {
				return b
			})), n.d(t, "d", (function() {
				return f
			}));
			var s = n("./src/telemetry/index.ts"),
				o = n("./src/reddit/constants/tracking.ts"),
				r = n("./src/reddit/models/PostDraft/index.ts"),
				i = n("./src/reddit/selectors/comments.ts"),
				a = n("./src/reddit/selectors/platform.ts"),
				c = n("./src/reddit/selectors/telemetry.ts");
			const d = e => {
					const t = Object(a.m)(e);
					return {
						source: "comment_composer",
						action: o.c.CLICK,
						...Object(c.defaults)(e),
						screen: Object(c.screen)(e),
						subreddit: Object(c.subreddit)(e),
						post: t ? Object(c.post)(e, t) : null,
						profile: Object(c.profile)(e)
					}
				},
				l = (e, t, n, o) => {
					const r = {
							commentId: o,
							commentsPageKey: n
						},
						a = o && Object(i.j)(e, r) || 0;
					return Object(s.a)({
						noun: "comment",
						...d(e),
						comment: o ? Object(c.comment)(e, o) : null,
						listing: Object(c.listing)(e, void 0, {
							depth: a
						}),
						commentComposer: {
							editorMode: t
						}
					})
				},
				u = (e, t, n, o) => {
					const r = d(e);
					return Object(s.a)({
						...r,
						actionInfo: {
							...r.actionInfo,
							reason: "karma_rate_limit"
						},
						source: "backend",
						action: "error",
						noun: "comment",
						comment: {
							bodyText: t,
							parentId: o,
							postId: n
						}
					})
				},
				m = e => Object(s.a)({
					noun: "cancel",
					...d(e)
				}),
				p = (e, t) => {
					t === r.c.replyToPost && Object(s.a)({
						noun: "input",
						...d(e)
					})
				},
				h = (e, t) => Object(s.a)({
					source: "comment",
					noun: "delete",
					action: "click",
					...Object(c.defaults)(t),
					screen: Object(c.screen)(t),
					subreddit: Object(c.subreddit)(t),
					post: Object(c.post)(t, e)
				}),
				b = e => Object(s.a)({
					noun: "edit",
					...d(e)
				}),
				f = e => Object(s.a)({
					noun: "save_edit",
					...d(e)
				})
		},
		"./src/reddit/helpers/trackers/communityAwards.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			})), n.d(t, "e", (function() {
				return d
			})), n.d(t, "g", (function() {
				return l
			})), n.d(t, "c", (function() {
				return u
			})), n.d(t, "f", (function() {
				return m
			})), n.d(t, "b", (function() {
				return p
			})), n.d(t, "d", (function() {
				return h
			})), n.d(t, "h", (function() {
				return f
			})), n.d(t, "i", (function() {
				return g
			}));
			var s = n("./src/reddit/models/Gold/Award.ts"),
				o = n("./src/reddit/selectors/telemetry.ts"),
				r = n("./src/reddit/helpers/correlationIdTracker.ts"),
				i = n("./src/reddit/helpers/trackers/gild.ts");
			const a = e => ({
					...o.defaults(e),
					screen: o.screen(e),
					subreddit: o.subreddit(e),
					userSubreddit: o.userSubreddit(e)
				}),
				c = e => ({
					awardId: e.id,
					awardName: e.name,
					isModAward: e.awardType === s.f.Moderator,
					isTemporatyAward: !!e.endsAt,
					numberCoins: e.coinPrice,
					numberMonths: Math.floor((e.daysOfPremium || 0) / 30),
					numberCoinsToRecipient: e.coinReward || 0,
					numberCoinsToCommunity: e.subredditCoinReward || 0,
					type: Object(i.getAwardTypeFromAward)(e)
				}),
				d = () => e => ({
					...a(e),
					source: "awards",
					action: "click",
					correlationId: Object(r.c)(r.a.AwardCreationFlow),
					noun: "create"
				}),
				l = e => t => ({
					...a(t),
					source: "awards",
					action: "click",
					correlationId: Object(r.c)(r.a.AwardDeletionFlow),
					noun: "delete",
					goldPurchase: e ? c(e) : null,
					media: e ? {
						url: e.icon.url
					} : null
				}),
				u = (e, t, n) => s => ({
					...a(s),
					source: "create_award",
					action: e,
					correlationId: Object(r.c)(r.a.AwardCreationFlow),
					noun: t,
					goldPurchase: n
				}),
				m = (e, t, n, s) => o => ({
					...a(o),
					source: "create_award",
					action: "upload",
					correlationId: Object(r.c)(r.a.AwardCreationFlow),
					noun: "image",
					actionInfo: s ? {
						reason: s
					} : {
						success: !0
					},
					media: t ? {
						fileName: t.file.name,
						height: t.height,
						id: t.id,
						mimetype: t.file.type,
						size: t.file.size,
						type: "image",
						uploadDuration: n,
						url: e,
						width: t.width
					} : null
				}),
				p = (e, t, n) => s => ({
					...a(s),
					source: "create_award",
					action: "click",
					correlationId: Object(r.c)(r.a.AwardCreationFlow),
					noun: "create",
					media: t && e ? {
						fileName: t.file.name,
						height: t.height,
						id: t.id,
						mimetype: t.file.type,
						size: t.file.size,
						type: "image",
						url: e,
						width: t.width
					} : null,
					goldPurchase: n ? c(n) : null
				}),
				h = (e, t, n) => s => ({
					...a(s),
					source: "create_award",
					action: e,
					correlationId: Object(r.c)(r.a.AwardCreationFlow),
					noun: t,
					goldPurchase: n ? c(n) : null
				}),
				b = (e, t, n) => s => ({
					...a(s),
					source: "awards",
					action: "click",
					noun: n,
					goldPurchase: c(e),
					profile: o.profileById(s, t),
					subreddit: o.subredditById(s, t)
				}),
				f = (e, t) => b(e, t, "disable_in_community"),
				g = (e, t) => b(e, t, "enable_in_community")
		},
		"./src/reddit/helpers/trackers/gild.ts": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "getAwardTypeFromAward", (function() {
				return d
			})), n.d(t, "clickGildEvent", (function() {
				return m
			})), n.d(t, "clickRpanGiveAward", (function() {
				return p
			})), n.d(t, "clickAddAward", (function() {
				return h
			})), n.d(t, "clickHideAward", (function() {
				return b
			})), n.d(t, "clickConfirmHideAward", (function() {
				return f
			})), n.d(t, "clickCancelHideAward", (function() {
				return g
			})), n.d(t, "clickAwardReportFlow", (function() {
				return x
			})), n.d(t, "clickCancelAwardReportFlow", (function() {
				return E
			})), n.d(t, "clickFlagAwardUsage", (function() {
				return v
			})), n.d(t, "clickCancelFlagAwardUsage", (function() {
				return _
			})), n.d(t, "clickConfirmFlagAwardUsage", (function() {
				return O
			})), n.d(t, "clickReportAward", (function() {
				return y
			})), n.d(t, "clickCancelReportAward", (function() {
				return k
			})), n.d(t, "clickConfirmReportAward", (function() {
				return j
			})), n.d(t, "viewGildModalEvent", (function() {
				return S
			})), n.d(t, "clickSelectAwardEvent", (function() {
				return I
			})), n.d(t, "triggerAnonymousEvent", (function() {
				return T
			})), n.d(t, "clickMessageInputEvent", (function() {
				return w
			})), n.d(t, "typeMessageInputEvent", (function() {
				return P
			})), n.d(t, "clickLearnMoreLinkEvent", (function() {
				return N
			})), n.d(t, "clickQuestionMarkEvent", (function() {
				return M
			})), n.d(t, "clickConfirmAwardEvent", (function() {
				return D
			})), n.d(t, "clickGetPremiumEvent", (function() {
				return L
			})), n.d(t, "clickAddCoinsButtonEvent", (function() {
				return R
			})), n.d(t, "clickNextButtonEvent", (function() {
				return F
			})), n.d(t, "clickCloseGildModalEvent", (function() {
				return A
			})), n.d(t, "viewKarmaSuccessEvent", (function() {
				return B
			})), n.d(t, "clickFilterEvent", (function() {
				return U
			})), n.d(t, "clickNextFiltersEvent", (function() {
				return V
			})), n.d(t, "clickPreviousFiltersEvent", (function() {
				return W
			}));
			var s = n("./src/reddit/models/Gold/Award.ts"),
				o = n("./src/reddit/selectors/telemetry.ts"),
				r = n("./src/telemetry/models/GoldPurchase.ts"),
				i = n("./src/reddit/helpers/correlationIdTracker.ts"),
				a = n("./src/reddit/helpers/isComment.ts"),
				c = n("./src/reddit/selectors/gild.ts");
			const d = e => e.awardType === s.f.Global && e.awardSubType === s.d.Appreciation ? r.GoldPurchaseType.GidAppreciation : e.awardType === s.f.Global && e.awardSubType === s.d.Premium ? r.GoldPurchaseType.GidPremium : e.awardSubType === s.d.Group ? r.GoldPurchaseType.GidGroup : e.awardType === s.f.Community ? r.GoldPurchaseType.GidCommunity : e.awardType === s.f.Moderator ? r.GoldPurchaseType.GidMod : e.awardType === s.f.Global && e.awardSubType === s.d.Global ? r.GoldPurchaseType.GidGlobal : r.GoldPurchaseType.GidUnknown,
				l = (e, t) => ({
					awardId: e.id,
					awardName: e.name,
					isTemporaryAward: !!e.endsAt,
					numberCoinsToRecipient: e.coinReward,
					type: d(e),
					...t
				}),
				u = (e, t) => ({
					...o.defaults(e),
					comment: t ? o.comment(e, t) : void 0,
					correlationId: Object(c.b)(e) || Object(i.d)(i.a.GildingFlow, !1),
					post: t ? o.post(e, t) : void 0,
					screen: o.screen(e),
					subreddit: o.subreddit(e),
					userSubreddit: o.userSubreddit(e)
				}),
				m = e => t => ({
					...u(t, e),
					source: Object(a.a)(e) ? "comment" : "post",
					action: "click",
					noun: "give_gold"
				}),
				p = e => t => ({
					...u(t, e),
					source: "stream_player",
					action: "click",
					noun: "give_gold"
				}),
				h = e => t => ({
					...u(t, e),
					source: Object(a.a)(e) ? "comment" : "post",
					action: "click",
					noun: "add_award"
				}),
				b = (e, t) => n => ({
					...u(n, t),
					source: Object(a.a)(t) ? "comment" : "post",
					action: "click",
					noun: "hide_award",
					goldPurchase: l(e)
				}),
				f = (e, t) => n => ({
					...u(n, t),
					source: Object(a.a)(t) ? "comment" : "post",
					action: "click",
					noun: "confirm_hide_award",
					goldPurchase: l(e)
				}),
				g = (e, t) => n => ({
					...u(n, t),
					source: Object(a.a)(t) ? "comment" : "post",
					action: "click",
					noun: "cancel_hide_award",
					goldPurchase: l(e)
				}),
				C = e => (t, n) => s => ({
					...u(s, n),
					source: Object(a.a)(n) ? "comment" : "post",
					action: "click",
					noun: e,
					goldPurchase: l(t)
				}),
				x = C("award_hovercard_report"),
				E = C("cancel_award_hovercard_report"),
				v = C("flag_award"),
				_ = C("cancel_flag_award"),
				O = C("confirm_flag_award"),
				y = C("report_community_award"),
				k = C("cancel_report_community_award"),
				j = C("confirm_report_community_award"),
				S = (e, t, n) => s => ({
					...u(s, n),
					source: "give_gold",
					action: "view",
					noun: "page",
					goldPurchase: {
						defaultOption: e,
						defaultAnonymous: t
					}
				}),
				I = (e, t, n) => s => ({
					...u(s, t),
					source: "give_gold",
					action: "click",
					noun: "award",
					goldPurchase: l(e, n)
				}),
				T = (e, t) => n => ({
					...u(n, t),
					source: "give_gold",
					action: e,
					noun: "anonymous"
				}),
				w = e => t => ({
					...u(t, e),
					source: "give_gold",
					action: "click",
					noun: "message_input"
				}),
				P = e => t => ({
					...u(t, e),
					source: "give_gold",
					action: "type",
					noun: "message_input"
				}),
				N = e => t => ({
					...u(t, e),
					source: "give_gold",
					action: "click",
					noun: "learn_more"
				}),
				M = e => t => ({
					...u(t, e),
					source: "give_gold",
					action: "click",
					noun: "question"
				}),
				D = (e, t) => n => ({
					...u(n, e),
					source: "give_gold",
					action: "click",
					noun: "confirm",
					goldPurchase: {
						contentType: Object(a.a)(e) ? "comment" : "post",
						...l(t)
					}
				}),
				L = (e, t) => n => ({
					...u(n, e),
					source: "give_gold",
					action: "click",
					noun: "get_premium",
					goldPurchase: {
						contentType: Object(a.a)(e) ? "comment" : "post",
						...l(t)
					}
				}),
				R = e => t => ({
					...u(t, e),
					source: "give_gold",
					action: "click",
					noun: "add_coins"
				}),
				F = e => t => ({
					...u(t, e),
					source: "give_gold",
					action: "click",
					noun: "next"
				}),
				A = e => t => ({
					...u(t, e),
					source: "give_gold",
					action: "click",
					noun: "close"
				}),
				B = ({
					award: e,
					awardeeKarmaEarned: t,
					awarderKarmaEarned: n,
					numberCoins: s,
					thingId: o
				}) => r => ({
					...u(r, o),
					source: "give_gold",
					action: "view",
					noun: "karma_success",
					goldPurchase: {
						contentType: Object(a.a)(o) ? "comment" : "post",
						awardeeKarmaEarned: t,
						awarderKarmaEarned: n,
						numberCoins: s,
						...l(e)
					}
				}),
				U = e => t => ({
					...u(t),
					source: "give_gold",
					action: "click",
					noun: "filter",
					goldPurchase: {
						filterId: e.tag,
						filterName: e.content.markdown
					}
				}),
				V = () => e => ({
					...u(e),
					source: "give_gold",
					action: "click",
					noun: "next_filters"
				}),
				W = () => e => ({
					...u(e),
					source: "give_gold",
					action: "click",
					noun: "previous_filters"
				})
		},
		"./src/reddit/helpers/trackers/goldPayment.ts": function(e, t, n) {
			"use strict";
			n.d(t, "h", (function() {
				return b
			})), n.d(t, "b", (function() {
				return f
			})), n.d(t, "f", (function() {
				return g
			})), n.d(t, "d", (function() {
				return C
			})), n.d(t, "e", (function() {
				return x
			})), n.d(t, "c", (function() {
				return E
			})), n.d(t, "a", (function() {
				return v
			})), n.d(t, "g", (function() {
				return _
			})), n.d(t, "i", (function() {
				return O
			})), n.d(t, "j", (function() {
				return y
			}));
			var s = n("./src/lib/constants/index.ts"),
				o = n("./src/reddit/models/Gold/ProductOffer.ts"),
				r = n("./src/reddit/selectors/gold/giveAwards.ts"),
				i = n("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				a = n("./src/reddit/selectors/goldPurchaseModals.ts"),
				c = n("./src/reddit/selectors/telemetry.ts"),
				d = n("./src/telemetry/models/GoldPurchase.ts"),
				l = n("./src/telemetry/models/Payment.ts"),
				u = n("./src/reddit/helpers/trackers/gild.ts"),
				m = n("./src/reddit/helpers/correlationIdTracker.ts"),
				p = n("./src/reddit/helpers/isComment.ts"),
				h = n("./src/reddit/helpers/trackers/communityAwards.ts");
			const b = (e, t) => {
					const {
						thingId: n,
						packageId: l
					} = t, b = !!n, f = r.b(e), g = f ? Object(u.getAwardTypeFromAward)(f) : null, C = b ? g : a.o(e) ? d.GoldPurchaseType.Premium : d.GoldPurchaseType.Coins, x = n ? Object(p.a)(n) ? "comment" : "post" : void 0, E = l || a.s(e), v = [...Object(i.d)(e), ...Object(i.f)(e)].filter(e => e.mobileId === E)[0], _ = t.offerContext || (f && 0 === f.coinPrice ? o.a.StorefrontFreeAward : Object(o.c)(v, b)), O = v ? Math.round(1e4 * (v.baselinePennies - v.pennies) / v.baselinePennies) / 100 : 0, y = v ? Math.round(1e4 * (v.coins - v.baselineCoins) / v.coins) / 100 : 0, k = v ? v.baselinePennies !== v.pennies ? `${O}_percent_price` : v.baselineCoins !== v.coins ? `${y}_percent_bonus` : void 0 : void 0, j = C === d.GoldPurchaseType.Premium ? s.pb : v ? v.pennies : void 0;
					return {
						...c.defaults(e),
						comment: n ? c.comment(e, n) : null,
						correlationId: a.q(e) || Object(m.d)(m.a.GoldPayment, !1),
						post: n ? c.post(e, n) : null,
						screen: c.screen(e),
						subreddit: n ? c.subreddit(e) : null,
						goldPurchase: {
							...f ? Object(h.a)(f) : null,
							type: C,
							gildedContent: b,
							contentType: x,
							numberCoins: v ? v.coins : void 0,
							offerContext: _,
							offerType: k
						},
						payment: {
							currency: "USD",
							amountInSmallestDenom: j
						},
						purchase: {
							priceMicros: j
						}
					}
				},
				f = (e, t, n) => s => ({
					...b(s, {
						packageId: t,
						thingId: e,
						offerContext: n
					}),
					source: "gold_payment",
					action: "click",
					noun: "close"
				}),
				g = e => t => ({
					...b(t, {
						thingId: e
					}),
					source: "gold_payment",
					action: "click",
					noun: "paypal"
				}),
				C = e => t => ({
					...b(t, {
						thingId: e
					}),
					source: "gold_payment",
					action: "click",
					noun: "continue_paypal"
				}),
				x = e => t => ({
					...b(t, {
						thingId: e
					}),
					source: "gold_payment",
					action: "click",
					noun: "credit_card"
				}),
				E = e => t => ({
					...b(t, {
						thingId: e
					}),
					source: "gold_payment",
					action: "click",
					noun: "complete_credit_card"
				}),
				v = (e, t) => n => ({
					...b(n, {
						packageId: e,
						offerContext: t
					}),
					source: "gold_payment",
					action: "click",
					noun: "confirm"
				}),
				_ = e => t => ({
					...b(t, {
						thingId: e
					}),
					source: "gold_payment",
					action: "display",
					noun: "error"
				}),
				O = (e, t, n) => s => {
					const o = b(s, {
						packageId: t,
						thingId: e,
						offerContext: n
					});
					return {
						...o,
						source: "gold_payment",
						action: "view",
						noun: "page",
						payment: {
							...o.payment,
							defaultOption: l.PaymentMethod.Paypal
						},
						goldPurchase: {
							...o.goldPurchase,
							source: e ? d.GiveGold : a.o(s) ? d.PremiumMarketing : d.CoinsMarketing
						}
					}
				},
				y = e => t => {
					const n = b(t, {
						thingId: e
					});
					return {
						...n,
						source: "gold_payment",
						action: "view",
						noun: "success",
						payment: {
							...n.payment,
							method: t.platform.currentPage.queryParams.thanks ? l.PaymentMethod.Paypal : l.PaymentMethod.CreditCard
						}
					}
				}
		},
		"./src/reddit/helpers/trackers/postCollection.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "h", (function() {
				return d
			})), n.d(t, "g", (function() {
				return l
			})), n.d(t, "o", (function() {
				return u
			})), n.d(t, "f", (function() {
				return p
			})), n.d(t, "e", (function() {
				return h
			})), n.d(t, "n", (function() {
				return b
			})), n.d(t, "m", (function() {
				return f
			})), n.d(t, "b", (function() {
				return C
			})), n.d(t, "p", (function() {
				return x
			})), n.d(t, "c", (function() {
				return E
			})), n.d(t, "j", (function() {
				return v
			})), n.d(t, "q", (function() {
				return _
			})), n.d(t, "k", (function() {
				return O
			})), n.d(t, "l", (function() {
				return y
			})), n.d(t, "i", (function() {
				return k
			})), n.d(t, "d", (function() {
				return j
			}));
			var s, o, r = n("./src/reddit/constants/tracking.ts"),
				i = n("./src/reddit/helpers/trackers/postEvent.ts"),
				a = n("./src/reddit/selectors/platform.ts"),
				c = n("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.collection = "collection", e.collectionComposer = "collection_composer", e.postComposer = "post_composer", e.postOverflowMenu = "post_overflow_menu"
			}(s || (s = {})),
			function(e) {
				e.post = "post", e.follow = "follow", e.unfollow = "unfollow", e.screen = "screen", e.eventEducation = "event_education", e.eventEducationGotIt = "event_education_got_it", e.collectionEducation = "collection_education", e.collectionEducationGotIt = "collection_education_got_it", e.collectionCancel = "cancel", e.collectionCreate = "collection_create", e.collectionSelect = "collection_select", e.collectionDelete = "collection_delete", e.collectionEdit = "collection_edit", e.collectionAddPost = "collection_add_post", e.collectionRemovePost = "remove_post_from_collection", e.startEvent = "start_event"
			}(o || (o = {}));
			const d = e => t => ({
					source: s.collection,
					noun: o.post,
					...m(t, e)
				}),
				l = ({
					postId: e,
					isFollowed: t
				}) => n => ({
					source: s.collection,
					noun: t ? o.unfollow : o.follow,
					...m(n, e)
				}),
				u = ({
					postId: e,
					isFollowed: t
				}) => n => ({
					source: i.a.postEvent,
					noun: t ? o.unfollow : o.follow,
					...m(n, e)
				}),
				m = (e, t) => {
					const n = {
						...c.defaults(e),
						action: r.c.CLICK,
						subreddit: c.subreddit(e)
					};
					return void 0 === t ? n : {
						...n,
						post: c.post(e, t),
						postCollection: c.postCollectionI13nSelector(e, {
							postId: t
						}),
						postEvent: c.postEventI13nSelector(e, {
							postId: t
						})
					}
				},
				p = e => ({
					...g(e),
					action: r.c.VIEW,
					noun: o.collectionEducation
				}),
				h = e => ({
					...g(e),
					action: r.c.CLICK,
					noun: o.collectionEducationGotIt
				}),
				b = e => ({
					...g(e),
					action: r.c.VIEW,
					noun: o.eventEducation
				}),
				f = e => ({
					...g(e),
					action: r.c.CLICK,
					noun: o.eventEducationGotIt
				}),
				g = e => ({
					...c.defaults(e),
					subreddit: c.subreddit(e),
					source: s.postComposer
				}),
				C = (e, t) => n => ({
					...m(n, e),
					source: t || s.postOverflowMenu,
					noun: o.collectionAddPost
				}),
				x = e => t => ({
					...m(t, e),
					source: s.collectionComposer,
					noun: o.collectionRemovePost
				}),
				E = () => e => ({
					...m(e),
					source: s.collectionComposer,
					noun: o.collectionCancel
				}),
				v = () => e => {
					const t = Object(a.m)(e) || void 0;
					return {
						...m(e, t),
						source: s.collectionComposer,
						noun: o.collectionCreate
					}
				},
				_ = () => e => ({
					...m(e),
					source: s.collectionComposer,
					noun: o.collectionSelect
				}),
				O = e => t => ({
					...c.defaults(t),
					subreddit: c.subreddit(t),
					source: s.collectionComposer,
					action: r.c.CLICK,
					noun: o.collectionDelete,
					postCollection: c.postCollectionI13nByCollectionIdSelector(t, {
						collectionId: e
					})
				}),
				y = e => t => ({
					...m(t),
					source: s.collectionComposer,
					noun: o.collectionEdit,
					postCollection: c.postCollectionI13nByCollectionIdSelector(t, {
						collectionId: e
					})
				}),
				k = e => t => ({
					...m(t, e),
					source: s.collectionComposer,
					noun: o.startEvent
				}),
				j = () => e => {
					const t = Object(a.m)(e) || void 0;
					return {
						...m(e, t),
						source: s.collectionComposer,
						action: r.c.VIEW,
						noun: o.screen
					}
				}
		},
		"./src/reddit/helpers/trackers/postEvent.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "f", (function() {
				return h
			})), n.d(t, "g", (function() {
				return b
			})), n.d(t, "e", (function() {
				return f
			})), n.d(t, "b", (function() {
				return g
			})), n.d(t, "c", (function() {
				return C
			})), n.d(t, "d", (function() {
				return x
			}));
			var s, o = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/eventTools/index.ts"),
				i = n("./src/lib/timezone/index.ts"),
				a = n("./src/reddit/constants/tracking.ts"),
				c = n("./src/reddit/models/PostCreationForm/index.ts"),
				d = n("./src/reddit/selectors/platform.ts"),
				l = n("./src/reddit/selectors/postCreations.ts"),
				u = n("./src/reddit/selectors/telemetry.ts"),
				m = n("./src/telemetry/index.ts");
			! function(e) {
				e.postEvent = "post_event", e.postComposer = "post_composer", e.eventComposer = "event_composer"
			}(s || (s = {}));
			const p = e => u.actionInfo(e, {
					pageType: "event_submit"
				}),
				h = e => {
					Object(m.a)({
						...u.defaults(e),
						source: s.postComposer,
						action: a.c.CLICK,
						noun: "event_create",
						subreddit: u.subreddit(e)
					})
				},
				b = e => {
					Object(m.a)({
						...u.defaults(e),
						source: s.postComposer,
						action: a.c.CLICK,
						noun: "event_edit",
						subreddit: u.subreddit(e),
						postEvent: E(e),
						postComposer: v(e)
					})
				},
				f = () => e => ({
					source: s.eventComposer,
					action: a.c.VIEW,
					noun: a.b.SCREEN,
					actionInfo: p(e),
					postEvent: E(e)
				}),
				g = e => t => ({
					...y(t, Object(d.m)(t)),
					source: s.postComposer,
					noun: "apply",
					postComposer: _(e)
				}),
				C = () => e => ({
					...y(e, Object(d.m)(e)),
					noun: "cancel",
					actionInfo: p(e)
				}),
				x = e => t => ({
					...y(t, Object(d.m)(t)),
					noun: "delete",
					actionInfo: p(t),
					postComposer: v(t),
					postEvent: O(e)
				}),
				E = e => {
					const t = Object(l.p)(e);
					return t && O(t)
				},
				v = e => _(Object(l.p)(e)),
				_ = e => {
					return {
						postScheduled: !!e,
						submitScheduledTime: e && e.submitTime === c.i.AtEventTime ? Object(i.f)(e.startDate).getTime() / o.Hb : void 0
					}
				},
				O = e => {
					const t = Object(i.f)(e.startDate).getTime() / o.Hb,
						n = Object(i.f)(e.endDate).getTime() / o.Hb;
					return {
						eventStartTimestamp: t,
						eventEndTimestamp: n,
						eventState: Object(r.e)(t, n)
					}
				},
				y = (e, t) => {
					const n = {
						source: s.eventComposer,
						action: a.c.CLICK,
						subreddit: u.subreddit(e)
					};
					return t ? {
						...n,
						post: u.post(e, t),
						postEvent: u.postEventI13nSelector(e, {
							postId: t
						}),
						postCollection: u.postCollectionI13nSelector(e, {
							postId: t
						})
					} : n
				}
		},
		"./src/reddit/helpers/trackers/postFlair.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return a
			})), n.d(t, "f", (function() {
				return c
			})), n.d(t, "d", (function() {
				return d
			})), n.d(t, "c", (function() {
				return l
			})), n.d(t, "e", (function() {
				return u
			}));
			var s = n("./src/reddit/helpers/correlationIdTracker.ts"),
				o = n("./src/reddit/selectors/telemetry.ts"),
				r = n("./src/reddit/helpers/flair.ts");
			const i = (e, t) => n => ({
					source: "post",
					action: "click",
					noun: "post_flair",
					...o.defaults(n),
					actionInfo: o.actionInfo(n),
					correlationId: Object(s.c)(s.a.SearchResults),
					post: o.post(n, e),
					search: {
						...o.postFlairClickToSearch(n, t),
						query: `flair_name:'${t.postFlairName}'`,
						queryId: Object(s.c)(s.a.SearchResults)
					},
					subreddit: o.subreddit(n)
				}),
				a = e => t => ({
					source: "post_flair_widget",
					action: "click",
					noun: "post_flair_search",
					...o.defaults(t),
					actionInfo: o.actionInfo(t),
					correlationId: Object(s.c)(s.a.SearchResults),
					search: o.postFlairClickToSearch(t, e),
					subreddit: o.subreddit(t)
				}),
				c = e => t => {
					const n = Object(r.g)(e);
					return {
						...o.defaults(t),
						action: "click",
						noun: "post_flair",
						source: "post_flair_widget",
						subreddit: o.subreddit(t),
						postFlair: {
							id: e.templateId,
							title: n
						}
					}
				},
				d = () => e => ({
					...o.defaults(e),
					action: "click",
					noun: "overflow",
					source: "post_flair_widget",
					subreddit: o.subreddit(e)
				}),
				l = e => t => {
					const n = Object(r.g)(e);
					return {
						...o.defaults(t),
						action: "click",
						noun: "clear",
						source: "post_flair_widget",
						subreddit: o.subreddit(t),
						postFlair: {
							id: e.templateId,
							title: n
						}
					}
				},
				u = (e, t) => n => {
					const i = Object(r.g)(e),
						a = o.post(n, t);
					return {
						...o.defaults(n),
						action: "click",
						noun: "post_flair",
						source: "post",
						subreddit: o.subreddit(n),
						postFlair: {
							id: e.templateId,
							title: i
						},
						post: a,
						search: {
							query: `flair_name:'${i}'`,
							subredditId: a ? a.subredditId : void 0,
							subredditName: a ? a.subredditName : void 0,
							postFlairName: i,
							originElement: "post_flair",
							queryId: Object(s.c)(s.a.SearchResults),
							originPageType: n.platform.currentPage ? o.getPageTypeFromCurrentPage(n.platform.currentPage) : void 0
						}
					}
				}
		},
		"./src/reddit/helpers/trackers/predictions.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return o
			})), n.d(t, "f", (function() {
				return r
			})), n.d(t, "g", (function() {
				return i
			})), n.d(t, "c", (function() {
				return a
			})), n.d(t, "i", (function() {
				return c
			})), n.d(t, "d", (function() {
				return d
			})), n.d(t, "a", (function() {
				return l
			})), n.d(t, "h", (function() {
				return u
			})), n.d(t, "b", (function() {
				return m
			}));
			var s = n("./src/reddit/selectors/telemetry.ts");
			const o = e => ({
					...Object(s.defaults)(e),
					source: "poll",
					action: "select",
					noun: "poll_option"
				}),
				r = e => ({
					...Object(s.defaults)(e),
					source: "poll",
					action: "select",
					noun: "prediction_option"
				}),
				i = e => ({
					...Object(s.defaults)(e),
					source: "poll",
					action: "view",
					noun: "predict_info_modal"
				}),
				a = e => ({
					...Object(s.defaults)(e),
					source: "poll",
					action: "close",
					noun: "predict_info_modal"
				}),
				c = e => ({
					...Object(s.defaults)(e),
					source: "poll",
					action: "view",
					noun: "predict_option_modal"
				}),
				d = ({
					pollId: e,
					selectedNumberCoins: t,
					totalStakeAmount: n
				}) => o => ({
					...Object(s.defaults)(o),
					source: "poll",
					action: "confirm",
					noun: "predict",
					poll: Object(s.poll)(o, e, !1, void 0, t),
					goldPurchase: {
						numberCoins: n
					}
				}),
				l = e => ({
					...Object(s.defaults)(e),
					source: "poll",
					action: "click",
					noun: "add_coins"
				}),
				u = e => t => ({
					...Object(s.defaults)(t),
					source: "global",
					action: "view",
					noun: "screen",
					actionInfo: {
						pageType: "predictions_leaderboard",
						reason: e ? "prediction_details" : "subreddit_header"
					}
				}),
				m = ({
					targetUserId: e
				}) => t => ({
					...Object(s.defaults)(t),
					source: "prediction",
					action: "click",
					noun: "leaderboard_profile",
					targetUser: {
						id: e
					}
				})
		},
		"./src/reddit/helpers/trackers/privateCommunity.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return r
			}));
			var s = n("./src/reddit/selectors/telemetry.ts");
			const o = e => t => ({
					...s.defaults(t),
					source: e,
					action: "click",
					noun: "request_to_join_button",
					subreddit: s.subreddit(t)
				}),
				r = e => t => ({
					...s.defaults(t),
					source: e,
					action: "click",
					noun: "request_to_join_submit",
					subreddit: s.subreddit(t)
				})
		},
		"./src/reddit/helpers/trackers/restrictedCommunity.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return r
			}));
			var s = n("./src/reddit/selectors/telemetry.ts");
			const o = e => t => ({
					...s.defaults(t),
					source: e,
					action: "click",
					noun: "request_restricted_approval_button",
					subreddit: s.subreddit(t)
				}),
				r = e => t => ({
					...s.defaults(t),
					source: "request_restricted_approval_form",
					action: "click",
					noun: e,
					subreddit: s.subreddit(t)
				})
		},
		"./src/reddit/helpers/trackers/scheduledPosts.ts": function(e, t, n) {
			"use strict";
			n.d(t, "i", (function() {
				return a
			})), n.d(t, "y", (function() {
				return c
			})), n.d(t, "m", (function() {
				return d
			})), n.d(t, "p", (function() {
				return l
			})), n.d(t, "q", (function() {
				return u
			})), n.d(t, "b", (function() {
				return m
			})), n.d(t, "c", (function() {
				return p
			})), n.d(t, "o", (function() {
				return h
			})), n.d(t, "r", (function() {
				return b
			})), n.d(t, "k", (function() {
				return f
			})), n.d(t, "f", (function() {
				return g
			})), n.d(t, "d", (function() {
				return C
			})), n.d(t, "n", (function() {
				return x
			})), n.d(t, "h", (function() {
				return E
			})), n.d(t, "g", (function() {
				return _
			})), n.d(t, "l", (function() {
				return O
			})), n.d(t, "t", (function() {
				return y
			})), n.d(t, "j", (function() {
				return k
			})), n.d(t, "e", (function() {
				return j
			})), n.d(t, "x", (function() {
				return S
			})), n.d(t, "u", (function() {
				return I
			})), n.d(t, "a", (function() {
				return T
			})), n.d(t, "s", (function() {
				return w
			})), n.d(t, "v", (function() {
				return P
			})), n.d(t, "w", (function() {
				return N
			}));
			var s = n("./src/reddit/models/ScheduledPost/index.ts"),
				o = n("./src/reddit/selectors/telemetry.ts");
			const r = e => ({
					...o.defaults(e),
					screen: o.screen(e),
					subreddit: o.subreddit(e),
					userSubreddit: o.userSubreddit(e)
				}),
				i = e => ({
					id: e.id,
					publishAt: e.publishAt,
					clientTimezone: e.clientTimezone,
					isRecurring: Object(s.p)(e)
				}),
				a = () => e => ({
					source: "post_composer",
					action: "click",
					noun: "schedule_post",
					...r(e)
				}),
				c = () => e => ({
					source: "scheduled_post_composer",
					action: "view",
					noun: "schedule_post_composer",
					...r(e)
				}),
				d = () => e => ({
					source: "scheduled_post_composer",
					action: "click",
					noun: "submit_date",
					...r(e)
				}),
				l = () => e => ({
					source: "scheduled_post_composer",
					action: "click",
					noun: "submit_time",
					...r(e)
				}),
				u = () => e => ({
					source: "scheduled_post_composer",
					action: "click",
					noun: "submit_timezone",
					...r(e)
				}),
				m = () => e => ({
					source: "scheduled_post_composer",
					action: "click",
					noun: "apply",
					...r(e)
				}),
				p = () => e => ({
					source: "scheduled_post_composer",
					action: "click",
					noun: "cancel",
					...r(e)
				}),
				h = e => t => ({
					source: "post_composer",
					action: "click",
					noun: "schedule_post_submit",
					...r(t),
					scheduledPost: i(e)
				}),
				b = e => t => ({
					source: "post_composer",
					action: "click",
					noun: "schedule_post_update_submit",
					...r(t),
					scheduledPost: i(e)
				}),
				f = () => e => ({
					source: "mod_hub_nav",
					action: "click",
					noun: "scheduled_posts",
					...r(e)
				}),
				g = () => e => ({
					source: "mod_hub_nav",
					action: "click",
					noun: "event_posts",
					...r(e)
				}),
				C = () => e => ({
					source: "post",
					action: "click",
					noun: "edit_post",
					...r(e)
				}),
				x = () => e => ({
					source: "post",
					action: "click",
					noun: "submit_post_now",
					...r(e)
				}),
				E = e => t => ({
					source: "post",
					action: "click",
					noun: "overflow_menu",
					...r(t),
					actionInfo: o.actionInfo(t, {
						pageType: e ? "recurring_posts" : "scheduled_posts"
					})
				}),
				v = {
					[s.d.Hourly]: "hourly_frequency",
					[s.d.Daily]: "daily_frequency",
					[s.d.Weekly]: "weekly_frequency",
					[s.d.Monthly]: "monthly_frequency",
					[s.b]: "custom_frequency"
				},
				_ = e => t => ({
					source: "scheduled_post_composer_submit_frequency",
					action: "click",
					noun: null === e ? "one_time_frequency" : v[e],
					...r(t)
				}),
				O = () => e => ({
					source: "post",
					action: "click",
					noun: "start_event_now",
					...r(e)
				}),
				y = (e, t, n) => i => ({
					source: "post",
					action: "click",
					noun: Object(s.l)(e),
					...r(i),
					actionInfo: o.actionInfo(i, {
						settingValue: t ? "true" : "false",
						pageType: n ? "recurring_posts" : "scheduled_posts"
					})
				}),
				k = () => e => ({
					source: "recurring_post_module",
					action: "click",
					noun: "schedule_post_cta",
					...r(e)
				}),
				j = () => e => ({
					source: "recurring_post_module",
					action: "click",
					noun: "edit_recurring_post",
					...r(e)
				}),
				S = () => e => ({
					source: "recurring_post_composer",
					action: "view",
					noun: "recurring_post_composer",
					...r(e)
				}),
				I = () => (e, t) => ({
					source: "recurring_post_composer",
					action: "click",
					noun: "update",
					...r(e),
					scheduledPost: i(t)
				}),
				T = () => e => ({
					source: "recurring_post_composer",
					action: "click",
					noun: "cancel",
					...r(e)
				}),
				w = () => (e, t) => ({
					source: "recurring_post_composer",
					action: "click",
					noun: "delete",
					...r(e),
					scheduledPost: i(t)
				}),
				P = () => e => ({
					source: "scheduled_post_composer",
					action: "view",
					noun: "custom_schedule_post_composer",
					...r(e)
				}),
				N = () => (e, t) => {
					const n = r(e);
					return {
						source: "post",
						action: "view",
						noun: "error",
						...n,
						actionInfo: {
							...n.actionInfo,
							reason: "failed_post"
						},
						scheduledPost: i(t)
					}
				}
		},
		"./src/reddit/helpers/trackers/widgets.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return a
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "d", (function() {
				return d
			})), n.d(t, "c", (function() {
				return l
			}));
			var s, o, r = n("./src/reddit/constants/tracking.ts"),
				i = n("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.REREDDIT_PROMO = "rereddit_promo", e.SEE_MORE = "see_more", e.TOPIC = "topic", e.TOPICS_WIDGET = "topics_widget"
			}(s || (s = {})),
			function(e) {
				e.COMMUNITY_WIDGETS = "community_widgets", e.POST = "post", e.SIDEBAR = "sidebar", e.TOPICS_WIDGET = "topics_widget"
			}(o || (o = {}));
			const a = (e, t) => n => ({
					source: o.COMMUNITY_WIDGETS,
					action: r.c.CLICK,
					noun: s.SEE_MORE,
					widget: Object(i.widget)(n, {
						subredditId: e,
						widgetKind: t
					}),
					...i.defaults
				}),
				c = (e, t) => n => ({
					source: o.POST,
					action: r.c.CLICK,
					noun: s.REREDDIT_PROMO,
					post: i.post(n, e),
					subreddit: i.subreddit(n),
					...t && {
						banner: {
							buttonText: t,
							id: s.REREDDIT_PROMO
						}
					},
					...i.defaults(n)
				}),
				d = () => e => ({
					source: o.SIDEBAR,
					action: r.c.VIEW,
					noun: s.TOPICS_WIDGET,
					...i.defaults(e)
				}),
				l = e => t => ({
					source: o.TOPICS_WIDGET,
					action: r.c.CLICK,
					noun: s.TOPIC,
					...i.defaults(t),
					topicMetadata: {
						displayName: e
					}
				})
		},
		"./src/reddit/hooks/useInfoTextTooltip.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./node_modules/icepick/icepick.js"),
				o = n("./node_modules/react/index.js"),
				r = n("./src/reddit/hooks/useTooltip.ts");
			const i = Object(s.freeze)({
				name: "offset",
				options: {
					offset: [0, 6]
				}
			});

			function a(e) {
				const t = Object(o.useMemo)(() => {
					const t = Object(r.a)(e);
					return Object(s.updateIn)(t, ["modifiers"], e => Object(s.push)(e, i))
				}, [e]);
				return Object(r.b)(t)
			}
		},
		"./src/reddit/hooks/useLocalStorage.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./node_modules/react/index.js"),
				o = n("./src/reddit/helpers/localStorage/index.ts");

			function r(e, t) {
				let n;
				n = Object(o.r)(e);
				const [r, i] = Object(s.useState)(null != n ? n : t);
				return [r, function(t) {
					Object(o.jb)(e, t), i(t)
				}]
			}
		},
		"./src/reddit/hooks/useMemoShallowEqual.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./node_modules/react/index.js"),
				o = n("./node_modules/react-redux/es/index.js");

			function r(e) {
				const t = Object(s.useRef)(e);
				return t.current === e || Object(o.c)(t.current, e) || (t.current = e), t.current
			}
		},
		"./src/reddit/hooks/usePageLayer.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/reddit/contexts/PageLayer/index.tsx");
			t.a = s.Z
		},
		"./src/reddit/hooks/usePostContext.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./node_modules/react/index.js"),
				o = n("./src/reddit/contexts/Post/index.tsx");

			function r() {
				const e = Object(s.useContext)(o.c);
				if (!e) throw new Error("No Post context!");
				return e
			}
		},
		"./src/reddit/hooks/usePrevious.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./node_modules/react/index.js");

			function o(e) {
				const t = Object(s.useRef)();
				return Object(s.useEffect)(() => {
					t.current = e
				}), t.current
			}
		},
		"./src/reddit/hooks/useTheme.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./node_modules/react/index.js"),
				o = n("./src/lib/CSSVariableProvider/index.tsx");

			function r() {
				return Object(s.useContext)(o.b)
			}
		},
		"./src/reddit/hooks/useTooltip.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return c
			}));
			var s = n("./node_modules/icepick/icepick.js"),
				o = n("./node_modules/react/index.js"),
				r = n("./node_modules/react-popper/lib/esm/usePopper.js");
			const i = Object(s.freeze)({
				modifiers: []
			});

			function a(e) {
				let t = "object" == typeof e ? e : i;
				return Array.isArray(t.modifiers) || (t = Object(s.assoc)(t, "modifiers", i.modifiers)), t
			}

			function c(e) {
				const [t, n] = Object(o.useState)(null), [i, c] = Object(o.useState)(null), [d, l] = Object(o.useState)(null), [u, m] = Object(o.useState)(!1), p = Object(o.useCallback)(async () => m(!0), []), h = Object(o.useCallback)(() => m(!1), []), b = Object(o.useMemo)(() => {
					const t = a(e);
					return d ? Object(s.updateIn)(t, ["modifiers"], e => Object(s.push)(e, {
						name: "arrow",
						options: {
							element: d
						}
					})) : t
				}, [d, e]), {
					attributes: f,
					styles: g
				} = Object(r.a)(t, i, b);
				return Object(o.useMemo)(() => ({
					arrowProps: {
						ref: l,
						style: g.arrow,
						...f.arrow
					},
					hide: h,
					popperProps: {
						ref: c,
						style: g.popper,
						...f.popper
					},
					show: p,
					target: {
						element: t,
						ref: n
					},
					visible: u
				}), [l, f, c, h, p, g, t, n, u])
			}
		},
		"./src/reddit/hooks/useUserContext.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./node_modules/react/index.js"),
				o = n("./src/reddit/contexts/User/index.tsx");

			function r() {
				return Object(s.useContext)(o.a)
			}
		},
		"./src/reddit/icons/fonts/AddCollection/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				a = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => {
				const t = Object(i.a)();
				return o.a.createElement("i", {
					className: Object(r.a)(Object(a.b)(t ? "collection" : "addCollection", e.isFilled), e.className)
				})
			}
		},
		"./src/reddit/icons/fonts/Approve/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				a = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = n.n(a);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("approve", e.isFilled), c.a.approveIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Calendar/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				a = n("./src/reddit/icons/fonts/helpers.tsx"),
				c = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = n.n(c);
			t.a = e => {
				const t = Object(i.a)();
				return o.a.createElement("i", {
					className: Object(r.a)(Object(a.b)(t ? "scheduled" : "calendar", e.isFilled), d.a.calendarIcon, e.className)
				})
			}
		},
		"./src/reddit/icons/fonts/Create/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("create", e.isFilled), e.className)
			})
		},
		"./src/reddit/icons/fonts/DropdownTriangle/index.m.less": function(e, t, n) {
			e.exports = {
				DropdownTriangle: "_28O0gzb6GMS8lbDeySdpwp",
				dropdownTriangle: "_28O0gzb6GMS8lbDeySdpwp"
			}
		},
		"./src/reddit/icons/fonts/DropdownTriangle/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				a = n("./src/reddit/icons/fonts/DropdownTriangle/index.m.less"),
				c = n.n(a);
			const d = n("./src/lib/lessComponent.tsx").a.wrapped(e => {
				const t = Object(r.a)();
				return o.a.createElement("i", {
					className: `${Object(i.b)(t?"caret_down":"dropdownTriangle",e.isFilled)} ${e.className}`
				})
			}, "DropdownTriangle", c.a);
			t.a = d
		},
		"./src/reddit/icons/fonts/Expandos/Media/Video/index.m.less": function(e, t, n) {
			e.exports = {
				TextMediaIcon: "_1YuQjV5ZXNDhhSOkCnE9he",
				textMediaIcon: "_1YuQjV5ZXNDhhSOkCnE9he"
			}
		},
		"./src/reddit/icons/fonts/Expandos/Media/Video/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				a = n("./src/reddit/icons/fonts/Expandos/Media/Video/index.m.less"),
				c = n.n(a);
			const d = n("./src/lib/lessComponent.tsx").a.wrapped(e => {
				const t = Object(r.a)();
				return o.a.createElement("i", {
					className: `${Object(i.b)(t?"video_post":"expandoMediaVideo",e.isFilled)} ${e.className}`
				})
			}, "TextMediaIcon", c.a);
			t.a = d
		},
		"./src/reddit/icons/fonts/Gif/index.m.less": function(e, t, n) {
			e.exports = {
				GifIcon: "_2FVMHfvH9Kj7f59LnZjdUX",
				gifIcon: "_2FVMHfvH9Kj7f59LnZjdUX"
			}
		},
		"./src/reddit/icons/fonts/Gif/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				a = n("./src/reddit/icons/fonts/Gif/index.m.less"),
				c = n.n(a);
			const d = n("./src/lib/lessComponent.tsx").a.wrapped(e => {
				const t = Object(r.a)();
				return o.a.createElement("i", {
					className: `${Object(i.b)(t?"gif_post":"gif",e.isFilled)} ${e.className}`
				})
			}, "GifIcon", c.a);
			t.a = d
		},
		"./src/reddit/icons/fonts/Info/index.m.less": function(e, t, n) {
			e.exports = {
				InfoIcon: "_3nKAYOml-oSgh4pKL20-sC",
				infoIcon: "_3nKAYOml-oSgh4pKL20-sC"
			}
		},
		"./src/reddit/icons/fonts/Info/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/Info/index.m.less"),
				a = n.n(i);
			const c = n("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: `${Object(r.b)("info",e.isFilled)} ${e.className}`
			}), "InfoIcon", a.a);
			t.a = c
		},
		"./src/reddit/icons/fonts/Link/index.m.less": function(e, t, n) {
			e.exports = {
				LinkIcon: "_1UzGujIvFbQUgWI4gO6QeD",
				linkIcon: "_1UzGujIvFbQUgWI4gO6QeD"
			}
		},
		"./src/reddit/icons/fonts/Link/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				a = n("./src/reddit/icons/fonts/Link/index.m.less"),
				c = n.n(a);
			const d = n("./src/lib/lessComponent.tsx").a.wrapped(e => {
				const t = Object(r.a)();
				return o.a.createElement("i", {
					className: `${Object(i.b)(t?"link_post":"link",e.isFilled)} ${e.className}`
				})
			}, "LinkIcon", c.a);
			t.a = d
		},
		"./src/reddit/icons/fonts/Live/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				a = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = n.n(a);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("live", e.isFilled), c.a.liveIcon, e.className)
			})
		},
		"./src/reddit/icons/fonts/Menu/index.m.less": function(e, t, n) {
			e.exports = {
				MenuIcon: "_2L8b_l8zFzAkWuMyZJ1_vg",
				menuIcon: "_2L8b_l8zFzAkWuMyZJ1_vg"
			}
		},
		"./src/reddit/icons/fonts/Menu/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/Menu/index.m.less"),
				a = n.n(i);
			const c = n("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: `${Object(r.b)("menu",e.isFilled)} ${e.className}`
			}), "MenuIcon", a.a);
			t.a = c
		},
		"./src/reddit/icons/fonts/OutboundLink/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => {
				const t = Object(r.a)();
				return o.a.createElement("i", {
					className: `${Object(i.b)(t?"external_link":"outboundLink",e.isFilled)} ${e.className}`
				})
			}
		},
		"./src/reddit/icons/fonts/Photos/index.m.less": function(e, t, n) {
			e.exports = {
				PhotoIcon: "_1LWQVKh7NQLbKMIz2io1Di",
				photoIcon: "_1LWQVKh7NQLbKMIz2io1Di"
			}
		},
		"./src/reddit/icons/fonts/Photos/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				a = n("./src/reddit/icons/fonts/Photos/index.m.less"),
				c = n.n(a);
			const d = n("./src/lib/lessComponent.tsx").a.wrapped(e => {
				const t = Object(r.a)();
				return o.a.createElement("i", {
					className: `${Object(i.b)(t?"image_post":"photos",e.isFilled)} ${e.className}`
				})
			}, "PhotoIcon", c.a);
			t.a = d
		},
		"./src/reddit/icons/fonts/Plus/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("plus", e.isFilled), e.className)
			})
		},
		"./src/reddit/icons/fonts/Premium/index.m.less": function(e, t, n) {
			e.exports = {
				PremiumIcon: "dLp3R7pmxclGjLS87yr5S",
				premiumIcon: "dLp3R7pmxclGjLS87yr5S"
			}
		},
		"./src/reddit/icons/fonts/Premium/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/Premium/index.m.less"),
				a = n.n(i);
			const c = n("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				title: e.title,
				className: `${Object(r.b)("premium",e.isFilled)} ${e.className}`
			}), "PremiumIcon", a.a);
			t.a = c
		},
		"./src/reddit/icons/fonts/Remove/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				a = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = n.n(a);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("remove", e.isFilled), c.a.removeIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Report/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				a = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = n.n(a);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("report", e.isFilled), c.a.reportIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Spam/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				a = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = n.n(a);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("spam", e.isFilled), c.a.spamIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Sticky/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				a = n("./src/reddit/icons/fonts/helpers.tsx"),
				c = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = n.n(c);
			t.a = e => {
				const t = Object(i.a)();
				return o.a.createElement("i", {
					className: Object(r.a)(Object(a.b)(t ? "pin" : "sticky", e.isFilled), d.a.stickyIcon, e.className),
					id: e.id,
					onMouseEnter: e.onMouseEnter,
					onMouseLeave: e.onMouseLeave
				}, o.a.createElement(a.a, null, e.desc))
			}
		},
		"./src/reddit/icons/fonts/Text/index.m.less": function(e, t, n) {
			e.exports = {
				TextIcon: "_5UHlAh7zBZ6migrBJeld3",
				textIcon: "_5UHlAh7zBZ6migrBJeld3"
			}
		},
		"./src/reddit/icons/fonts/Text/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				a = n("./src/reddit/icons/fonts/Text/index.m.less"),
				c = n.n(a);
			const d = n("./src/lib/lessComponent.tsx").a.wrapped(e => {
				const t = Object(r.a)();
				return o.a.createElement("i", {
					className: `${Object(i.b)(t?"text_post":"text",e.isFilled)} ${e.className}`
				})
			}, "TextIcon", c.a);
			t.a = d
		},
		"./src/reddit/icons/fonts/Video/index.m.less": function(e, t, n) {
			e.exports = {
				VideoIcon: "_1q4uVersxe3LOuom7R34bx",
				videoIcon: "_1q4uVersxe3LOuom7R34bx"
			}
		},
		"./src/reddit/icons/fonts/Video/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/Video/index.m.less"),
				a = n.n(i);
			const c = n("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: `${Object(r.b)("video",e.isFilled)} ${e.className}`
			}), "VideoIcon", a.a);
			t.a = c
		},
		"./src/reddit/icons/fonts/commonStyles.m.less": function(e, t, n) {
			e.exports = {
				iconFont: "WxKparxaBCy4-EWML7xc3",
				approveIcon: "MAe2tslj1FAD6GliiZ3it",
				calendarIcon: "_2YXLfgRGcJoCJROcTAGqir",
				commentIcon: "_3ch9jJ0painNf41PmU4F9i",
				lockIcon: "XHMWG1CPWX8RXeNg-o5-R",
				modActions: "_3phKxmomoio9ulzAoL4XhZ",
				moderateIcon: "_2Xt7ltq8LezAkf8ZF8x9dv",
				removeIcon: "_2IVG3b9-lczna8tonL9FWB",
				reportIcon: "_1MDjRAzxk1RSTB12748O1v",
				shareIcon: "xwmljjCrovDE5C9MasZja",
				spamIcon: "_1Gn6JH0U8GJtJXSIc54IMU",
				stickyIcon: "hMF1wBi2Z6Lh9zHskfhX1",
				adminIcon: "_3ACtZ0jvC5KDN8RNxR0lXX",
				archivedIcon: "_2trXhUAJMhIhxp8a2zvOVP",
				liveIcon: "_3cdJ6BHH65ws78AzuO0KLw"
			}
		},
		"./src/reddit/icons/svgs/AddCollection/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 24 24"
			}, o.a.createElement("defs", null, o.a.createElement("path", {
				id: "svg-add-collection",
				d: "M19.2 2.4a2.4 2.4 0 0 1 2.4 2.4v.936a3.577 3.577 0 0 0-2.4-.936H4.8c-.925 0-1.763.361-2.4.936V4.8a2.4 2.4 0 0 1 2.4-2.4h14.4zm0 3.6a2.4 2.4 0 0 1 2.4 2.4v.936a3.577 3.577 0 0 0-2.4-.936H4.8c-.925 0-1.763.361-2.4.936V8.4A2.4 2.4 0 0 1 4.8 6h14.4zm0 3.6a2.4 2.4 0 0 1 2.4 2.4v7.2a2.4 2.4 0 0 1-2.4 2.4H4.8a2.4 2.4 0 0 1-2.4-2.4V12a2.4 2.4 0 0 1 2.4-2.4h14.4zm-3.806 5.1H12.9v-2.494a.9.9 0 1 0-1.8 0V14.7H8.607a.9.9 0 1 0 0 1.8H11.1v2.494a.9.9 0 1 0 1.8 0V16.5h2.494a.9.9 0 0 0 0-1.8z"
			})), o.a.createElement("use", {
				fill: "inherit",
				xlinkHref: "#svg-add-collection",
				fillRule: "evenodd"
			}))
		},
		"./src/reddit/icons/svgs/Chat/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: e.viewBox || "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("path", {
				d: "M10,0A10,10,0,0,0,1.64,15.51L.57,18.73c-.16.52.19.86.7.7l3.22-1.08A10,10,0,1,0,10,0ZM5.54,11.41A1.39,1.39,0,1,1,6.93,10,1.39,1.39,0,0,1,5.54,11.41Zm4.46,0A1.39,1.39,0,1,1,11.39,10,1.39,1.39,0,0,1,10,11.41Zm4.44,0A1.39,1.39,0,1,1,15.83,10,1.39,1.39,0,0,1,14.44,11.41Z"
			}))
		},
		"./src/reddit/icons/svgs/Checkbox/index.m.less": function(e, t, n) {
			e.exports = {
				checkbox: "_1vmueUAOJJg7fhS7wxztWa"
			}
		},
		"./src/reddit/icons/svgs/Checkbox/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/Checkbox/index.m.less"),
				a = n.n(i);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = ({
				className: e,
				...t
			}) => o.a.createElement("svg", c({
				xmlns: "http://www.w3.org/2000/svg",
				width: "20",
				height: "20",
				viewBox: "0 0 20 20",
				className: Object(r.a)(a.a.checkbox, e)
			}, t), o.a.createElement("path", {
				fill: "inherit",
				d: "M1.66666667,3.34755033 L1.66666667,16.6524497 C1.66666667,17.5781756 2.42112363,18.3333333 3.34755033,18.3333333 L16.6524497,18.3333333 C17.5781756,18.3333333 18.3333333,17.5788764 18.3333333,16.6524497 L18.3333333,3.34755033 C18.3333333,2.42182438 17.5788764,1.66666667 16.6524497,1.66666667 L3.34755033,1.66666667 C2.42182438,1.66666667 1.66666667,2.42112363 1.66666667,3.34755033 Z M0,3.34755033 C0,1.49874933 1.5032506,0 3.34755033,0 L16.6524497,0 C18.5012507,0 20,1.5032506 20,3.34755033 L20,16.6524497 C20,18.5012507 18.4967494,20 16.6524497,20 L3.34755033,20 C1.49874933,20 0,18.4967494 0,16.6524497 L0,3.34755033 Z"
			}))
		},
		"./src/reddit/icons/svgs/CheckboxSelected/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => o.a.createElement("svg", r({
				xmlns: "http://www.w3.org/2000/svg",
				width: "20",
				height: "20",
				viewBox: "0 0 20 20"
			}, e), o.a.createElement("path", {
				fill: "inherit",
				d: "M0,3.34755033 C0,1.49874933 1.5032506,0 3.34755033,0 L16.6524497,0 C18.5012507,0 20,1.5032506 20,3.34755033 L20,16.6524497 C20,18.5012507 18.4967494,20 16.6524497,20 L3.34755033,20 C1.49874933,20 0,18.4967494 0,16.6524497 L0,3.34755033 Z M8.50575,15.1995 L15.797625,7.907625 C16.25325,7.452625 16.25325,6.71325 15.797625,6.25825 C15.342,5.802625 14.602625,5.802625 14.147625,6.25825 L7.7295,12.676375 L5.635125,10.327625 C5.20575,9.846375 4.46825,9.805125 3.987625,10.23325 C3.506375,10.662625 3.4645,11.400125 3.89325,11.88075 L6.810125,15.151375 C7.023875,15.39075 7.327,15.531375 7.647625,15.54075 C7.658875,15.54075 7.6695,15.541375 7.68075,15.541375 C7.990125,15.541375 8.287,15.41825 8.50575,15.1995 Z"
			}))
		},
		"./src/reddit/icons/svgs/Checkmark/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 22",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", null, o.a.createElement("path", {
				d: "M8.9310375,15.1995 C8.70135,15.41825 8.38963125,15.541375 8.0647875,15.541375 C8.052975,15.541375 8.04181875,15.54075 8.03000625,15.54075 C7.69335,15.531375 7.37506875,15.39075 7.15063125,15.151375 L4.0879125,11.88075 C3.637725,11.400125 3.68169375,10.662625 4.18700625,10.23325 C4.6916625,9.805125 5.4660375,9.846375 5.91688125,10.327625 L8.115975,12.676375 L14.8550063,6.25825 C15.3327563,5.802625 16.1091,5.802625 16.5875063,6.25825 C17.0659125,6.71325 17.0659125,7.452625 16.5875063,7.907625 L8.9310375,15.1995 Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/Chevron/index.m.less": function(e, t, n) {
			e.exports = {
				chevron: "_1c_YBKkiW4FhhLJPkq9c1v"
			}
		},
		"./src/reddit/icons/svgs/Chevron/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/Chevron/index.m.less"),
				a = n.n(i);
			t.a = e => o.a.createElement("svg", {
				className: Object(r.a)(a.a.chevron, e.className),
				viewBox: "0 0 9 14",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", {
				transform: "translate(-6.000000, -3.000000)"
			}, o.a.createElement("polygon", {
				fill: "none",
				points: "0 20 20 20 20 0 0 0"
			}), o.a.createElement("polygon", {
				fill: "inherit",
				points: "7.47566213 3 14.4756621 10 7.47566213 17 6 15.5239203 11.5239203 10 6 4.47566213"
			})))
		},
		"./src/reddit/icons/svgs/ChevronDown/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 12 12",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, o.a.createElement("g", null, o.a.createElement("polygon", {
				fill: "inherit",
				points: "11.0584 4.0602 6.0292 9.0894 1 4.0602 2.0608 3 6.0292 6.9684 9.9982 3"
			})))
		},
		"./src/reddit/icons/svgs/ChevronUp/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 12 12",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", null, o.a.createElement("polygon", {
				fill: "inherit",
				transform: "translate(6.029200, 6.044700) scale(1, -1) translate(-6.029200, -6.044700)",
				points: "11.0584 4.0602 6.0292 9.0894 1 4.0602 2.0608 3 6.0292 6.9684 9.9982 3"
			})))
		},
		"./src/reddit/icons/svgs/Clear/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				onClick: e.onClick,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 40 40"
			}, o.a.createElement("path", {
				d: "M20 2.5C10.3 2.5 2.5 10.3 2.5 20c0 9.7 7.8 17.5 17.5 17.5S37.5 29.7 37.5 20C37.5 10.3 29.7 2.5 20 2.5zM24.2 27.7L20 23.5l-4.2 4.2c-1.1 1.1-2.5 1.1-3.5 0-1.1-1.1-1.1-2.4 0-3.5l4.2-4.2-4.2-4.2c-1.1-1.1-1.1-2.5 0-3.5 1.1-1.1 2.4-1.1 3.5 0l4.2 4.2 4.2-4.2c1.1-1.1 2.5-1.1 3.5 0 1.1 1.1 1.1 2.4 0 3.5L23.5 20l4.2 4.2c1.1 1.1 1.1 2.5 0 3.5C26.7 28.8 25.3 28.8 24.2 27.7z"
			}))
		},
		"./src/reddit/icons/svgs/Clock/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 11 11"
			}, o.a.createElement("g", null, o.a.createElement("path", {
				d: "M5 3.75C5 3.47388 5.22363 3.25 5.5 3.25C5.77637 3.25 6 3.47388 6 3.75V5.53735L7.81689 6.58643C8.05615 6.72449 8.13818 7.03027 8 7.26941C7.86182 7.50861 7.55615 7.59052 7.31689 7.45245L5.25049 6.25934C5.07861 6.16028 4.98779 5.97504 5.00146 5.78992L5 5.75V3.75Z",
				fill: "inherit"
			}), o.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M11 5.5C11 8.53754 8.5376 11 5.5 11C2.4624 11 0 8.53754 0 5.5C0 2.46246 2.4624 0 5.5 0C8.5376 0 11 2.46246 11 5.5ZM10 5.5C10 7.98529 7.98535 10 5.5 10C3.01465 10 1 7.98529 1 5.5C1 3.01471 3.01465 1 5.5 1C7.98535 1 10 3.01471 10 5.5Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/Crosspost/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => o.a.createElement("svg", r({
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), o.a.createElement("path", {
				d: "M9.06,8.64c1.12-1.26,2.2-2.45,4.44-2.6V7.5a1,1,0,0,0,.6.92,1,1,0,0,0,.41.09,1,1,0,0,0,.67-.26l3.16-2.9a.5.5,0,0,0,0-.74L15.18,1.7a1,1,0,0,0-1.68.74V4c-3.14.17-4.69,1.88-5.93,3.28C6.58,8.42,6,9,5,9H2a1,1,0,0,0,0,2H5C6.93,11,8,9.82,9.06,8.64Z"
			}), o.a.createElement("path", {
				d: "M15.18,11.76a1,1,0,0,0-1.68.74V14c-2.23-.16-3.29-1.32-4.39-2.56-.21-.24-.43-.48-.66-.72a5.63,5.63,0,0,1-1.77,1.06,13.34,13.34,0,0,1,.94,1A7.85,7.85,0,0,0,13.5,16v1.59a1,1,0,0,0,.6.92,1,1,0,0,0,.41.09,1,1,0,0,0,.67-.26l3.16-2.9a.5.5,0,0,0,0-.74Z"
			}))
		},
		"./src/reddit/icons/svgs/Dropdown/index.m.less": function(e, t, n) {
			e.exports = {
				dropdown: "XHbKeEqnW58ib9mTN6jnS",
				mRedditStyle: "u_kypUXmB-k1A5TcC8MI9"
			}
		},
		"./src/reddit/icons/svgs/Dropdown/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/Dropdown/index.m.less"),
				a = n.n(i);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const d = ({
				className: e,
				isSubreddit: t,
				...n
			}) => o.a.createElement("svg", c({
				className: Object(r.a)(a.a.dropdown, {
					[a.a.mRedditStyle]: !t
				}, e),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n), o.a.createElement("path", {
				d: "M14.17,9.35,10,13.53,5.83,9.35a.5.5,0,0,1,.35-.85h7.64a.5.5,0,0,1,.35.85"
			}));
			t.b = d
		},
		"./src/reddit/icons/svgs/FormattingOrderedList/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_1fQOXfyxB1SmgMOi7sihQV"
			}
		},
		"./src/reddit/icons/svgs/FormattingOrderedList/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/FormattingOrderedList/index.m.less"),
				a = n.n(i);
			t.a = e => o.a.createElement("svg", {
				className: Object(r.a)(a.a.icon, e.className),
				style: e.style,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("path", {
				d: "M4.78,5.15H4.15V2H3.09a1,1,0,0,1-.73.25V3a1.84,1.84,0,0,0,.7-.17V5.15H2.35V6H4.78Z"
			}), o.a.createElement("path", {
				d: "M3.62,8.88c.25,0,.39.12.39.35s-.17.41-.77.78c-1,.63-1.15,1.21-1.15,1.78V12H5v-.85H3.31c.06-.16.22-.35.72-.64.81-.43,1-.87,1-1.32C5,8.47,4.58,8,3.65,8A1.76,1.76,0,0,0,2.08,9l.72.52A1.07,1.07,0,0,1,3.62,8.88Z"
			}), o.a.createElement("path", {
				d: "M4.43,15.87A.82.82,0,0,0,5,15.05C5,14.4,4.53,14,3.65,14a2.15,2.15,0,0,0-1.51.61l.55.64a1.24,1.24,0,0,1,.88-.39c.27,0,.41.12.41.32s-.15.38-.67.38H3v.72h.31c.53,0,.76.13.76.46s-.15.42-.57.42a1.05,1.05,0,0,1-.85-.5L2,17.21A1.83,1.83,0,0,0,3.57,18c.94,0,1.55-.43,1.55-1.24A.87.87,0,0,0,4.43,15.87Z"
			}), o.a.createElement("path", {
				d: "M17,9H8a1,1,0,0,0,0,2h9a1,1,0,0,0,0-2Z"
			}), o.a.createElement("path", {
				d: "M17,15H8a1,1,0,0,0,0,2h9a1,1,0,0,0,0-2Z"
			}), o.a.createElement("path", {
				d: "M8,5h9a1,1,0,0,0,0-2H8A1,1,0,0,0,8,5Z"
			}))
		},
		"./src/reddit/icons/svgs/Gallery/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 16 16"
			}, o.a.createElement("g", null, o.a.createElement("path", {
				fill: "inherit",
				d: "M1 0H6C6.55298 0 7 0.446991 7 1V6C7 6.55301 6.55298 7 6 7H1C0.447021 7 0 6.55301 0 6V1C0 0.446991 0.447021 0 1 0ZM10 0H15C15.553 0 16 0.446991 16 1V6C16 6.55301 15.553 7 15 7H10C9.44702 7 9 6.55301 9 6V1C9 0.446991 9.44702 0 10 0ZM15 9H10C9.44702 9 9 9.44699 9 10V15C9 15.553 9.44702 16 10 16H15C15.553 16 16 15.553 16 15V10C16 9.44699 15.553 9 15 9ZM1 9H6C6.55298 9 7 9.44699 7 10V15C7 15.553 6.55298 16 6 16H1C0.447021 16 0 15.553 0 15V10C0 9.44699 0.447021 9 1 9Z"
			})))
		},
		"./src/reddit/icons/svgs/GovSmall/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 16 14",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", null, o.a.createElement("path", {
				d: "M8.5,0.2l6.2,3c0.5,0.3,0.6,0.9,0.3,1.4C14.9,4.8,14.6,5,14.2,5H1.8c-0.6,0-1-0.4-1-1 c0-0.4,0.2-0.7,0.5-0.9l6.2-3C7.9,0,8.1,0,8.5,0.2z"
			}), o.a.createElement("path", {
				d: "M2,12h12c0.6,0,1,0.4,1,1l0,0c0,0.6-0.4,1-1,1H2c-0.6,0-1-0.4-1-1l0,0C1,12.4,1.4,12,2,12z"
			}), o.a.createElement("path", {
				d: "M3.8,6h0.5C4.7,6,5,6.3,5,6.8v3.5C5,10.7,4.7,11,4.2,11H3.8C3.3,11,3,10.7,3,10.3V6.8C3,6.3,3.3,6,3.8,6z"
			}), o.a.createElement("path", {
				d: "M7.8,6h0.5C8.7,6,9,6.3,9,6.8v3.5C9,10.7,8.7,11,8.2,11H7.8C7.3,11,7,10.7,7,10.3V6.8 C7,6.3,7.3,6,7.8,6z"
			}), o.a.createElement("path", {
				d: "M11.8,6h0.5C12.7,6,13,6.3,13,6.8v3.5c0,0.4-0.3,0.8-0.8,0.8h-0.5c-0.4,0-0.8-0.3-0.8-0.8V6.8 C11,6.3,11.3,6,11.8,6z"
			})))
		},
		"./src/reddit/icons/svgs/Grapple/index.m.less": function(e, t, n) {
			e.exports = {
				grapple: "_23XYJUJn_XitrV-LLkNyCQ",
				mIsDragging: "_1jCsYjqdUw4PYY-s3mGB47"
			}
		},
		"./src/reddit/icons/svgs/Grapple/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/Grapple/index.m.less"),
				a = n.n(i);
			t.a = e => o.a.createElement("svg", {
				className: Object(r.a)(e.className, a.a.grapple, {
					[a.a.mIsDragging]: e.isDragging
				}),
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, o.a.createElement("title", {
				id: `${e.title}-title`
			}, e.title), o.a.createElement("g", null, o.a.createElement("path", {
				d: "M8,2 C8.553,2 9,2.447 9,3 L9,5 C9,5.553 8.553,6 8,6 L6,6 C5.447,6 5,5.553 5,5 L5,3 C5,2.447 5.447,2 6,2 L8,2 Z M14,2 C14.553,2 15,2.447 15,3 L15,5 C15,5.553 14.553,6 14,6 L12,6 C11.447,6 11,5.553 11,5 L11,3 C11,2.447 11.447,2 12,2 L14,2 Z M8,8 C8.553,8 9,8.447 9,9 L9,11 C9,11.553 8.553,12 8,12 L6,12 C5.447,12 5,11.553 5,11 L5,9 C5,8.447 5.447,8 6,8 L8,8 Z M14,8 C14.553,8 15,8.447 15,9 L15,11 C15,11.553 14.553,12 14,12 L12,12 C11.447,12 11,11.553 11,11 L11,9 C11,8.447 11.447,8 12,8 L14,8 Z M8,14 C8.553,14 9,14.447 9,15 L9,17 C9,17.553 8.553,18 8,18 L6,18 C5.447,18 5,17.553 5,17 L5,15 C5,14.447 5.447,14 6,14 L8,14 Z M14,14 C14.553,14 15,14.447 15,15 L15,17 C15,17.553 14.553,18 14,18 L12,18 C11.447,18 11,17.553 11,17 L11,15 C11,14.447 11.447,14 12,14 L14,14 Z"
			})))
		},
		"./src/reddit/icons/svgs/Hamster1/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 53 67"
			}, o.a.createElement("g", {
				fill: "none",
				fillRule: "evenodd"
			}, o.a.createElement("path", {
				fill: "#000",
				d: "M36.17 15.7877c-2.1457-.6233-4.6272.5142-5.0853 2.419-.174.7268-.5168 1.0273-1.2283 1.124-1.5643.2126-2.9247.8707-4.0924 1.901-.807.7112-1.2403 1.523-1.2154 2.6702.0477 2.1067 1.0792 3.8318 2.0054 5.608.2256.432 2.0283-.631 1.111-.082-.616-1.9145-1.1994-3.6348-1.7152-5.3744-.2127-.72.0527-1.406.7364-1.754 1.2204-.6195 2.4954-1.1375 3.7456-1.702.5923-.2676.93-.057 1.27.465.821 1.2544 1.9995 2.04 3.5757 1.8642 1.6357-.1817 2.555-1.264 3.054-2.7215.6707-1.956-.2665-3.8677-2.1616-4.4176"
			}), o.a.createElement("path", {
				fill: "#FF8717",
				d: "M32.575 18.997c-.1866-1.1486.5913-2.0766 1.949-2.3235 1.4877-.2722 2.729.4466 2.9796 1.7235.2642 1.345-.7003 2.9457-1.9175 3.1832-1.341.2627-2.7447-.9416-3.011-2.5832"
			}), o.a.createElement("path", {
				fill: "#000",
				d: "M17.0857 23.965c-2.5846-.806-4.1367.6-4.4678 3.2556-.3653 2.9378.675 6.234 3.5116 7.1787 2.9598.9843 5.8344-1.5318 6.3822-4.5023.4535-2.4616-3.5227-5.3826-5.426-5.932-3.1034-.9685 1.507.4345 0 0M39.321 24.512c-2.184-2.2814-6.028.2842-7.4777 2.256-.521.7074-.9206 1.5057-1.1896 2.3475-.35 1.0897.269.94.3743 1.8643.1922 1.6742 2.1314 3.3578 3.7206 3.5912 4.7354.694 7.7125-6.7713 4.3803-10.2603.1294.1364.259.2717.3894.408-.0658-.0692-.1315-.1384-.1973-.2066-1.9745-2.0624.696.7283 0 0M18.9308 59.6326c-.1867-.0458-.3346.0093-.443.1056-.001 0-.001-.001-.002-.001-1.5598.099-3.8566.7662-4.6848 2.1695-.8887 1.507.7358 2.5096 2.148 2.674 1.553.1813 3.8715-.3148 4.4405-1.8975.439-1.2193-.0328-2.7012-1.4587-3.0506M34.37 60.348c-.242-.0358-.5174.043-.6267.2957-1.5118 3.4664 6.185 5.586 7.6074 2.4245 1.3572-3.016-4.6648-4.4187-6.9808-2.7203"
			}), o.a.createElement("path", {
				fill: "#000",
				d: "M39.9895 37.3797c-3.8707-9.353-16.7772-11.6802-23.5762-4.7352-3.177 3.245-4.373 8.2466-4.83 9.7576-1.4357 4.748-1.561 10.198.7932 14.6874 3.987 7.605 16.61 9.4605 23.792 5.505 9.1842-5.058 6.6638-18.3606 3.437-26.1424.2377.5734.4746 1.1468.7124 1.7202-.1096-.2645-.219-.528-.3285-.7925-2.1562-5.211 1.182 2.856 0 0"
			}), o.a.createElement("path", {
				fill: "#FF8717",
				d: "M26.4406 29.6162c3.5285 0 8.4696 2.1882 10.6613 4.9576 2.5828 3.2633 3.7284 8.3103 4.3175 12.3626.4945 3.4113-.4807 8.203-2.2755 11.186-2.1327 3.5455-6.732 4.5153-10.5422 4.4935-4.6918-.026-10.162-.5288-13.2412-4.577-2.77-3.643-3.234-8.4117-2.506-12.8188.401-2.4216 1.0284-5.207 1.9967-7.4706 2.105-4.9197 5.7597-8.1334 11.5893-8.1334"
			}), o.a.createElement("path", {
				fill: "#FFF",
				d: "M41.5915 49.6162c.03-.6952.008-1.3605-.044-2l.044 2zM37.4186 60.1975c-1.3365-.7743-2.342-2.1664-2.536-3.716-.0665-.533-.0396-1.074-.0128-1.61.0477-.9814.1004-1.9818.458-2.8933.4095-1.0428 1.1846-1.8868 1.9427-2.7034.46-.4967.9212-.9934 1.3823-1.49.7273-.7844 1.6783-1.6223 2.688-1.475-.4125-2.465-1.0336-5.1514-2.0422-7.567-1.0493 2.024-3.0208 3.9137-5.4086 2.871-.5147-.2242-.8774-.3756-1.3395-.7027-.8615-.7398-1.9138-.9498-3.157-.6288-.2702.3008-.5265.6128-.769.9368-.5157.521-1.1567.9812-1.9347.7632-1.7777-.5007-2.97-2.9346-5.1046-1.4002-.8675.624-1.9396 1.5637-3.0953 1.5082-2.0044-.096-3.3925-1.0983-4.2153-2.752-.776 2.0393-1.2024 4.4066-1.5432 6.479-.0407.2524-.0636.5098-.0974.7652.6232-.0353 1.2462-.013 1.8206.219.6776.2727 1.2182.8037 1.74 1.3225.8435.8388 1.708 1.706 2.187 2.8033.4382 1.0014.5227 2.123.5366 3.2183.015 1.0882-.0338 2.1754-.145 3.2566-.1313 1.284-.475 2.7296-1.571 3.3606 3.1707 2.359 7.553 2.7054 11.4153 2.7266 3.2216.0182 6.9976-.6774 9.4033-3.0224-.2027-.0868-.4104-.1585-.6022-.2695"
			}), o.a.createElement("path", {
				fill: "#FFF",
				d: "M19.3634 62.297c-.4735.8925-1.877 1.0785-2.832 1.1074-.5274.0154-1.058-.045-1.5395-.25-.894-.3822-.2403-1.1526.2322-1.5266.884-.7018 2.083-1.0513 3.2383-1.1217.114-.0072.2012-.0478.2752-.0993.846.2655.982 1.2193.6257 1.8904M39.1353 63.7074c-.7183.2857-1.607.0788-2.318-.0972-1.225-.3028-2.4647-1.2617-2.3147-2.656.0894-.0388.1756-.0948.2438-.1942 1.16-1.6788 4.4677-.7897 5.5096.6697.7194 1.008-.38 1.984-1.1207 2.2777"
			}), o.a.createElement("path", {
				fill: "#C18D42",
				d: "M17.2218 28.842c-.2698-1.599-.862-3.239-2.209-4.0722-1.519-.9397-1.5314 2.7022-1.4284 3.646.1773 1.6212.7036 4.1546 2.031 4.9962 1.0735.6814 1.7476-.4387 1.9068-1.9332.105-.9777-.1392-1.678-.3004-2.6368-.3327-1.9776.2232 1.3268 0 0"
			}), o.a.createElement("path", {
				fill: "#FF8717",
				d: "M15.5475 24.681c1.747.664 2.8352 2.0178 3.3196 3.9672.3962 1.5937.7234 3.6126-.1366 4.959 1.6953.081 3.8534-.3464 3.6123-2.602 1.339-1.9475-4.229-7.018-6.7952-6.3243M33.6698 32.7516c-.407-.451.364.404 0 0"
			}), o.a.createElement("path", {
				fill: "#C18D42",
				d: "M35.796 29.1142c-.1635.7146-.323 1.4594-.211 2.192.178 1.1545.9577 1.6425 1.872 1.0695 1.2238-.7655 1.577-2.3845 1.9186-3.693.1864-.7164.529-3.6248-.9526-2.9716-1.4423.6354-2.308 2.0174-2.627 3.4032-.238 1.0394.3698-1.6104 0 0"
			}), o.a.createElement("path", {
				fill: "#FF8717",
				d: "M35.3533 32.5596c-1.0047-1.2304-.5965-3.2887-.0174-4.64.6404-1.496 1.6748-2.6295 3.2115-3.037-.0695-.041-.136-.083-.2138-.114-1.9296-.775-4.9295 1.584-5.8667 3.0262-.6885 1.0606-2.0135 2.6206.8063 4.2594.7018.4085 1.3024.687 2.08.5054"
			}), o.a.createElement("path", {
				fill: "#000",
				d: "M32.8514 39.097c-.577.676-1.6076.6748-2.4273.0963-1.264-.8917-1.1062-3.3024.122-4.234.7017-.532 1.6705-.4205 2.1302.1645 1.53 1.946.6833 3.3772.1752 3.973"
			}), o.a.createElement("path", {
				fill: "#FFF",
				d: "M30.755 38.0938c-.2703-.432-.2692-1.2056-.039-1.8203.3575-.9478 1.322-.8296 1.6942.092.213.5263.1684 1.252-.0664 1.597-.7778 1.1484-1.3505.512-1.5888.1313"
			}), o.a.createElement("path", {
				fill: "#000",
				d: "M24.71 39.009c-.6662.8048-2.161.7863-3.1096.0826-1.5367-1.1425-1.2565-2.9377-.0257-3.8424.9816-.721 1.9472-.897 2.8605-.1542 1.636 1.3315 1.2372 2.751.2748 3.914"
			}), o.a.createElement("path", {
				fill: "#FFF",
				d: "M21.79 38.1136c-.322-.4-.3135-1.296-.0326-1.8656.4566-.922 1.1752-.7538 1.537-.016.2884.589.359 1.1686.0612 1.7166-.5324.982-1.0995.7425-1.5656.165"
			}), o.a.createElement("path", {
				fill: "#000",
				d: "M24.5598 40.2202c.8506 1.8878 3.3605 1.9104 3.9825-.235.0587-.206-.3954-.314-.471-.3215-1.1-.0954-2.188-.0502-3.278.1646-.637.1256.158.5627.459.5024.9212-.182 1.8433-.2474 2.7733-.167-.157-.1068-.314-.2136-.471-.3216-.14.4862-.3785.834-.7293 1.098-.5525.4157-1.0443-.1445-1.3017-.716-.147-.3266-1.094-.2915-.9638-.0038"
			}), o.a.createElement("path", {
				fill: "#000",
				d: "M22.5907 41.495c1.505 1.488 4.0743 1.4078 5.0584-.571-.3263-.06-.6527-.121-.98-.182-.2436 2.3982 3.9335 2.359 4.8708.653.1018-.186-.8275-.4596-.9802-.1822-.556 1.1467-1.526 1.0504-2.9105-.2888.029-.284-.8573-.428-.98-.182-.497 1.0008-1.7188 2.179-3.194.7215-.1837-.182-1.14-.221-.8843.0315M19.5653 46.516c-.473 6.7128 8.6924 4.2055 5.1774-.548-.6672-.903-.7844.151-.5202.7218.5274 1.1447.4853 2.1653-.5644 2.844-1.2192.7874-2.6945.0107-2.9834-1.216-.112-.5384-.144-1.082-.0936-1.6312.0237-.3453-.993-.4877-1.0157-.1705M29.6923 44.8475c-1.689 1.2247-1.5924 4.6386.8496 4.7633 1.13.0575 2.2874-.3435 3.0557-1.1673.3415-.3653 1.5518-2.4732.5793-2.709-1.2043-.293-1.2043 3.92-3.9756 3.001-.9725-.3227-.5812-1.1573-.5253-1.9048.0163-.218 1.4523-3.0258.0163-1.9832"
			})))
		},
		"./src/reddit/icons/svgs/Hamster2/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 53 67"
			}, o.a.createElement("g", {
				fill: "none",
				fillRule: "evenodd"
			}, o.a.createElement("path", {
				fill: "#FFF",
				d: "M9.5927 33.2517c.829 1.0475-1.9245 5.7044-2.2983 5.6247-7.91-1.6942-2.065-11.142 2.2983-5.6247z"
			}), o.a.createElement("path", {
				fill: "#000",
				d: "M7.2853 38.8738c-7.8952-1.69-2.0557-11.1393 2.297-5.625.8272 1.047-.4264.8297-.9997.3446-1.1508-.97-2.3416-1.2604-3.462-.3077-1.3005 1.107-.879 3.0184.443 3.748.585.3038 1.202.5194 1.8517.6446.4058.0876.243 1.275-.13 1.1955"
			}), o.a.createElement("path", {
				fill: "#FFF",
				d: "M50.0333 34.034c-.1167 1.5037-.772 2.978-1.8564 3.877-.4812.3997-3.1335 1.7-3.25.3792-.1457-1.6356-1.7525-4.3107-.3047-6.062 1.7012-2.06 5.6625-1.444 5.411 1.8057z"
			}), o.a.createElement("path", {
				fill: "#000",
				d: "M38.8415 2.2205c-2.7586-.8015-5.949.661-6.538 3.11-.2237.9345-.6645 1.321-1.5794 1.4452-2.011.2734-3.7602 1.1195-5.2615 2.444-1.0375.9146-1.5946 1.9584-1.5627 3.4333.0614 2.7088 1.3876 4.9268 2.5785 7.2106.29.5554 2.6078-.8114 1.4285-.1056-.7922-2.4615-1.5422-4.6733-2.2054-6.91-.2734-.9256.0677-1.8078.9468-2.2552 1.569-.7964 3.2084-1.4625 4.8157-2.188.7615-.3443 1.196-.0734 1.633.5976 1.0553 1.6128 2.5707 2.623 4.597 2.397 2.1033-.2337 3.2852-1.6254 3.9266-3.4992.8624-2.515-.3425-4.9727-2.779-5.6797"
			}), o.a.createElement("path", {
				fill: "#FF8717",
				d: "M33.9315 6.857c-.224-1.3784.7095-2.492 2.3388-2.7883 1.7852-.3266 3.275.536 3.5755 2.0682.317 1.614-.8404 3.5347-2.301 3.8197-1.6092.3153-3.2938-1.13-3.6133-3.0997"
			}), o.a.createElement("path", {
				fill: "#000",
				d: "M14.7982 12.4437c-3.36-1.0258-5.3778.7637-5.8082 4.1436-.4748 3.739.8778 7.9344 4.5652 9.1366 3.8478 1.2526 7.5847-1.9496 8.297-5.7303.5894-3.133-4.5797-6.8506-7.054-7.55-4.0343-1.2325 1.959.5532 0 0M43.3042 13.0588c-2.8393-2.6964-7.8367.3357-9.7212 2.666-.6773.836-1.1967 1.7795-1.5465 2.7743-.455 1.288.3498 1.111.4866 2.2034.25 1.9786 2.771 3.9682 4.837 4.244 6.156.8204 10.0262-8.0023 5.6943-12.1256.1683.161.3367.321.5063.482-.0855-.0817-.171-.1634-.2564-.244-2.567-2.4376.9047.8605 0 0M16.2644 58.021c-.2208-.059-.3958.012-.5237.136-.0012 0-.0012-.0012-.0024-.0012-1.8447.1275-4.5607.9865-5.54 2.7936-1.051 1.9405.87 3.2314 2.5398 3.4432 1.8366.2334 4.5785-.4055 5.2513-2.4435.519-1.57-.0387-3.478-1.725-3.928M35.8236 58.9218c-.272-.045-.582.0543-.705.3726-1.7005 4.3674 6.9575 7.0378 8.5576 3.0546 1.5267-3.7998-5.2473-5.567-7.8526-3.4272"
			}), o.a.createElement("path", {
				fill: "#000",
				d: "M43.621 29.1977c-4.9592-11.951-21.4957-14.9246-30.207-6.0505-4.0707 4.1463-5.603 10.5374-6.1882 12.468-1.8397 6.067-2.0003 13.0306 1.016 18.767 5.1085 9.718 21.2816 12.0886 30.4837 7.0343 11.767-6.463 8.538-23.4607 4.4034-33.4042.3046.7327.608 1.4654.9127 2.198-.1402-.338-.2804-.6746-.4207-1.0126-2.7626-6.6584 1.5146 3.6495 0 0"
			}), o.a.createElement("path", {
				fill: "#FF8717",
				d: "M25.8506 19.7317c4.5594 0 10.944 2.8204 13.7762 6.3902 3.3375 4.2063 4.8178 10.7118 5.579 15.935.639 4.3973-.6212 10.5736-2.9403 14.4188-2.7558 4.57-8.6988 5.8202-13.6222 5.792-6.0627-.0332-13.131-.6814-17.1098-5.8996-3.5793-4.6956-4.179-10.8425-3.2382-16.523.518-3.1216 1.329-6.7118 2.58-9.6297 2.7202-6.3415 7.4425-10.4838 14.9753-10.4838"
			}), o.a.createElement("path", {
				fill: "#FFF",
				d: "M45.9425 45c.03-.6952.008-1.3605-.044-2l.044 2zM39.8434 58.144c-1.7227-.9698-3.0188-2.7136-3.2686-4.6547-.0858-.6677-.0512-1.3455-.0166-2.017.0615-1.2292.1293-2.4824.5904-3.6243.5277-1.3063 1.5267-2.3634 2.504-3.3865.593-.622 1.1872-1.2443 1.7815-1.8665.9376-.9825 2.1633-2.032 3.4645-1.8475-.5315-3.088-1.332-6.453-2.632-9.4792-1.3524 2.5355-3.8935 4.9027-6.971 3.5964-.6636-.2807-1.131-.4704-1.7266-.88-1.1105-.927-2.467-1.19-4.069-.788-.3485.377-.679.7677-.9914 1.1736-.6647.6525-1.4908 1.2292-2.4937.956-2.2913-.6272-3.8283-3.676-6.5793-1.754-1.1182.7816-2.5 1.959-3.9896 1.8893-2.5832-.12-4.3725-1.3758-5.433-3.4472-1.0002 2.5544-1.5497 5.5198-1.989 8.116-.0525.316-.082.6386-.1255.9585.803-.0443 1.606-.0165 2.3464.2743.8734.3415 1.57 1.0066 2.2425 1.6566 1.0874 1.0508 2.2016 2.137 2.819 3.5116.5648 1.2545.6737 2.6594.6916 4.0315.0193 1.3633-.0435 2.7252-.187 4.0796-.169 1.6085-.612 3.4193-2.0248 4.2097 4.087 2.9553 9.735 3.389 14.7134 3.4156 4.1523.0226 9.0192-.8486 12.12-3.7862-.2614-.1088-.529-.1986-.7762-.3377"
			}), o.a.createElement("path", {
				fill: "#FFF",
				d: "M16.6775 61.5205c-.5682 1.19-2.2523 1.438-3.3982 1.4765-.633.0205-1.2697-.0602-1.8475-.3336-1.0727-.5094-.2883-1.5367.2787-2.0352 1.0607-.9357 2.4997-1.4018 3.886-1.4957.137-.0097.2414-.064.3303-.1325 1.015.354 1.1784 1.6258.7507 2.5205M41.3178 62.8585c-.838.2857-1.875.079-2.7043-.097-1.429-.303-2.8756-1.2618-2.7005-2.656.1043-.039.2048-.095.2843-.1944 1.3534-1.6787 5.2124-.7896 6.428.6698.8393 1.008-.4433 1.984-1.3075 2.2777"
			}), o.a.createElement("path", {
				fill: "#C18D42",
				d: "M14.4914 18.1648c-.3373-1.9542-1.0774-3.9587-2.7615-4.977-1.8987-1.1487-1.9142 3.3025-1.7855 4.4562.2217 1.9814.8796 5.0777 2.5387 6.1064 1.342.8328 2.1846-.5362 2.3836-2.363.131-1.1948-.174-2.0508-.3754-3.2226-.416-2.417.279 1.6217 0 0"
			}), o.a.createElement("path", {
				fill: "#FF8717",
				d: "M11.8985 13.079c1.9966.812 3.2402 2.4664 3.7938 4.849.4527 1.9478.8267 4.4154-.1562 6.061 1.9376.099 4.404-.4234 4.1285-3.1804 1.5303-2.38-4.8333-8.5774-7.766-7.7295M35.0207 23.1353c-.407-.451.364.404 0 0"
			}), o.a.createElement("path", {
				fill: "#C18D42",
				d: "M38.2093 19.4974c-.2045.9188-.4038 1.8764-.264 2.8182.2225 1.4844 1.197 2.112 2.34 1.3752 1.5298-.9843 1.9712-3.066 2.3983-4.748.233-.9213.6613-4.6607-1.1908-3.8208-1.803.8168-2.885 2.5937-3.2835 4.3754-.2977 1.3363.462-2.0706 0 0"
			}), o.a.createElement("path", {
				fill: "#FF8717",
				d: "M37.7916 23.9292c-1.2917-1.538-.767-4.111-.0223-5.8.8235-1.87 2.1534-3.287 4.1292-3.7963-.0894-.0513-.175-.1037-.275-.1424-2.481-.9687-6.3378 1.98-7.5428 3.7826-.8853 1.3257-2.5888 3.2757 1.0366 5.3243.9024.5106 1.6746.859 2.6743.6317"
			}), o.a.createElement("path", {
				fill: "#000",
				d: "M34.0283 31.3767c-.721.8113-2.0094.81-3.034.1158-1.58-1.07-1.383-3.963.1523-5.081.877-.6384 2.088-.5045 2.6627.1976 1.9127 2.3352.854 4.0527.219 4.7677"
			}), o.a.createElement("path", {
				fill: "#FFF",
				d: "M31.106 29.4776c-.2703-.432-.2692-1.2056-.039-1.8204.3574-.9477 1.322-.8296 1.6942.092.213.5264.1684 1.252-.0664 1.597-.7778 1.1484-1.3506.5122-1.5888.1314"
			}), o.a.createElement("path", {
				fill: "#000",
				d: "M23.8934 30.2714c-.7994.9656-2.5933.9435-3.7315.099-1.844-1.371-1.508-3.5252-.031-4.6108 1.178-.8653 2.3368-1.0765 3.4327-.185 1.9633 1.5977 1.4846 3.301.3297 4.6968"
			}), o.a.createElement("path", {
				fill: "#FFF",
				d: "M20.141 29.4974c-.322-.4-.3135-1.2962-.0326-1.8657.4566-.922 1.1752-.7537 1.537-.0158.2884.5886.359 1.1683.061 1.7164-.5322.982-1.0993.7424-1.5654.165"
			}), o.a.createElement("path", {
				fill: "#000",
				d: "M23.9138 33.604c1.0632 1.8878 4.2007 1.9104 4.9782-.235.0733-.206-.4943-.314-.5887-.3215-1.375-.0955-2.735-.0502-4.0976.1646-.796.1257.1975.5628.574.5025 1.1512-.1822 2.304-.2475 3.4664-.167-.196-.1068-.3923-.2136-.5886-.3216-.175.486-.4732.834-.9117 1.0977-.6905.4157-1.3054-.1445-1.627-.716-.184-.3266-1.3676-.2914-1.205-.0038"
			}), o.a.createElement("path", {
				fill: "#000",
				d: "M20.9512 35.318c1.8397 2.232 4.9797 2.112 6.1826-.8564-.399-.09-.798-.1816-1.198-.273-.2976 3.5973 4.8077 3.5387 5.9532.9794.1245-.279-1.0113-.6892-1.198-.273-.6794 1.72-1.8652 1.5755-3.5572-.4334.0354-.426-1.048-.642-1.198-.273-.6075 1.5012-2.1007 3.2685-3.9037 1.0823-.2244-.2732-1.393-.3318-1.0808.047M44.4978 32.213c1.7332-2.056 5.7836-1.429 5.5353 1.821-.115 1.5038-.7808 2.977-1.8867 3.8733-.4907.3984-3.198 1.692-3.3206.3704-.1534-1.6365 4.8643-1.0204 4.2203-4.8223-.2264-1.3343-1.284-.9385-2.1835-.974-.262-.0102-3.8398 1.4795-2.3647-.2684"
			})))
		},
		"./src/reddit/icons/svgs/Help/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 16 16",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("path", {
				fill: "inherit",
				d: "M8.622 10.616c.078.08.14.175.183.28.044.105.07.218.07.332 0 .237-.087.456-.253.62-.167.168-.385.255-.622.255-.236 0-.455-.087-.62-.254-.167-.166-.255-.385-.255-.622 0-.114.027-.227.07-.332.044-.105.105-.2.184-.28.087-.088.174-.15.288-.193.324-.13.71-.052.954.193zm-.205-6.242c1.595 0 2.466.807 2.466 1.92 0 .976-.556 1.448-1.238 1.816-.615.317-.83.518-.904.898 0 .004-.034.207-.036.21-.034.126-.087.244-.18.336-.14.14-.323.21-.524.21-.097 0-.192-.017-.29-.052-.087-.035-.165-.088-.235-.158-.14-.14-.22-.333-.22-.533 0-.11.02-.188.074-.348.16-.472.55-.896 1.056-1.17.577-.327.84-.558.84-1.07 0-.42-.357-.715-.987-.715-.496 0-.996.218-1.39.52-.26.2-.62.202-.858-.02l-.05-.05c-.313-.29-.27-.787.075-1.04.603-.444 1.394-.753 2.4-.753zM8 13.25c-2.895 0-5.25-2.355-5.25-5.25S5.105 2.75 8 2.75 13.25 5.105 13.25 8 10.895 13.25 8 13.25M8 1C4.14 1 1 4.14 1 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7"
			}))
		},
		"./src/reddit/icons/svgs/Info/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				style: e.style,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, o.a.createElement("g", null, o.a.createElement("path", {
				d: "M10,8.5 C10.553,8.5 11,8.948 11,9.5 L11,13.5 C11,14.052 10.553,14.5 10,14.5 C9.447,14.5 9,14.052 9,13.5 L9,9.5 C9,8.948 9.447,8.5 10,8.5 Z M10.7002,5.79 C10.8012,5.89 10.8702,6 10.9212,6.12 C10.9712,6.24 11.0002,6.37 11.0002,6.5 C11.0002,6.57 10.9902,6.63 10.9802,6.7 C10.9712,6.76 10.9502,6.82 10.9212,6.88 C10.9002,6.94 10.8702,7 10.8302,7.05 C10.7902,7.11 10.7502,7.16 10.7002,7.21 C10.6602,7.25 10.6102,7.29 10.5512,7.33 C10.5002,7.37 10.4402,7.4 10.3812,7.42 C10.3202,7.45 10.2612,7.47 10.1902,7.48 C10.1312,7.49 10.0602,7.5 10.0002,7.5 C9.7402,7.5 9.4802,7.39 9.2902,7.21 C9.1102,7.02 9.0002,6.77 9.0002,6.5 C9.0002,6.37 9.0302,6.24 9.0802,6.12 C9.1312,5.99 9.2002,5.89 9.2902,5.79 C9.5202,5.56 9.8702,5.46 10.1902,5.52 C10.2612,5.53 10.3202,5.55 10.3812,5.58 C10.4402,5.6 10.5002,5.63 10.5512,5.67 C10.6102,5.71 10.6602,5.75 10.7002,5.79 Z M10,16 C6.691,16 4,13.309 4,10 C4,6.691 6.691,4 10,4 C13.309,4 16,6.691 16,10 C16,13.309 13.309,16 10,16 M10,2 C5.589,2 2,5.589 2,10 C2,14.411 5.589,18 10,18 C14.411,18 18,14.411 18,10 C18,5.589 14.411,2 10,2"
			})))
		},
		"./src/reddit/icons/svgs/Link/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", null, o.a.createElement("path", {
				fill: "inherit",
				d: "M18.4773727,1.51993937 C19.4600354,2.50135191 20.0013751,3.80656808 20.0013751,5.19554812 C20.0013751,6.58577837 19.4600354,7.89099453 18.4773727,8.87240707 C17.9885417,9.35998782 17.1984109,9.35998782 16.7095799,8.87240707 C16.2207489,8.38357611 16.2207489,7.59094484 16.7095799,7.10461429 C17.2196644,6.59452982 17.500961,5.91691759 17.500961,5.19554812 C17.500961,4.47542886 17.2196644,3.79781663 16.7095799,3.28773215 C15.6569056,2.23755822 13.9453721,2.23755822 12.8926978,3.28773215 L8.62324066,7.55843946 C7.57181653,8.6111138 7.57181653,10.3226473 8.62324066,11.3753216 C9.11207162,11.8629024 9.11207162,12.6555336 8.62324066,13.1431144 C8.37945029,13.3869048 8.05939728,13.509425 7.73934427,13.509425 C7.41929127,13.509425 7.09923826,13.3869048 6.85544788,13.1431144 C4.82886225,11.1152785 4.82886225,7.81723232 6.85544788,5.79064668 L11.124905,1.51993937 C13.1502404,-0.505396058 16.4495368,-0.507896472 18.4773727,1.51993937 Z M11.3753215,6.8540728 C11.8641524,6.36524184 12.6542833,6.36524184 13.1431142,6.8540728 C15.1696999,8.88065844 15.1696999,12.1799549 13.1431142,14.2065405 L8.87240693,18.4772478 C7.89099439,19.4586603 6.58452801,20 5.19679818,20 C3.80781814,20 2.50135177,19.4586603 1.51993923,18.4772478 C-0.50664641,16.4506622 -0.50664641,13.1513657 1.51993923,11.1247801 C2.00877019,10.6359491 2.80015125,10.6359491 3.28773201,11.1247801 C3.77656297,11.6136111 3.77656297,12.4037419 3.28773201,12.8925729 C2.23505767,13.9452472 2.23505767,15.6567807 3.28773201,16.709455 C4.34040635,17.7621294 6.05193981,17.7621294 7.10461415,16.709455 L11.3753215,12.4387477 C12.4279958,11.3860734 12.4279958,9.67453992 11.3753215,8.62186558 C10.8864905,8.13303462 10.8864905,7.34290376 11.3753215,6.8540728 Z"
			})))
		},
		"./src/reddit/icons/svgs/Lock/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 0 40 40",
				xmlns: "http://www.w3.org/2000/svg",
				fill: e.fill
			}, o.a.createElement("g", null, o.a.createElement("rect", {
				x: "7.5",
				y: "12.5",
				width: "0",
				height: "0"
			}), o.a.createElement("path", {
				fill: "inherit",
				d: "M32.5,17.5v-2.6c0-6.8-5.6-12.4-12.4-12.4h-0.2c-6.8,0-12.4,5.6-12.4,12.4v2.6C6.1,17.5,5,18.6,5,20v10c0,5.5,4.5,10,10,10h10c5.5,0,10-4.5,10-10V20C35,18.6,33.9,17.5,32.5,17.5z M12.5,17.5v-2.6c0-4.1,3.3-7.4,7.4-7.4h0.2c4.1,0,7.4,3.3,7.4,7.4v2.6H12.5z"
			})))
		},
		"./src/reddit/icons/svgs/MarkdownMode/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 208 128"
			}, o.a.createElement("rect", {
				width: "198",
				height: "118",
				x: "5",
				y: "5",
				ry: "10",
				stroke: "currentColor",
				strokeWidth: "10",
				fill: "none"
			}), o.a.createElement("path", {
				d: "M30 98v-68h20l20 25 20-25h20v68h-20v-39l-20 25-20-25v39zM155 98l-30-33h20v-35h20v35h20z"
			}))
		},
		"./src/reddit/icons/svgs/Media/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("path", {
				fill: "inherit",
				fillRule: "evenodd",
				d: "m8.986223,16.927949l2.240493,-3.024991l-3.521864,-5.376734c-0.102125,-0.156 -0.274999,-0.251499 -0.461249,-0.253749c-0.158375,-0.01 -0.362749,0.0875 -0.468249,0.241249l-5.239359,7.532977c-0.12,0.170624 -0.1335,0.394124 -0.037,0.579248c0.0975,0.185249 0.287499,0.301999 0.497498,0.301999l6.989729,0zm8.513724,3.071991l-14.999954,0c-1.378746,0 -2.499992,-1.121247 -2.499992,-2.499992l0,-14.999954c0,-1.378746 1.121247,-2.499992 2.499992,-2.499992l14.999954,0c1.378746,0 2.499992,1.121247 2.499992,2.499992l0,14.999954c0,1.378746 -1.121247,2.499992 -2.499992,2.499992zm0.803498,-3.071991c0.221249,0 0.420999,-0.129125 0.511873,-0.331249c0.091,-0.201999 0.05375,-0.437749 -0.092,-0.602748l-4.238862,-4.778985c-0.11125,-0.12575 -0.257124,-0.186249 -0.444499,-0.188749c-0.169624,0.008 -0.325624,0.091 -0.425499,0.226874l-3.540739,4.778985c-0.126875,0.170749 -0.145,0.398749 -0.0495,0.587123c0.094375,0.189749 0.288749,0.308749 0.500748,0.308749l7.778726,0l-0.00025,0zm-2.982116,-11.404215c0,-1.173746 -0.952497,-2.124994 -2.124994,-2.124994c-1.174996,0 -2.124994,0.951247 -2.124994,2.124994c0,1.172496 0.949997,2.123744 2.124994,2.123744c1.172496,0 2.124994,-0.951247 2.124994,-2.123744z"
			}))
		},
		"./src/reddit/icons/svgs/Moderate/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/constants/colors.ts");
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e.desc && o.a.createElement("desc", null, e.desc), o.a.createElement("path", {
				d: "M1.88,3.32V9a11.53,11.53,0,0,0,8,11L10,20l.08,0a11.53,11.53,0,0,0,8-11V3.32A11.57,11.57,0,0,1,10,0,11.57,11.57,0,0,1,1.88,3.32"
			}), o.a.createElement("circle", {
				cx: "18",
				cy: "3",
				r: "5",
				fill: e.isUnread ? "white" : "none"
			}), o.a.createElement("circle", {
				cx: "18",
				cy: "3",
				r: "4",
				fill: e.isUnread ? r.b.orangered : "none"
			}))
		},
		"./src/reddit/icons/svgs/OutboundLink/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, o.a.createElement("path", {
				d: "M16 10.77a1 1 0 0 0-1 1V14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h2.23a1 1 0 0 0 0-2H6a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-2.23a1 1 0 0 0-1-1z"
			}), o.a.createElement("path", {
				d: "M17.91 2.62A1 1 0 0 0 17 2h-4a1 1 0 0 0 0 2h1.59L9.38 9.19a1 1 0 1 0 1.41 1.41L16 5.41V7a1 1 0 0 0 2 0V3a1 1 0 0 0-.09-.38z"
			}))
		},
		"./src/reddit/icons/svgs/Pencil/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("title", {
				id: `${e.title}-title`
			}, e.title), o.a.createElement("g", null, o.a.createElement("path", {
				fill: "inherit",
				d: "M15.75,7.834625 L12,4.084625 L12.808,3.276625 C13.8435,2.241125 15.5225,2.241125 16.558,3.276625 C17.5935,4.312125 17.5935,5.991125 16.558,7.026625 L15.75,7.834625 Z M11.366,5 L15.116,8.75 L7.25,16.616 L3.5,12.866 L11.366,5 Z M2.5035,13.5 L6.1125,17.109 L1,18.6125 L2.5035,13.5 Z"
			})))
		},
		"./src/reddit/icons/svgs/Plus/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				version: "1.1"
			}, o.a.createElement("g", {
				stroke: "none"
			}, o.a.createElement("g", {
				transform: "translate(-34.000000, -136.000000)",
				fill: "inherit"
			}, o.a.createElement("path", {
				d: "M45.2,147.2 L48.8,147.2 C49.46272,147.2 50,146.66272 50,146 C50,145.33728 49.46272,144.8 48.8,144.8 L45.2,144.8 L45.2,141.2 C45.2,140.53728 44.66272,140 44,140 C43.33728,140 42.8,140.53728 42.8,141.2 L42.8,144.8 L39.2,144.8 C38.53728,144.8 38,145.33728 38,146 C38,146.66272 38.53728,147.2 39.2,147.2 L42.8,147.2 L42.8,150.8 C42.8,151.46272 43.33728,152 44,152 C44.66272,152 45.2,151.46272 45.2,150.8 L45.2,147.2 Z"
			}))))
		},
		"./src/reddit/icons/svgs/Poll/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", null, o.a.createElement("path", {
				d: "M2.1952,13.9279 C2.9452,13.9279 3.5382,14.3119 3.8382,14.8939 L2.8962,15.3249 C2.7702,15.0489 2.4882,14.8519 2.1232,14.8519 C1.6192,14.8519 1.2232,15.3189 1.2232,15.9489 C1.2232,16.5849 1.6252,17.0409 2.1172,17.0409 C2.4882,17.0409 2.7772,16.8369 2.9262,16.5369 L3.9162,16.8909 C3.6102,17.5559 2.9802,17.9639 2.1952,17.9639 C1.0492,17.9639 0.1202,17.0759 0.1202,15.9489 C0.1202,14.8279 1.0492,13.9279 2.1952,13.9279 Z M11.5004,14.5 C12.3294,14.5 13.0004,15.171 13.0004,16 C13.0004,16.829 12.3294,17.5 11.5004,17.5 L6.5004,17.5 C5.6714,17.5 5.0004,16.829 5.0004,16 C5.0004,15.171 5.6714,14.5 6.5004,14.5 L11.5004,14.5 Z M1.8953,8.0003 C2.8063,8.0003 3.5503,8.2643 3.5503,9.0313 C3.5503,9.3433 3.3523,9.5893 3.0763,9.7813 C3.4483,9.9553 3.7243,10.2253 3.7243,10.6623 C3.7243,11.5179667 2.93757778,11.8598556 2.22929983,11.8952023 L2.1053,11.8983 L0.3723,11.8983 L0.3723,8.0003 L1.8953,8.0003 Z M18.5004,8.5 C19.3294,8.5 20.0004,9.171 20.0004,10 C20.0004,10.829 19.3294,11.5 18.5004,11.5 L6.5004,11.5 C5.6714,11.5 5.0004,10.829 5.0004,10 C5.0004,9.171 5.6714,8.5 6.5004,8.5 L18.5004,8.5 Z M1.8623,8.8693 L1.4753,8.8693 L1.4753,11.0283 L1.9843,11.0283 C2.3013,11.0283 2.5853,10.7603 2.5853,10.4623 C2.5853,10.0713909 2.27786198,9.92097769 2.01460128,9.89686048 L1.9373,9.8933 L1.9373,9.7853 C2.0923,9.7853 2.4353,9.6783 2.4353,9.3333 C2.4353,8.9793 2.1923,8.8693 1.8623,8.8693 Z M2.783,1.9997 L4.096,5.8977 L2.963,5.8977 C2.963,5.8977 2.147,3.3737 2.063,3.0137 L2.063,3.0137 L2.039,3.0137 C1.955,3.3737 1.127,5.8977 1.127,5.8977 L1.127,5.8977 L-2.25597319e-13,5.8977 L1.319,1.9997 L2.783,1.9997 Z M15.5004,2.5 C16.3294,2.5 17.0004,3.171 17.0004,4 C17.0004,4.829 16.3294,5.5 15.5004,5.5 L6.5004,5.5 C5.6714,5.5 5.0004,4.829 5.0004,4 C5.0004,3.171 5.6714,2.5 6.5004,2.5 L15.5004,2.5 Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/RadioOff/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_11Rht_b1e-kmk12gkz7Lug"
			}
		},
		"./src/reddit/icons/svgs/RadioOff/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/RadioOff/index.m.less"),
				a = n.n(i);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => o.a.createElement("svg", c({}, e, {
				className: Object(r.a)(a.a.icon, e.className),
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}), o.a.createElement("g", {
				fill: "inherit"
			}, o.a.createElement("path", {
				d: "M10,1.66666667 C5.39762708,1.66666667 1.66666667,5.39762708 1.66666667,10 C1.66666667,14.6023729 5.39762708,18.3333333 10,18.3333333 C14.6023729,18.3333333 18.3333333,14.6023729 18.3333333,10 C18.3333333,5.39762708 14.6023729,1.66666667 10,1.66666667 Z M10,0 C15.5228475,-1.01453063e-15 20,4.4771525 20,10 C20,15.5228475 15.5228475,20 10,20 C4.4771525,20 6.76353751e-16,15.5228475 0,10 C-6.76353751e-16,4.4771525 4.4771525,1.01453063e-15 10,0 Z"
			})))
		},
		"./src/reddit/icons/svgs/RadioOn/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => o.a.createElement("svg", r({}, e, {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}), o.a.createElement("g", {
				fill: "inherit"
			}, o.a.createElement("path", {
				d: "M10,6.66666667 C8.15905083,6.66666667 6.66666667,8.15905083 6.66666667,10 C6.66666667,11.8409492 8.15905083,13.3333333 10,13.3333333 C11.8409492,13.3333333 13.3333333,11.8409492 13.3333333,10 C13.3333333,8.15905083 11.8409492,6.66666667 10,6.66666667 Z M10,0 C15.5228475,-1.01453063e-15 20,4.4771525 20,10 C20,15.5228475 15.5228475,20 10,20 C4.4771525,20 6.76353751e-16,15.5228475 0,10 C-6.76353751e-16,4.4771525 4.4771525,1.01453063e-15 10,0 Z"
			})))
		},
		"./src/reddit/icons/svgs/Replay/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => o.a.createElement("svg", r({}, e, {
				viewBox: "13 12 23 23",
				xmlns: "http://www.w3.org/2000/svg"
			}), o.a.createElement("g", null, o.a.createElement("path", {
				d: "M32.5 23.3c-.7 0-1.2.5-1.2 1.2 0 4-3.2 7.2-7.2 7.2s-7.2-3.2-7.2-7.2c0-3.6 2.7-6.6 6.2-7.1v1.7c0 .2.1.4.3.5.1 0 .2.1.3.1.1 0 .3 0 .4-.1l3.6-3c.1-.1.2-.3.2-.5s-.1-.3-.2-.5l-3.7-3c-.2-.1-.4-.2-.6-.1-.2.1-.4.3-.4.6V15c-4.8.5-8.6 4.6-8.6 9.5 0 5.3 4.3 9.6 9.6 9.6s9.6-4.3 9.6-9.6c.1-.7-.5-1.2-1.1-1.2",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/Search/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("path", {
				d: "M15.59,13.91l2.78,2.69a1.25,1.25,0,1,1-1.74,1.8l-2.82-2.73a8,8,0,1,1,1.78-1.76ZM14.64,9.2A5.45,5.45,0,1,0,9.2,14.64,5.45,5.45,0,0,0,14.64,9.2Z"
			}))
		},
		"./src/reddit/icons/svgs/SnooPosting/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 45 43"
			}, o.a.createElement("g", {
				fill: "none",
				fillRule: "evenodd"
			}, o.a.createElement("g", {
				fill: "#0DD3BB",
				transform: "translate(0 4)"
			}, o.a.createElement("ellipse", {
				cx: "25.492",
				cy: "22.2631",
				transform: "rotate(5 25.492 22.263)",
				rx: "17.6396",
				ry: "13.9883"
			}), o.a.createElement("ellipse", {
				cx: "19.3519",
				cy: "17.9699",
				transform: "rotate(5 19.352 17.97)",
				rx: "14.7297",
				ry: "16.0688"
			}), o.a.createElement("ellipse", {
				cx: "14.0251",
				cy: "27.7862",
				transform: "rotate(5 14.025 27.786)",
				rx: "8.4751",
				ry: "8.9243"
			}), o.a.createElement("ellipse", {
				cx: "11.808",
				cy: "17.4531",
				transform: "rotate(5 11.808 17.453)",
				rx: "10.7695",
				ry: "10.8575"
			}), o.a.createElement("ellipse", {
				cx: "12.1168",
				cy: "22.4429",
				transform: "rotate(5 12.117 22.443)",
				rx: "8.4751",
				ry: "8.9243"
			})), o.a.createElement("path", {
				fill: "#FFF",
				d: "M35.6875 31.5625c-1.3275 1.8696-6.7017 5.0483-8.7188 6.0313-2.0174.983-13.478 2.1465-15.625-.6876-1.5625-2.0624-.9687-4.625 1-6.1562C9.6563 29.2812 8.125 27.8437 7 24.9062c-.0872-.2277-1.1015-1.763-.875-1.7812l.9375-4.0313c.8158-2.9308 4.2118-5.1638 6.7992-6.5715 2.3198-1.2615 4.9067-1.934 7.5113-2.1714 2.1052-.192 4.259-.101 6.277.554 2.0182.6552 4.2956 1.063 5.5063 2.8765 0 0 1.5532 3.6305 1.6736 5.5487.1204 1.9177-2.0402 6.1206-2.0402 6.1206"
			}), o.a.createElement("path", {
				fill: "#FFF",
				d: "M31.5665 34.5708c.6293 1.944.9 4.0143.794 6.0635 0 0-.473 1.3654-6.7204 1.3654-6.2478 0-7.6077-.7104-7.6077-.7104.047-1.224.0518-2.4493.014-3.6732-.0028-.097.0414-.2356.13-.2062l-.1555-7.319 12.5354-2.0634c.4433.252.8525.5696 1.211.9412l-.2007 5.6022z"
			}), o.a.createElement("path", {
				fill: "#FF0",
				d: "M34.0514 21.4676c-.3642.8707-.5738 1.8017-.8143 2.7188-.601 2.29-1.4044 4.5218-2.3967 6.658.1578.0357.3286.0014.4624-.0927.072.7567 1.0046 1.1686 1.678.8836.6734-.2846 1.071-1.0334 1.2235-1.777.0223-.1084.0407-.2198.0277-.33-.0202-.1737-.114-.3265-.1996-.477-.6817-1.2056-.9025-2.6877-.6033-4.0528.099-.4518.2715-.9186.6318-1.1878.2046-.1536.452-.2293.6975-.2872.6156-.146 1.2512-.198 1.8812-.154l.33-1.1467c.054-.1864.108-.3773.0993-.572-.0212-.4554-.393-.8263-.8058-.9727-.412-.1463-.8604-.115-1.2947-.0823"
			}), o.a.createElement("path", {
				fill: "#F15A24",
				d: "M12.322 21.7194c.061.3407.127.693.3168.977.3034.4517.85.6324 1.3573.785.3797.1136.7785.2284 1.165.141.2643-.0598.5012-.2104.725-.3697.61-.433 1.1792-.9615 1.5326-1.6395.3962-.7593.4926-1.684.2625-2.5148-.0912-.3294-.2458-.6615-.524-.843-.2292-.1494-.5564-.2205-.6293-.4927-.1057-.3946-1.938-.4537-2.25-.4202-.474.051-.939.1728-1.2797.5403-.9068.9784-.8953 2.613-.676 3.8366M24.194 19.0418c.0644.3482.1334.708.3344.998.3193.462.8963.6468 1.431.8023.4005.1164.8212.234 1.2286.1447.2793-.0614.529-.2154.7647-.3776.644-.443 1.244-.983 1.617-1.6756.4174-.776.5195-1.7205.2768-2.5694-.0964-.3366-.2596-.6762-.5526-.8614-.242-.1528-.587-.2255-.664-.5037-.1117-.4033-2.0443-.464-2.3736-.4297-.4998.052-.9902.1766-1.3498.5523-.9564 1-.9442 2.67-.7126 3.9202"
			}), o.a.createElement("path", {
				fill: "#CCC",
				d: "M35.9408 20.9708c.222.0064.4462.0053.6533.066.4068.1196.9188.5786.945-.1845.007-.1902.012-.3904-.0708-.56-.122-.251-.5983-.9602-.824-1.087-.1087-.061-.236-.0694-.359-.073-.3063-.0092-.613.0014-.9182.0315-.9906.0986-.7374 1.4513.01 1.725.177.0647.3693.0764.5638.082"
			}), o.a.createElement("path", {
				fill: "#FF7BAC",
				d: "M37.8215 19.8532c-.0306.0467-.0694.0968-.123.099-.0946.0034-.1258-.128-.1816-.2085-.0644-.0938-.1824-.1258-.29-.1506-.4784-.112-1.163-.1415-1.5974-.3738-.4688-.251-.4095-.3117-.2434-.8975.178-.6268.4606-1.3722 1.071-1.6617 2.0532-.9728 2.1506 1.9814 1.3643 3.1932"
			}), o.a.createElement("path", {
				fill: "#FF0",
				d: "M30.808 32.959c.0077.0694.0343.1556.1004.1593-.0834-.0335-.1158.1122-.095.203.429.0508.8583.1012 1.2877.152.263.0313.5674.0482.752-.151.1304-.141.16-.3512.1825-.5462.032-.274.064-.548.0964-.822.0082-.0724.0135-.1552-.0336-.2086-.034-.0388-.087-.051-.137-.0588-.219-.0327-.446-.0064-.6532.075-.6713.2642-.6634-.6747-1.1966-.4688-.4516.1747-.346 1.279-.3035 1.6663"
			}), o.a.createElement("path", {
				fill: "#FFF",
				d: "M31.9858 34.3613c.3538.146.738.196 1.1182.2014 2.1213.03 4.1668-1.396 5.0646-3.4086.8978-2.0117.661-4.4994-.4998-6.3584-.514-.8238-1.3235-1.5857-2.2608-1.5168-.594.0433-1.1344.429-1.4745.9404-.3405.5112-.499 1.1347-.552 1.7558-.1233 1.4442.3143 2.9324 1.1923 4.053"
			}), o.a.createElement("path", {
				fill: "#F7E1CB",
				d: "M11.2195 30.4984l9.4083-2.7606 1.318 7.9058-7.4904 2.7607"
			}), o.a.createElement("path", {
				fill: "#FFF",
				d: "M12.7516 37.7683c.2136.2304.5864.1393.8525-.0207 1.096-.6588 1.5454-2.1516 1.337-3.4564-.108-.6758-.3805-1.3463-.877-1.792-.4966-.446-1.243-.6212-1.827-.3125-.402.212-.682.6167-.8776 1.041-.4437.9637-.5192 2.107-.206 3.1258.1683.548.462 1.0782.9255 1.388.4637.3095 1.1184.3464 1.543-.0195"
			}), o.a.createElement("g", null, o.a.createElement("path", {
				stroke: "#000",
				strokeLinecap: "round",
				strokeLinejoin: "round",
				d: "M27.37 11.0563c-2.068-.6386-4.2747-.727-6.4318-.54-2.669.2313-5.8933.8336-7.6967 2.1168-.6986.4972-3.0193 1.2145-3.5257 3.1977"
			}), o.a.createElement("path", {
				fill: "#FFF",
				d: "M10.0543 14.9054c-1.561-.3985-3.317.0782-4.4594 1.2103-1.1422 1.132-1.726 2.906-1.237 4.4356.5752 1.8004 1.926 3.0712 2.306 3.275"
			}), o.a.createElement("path", {
				stroke: "#000",
				strokeLinecap: "round",
				strokeLinejoin: "round",
				d: "M10.0543 14.9054c-1.561-.3985-3.317.0782-4.4594 1.2103-1.1422 1.132-1.7258 2.906-1.237 4.4356.5756 1.8004 1.926 3.0712 2.306 3.275"
			}), o.a.createElement("path", {
				stroke: "#000",
				strokeLinecap: "round",
				strokeLinejoin: "round",
				d: "M11.823 29.9606c-2.7657-.9024-4.92-3.4455-5.3476-6.3126-.034-.2298.0103-.55.2428-.5677M33.1486 15.4973c.192.314.384.6286.576.9427.114.1872.2283.374.33.5677.5276 1.003.7084 2.182.5062 3.2958M35.8308 16.6844c-1.6376 4.9262-3.3644 9.8235-5.1785 14.688"
			}), o.a.createElement("path", {
				stroke: "#000",
				strokeLinecap: "round",
				strokeLinejoin: "round",
				d: "M35.671 17.0804c.2263-.288.586-.4587.9517-.4895.366-.0313.736.0692 1.0563.2483.2708.1508.515.364.6543.6404.1393.276.161.6202.0118.8913M38.3983 17.8874c-.6142 1.9982-1.3304 3.9652-2.145 5.891"
			}), o.a.createElement("path", {
				stroke: "#000",
				strokeLinecap: "round",
				strokeLinejoin: "round",
				d: "M37.245 21.08c.2485-.5347.1342-1.2158-.2747-1.641-.4093-.425-1.0872-.5678-1.6347-.3436-.1367.0562-.278.1512-.301.297"
			}), o.a.createElement("path", {
				stroke: "#000",
				strokeLinecap: "round",
				strokeLinejoin: "round",
				d: "M37.2275 21.501c.0044-.5535-.3094-1.0984-.791-1.374-.482-.2753-1.113-.2705-1.5904.012"
			}), o.a.createElement("path", {
				stroke: "#000",
				strokeLinecap: "round",
				strokeLinejoin: "round",
				d: "M34.2996 20.788c.7136-.389 1.6686-.2757 2.2706.269.2052.1856.376.4304.3964.706.006.0785-.0008.1578-.0196.2345M31.8127 33.921c.3626.1424.7564.1912 1.1458.1963 2.1737.0294 4.2697-1.3607 5.1896-3.3225.92-1.961.6773-4.386-.512-6.1982-.5268-.803-1.3562-1.5457-2.3166-1.4785-.6087.0423-1.1624.4184-1.511.9168-.3488.4983-.5113 1.106-.5655 1.7115-.1264 1.4077.322 2.8584 1.2216 3.9508M33.9912 29.3915l-1.467 4.0393M32.6352 33.0774c-.951.6286-1.8904 1.2738-2.8177 1.935"
			}), o.a.createElement("path", {
				stroke: "#000",
				strokeLinecap: "round",
				strokeLinejoin: "round",
				d: "M30.6496 31.0486l-.6455 4.1743c-.0058.0366-.0053.083.0385.099.044.0162.0833-.0547.0346-.0517"
			}), o.a.createElement("path", {
				stroke: "#000",
				strokeLinecap: "round",
				strokeLinejoin: "round",
				d: "M30.1422 33.367c.1982-.3278.4635-.6147.7748-.8386.078.1534.1257.3226.139.4943.287-.1218.5986-.183.9103-.1802-.3703.3692-.701.778-.9844 1.2173"
			}), o.a.createElement("path", {
				stroke: "#000",
				strokeLinecap: "round",
				strokeLinejoin: "round",
				d: "M31.195 33.0817c-.389.5013-.7464 1.0268-1.0695 1.5725.0302-.0257.0604-.0514.0902-.0775M30.7412 32.969c.0104.3634-.12.7275-.3766 1.0607M32.6658 33.0168c.1094-.676.1787-1.3585.2074-2.0422-.326.1956-.6525.3912-.979.5872-.1045.0627-.2386.1262-.3414.06-.063-.04-.091-.1166-.1135-.1874-.133-.4158-.2417-.8396-.3253-1.2682-.291.3247-.547.6807-.7626 1.0594"
			}), o.a.createElement("path", {
				stroke: "#000",
				strokeLinecap: "round",
				strokeLinejoin: "round",
				d: "M33.4372 28.176c-.177.4906-.354.9812-.5313 1.472-.285.7874-.5726 1.5822-1.0206 2.291M36.2456 21.1264c.048-.0176.0608-.0917.0218-.1244-.3043.6815-.5497 1.3883-.732 2.1112M30.4806 30.95c-.0843.2098-.1095.43-.074.6453M32.6366 25.235c-1.3602 1.8225-3.2855 3.1704-5.3524 4.1286-2.0672.958-4.284 1.55-6.5023 2.0763M30.348 27.747c.454.2455.8732.5552 1.24.9174M31.3832 34.1252c.6447 1.895.9225 3.913.8134 5.9105"
			}), o.a.createElement("path", {
				stroke: "#000",
				strokeLinecap: "round",
				strokeLinejoin: "round",
				d: "M20.2203 27.5033c.529 2.5225.9453 5.069 1.2474 7.6282.0048.042.0063.0925-.0276.1178-.0345.0253-.095-.029-.0603-.0536"
			}), o.a.createElement("path", {
				stroke: "#000",
				d: "M21.462 35.1753c-2.4317 1.1842-4.9882 2.113-7.614 2.7662-.0714.0177-.1587.031-.208-.023-.0494-.0544.038-.1667.0828-.1083",
				strokeLinecap: "round",
				strokeLinejoin: "round"
			}), o.a.createElement("path", {
				stroke: "#000",
				d: "M13.3965 36.9094l.6482 1.51c-.01-.0428-.0207-.086-.0312-.129",
				strokeLinecap: "round",
				strokeLinejoin: "round"
			}), o.a.createElement("path", {
				stroke: "#000",
				d: "M12.104 37.242c.219.2246.601.1358.8735-.0202 1.123-.6422 1.5835-2.0972 1.3698-3.369-.111-.659-.3898-1.3124-.8986-1.747-.5087-.4348-1.2736-.6054-1.872-.3045-.4118.2066-.6988.601-.8992 1.0147-.4546.9394-.532 2.054-.211 3.047.1723.5342.4733 1.051.9482 1.353.4753.3016 1.1462.3376 1.5813-.019M10.6766 30.3595c-.0715-.0158-.065.1064-.022.1655l.7927 1.0914c.011.0154.0276.0326.0457.0264.018-.006.0015-.0418-.01-.0268M10.6893 30.2222c3.1114-1.025 6.255-1.953 9.425-2.782.0814.1758.1628.352.2443.5274",
				strokeLinecap: "round",
				strokeLinejoin: "round"
			}), o.a.createElement("path", {
				stroke: "#000",
				d: "M17.6433 28.0588c-.2222-.2202-.246-.6037-.5073-.7755-.2244-.148-.522-.0737-.7792.0048-1.0368.3175-2.073.6346-3.11.952-.2287.07-.4843.163-.579.382-.1275.2944.111.6096.332.843M13.849 27.877c-.025-.1897.085-.3783.2402-.4906.1554-.1123.349-.1592.5393-.1816.302-.0364.678.0275.7848.3115M17.774 36.8926c-.1595-.0286-.2392.1064-.234.201.068 1.193.0596 2.3876-.0247 3.5806M27.3276 14.627c-1.155-.254-2.4348.1776-3.1982 1.0778-.763.9005-.975 2.23-.5294 3.3214.203.498.537.9487.9825 1.252.757.5157 1.7714.556 2.64.263.9157-.3095 1.7137-.983 2.115-1.8592.401-.8763.3797-1.9464-.108-2.7783-.4875-.8312-1.447-1.3828-2.412-1.3303",
				strokeLinecap: "round",
				strokeLinejoin: "round"
			}), o.a.createElement("path", {
				stroke: "#000",
				strokeWidth: ".5",
				strokeLinecap: "round",
				strokeLinejoin: "round",
				d: "M15.604 17.5287c-.993-.5754-2.3376-.3743-3.2093.371-.872.745-1.2777 1.9505-1.1753 3.0903.038.4224.1422.845.359 1.2103.4368.7372 1.309 1.1618 2.168 1.1684.8592.007 1.6937-.3673 2.346-.924.2724-.2316.518-.497.7086-.799.465-.738.5666-1.6924.2675-2.511-.2992-.8188-.993-1.485-1.8255-1.7524"
			}), o.a.createElement("path", {
				stroke: "#000",
				strokeLinecap: "round",
				strokeLinejoin: "round",
				d: "M25.8734 23.061c.019.8443.036 1.706-.2144 2.513-.3128 1.0058-1.0497 1.8733-1.9936 2.347-.9442.4738-2.0827.547-3.0803.1982"
			}), o.a.createElement("path", {
				fill: "#000",
				d: "M24.826 27.045c-.909 1.0263-2.4282 1.5463-3.7262 1.098-.325-.1124-.682-.385-.5983-.7172-.305-.1123-.6554.132-.9616.024-.1132-.0405-.2045-.124-.2882-.21-.507-.519-.8602-1.1846-1.0054-1.894 1.3742.2257 2.797.237 4.147-.1035.6403-.1614 1.2614-.404 1.8365-.7284.2493-.1406 1.482-1.2717 1.6324-1.2287.3404.0972-.014 1.6884-.081 1.9398-.1798.6673-.4952 1.3003-.9554 1.82"
			}), o.a.createElement("path", {
				stroke: "#000",
				strokeLinecap: "round",
				strokeLinejoin: "round",
				d: "M24.826 27.045c-.909 1.0263-2.4282 1.5463-3.7262 1.098-.325-.1124-.682-.385-.5983-.7172-.305-.1123-.6554.132-.9616.024-.1132-.0405-.2045-.124-.2882-.21-.507-.519-.8602-1.1846-1.0054-1.894 1.3742.2257 2.797.237 4.147-.1035.6403-.1614 1.2614-.404 1.8365-.7284.2493-.1406 1.482-1.2717 1.6324-1.2287.3404.0972-.014 1.6884-.081 1.9398-.1798.6673-.4952 1.3003-.9554 1.82z"
			}), o.a.createElement("path", {
				fill: "#FFF",
				d: "M27.1593 11.0486c.356-.539.901-.9515 1.5182-1.148.3725-.1184.7656-.1595 1.157-.1632 1.2186-.011 2.452.3553 3.4137 1.1013.9616.7464 1.63 1.8822 1.7275 3.0925l.0405 1.2437c.0792.8083-.1735 1.644-.687 2.274-.0244.03-.0506.0716-.0296.1038.021.0323.0833-.0212.0465-.033"
			}), o.a.createElement("path", {
				stroke: "#000",
				strokeLinecap: "round",
				strokeLinejoin: "round",
				d: "M27.1593 11.0486c.356-.539.901-.9515 1.5182-1.148.3725-.1184.7656-.1595 1.157-.1632 1.2186-.011 2.452.3553 3.4137 1.1013.9616.7464 1.63 1.8822 1.7275 3.0925l.0405 1.2437c.0792.8083-.1735 1.644-.687 2.274-.0244.03-.0506.0716-.0296.1038.021.0323.0833-.0212.0465-.033M19.0092 10.923c-.1602-.079-.1772-.2954-.172-.4733.078-2.7703.1672-5.5993 1.1384-8.1964 1.835.0793 3.6632.3303 5.4515.7494"
			}), o.a.createElement("path", {
				fill: "#FFF",
				d: "M24.8624 3.1944c-.9362 1.032-.8485 2.7633.0626 3.8172.9108 1.0536 2.4758 1.4224 3.826 1.0687.64-.1677 1.2505-.4896 1.6915-.981 1.0054-1.121.9137-2.9152.1555-4.215-.237-.407-.534-.784-.9052-1.075-.72-.5643-1.7132-.7643-2.597-.5235-.883.241-1.6355.917-1.9667 1.768"
			}), o.a.createElement("path", {
				stroke: "#000",
				strokeLinecap: "round",
				strokeLinejoin: "round",
				d: "M24.8624 3.1944c-.9362 1.032-.8485 2.7633.0626 3.8172.9108 1.0536 2.4758 1.4224 3.826 1.0687.64-.1677 1.2505-.4896 1.6915-.981 1.0054-1.121.9137-2.9152.1555-4.215-.237-.407-.534-.784-.9052-1.075-.72-.5643-1.7132-.7643-2.597-.5235-.883.241-1.6355.917-1.9667 1.768"
			}))))
		},
		"./src/reddit/icons/svgs/Tag/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				style: e.style,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, o.a.createElement("g", null, o.a.createElement("path", {
				fill: "inherit",
				d: "M5.14293863,3.38188919 C5.75317178,3.99212234 5.75317178,4.98136473 5.14293863,5.59159788 C4.53270548,6.20183104 3.54346309,6.20183104 2.93322994,5.59159788 C2.32299679,4.98136473 2.32299679,3.99212234 2.93322994,3.38188919 C3.54346309,2.77165604 4.53270548,2.77165604 5.14293863,3.38188919 Z M1.01449569,2.94595786 L1,9.03662212 C1.00035355,9.55457784 1.19162594,10.0654625 1.55790725,10.4317438 L9.89929239,18.7731289 C10.6622606,19.5360972 11.8989904,19.5360972 12.661605,18.7734825 L18.7381272,12.6969604 C19.5007418,11.9343457 19.5007418,10.697616 18.7377736,9.93464773 L10.3963885,1.59326259 C10.0301071,1.22698128 9.54786032,1.00707107 9.02955105,1.00707107 L2.96045355,1 C1.8814086,1 1.01414214,1.86726647 1.01449569,2.94595786 Z"
			})))
		},
		"./src/reddit/icons/svgs/Text/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, o.a.createElement("g", {
				fill: "inherit"
			}, o.a.createElement("path", {
				d: "M15.6498441,5.62718315 L4.38195636,5.62718315 C4.0364078,5.62718315 3.75596259,5.34673795 3.75596259,5.00118939 C3.75596259,4.65564083 4.0364078,4.37519562 4.38195636,4.37519562 L15.6498441,4.37519562 C15.9953927,4.37519562 16.2758379,4.65564083 16.2758379,5.00118939 C16.2758379,5.34673795 15.9953927,5.62718315 15.6498441,5.62718315 M15.6498441,9.38314574 L4.38195636,9.38314574 C4.0364078,9.38314574 3.75596259,9.10270054 3.75596259,8.75715198 C3.75596259,8.41160342 4.0364078,8.13115821 4.38195636,8.13115821 L15.6498441,8.13115821 C15.9953927,8.13115821 16.2758379,8.41160342 16.2758379,8.75715198 C16.2758379,9.10270054 15.9953927,9.38314574 15.6498441,9.38314574 M13.1458691,13.1391083 L4.38195636,13.1391083 C4.0364078,13.1391083 3.75596259,12.8586631 3.75596259,12.5131146 C3.75596259,12.167566 4.0364078,11.8871208 4.38195636,11.8871208 L13.1458691,11.8871208 C13.4914176,11.8871208 13.7718628,12.167566 13.7718628,12.5131146 C13.7718628,12.8586631 13.4914176,13.1391083 13.1458691,13.1391083 M17.6104566,0.000751192518 L2.42134388,0.000751192518 C1.08547319,0.000751192518 0,1.08622438 0,2.42084309 L0,17.5811601 C0,18.4174878 0.423171785,19.1837041 1.13054474,19.6306637 C1.52116485,19.8748012 1.96061247,20 2.410076,20 C2.77440437,20 3.14624466,19.9173688 3.49805316,19.7470985 L7.81490616,17.5210647 L17.5278254,17.5210647 C18.8611921,17.5210647 20.0318005,16.3504563 20.0318005,15.0170896 L20.0318005,2.42084309 C20.0318005,1.08622438 18.9463273,0.000751192518 17.6104566,0.000751192518"
			})))
		},
		"./src/reddit/icons/svgs/TextPost/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_13NhOjx-Siom7MKe3Dex5y"
			}
		},
		"./src/reddit/icons/svgs/TextPost/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/TextPost/index.m.less"),
				a = n.n(i);
			t.a = e => o.a.createElement("svg", {
				className: Object(r.a)(a.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("path", {
				fill: "inherit",
				fillRule: "evenodd",
				d: "M16.8656 7.205H13.139c-.3428 0-.621-.2782-.621-.621 0-.343.2782-.621.621-.621h3.7266c.343 0 .621.278.621.621 0 .3428-.278.621-.621.621zm0 3.416H13.139c-.3428 0-.621-.2782-.621-.621s.2782-.621.621-.621h3.7266c.343 0 .621.2782.621.621s-.278.621-.621.621zm0 3.416H3.2016c-.343 0-.621-.278-.621-.621 0-.3428.278-.621.621-.621h13.664c.343 0 .621.2782.621.621 0 .343-.278.621-.621.621zm-13.664 3.416c-.343 0-.621-.278-.621-.621 0-.3428.278-.621.621-.621h13.664c.343 0 .621.2782.621.621 0 .343-.278.621-.621.621H3.2016zm-.621-14.285c0-.343.278-.621.621-.621h6.5997c.343 0 .621.278.621.621V10c0 .3428-.278.621-.621.621H3.2016c-.343 0-.621-.2782-.621-.621V3.168zM1.3382.0625C.6513.0625.096.6178.096 1.3047v17.3906c0 .687.5554 1.2422 1.2423 1.2422H18.729c.6868 0 1.242-.5553 1.242-1.2422V1.3047c0-.687-.5552-1.2422-1.242-1.2422H1.3382z"
			}))
		},
		"./src/reddit/icons/svgs/Trash2/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_1Fa4RPHlhrfUZuNaXK2-eP"
			}
		},
		"./src/reddit/icons/svgs/Trash2/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/Trash2/index.m.less"),
				a = n.n(i);
			const c = e => o.a.createElement("svg", {
				className: Object(r.a)(a.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, o.a.createElement("path", {
				d: "M16.5,2H12.71l-.85-.85A.5.5,0,0,0,11.5,1h-3a.5.5,0,0,0-.35.15L7.29,2H3.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h13a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,16.5,2Z"
			}), o.a.createElement("path", {
				d: "M16.5,5H3.5a.5.5,0,0,0-.5.5v12A1.5,1.5,0,0,0,4.5,19h11A1.5,1.5,0,0,0,17,17.5V5.5A.5.5,0,0,0,16.5,5ZM6.75,15.5a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Z"
			}));
			t.b = c
		},
		"./src/reddit/layout/page/Listing/Content.m.less": function(e, t, n) {
			e.exports = {
				styledContent: "_1OVBBWLtHoSPfGCRaPzpTf",
				mCanFlexFullWidth: "PaJBYLqPf_Gie2aZntVQ7",
				mLargePostLayout: "_3nSp9cdBpqL13CqjdMr2L_",
				mDisableFullScreen: "_2udhMC-jldHp_EpAuBeSR1",
				mClassicWidth: "_1Tc65kRFm7a8piCXHVL4L4",
				mIsEditing: "_25-JsrYQ-pXWBM8eqpxeN7"
			}
		},
		"./src/reddit/layout/page/Listing/Content.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/constants/postLayout.ts"),
				d = n("./src/reddit/contexts/PageLayer/index.tsx"),
				l = n("./src/reddit/selectors/structuredStyles.ts"),
				u = n("./src/reddit/layout/page/Listing/Content.m.less"),
				m = n.n(u);

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const h = Object(d.t)(),
				b = Object(i.c)({
					isEditing: l.i,
					layout: (e, t) => t.forcedLayout || Object(d.O)(e, t)
				}),
				f = Object(r.b)(b),
				g = ({
					disableFullscreen: e,
					dispatch: t,
					fitPageToContent: n,
					forcedLayout: s,
					isCollectionLayout: r,
					isEditing: i,
					layout: a,
					pageLayer: c,
					...d
				}) => o.a.createElement("div", d);
			t.a = h(f(({
				className: e,
				...t
			}) => o.a.createElement(g, p({
				className: Object(a.a)(e, m.a.styledContent, {
					[m.a.mLargePostLayout]: t.layout === c.g.Large,
					[m.a.mDisableFullScreen]: t.disableFullscreen && !t.isCollectionLayout,
					[m.a.mClassicWidth]: t.isCollectionLayout,
					[m.a.mIsEditing]: !!t.isEditing,
					[m.a.mCanFlexFullWidth]: !t.fitPageToContent
				})
			}, t))))
		},
		"./src/reddit/layout/page/Listing/index.m.less": function(e, t, n) {
			e.exports = {
				Body: "_1vyLCp-v-tE5QvZovwrASa",
				body: "_1vyLCp-v-tE5QvZovwrASa",
				Sidebar: "_1BFbVxT49QnrAN3fqGZ1z8",
				sidebar: "_1BFbVxT49QnrAN3fqGZ1z8",
				defaultLayout: "_1tvThPWQpORoc2taKebHxs",
				"m-collectionLayout": "K1OCXipJxqOt01sOdQXEx",
				mCollectionLayout: "K1OCXipJxqOt01sOdQXEx",
				outerContainer: "qYj03fU5CXf5t2Fc5iSvg",
				innerContainer: "_3ozFtOe6WpJEMUtxDOIvtU",
				bannerNavContainer: "q4a8asWOWdfdniAbgNhMh",
				backgroundContainer: "_33erTQ46yfKeF2B6B-ooMJ"
			}
		},
		"./src/reddit/layout/page/Listing/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return k
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/layout/page/Listing/Content.tsx"),
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/constants/componentSizes.ts"),
				l = n("./src/reddit/constants/elementClassNames.ts"),
				u = n("./src/reddit/constants/screenWidths.ts"),
				m = n("./src/reddit/models/Theme/index.ts"),
				p = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				h = n("./src/reddit/connectors/connectClickToToggleEditor.ts");
			class b extends o.a.Component {
				constructor() {
					super(...arguments), this.onClickCapture = e => {
						this.props.isEditing && this.props.subredditId && !this.props.isModalOpen && (e.stopPropagation(), e.preventDefault(), this.props.requestCloseBlade())
					}
				}
				render() {
					return o.a.createElement("div", {
						className: this.props.className,
						onClickCapture: this.onClickCapture,
						children: this.props.children
					})
				}
			}
			var f = Object(h.a)(b);
			var g = e => o.a.createElement(f, e),
				C = n("./src/reddit/layout/page/Listing/index.m.less"),
				x = n.n(C);

			function E() {
				return (E = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const v = Object(a.a)(e => {
					const {
						backgroundColor: t,
						className: n,
						redditStyle: s,
						theme: r,
						...a
					} = e, c = Object(p.a)(e), d = {
						"--pseudo-before-background": t || Object(m.g)(c.canvas, c.canvasImgUrl, c.canvasImgPosition)
					};
					return o.a.createElement("div", E({
						className: Object(i.a)(x.a.backgroundContainer, n),
						style: d
					}, a))
				}),
				_ = c.a.div("Body", x.a),
				O = c.a.div("Sidebar", x.a),
				y = e => e.hero ? o.a.createElement(o.a.Fragment, null, e.hero) : null;

			function k(e) {
				const t = e.trendingUnit && !e.noSidebarTopMargin ? "28px" : "0",
					n = e.isPageSwapped ? {
						marginRight: `${d.q}px`,
						marginTop: t
					} : {
						marginLeft: `${d.q}px`,
						marginTop: t
					},
					s = e.sidebar && o.a.createElement(O, {
						className: e.isCollectionLayout ? x.a["m-collectionLayout"] : x.a.defaultLayout,
						style: n
					}, e.sidebar),
					a = o.a.createElement(r.a, {
						className: e.contentClassName,
						disableFullscreen: e.disableFullscreen,
						fitPageToContent: e.fitPageToContent,
						forcedLayout: e.forcedLayout,
						isCollectionLayout: e.isCollectionLayout
					}, e.contentBanner, e.content);
				let c;
				c = e.sidebars ? o.a.createElement(o.a.Fragment, null, e.sidebars[0], a, e.sidebars[1]) : e.isPageSwapped ? o.a.createElement(o.a.Fragment, null, s, a) : o.a.createElement(o.a.Fragment, null, a, s);
				const m = e.disableFullscreen ? `${e.maxWidth||u.a+2*d.m}px` : "100%";
				return o.a.createElement(g, {
					subredditId: e.subredditId
				}, o.a.createElement("div", {
					className: Object(i.a)(x.a.outerContainer, l.i, e.className),
					ref: e.containerRef
				}, o.a.createElement(v, {
					className: l.h,
					redditStyle: e.redditStyle,
					backgroundColor: e.backgroundColor
				}), o.a.createElement("div", {
					className: x.a.innerContainer
				}, o.a.createElement("div", {
					className: x.a.bannerNavContainer
				}, e.navBar), e.contentNavBar, y(e), o.a.createElement("div", {
					style: {
						maxWidth: m
					}
				}, e.trendingUnit), o.a.createElement(_, {
					style: {
						maxWidth: m
					}
				}, c))))
			}
		},
		"./src/reddit/layout/row/Inline/index.m.less": function(e, t, n) {
			e.exports = {
				inlineRow: "XZK-LTFT5CgGo9MvPQQsy"
			}
		},
		"./src/reddit/layout/row/Inline/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/lessComponent.tsx"),
				o = n("./src/reddit/layout/row/Inline/index.m.less"),
				r = n.n(o);
			t.a = s.a.div("inlineRow", r.a)
		},
		"./src/reddit/layout/row/RightAlign/index.m.less": function(e, t, n) {
			e.exports = {
				rightAligned: "_1sEFSGIUpFtX1hzGDyWJpr"
			}
		},
		"./src/reddit/layout/row/RightAlign/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/lessComponent.tsx"),
				o = n("./src/reddit/layout/row/RightAlign/index.m.less"),
				r = n.n(o);
			t.a = s.a.div("rightAligned", r.a)
		},
		"./src/reddit/layout/threeCol/ExpandCenter/index.m.less": function(e, t, n) {
			e.exports = {
				leftAndRight: "_3P6gMBKOhtWWrytWm-8hc",
				center: "CEs01bewsmQQV7LRLaHib",
				expandedCenterContainer: "_2FZY7HXlkf-PdemHbQoAEt"
			}
		},
		"./src/reddit/layout/threeCol/ExpandCenter/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/layout/threeCol/ExpandCenter/index.m.less"),
				c = n.n(a);
			t.a = Object(r.a)(e => o.a.createElement("div", {
				className: Object(i.a)(c.a.expandedCenterContainer, e.className)
			}, o.a.createElement("div", {
				className: c.a.leftAndRight,
				style: {
					flexBasis: e.widthLeft
				}
			}, Array.isArray(e.children) && e.children[0]), o.a.createElement("div", {
				className: c.a.center
			}, Array.isArray(e.children) && e.children[1]), o.a.createElement("div", {
				className: c.a.leftAndRight,
				style: {
					flexBasis: e.widthRight
				}
			}, Array.isArray(e.children) && e.children[2])), 3)
		},
		"./src/reddit/models/Badge/managementPage.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "c", (function() {
				return o
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "d", (function() {
				return a
			}));
			var s, o, r = n("./src/reddit/models/Badge/index.ts");
			! function(e) {
				e.Loyalty = "loyalty", e.Achievement = "achievement", e.Cosmetic = "cosmetic"
			}(s || (s = {})),
			function(e) {
				e.Gallery = "gallery", e.MyBadges = "my-badges"
			}(o || (o = {}));
			const i = {
					[s.Loyalty]: r.a.First,
					[s.Achievement]: r.a.Second,
					[s.Cosmetic]: void 0
				},
				a = e => e === r.a.First ? s.Loyalty : e === r.a.Second ? s.Achievement : s.Cosmetic
		},
		"./src/reddit/models/Gold/ProductOffer.ts": function(e, t, n) {
			"use strict";
			var s, o;
			n.d(t, "b", (function() {
					return s
				})), n.d(t, "a", (function() {
					return o
				})), n.d(t, "c", (function() {
					return r
				})),
				function(e) {
					e.CoinConversion = "user-coins-in-subreddit", e.Powerups = "powerups"
				}(s || (s = {})),
				function(e) {
					e.GildFlow = "gild_flow", e.LowCoinBalance = "low_coin_balance", e.NewUserTargetedOffer = "new_user_targeted_offer", e.RepeatUserTargetedOffer = "repeat_user_targeted_offer", e.StorefrontFreeAward = "storefront_free_award", e.CoinSale = "coin_sale", e.AvatarNewGear = "avatar_new_gear"
				}(o || (o = {}));
			const r = (e, t) => {
				const n = e && e.dealInfo && e.dealInfo.type,
					s = "low_coin_upsell" === n,
					r = "new_purchaser" === n,
					i = "repeat_purchaser" === n;
				return t ? o.GildFlow : s ? o.LowCoinBalance : r ? o.NewUserTargetedOffer : i ? o.RepeatUserTargetedOffer : void 0
			}
		},
		"./src/reddit/models/ScheduledPost/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "r", (function() {
				return i
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "e", (function() {
				return d
			})), n.d(t, "g", (function() {
				return l
			})), n.d(t, "n", (function() {
				return u
			})), n.d(t, "o", (function() {
				return m
			})), n.d(t, "f", (function() {
				return p
			})), n.d(t, "c", (function() {
				return b
			})), n.d(t, "q", (function() {
				return g
			})), n.d(t, "k", (function() {
				return C
			})), n.d(t, "j", (function() {
				return x
			})), n.d(t, "h", (function() {
				return E
			})), n.d(t, "i", (function() {
				return v
			})), n.d(t, "d", (function() {
				return _
			})), n.d(t, "m", (function() {
				return O
			})), n.d(t, "b", (function() {
				return y
			})), n.d(t, "l", (function() {
				return k
			})), n.d(t, "p", (function() {
				return j
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./src/lib/assertNever.ts"),
				o = n("./src/reddit/models/GqlTopLevelField.ts"),
				r = n("./src/reddit/models/User/index.ts");
			const i = "scheduledposts";
			var a, c, d;
			! function(e) {
				e.LINK = "LINK", e.POLL = "POLL", e.SELF = "SELF"
			}(a || (a = {})),
			function(e) {
				e.RTJSON = "RTJSON", e.TEXT = "TEXT"
			}(c || (c = {})),
			function(e) {
				e.CREATED = "CREATED", e.PROCESSING = "PROCESSING", e.FAILED = "FAILED", e.SUCCESS = "SUCCESS"
			}(d || (d = {}));
			const l = e => {
					return new Set(["links", "text", "polls"]).has(e)
				},
				u = e => e.__typename === r.c.AvailableRedditor,
				m = e => e.__typename === o.a.Subreddit;
			var p, h, b, f;
			! function(e) {
				e.standalonePosts = "standalonePosts", e.recurringPosts = "recurringPosts"
			}(p || (p = {})),
			function(e) {
				e.MONDAY = "MONDAY", e.TUESDAY = "TUESDAY", e.WEDNESDAY = "WEDNESDAY", e.THURSDAY = "THURSDAY", e.FRIDAY = "FRIDAY", e.SATURDAY = "SATURDAY", e.SUNDAY = "SUNDAY"
			}(h || (h = {})),
			function(e) {
				e[e.MONDAY = 0] = "MONDAY", e[e.TUESDAY = 1] = "TUESDAY", e[e.WEDNESDAY = 2] = "WEDNESDAY", e[e.THURSDAY = 3] = "THURSDAY", e[e.FRIDAY = 4] = "FRIDAY", e[e.SATURDAY = 5] = "SATURDAY", e[e.SUNDAY = 6] = "SUNDAY"
			}(b || (b = {})),
			function(e) {
				e[e.SUNDAY = 0] = "SUNDAY", e[e.MONDAY = 1] = "MONDAY", e[e.TUESDAY = 2] = "TUESDAY", e[e.WEDNESDAY = 3] = "WEDNESDAY", e[e.THURSDAY = 4] = "THURSDAY", e[e.FRIDAY = 5] = "FRIDAY", e[e.SATURDAY = 6] = "SATURDAY"
			}(f || (f = {}));
			const g = e => h[f[e]],
				C = e => f[h[e]],
				x = e => b[h[e]],
				E = e => h[b[e]],
				v = e => f[b[e]];
			var _;
			! function(e) {
				e.Hourly = "HOURLY", e.Daily = "DAILY", e.Weekly = "WEEKLY", e.Monthly = "MONTHLY"
			}(_ || (_ = {}));
			const O = e => {
					switch (e) {
						case _.Hourly:
						case _.Daily:
						case _.Weekly:
						case _.Monthly:
							return !0
					}
					return !1
				},
				y = "custom",
				k = e => {
					switch (e) {
						case "isNsfw":
							return "mark_as_nsfw";
						case "isOriginalContent":
							return "mark_as_oc";
						case "isSticky":
							return "sticky";
						case "isModDistinguished":
							return "mod_distinguish";
						case "isSpoiler":
							return "mark_as_spoiler";
						case "isContestMode":
							return "mark_as_contest_mode";
						case "isPostAsMetaMod":
							return "post_as_meta_mod";
						default:
							return Object(s.a)(e)
					}
				},
				j = e => "frequency" in e && !!e.frequency
		},
		"./src/reddit/pages/ErrorPages/index.m.less": function(e, t, n) {
			e.exports = {
				primaryRouterLink: "WPSTJCepGLEWZl2fETrUM",
				container: "_3pfk0xbr5atzL7KT8pXEZG",
				title: "_3uo9iClHghoc_hoxzdgipi"
			}
		},
		"./src/reddit/pages/ErrorPages/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return d
			})), n.d(t, "a", (function() {
				return l
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				i = n("./src/reddit/controls/Button/index.tsx"),
				a = n("./src/reddit/pages/ErrorPages/index.m.less"),
				c = n.n(a);
			const d = ({
					message: e
				}) => r.a.createElement("div", {
					className: c.a.container
				}, r.a.createElement("h3", {
					className: c.a.title
				}, e || s.fbt._("Sorry, there doesn't seem to be anything here.", null, {
					hk: "3VvHek"
				})), r.a.createElement(i.k, {
					className: c.a.primaryRouterLink,
					to: "/"
				}, s.fbt._("Go Home", null, {
					hk: "3E9E1g"
				}))),
				l = ({
					message: e
				}) => r.a.createElement("div", {
					className: c.a.container
				}, r.a.createElement("h3", {
					className: c.a.title
				}, e || s.fbt._("Sorry, You do not have permission to view this page.", null, {
					hk: "4lRbHD"
				})), r.a.createElement(i.k, {
					className: c.a.primaryRouterLink,
					to: "/"
				}, s.fbt._("Go Home", null, {
					hk: "3E9E1g"
				})))
		},
		"./src/reddit/pages/PostCreation/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/reddit/actions/postCreation/general.ts"),
				c = n("./src/reddit/components/JumpToContent/index.tsx"),
				d = n("./node_modules/fbt/lib/FbtPublic.js"),
				l = n("./node_modules/lodash/once.js"),
				u = n.n(l),
				m = n("./node_modules/react-router-redux/es/index.js"),
				p = n("./src/lib/constants/index.ts"),
				h = n("./src/reddit/constants/keycodes.ts"),
				b = n("./src/reddit/helpers/correlationIdTracker.ts"),
				f = n("./src/reddit/models/PostCreationForm/index.ts"),
				g = n("./src/reddit/models/SubredditRestrictions/index.ts"),
				C = n("./src/reddit/pages/ErrorPages/index.tsx"),
				x = n("./src/reddit/components/CrosspostBox/index.tsx"),
				E = n("./src/reddit/components/RequestPendingBanner/index.tsx"),
				v = n("./src/reddit/components/RichTextEditor/media/helpers.ts"),
				_ = n("./src/reddit/contexts/PageLayer/index.tsx"),
				O = n("./src/reddit/helpers/trackers/postComposer.ts"),
				y = n("./src/reddit/selectors/activeModalId.ts"),
				k = n("./src/reddit/selectors/platform.ts"),
				j = n("./src/reddit/selectors/postCreations.ts"),
				S = n("./src/reddit/selectors/postDraft.ts"),
				I = n("./src/reddit/selectors/subreddit.ts"),
				T = n("./src/reddit/selectors/user.ts"),
				w = n("./src/reddit/actions/changeUsername.ts"),
				P = n("./src/reddit/actions/externalAccount.ts"),
				N = n("./src/reddit/actions/postCreation/mediaUpload.ts"),
				M = n("./src/lib/makeActionCreator/index.ts"),
				D = n("./src/telemetry/index.ts"),
				L = n("./src/reddit/actions/governance/index.ts"),
				R = n("./src/reddit/actions/pages/subreddit.ts"),
				F = n("./src/reddit/actions/postDraft.ts"),
				A = n("./src/reddit/actions/scheduledPosts/index.ts"),
				B = n("./src/reddit/actions/urlRequested.ts"),
				U = n("./src/reddit/components/RichTextEditor/RTEState/index.tsx"),
				V = n("./src/config.ts"),
				W = n("./src/lib/convertToCamelCase/index.ts"),
				G = n("./src/lib/makeApiRequest/index.ts"),
				H = n("./node_modules/node-libs-browser/node_modules/url/url.js"),
				q = n("./src/lib/omitHeaders/index.ts"),
				K = n("./src/reddit/constants/headers.ts"),
				z = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				J = n("./src/reddit/helpers/flair.ts"),
				Y = n("./src/reddit/helpers/name/index.ts"),
				Z = n("./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts"),
				Q = n("./src/reddit/models/Poll/index.ts"),
				X = n("./src/reddit/models/Post/index.ts"),
				$ = n("./src/reddit/models/RichTextJson/addRTJParam.ts");

			function ee(e) {
				return Math.floor(e.valueOf() / 1e3)
			}
			const te = e => {
					switch (e.kind) {
						case f.o.CROSSPOST:
							return f.o.CROSSPOST;
						case f.o.LINK:
							return f.o.LINK;
						case f.o.POLL:
							return f.o.POLL;
						case f.o.MEDIA:
							return e.makeGif ? f.o.VIDEO_GIF : e.mediaType;
						default:
							return "self"
					}
				},
				ne = e => {
					switch (e.kind) {
						case f.o.RICH_TEXT:
							return {
								richtext_json: JSON.stringify({
									document: e.document
								})
							};
						case f.o.MARKDOWN:
							return {
								text: e.markdown
							};
						case f.o.LINK:
						case f.o.MEDIA:
							return {
								url: e.url
							};
						case f.o.CROSSPOST:
							return {
								crosspost_fullname: e.sourcePostId
							};
						case f.o.POLL:
							return e.poll.type === Q.a.Prediction ? {
								duration: 999999,
								end_timestamp: ee(e.poll.endDate),
								options: e.poll.options.map(e => e.text),
								prediction: !0,
								text: e.markdown,
								raw_rtjson: "markdown" in e ? null : JSON.stringify({
									document: e.document
								})
							} : {
								duration: Math.floor(e.poll.duration / 864e5),
								options: e.poll.options.map(e => e.text),
								text: e.markdown,
								raw_rtjson: "markdown" in e ? null : JSON.stringify({
									document: e.document
								})
							}
					}
				},
				se = e => {
					const t = Object(Y.g)(e.destSubreddit.name);
					return {
						sr: t,
						api_type: "json",
						show_error_list: !0,
						draft_id: e.draftId || void 0,
						title: e.title,
						discussion_type: e.isChatPost ? X.b.Chat : void 0,
						spoiler: e.isSpoiler,
						nsfw: e.isNSFW,
						...e.kind !== f.o.POLL ? {
							kind: te(e),
							original_content: e.isOC,
							...e.destSubreddit.isProfile ? {
								sr: `u_${t}`,
								submit_type: "profile"
							} : {
								sr: t,
								submit_type: "subreddit"
							}
						} : {},
						post_to_twitter: e.postToTwitter,
						sendreplies: e.sendReplies,
						...e.gRecaptchaResponse ? {
							"g-recaptcha-response": e.gRecaptchaResponse
						} : {},
						resubmit: e.resubmit,
						...ne(e),
						...e.kind === f.o.MEDIA && "video" === e.mediaType ? {
							video_poster_url: e.videoThumbnailUrl
						} : {},
						...e.kind === f.o.MEDIA && e.makeGif ? {
							make_gif: "on"
						} : {},
						...e.flair ? {
							flair_id: e.flair.templateId,
							flair_text: Object(J.g)(e.flair)
						} : {},
						...e.validate_on_submit ? {
							validate_on_submit: e.validate_on_submit
						} : {},
						...e.eventSchedule && {
							event_start: e.eventSchedule.startDate,
							event_end: e.eventSchedule.endDate,
							event_tz: e.eventSchedule.timezoneName,
							unlist: e.eventSchedule.submitTime === f.i.AtEventTime
						},
						...e.collectionId && {
							collection_id: e.collectionId
						}
					}
				},
				oe = async (e, t) => {
					if (!e.ok) return Object(Z.b)(e);
					const n = e.body.json.data;
					let s = n.url;
					s || t.kind !== f.o.MEDIA || (s = await ((e, t) => new Promise(n => {
						const s = new WebSocket(e),
							o = e => {
								s.close(), clearTimeout(r), n(e)
							},
							r = setTimeout(() => {
								o("")
							}, t);
						s.onmessage = e => {
							const t = JSON.parse(e.data),
								n = "success" === t.type ? t.payload.redirect : "";
							o(n)
						}, s.onerror = e => {
							o("")
						}
					}))(n.websocket_url, 3e4));
					const o = n.id || (e => {
							const t = /comments\/(\w+)\/.*$/.exec(e),
								n = t && t[1];
							return n ? `${p.zb.Post}_${n}` : ""
						})(s),
						r = Object(H.parse)(s).path,
						i = n.drafts_count;
					return {
						...e,
						body: {
							id: o,
							path: r,
							draftsCount: i
						}
					}
				};
			var re = (e, t) => Object(G.a)(Object(q.a)(e, [K.a]), {
				endpoint: Object($.a)(Object(z.a)(`${e.apiUrl}/api/submit?resubmit=true`)),
				method: p.cb.POST,
				data: se(t)
			}).then(async e => await oe(e, t));
			var ie = n("./src/reddit/endpoints/scheduledPosts/index.ts"),
				ae = n("./src/reddit/endpoints/scheduledPosts/update.ts"),
				ce = n("./src/reddit/featureFlags/index.ts"),
				de = n("./src/reddit/helpers/graphql/normalizeSubredditScheduledPostsFromGql/index.ts"),
				le = n("./src/reddit/helpers/scheduledPosts/index.ts"),
				ue = n("./src/reddit/helpers/trackers/scheduledPosts.ts"),
				me = n("./src/reddit/models/User/index.ts"),
				pe = n("./src/reddit/selectors/scheduledPosts/index.ts"),
				he = n("./src/reddit/models/ScheduledPost/index.ts"),
				be = n("./src/reddit/actions/postCreation/constants.ts");
			const fe = Object(M.a)(be.w),
				ge = Object(M.a)(be.L),
				Ce = Object(M.a)(be.o),
				xe = Object(M.a)(be.y),
				Ee = Object(M.a)(be.X),
				ve = Object(M.a)(be.F),
				_e = Object(M.a)(be.a),
				Oe = Object(M.a)(be.B),
				ye = e => `/r/${e}/about/${he.r}`,
				ke = (e, t) => {
					const n = e || {
							duration: p.x,
							options: []
						},
						{
							govType: s,
							newSubreddit: o,
							newTopMod: r
						} = Object(j.s)(t),
						i = {
							...n
						};
					return s && (i.type = s), i.type === Q.a.ReplaceTopMod ? (i.params = {
						userName: r
					}, i.options = Q.i[Q.a.ReplaceTopMod]()) : i.type === Q.a.Spinoff ? (i.params = {
						subreddit: o
					}, i.options = Q.i[Q.a.Spinoff](o)) : i.options = i.options.map(e => ({
						text: e.text.trim()
					})).filter(e => !!e.text), i
				},
				je = e => {
					const t = e.uploads,
						n = Object(j.U)(e),
						s = Object(j.a)(e),
						o = Object(j.eb)(e);
					if (s === p.Lb.POST) return U.a.getPendingThumbnailUploads(o, t);
					if (s === p.Lb.MEDIA && n && n.items.length) {
						const {
							video: e
						} = n.items[0];
						if (e && e.thumbnail && !t[f.m]) return [{
							...e.thumbnail,
							uploadKey: f.m
						}]
					}
				},
				Se = e => async (t, n, {
					gqlContext: s
				}) => {
					const o = n(),
						r = Object(j.bb)(o),
						i = Object(j.cb)(o, e),
						a = Object(j.h)(o),
						c = Object(pe.r)(o);
					if (!(i && a.id && r && Object(le.f)(c))) return;
					const d = a.id,
						l = Object(pe.a)(o, {
							subredditId: d,
							scheduledPostId: c
						});
					if (l && Object(D.a)(Object(ue.r)(l)(o)), t(fe(i)), e.postFieldValidationPending && (await e.postFieldValidationPending, Object(j.v)(n()))) return;
					const {
						isPoll: u,
						polls: m
					} = Object(j.s)(o), p = ke(m, o), h = {
						...Object(ie.e)({
							poll: u ? p : void 0,
							submission: i,
							schedule: r,
							subredditId: a.id,
							scheduledPostId: c
						})
					}, b = await Object(ae.a)(s(), h);
					if (b.ok) return t(Object(A.e)({
						subredditId: a.id
					})), void t(Object(B.a)(ye(a.name), !1));
					const f = b.error;
					t(Ce(f))
				}, Ie = e => async (t, n, {
					gqlContext: s
				}) => {
					const o = n(),
						r = Object(j.bb)(o),
						i = Object(j.cb)(o, e),
						a = Object(j.h)(o),
						c = Object(pe.b)(o);
					if (!i || !a.id || !r) return;
					if (t(fe(i)), e.postFieldValidationPending && (await e.postFieldValidationPending, Object(j.v)(n()))) return;
					const {
						isPoll: d,
						polls: l
					} = Object(j.s)(o), u = ke(l, o), m = {
						duration: u.duration,
						options: u.options
					}, p = {
						...Object(ie.d)({
							poll: d ? m : void 0,
							submission: i,
							schedule: r,
							subredditId: a.id
						}),
						creationToken: c
					}, h = await Object(ie.a)(s(), p);
					if (h.ok) {
						t(Object(A.e)({
							subredditId: a.id
						}));
						const e = h.body.data.createScheduledPost.scheduledPost;
						return e && Object(D.a)(Object(ue.o)(Object(de.d)(e))(o)), void t(Object(B.a)(ye(a.name), !1))
					}
					const b = h.error;
					t(Ce(b))
				}, Te = e => async (t, n, {
					apiContext: s
				}) => {
					const o = n(),
						r = Object(j.cb)(o, e),
						{
							isPoll: i,
							polls: c
						} = Object(j.s)(o),
						d = ke(c, o);
					if (!r) return;
					if (t(fe(r)), e.postFieldValidationPending && (await e.postFieldValidationPending, Object(j.v)(n()))) return;
					let l;
					const u = i && ce.d.spPolls(o);
					if ((l = u ? await
							function(e, t, n) {
								const s = t.destSubreddit.id;
								return Object(G.a)(e, {
									method: p.cb.POST,
									endpoint: `${V.a.metaUrl}/polls/${s}`,
									type: "json",
									data: {
										poll: n,
										subredditId: s,
										...Object(W.a)(se(t))
									}
								}).then(async e => {
									const n = e.ok ? {
											...e,
											body: {
												json: {
													data: e.body
												}
											}
										} : e,
										s = await oe(n, t);
									if (s.ok) {
										return {
											body: {
												...s.body,
												poll: e.body.poll
											},
											ok: !0,
											status: e.status
										}
									}
									return {
										error: s.body,
										ok: !1,
										status: e.status
									}
								})
							}(s(), r, d) : i ? await ((e, t) => Object(G.a)(Object(q.a)(e, [K.a]), {
								endpoint: Object($.a)(Object(z.a)(`${e.apiUrl}/api/submit_poll_post.json?resubmit=true`)),
								method: p.cb.POST,
								data: se(t),
								type: "json"
							}).then(e => oe(e, t)))(s(), {
								...r,
								kind: f.o.POLL,
								poll: d
							}) : r.kind === f.o.GALLERY ? await ((e, t) => Object(G.a)(Object(q.a)(e, [K.a]), {
								endpoint: Object($.a)(Object(z.a)(`${e.apiUrl}/api/submit_gallery_post.json?resubmit=true`)),
								method: p.cb.POST,
								data: {
									...se(t),
									items: t.galleryItems.map(e => ({
										caption: e.caption,
										outbound_url: e.url,
										media_id: e.assetId
									}))
								},
								type: "json"
							}).then(e => oe(e, t)))(s(), r) : await re(s(), r)).ok) {
						const e = Object(T.i)(o),
							n = l.body;
						t(ge({
							draftId: r.draftId,
							response: n
						})), u && t(Object(L.c)({
							poll: n.poll
						}));
						const s = (n.path || `/user/${Object(me.e)(e)}/posts`).replace(/^\/r\/u_/, "/user/");
						t(Object(R.subredditInvalidateListing)(r.destSubreddit.name)), t(Object(B.a)(s, !1))
					} else {
						if (i) {
							const e = l.error;
							t(xe(e))
						}
						const e = l.error;
						e.type === p.E.BAD_CAPTCHA_ERROR ? t(_e()) : e.type === p.E.VALIDATION_ERROR ? t(Ee(e)) : e.type === p.E.SUBMIT_VALIDATION_ERROR ? t(ve(e)) : t(Ce(e))
					}
					const m = Object(a.m)(r.kind),
						h = l.ok && l.body && l.body.id && Object(X.r)(l.body.id),
						b = n();
					O.r(b, m, h)
				};
			var we = n("./src/reddit/actions/postCreation/subredditChange.ts"),
				Pe = n("./src/reddit/actions/upload.ts"),
				Ne = n("./src/reddit/helpers/externalAccount/index.tsx"),
				Me = n("./node_modules/history/esm/history.js"),
				De = n("./node_modules/react-router/esm/react-router.js"),
				Le = n("./src/lib/matchRoute/index.ts"),
				Re = n("./src/reddit/components/PostCreationForm/Prompt/PromptModal.tsx");
			const Fe = "DISCARD_POST_ON_NAVIGATION_MODAL_ID",
				Ae = Object(i.c)({
					isEditingScheduledPost: e => !!Object(pe.r)(e),
					isScheduledPost: j.Q
				});
			var Be = Object(r.b)(Ae)(e => {
					const {
						isEditingScheduledPost: t,
						isScheduledPost: n,
						onAbort: s,
						onDiscardConfirmed: r,
						onSaveDraft: i,
						submissionType: a
					} = e;
					return p.D.has(a) && !n ? o.a.createElement(Re.a, {
						bodyText: d.fbt._("Do you want to save a draft of your post?", null, {
							hk: "3EV54t"
						}),
						onClose: s,
						onPrimaryAction: i,
						onSecondaryAction: r,
						primaryButtonText: d.fbt._("Save Draft", null, {
							hk: "1VdofA"
						}),
						secondaryButtonText: d.fbt._("Discard Post", null, {
							hk: "1CBjtn"
						}),
						titleText: d.fbt._("Save draft", null, {
							hk: "44JnYT"
						})
					}) : o.a.createElement(Re.a, {
						bodyText: t ? d.fbt._("Returning to the previous page will discard your changes", null, {
							hk: "2LlXOp"
						}) : d.fbt._("Returning to the previous page will discard your post", null, {
							hk: "3fT0mW"
						}),
						onClose: s,
						onPrimaryAction: s,
						onSecondaryAction: r,
						primaryButtonText: d.fbt._("Edit Post", null, {
							hk: "3dI1el"
						}),
						secondaryButtonText: t ? d.fbt._("Discard Changes", null, {
							hk: "7JOA"
						}) : d.fbt._("Discard Post", null, {
							hk: "1CBjtn"
						}),
						titleText: t ? d.fbt._("Discard Changes", null, {
							hk: "2vyCBa"
						}) : d.fbt._("Discard Post", null, {
							hk: "2BlkSe"
						})
					})
				}),
				Ue = n("./src/reddit/routes/postCreation/index.ts");
			const Ve = e => (e.returnValue = "", ""),
				We = Object(i.c)({
					destSubreddit: j.h,
					hasError: j.u,
					havePostContent: j.B,
					isChanged: j.F,
					modalId: y.a,
					submitPostPending: j.mb
				}),
				Ge = Object(r.b)(We, e => ({
					onToggleDiscardModal: () => e(a.x(Fe))
				}), (e, t, n) => ({
					...e,
					...t,
					...n
				}));
			class He extends o.a.Component {
				constructor() {
					super(...arguments), this.unblockNavigation = null, this.ensureBlocked = e => {
						e.isChanged && (e.havePostContent || e.destSubreddit.name) ? this.block(e) : this.unblock()
					}, this.block = e => {
						this.unblockNavigation || (window.addEventListener("beforeunload", Ve), this.unblockNavigation = e.history.block((e, t) => {
							if (!Object(Le.a)(Object(Me.e)(e), [Ue.a])) return this.props.modalId !== Fe && this.props.onToggleDiscardModal(), "Are you sure you want to leave?"
						}))
					}, this.unblock = () => {
						this.unblockNavigation && (this.unblockNavigation(), this.unblockNavigation = null), window.removeEventListener("beforeunload", Ve)
					}
				}
				componentDidMount() {
					this.ensureBlocked(this.props)
				}
				componentWillReceiveProps(e) {
					!this.props.submitPostPending || e.submitPostPending || e.hasError ? this.ensureBlocked(e) : this.unblock()
				}
				componentWillUnmount() {
					this.unblock()
				}
				render() {
					return null
				}
			}
			var qe = Object(_.t)({
					draftId: _.u,
					pageLayer: e => e
				})(Ge(Object(De.i)(He))),
				Ke = n("./src/reddit/components/PostCreationForm/CollectionListModal/index.tsx"),
				ze = n("./src/lib/classNames/index.ts"),
				Je = n("./src/lib/lessComponent.tsx"),
				Ye = n("./src/lib/prettyPrintNumber/index.ts"),
				Ze = n("./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/index.tsx"),
				Qe = n("./src/reddit/components/Governance/Token/index.tsx"),
				Xe = n("./src/reddit/components/ScheduledPost/PostSchedulePickerModal/loader.tsx"),
				$e = n("./src/reddit/controls/Button/index.tsx"),
				et = n("./src/reddit/controls/ErrorText/index.tsx"),
				tt = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				nt = n("./src/reddit/icons/svgs/Clock/index.tsx"),
				st = n("./src/reddit/icons/svgs/Pencil/index.tsx"),
				ot = n("./src/reddit/layout/row/Inline/index.tsx"),
				rt = n("./src/reddit/models/Media/index.ts"),
				it = n("./src/reddit/models/Upload/index.ts"),
				at = n("./src/reddit/selectors/moderatorPermissions.ts"),
				ct = n("./src/reddit/models/Duplicates/index.ts"),
				dt = n("./src/reddit/selectors/posts.ts");
			var lt = n("./src/reddit/components/PostCreationForm/Button/index.m.less"),
				ut = n.n(lt);
			const mt = Je.a.wrapped($e.i, "PrimaryButton", ut.a),
				pt = Je.a.wrapped($e.l, "SecondaryButton", ut.a);
			var ht = n("./src/lib/timezone/index.ts"),
				bt = n("./src/reddit/icons/svgs/Replay/index.tsx"),
				ft = n("./src/reddit/components/PostCreationForm/PostCreationFooter/ScheduledTimeInfo/index.m.less"),
				gt = n.n(ft);
			const {
				fbt: Ct
			} = n("./node_modules/fbt/lib/FbtPublic.js"), xt = Je.a.div("Container", gt.a), Et = Object(i.c)({
				eventSchedule: j.p,
				postSchedule: j.bb
			});
			var vt = Object(r.b)(Et)(e => {
					const {
						eventSchedule: t,
						postSchedule: n
					} = e;
					let s;
					if (t && t.submitTime !== f.i.Now) s = (e => {
						const t = Object(ht.f)(e.startDate);
						let n = `${t.toLocaleDateString(void 0,{month:"numeric",day:"numeric",year:"2-digit"})} ${t.toLocaleTimeString([],{hour:"numeric",minute:"numeric"}).replace(" ","")}`;
						const s = Object(ht.d)(e.timezoneName, +t);
						return s && (n += ` ${s.abbreviation}`), o.a.createElement("span", null, Ct._("Will automatically post at", null, {
							hk: "1ixr16"
						}), " ", o.a.createElement("time", {
							dateTime: e.startDate
						}, n))
					})(t);
					else {
						if (!n) return null;
						s = (e => {
							const t = Object(ht.f)(e.submitDate);
							let n = `${t.toLocaleDateString(void 0,{month:"numeric",day:"numeric"})} ${t.toLocaleTimeString([],{hour:"numeric",minute:"numeric"}).replace(" ","")}`;
							const s = Object(ht.d)(e.timezoneName, +t);
							s && (n += ` ${s.abbreviation}`);
							const r = e.recurrenceInfo ? o.a.createElement("span", null, o.a.createElement(bt.a, {
								className: gt.a.replayIcon
							}), Ct._("Recurring post template scheduled for", null, {
								hk: "2tTwIB"
							})) : Ct._("Post scheduled for", null, {
								hk: "47yVoo"
							});
							return o.a.createElement("span", null, r, " ", o.a.createElement("time", {
								dateTime: e.submitDate
							}, n))
						})(n)
					}
					return o.a.createElement(xt, null, s)
				}),
				_t = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				Ot = n("./src/lib/linkMatchers/index.ts"),
				yt = n("./src/reddit/contexts/PageLayer/selectors.ts");
			const kt = Object(M.a)(be.G),
				jt = Object(M.a)(be.H),
				St = (e, t) => async (n, s, {
					apiContext: o
				}) => {
					const r = s(),
						i = Object(yt.r)(r, {
							pageLayer: t
						});
					if (!i) return;
					const a = Object(j.q)(r, {
						field: e
					});
					if (!a) return;
					const c = Object(j.f)(r),
						l = await ((e, t, n, s, o) => Object(G.a)(Object(q.a)(e, [K.a]), {
							endpoint: `${e.apiUrl}/api/validate_submission_field`,
							method: p.cb.POST,
							data: {
								sr: t,
								field: n,
								kind: s,
								title: o.title || "",
								url: o.url || null,
								text: o.selftext,
								richtext_json: o.rtjson && JSON.stringify({
									document: o.rtjson
								}),
								flair_id: o.flairId || null,
								show_error_list: !0
							}
						}).then(Z.b))(o(), i.name, e, c, a),
						u = l.error || function(e, t) {
							if (e === p.ob.LINK && !Object(Ot.h)(Ot.f, t.url || "")) return {
								fields: [{
									field: p.ob.LINK,
									msg: d.fbt._("Link doesn't look right", null, {
										hk: "11qrsa"
									})
								}],
								type: p.E.SUBMIT_VALIDATION_ERROR
							}
						}(e, a);
					u && u.fields && u.fields.length ? n(kt(u)) : n(jt(e)), l.error && n(ve(l.error))
				};
			var It = n("./src/reddit/components/Flair/index.tsx"),
				Tt = n("./src/reddit/controls/TextButton/index.tsx"),
				wt = n("./src/reddit/controls/Typography/index.tsx"),
				Pt = n("./src/reddit/components/PostCreationForm/ControlRow/PostModifiers/OCDisclaimer/index.m.less"),
				Nt = n.n(Pt);
			const {
				fbt: Mt
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Dt = Je.a.wrapped(Tt.a, "DontShowButton", Nt.a);
			var Lt, Rt = Je.a.wrapped(e => {
					const {
						className: t,
						onDoNotShowClick: n
					} = e;
					return o.a.createElement("div", {
						className: t
					}, o.a.createElement(wt.a, null, Mt._("Use the OC tag if you want to take credit for your post as Original Content.", null, {
						hk: "2D3GYX"
					})), o.a.createElement(wt.a, null, o.a.createElement(Dt, {
						onClick: n
					}, Mt._("Cool, whatever, don't show me this again.", null, {
						hk: "4nvsEF"
					}))))
				}, "Component", Nt.a),
				Ft = n("./src/reddit/components/RichTextEditor/HoverTooltip/index.tsx"),
				At = n("./src/reddit/constants/colors.ts");
			! function(e) {
				e.CHAT = "chat", e.FLAIR = "flair", e.GOVERNANCE = "gov", e.SPOILER = "spoiler", e.NSFW = "nsfw", e.ORIGINAL_CONTENT = "originalContent", e.SCHEDULE = "schedule"
			}(Lt || (Lt = {}));
			var Bt = n("./src/reddit/components/PostCreationForm/ControlRow/PostModifiers/PostModifierButton/index.m.less"),
				Ut = n.n(Bt);
			Je.a.div("TintOverlay", Ut.a);
			const Vt = (e, t) => {
					switch (t) {
						case Lt.ORIGINAL_CONTENT:
							return {
								backgroundColor: At.b.orangered, textColor: e.newCommunityTheme.body, iconColor: e.newCommunityTheme.body
							};
						case Lt.CHAT:
							return {
								backgroundColor: At.b.chat, textColor: e.newCommunityTheme.lightText, iconColor: e.newCommunityTheme.lightText
							};
						case Lt.SPOILER:
							return {
								backgroundColor: At.b.spoiler, textColor: e.newCommunityTheme.lightText, iconColor: e.newCommunityTheme.lightText
							};
						case Lt.NSFW:
							return {
								backgroundColor: At.b.nsfw, textColor: e.newCommunityTheme.body, iconColor: e.newCommunityTheme.body
							};
						case Lt.FLAIR:
							return {
								backgroundColor: e.newCommunityTheme.flair, textColor: e.newCommunityTheme.body, iconColor: e.newCommunityTheme.body
							};
						case Lt.SCHEDULE:
							return {
								backgroundColor: e.newCommunityTheme.active, textColor: e.newCommunityTheme.body, iconColor: e.newCommunityTheme.body
							};
						case Lt.GOVERNANCE:
							return {
								backgroundColor: e.newCommunityTheme.line, textColor: e.newCommunityTheme.bodyText, iconColor: e.newCommunityTheme.bodyText
							};
						default:
							return {
								backgroundColor: "none", textColor: e.newCommunityTheme.body, iconColor: e.newCommunityTheme.body
							}
					}
				},
				Wt = e => Object(_t.a)(t => {
					const {
						addModifierTooltip: n,
						children: s,
						className: r,
						disabled: i,
						disabledTooltip: a,
						Icon: c,
						id: d,
						onClick: l,
						removeModifierTooltip: u,
						style: m,
						text: p,
						theme: h,
						toggled: b
					} = t, f = i && a ? a : b ? u : n, g = {
						color: t.textColor || h && Vt(h, e).textColor,
						fill: t.textColor || h && Vt(h, e).iconColor,
						backgroundColor: t.backgroundColor || h && Vt(h, e).backgroundColor,
						borderColor: "transparent"
					};
					return o.a.createElement($e.q, {
						"aria-label": f,
						className: Object(ze.a)(r, Ut.a.PostModifierButton),
						disabled: i,
						Icon: c,
						id: d,
						onClick: l,
						priority: $e.b.Secondary,
						style: {
							...m,
							...b ? g : {}
						},
						text: p
					}, o.a.createElement(Ft.a, {
						text: f,
						className: Ut.a.HoverTooltip,
						tooltipContentClass: t.shiftTooltipToRight ? Ut.a.mShiftTooltipToTheRight : void 0
					}), s)
				});
			var Gt = n("./src/reddit/constants/postCreation.ts"),
				Ht = n("./src/reddit/icons/fonts/Calendar/index.tsx"),
				qt = n("./src/reddit/icons/fonts/Create/index.tsx"),
				Kt = n("./src/reddit/icons/fonts/Live/index.tsx"),
				zt = n("./src/higherOrderComponents/asTooltip.tsx"),
				Jt = n("./src/reddit/components/PostCreationForm/EduTooltips/BaseEduTooltip/index.m.less"),
				Yt = n.n(Jt);
			const {
				fbt: Zt
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Qt = Je.a.div("Container", Yt.a), Xt = Je.a.div("OuterContainer", Yt.a);
			class $t extends o.a.Component {
				constructor() {
					super(...arguments), this.tooltipRef = null, this.onGotItClick = e => {
						this.close(!0), e.stopPropagation()
					}, this.onKeyDown = e => {
						e.keyCode === h.a.Escape && this.close(!1)
					}, this.onMouseClick = e => {
						this.tooltipRef && !this.tooltipRef.contains(e.target) && this.close(!1)
					}, this.onWindowResize = () => {
						this.close(!1)
					}, this.setTooltipRef = e => {
						this.tooltipRef = e
					}
				}
				componentDidMount() {
					document.addEventListener("keydown", this.onKeyDown), document.addEventListener("click", this.onMouseClick), window.addEventListener("resize", this.onWindowResize), this.tooltipRef && this.tooltipRef.scrollIntoView({
						behavior: "smooth",
						block: "end"
					})
				}
				componentWillUnmount() {
					document.removeEventListener("keydown", this.onKeyDown), document.removeEventListener("click", this.onMouseClick), window.removeEventListener("resize", this.onWindowResize)
				}
				close(e) {
					this.props.onClose(e)
				}
				render() {
					const e = this.props;
					return o.a.createElement(Xt, {
						className: e.className,
						innerRef: this.setTooltipRef,
						style: e.style
					}, o.a.createElement(Qt, {
						className: Yt.a.container
					}, o.a.createElement("img", {
						src: e.heroImagePath,
						className: Yt.a.hero
					}), o.a.createElement("div", {
						className: Yt.a.contentContainer
					}, o.a.createElement("div", {
						className: Yt.a.title
					}, e.title), o.a.createElement("div", {
						className: Yt.a.description
					}, e.description), o.a.createElement("div", {
						className: Yt.a.iconsExplanations
					}, e.iconsExplanations.map((e, t) => {
						const n = e.iconComponent;
						return o.a.createElement("div", {
							className: Yt.a.iconExplanation,
							key: t
						}, o.a.createElement(n, {
							className: Yt.a.icon
						}), e.text)
					})), o.a.createElement($e.i, {
						className: Yt.a.gotIt,
						onClick: this.onGotItClick
					}, Zt._("Got it", null, {
						hk: "2RPumB"
					})))))
				}
			}
			var en = Object(zt.a)($t),
				tn = n("./node_modules/lodash/debounce.js"),
				nn = n.n(tn),
				sn = n("./src/reddit/actions/modal.ts"),
				on = n("./src/reddit/helpers/localStorage/index.ts"),
				rn = n("./src/reddit/helpers/trackers/postCollection.ts");
			const an = [{
					id: Gt.d,
					getShowTimesLeft: on.A,
					setShowTimesLeft: on.rb,
					tooltipShown: rn.n,
					tooltipDismissed: rn.m
				}, {
					id: Gt.c,
					getShowTimesLeft: on.z,
					setShowTimesLeft: on.qb,
					tooltipShown: rn.f,
					tooltipDismissed: rn.e
				}],
				cn = {};
			let dn;
			const ln = () => (void 0 === dn && (dn = an.filter(e => e.getShowTimesLeft() > 0).map(e => e.id)), dn),
				un = e => {
					const t = ln().indexOf(e);
					t > -1 && ln().splice(t, 1)
				},
				mn = e => async (t, n) => {
					const s = an.find(t => t.id === e);
					s && (pn(s, !0), Object(D.a)(s.tooltipDismissed(n())))
				}, pn = (e, t) => {
					e.setShowTimesLeft(t ? 0 : e.getShowTimesLeft() - 1)
				}, hn = () => async (e, t) => {
					const n = Object(y.a)(t()),
						s = ln().find(e => !!cn[e]);
					if (!s || s === n) return;
					const o = an.find(e => e.id === s);
					o && (Object(D.a)(o.tooltipShown(t())), pn(o)), e(sn.i(s))
				}, bn = nn()(e => e(), 100);

			function fn(e, t) {
				const n = Object(i.c)({
					isOpen: e => Object(y.a)(e) === t
				});
				class s extends o.a.Component {
					componentDidMount() {
						cn[t] = !0, bn(this.props.onShowNextTooltip)
					}
					componentWillUnmount() {
						cn[t] = !1, bn(this.props.onShowNextTooltip)
					}
					render() {
						const {
							isOpen: t,
							...n
						} = this.props;
						return t ? o.a.createElement(e, n) : null
					}
				}
				return Object(r.b)(n, e => ({
					onCloseTooltip: n => {
						un(t), n && e(mn(t)), e(sn.i(t)), e(hn())
					},
					onShowNextTooltip: () => e(hn())
				}))(s)
			}
			var gn = n("./src/reddit/components/PostCreationForm/EduTooltips/EventButtonTooltip/index.m.less"),
				Cn = n.n(gn);
			var xn, En = fn(e => {
					const {
						onCloseTooltip: t
					} = e;
					return o.a.createElement(en, {
						className: Cn.a.container,
						description: d.fbt._("Let your community know about discussion threads, AMA’s or even a game thread.", null, {
							hk: "4aMUL6"
						}),
						heroImagePath: `${V.a.assetPath}/img/events-tooltip-hero@2x.png`,
						iconsExplanations: [{
							iconComponent: qt.a,
							text: d.fbt._("Compose a post like normal.", null, {
								hk: "so4h7"
							})
						}, {
							iconComponent: Ht.a,
							text: d.fbt._("Schedule when the event is happening.", null, {
								hk: "2EoghL"
							})
						}, {
							iconComponent: Kt.a,
							text: d.fbt._("Remind your community when its live.", null, {
								hk: "2W4fY"
							})
						}],
						isOpen: !0,
						isOverlayOff: !0,
						onClose: t,
						title: d.fbt._("Make an Event", null, {
							hk: "4Bz0L3"
						}),
						tooltipId: Gt.a
					})
				}, Gt.d),
				vn = n("./src/reddit/components/PostCreationForm/SchedulePickerModal/index.tsx"),
				_n = n("./src/reddit/components/PostFlairPicker/index.tsx");
			! function(e) {
				e.ORIGINAL_CONTENT_DISCLAIMER = "original_content_disclaimer"
			}(xn || (xn = {}));
			var On = n("./src/reddit/helpers/trackers/postEvent.ts"),
				yn = n("./src/reddit/icons/svgs/Chat/index.tsx"),
				kn = n("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				jn = n("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				Sn = n("./src/reddit/icons/svgs/Plus/index.tsx"),
				In = n("./src/reddit/icons/svgs/Tag/index.tsx"),
				Tn = n("./src/reddit/models/Subreddit/index.ts"),
				wn = n("./src/reddit/selectors/chatPost.ts");
			const Pn = e => e.creations.formState.fieldValidation;
			var Nn = n("./src/telemetry/models/PostComposer.ts"),
				Mn = n("./src/reddit/components/PostCreationForm/ControlRow/PostModifiers/index.m.less"),
				Dn = n.n(Mn);
			const Ln = "PostFlair--Modal--CreationForm",
				Rn = e => {
					let t = Object(ht.f)(e.startDate).toLocaleDateString(void 0, {
						month: "numeric",
						day: "numeric",
						hour: "numeric",
						minute: "numeric"
					});
					return t = t.replace(" ", "").replace(",", " ")
				},
				Fn = Je.a.wrapped(jn.b, "StyledCaretIcon", Dn.a),
				An = Je.a.wrapped(Ht.a, "CalendarIcon", Dn.a),
				Bn = Je.a.wrapped(st.a, "PencilIcon", Dn.a),
				Un = Je.a.wrapped(yn.a, "ChatIcon", Dn.a),
				Vn = Je.a.wrapped(kn.a, "CheckmarkIcon", Dn.a),
				Wn = Je.a.wrapped(Sn.a, "PlusIcon", Dn.a),
				Gn = Je.a.wrapped(It.b, "FlairComponent", Dn.a),
				Hn = Je.a.wrapped(In.a, "FlairIcon", Dn.a),
				qn = Je.a.div("FlairTextWrapper", Dn.a),
				Kn = Je.a.wrapped(ot.a, "ModifierRow", Dn.a),
				zn = Wt(Lt.ORIGINAL_CONTENT),
				Jn = Wt(Lt.CHAT),
				Yn = Wt(Lt.SPOILER),
				Zn = Wt(Lt.NSFW),
				Qn = Wt(Lt.FLAIR),
				Xn = Wt(Lt.SCHEDULE),
				$n = Object(_.t)({
					draftId: _.u,
					pageLayer: e => e
				}),
				es = Object(i.c)({
					activeModalId: y.a,
					canAddPostFlair: j.c,
					canPostAsModerator: j.e,
					currentSubredditId: _.m,
					destSubreddit: j.h,
					destSubredditAboutInfo: j.g,
					eventSchedule: j.p,
					isChatPostAvailable: wn.a,
					isChatPostSelected: j.G,
					isNsfw: j.M,
					isSpoiler: j.R,
					isOriginalContent: j.N,
					flair: j.r,
					postCreationFieldErrors: Pn,
					postSchedule: j.bb,
					submissionType: j.a
				}),
				ts = Object(r.b)(es, (e, {
					onPostFieldValidation: t,
					pageLayer: n
				}) => ({
					doNotShowOriginalContentDisclaimerClicked: () => e((e, t) => O.d(t())),
					onEventScheduleChange: t => {
						e(a.a(t))
					},
					postFlairAdded: s => {
						e(a.b(s)), t(e(St(p.ob.FLAIR, n)))
					},
					toggleSchedulePicker: (t, n) => {
						e(a.x(f.f)), t && e((e, t) => {
							(n ? On.g : On.f)(t())
						})
					},
					toggleChatPostTag: t => {
						e(a.s(!t)), e((e, n) => O.y(n(), !t, Nn.ToggleNoun.CHAT))
					},
					toggleFlairPicker: () => e(a.x(Ln)),
					toggleNsfwTag: t => {
						e(a.t(!t)), e((e, n) => O.y(n(), !t, Nn.ToggleNoun.NSFW))
					},
					toggleOriginalContentTag: t => {
						e(a.u(!t)), e((e, n) => O.y(n(), !t, Nn.ToggleNoun.ORIGINAL_CONTENT))
					},
					toggleSpoilerTag: t => {
						e(a.w(!t)), e((e, n) => O.y(n(), !t, Nn.ToggleNoun.SPOILER))
					}
				}));
			class ns extends o.a.Component {
				constructor() {
					super(...arguments), this.state = {
						showOCDisclaimer: !1
					}, this.handlePostFlairSelected = ({
						previewFlair: e
					}) => {
						this.props.flair !== e && this.props.postFlairAdded(e)
					}, this.handleOCDisclaimerDoNotShowClick = () => {
						const {
							doNotShowOriginalContentDisclaimerClicked: e
						} = this.props;
						e(), Object(on.Z)(xn.ORIGINAL_CONTENT_DISCLAIMER, !0), this.setState({
							showOCDisclaimer: !1
						})
					}, this.handleOriginalContentClick = () => {
						this.props.toggleOriginalContentTag(this.props.isOriginalContent)
					}, this.handleChatPostClick = () => {
						this.props.toggleChatPostTag(this.props.isChatPostSelected)
					}, this.handleSpoilerClick = () => {
						this.props.toggleSpoilerTag(this.props.isSpoiler)
					}, this.handleNsfwClick = () => {
						this.props.toggleNsfwTag(this.props.isNsfw)
					}, this.handleToggleSchedulePicker = () => {
						const e = this.props.activeModalId !== f.f,
							t = !!this.props.eventSchedule;
						this.props.toggleSchedulePicker(e, t)
					}
				}
				componentDidMount() {
					this.setState({
						showOCDisclaimer: !Object(on.h)(xn.ORIGINAL_CONTENT_DISCLAIMER)
					})
				}
				render() {
					const {
						activeModalId: e,
						canAddPostFlair: t,
						canPostAsModerator: n,
						className: s,
						currentSubredditId: r,
						destSubreddit: i,
						destSubredditAboutInfo: a,
						eventSchedule: c,
						disabled: l,
						flair: u,
						isChatPostAvailable: m,
						isChatPostSelected: h,
						isNsfw: b,
						isSpoiler: g,
						isOriginalContent: C,
						postCreationFieldErrors: x,
						postSchedule: E,
						submissionType: v,
						theme: _,
						toggleFlairPicker: O
					} = this.props, {
						showOCDisclaimer: y
					} = this.state, k = !!u, {
						backgroundColor: j = null,
						textColor: S = null
					} = u || {}, {
						allOriginalContent: I = !1,
						eventPostsEnabled: T = !1
					} = a || {}, w = i.isProfile || Object(Tn.f)(a), P = l || !w || I || v === p.Lb.CROSSPOST, N = l, M = l || !!E;
					return o.a.createElement("div", {
						className: s
					}, o.a.createElement(Kn, null, m && o.a.createElement(Jn, {
						disabled: N,
						onClick: this.handleChatPostClick,
						toggled: h,
						addModifierTooltip: d.fbt._("Use live chat instead of comments", null, {
							hk: "27t9lW"
						}),
						removeModifierTooltip: d.fbt._("Use comments instead of live chat", null, {
							hk: "3seokS"
						}),
						Icon: h ? Vn : Un,
						text: d.fbt._("Live Chat", null, {
							hk: "cZlvm"
						})
					}), n && T && o.a.createElement(Xn, {
						disabled: M,
						id: Gt.a,
						onClick: this.handleToggleSchedulePicker,
						shiftTooltipToRight: !0,
						toggled: !!c,
						addModifierTooltip: d.fbt._("Add time and date info", null, {
							hk: "L2KN8"
						}),
						removeModifierTooltip: d.fbt._("Edit event data", null, {
							hk: "1FSblM"
						}),
						Icon: An,
						text: c ? Rn(c) : d.fbt._("Event", null, {
							hk: "40pq7b"
						})
					}, o.a.createElement(En, null), c && o.a.createElement(Bn, null)), e === f.f && o.a.createElement(vn.default, {
						schedule: this.props.eventSchedule,
						onClose: this.handleToggleSchedulePicker,
						onChange: this.props.onEventScheduleChange,
						shouldShowSubmitTime: !0,
						shouldShowDeleteButton: !0
					}), o.a.createElement(zn, {
						disabled: P,
						onClick: this.handleOriginalContentClick,
						shiftTooltipToRight: !0,
						toggled: w && (C || I),
						addModifierTooltip: d.fbt._("Mark this post as Original Content [OC]", null, {
							hk: "3V5aHC"
						}),
						removeModifierTooltip: d.fbt._("Unmark this post as Original Content [OC]", null, {
							hk: "2oj9GI"
						}),
						disabledTooltip: w ? "" : d.fbt._("This community does not allow original content tag", null, {
							hk: "gBN3o"
						}),
						Icon: C ? Vn : Wn,
						text: d.fbt._("OC", null, {
							hk: "2GRpRs"
						})
					}), o.a.createElement(Yn, {
						disabled: l,
						onClick: this.handleSpoilerClick,
						toggled: g,
						addModifierTooltip: d.fbt._("Mark as a spoiler", null, {
							hk: "3ICynB"
						}),
						removeModifierTooltip: d.fbt._("Unmark as a spoiler", null, {
							hk: "34pmqg"
						}),
						Icon: g ? Vn : Wn,
						text: d.fbt._("Spoiler", null, {
							hk: "1K7ROJ"
						})
					}), o.a.createElement(Zn, {
						disabled: l,
						onClick: this.handleNsfwClick,
						toggled: b,
						addModifierTooltip: d.fbt._("Mark as Not Safe For Work", null, {
							hk: "1LNeZB"
						}),
						removeModifierTooltip: d.fbt._("Unmark Not Safe For Work", null, {
							hk: "1EcrjD"
						}),
						Icon: b ? Vn : Wn,
						text: d.fbt._("NSFW", null, {
							hk: "3Tg62D"
						})
					}), o.a.createElement(Qn, {
						className: Object(ze.a)(Dn.a.AddFlair, {
							[Dn.a.isToggled]: k,
							[Dn.a.mHasError]: x[p.ob.FLAIR].length > 0
						}),
						disabled: !t || l,
						disabledTooltip: i.id ? d.fbt._("Not available for this community", null, {
							hk: "2gkbLI"
						}) : d.fbt._("Select a subreddit to enable flair", null, {
							hk: "1LNvTq"
						}),
						onClick: O,
						toggled: k,
						addModifierTooltip: d.fbt._("Add flair", null, {
							hk: "1RHLMM"
						}),
						removeModifierTooltip: d.fbt._("Change or remove flair", null, {
							hk: "34t9cQ"
						}),
						backgroundColor: j,
						textColor: S,
						Icon: Hn,
						style: {
							"--flairColor": k ? Object(It.c)({
								...this.props,
								backgroundColor: j,
								textColor: S
							}) : !t || l ? _.newCommunityTheme.actionIconTinted80 : _.newCommunityTheme.actionIcon
						},
						text: o.a.createElement(o.a.Fragment, null, u ? o.a.createElement(Gn, {
							flair: u,
							forceSmallEmojis: !0
						}) : o.a.createElement(qn, null, d.fbt._("Flair", null, {
							hk: "4Dtvp0"
						})), o.a.createElement(Fn, {
							className: Dn.a.CaretIcon
						}))
					}), e === Ln && o.a.createElement(_n.a, {
						flairs: u ? [u] : [],
						modalId: Ln,
						onFlairChanged: this.handlePostFlairSelected,
						subredditId: r || ""
					})), o.a.createElement(et.a, {
						className: Dn.a.errorMessages,
						messages: x[p.ob.FLAIR]
					}), w && C && y && o.a.createElement(Rt, {
						onDoNotShowClick: this.handleOCDisclaimerDoNotShowClick
					}))
				}
			}
			var ss = $n(Object(_t.a)(ts(ns))),
				os = n("./src/reddit/icons/fonts/AddCollection/index.tsx"),
				rs = n("./src/reddit/icons/fonts/Plus/index.tsx"),
				is = n("./src/reddit/components/PostCreationForm/EduTooltips/CollectionButtonTooltip/index.m.less"),
				as = n.n(is);
			var cs = fn(e => o.a.createElement(en, {
					className: as.a.container,
					description: d.fbt._("Create a series of scheduled events or just group random things. Make something awesome.", null, {
						hk: "40PwoH"
					}),
					heroImagePath: `${V.a.assetPath}/img/collection-tooltip-hero@2x.png`,
					iconsExplanations: [{
						iconComponent: qt.a,
						text: d.fbt._("Compose a post like normal.", null, {
							hk: "466GER"
						})
					}, {
						iconComponent: os.a,
						text: d.fbt._("Create & name your collection.", null, {
							hk: "3BuZKz"
						})
					}, {
						iconComponent: rs.a,
						text: d.fbt._("Add more posts to your collection.", null, {
							hk: "2wzlHs"
						})
					}],
					isOpen: !0,
					isOverlayOff: !0,
					onClose: e.onCloseTooltip,
					title: d.fbt._("Create Collections!", null, {
						hk: "3tSmbj"
					}),
					tooltipId: Gt.g
				}), Gt.c),
				ds = n("./src/reddit/icons/svgs/Trash2/index.tsx"),
				ls = n("./src/reddit/components/PostCreationForm/ControlRow/ToggleDestCollectionButton/index.m.less"),
				us = n.n(ls);
			var ms = o.a.memo(e => {
					const {
						disabled: t,
						isToggled: n
					} = e, s = n ? ds.b : os.a;
					return o.a.createElement($e.q, {
						className: us.a.button,
						priority: $e.b.Plain,
						disabled: t,
						id: Gt.g,
						onClick: e.onClick,
						Icon: s
					}, o.a.createElement(Ft.a, {
						text: n ? d.fbt._("Cancel adding to collection", null, {
							hk: "359w09"
						}) : d.fbt._("Add to collection", null, {
							hk: "48nVCZ"
						})
					}), !n && o.a.createElement(cs, null))
				}),
				ps = n("./src/reddit/components/TrackingHelper/index.tsx"),
				hs = n("./src/reddit/actions/economics/predictions/index.ts"),
				bs = n("./src/reddit/hooks/usePageLayer.ts"),
				fs = n("./src/reddit/selectors/experiments/econ/predictions.ts"),
				gs = n("./src/reddit/selectors/features/predictions/tournaments/index.ts"),
				Cs = n("./src/higherOrderComponents/asModal/index.tsx");
			const {
				fbt: xs
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var Es = Object(Cs.a)((function({
					onClose: e
				}) {
					const [t, n] = Object(s.useState)(!1), i = Object(r.d)(), c = Object(r.e)(j.s), d = Object(r.e)(j.t), l = Object(bs.a)(), {
						subredditName: u
					} = (null == l ? void 0 : l.urlParams) || {}, p = Object(r.e)(e => Object(I.F)(e, u));
					return o.a.createElement(Re.a, {
						titleText: xs._("Prediction created", null, {
							hk: "1O6btq"
						}),
						bodyText: xs._("The prediction remains unpublished until the tournament begins. More predictions can be added at any time before the tournament ends.", null, {
							hk: "20T2xQ"
						}),
						onClose: e,
						primaryButtonText: xs._("Start Tournament", null, {
							hk: "ft2Io"
						}),
						primaryButtonLoading: t,
						onPrimaryAction: async () => {
							n(!0), i(Object(hs.b)({
								prediction: {
									formData: c,
									formState: d
								}
							})), await i(Object(hs.c)({
								subredditId: p
							})), n(!1), i(Object(a.q)()), i(Object(hs.l)()), i(Object(m.b)(`/r/${u}/predictions/`))
						},
						onSecondaryAction: () => {
							i(Object(hs.b)({
								prediction: {
									formData: c,
									formState: d
								}
							})), i(Object(a.q)()), i(Object(a.g)({
								submissionType: "poll"
							})), i(Object(a.v)(!0)), i(Object(a.j)({
								oldType: Q.a.GA,
								type: Q.a.Prediction
							})), e()
						},
						secondaryButtonText: xs._("Create Another", null, {
							hk: "pQB1L"
						})
					})
				})),
				vs = n("./src/reddit/components/PostCreationForm/ControlRow/AddTournamentPredictionButton/index.m.less"),
				_s = n.n(vs);
			const {
				fbt: Os
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function ys({
				className: e,
				disabled: t
			}) {
				const n = Object(r.d)(),
					i = Object(r.e)(j.s),
					c = Object(r.e)(j.t),
					[d, l] = Object(s.useState)(!1),
					[u, p] = Object(s.useState)(!1),
					h = Object(r.e)(j.x),
					b = Object(r.e)(j.w),
					f = Object(bs.a)(),
					g = Object(r.e)(e => Object(yt.n)(e, {
						pageLayer: f
					})),
					C = Object(r.e)(e => Object(I.T)(e, {
						subredditId: g
					})),
					x = Object(r.e)(e => Object(gs.b)(e, {
						subredditId: g
					})),
					E = Object(r.e)(fs.b);
				return o.a.createElement(o.a.Fragment, null, o.a.createElement($e.i, {
					disabled: u || t || !h || !b,
					onClick: () => {
						x && !E ? (async () => {
							p(!0), n(Object(hs.b)({
								prediction: {
									formData: i,
									formState: c
								}
							})), await n(Object(hs.a)(x.tournamentId, g)), n(Object(a.q)()), n(Object(m.b)(`/r/${C.name}/predictions/`)), p(!1)
						})() : l(!0)
					},
					className: Object(ze.a)(_s.a.addTournamentPredictionButton, e)
				}, u ? o.a.createElement(tt.a, {
					sizePx: 16
				}) : x ? Os._("Post", null, {
					hk: "12GkA5"
				}) : Os._("Next", null, {
					hk: "2m41ub"
				})), d && o.a.createElement(Es, {
					onClose: () => l(!1)
				}))
			}
			var ks = n("./src/reddit/components/PostCreationForm/ControlRow/index.m.less"),
				js = n.n(ks);
			const Ss = () => d.fbt._("Post", null, {
					hk: "47QFCY"
				}),
				Is = () => d.fbt._("Cancel", null, {
					hk: "2TSLl5"
				}),
				Ts = () => d.fbt._("Saved!", null, {
					hk: "34qXtS"
				}),
				ws = () => d.fbt._("Save Draft", null, {
					hk: "3wckxd"
				}),
				Ps = () => d.fbt._("Updated!", null, {
					hk: "45fGGU"
				}),
				Ns = () => d.fbt._("Update draft", null, {
					hk: "1c8tCb"
				}),
				Ms = () => d.fbt._("Please fix the above requirements", null, {
					hk: "17Yk98"
				}),
				Ds = () => d.fbt._("Something went wrong. Just don't panic.", null, {
					hk: "4x2ypi"
				}),
				Ls = 10,
				Rs = Je.a.wrapped(ot.a, "Container", js.a),
				Fs = e => {
					return [p.Lb.LINK_ONLY, p.Lb.POLL, p.Lb.POST].includes(e)
				},
				As = Je.a.div("ButtonsAndErrors", js.a),
				Bs = Je.a.wrapped(ot.a, "ButtonRow", js.a),
				Us = Je.a.div("ButtonLayout", js.a),
				Vs = Je.a.div("SaveDraftButtonLayout", js.a),
				Ws = Je.a.wrapped(tt.a, "PostLoadingIcon", js.a),
				Gs = Je.a.wrapped(Ws, "DraftLoadingIcon", js.a),
				Hs = Je.a.wrapped(Qe.a, "Token", js.a),
				qs = Object(i.a)(j.eb, U.a.getMediaCount),
				Ks = (e, t) => {
					return !!!Object(_.j)(e, t) && e.creations.formData.isPoll
				},
				zs = [],
				Js = e => {
					const t = Object(j.eb)(e),
						n = Object(j.kb)(e);
					if (!t.isBound || n !== p.Lb.POST || !Object(j.gb)(e)) return zs;
					const s = (e => {
						const {
							allowedPostTypes: t,
							name: n
						} = Object(j.h)(e), s = qs(e);
						if (!s || !t) return null;
						let o = "";
						return !s.total || t.images || t.videos ? s.video && !t.videos ? o = d.fbt._("Videos are not allowed in r/{subreddit name}", [d.fbt._param("subreddit name", n)], {
							hk: "1EUr31"
						}) : !s.image && !s.gifvideo || t.images || (o = d.fbt._("Images are not allowed in r/{subreddit name}", [d.fbt._param("subreddit name", n)], {
							hk: "2pxaRa"
						})) : o = d.fbt._("Videos and images are not allowed in r/{subreddit name}", [d.fbt._param("subreddit name", n)], {
							hk: "3AMcQ8"
						}), o || null
					})(e);
					return s ? [s] : (e => {
						const t = qs(e);
						if (!t) return zs;
						const n = [];
						return t.image > p.T && n.push(d.fbt._("Post may not contain more that 20 images", null, {
							hk: "1Szc36"
						})), t.video + t.gifvideo > p.W && n.push(d.fbt._("Post may not contain more that 5 videos", null, {
							hk: "2WhZ8k"
						})), n
					})(e)
				},
				Ys = (e, {
					sourcePostId: t
				}) => {
					const n = Object(j.ib)(e, {
							sourcePostId: t
						}),
						{
							allowedPostTypes: s,
							id: o,
							isProfile: r,
							name: i
						} = Object(j.h)(e);
					if (!t) return d.fbt._("A source post is required to crosspost", null, {
						hk: "2TeLDw"
					});
					if (!o) return d.fbt._("A destination community is required to crosspost", null, {
						hk: "3haidF"
					});
					const a = r ? Object(T.db)(e, {
						userId: o
					}) : o;
					if (a) {
						if (((e, t, n) => {
								const s = Object(ct.a)(n, {
										sort: "new",
										crossposts_only: !0
									}),
									o = e.subreddits.duplicates.models[t];
								return !(o && o[s])
							})(e, a, t)) return d.fbt._("Checking community...", null, {
							hk: "1ycXCe"
						});
						if (((e, t, n) => {
								const s = ((e, t, n) => {
									const s = e.subreddits.duplicates.models[t];
									return s ? s[n] : []
								})(e, t, Object(ct.a)(n, {
									sort: "new",
									crossposts_only: !0
								}));
								return 0 !== s.length && Object(dt.v)(e, s[0])
							})(e, a, t)) return d.fbt._("This community has the same crosspost within last 24 hours", null, {
							hk: "177pgf"
						})
					}
					if (!s || !n) return null;
					if (n.source) return !s.links && d.fbt._("This community does not allow for crossposting of link posts", null, {
						hk: "2cZPxJ"
					});
					const {
						isCrosspostableSubreddit: c
					} = Object(I.x)(e, {
						subredditName: i
					});
					if (!c) return d.fbt._("This community does not allow for crossposting of any posts", null, {
						hk: "2KrrAO"
					});
					switch (n.media && n.media.type) {
						case rt.o.TEXT:
						case rt.o.RTJSON:
							return !s.text && d.fbt._("This community does not allow for crossposting of text posts", null, {
								hk: "1a4voI"
							});
						case rt.o.IMAGE:
							return !s.images && d.fbt._("This community does not allow for crossposting of image posts", null, {
								hk: "tGzk7"
							});
						case rt.o.VIDEO:
						case rt.o.GIFVIDEO:
						case rt.o.EMBED:
							return !s.videos && d.fbt._("This community does not allow for crossposting of video posts", null, {
								hk: "w6HED"
							})
					}
					return null
				},
				Zs = (e, {
					sourcePostId: t
				}) => {
					const n = Object(j.U)(e),
						s = Object(j.eb)(e),
						o = Object(j.kb)(e);
					if (o === p.Lb.IMAGE_ONLY) return !1;
					if (!Object(j.h)(e).name || !Object(j.D)(e)) return !1;
					if (o === p.Lb.POST || o === p.Lb.POLL) {
						const t = Js(e),
							n = !U.a.isAllMediaUploaded(s, e.uploads);
						return !t.length && !n
					}
					if (o === p.Lb.MEDIA) {
						const {
							items: t
						} = n, s = t.every(t => {
							const n = e.uploads[t.uploadKey];
							return !(!n || !n.url || n.status !== it.a.SUCCESS)
						});
						return t.length > 0 && s
					}
					return o === p.Lb.LINK_ONLY ? Object(j.y)(e) : o === p.Lb.CROSSPOST && !Ys(e, {
						sourcePostId: t
					})
				},
				Qs = Object(i.c)({
					isPoll: Ks,
					activeModalId: y.a,
					currentSubredditOrProfile: _.o,
					canPostAsModerator: j.e,
					currentCollection: _.f,
					errorMsgs: (e, {
						sourcePostId: t
					}) => {
						if (Object(j.u)(e)) return Object(j.o)(e);
						if (t) {
							const n = Ys(e, {
								sourcePostId: t
							});
							if (n) return [n]
						}
						return Js(e)
					},
					eventSchedule: j.p,
					hasDraftError: S.f,
					hasError: j.u,
					hasSubmitValidationError: j.v,
					destSubreddit: j.h,
					destSubredditAboutInfo: j.g,
					isAddingToTournament: (e, {
						subredditId: t
					}) => !!t && Object(j.E)(e, {
						subredditId: t
					}),
					isChatPostSelected: j.G,
					isContestMode: j.H,
					isCreatingTournamentPrediction: (e, {
						subredditId: t
					}) => !!t && Object(j.I)(e, {
						subredditId: t
					}),
					isDraftsFeatureEnabled: (e, t) => !Ks(e, t),
					isDraftPending: S.g,
					isMediaUploadPending: j.V,
					isModeratorSomewhere: at.i,
					isPostAsMetaMod: j.O,
					isPostPending: j.mb,
					isPostSubmitEnabled: Zs,
					isSaveDraftEnabled: e => {
						const t = Object(j.kb)(e);
						if (!p.D.has(t) || !Object(j.F)(e)) return !1;
						const n = Object(j.h)(e),
							s = Object(j.n)(e),
							o = t === p.Lb.LINK_ONLY && Object(j.y)(e),
							r = t === p.Lb.POST && s === f.h.RICH_TEXT && Object(j.C)(e),
							i = t === p.Lb.POST && s === f.h.MARKDOWN && Object(j.z)(e),
							a = o || r || i;
						return !!n.name || Object(j.D)(e) || a
					},
					isScheduledPost: j.Q,
					postSchedule: j.bb,
					postToTwitter: j.db,
					isEditingScheduledPost: e => !!Object(pe.r)(e),
					showContributorRequestFlow: e => Object(I.r)(e, g.e.Post),
					showScheduledPosts: j.hb,
					stickyPosition: j.jb,
					submissionType: j.a,
					submitMode: j.lb,
					subredditGovMeta: e => {
						const t = Object(j.h)(e);
						if (t && t.id) return e.subreddits.gov.meta[t.id]
					},
					suggestedSort: j.ob
				}),
				Xs = Object(_.t)(),
				$s = Object(r.b)(Qs, e => ({
					onResetDestCollection: () => e(we.c()),
					onScheduledPostSettingsChange: t => e(a.A(t)),
					onTrackCancelButtonClick: () => {
						e((e, t) => O.a(t()))
					},
					openCollectionsListOrCreationModal: t => e(a.l(t)),
					togglePostSchedulePicker: () => e(a.x(f.n)),
					clickPostSchedule: () => {
						e((e, t) => Object(D.a)(Object(ue.i)()(t())))
					}
				})),
				eo = 2e3,
				to = e => e ? d.fbt._("Update", null, {
					hk: "3MoYFL"
				}) : d.fbt._("Schedule", null, {
					hk: "4bXWUG"
				});
			class no extends o.a.Component {
				constructor() {
					super(...arguments), this.isSavedTimer = null, this.state = {
						draftId: null,
						isSaved: !1
					}, this.onCancel = () => {
						this.props.onTrackCancelButtonClick(), this.props.onCancel()
					}, this.handleDestCollectionClick = () => {
						const {
							currentCollection: e,
							onResetDestCollection: t,
							currentSubredditOrProfile: n,
							openCollectionsListOrCreationModal: s,
							sendEvent: o
						} = this.props;
						if (e) return t();
						n && (s(n.id), o(Object(rn.b)(void 0, rn.a.collectionComposer)))
					}, this.shouldDisablePostButton = () => {
						const {
							contributorRequestPending: e,
							hasSubmitValidationError: t,
							isDraftPending: n,
							isMediaUploadPending: s,
							isPostPending: o,
							isPostSubmitEnabled: r
						} = this.props;
						return !r || n || o || s || this.state.isSaved || t || e
					}, this.shouldDisablePostScheduleButton = () => {
						const {
							eventSchedule: e,
							postToTwitter: t,
							submissionType: n
						} = this.props;
						return !!e || t || !Fs(n)
					}, this.openPostSchedulePickerModal = () => {
						this.props.togglePostSchedulePicker(), this.props.clickPostSchedule()
					}
				}
				UNSAFE_componentWillReceiveProps(e) {
					!this.props.isDraftPending || e.isDraftPending || e.hasDraftError || this.setState({
						isSaved: !0,
						draftId: this.props.draftId
					}, () => {
						this.isSavedTimer = window.setTimeout(() => {
							this.isSavedTimer = null, this.setState({
								isSaved: !1,
								draftId: null
							})
						}, eo)
					})
				}
				componentWillUnmount() {
					this.isSavedTimer && (clearTimeout(this.isSavedTimer), this.isSavedTimer = null)
				}
				getSaveDraftButtonText() {
					const {
						draftId: e
					} = this.props, {
						isSaved: t,
						draftId: n
					} = this.state;
					return t ? n ? Ps() : Ts() : e ? Ns() : ws()
				}
				render() {
					const {
						activeModalId: e,
						canPostAsModerator: t,
						currentCollection: n,
						className: r,
						destSubreddit: i,
						destSubredditAboutInfo: a,
						hasError: c,
						hasSubmitValidationError: l,
						isEditingScheduledPost: u,
						errorMsgs: m,
						isAddingToTournament: h,
						isContestMode: b,
						isCreatingTournamentPrediction: C,
						isDraftsFeatureEnabled: x,
						isDraftPending: E,
						isPoll: v,
						isMediaUploadPending: _,
						isPostAsMetaMod: O,
						isPostPending: y,
						isSaveDraftEnabled: k,
						isScheduledPost: j,
						onPostFieldValidation: S,
						onScheduledPostSettingsChange: I,
						onSaveDraft: T,
						onSubmit: w,
						postSchedule: P,
						sendEvent: N,
						showContributorRequestFlow: M,
						showScheduledPosts: D,
						stickyPosition: L,
						submissionType: R,
						submitMode: F,
						subredditGovMeta: A,
						suggestedSort: B,
						togglePostSchedulePicker: U
					} = this.props, {
						isSaved: V
					} = this.state, W = E || y || _, G = F === f.q.Post && _, H = F === f.q.Draft && _, {
						collectionsEnabled: q = !1
					} = a || {}, K = W, z = Object(ze.a)(js.a.ButtonLayout, {
						[js.a.autoWidth]: v || M || D
					}), J = C || h;
					return o.a.createElement(Rs, {
						className: r
					}, o.a.createElement(ss, {
						className: js.a.postModifiers,
						disabled: W,
						onPostFieldValidation: S
					}), o.a.createElement(As, null, o.a.createElement(Bs, null, o.a.createElement("div", {
						className: z
					}, M ? o.a.createElement(Ze.default, {
						eventSource: g.b.PostSubmission,
						smallButton: !0
					}) : J ? o.a.createElement(ys, {
						disabled: this.shouldDisablePostButton()
					}) : o.a.createElement(mt, {
						disabled: this.shouldDisablePostButton(),
						onClick: w,
						className: Object(ze.a)(D && js.a.removeRightBorderRadius)
					}, y || G ? o.a.createElement(Ws, {
						sizePx: Ls
					}) : o.a.createElement(s.Fragment, null, v && A && A.polls && A.polls.price && i.id ? o.a.createElement(s.Fragment, null, Ss(), o.a.createElement(Hs, {
						subredditId: i.id
					}), Object(Ye.a)(A.polls.price)) : j ? to(u) : Ss())), D && !J && o.a.createElement(mt, {
						title: d.fbt._("Make a scheduled post", null, {
							hk: "3TBSMs"
						}),
						disabled: this.shouldDisablePostScheduleButton(),
						onClick: this.openPostSchedulePickerModal,
						className: js.a.postScheduleButton,
						Icon: P ? Object($e.r)(st.a, js.a.postScheduleIcon) : Object($e.r)(nt.a, js.a.postScheduleIcon)
					})), e === f.n && o.a.createElement(Xe.a, {
						isContestMode: b,
						isPostAsMetaMod: O,
						sendEvent: N,
						schedule: P,
						stickyPosition: L,
						suggestedSort: B,
						onChange: I,
						onClose: U
					}), x && R !== p.Lb.MEDIA && R !== p.Lb.POLL && !j ? o.a.createElement(Vs, null, o.a.createElement(pt, {
						disabled: !k || W || V,
						onClick: T
					}, E || H ? o.a.createElement(Gs, {
						sizePx: Ls
					}) : this.getSaveDraftButtonText())) : o.a.createElement(Us, null, o.a.createElement(pt, {
						disabled: W || V,
						onClick: this.onCancel
					}, Is())), q && t && o.a.createElement(ms, {
						disabled: K,
						isToggled: !!n,
						onClick: this.handleDestCollectionClick
					})), o.a.createElement(vt, null), !!(c || m.length || l) && o.a.createElement(et.a, {
						className: js.a.errorMessages,
						messages: m,
						fallbackMessage: l ? Ms() : Ds()
					})))
				}
			}
			var so = Xs($s(Object(ps.c)(no))),
				oo = n("./src/reddit/components/PostCreationForm/CreateOrEditCollectionModal/index.tsx"),
				ro = n("./src/reddit/constants/posts.ts"),
				io = n("./src/reddit/controls/SubredditPicker/index.tsx"),
				ao = n("./src/reddit/controls/SubredditPicker/helpers.ts"),
				co = n("./src/reddit/components/PostCreationForm/CreationControls/index.m.less"),
				lo = n.n(co);
			const uo = Je.a.wrapped(io.a, "SubredditPicker", lo.a),
				mo = Je.a.wrapped(ot.a, "ControlRow", lo.a),
				po = Object(i.a)(j.h, y.a, j.X, T.i, _.q, T.B, (e, t, n, s, o, r) => {
					const i = n && !t ? n : e;
					if (!i || !i.name) return Object(ao.b)("", null, null, r);
					const {
						name: a,
						isProfile: c
					} = i;
					return c ? Object(ao.b)(Object(Y.d)(a), null, s, r) : Object(ao.b)(Object(Y.c)(a), o, null, r)
				}),
				ho = Object(i.c)({
					pending: j.Z,
					pickerValue: po
				}),
				bo = Object(r.b)(ho, (e, {
					draftId: t,
					pageLayer: n
				}) => ({
					onSubredditChangeRequested: t => e(we.b(t, n)),
					onTrackSubredditPickerClick: () => e((e, t) => O.w(t()))
				}));
			class fo extends o.a.PureComponent {
				constructor() {
					super(...arguments), this.inputRef = null, this.onSelectSubreddit = e => {
						const {
							rawString: t,
							record: n
						} = e, s = {
							name: n && n.name || Object(Y.g)(t),
							isProfile: n && n.type === ro.a.PROFILE || Object(Y.f)(t),
							allowedPostTypes: n && n.allowedPostTypes
						};
						this.props.onSubredditChangeRequested(s)
					}, this.setInputRef = e => this.inputRef = e
				}
				render() {
					return o.a.createElement(mo, null, o.a.createElement(uo, {
						allowCrosspostableOnly: this.props.allowCrosspostableOnly,
						disabled: this.props.pending,
						includeUserProfile: this.props.includeUserProfile,
						inputRef: this.setInputRef,
						onSelect: this.onSelectSubreddit,
						onFocus: this.props.onTrackSubredditPickerClick,
						selectOnBlur: !0,
						value: this.props.pickerValue
					}))
				}
			}
			var go = Object(_.t)({
					draftId: _.u,
					pageLayer: e => e
				})(bo(fo)),
				Co = n("./node_modules/lodash/range.js"),
				xo = n.n(Co),
				Eo = n("./src/reddit/icons/svgs/Close/index.tsx"),
				vo = n("./src/lib/timeAgo/index.ts"),
				_o = n("./src/reddit/controls/MetaSeparator/index.tsx"),
				Oo = n("./src/reddit/icons/fonts/Expandos/Media/Video/index.tsx"),
				yo = n("./src/reddit/icons/fonts/Link/index.tsx"),
				ko = n("./src/reddit/icons/fonts/Photos/index.tsx"),
				jo = n("./src/reddit/icons/fonts/Text/index.tsx"),
				So = n("./src/reddit/models/PostDraft/index.ts"),
				Io = n("./src/reddit/components/PostCreationForm/DraftListModal/DraftListItem/Icon.m.less"),
				To = n.n(Io);
			const wo = {
				[So.b.Image]: ko.a,
				[So.b.Link]: yo.a,
				[So.b.Markdown]: jo.a,
				[So.b.RichText]: jo.a,
				[So.b.Video]: Oo.a
			};
			var Po = Je.a.wrapped(e => {
					const {
						draftKind: t,
						...n
					} = e, s = wo[t] || yo.a;
					return o.a.createElement(s, n)
				}, "Component", To.a),
				No = n("./src/reddit/components/PostCreationForm/DraftListModal/DraftListItem/index.m.less"),
				Mo = n.n(No);
			const Do = Je.a.div("Container", Mo.a),
				Lo = Je.a.div("LeftBlock", Mo.a),
				Ro = Je.a.div("Content", Mo.a),
				Fo = Je.a.div("RightBlock", Mo.a),
				Ao = Je.a.h2("PostTitle", Mo.a),
				Bo = Je.a.wrapped(Ao, "EditingPostTitle", Mo.a),
				Uo = Je.a.div("MetaLine", Mo.a),
				Vo = Je.a.span("SubredditName", Mo.a),
				Wo = Je.a.time("DraftSavedTime", Mo.a),
				Go = Je.a.wrapped(ds.b, "TrashIcon", Mo.a),
				Ho = Je.a.div("InteractiveDiv", Mo.a),
				qo = Je.a.button("ConfirmDelete", Mo.a),
				Ko = Object(i.c)({
					isDraftDeletionPending: (e, {
						draft: {
							id: t
						}
					}) => Object(S.a)(e, t),
					subreddit: (e, {
						draft: {
							subredditId: t
						}
					}) => t ? Object(I.T)(e, {
						subredditId: t
					}) : void 0,
					user: T.i
				}),
				zo = Object(r.b)(Ko, (e, {
					pageLayer: t
				}) => ({
					deleteDraft: n => e(F.o(n, t))
				})),
				Jo = Object(_.t)({
					currentDraftId: _.u,
					pageLayer: e => e
				}),
				Yo = 1e3;
			class Zo extends o.a.Component {
				constructor() {
					super(...arguments), this.state = {
						showConfirmText: !1
					}, this.onClick = () => {
						this.props.onClick(this.props.draft.id)
					}, this.onConfirmClick = e => {
						e.stopPropagation(), this.props.deleteDraft(this.props.draft.id)
					}, this.onTrashCanClick = e => {
						e.stopPropagation(), this.setState({
							showConfirmText: !0
						})
					}
				}
				render() {
					const {
						draft: e,
						currentDraftId: t,
						isDraftDeletionPending: n,
						subreddit: s,
						user: r
					} = this.props, i = s && Object(Tn.g)(s) && r ? {
						displayText: Object(Y.d)(Object(me.e)(r)),
						url: `/user/${Object(me.e)(r)}/`
					} : s;
					if (n) return null;
					const a = e.title || d.fbt._("Untitled", null, {
						hk: "2gEXjp"
					});
					return o.a.createElement(Do, {
						onClick: this.onClick
					}, o.a.createElement(Lo, null, o.a.createElement(Po, {
						draftKind: e.kind
					})), o.a.createElement(Ro, null, t === e.id ? o.a.createElement(Bo, {
						"data-redditstyle": !0
					}, d.fbt._("EDITING: {postTitle}", [d.fbt._param("postTitle", a)], {
						hk: "3M5MUj"
					})) : o.a.createElement(Ao, {
						"data-redditstyle": !0
					}, a), o.a.createElement(Uo, {
						"data-redditstyle": !0
					}, i && o.a.createElement(Vo, {
						"data-redditstyle": !0
					}, i.displayText), i && o.a.createElement(_o.b, null), o.a.createElement(Wo, null, d.fbt._("Draft saved {draftSavedAtTime}", [d.fbt._param("draftSavedAtTime", Object(vo.d)((e.modified || e.created) / Yo))], {
						hk: "2HjAWY"
					})))), o.a.createElement(Fo, null, this.state.showConfirmText ? o.a.createElement(qo, {
						onClick: this.onConfirmClick,
						"data-redditstyle": !0
					}, t === e.id ? d.fbt._("Delete working draft?", null, {
						hk: "2iGoUj"
					}) : d.fbt._("Confirm", null, {
						hk: "2bjb66"
					})) : o.a.createElement(Ho, {
						onClick: this.onTrashCanClick
					}, o.a.createElement(Go, {
						"data-redditstyle": !0
					}))))
				}
			}
			var Qo = Jo(zo(Zo)),
				Xo = n("./src/reddit/helpers/styles/mixins/loading.ts"),
				$o = n("./src/reddit/components/PostCreationForm/DraftListModal/DraftListItem/Placeholder.m.less"),
				er = n.n($o);
			const tr = Je.a.div("Container", er.a),
				nr = Je.a.div("LeftBlock", er.a),
				sr = Je.a.div("Content", er.a),
				or = Je.a.div("MediaIcon", er.a),
				rr = Je.a.div("Title", er.a),
				ir = Je.a.div("Secondary", er.a);
			var ar = ({
					className: e,
					isLoading: t
				}) => o.a.createElement(tr, {
					className: e,
					"data-redditstyle": !0
				}, o.a.createElement(nr, null, o.a.createElement(or, {
					className: Object(Xo.a)({
						isLoading: t
					}),
					"data-redditstyle": !0
				})), o.a.createElement(sr, null, o.a.createElement(rr, {
					className: Object(Xo.b)({
						isLoading: t
					}),
					"data-redditstyle": !0
				}), o.a.createElement(ir, {
					className: Object(Xo.b)({
						isLoading: t
					}),
					"data-redditstyle": !0
				}))),
				cr = n("./src/reddit/components/PostCreationForm/DraftListModal/index.m.less"),
				dr = n.n(cr);

			function lr() {
				return (lr = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: ur
			} = n("./node_modules/fbt/lib/FbtPublic.js"), mr = `${V.a.assetPath}/img/snoo-drafts.png`, pr = 3, hr = Je.a.div("Wrapper", dr.a), br = Je.a.div("TitleRow", dr.a), fr = Je.a.span("DraftsNumber", dr.a), gr = Je.a.div("DetailsContainer", dr.a), Cr = Je.a.wrapped(ot.a, "ButtonRow", dr.a), xr = Je.a.wrapped($e.l, "CancelButton", dr.a), Er = Je.a.div("CloseWrapper", dr.a), vr = Je.a.wrapped(Eo.a, "Close", dr.a), _r = Je.a.div("Empty", dr.a), Or = Je.a.img("EmptyImage", dr.a), yr = Je.a.p("EmptyText", dr.a), kr = Object(i.c)({
				drafts: S.c,
				isPending: S.b,
				maxDrafts: T.U
			}), jr = Object(r.b)(kr);
			class Sr extends o.a.PureComponent {
				constructor() {
					super(...arguments), this.handleEscapeKey = e => {
						e.keyCode === h.a.Escape && this.props.onClose()
					}, this.renderItem = e => o.a.createElement(Qo, {
						key: e.id,
						draft: e,
						onClick: () => this.props.onLoadDraft(e)
					})
				}
				componentDidMount() {
					document.addEventListener("keydown", this.handleEscapeKey)
				}
				componentWillUnmount() {
					document.removeEventListener("keydown", this.handleEscapeKey)
				}
				renderPlaceholder(e) {
					return o.a.createElement(ar, {
						isLoading: !0,
						key: e
					})
				}
				renderEmpty() {
					return o.a.createElement(_r, null, o.a.createElement(Or, {
						src: mr
					}), o.a.createElement(yr, null, ur._("Your drafts will live here", null, {
						hk: "NIEIr"
					})))
				}
				render() {
					const {
						drafts: e,
						isPending: t,
						maxDrafts: n
					} = this.props;
					let s;
					return s = t ? xo()(pr).map(this.renderPlaceholder) : 0 === e.length ? this.renderEmpty() : e.map(this.renderItem), o.a.createElement(hr, {
						"data-redditstyle": !0
					}, o.a.createElement(br, {
						"data-redditstyle": !0
					}, ur._("Drafts", null, {
						hk: "1fvOmI"
					}), o.a.createElement(fr, {
						"data-redditstyle": !0
					}, e.length, "/", n), o.a.createElement(Er, {
						onClick: this.props.onClose
					}, o.a.createElement(vr, {
						"data-redditstyle": !0
					}))), o.a.createElement(gr, null, s), o.a.createElement(Cr, {
						"data-redditstyle": !0
					}, o.a.createElement(xr, {
						onClick: this.props.onClose,
						"data-redditstyle": !0
					}, ur._("Close", null, {
						hk: "4gbyAA"
					}))))
				}
			}
			const Ir = Je.a.wrapped(Object(Cs.a)(jr(Sr)), "DraftListModal", dr.a);
			var Tr = e => o.a.createElement(Ir, lr({
					withOverlay: !0,
					onOverlayClick: e.onClose
				}, e)),
				wr = n("./src/lib/forceHttps/index.ts"),
				Pr = n("./src/reddit/components/PostCreationForm/SafeHarborText/index.m.less"),
				Nr = n.n(Pr);
			const {
				fbt: Mr
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Dr = new RegExp(`\\b(${[...rt.x].join("|")})\\.com$`, "i"), Lr = new RegExp(`\\.(${rt.w.join("|")})$`), Rr = Je.a.div("TextContainer", Nr.a);
			class Fr extends o.a.Component {
				constructor() {
					super(...arguments), this.isUrlScraped = e => {
						const t = Object(H.parse)(Object(wr.a)(e));
						return !(!t.hostname || !Dr.test(t.hostname)) || !(!t.pathname || !Lr.test(t.pathname))
					}
				}
				render() {
					return this.props.value && this.isUrlScraped(this.props.value) ? o.a.createElement(Rr, null, Mr._("Posting this link saves the image or gif to Reddit", null, {
						hk: "1zFV82"
					})) : null
				}
			}
			var Ar = n("./node_modules/react-autosize-textarea/lib/index.js"),
				Br = n.n(Ar),
				Ur = n("./src/reddit/controls/GrowingOutlinedInput/index.m.less"),
				Vr = n.n(Ur);

			function Wr() {
				return (Wr = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			class Gr extends o.a.Component {
				constructor(e) {
					super(e), this.innerRef = null, this.focused = !1, this.setInnerRef = e => {
						this.innerRef = e, this.props.textareaRef && this.props.textareaRef(e)
					}, this.handleOnValueChange = () => {
						this.props.onValueChange && this.props.onValueChange(this.state.value)
					}, this.onFocus = e => {
						this.focused = !0, this.props.onFocus && this.props.onFocus(e)
					}, this.onBlur = e => {
						this.focused = !1, this.props.onBlur && this.props.onBlur(e)
					}, this.onChange = e => {
						if (this.innerRef) {
							const e = this.innerRef.value.replace(/\n/g, " ");
							this.setState(() => ({
								value: e
							}), this.handleOnValueChange)
						}
						this.props.onChange && this.props.onChange(e)
					}, this.onKeyPress = e => {
						13 === e.which && e.preventDefault(), this.props.onKeyPress && this.props.onKeyPress(e)
					}, this.state = {
						value: e.value || ""
					}
				}
				componentWillReceiveProps(e) {
					this.focused || this.state.value === e.value || this.setState({
						value: e.value
					})
				}
				render() {
					const {
						value: e
					} = this.state, {
						className: t,
						onValueChange: n,
						textareaRef: s,
						minHeight: r,
						...i
					} = this.props;
					return o.a.createElement(Br.a, Wr({}, i, {
						className: Object(ze.a)(Vr.a.growingOutlinedInput, t),
						style: {
							minHeight: r
						},
						innerRef: this.setInnerRef,
						onFocus: this.onFocus,
						onBlur: this.onBlur,
						onChange: this.onChange,
						onKeyPress: this.onKeyPress,
						value: e
					}))
				}
			}
			var Hr = n("./src/reddit/components/PostCreationForm/LinkEditor/index.m.less"),
				qr = n.n(Hr);
			const Kr = Object(i.c)({
					pending: j.Z,
					postCreationFieldErrors: Pn,
					subreddit: _.q,
					value: j.S
				}),
				zr = Object(r.b)(Kr, (e, {
					onChange: t,
					onPostFieldValidation: n,
					pageLayer: s
				}) => ({
					onBlur: () => {
						n(e(St(p.ob.LINK, s)))
					},
					onChange: n => {
						e(a.p(n)), t(n)
					},
					onFocus: () => e((e, t) => O.n(t(), f.k.CLICK, f.l.URL))
				}));
			var Jr, Yr = Object(_.t)()(zr(e => {
					const {
						pending: t,
						postCreationFieldErrors: n,
						subreddit: s,
						value: r
					} = e, i = n[p.ob.LINK].length > 0;
					return o.a.createElement("div", null, o.a.createElement(Gr, {
						className: Object(ze.a)(qr.a.URLInput, {
							[qr.a.mHasError]: i
						}),
						placeholder: d.fbt._("Url", null, {
							hk: "4dfMY"
						}),
						value: r,
						onBlur: e.onBlur,
						onFocus: e.onFocus,
						onKeyDown: e.onKeyDown,
						onValueChange: e.onChange,
						readOnly: t
					}), o.a.createElement(et.a, {
						errorModalTitle: s ? Object(Y.c)(s.name) : void 0,
						messages: n[p.ob.LINK]
					}), o.a.createElement(Fr, {
						value: r
					}))
				})),
				Zr = n("./node_modules/lodash/clamp.js"),
				Qr = n.n(Zr),
				Xr = n("./node_modules/lodash/pickBy.js"),
				$r = n.n(Xr),
				ei = n("./src/lib/formatApiError/index.ts"),
				ti = n("./src/lib/objectSelector/index.ts"),
				ni = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./node_modules/lodash/isEqual.js")),
				si = n.n(ni),
				oi = n("./src/reddit/controls/Sortable/index.tsx"),
				ri = n("./src/reddit/hooks/useTracking.ts");
			! function(e) {
				e.RemoveGalleryItem = "REMOVE_GALLERY_ITEM", e.SelectGalleryItem = "SELECT_GALLERY_ITEM", e.SetGalleryItems = "SET_GALLERY_ITEMS", e.SetCaptionInput = "SET_CAPTION_INPUT", e.SetURLInput = "SET_URL_INPUT", e.SelectPrevMedia = "SELECT_PREV_MEDIA", e.SelectNextMedia = "SELECT_NEXT_MEDIA"
			}(Jr || (Jr = {}));
			var ii = n("./src/reddit/components/PostCreationForm/MediaInput/ImageGalleryDrop/constants.ts"),
				ai = n("./node_modules/lodash/upperFirst.js"),
				ci = n.n(ai),
				di = n("./src/reddit/icons/svgs/Hamster1/index.tsx"),
				li = n("./src/reddit/icons/svgs/Hamster2/index.tsx"),
				ui = n("./src/reddit/components/Gold/PowerupEntryTooltip/index.tsx"),
				mi = n("./src/reddit/components/PostCreationForm/MediaInput/DropArea/index.m.less"),
				pi = n.n(mi);
			const {
				fbt: hi
			} = n("./node_modules/fbt/lib/FbtPublic.js"), bi = [...Array.from(p.a), ...Array.from(p.b)].join(), fi = Je.a.input("HiddenInput", pi.a), gi = Je.a.wrapped($e.l, "UploadButton", pi.a), Ci = Je.a.wrapped(di.a, "HamsterSmall", pi.a), xi = Je.a.wrapped(li.a, "HamsterLarge", pi.a), Ei = Je.a.div("Container", pi.a), vi = Je.a.div("DropArea", pi.a), _i = Je.a.wrapped(vi, "DropAreaActive", pi.a), Oi = Je.a.wrapped(_i, "DropAreaOver", pi.a), yi = Je.a.p("Paragraph", pi.a), ki = Je.a.p("ErrorMsg", pi.a), ji = Je.a.div("Box", pi.a);
			class Si extends o.a.Component {
				constructor() {
					super(...arguments), this.hiddenInputEl = null, this.onFileInput = e => {
						this.props.onFileInput(e.currentTarget.files)
					}, this.clickUploadButton = () => this.hiddenInputEl && this.hiddenInputEl.click()
				}
				render() {
					const {
						isOver: e,
						canDrop: t,
						lastErrorMsg: n,
						allowMultiple: s,
						renderTooltip: r,
						tooltipId: i
					} = this.props;
					return o.a.createElement(Ei, null, o.a.createElement(fi, {
						innerRef: e => this.hiddenInputEl = e,
						onChange: this.onFileInput,
						type: "file",
						accept: bi,
						multiple: s
					}), e ? o.a.createElement(Oi, null, o.a.createElement(ji, null, o.a.createElement(xi, null), o.a.createElement(yi, null, hi._("Drop Here to Upload", null, {
						hk: "3e1xuE"
					})))) : t ? o.a.createElement(_i, null, o.a.createElement(ji, null, o.a.createElement(Ci, null), hi._("Drop Here to Upload", null, {
						hk: "3e1xuE"
					}))) : o.a.createElement(vi, null, r && o.a.createElement("div", {
						id: i
					}, o.a.createElement(ui.a, {
						tooltipId: i,
						offsetY: -20,
						width: 260,
						height: 40
					}, o.a.createElement("div", null, hi._("Unlock fast, HD video for videos you upload or link from other sites", null, {
						hk: "3BdUgW"
					})))), o.a.createElement(yi, null, hi._("Drag and drop {images} or {upload}", [hi._param("images", s ? "images" : ""), hi._param("upload", o.a.createElement(gi, {
						onClick: this.clickUploadButton
					}, hi._("Upload", null, {
						hk: "4dwHCO"
					})))], {
						hk: "2gpX4v"
					})), n && o.a.createElement(ki, null, ci()(n))))
				}
			}
			var Ii = n("./src/reddit/components/PostCreationForm/MediaInput/ImageGalleryDrop/components/AddImageItem.m.less"),
				Ti = n.n(Ii);

			function wi(e) {
				const {
					onClickEvent: t,
					onFileInput: n
				} = e, r = Object(s.useRef)(null), i = Object(s.useCallback)(() => {
					r && r.current && r.current.click(), t()
				}, [t, r]), a = Object(s.useCallback)(e => {
					n(e.currentTarget.files)
				}, [n]);
				return o.a.createElement("span", {
					className: Ti.a.AddImageWrapper
				}, o.a.createElement("input", {
					accept: bi,
					className: Ti.a.hiddenInput,
					multiple: !0,
					onChange: a,
					ref: r,
					type: "file"
				}), o.a.createElement("button", {
					className: Ti.a.AddImageItem,
					onClick: i
				}, o.a.createElement(Sn.a, {
					className: Ti.a.plusIcon
				})))
			}
			var Pi = n("./src/reddit/components/StructuredStyles/StyledComponents/navs.tsx"),
				Ni = n("./src/reddit/icons/svgs/Clear/index.tsx"),
				Mi = n("./src/reddit/components/PostCreationForm/MediaInput/ImageGalleryDrop/components/ImageItem.m.less"),
				Di = n.n(Mi);
			var Li = e => {
					const {
						canDrop: t,
						mediaUpload: n,
						isDragging: r,
						isOver: i,
						isSelected: a,
						mediaItem: c,
						removeGalleryItem: d,
						dispatch: l
					} = e, u = Object(s.useRef)(null), m = n.key, p = n.status === it.a.FAILED, h = Object(s.useCallback)(() => l((e => ({
						type: Jr.SelectGalleryItem,
						payload: {
							key: e
						}
					}))(m)), [l, m]), b = Object(s.useCallback)(e => {
						e.stopPropagation(), d(c)
					}, [d, c]), f = n.metadata.localUrl;
					return f ? o.a.createElement("span", {
						ref: u
					}, o.a.createElement(Pi.a, {
						canDrop: t,
						className: Object(ze.a)(Di.a.GalleryMediaUpload, {
							[Di.a.isDragging]: r,
							[Di.a.isSelected]: a,
							[Di.a.isError]: p
						}),
						isDragging: r,
						isOver: i
					}, o.a.createElement("span", {
						className: Object(ze.a)(Di.a.galleryImage, {
							[Di.a.isDragging]: r,
							[Di.a.isSelected]: a,
							[Di.a.isError]: p
						}),
						onClick: h,
						style: {
							backgroundImage: `url("${f}")`
						}
					}, o.a.createElement("button", {
						className: Object(ze.a)(Di.a.deleteButton, {
							[Di.a.isDragging]: r,
							[Di.a.showDeleteNormal]: !a,
							[Di.a.isError]: p
						}),
						onClick: b
					}, o.a.createElement(Ni.a, {
						className: Object(ze.a)(Di.a.deleteIcon, {
							[Di.a.isDragging]: r
						})
					}))))) : null
				},
				Ri = n("./src/reddit/components/PostCreationForm/MediaInput/ImageGalleryDrop/components/ImageItemsWrapper.m.less"),
				Fi = n.n(Ri);
			var Ai = e => {
					const {
						onRemoveUpload: t,
						dispatch: n,
						mediaState: r,
						uploads: i
					} = e, a = Object(ri.a)(), c = Object(s.useCallback)(() => a(O.j()), [a]), d = Object(s.useCallback)(e => {
						t(e.uploadKey), a(O.l())
					}, [a, t]);
					return o.a.createElement("div", {
						className: Fi.a.itemsWrapper
					}, o.a.createElement(oi.a, {
						className: Fi.a.sortableImages,
						values: r.items,
						getReactKey: e => e.uploadKey,
						render: (e, t, s, a, c) => {
							const l = i[e.uploadKey];
							if (!l) return null;
							if (Object(it.c)(l)) return o.a.createElement("span", {
								className: Object(ze.a)(Fi.a.pendingItem, Object(Xo.b)({
									isLoading: !0
								}))
							});
							const u = e.uploadKey === r.selectedKey;
							return o.a.createElement("span", {
								className: Fi.a.imageStyles
							}, a && o.a.createElement("span", {
								className: Fi.a.hoverMarker
							}), o.a.createElement(Li, {
								canDrop: c,
								dispatch: n,
								isDragging: s,
								isOver: a,
								isSelected: u,
								mediaItem: e,
								key: e.uploadKey,
								mediaUpload: l,
								removeGalleryItem: d
							}))
						},
						onDrop: (e, t, s) => {
							n((e => ({
								type: Jr.SetGalleryItems,
								payload: {
									items: e
								}
							}))(s))
						}
					}), r.items.length < ii.b && o.a.createElement(wi, {
						onClickEvent: c,
						onFileInput: e.onFileInput
					}))
				},
				Bi = n("./src/reddit/components/PostCreationForm/MediaInput/ImageGalleryDrop/components/InputWrapper.m.less"),
				Ui = n.n(Bi);
			var Vi = e => {
					const {
						uploads: t,
						galleryItem: n,
						isSelected: r,
						dispatch: i
					} = e, a = t[n.uploadKey], c = n.caption, l = n.url, u = Object(ri.a)(), m = Object(s.useCallback)(e => i((e => ({
						type: Jr.SetCaptionInput,
						payload: {
							input: e
						}
					}))(e)), [i]), p = Object(s.useCallback)(e => i((e => ({
						type: Jr.SetURLInput,
						payload: {
							input: e
						}
					}))(e)), [i]), h = Object(s.useCallback)(e => u(O.k(e)), [u]), b = Object(s.useCallback)(() => h(f.l.CAPTION), [h]), g = Object(s.useCallback)(() => h(f.l.OUTBOUND_URL), [h]), C = !r || !a || !a.url || Object(it.c)(a);
					return o.a.createElement("div", null, o.a.createElement("div", {
						className: Ui.a.inputWrapper
					}, o.a.createElement(Gr, {
						className: Ui.a.inputStyles,
						disabled: C,
						maxLength: ii.a,
						onFocus: b,
						onValueChange: m,
						placeholder: d.fbt._("Add a caption...", null, {
							hk: "1fOmKi"
						}),
						value: c
					}), o.a.createElement("div", {
						className: Ui.a.charsCounter
					}, c.length, "/", ii.a)), o.a.createElement("div", {
						className: Ui.a.inputWrapper
					}, o.a.createElement(Gr, {
						className: Object(ze.a)(Ui.a.inputStyles, Ui.a.urlInputStyles),
						disabled: C,
						onFocus: g,
						onValueChange: p,
						placeholder: d.fbt._("Add a link...", null, {
							hk: "Z6l9K"
						}),
						value: l
					})))
				},
				Wi = n("./src/reddit/components/PostCreationForm/MediaInput/ImageGalleryDrop/components/Layout.m.less"),
				Gi = n.n(Wi);
			var Hi = e => {
					const {
						heroSlot: t,
						mainContent: n,
						sideMetaContent: s,
						bottomContent: r
					} = e;
					return o.a.createElement("div", {
						className: Gi.a.Layout
					}, o.a.createElement("div", {
						className: Gi.a.hero
					}, t), n && o.a.createElement("div", {
						className: Gi.a.mainContent
					}, n), s && o.a.createElement("div", {
						className: Gi.a.sideMetaContent
					}, s), o.a.createElement("div", {
						className: Gi.a.bottomContent
					}, r))
				},
				qi = n("./src/reddit/components/PostCreationForm/MediaInput/ImageGalleryDrop/components/SelectedImage.m.less"),
				Ki = n.n(qi);
			var zi = e => {
					const {
						upload: t
					} = e, n = t.metadata.localUrl;
					return Object(it.c)(t) ? o.a.createElement("span", {
						className: Object(ze.a)(Ki.a.pendingImage, Object(Xo.b)({
							isLoading: !0
						}))
					}) : o.a.createElement("img", {
						className: Ki.a.selectedImage,
						src: n
					})
				},
				Ji = n("./src/reddit/components/ProgressBar/index.tsx"),
				Yi = n("./src/reddit/components/PostCreationForm/MediaInput/ImageGalleryDrop/MultipleUploadStatusBar/index.m.less"),
				Zi = n.n(Yi);
			const {
				fbt: Qi
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Xi = Je.a.div("ControlRow", Zi.a), $i = Je.a.div("Status", Zi.a);
			var ea = Je.a.wrapped(e => {
					const {
						progress: t
					} = e, n = t && t.percent || 0;
					return o.a.createElement("div", {
						className: e.className
					}, o.a.createElement(Ji.a, {
						percent: n,
						className: Zi.a.OuterDivProgressBar,
						innerBarClassName: Zi.a.ProgressBar
					}), o.a.createElement(Xi, null, o.a.createElement($i, {
						className: Zi.a.StatusText
					}, n < 100 ? Qi._("Image uploading in progress...", null, {
						hk: "n2dCj"
					}) : Qi._("Image uploading completed", null, {
						hk: "4ko42w"
					}))))
				}, "Component", Zi.a),
				ta = n("./src/reddit/components/PostCreationForm/MediaInput/ImageGalleryDrop/index.m.less"),
				na = n.n(ta);

			function sa(e) {
				const {
					canDrop: t,
					dispatch: n,
					isOver: r,
					mediaState: i,
					onFileInput: a,
					onRemoveUpload: c,
					uploads: l
				} = e, [u, m] = Object(s.useState)([]), p = i.selectedKey, h = i.items.length > 1, b = i.items.find(e => e.uploadKey === p), f = p && l[p], g = i.items.filter(e => {
					const t = l[e.uploadKey];
					return !!t && t.status === it.a.FAILED
				}).length, C = Object.values(l).filter(it.c);
				if (!si()(u, C))
					if (0 === C.length) m([]);
					else {
						const e = C.filter(e => !u.some(t => t.key === e.key));
						e.length > 0 && m([...u, ...e])
					} const x = u.length > 0,
					E = {
						percent: (() => {
							if (!x) return 0;
							let e = 0;
							return u.forEach(t => {
								const n = l[t.key];
								if (null == n || n && (n.status === it.a.CANCELED || n.status === it.a.FAILED || n.status === it.a.SUCCESS)) e += 100;
								else {
									const n = l[t.key].progress;
									e += n && n.percent || 0
								}
							}), e / u.length
						})(),
						uploaded: 0
					};
				return o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
					className: Object(ze.a)(na.a.dropArea, {
						[na.a.isDropAreaActive]: t,
						[na.a.isDropAreaOver]: r
					})
				}, o.a.createElement(Hi, {
					heroSlot: o.a.createElement(Ai, {
						mediaState: i,
						onFileInput: a,
						onRemoveUpload: c,
						uploads: l,
						dispatch: n
					}),
					mainContent: f && h && o.a.createElement(zi, {
						upload: f
					}),
					sideMetaContent: b && h && o.a.createElement(Vi, {
						dispatch: n,
						galleryItem: b,
						uploads: l,
						isSelected: !!p
					}),
					bottomContent: null
				})), x ? o.a.createElement(ea, {
					progress: E
				}) : null, !!g && o.a.createElement(et.a, {
					className: na.a.errorMessage,
					messages: [d.fbt._("Some files failed to upload, please remove or retry them", null, {
						hk: "3BP9AQ"
					})]
				}))
			}
			var oa = n("./src/reddit/components/RichTextEditor/DragController/helpers.ts"),
				ra = n("./src/reddit/components/ThumbnailSelector/index.tsx"),
				ia = n("./src/reddit/controls/FileDrop/index.tsx"),
				aa = n("./src/reddit/helpers/media/index.ts"),
				ca = n("./src/telemetry/models/Media.ts"),
				da = n("./src/reddit/components/MakeGifToggle/index.tsx"),
				la = n("./src/reddit/icons/svgs/ThumbnailSelect/index.tsx"),
				ua = n("./src/reddit/components/HTML5StreamPlayer/index.tsx"),
				ma = n("./src/reddit/components/PostCreationForm/MediaInput/MediaUpload/Preview/index.m.less"),
				pa = n.n(ma);
			const ha = Je.a.img("Img", pa.a),
				ba = Je.a.img("BlurImg", pa.a),
				fa = Je.a.wrapped(e => {
					const {
						className: t,
						url: n
					} = e;
					return o.a.createElement("div", {
						className: t
					}, o.a.createElement(ba, {
						src: n
					}), o.a.createElement(ha, {
						src: n
					}))
				}, "ImagePreview", pa.a),
				ga = Je.a.wrapped(e => {
					const {
						className: t,
						url: n,
						showControls: s,
						videoBlurImgSrc: r
					} = e;
					return o.a.createElement("div", {
						className: t
					}, o.a.createElement(ua.b, {
						shouldLoad: !1,
						shouldPause: !1,
						isGif: !1,
						otherSource: n,
						showControlBar: s,
						showSettingsIcon: !1,
						blurImageSrc: r
					}))
				}, "VideoPreview", pa.a);
			var Ca = Je.a.wrapped(e => {
					const {
						className: t,
						type: n,
						url: s,
						showControls: r,
						videoBlurImgSrc: i
					} = e;
					return o.a.createElement("div", {
						className: t
					}, "image" === n ? o.a.createElement(fa, {
						url: s
					}) : o.a.createElement(ga, {
						url: s,
						videoBlurImgSrc: i,
						showControls: r
					}))
				}, "Component", pa.a),
				xa = n("./src/reddit/components/PostCreationForm/MediaInput/MediaUpload/UploadStatusBar/index.m.less"),
				Ea = n.n(xa);
			const {
				fbt: va
			} = n("./node_modules/fbt/lib/FbtPublic.js"), _a = Je.a.div("ControlRow", Ea.a), Oa = Je.a.wrapped($e.o, "Button", Ea.a), ya = Je.a.div("Status", Ea.a);
			var ka = Je.a.wrapped(e => {
					const {
						name: t,
						progress: n,
						onCancel: s
					} = e, r = n && n.percent || 0;
					return o.a.createElement("div", {
						className: e.className
					}, o.a.createElement(Ji.a, {
						percent: r
					}), o.a.createElement(_a, null, o.a.createElement(ya, null, r < 100 ? va._("Uploading {fileName}", [va._param("fileName", t)], {
						hk: "1F1ZHh"
					}) : va._("Success!", null, {
						hk: "2SQAeu"
					})), r < 100 && o.a.createElement(Oa, {
						onClick: s
					}, va._("Cancel", null, {
						hk: "2TSLl5"
					}))))
				}, "Component", Ea.a),
				ja = n("./src/reddit/components/RichTextEditor/Toolbar/FormatterButton/index.tsx"),
				Sa = n("./src/reddit/components/PostCreationForm/MediaInput/MediaUpload/index.m.less"),
				Ia = n.n(Sa);
			const Ta = Je.a.div("Wrapper", Ia.a),
				wa = Je.a.div("Controls", Ia.a),
				Pa = Je.a.wrapped(ds.b, "Trash", Ia.a),
				Na = Je.a.wrapped(la.a, "ThumbnailSelect", Ia.a),
				Ma = ({
					isFilled: e,
					...t
				}) => o.a.createElement(Pa, t),
				Da = ({
					isFilled: e,
					...t
				}) => o.a.createElement(Na, t);

			function La(e) {
				const {
					isPostSubmitPending: t,
					mediaType: n,
					onCancelUpload: s,
					onRemove: r,
					upload: i
				} = e, a = i.metadata, {
					localUrl: c,
					videoFirstFrameUrl: l
				} = a, u = i.status, m = u === it.a.PENDING || u === it.a.UPLOADING, p = u === it.a.SUCCESS, h = !t;
				return o.a.createElement(Ta, null, m ? o.a.createElement(ka, {
					className: Ia.a.UploadStatusBar,
					name: i.file.name,
					progress: i.progress,
					onCancel: s
				}) : null, c ? o.a.createElement(Ca, {
					type: n,
					url: c,
					showControls: p,
					videoBlurImgSrc: l
				}) : null, p && o.a.createElement(wa, null, "video" === n && o.a.createElement(da.a, {
					disabled: !!e.makeGifDisableReason || !h,
					tooltip: e.makeGifDisableReason,
					on: e.isMakeGifToggleOn,
					onClick: e.onMakeGifToggle
				}), "video" === n && o.a.createElement(ja.a, {
					enabled: h,
					Icon: Da,
					tooltip: d.fbt._("Choose thumbnail", null, {
						hk: "2XlKfd"
					}),
					onClick: e.onShowThumbnailSelector
				}), o.a.createElement(ja.a, {
					enabled: h,
					Icon: Ma,
					tooltip: d.fbt._("Remove", null, {
						hk: "H42IB"
					}),
					onClick: r
				})))
			}
			var Ra = n("./src/reddit/components/PostCreationForm/MediaInput/RemovePrompt/index.m.less"),
				Fa = n.n(Ra);
			const Aa = "POST_CREATION_MEDIA_REMOVE_PROMPT_ID",
				Ba = Je.a.div("Wrapper", Fa.a),
				Ua = Je.a.wrapped(ot.a, "TitleRow", Fa.a),
				Va = Je.a.div("DetailsContainer", Fa.a),
				Wa = Je.a.wrapped(ot.a, "ButtonRow", Fa.a),
				Ga = Je.a.wrapped($e.l, "CancelButton", Fa.a),
				Ha = Je.a.wrapped($e.i, "ConfirmButton", Fa.a);
			var qa = Object(Cs.a)(e => {
					const {
						isVideo: t
					} = e;
					return o.a.createElement(Ba, null, o.a.createElement(Ua, null, t ? d.fbt._("Remove video?", null, {
						hk: "34eepe"
					}) : d.fbt._("Remove image?", null, {
						hk: "41e1Uy"
					})), o.a.createElement(Va, null, t ? d.fbt._("Are you sure you want to remove your video?", null, {
						hk: "smTuF"
					}) : d.fbt._("Are you sure you want to remove your image?", null, {
						hk: "Ci5LM"
					})), o.a.createElement(Wa, null, o.a.createElement(Ga, {
						onClick: e.onCanceled
					}, d.fbt._("Keep", null, {
						hk: "4gFSdj"
					})), o.a.createElement(Ha, {
						onClick: e.onConfirmed
					}, d.fbt._("Remove", null, {
						hk: "1Jdd3U"
					}))))
				}),
				Ka = n("./src/reddit/selectors/gold/powerups.ts"),
				za = n("./src/reddit/components/PostCreationForm/MediaInput/index.m.less"),
				Ja = n.n(za),
				Ya = n("./src/reddit/models/Gold/Powerups/index.ts");
			const Za = "MEDIA_POST_VIDEO_THUMBNAIL_SELECTOR_MODAL_ID",
				Qa = Object(_.t)(),
				Xa = Object(i.c)({
					isPowerupTooltipDisplayed: e => {
						const t = Object(j.h)(e).id,
							n = Ya.a.PostsImageUpload;
						return !!t && !Object(Ka.m)(e, {
							subredditId: t,
							benefit: n
						})
					},
					activeModalId: y.a,
					isPostPending: j.Z,
					uploads: Object(ti.a)(e => $r()(e.uploads, e => e.key.startsWith(N.a))),
					value: j.U,
					isImageGalleryCreationEnabled: j.L
				}),
				$a = Object(r.b)(Xa, e => ({
					onChange: t => e(a.d(t)),
					startMediaGalleryUploads: (t, n) => e(N.d(t, n)),
					removeUpload: t => e(Pe.i(t, !0)),
					toggleThumbnailModal: () => e(a.x(Za)),
					toggleRemovePrompt: () => e(a.x(Aa))
				})),
				ec = Je.a.div("Container", Ja.a),
				tc = (e, t, n) => {
					if (!e.length) return null;
					let s = e.findIndex(e => e.uploadKey === n);
					if (-1 === s) {
						const o = t.findIndex(e => e.uploadKey === n);
						s = Qr()(o - 1, 0, e.length - 1)
					}
					return e[s].uploadKey
				};
			class nc extends o.a.Component {
				constructor() {
					super(...arguments), this.onFileDrop = e => this.uploadMediaFiles(e, ca.FileSource.DragAndDrop), this.onFileInput = e => this.uploadMediaFiles(e, ca.FileSource.FileSelector), this.onRemoveUpload = e => {
						const {
							value: t
						} = this.props, {
							items: n,
							selectedKey: s
						} = t, o = n.filter(t => t.uploadKey !== e);
						this.props.onChange({
							...t,
							items: o,
							selectedKey: tc(o, n, s)
						}), this.props.removeUpload(e)
					}, this.onCancelSingleMediaUpload = () => {
						this.onRemoveUpload(this.getSingleUpload().key)
					}, this.handlePaste = e => {
						if (e.clipboardData) {
							const t = Object(oa.a)(e.clipboardData);
							t.length && (e.preventDefault(), e.stopPropagation(), this.uploadMediaFiles(t, ca.FileSource.Clipboard))
						}
					}, this.onRemoveConfirmed = () => {
						this.props.toggleRemovePrompt(), this.onRemoveUpload(this.getSingleUpload().key)
					}, this.onThumbnailSelect = e => {
						this.toggleThumbnailSelector();
						const {
							value: t
						} = this.props;
						if (!Object(f.v)(t)) return;
						const n = t.items[0],
							s = n.video;
						this.props.onChange({
							...t,
							items: [{
								...n,
								video: {
									...s,
									thumbnail: e
								}
							}]
						})
					}, this.toggleThumbnailSelector = () => {
						this.props.toggleThumbnailModal()
					}, this.onMakeGifToggle = () => {
						const {
							value: e
						} = this.props;
						if (!Object(f.v)(e)) return;
						const t = e.items[0],
							n = t.video;
						this.props.onChange({
							...e,
							items: [{
								...t,
								video: {
									...n,
									isMakeGif: !n.isMakeGif
								}
							}]
						})
					}, this.dispatchAction = e => {
						const {
							value: t
						} = this.props, n = function(e, t) {
							switch (t.type) {
								case Jr.SelectGalleryItem: {
									const {
										key: n
									} = t.payload;
									return {
										...e,
										selectedKey: n
									}
								}
								case Jr.SetGalleryItems: {
									const {
										items: n
									} = t.payload;
									return {
										...e,
										items: n
									}
								}
								case Jr.SetCaptionInput: {
									const {
										input: n
									} = t.payload, {
										selectedKey: s,
										items: o
									} = e;
									return s ? {
										...e,
										items: o.map(e => e.uploadKey === s ? {
											...e,
											caption: n
										} : e)
									} : e
								}
								case Jr.SetURLInput: {
									const {
										input: n
									} = t.payload, {
										selectedKey: s,
										items: o
									} = e;
									return s ? {
										...e,
										items: o.map(e => e.uploadKey === s ? {
											...e,
											url: n
										} : e)
									} : e
								}
								case Jr.SelectPrevMedia: {
									const {
										selectedKey: t,
										items: n
									} = e, s = n.findIndex(e => e.uploadKey === t);
									let o = -1 === s ? 0 : s - 1;
									return o < 0 && (o = n.length - 1), {
										...e,
										selectedKey: n[o].uploadKey
									}
								}
								case Jr.SelectNextMedia: {
									const {
										selectedKey: t,
										items: n
									} = e, s = n.findIndex(e => e.uploadKey === t), o = -1 === s ? 0 : (s + 1) % n.length;
									return {
										...e,
										selectedKey: n[o].uploadKey
									}
								}
								default:
									return e
							}
						}(t, e);
						this.props.onChange(n)
					}, this.renderDropArea = (e, t) => {
						const {
							isPostPending: n,
							value: s,
							isImageGalleryCreationEnabled: r,
							uploads: i
						} = this.props;
						if (!Object(f.v)(s) && r && s.items.length >= 1) return o.a.createElement(sa, {
							isOver: e,
							canDrop: t,
							dispatch: this.dispatchAction,
							mediaState: s,
							onFileInput: this.onFileInput,
							onRemoveUpload: this.onRemoveUpload,
							uploads: i
						}); {
							const i = this.getSingleUpload(),
								a = this.props.value.items[0],
								{
									isMakeGif: c = !1,
									makeGifDisableReason: d = null
								} = a && a.video || {},
								l = i && i.status === it.a.FAILED,
								u = i && l ? Object(ei.a)(i.error) : "",
								m = i && Object(aa.f)(i.metadata.mimetype);
							return s && m && i && !l ? o.a.createElement(La, {
								isPostSubmitPending: n,
								upload: i,
								mediaType: m,
								onRemove: this.props.toggleRemovePrompt,
								onCancelUpload: this.onCancelSingleMediaUpload,
								onShowThumbnailSelector: this.toggleThumbnailSelector,
								onMakeGifToggle: this.onMakeGifToggle,
								isMakeGifToggleOn: c,
								makeGifDisableReason: d
							}) : o.a.createElement(Si, {
								lastErrorMsg: u,
								isOver: e,
								canDrop: t,
								onFileInput: this.onFileInput,
								allowMultiple: r,
								tooltipId: "postCreation-powerupTooltip",
								renderTooltip: this.props.isPowerupTooltipDisplayed
							})
						}
					}
				}
				componentDidMount() {
					document.addEventListener("paste", this.handlePaste)
				}
				componentWillUnmount() {
					document.removeEventListener("paste", this.handlePaste)
				}
				getSingleUpload() {
					const {
						items: e
					} = this.props.value, t = 1 === e.length && e[0];
					return t && this.props.uploads[t.uploadKey] || void 0
				}
				uploadMediaFiles(e, t) {
					this.props.startMediaGalleryUploads([...e], t)
				}
				render() {
					const {
						value: e
					} = this.props, {
						items: t
					} = e, n = this.getSingleUpload(), s = t[0], r = Object(f.v)(e), i = r && s.video.thumbnail || void 0;
					return o.a.createElement(ec, null, o.a.createElement(ia.a, {
						render: (e, t) => this.renderDropArea(e, t),
						onDrop: this.onFileDrop
					}), n && n.metadata.videoDuration && o.a.createElement(ra.a, {
						onSelect: this.onThumbnailSelect,
						onToggleModal: this.toggleThumbnailSelector,
						videoSource: n.metadata.localUrl,
						videoDuration: n.metadata.videoDuration,
						selected: i,
						isOpen: this.props.activeModalId === Za
					}), this.props.activeModalId === Aa && o.a.createElement(qa, {
						isVideo: r,
						onCanceled: this.props.toggleRemovePrompt,
						onConfirmed: this.onRemoveConfirmed
					}))
				}
			}
			var sc = Qa($a(nc)),
				oc = n("./src/reddit/actions/post.ts"),
				rc = n("./src/reddit/controls/CheckboxInput/index.tsx"),
				ic = n("./src/reddit/controls/OutboundLink/index.tsx"),
				ac = n("./src/reddit/selectors/externalAccount.ts"),
				cc = n("./src/reddit/icons/fonts/Info/index.tsx"),
				dc = n("./src/reddit/components/PostCreationForm/PostCreationFooter/PostSettings/Hint/index.m.less"),
				lc = n.n(dc);
			const uc = Je.a.wrapped(cc.a, "Info", lc.a),
				mc = Je.a.div("TooltipContent", lc.a);
			var pc = e => o.a.createElement("div", {
					className: lc.a.Hint
				}, o.a.createElement(Ft.a, {
					className: lc.a.HoverTooltip,
					tooltipContentClass: lc.a.tooltipContentClass,
					text: o.a.createElement(mc, null, e.text)
				}), o.a.createElement(uc, null)),
				hc = n("./src/reddit/components/PostCreationForm/PostCreationFooter/PostSettings/index.m.less"),
				bc = n.n(hc);
			const fc = Je.a.wrapped(rc.a, "CheckboxInput", bc.a),
				gc = Je.a.wrapped(ic.b, "ConnectAccountLink", bc.a),
				Cc = Je.a.div("Container", bc.a),
				xc = Je.a.div("ContainerLeft", bc.a),
				Ec = Je.a.div("ContainerRight", bc.a),
				vc = Je.a.div("CheckboxText", bc.a),
				_c = Je.a.div("Option", bc.a),
				Oc = Je.a.wrapped(Tt.a, "TextButton", bc.a),
				yc = Je.a.input("TextBox", bc.a),
				kc = Je.a.div("Wrapper", bc.a),
				jc = Object(i.c)({
					connectedTwitterAccount: ac.a,
					currentSubredditOrProfile: _.o,
					currentUser: T.i,
					isDraftPending: S.g,
					isMediaUploadPending: j.V,
					isPostPending: j.mb,
					isPublicLink: j.P,
					postToTwitter: j.db,
					sendReplies: j.fb,
					sharingLink: S.i,
					submissionType: j.a
				}),
				Sc = Object(r.b)(jc, (e, t) => ({
					togglePostToTwitter: t => {
						e(a.y(t)), e((e, n) => O.v(n(), t))
					},
					toggleSendReplies: t => {
						e(a.z(t))
					},
					toggleDraftIsPublic: n => {
						e(F.s(n)), e(Object(F.r)(t.draftId)), e((e, s) => {
							const o = Object(S.h)(s(), t.draftId);
							o && O.g(s(), o, n)
						})
					},
					copyLink: t => e(Object(oc.x)(t)),
					trackConnectAccountsClick: () => e((e, t) => O.b(t()))
				}), (e, t, n) => ({
					...e,
					...t,
					...n,
					onTogglePostToTwitter: () => t.togglePostToTwitter(!e.postToTwitter),
					onToggleSendReplies: () => t.toggleSendReplies(!e.sendReplies),
					onToggleDraftIsPublic: () => {
						t.toggleDraftIsPublic(!e.isPublicLink), e.isPublicLink || t.copyLink(e.sharingLink)
					},
					onCopyLink: () => t.copyLink(e.sharingLink)
				}));
			var Ic = Object(_.t)()(Sc(e => {
					const {
						connectedTwitterAccount: t,
						currentSubredditOrProfile: n,
						currentUser: s,
						draftId: r,
						submissionType: i
					} = e, a = !!n && !!n.isQuarantined, c = e.isDraftPending || e.isPostPending || e.isMediaUploadPending, l = i !== p.Lb.MEDIA && r, u = e.isPublicLink, m = s && s.hasUserProfile;
					return o.a.createElement(Cc, null, o.a.createElement(xc, {
						className: e.className
					}, o.a.createElement(ot.a, null, o.a.createElement(_c, null, o.a.createElement(fc, {
						disabled: c,
						name: "send-replies",
						onChange: e.onToggleSendReplies,
						value: e.sendReplies
					}, o.a.createElement(vc, null, d.fbt._("Send me post reply notifications", null, {
						hk: "3kNmey"
					}))))), m && t && o.a.createElement(ot.a, null, o.a.createElement(_c, null, o.a.createElement(fc, {
						disabled: c || a,
						name: "post-to-twitter",
						onChange: e.onTogglePostToTwitter,
						value: e.postToTwitter
					}, o.a.createElement(vc, null, d.fbt._("Share this post on Twitter", null, {
						hk: "3SPI4V"
					}))))), m && !t && !a && o.a.createElement(ot.a, null, o.a.createElement(gc, {
						href: "/settings#connected-accounts",
						isSponsored: !1,
						onClick: e.trackConnectAccountsClick,
						source: null
					}, d.fbt._("Connect accounts to share your post", null, {
						hk: "1nIuWp"
					})), o.a.createElement(pc, {
						text: d.fbt._("Connect a Twitter account in your User Settings. With a connected account you can choose to share new posts you make directly to Twitter.", null, {
							hk: "JRoQz"
						})
					}))), o.a.createElement(Ec, {
						className: e.className
					}, l && o.a.createElement(kc, null, o.a.createElement(_c, null, o.a.createElement(fc, {
						name: "enable-public-link",
						onChange: e.onToggleDraftIsPublic,
						value: e.isPublicLink
					}, o.a.createElement(vc, null, d.fbt._("Enable public draft link", null, {
						hk: "1SpDgT"
					})), o.a.createElement(pc, {
						text: d.fbt._("This option will create a link to a preview of this draft. Anyone with this link will be able to see this draft. You can disable this link at any time.", null, {
							hk: "1r77YF"
						})
					})))), l && u && o.a.createElement(ot.a, null, o.a.createElement(yc, {
						disabled: !0,
						value: e.sharingLink
					}), o.a.createElement(Oc, {
						onClick: e.onCopyLink
					}, d.fbt._("Copy link", null, {
						hk: "22rywZ"
					})))))
				})),
				Tc = n("./src/reddit/components/PostCreationForm/PostCreationFooter/index.m.less"),
				wc = n.n(Tc);
			const Pc = Je.a.div("Container", wc.a);
			var Nc = e => o.a.createElement(Pc, null, o.a.createElement(Ic, {
					draftId: e.draftId
				})),
				Mc = n("./src/reddit/featureFlags/profileCollections.ts"),
				Dc = n("./src/reddit/selectors/postCollection.ts"),
				Lc = n("./src/reddit/selectors/profile.ts"),
				Rc = n("./src/reddit/components/PostCreationForm/PostCreationHeader/index.m.less"),
				Fc = n.n(Rc);
			const Ac = Je.a.div("CreateLabel", Fc.a),
				Bc = Je.a.span("CountIndicator", Fc.a),
				Uc = Je.a.wrapped($e.o, "LinkButton", Fc.a),
				Vc = Uc,
				Wc = Je.a.div("CreatePostHeader", Fc.a),
				Gc = Object(i.c)({
					canPostAsModerator: j.e,
					collectionsCount: e => {
						const t = Object(j.h)(e);
						let n = t.id;
						if (t.isProfile && Object(Mc.a)(e)) {
							const s = Object(Lc.j)(e, {
								profileName: t.name
							});
							n = s && s.id
						}
						return n ? Object(Dc.u)(e, {
							subredditId: n
						}) : 0
					},
					destSubredditAboutInfo: j.g,
					draftsCount: T.j,
					isPending: j.Z
				});
			var Hc = Object(r.b)(Gc, e => ({
					showDraftsList: () => {
						e(F.p()), e(a.x(f.d))
					},
					showCollectionsList: () => {
						e(a.x(f.a))
					}
				}))(e => {
					const {
						canPostAsModerator: t,
						collectionsCount: n,
						destSubredditAboutInfo: s,
						draftsCount: r,
						isPending: i,
						showCollectionsList: a,
						showDraftsList: c,
						submissionType: l,
						submitMode: u
					} = e, m = l === p.Lb.CROSSPOST, h = m ? d.fbt._("Create a crosspost", null, {
						hk: "1oNF7H"
					}) : d.fbt._("Create a post", null, {
						hk: "4u8qEy"
					}), b = t && s && s.collectionsEnabled;
					return o.a.createElement(Wc, null, o.a.createElement(Ac, null, u === f.q.Draft ? d.fbt._("Edit draft", null, {
						hk: "oMgcW"
					}) : h), !m && o.a.createElement(o.a.Fragment, null, b && o.a.createElement(Vc, {
						onClick: a
					}, d.fbt._("Collections", null, {
						hk: "2FVot0"
					}), o.a.createElement(Bc, null, n)), o.a.createElement(Uc, {
						disabled: i,
						onClick: c
					}, d.fbt._("Drafts", null, {
						hk: "25z4rQ"
					}), o.a.createElement(Bc, null, r))))
				}),
				qc = n("./src/reddit/actions/polls.ts"),
				Kc = n("./src/reddit/actions/postCreation/editorContent.ts"),
				zc = n("./src/reddit/components/Governance/TokenAmount/index.tsx"),
				Jc = n("./src/reddit/selectors/gov.ts"),
				Yc = n("./src/reddit/components/Governance/PollHelpText/index.m.less"),
				Zc = n.n(Yc);
			const Qc = Object(i.c)({
				subredditGovInfo: (e, {
					subreddit: t
				}) => Object(Jc.k)(e, {
					subredditId: t.id
				}),
				tokenName: (e, {
					subreddit: t
				}) => Object(Jc.n)(e, {
					subredditId: t.id
				})
			});
			var Xc = Object(r.b)(Qc)((function(e) {
					var t;
					const {
						subreddit: n,
						subredditGovInfo: s,
						tokenName: r
					} = e, i = null === (t = null == s ? void 0 : s.polls) || void 0 === t ? void 0 : t.decisionThreshold;
					return o.a.createElement("div", {
						className: Zc.a.pollHelpText
					}, i && o.a.createElement(o.a.Fragment, null, o.a.createElement(zc.a, {
						className: Zc.a.decisionThreholdAmount,
						amount: i,
						subredditId: n.id
					}), o.a.createElement("div", {
						className: Zc.a.decisionThresholdTitle
					}, d.fbt._("Decision Threshold", null, {
						hk: "39nut8"
					}))), o.a.createElement("div", {
						className: Zc.a.decisionThresholdExplanation
					}, d.fbt._("Governance Polls pass when one option reaches the Decision Threshold. The Decision Threshold is updated regularly based on the number of {tokenName} that voted in previous governance polls.", [d.fbt._param("tokenName", r)], {
						hk: "Di1tp"
					})))
				})),
				$c = n("./src/reddit/actions/tooltip.ts"),
				ed = n("./src/reddit/controls/Dropdown/index.tsx"),
				td = n("./src/reddit/controls/Dropdown/Row.tsx"),
				nd = n("./src/reddit/components/PostCreationForm/SchedulePickerModal/DateInput/index.tsx"),
				sd = n("./src/reddit/components/PostCreationForm/SchedulePickerModal/TimeInput/index.tsx"),
				od = n("./src/reddit/components/PostCreationForm/SchedulePickerModal/utils.ts");
			const rd = () => {
					const e = new Date,
						[t] = Object(le.i)(Object(ht.g)(e));
					return t
				},
				id = () => {
					const e = new Date;
					return e.setDate(e.getDate() + 3), e
				},
				ad = e => {
					const [t, n] = Object(le.i)(Object(ht.g)(e));
					return {
						date: t,
						time: n
					}
				},
				cd = ({
					date: e,
					time: t
				}) => new Date(`${e}T${t}`);
			var dd = n("./src/reddit/components/PollCreator/EndDatePicker/index.m.less"),
				ld = n.n(dd);

			function ud({
				poll: e
			}) {
				const {
					endDate: t
				} = e, {
					date: n,
					time: s
				} = ad(t), i = Object(ht.b)(), a = i ? Object(ht.d)(i) : null, c = Object(r.d)(), l = t => {
					c(Object(qc.b)({
						...e,
						endDate: cd({
							date: n,
							time: s,
							...t
						})
					}))
				};
				return o.a.createElement("div", {
					className: ld.a.endDatePicker
				}, o.a.createElement("label", {
					className: ld.a.title
				}, d.fbt._("Prediction ends", null, {
					hk: "1fsk1v"
				})), o.a.createElement("div", {
					className: ld.a.dateTime
				}, o.a.createElement(nd.a, {
					"aria-label": d.fbt._("Prediction end date", null, {
						hk: "4zYv4T"
					}),
					onChange: e => l({
						date: e
					}),
					min: rd(),
					max: Object(od.a)(),
					value: n
				}), o.a.createElement(sd.a, {
					"aria-label": d.fbt._("Prediction end time", null, {
						hk: "1idFl4"
					}),
					onChange: e => l({
						time: e
					}),
					value: s
				}), a && o.a.createElement("div", {
					className: ld.a.timeZone
				}, a.abbreviation)))
			}
			var md = n("./src/reddit/icons/svgs/Grapple/index.tsx"),
				pd = n("./src/reddit/components/PollCreator/Option/index.m.less"),
				hd = n.n(pd);

			function bd(e) {
				return o.a.createElement("div", {
					className: Object(ze.a)(e.className, hd.a.container),
					style: {
						left: e.isDropTarget ? 16 : 0,
						opacity: fd(e),
						pointerEvents: e.isDisabled ? "none" : void 0
					}
				}, o.a.createElement(md.a, {
					className: hd.a.grapple
				}), o.a.createElement("input", {
					className: hd.a.input,
					maxLength: 120,
					placeholder: `${d.fbt._("option",null,{hk:"3IGnB"})} ${e.index+1}`,
					value: e.text,
					onBlur: e.onBlur,
					onChange: t => e.onTextChange(t.currentTarget.value),
					onFocus: e.onFocus
				}), e.removable && o.a.createElement(ds.a, {
					className: hd.a.trash,
					onClick: e.onRemove
				}))
			}

			function fd(e) {
				return e.isDisabled ? .5 : e.isBeingDragged ? .25 : 1
			}
			var gd = n("./src/reddit/constants/postLayout.ts"),
				Cd = n("./src/reddit/components/Econ/Prediction/EducationMessage/constants.ts"),
				xd = n("./src/reddit/components/Econ/Prediction/NewBadge/index.m.less"),
				Ed = n.n(xd);
			const {
				fbt: vd
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function _d({
				className: e
			}) {
				return o.a.createElement("div", {
					className: Object(ze.a)(Ed.a.newBadge, e)
				}, vd._("New", null, {
					hk: "2N0EBb"
				}))
			}
			var Od = n("./src/reddit/components/Econ/Prediction/PredictionFeatureEducationMessage/index.tsx"),
				yd = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				kd = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				jd = n("./src/reddit/controls/PillButton/index.m.less"),
				Sd = n.n(jd);
			class Id extends o.a.Component {
				constructor() {
					super(...arguments), this.handleMouseEnter = e => {
						const {
							onMouseEnter: t,
							tooltipSet: n
						} = this.props;
						t && t(e), n()
					}, this.handleMouseLeave = e => {
						const {
							onMouseLeave: t,
							tooltipUnset: n
						} = this.props;
						t && t(e), n()
					}
				}
				render() {
					const {
						backgroundClassName: e,
						children: t,
						className: n,
						colorTheme: s = "default",
						contentClassName: r,
						disabled: i,
						hoverText: a,
						icon: c,
						id: d,
						isActive: l,
						isDarkDayMode: u,
						isNightMode: m,
						layout: p,
						onBlur: h,
						onClick: b,
						onFocus: f,
						title: g,
						tooltipId: C
					} = this.props, x = c, E = Object(ze.a)({
						[Sd.a.classic]: p === gd.g.Classic,
						[Sd.a.compact]: p === gd.g.Compact,
						[Sd.a.activated]: l,
						[Sd.a.nightmode]: m,
						[Sd.a.dark]: u,
						[Sd.a.upvote]: "upvote" === s,
						[Sd.a.downvote]: "downvote" === s,
						[Sd.a.gold]: "gold" === s,
						[Sd.a.blue]: "blue" === s,
						[Sd.a.approve]: "approve" === s,
						[Sd.a.remove]: "remove" === s,
						[Sd.a.hasChildren]: !!t
					});
					if (this.props.href) {
						const {
							href: e,
							rel: s,
							target: i
						} = this.props;
						return o.a.createElement(yd.a, {
							"aria-label": g,
							"aria-pressed": l,
							className: Object(ze.a)(n, E, Sd.a.PostActionButton),
							"data-click-id": this.props["data-click-id"],
							"data-test-id": this.props["data-test-id"],
							id: d,
							onBlur: h,
							onClick: b,
							onFocus: f,
							onMouseEnter: this.handleMouseEnter,
							onMouseLeave: this.handleMouseLeave,
							rel: s,
							target: i,
							to: e
						}, o.a.createElement("span", {
							className: Object(ze.a)(r, E, Sd.a.buttonContent),
							id: C,
							tabIndex: -1
						}, o.a.createElement("div", {
							className: Sd.a.background
						}), a && C && o.a.createElement(kd.c, {
							text: a,
							tooltipId: C
						}), x && o.a.createElement(x, null), o.a.createElement("span", {
							className: Sd.a.buttonChildren
						}, t)))
					}
					return o.a.createElement("button", {
						"aria-label": g,
						"aria-pressed": l,
						className: Object(ze.a)(n, E, Sd.a.PostActionButton),
						"data-click-id": this.props["data-click-id"],
						"data-test-id": this.props["data-test-id"],
						disabled: i,
						id: d,
						onBlur: h,
						onClick: b,
						onFocus: f,
						onMouseEnter: this.handleMouseEnter,
						onMouseLeave: this.handleMouseLeave
					}, o.a.createElement("span", {
						className: Object(ze.a)(r, E, Sd.a.buttonContent),
						id: C,
						tabIndex: -1
					}, o.a.createElement("div", {
						className: Object(ze.a)(Sd.a.background, e)
					}), a && C && o.a.createElement(kd.c, {
						text: a,
						tooltipId: C
					}), x && o.a.createElement(x, null), o.a.createElement("span", {
						className: Sd.a.buttonChildren
					}, t)))
				}
			}
			var Td = Object(r.b)(void 0, (e, {
					tooltipId: t
				}) => ({
					tooltipSet: () => {
						t && e(Object($c.g)({
							tooltipId: t
						}))
					},
					tooltipUnset: () => {
						t && e(Object($c.j)({
							tooltipId: t
						}))
					}
				}))(Id),
				wd = n("./src/reddit/helpers/trackers/predictions.ts"),
				Pd = n("./src/reddit/hooks/useLocalStorage.ts"),
				Nd = n("./src/reddit/selectors/features/predictions/creation/index.ts"),
				Md = n("./src/reddit/components/PollCreator/PollTypePicker/index.m.less"),
				Dd = n.n(Md);

			function Ld() {
				return (Ld = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}

			function Rd({
				tournamentsEnabled: e
			}) {
				const [t] = Object(Pd.a)(Cd.a.creation, !1), {
					govType: n
				} = Object(r.e)(j.s), s = Object(r.e)(Nd.a), i = Object(r.d)(), c = Object(ri.a)(), l = {
					backgroundClassName: Dd.a.buttonBackground,
					colorTheme: "blue",
					className: Object(ze.a)(Dd.a.button, Dd.a.pollTypePickerButton),
					contentClassName: Dd.a.buttonContent,
					disabled: s,
					isDarkDayMode: !1,
					isNightMode: !1,
					layout: gd.g.Compact
				};
				return o.a.createElement("div", {
					className: Dd.a.pollTypePicker
				}, o.a.createElement(Td, Ld({}, l, {
					isActive: n === Q.a.GA || !n,
					onClick: () => {
						i(Object(a.j)({
							oldType: n,
							type: Q.a.GA
						})), c(wd.e)
					},
					title: d.fbt._("Poll", null, {
						hk: "2uKNlH"
					})
				}), d.fbt._("Poll", null, {
					hk: "1l7ZuP"
				})), o.a.createElement(Td, Ld({}, l, {
					isActive: n === Q.a.Prediction,
					onClick: () => {
						i(Object(a.j)({
							oldType: n,
							type: Q.a.Prediction
						})), c(wd.f)
					},
					title: d.fbt._("Prediction", null, {
						hk: "3wu0FO"
					})
				}), o.a.createElement("div", {
					className: Dd.a.predictionLabel
				}, d.fbt._("Prediction", null, {
					hk: "1CbFag"
				}), !t && n !== Q.a.Prediction && o.a.createElement(_d, {
					className: Dd.a.newBadge
				}))), n === Q.a.Prediction && o.a.createElement("div", {
					className: Dd.a.education
				}, o.a.createElement(Od.a, {
					isTokens: e,
					onClose: () => c(wd.c),
					onView: () => c(wd.g),
					storageKey: Cd.a.creation
				})))
			}
			var Fd = n("./src/reddit/actions/economics/predictions/constants.ts"),
				Ad = n("./src/reddit/components/PollCreator/TournamentPicker/index.m.less"),
				Bd = n.n(Ad);

			function Ud({
				className: e,
				poll: t
			}) {
				const n = Object(r.d)(),
					i = Object(bs.a)(),
					{
						subredditName: a
					} = (null == i ? void 0 : i.urlParams) || {},
					c = Object(r.e)(e => Object(I.F)(e, a)),
					l = Object(r.e)(e => Object(gs.b)(e, {
						subredditId: c
					})) || {
						id: Fd.e,
						name: "Predictions Tournament"
					};
				return Object(s.useEffect)(() => {
					(async () => {
						a && n(Object(hs.g)(a))
					})()
				}, [n, a]), a ? o.a.createElement("div", {
					className: Object(ze.a)(Bd.a.tournamentPicker, e)
				}, o.a.createElement("label", {
					className: Bd.a.title
				}, d.fbt._("Tournament", null, {
					hk: "1eyps5"
				})), o.a.createElement("input", {
					className: Bd.a.input,
					readOnly: !0,
					type: "text",
					value: l.name || d.fbt._("New tournament", null, {
						hk: "1DwyZA"
					})
				})) : null
			}
			var Vd = n("./src/reddit/components/PollCreator/index.m.less"),
				Wd = n.n(Vd);
			const Gd = 2,
				Hd = 6,
				qd = 7,
				Kd = "poll-creation-voting-length";
			var zd;
			! function(e) {
				e.Options = "options", e.VotingLength = "votingLength"
			}(zd || (zd = {}));
			const Jd = Object(zt.a)(ed.a);

			function Yd(e, t) {
				return `${t}-${e}`
			}
			const Zd = Object(i.c)({
				isModerator: (e, t) => {
					const {
						subredditId: n
					} = t;
					return !!n && Object(at.g)(e, {
						subredditId: n
					})
				},
				tournamentsEnabled: (e, {
					subredditId: t
				}) => !!t && (Object(fs.h)(e) && Object(I.N)(e, {
					subredditId: t
				})),
				votingLengthDropdownIsOpen: e => e.tooltipId === Kd
			});
			class Qd extends o.a.Component {
				constructor(e) {
					super(e), this.handleAddOption = e => () => {
						const {
							sendEvent: t
						} = this.props;
						e.options.length < 7 && (t(Object(O.p)()), this.props.onUpdatePoll({
							...e,
							options: e.options.concat(this.makeOption())
						}))
					}, this.handleBlur = () => this.inputFocused = !1, this.handleVotingLengthDropdownClick = () => {
						const {
							sendEvent: e,
							votingLengthDropdownIsOpen: t
						} = this.props;
						t || e(Object(O.q)()), this.props.onToggleVotingLengthDropdown()
					}, this.handleChangeVotingLength = e => t => {
						this.props.onUpdatePoll({
							...e,
							duration: t
						}), this.props.onToggleVotingLengthDropdown()
					}, this.handleFocus = () => this.inputFocused = !0, this.handleOptionTextChange = (e, t) => n => {
						const s = e.options.indexOf(t);
						this.props.onUpdatePoll({
							...e,
							options: e.options.slice(0, s).concat({
								text: n
							}).concat(e.options.slice(s + 1))
						})
					}, this.handleRemoveOption = (e, t) => () => {
						this.props.onUpdatePoll({
							...e,
							options: e.options.filter(e => e !== t)
						})
					}, this.makeOption = () => ({
						text: ""
					}), this.makeDefaultPoll = () => ({
						duration: 3 * p.x,
						endDate: id(),
						options: Array.from({
							length: Gd
						}).map(this.makeOption)
					}), this.preventDrag = e => {
						this.inputFocused && (e.preventDefault(), e.stopPropagation())
					}, this.inputFocused = !1
				}
				componentDidMount() {
					document.addEventListener("dragstart", this.preventDrag), document.addEventListener("drop", this.preventDrag), document.addEventListener("dragover", this.preventDrag)
				}
				componentWillUnmount() {
					document.removeEventListener("dragstart", this.preventDrag), document.removeEventListener("drop", this.preventDrag), document.removeEventListener("dragover", this.preventDrag)
				}
				sectionIsDisabled(e) {
					return this.props.disabledSections && this.props.disabledSections.includes(e)
				}
				render() {
					const {
						className: e,
						allowPredictions: t,
						isModerator: n,
						poll: s = this.makeDefaultPoll(),
						pollType: r,
						tournamentsEnabled: i
					} = this.props, a = !Object(Q.f)(s) && t && n, c = r === Q.a.Prediction;
					return o.a.createElement("div", {
						"data-testid": "poll-creator"
					}, a && o.a.createElement(Rd, {
						tournamentsEnabled: i
					}), o.a.createElement("div", {
						className: Object(ze.a)(e, Wd.a.container)
					}, o.a.createElement("div", {
						className: Wd.a.options
					}, this.renderPollCreator(s), this.renderControls(s)), o.a.createElement("div", {
						className: Wd.a.help
					}, this.props.hintTextComponent)), c && o.a.createElement("div", {
						className: Wd.a.predictionSettings
					}, o.a.createElement(ud, {
						poll: s
					}), i && o.a.createElement(Ud, {
						poll: s
					})))
				}
				renderPollCreator(e) {
					const t = this.sectionIsDisabled(zd.Options);
					return o.a.createElement(oi.a, {
						getReactKey: Yd,
						render: (n, s, r, i, a) => o.a.createElement(bd, {
							className: Wd.a.option,
							index: s,
							isBeingDragged: r,
							isDisabled: t,
							isDropTarget: i && a,
							option: n,
							removable: s > 1,
							text: n.text,
							onBlur: this.handleBlur,
							onFocus: this.handleFocus,
							onTextChange: this.handleOptionTextChange(e, n),
							onRemove: this.handleRemoveOption(e, n)
						}),
						values: e.options,
						onDrop: (t, n, s) => this.props.onUpdatePoll({
							...e,
							options: s
						})
					})
				}
				renderControls(e) {
					const {
						pollType: t
					} = this.props, n = e.options.length >= Hd || this.sectionIsDisabled(zd.Options), s = this.sectionIsDisabled(zd.VotingLength), r = Math.floor(e.duration / p.x), i = t === Q.a.Prediction;
					return o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
						className: Wd.a.controls
					}, o.a.createElement($e.o, {
						className: Wd.a.addButton,
						disabled: n,
						onClick: this.handleAddOption(e)
					}, d.fbt._("Add Option", null, {
						hk: "hUP0k"
					})), !i && o.a.createElement("div", {
						className: Object(ze.a)(Wd.a.votingLengthSelector, {
							[Wd.a.votingLengthSelector__disabled]: !!s
						})
					}, o.a.createElement("div", {
						className: Wd.a.votingLengthTitleText
					}, d.fbt._("Voting length:", null, {
						hk: "4pPVUg"
					})), o.a.createElement("div", {
						className: Wd.a.votingLengthDropdownContainer,
						id: Kd
					}, o.a.createElement("div", {
						className: Wd.a.votingLengthDisplay,
						onClick: this.handleVotingLengthDropdownClick
					}, o.a.createElement("div", null, d.fbt._({
						"*": "{numDays} days",
						_1: "{numDays} day"
					}, [d.fbt._param("numDays", String(r)), d.fbt._plural(r)], {
						hk: "2HsFBA"
					})), o.a.createElement(jn.a, {
						className: Wd.a.votingLengthCaret
					})), this.renderVotingLengthDropdown(e)))))
				}
				renderVotingLengthDropdown(e) {
					const {
						votingLengthDropdownIsOpen: t
					} = this.props, n = this.handleChangeVotingLength(e);
					return o.a.createElement(Jd, {
						className: Wd.a.votingLengthDropdown,
						tooltipId: Kd,
						isOpen: t
					}, Array.from({
						length: qd
					}).map((t, s) => {
						const r = s + 1;
						return o.a.createElement(td.b, {
							"data-redditstyle": !0,
							key: s,
							index: s,
							displayText: d.fbt._({
								"*": "{number} days",
								_1: "1 day"
							}, [d.fbt._plural(r, "number")], {
								hk: "bXXYo"
							}),
							isSelected: Math.floor(e.duration / p.x) === r,
							onClick: () => n(r * p.x)
						})
					}))
				}
			}
			var Xd = Object(r.b)(Zd, e => ({
					onToggleVotingLengthDropdown: () => e(Object($c.h)({
						tooltipId: Kd
					}))
				}))(Object(ps.c)(Qd)),
				$d = n("./src/reddit/components/Governance/ProposalTemplates/Generic/index.m.less"),
				el = n.n($d);
			const tl = [{
				text: "Yes"
			}, {
				text: "No"
			}];

			function nl(e) {
				const t = {
					duration: e.poll ? e.poll.duration : p.x,
					options: e.options || tl
				};
				return o.a.createElement("div", {
					className: Object(ze.a)(el.a.container, e.className)
				}, o.a.createElement("div", {
					className: el.a.topline
				}, e.children.map(e => "string" == typeof e ? o.a.createElement("div", {
					className: el.a.text
				}, e) : e)), o.a.createElement(Xd, {
					disabledSections: [zd.Options],
					hintTextComponent: o.a.createElement("div", {
						className: el.a.hintText
					}, o.a.createElement(Xc, {
						subreddit: e.subreddit
					})),
					poll: t,
					onUpdatePoll: e.onUpdatePoll
				}))
			}
			var sl = n("./src/reddit/controls/FormFields/index.tsx"),
				ol = n("./src/reddit/components/Governance/ProposalTemplates/Spinoff/index.m.less"),
				rl = n.n(ol);
			const il = 3,
				al = 20,
				cl = /[^(\w|_)]/g;
			const dl = Object(i.c)({
				newSubredditName: e => e.creations.formData.newSubreddit
			});
			var ll = Object(r.b)(dl, e => ({
					onSubredditNameChange: t => e(Object(L.a)({
						subredditName: t
					}))
				}))((function(e) {
					return o.a.createElement(nl, {
						className: e.className,
						options: Q.i[Q.a.Spinoff](e.newSubredditName),
						poll: e.poll,
						subreddit: e.subreddit,
						onUpdatePoll: e.onUpdatePoll
					}, d.fbt._("Should we spin-off to", null, {
						hk: "3oKiyE"
					}), o.a.createElement(sl.c, {
						redditStyle: !0,
						className: rl.a.input,
						label: d.fbt._("subreddit name", null, {
							hk: "1qzJqB"
						}),
						max: al,
						min: il,
						type: "text",
						value: e.newSubredditName,
						onChange: t => {
							const n = t.currentTarget.value.replace(cl, "");
							e.onSubredditNameChange(n)
						}
					}), d.fbt._("?", null, {
						hk: "1b1vhH"
					}))
				})),
				ul = n("./src/reddit/components/Governance/ProposalTemplates/TopModReplacement/index.m.less"),
				ml = n.n(ul);
			const pl = 20;
			const hl = Object(i.c)({
				topMod: e => e.creations.formData.newTopMod
			});
			var bl = Object(r.b)(hl, e => ({
					onUsernameChange: t => e(Object(L.b)({
						username: t
					}))
				}))((function(e) {
					return o.a.createElement(nl, {
						className: e.className,
						options: Q.i[Q.a.ReplaceTopMod](),
						poll: e.poll,
						subreddit: e.subreddit,
						onUpdatePoll: e.onUpdatePoll
					}, d.fbt._("Should", null, {
						hk: "22RF0A"
					}), o.a.createElement(sl.c, {
						redditStyle: !0,
						className: ml.a.input,
						label: d.fbt._("username", null, {
							hk: "1Fk03V"
						}),
						max: pl,
						type: "text",
						value: e.topMod,
						onChange: t => e.onUsernameChange(t.currentTarget.value)
					}), d.fbt._("become the top moderator?", null, {
						hk: "4COtce"
					}))
				})),
				fl = n("./src/reddit/icons/svgs/Info/index.tsx"),
				gl = n("./src/reddit/components/PollCreator/DefaultHintText/index.m.less"),
				Cl = n.n(gl);
			const xl = e => [() => d.fbt._("Suggest short clear options", null, {
				hk: "4bpIfe"
			}), () => d.fbt._("The more options, the better", null, {
				hk: "37GJUq"
			}), () => e ? d.fbt._("Choose the prediction duration", null, {
				hk: "16Yw7y"
			}) : d.fbt._("Choose the poll duration", null, {
				hk: "19Gh6D"
			}), () => d.fbt._("Options can't be edited after post creation", null, {
				hk: "3iRICg"
			})];

			function El(e) {
				const {
					isPrediction: t
				} = e;
				return o.a.createElement(s.Fragment, null, o.a.createElement("div", {
					className: Cl.a.helpTitle
				}, o.a.createElement(fl.a, {
					className: Cl.a.infoIcon
				}), o.a.createElement("div", {
					className: Cl.a.helpTitleText
				}, t ? d.fbt._("Tips on Better Predictions", null, {
					hk: "3kIzkr"
				}) : d.fbt._("Tips on Better Polls", null, {
					hk: "2QMuX9"
				}))), o.a.createElement("ol", {
					className: Cl.a.helpTextList
				}, xl(!!t).map(e => o.a.createElement("li", {
					className: Cl.a.helpTextItem,
					key: e()
				}, e()))))
			}
			var vl = n("./src/reddit/components/PostCreationForm/MarkdownEditor/index.tsx"),
				_l = n("./src/reddit/components/RichTextEditor/index.tsx"),
				Ol = n("./src/reddit/featureFlags/component.tsx"),
				yl = n("./src/reddit/helpers/richTextEditor/index.ts"),
				kl = n("./src/reddit/models/PostRequirements/index.ts"),
				jl = n("./src/reddit/icons/svgs/GovSmall/index.tsx"),
				Sl = n("./src/reddit/icons/svgs/Poll/index.tsx"),
				Il = n("./src/reddit/components/PostCreationForm/PostEditor/GovTypeSelector/index.m.less"),
				Tl = n.n(Il);
			const wl = Object(zt.a)(ed.a),
				Pl = [{
					Icon: Sl.a,
					showNewTag: !0,
					text: () => d.fbt._("general", null, {
						hk: "2zk1er"
					}),
					type: null
				}, {
					Icon: jl.a,
					showNewTag: !1,
					text: () => d.fbt._("governance", null, {
						hk: "1wlLfQ"
					}),
					type: Q.a.GovGeneric
				}, {
					Icon: jl.a,
					showNewTag: !1,
					text: () => d.fbt._("spin-off a new community", null, {
						hk: "jNK0c"
					}),
					type: Q.a.Spinoff
				}],
				Nl = "gov-type-selector-dropdown";
			const Ml = Object(i.c)({
				dropdownIsOpen: e => e.tooltipId === Nl,
				govType: e => e.creations.formData.govType,
				spinoffEnabled: ce.d.spSpinoffs
			});
			var Dl = Object(r.b)(Ml, e => ({
					onChangeGovType: (t, n) => {
						e(Object(a.j)({
							oldType: n,
							type: t
						})), e(Object($c.i)())
					},
					onToggleDropdown: () => e(Object($c.h)({
						tooltipId: Nl
					}))
				}))((function(e) {
					const t = function(e, t) {
							return Pl.filter(({
								type: e
							}) => !(!t.spinoffEnabled && e === Q.a.Spinoff))
						}(0, e),
						n = t.find(t => t.type === e.govType) || t[0];
					return o.a.createElement("div", {
						className: Object(ze.a)(Tl.a.container, e.className)
					}, o.a.createElement("div", {
						className: Tl.a.currentSelection,
						id: Nl,
						onClick: e.onToggleDropdown
					}, o.a.createElement(n.Icon, {
						className: Tl.a.pollTypeIcon
					}), o.a.createElement("div", {
						className: Tl.a.text
					}, n.text()), o.a.createElement(jn.a, {
						className: Tl.a.dropdownIcon
					}), n.showNewTag && o.a.createElement("div", {
						className: Tl.a.newLabel
					}, d.fbt._("new", null, {
						hk: "4iv34v"
					}))), o.a.createElement(wl, {
						className: Tl.a.dropdown,
						tooltipId: Nl,
						isOpen: e.dropdownIsOpen
					}, t.map((t, s) => o.a.createElement(td.b, {
						"data-redditstyle": !0,
						displayText: t.text(),
						isSelected: t.type === n.type,
						key: s,
						onClick: () => e.onChangeGovType(t.type, e.govType)
					}))))
				})),
				Ll = n("./src/reddit/components/PostCreationForm/PostEditor/index.m.less"),
				Rl = n.n(Ll);

			function Fl() {
				return (Fl = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const Al = Object(Ol.a)("spGovPolls", Dl),
				Bl = (e, t) => !e && t && t.bodyRestrictionPolicy === kl.a.Required,
				Ul = Object(i.c)({
					canPostAsModerator: j.e,
					destSubreddit: j.h,
					draft: S.d,
					editorMode: j.n,
					govType: e => e.creations.formData.govType,
					markdownBody: j.T,
					pending: j.Z,
					poll: e => e.creations.formData.polls || void 0,
					postCreationFieldErrors: Pn,
					postRequirements: j.nb,
					rteState: j.eb,
					shouldAllowBodyText: j.gb,
					subreddit: _.q
				}),
				Vl = Object(r.b)(Ul, (e, {
					onChange: t,
					onPostFieldValidation: n,
					pageLayer: s
				}) => ({
					onBlur: () => {
						n(e(St(p.ob.BODY, s)))
					},
					onFocus: () => e((e, t) => O.n(t(), f.k.CLICK, f.l.BODY)),
					onRTEStateChange: (n, s) => {
						e(a.e({
							rteState: n,
							isContentChanged: s
						})), t()
					},
					onToggleEditorMode: (t, n) => e(Kc.d(f.g.POST_CREATION, t, n)),
					onTrackToolbarClick: (t, n) => e((e, s) => O.z(s(), t, n)),
					onUpdatePoll: t => e(Object(qc.b)(t))
				}));
			class Wl extends o.a.Component {
				constructor() {
					super(...arguments), this.state = {}, this.onEditorResize = e => {
						this.setState({
							editorHeight: e
						})
					}, this.onToggleEditorMode = async (e, t) => {
						await this.props.onToggleEditorMode(e, t), e === f.h.RICH_TEXT ? this.rteRef && this.rteRef.focus() : this.markdownEditorRef && this.markdownEditorRef.focus()
					}, this.setRteRef = e => this.rteRef = e, this.setMarkdownEditorRef = e => this.markdownEditorRef = e
				}
				renderEditor() {
					const {
						canPostAsModerator: e,
						destSubreddit: t,
						displayPollCreation: n,
						editorMode: s,
						markdownBody: r,
						pending: i,
						postCreationFieldErrors: a,
						postRequirements: c,
						rteState: l,
						subreddit: u
					} = this.props, m = a[p.ob.BODY].length > 0, h = !!u && u.isNSFW, b = Bl(e, c) ? d.fbt._("Text (required)", null, {
						hk: "E1dIP"
					}) : d.fbt._("Text (optional)", null, {
						hk: "4jfNex"
					}), g = h;
					return s === f.h.RICH_TEXT ? o.a.createElement(_l.a, {
						allowMediaUploads: !g,
						focusableContentRTEClassName: Object(ze.a)(Rl.a.focusableContent, {
							[Rl.a.mHasError]: m,
							[Rl.a.mPollBorder]: !!n
						}),
						destSubreddit: t,
						editorType: yl.a.Post,
						initialHeight: this.state.editorHeight,
						rteState: l,
						onBlur: this.props.onBlur,
						onChange: this.props.onRTEStateChange,
						onEditorResize: this.onEditorResize,
						onFocus: this.props.onFocus,
						onSubmit: this.props.onSubmit,
						onSwitchEditorMode: this.onToggleEditorMode,
						placeholderText: b,
						readOnly: i,
						rteRef: this.setRteRef,
						trackToolbarClick: this.props.onTrackToolbarClick
					}) : o.a.createElement(vl.a, {
						focusableContentMarkdownClassName: Object(ze.a)(Rl.a.focusableContent, {
							[Rl.a.mHasError]: m,
							[Rl.a.mPollBorder]: !!n
						}),
						initialHeight: this.state.editorHeight,
						instanceRef: this.setMarkdownEditorRef,
						onBlur: this.props.onBlur,
						onChange: this.props.onChange,
						onEditorResize: this.onEditorResize,
						onFocus: this.props.onFocus,
						value: r,
						onSubmit: this.props.onSubmit,
						onSwitchEditorMode: this.onToggleEditorMode,
						placeholderText: b
					})
				}
				render() {
					const {
						displayPollCreation: e,
						postCreationFieldErrors: t,
						shouldAllowBodyText: n,
						subreddit: s
					} = this.props;
					return o.a.createElement("div", null, n && this.renderEditor(), n && e && o.a.createElement("div", {
						className: Rl.a.pollCreator
					}, o.a.createElement(Al, {
						className: Rl.a.govToggle
					}), this.govType()), o.a.createElement(et.a, {
						errorModalTitle: s ? Object(Y.c)(s.name) : void 0,
						messages: t[p.ob.BODY]
					}))
				}
				govType() {
					var e, t;
					const {
						govType: n,
						poll: s,
						subreddit: r
					} = this.props, i = {
						onUpdatePoll: this.props.onUpdatePoll,
						poll: s
					}, a = {
						...i,
						pollType: n
					}, c = {
						...a,
						allowPredictions: null === (e = this.props.subreddit) || void 0 === e ? void 0 : e.allowPredictions,
						subredditId: null === (t = this.props.subreddit) || void 0 === t ? void 0 : t.id
					};
					switch (n) {
						case Q.a.ReplaceTopMod:
							return r ? o.a.createElement(bl, Fl({}, i, {
								subreddit: r
							})) : o.a.createElement(Xd, Fl({}, a, {
								hintTextComponent: o.a.createElement(El, null)
							}));
						case Q.a.GovGeneric:
							return o.a.createElement(Xd, Fl({}, a, {
								hintTextComponent: r ? o.a.createElement(Xc, {
									subreddit: r
								}) : o.a.createElement(El, null)
							}));
						case Q.a.Spinoff:
							return r ? o.a.createElement(ll, Fl({}, i, {
								subreddit: r
							})) : o.a.createElement(Xd, Fl({}, a, {
								hintTextComponent: o.a.createElement(El, null)
							}));
						case Q.a.Prediction:
							return o.a.createElement(Xd, Fl({}, c, {
								hintTextComponent: o.a.createElement(El, {
									isPrediction: !0
								})
							}));
						case Q.a.GA:
						case null:
							return o.a.createElement(Xd, Fl({}, c, {
								hintTextComponent: o.a.createElement(El, null)
							}))
					}
				}
			}
			var Gl = Object(_.t)({
					draftId: _.u,
					pageLayer: e => e
				})(Vl(Wl)),
				Hl = n("./src/reddit/components/PostCreationForm/PostTitle/index.m.less"),
				ql = n.n(Hl);
			const Kl = Object(i.c)({
					canPostAsModerator: j.e,
					disableTitleEdits: e => e.creations.formData.govType === Q.a.ReplaceTopMod || e.creations.formData.govType === Q.a.Spinoff,
					pending: j.Z,
					postCreationFieldErrors: Pn,
					postRequirements: j.nb,
					shouldAllowBodyText: j.gb,
					submissionType: j.a,
					subreddit: _.q,
					title: j.pb
				}),
				zl = Object(r.b)(Kl, (e, {
					onChange: t,
					onPostFieldValidation: n,
					pageLayer: s
				}) => ({
					onBlur: () => {
						n(e(St(p.ob.TITLE, s)))
					},
					onChange: n => {
						e(a.h(n)), t(n)
					},
					onInputFocus: () => e((e, t) => O.n(t(), f.k.CLICK, f.l.TITLE))
				}));
			var Jl = Object(_.t)()(zl(e => {
					const {
						canPostAsModerator: t,
						postRequirements: n,
						postCreationFieldErrors: s,
						subreddit: r
					} = e, i = e.submissionType === p.Lb.POST && !e.shouldAllowBodyText, a = s[p.ob.TITLE].length > 0, c = t ? Gt.f : n && n.titleTextMaxLength || Gt.f;
					return o.a.createElement("div", {
						className: ql.a.container
					}, o.a.createElement("div", {
						className: ql.a.inputWrapper
					}, o.a.createElement(Gr, {
						className: Object(ze.a)(ql.a.PostTitleInput, {
							[ql.a.mHasError]: a
						}),
						disabled: e.disableTitleEdits,
						maxLength: c,
						minHeight: i ? 92 : void 0,
						onBlur: e.onBlur,
						onFocus: e.onInputFocus,
						onKeyDown: e.onKeyDown,
						onValueChange: e.onChange,
						placeholder: d.fbt._("Title", null, {
							hk: "j3s6r"
						}),
						readOnly: e.pending,
						value: e.title
					}), o.a.createElement("div", {
						className: ql.a.charsCounter
					}, e.title.length, "/", c)), o.a.createElement(et.a, {
						errorModalTitle: r ? Object(Y.c)(r.name) : void 0,
						messages: s[p.ob.TITLE]
					}))
				})),
				Yl = n("./src/reddit/components/PostCreationForm/Prompt/index.tsx");
			const Zl = "g-recaptcha",
				Ql = "image",
				Xl = {
					COMPACT: "compact",
					NORMAL: "normal"
				},
				$l = () => new Promise(e => {
					if (window.grecaptcha) return e(window.grecaptcha);
					window.grecaptchaOnLoad = () => e(window.grecaptcha);
					const t = document.createElement("script");
					t.src = "https://www.google.com/recaptcha/api.js?onload=grecaptchaOnLoad&render=explicit", document.body.appendChild(t)
				});
			class eu extends o.a.Component {
				shouldComponentUpdate() {
					return !1
				}
				componentDidMount() {
					const {
						callback: e,
						size: t,
						type: n
					} = this.props;
					$l().then(s => {
						s.render(Zl, {
							callback: e,
							type: n,
							sitekey: V.a.recaptchaSitekey,
							size: t || Xl.COMPACT
						})
					})
				}
				componentWillReceiveProps(e) {
					this.props.submissionPending && !e.submissionPending && $l().then(e => {
						e.reset()
					})
				}
				render() {
					return o.a.createElement("div", {
						className: "Recaptcha",
						id: Zl
					})
				}
			}
			var tu = n("./src/reddit/components/PostCreationForm/RecaptchaOverlay/index.m.less"),
				nu = n.n(tu);
			const {
				fbt: su
			} = n("./node_modules/fbt/lib/FbtPublic.js"), ou = Je.a.div("OverlayWrapper", nu.a), ru = Je.a.div("OverlayContent", nu.a), iu = Je.a.div("ExplanationText", nu.a);
			var au = Object(r.b)(void 0, (e, t) => ({
				onChange: n => {
					e(a.f(n)), t.callback(n)
				}
			}))(e => o.a.createElement(ou, null, o.a.createElement(ru, null, o.a.createElement(iu, null, su._("Ok, one more thing ... you're human, right?", null, {
				hk: "2xDwBB"
			})), o.a.createElement(eu, {
				submissionPending: !0,
				callback: e.onChange,
				size: Xl.NORMAL,
				type: Ql
			}))));
			const cu = "POST_CREATION__CONFIRM_SAVE_DRAFT_WITH_LIMITATIONS";

			function du(e) {
				const {
					hasEventSchedule: t,
					hasRichPostMedia: n
				} = e;
				let s = d.fbt._("Saving this draft will not save media and the applied event schedule, all other information will be saved", null, {
					hk: "3NIEQF"
				});
				return n && !t ? s = d.fbt._("Saving this draft will not save media, all other information will be saved", null, {
					hk: "2tpNPY"
				}) : !n && t && (s = d.fbt._("Saving this draft will not save the applied event schedule, all other information will be saved", null, {
					hk: "3wm3T3"
				})), o.a.createElement(Re.a, {
					bodyText: s,
					onClose: e.onCancel,
					onPrimaryAction: e.onConfirm,
					onSecondaryAction: e.onCancel,
					primaryButtonText: d.fbt._("Save", null, {
						hk: "1YTiSI"
					}),
					secondaryButtonText: d.fbt._("Cancel", null, {
						hk: "2TSLl5"
					}),
					titleText: d.fbt._("Save draft", null, {
						hk: "1RxZQJ"
					})
				})
			}
			var lu = n("./src/reddit/components/PostCreationForm/SubredditChangePrompt/index.m.less"),
				uu = n.n(lu);
			const mu = {
					[f.p.ImageWillBeRemoved]: {
						removePromptTitle: () => d.fbt._("Remove image?", null, {
							hk: "3Pk53F"
						}),
						removeConfirm: () => d.fbt._("Change and remove image", null, {
							hk: "Ik8BT"
						}),
						removeCancel: () => d.fbt._("Keep image", null, {
							hk: "1e7FY0"
						}),
						details: e => d.fbt._("Aw crap, {sureddit name} doesn't allow images. If you change to {suredditName} your image will be removed.", [d.fbt._param("sureddit name", `r/${e}`), d.fbt._param("suredditName", `r/${e}`)], {
							hk: "1zQOEn"
						})
					},
					[f.p.VideoWillBeRemovedMediaNotAllowed]: {
						removePromptTitle: () => d.fbt._("Remove video?", null, {
							hk: "12xLOq"
						}),
						removeConfirm: () => d.fbt._("Change and remove video", null, {
							hk: "3izwIJ"
						}),
						removeCancel: () => d.fbt._("Keep video", null, {
							hk: "32ZDlX"
						}),
						details: e => d.fbt._("Aw crap, {sureddit name} doesn't allow videos. If you change to {suredditName} your video will be removed.", [d.fbt._param("sureddit name", `r/${e}`), d.fbt._param("suredditName", `r/${e}`)], {
							hk: "1sxEJG"
						})
					},
					[f.p.VideoWillBeRemovedTooLongForGif]: {
						removePromptTitle: () => d.fbt._("Remove video?", null, {
							hk: "12xLOq"
						}),
						removeConfirm: () => d.fbt._("Change and remove video", null, {
							hk: "3izwIJ"
						}),
						removeCancel: () => d.fbt._("Keep video", null, {
							hk: "32ZDlX"
						}),
						details: e => d.fbt._("Aw crap, {sureddit name} doesn't allow videos. Please upload a video less than 60 seconds to convert to animated GIF. If you change to {suredditName} your video will be removed.", [d.fbt._param("sureddit name", `r/${e}`), d.fbt._param("suredditName", `r/${e}`)], {
							hk: "34j8hI"
						})
					},
					[f.p.GalleryWillBeRemovedGalleryNotAllowed]: {
						removePromptTitle: () => d.fbt._("Remove gallery?", null, {
							hk: "4mddlm"
						}),
						removeConfirm: () => d.fbt._("Change and remove gallery", null, {
							hk: "2JB1HN"
						}),
						removeCancel: () => d.fbt._("Keep gallery", null, {
							hk: "26kW19"
						}),
						details: e => d.fbt._("Aw crap, {sureddit name} doesn't allow galleries. If you change to {suredditName} your gallery will be removed.", [d.fbt._param("sureddit name", `r/${e}`), d.fbt._param("suredditName", `r/${e}`)], {
							hk: "11irkw"
						})
					}
				},
				pu = Je.a.div("Wrapper", uu.a),
				hu = Je.a.wrapped(ot.a, "TitleRow", uu.a),
				bu = Je.a.div("DetailsContainer", uu.a),
				fu = Je.a.wrapped(ot.a, "ButtonRow", uu.a),
				gu = Je.a.wrapped($e.i, "CancelButton", uu.a),
				Cu = Je.a.wrapped($e.l, "ConfirmButton", uu.a);
			var xu = Object(Cs.a)(e => {
					const {
						promptType: t,
						nextSubreddit: n
					} = e, s = mu[t];
					return o.a.createElement(pu, null, o.a.createElement(hu, null, s.removePromptTitle()), o.a.createElement(bu, null, s.details(n.name)), o.a.createElement(fu, null, o.a.createElement(Cu, {
						onClick: e.onConfirmed
					}, s.removeConfirm()), o.a.createElement(gu, {
						onClick: e.onCanceled
					}, s.removeCancel())))
				}),
				Eu = n("./src/lib/filterQueryParams/index.ts"),
				vu = n("./src/reddit/icons/svgs/FormattingHyperlink/index.tsx"),
				_u = n("./src/reddit/icons/svgs/Media/index.tsx"),
				Ou = n("./src/reddit/icons/svgs/Text/index.tsx"),
				yu = n("./src/reddit/components/PostCreationForm/Tabs/index.m.less"),
				ku = n.n(yu);
			const ju = e => Je.a.wrapped(e, "Component", ku.a),
				Su = Je.a.wrapped(ot.a, "Stretched", ku.a),
				Iu = ju(vu.a),
				Tu = ju(_u.a),
				wu = Je.a.wrapped(Sl.a, "PollIcon", ku.a),
				Pu = ju(Ou.a),
				Nu = Je.a.div("Container", ku.a),
				Mu = e => o.a.createElement("button", {
					className: Object(ze.a)(ku.a.Tab, e.className, {
						[ku.a.isActive]: e.active
					}),
					disabled: e.disabled,
					onClick: e.onClick
				}, e.children),
				Du = Object(i.a)(j.d, j.e, j.h, j.Q, j.Z, _.q, (e, t) => {
					const n = Object(_.m)(e, t);
					return !!n && Object(Ka.p)(e, {
						subredditId: n
					})
				}, (e, t, n, s, o, r, i) => {
					const {
						images: a = !0,
						links: c = !0,
						text: d = !0,
						videos: l = !0
					} = n.allowedPostTypes || {}, u = !!r && r.isNSFW;
					return {
						link: o || !c || s && !Object(he.g)("links"),
						media: !l && !a && !t || o || u && !i || s && !Object(he.g)("images"),
						post: !d && !t || o || s && !Object(he.g)("text"),
						poll: !e || s && !Object(he.g)("polls")
					}
				}),
				Lu = Object(i.c)({
					canPostAsModerator: j.e,
					destSubreddit: j.h,
					govType: e => e.creations.formData.govType,
					hasCreatedPredictionDrafts: Nd.a,
					isTabsDisabled: Du,
					pending: j.Z,
					submissionType: j.a,
					subreddit: _.q,
					isImageGalleryCreationEnabled: j.L
				}),
				Ru = Object(r.b)(Lu, (e, t) => ({
					onChange: (n, s) => {
						e(a.g({
							submissionType: n,
							extra: s
						})), e((e, t) => O.s(t(), n)), e(a.v(n === p.Lb.POLL)), ((e, t, n) => {
							if (!t) return;
							const s = Object(Eu.a)(t.url, n);
							t.url !== s && e(Object(m.c)(s))
						})(e, t.pageLayer, ["url", "media", "onlyTitle", "text", "selftext"])
					}
				}));
			class Fu extends o.a.PureComponent {
				constructor() {
					super(...arguments), this.onPostTabClick = () => {
						this.props.isTabsDisabled.post || this.props.onChange(p.Lb.POST, {
							govType: this.props.govType
						})
					}, this.onMediaTabClick = () => {
						this.props.isTabsDisabled.media || this.props.onChange(p.Lb.MEDIA, {
							govType: this.props.govType
						})
					}, this.onLinkTabClick = () => {
						this.props.isTabsDisabled.link || this.props.onChange(p.Lb.LINK_ONLY, {
							govType: this.props.govType
						})
					}, this.onPollTabClick = () => {
						this.props.isTabsDisabled.poll || this.props.onChange(p.Lb.POLL, {
							govType: this.props.govType
						})
					}
				}
				render() {
					const {
						destSubreddit: e,
						hasCreatedPredictionDrafts: t,
						isTabsDisabled: n,
						submissionType: s,
						isImageGalleryCreationEnabled: r
					} = this.props, {
						name: i = "",
						allowedPostTypes: a
					} = e, {
						images: c = !0,
						videos: l = !0
					} = a || {};
					let u = d.fbt._("{imageOrImages} & Video", [d.fbt._param("imageOrImages", r ? "Images" : "Image")], {
						hk: "yYdjl"
					});
					return c && !l ? u = r ? d.fbt._("Images", null, {
						hk: "3fSX8N"
					}) : d.fbt._("Image", null, {
						hk: "uFHQ1"
					}) : l && !c && (u = d.fbt._("Video", null, {
						hk: "3w6DFr"
					})), o.a.createElement(Nu, null, o.a.createElement(Su, null, o.a.createElement(Mu, {
						active: s === p.Lb.POST,
						disabled: t || n.post,
						onClick: this.onPostTabClick
					}, o.a.createElement(Pu, null), d.fbt._("Post", null, {
						hk: "ozUj2"
					})), o.a.createElement(Mu, {
						active: s === p.Lb.MEDIA,
						disabled: t || n.media,
						onClick: this.onMediaTabClick
					}, n.media && o.a.createElement(Ft.a, {
						text: d.fbt._("Images and videos are not allowed in {subreddit name}", [d.fbt._param("subreddit name", `r/${i}`)], {
							hk: "2uC6BP"
						})
					}), o.a.createElement(Tu, null), u), o.a.createElement(Mu, {
						active: s === p.Lb.LINK_ONLY,
						disabled: t || n.link,
						onClick: this.onLinkTabClick
					}, o.a.createElement(Iu, null), d.fbt._("Link", null, {
						hk: "1pbEKv"
					})), o.a.createElement(Mu, {
						active: s === p.Lb.POLL,
						disabled: t || n.poll,
						onClick: this.onPollTabClick
					}, o.a.createElement(wu, null), d.fbt._("Poll", null, {
						hk: "SQdo4"
					}))))
				}
			}
			var Au = Object(_.t)()(Ru(Fu)),
				Bu = n("./src/reddit/components/PostCreationForm/index.m.less"),
				Uu = n.n(Bu);
			const Vu = Je.a.div("FormContent", Uu.a),
				Wu = Je.a.wrapped(x.a, "CrosspostBox", Uu.a),
				Gu = Je.a.div("FormContainer", Uu.a),
				Hu = Je.a.div("TabContent", Uu.a),
				qu = Je.a.div("PostingGuidelines", Uu.a),
				Ku = Object(_.t)({
					draftId: _.u,
					isPostCreationPage: _.D,
					pageLayer: e => e,
					sourcePostId: e => Object(_.U)(e).source_id
				}),
				zu = Object(i.c)({
					submissionType: j.a,
					allowNavigationCallback: k.a,
					contributorRequestPending: e => Object(I.g)(e, g.e.Post),
					discardGoesBack: (e, {
						pageLayer: t
					}) => {
						const n = Object(_.R)(e, {
							pageLayer: t
						});
						return !!n && "/" === n[0]
					},
					draft: S.d,
					draftsCount: T.j,
					editorMode: j.n,
					eventSchedule: j.p,
					includeUserProfile: T.f,
					isChanged: j.F,
					isNameEditable: T.L,
					isPostSubmitEnabled: Zs,
					isScheduledPost: j.Q,
					flair: j.r,
					hasError: j.u,
					havePostContent: j.B,
					linkBody: j.S,
					markdownBody: j.T,
					rteBody: j.eb,
					maxDrafts: T.U,
					modalId: y.a,
					needsCaptcha: j.W,
					nextSubreddit: j.X,
					pending: j.Z,
					postRequirements: j.nb,
					sourcePostRoot: j.ib,
					submitMode: j.lb,
					subredditOrProfile: _.o,
					title: j.pb,
					uploads: e => e.uploads
				});
			class Ju extends o.a.Component {
				constructor(e) {
					super(e), this.postFieldValidationPending = null, this.sendStartTypingInputBodyEvent = u()(() => this.props.onStartTypingInput(f.l.BODY)), this.sendStartTypingInputTitleEvent = u()(() => this.props.onStartTypingInput(f.l.TITLE)), this.sendStartTypingInputUrlEvent = u()(() => this.props.onStartTypingInput(f.l.URL)), this.onExternalAccountConnected = () => {
						this.props.onExternalAccountsDataRequested()
					}, this.onRecaptchaSucceeded = () => {
						this.props.onSubmit(this.props.submitMode, this.postFieldValidationPending)
					}, this.onDiscardPromptOnNavigationConfirm = () => {
						this.props.onTrackDiscardButtonClick(), this.props.discardGoesBack || this.props.onDiscardPromptOnNavigationConfirmed(), this.props.allowNavigationCallback && this.props.allowNavigationCallback(!0)
					}, this.onDiscardPromptOnNewPostConfirm = () => {
						this.props.onTrackDiscardButtonClick(), this.props.onToggleModal(f.c), this.props.onDiscardPromptOnCreatePostConfirmed()
					}, this.onDiscardPromptAbort = () => {
						this.props.onToggleModal(this.props.modalId), this.props.allowNavigationCallback && this.props.allowNavigationCallback(!1)
					}, this.onDiscardPromptSaveDraft = () => {
						this.props.onToggleModal(this.props.modalId), this.onSaveDraft()
					}, this.handleKeyDown = e => {
						const {
							ctrlKey: t,
							metaKey: n,
							keyCode: s
						} = e;
						(t || n) && s === h.a.Enter && this.onSubmit()
					}, this.onSubredditChangePromptConfirmed = () => {
						this.props.nextSubreddit && (this.props.onCancelAndRemoveMediaUpload(), this.props.onRedirectToSubreddit(this.props.nextSubreddit))
					}, this.onSubmit = () => {
						const {
							isPostSubmitEnabled: e,
							isScheduledPost: t,
							onSubmit: n
						} = this.props;
						e && n(t ? f.q.ScheduledPost : f.q.Post, this.postFieldValidationPending)
					}, this.onSaveDraft = async () => {
						const {
							draftId: e,
							draftsCount: t,
							eventSchedule: n,
							maxDrafts: s,
							onToggleModal: o
						} = this.props;
						!e && t >= s ? o(Yl.a.MAX_DRAFTS_MODAL_ID) : n || this.hasRichPostMedia() ? o(cu) : this.props.onSubmit(f.q.Draft, this.postFieldValidationPending)
					}, this.tryLoadDraft = e => {
						this.props.isChanged ? (this.setState({
							draftToLoad: e
						}), this.props.onToggleModal(Yl.a.LOAD_DRAFT_MODAL_ID)) : (this.props.onToggleModal(f.d), this.onLoadDraft(e))
					}, this.onLoadDraft = e => {
						e && this.props.onLoadDraft(e)
					}, this.onSelectCollection = e => {
						this.props.onSetDestCollection(e.id)
					}, this.onPromptCancel = e => {
						this.props.onToggleModal(e)
					}, this.onToggleCurrentModal = () => {
						this.props.modalId && this.props.onToggleModal(this.props.modalId)
					}, this.onPromptConfirm = e => {
						switch (e) {
							case Yl.a.LOAD_DRAFT_MODAL_ID:
								this.props.onToggleModal(e), this.onLoadDraft(this.state.draftToLoad);
								break;
							case Yl.a.MAX_DRAFTS_MODAL_ID:
								this.props.onRequestDraftList(), this.props.onToggleModal(f.d);
								break;
							default:
								this.props.onToggleModal(e)
						}
					}, this.onConfirmSavingDraftWithLimitations = () => {
						this.onToggleCurrentModal(), this.props.onSubmit(f.q.Draft, this.postFieldValidationPending)
					}, this.onToggleCollectionListModal = () => {
						this.props.onToggleModal(f.a)
					}, this.onCollectionCreated = e => {
						this.onToggleCurrentModal(), this.onSelectCollection(e)
					}, this.onDraftListClose = () => {
						this.props.onToggleModal(f.d)
					}, this.onPostFieldValidation = e => {
						this.postFieldValidationPending = e
					}, this.state = {
						draftToLoad: null
					}
				}
				componentDidMount() {
					Object(b.d)(b.a.PostComposer), this.externalAccountEventsChannel = Object(Ne.a)(), this.externalAccountEventsChannel.addEventListener("message", this.onExternalAccountConnected), this.props.isNameEditable && this.props.startChangeUsernameFlow()
				}
				componentWillUnmount() {
					Object(b.b)(b.a.PostComposer), this.externalAccountEventsChannel && this.externalAccountEventsChannel.close(), this.props.onUnmount()
				}
				hasRichPostMedia() {
					const {
						rteBody: e,
						submissionType: t
					} = this.props;
					return t === p.Lb.POST && e.isBound && Object(v.j)(e.editorState.getCurrentContent())
				}
				renderActiveForm() {
					switch (this.props.submissionType) {
						case p.Lb.POST:
						case p.Lb.POLL:
							return o.a.createElement(Gl, {
								displayPollCreation: this.props.submissionType === p.Lb.POLL,
								onChange: this.sendStartTypingInputBodyEvent,
								onPostFieldValidation: this.onPostFieldValidation,
								onSubmit: this.onSubmit
							});
						case p.Lb.MEDIA:
							return o.a.createElement(sc, null);
						case p.Lb.LINK_ONLY:
							return o.a.createElement(Yr, {
								onChange: this.sendStartTypingInputUrlEvent,
								onKeyDown: this.handleKeyDown,
								onPostFieldValidation: this.onPostFieldValidation
							});
						case p.Lb.CROSSPOST: {
							const {
								sourcePostRoot: e
							} = this.props;
							return e && o.a.createElement(Wu, {
								postId: e.id,
								mediaProps: {
									isExpando: !1,
									isListing: !1,
									isNotCardView: !0,
									post: e,
									primaryContent: !1,
									showCentered: !0,
									showFull: !0,
									shouldLoad: !0,
									shouldPause: !1
								}
							})
						}
						default:
							return "Invalid submissionType"
					}
				}
				render() {
					const {
						contributorRequestPending: e,
						draftId: t,
						includeUserProfile: n,
						modalId: s,
						needsCaptcha: r,
						nextSubreddit: i,
						postRequirements: a,
						sourcePostId: c,
						sourcePostRoot: l,
						submissionType: u,
						submitMode: m,
						subredditOrProfile: h
					} = this.props;
					if (u === p.Lb.CROSSPOST) {
						if (!l) return o.a.createElement(C.b, {
							message: d.fbt._("The original post cannot be found", null, {
								hk: "3ieS5B"
							})
						});
						if (!l.isCrosspostable || l.isSponsored) return o.a.createElement(C.a, {
							message: d.fbt._("The original post cannot be crossposted", null, {
								hk: "4hn9ht"
							})
						})
					}
					const b = a && a.guidelinesText && a.guidelinesText.trim() || "";
					return o.a.createElement(Gu, null, o.a.createElement(Hc, {
						submissionType: u,
						submitMode: m
					}), o.a.createElement(go, {
						includeUserProfile: n,
						allowCrosspostableOnly: !!c
					}), !!b && o.a.createElement(qu, null, b), o.a.createElement(Vu, null, u !== p.Lb.CROSSPOST && o.a.createElement(Au, null), o.a.createElement(Hu, null, o.a.createElement(Jl, {
						onChange: this.sendStartTypingInputTitleEvent,
						onKeyDown: this.handleKeyDown,
						onPostFieldValidation: this.onPostFieldValidation
					}), this.renderActiveForm()), e && o.a.createElement(E.a, null), o.a.createElement(so, {
						contributorRequestPending: e,
						draftId: t,
						onCancel: this.props.onDiscardPromptOnNavigationConfirmed,
						onPostFieldValidation: this.onPostFieldValidation,
						onSaveDraft: this.onSaveDraft,
						onSubmit: this.onSubmit,
						sourcePostId: c,
						subredditId: null == h ? void 0 : h.id
					}), o.a.createElement(Nc, {
						draftId: t
					})), r && o.a.createElement(au, {
						callback: this.onRecaptchaSucceeded
					}), s === Fe && o.a.createElement(Be, {
						onAbort: this.onDiscardPromptAbort,
						onDiscardConfirmed: this.onDiscardPromptOnNavigationConfirm,
						onSaveDraft: this.onDiscardPromptSaveDraft,
						submissionType: u
					}), s === f.c && o.a.createElement(Be, {
						onAbort: this.onDiscardPromptAbort,
						onDiscardConfirmed: this.onDiscardPromptOnNewPostConfirm,
						onSaveDraft: this.onDiscardPromptSaveDraft,
						submissionType: u
					}), s === f.d && o.a.createElement(Tr, {
						onClose: this.onDraftListClose,
						onLoadDraft: this.tryLoadDraft
					}), s === f.a && h && o.a.createElement(Ke.a, {
						onClose: this.onToggleCollectionListModal,
						onSelectCollection: this.onSelectCollection,
						subredditId: h.id
					}), s === f.b && h && o.a.createElement(oo.a, {
						onCancel: this.onToggleCollectionListModal,
						onCollectionCreated: this.onCollectionCreated,
						subredditId: h.id
					}), s === Yl.a.LOAD_DRAFT_MODAL_ID && o.a.createElement(Yl.b, {
						modalId: Yl.a.LOAD_DRAFT_MODAL_ID,
						onCancel: this.onPromptCancel,
						onConfirm: this.onPromptConfirm
					}), s === Yl.a.MAX_DRAFTS_MODAL_ID && o.a.createElement(Yl.b, {
						modalId: Yl.a.MAX_DRAFTS_MODAL_ID,
						onCancel: this.onPromptCancel,
						onConfirm: this.onPromptConfirm
					}), s === cu && o.a.createElement(du, {
						onCancel: this.onToggleCurrentModal,
						onConfirm: this.onConfirmSavingDraftWithLimitations,
						hasEventSchedule: !!this.props.eventSchedule,
						hasRichPostMedia: this.hasRichPostMedia()
					}), i && (s === f.p.ImageWillBeRemoved || s === f.p.VideoWillBeRemovedTooLongForGif || s === f.p.VideoWillBeRemovedMediaNotAllowed || s === f.p.GalleryWillBeRemovedGalleryNotAllowed) && o.a.createElement(xu, {
						withOverlay: !0,
						promptType: s,
						nextSubreddit: i,
						onConfirmed: this.onSubredditChangePromptConfirmed,
						onCanceled: this.props.onCancelSubredditChange
					}), o.a.createElement(qe, null))
				}
			}
			var Yu = Ku(Object(r.b)(zu, (e, {
					draftId: t,
					sourcePostId: n,
					pageLayer: s
				}) => ({
					onLoadDraft: t => e(F.q(t)),
					onSubmit: (o, r) => e(((e, t) => async (n, s, {
						apiContext: o
					}) => {
						let r = s();
						const {
							pending: i
						} = r.creations.api.post.submit, a = Object(S.g)(r);
						if (i || a) return;
						n(Oe(e)), r = s();
						const c = Object(j.a)(r),
							d = ce.d.rteVideoPoster(r),
							l = je(r),
							u = c === p.Lb.MEDIA;
						l && (d || u) && (await n(N.f(l)), je(s())) || (e === f.q.Draft ? await n(Object(F.r)(t.draftId)) : e === f.q.ScheduledPost && Object(pe.r)(r) ? await n(Se(t)) : e === f.q.ScheduledPost ? await n(Ie(t)) : await n(Te(t)))
					})(o, {
						draftId: t || void 0,
						pageLayer: s,
						postFieldValidationPending: r,
						sourcePostId: n
					})),
					onDiscardPromptOnCreatePostConfirmed: () => {
						e(a.o(!1, s))
					},
					onDiscardPromptOnNavigationConfirmed: (t, n) => {
						e(t ? Object(m.a)() : n ? Object(m.b)(n.url) : Object(m.b)("/"))
					},
					onExternalAccountsDataRequested: () => e(P.o()),
					onRedirectToSubreddit: n => e(we.a(n, t)),
					onCancelSubredditChange: () => {
						e(a.x("")), e(we.e())
					},
					onCancelAndRemoveMediaUpload: () => {
						e(Object(a.d)({
							items: [],
							selectedKey: null
						})), e(Pe.j(N.a, !0))
					},
					onClearErrors: (t, n) => t && e(a.i(n)),
					onRequestDraftList: () => e(F.p()),
					onSetDestCollection: t => e(we.d(t)),
					onStartTypingInput: t => e((e, n) => O.n(n(), f.k.TYPE, t)),
					onToggleIsChanged: t => e(a.r(t)),
					onToggleModal: t => e(a.x(t)),
					onTrackDiscardButtonClick: () => e((e, t) => O.c(t())),
					onUnmount: () => e((e, t) => {
						e(Pe.j(N.a, !0)), e(Pe.i(f.m, !0))
					}),
					onUploadPendingThumbnails: t => e(N.f(t)),
					startChangeUsernameFlow: () => e(Object(w.f)())
				}), (e, t, n) => ({
					...e,
					...t,
					...n,
					onClearErrors: n => t.onClearErrors(e.hasError || e.hasSubmitValidationError, n),
					onDiscardPromptOnNavigationConfirmed: () => t.onDiscardPromptOnNavigationConfirmed(e.discardGoesBack, e.subreddit)
				}))(Ju)),
				Zu = n("./src/reddit/components/PostingSidebar/index.tsx"),
				Qu = n("./src/reddit/layout/page/Listing/index.tsx"),
				Xu = n("./src/lib/makePostCreationPageKey/index.ts"),
				$u = n("./src/reddit/helpers/trackers/screenview.ts"),
				em = n("./src/telemetry/models/Timer.ts");
			const tm = Object(i.c)({
					destSubreddit: j.h,
					user: T.i
				}),
				nm = Object(r.b)(tm, (e, {
					pageLayer: t
				}) => ({
					onResetForm: () => e(a.o(!1, t))
				})),
				sm = Object(_.t)({
					draftId: _.u,
					pageLayer: e => e
				});
			class om extends s.Component {
				componentDidMount() {
					document.documentElement.scrollTop = document.body.scrollTop = 0;
					const e = this.props.pageLayer;
					if (e) {
						const t = Object(Xu.a)(e.urlParams);
						D.c.has(t) && this.props.sendEvent(Object($u.l)(t, em.TimerType.InApp, D.c.end(t)))
					}
				}
				UNSAFE_componentWillReceiveProps(e) {
					this.props.draftId && !e.draftId && e.onResetForm()
				}
				render() {
					const {
						destSubreddit: e,
						user: t
					} = this.props;
					if (e.isProfile) {
						if (!t) return o.a.createElement(C.b, null);
						if (Object(me.e)(t).toLowerCase() !== e.name.toLowerCase()) return o.a.createElement(C.a, null)
					}
					return o.a.createElement(Qu.a, {
						redditStyle: !0,
						disableFullscreen: !0,
						navBar: o.a.createElement("div", null),
						content: o.a.createElement(o.a.Fragment, null, o.a.createElement(c.a, null), o.a.createElement(Yu, null)),
						sidebar: o.a.createElement(Zu.a, null)
					})
				}
			}
			t.default = sm(nm(Object(ps.c)(om)))
		},
		"./src/reddit/reducers/economics/paymentSystems/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var s, o = n("./src/reddit/actions/economics/paymentSystems/constants.ts");
			! function(e) {
				e[e.Failure = 0] = "Failure", e[e.Fetched = 1] = "Fetched", e[e.NotFetched = 2] = "NotFetched", e[e.Pending = 3] = "Pending"
			}(s || (s = {}));
			const r = {
				status: s.NotFetched
			};
			t.b = (e = r, t) => {
				switch (t.type) {
					case o.a:
						if (e.status === s.Fetched && e.data.stripe && e.data.stripe.sources) {
							const n = t.payload.cardId,
								{
									[n]: s,
									...o
								} = e.data.stripe.sources;
							return {
								...e,
								data: {
									...e.data,
									stripe: {
										...e.data.stripe,
										sources: o
									}
								}
							}
						}
						return e;
					case o.e:
						if (e.status === s.Fetched && e.data.braintree && e.data.braintree.sources) {
							const n = t.payload.sourceId,
								{
									[n]: s,
									...o
								} = e.data.braintree.sources;
							return {
								...e,
								data: {
									...e.data,
									braintree: {
										...e.data.braintree,
										sources: o
									}
								}
							}
						}
						return e;
					case o.b:
						return {
							error: t.payload.error, status: s.Failure
						};
					case o.c:
						return {
							data: t.payload, status: s.Fetched
						};
					case o.d:
						return {
							status: s.Pending
						};
					default:
						return e
				}
			}
		},
		"./src/reddit/reducers/economics/subredditPremium/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s, o = n("./src/lib/constants/specialMembership.ts"),
				r = n("./src/reddit/actions/economics/subredditPremium/constants.ts"),
				i = n("./src/reddit/helpers/economics/sortBadges.ts"),
				a = n("./src/reddit/models/Badge/index.ts"),
				c = n("./src/reddit/models/Badge/managementPage.ts");
			! function(e) {
				e[e.NotFetched = 0] = "NotFetched", e[e.Fetched = 1] = "Fetched"
			}(s || (s = {}));
			const d = {};

			function l(e) {
				return "userId" in e
			}

			function u(e, t, n, s) {
				e.forEach(e => {
					e.collections && Object.keys(e.collections).forEach(o => {
						let r;
						(r = e.placement ? e.placement === a.a.First ? s[c.a.Loyalty][o] : s[c.a.Achievement][o] : l(e) ? s[c.a.Cosmetic][c.c.MyBadges][o] : s[c.a.Cosmetic][c.c.Gallery][o]) && (l(e) ? n.has(e.id) && r.unlocked.push(e) : t.has(e.id) || r.locked.push(e))
					})
				})
			}

			function m(e) {
				const t = (e, t) => {
					const n = parseInt(e.price || "0"),
						s = parseInt(t.price || "0");
					return n === s ? Object(i.b)(e, t) : n - s
				};
				return e.locked.sort(t), e.unlocked.sort(t), e
			}

			function p(e, t) {
				return Object.keys(e).map(t => e[t]).filter(e => !!e.locked.length || !!e.unlocked.length || e.id === o.a).map(m).sort((e, n) => {
					const s = t[e.id],
						o = t[n.id];
					return Object(i.b)(s, o)
				})
			}

			function h(e) {
				const t = {
					[c.a.Loyalty]: {},
					[c.a.Achievement]: {},
					[c.a.Cosmetic]: {
						[c.c.Gallery]: {},
						[c.c.MyBadges]: {}
					}
				};
				Object.keys(e.collections).forEach(n => {
					const s = e.collections[n],
						o = {
							description: s.description,
							highlight: s.extra && s.extra.style && s.extra.style.color,
							id: s.id,
							locked: [],
							title: s.title,
							unlocked: []
						};
					t[c.a.Loyalty][n] = {
						...o,
						locked: [],
						unlocked: []
					}, t[c.a.Achievement][n] = {
						...o,
						locked: [],
						unlocked: []
					}, t[c.a.Cosmetic][c.c.Gallery][n] = {
						...o,
						locked: [],
						unlocked: []
					}, t[c.a.Cosmetic][c.c.MyBadges][n] = {
						...o,
						locked: [],
						unlocked: []
					}
				});
				const n = new Set;
				e.userOwnedBadges.forEach(t => {
					const s = e.badges[t];
					s && n.add(s.type)
				});
				const s = new Set(e.userOwnedBadges);
				return u(Object.keys(e.badges).map(t => e.badges[t]), n, s, t), u(Object.keys(e.products).map(t => e.products[t]), n, s, t), {
					collections: {
						[c.a.Loyalty]: p(t[c.a.Loyalty], e.collections),
						[c.a.Achievement]: p(t[c.a.Achievement], e.collections),
						[c.a.Cosmetic]: {
							[c.c.Gallery]: p(t[c.a.Cosmetic][c.c.Gallery], e.collections),
							[c.c.MyBadges]: p(t[c.a.Cosmetic][c.c.MyBadges], e.collections)
						}
					},
					subscription: e.subscription,
					userOwnedBadges: e.userOwnedBadges.map(t => e.badges[t]).filter(Boolean)
				}
			}
			t.b = (e = d, t) => {
				switch (t.type) {
					case r.a: {
						const {
							subredditId: n
						} = t.payload, o = e[n];
						return o && o.status === s.Fetched ? {
							...e,
							[n]: {
								...o,
								data: {
									...o.data
								},
								raw: {
									...o.raw
								}
							}
						} : e
					}
					case r.h: {
						const {
							subredditId: n
						} = t.payload, o = e[n];
						return o && o.status === s.Fetched ? {
							...e,
							[n]: {
								...o,
								data: {
									...o.data,
									subscription: {
										...o.data.subscription || {},
										settings: {
											renew: !1
										}
									}
								},
								raw: {
									...o.raw,
									subscription: {
										...o.raw.subscription || {},
										settings: {
											renew: !1
										}
									}
								}
							}
						} : e
					}
					case r.i: {
						const n = t.payload;
						return {
							...e,
							[n.subredditId]: {
								raw: n,
								data: h(n),
								status: s.Fetched
							}
						}
					}
					default:
						return e
				}
			}
		},
		"./src/reddit/reducers/features/userFlair/index.ts": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/lodash/omit.js"),
				o = n.n(s),
				r = n("./src/reddit/actions/grantUserFlair/constants.ts"),
				i = n("./src/reddit/actions/modQueue/constants.ts"),
				a = n("./src/reddit/actions/pages/constants.ts"),
				c = n("./src/reddit/actions/pages/postCreation.ts"),
				d = n("./src/reddit/actions/pages/postDraft.ts"),
				l = n("./src/reddit/actions/pages/subreddit.ts"),
				u = n("./src/reddit/actions/userFlair/constants.ts");
			const m = {};
			t.a = (e = m, t) => {
				switch (t.type) {
					case l.SUBREDDIT_LOADED:
					case c.PAGE_LOADED:
					case d.PAGE_LOADED:
					case a.b:
					case a.f:
					case u.k:
						return {
							...e, ...t.payload.userFlair
						};
					case i.i:
					case i.f:
					case i.m:
					case i.p:
					case i.v: {
						const {
							response: n
						} = t.payload, {
							userFlair: s
						} = n, o = {
							...e
						};
						return Object.keys(s).forEach(e => {
							o[e] || (o[e] = s[e])
						}), o
					}
					case u.r: {
						const {
							subredditId: n,
							applied: s,
							displaySettings: o
						} = t.payload;
						return {
							...e,
							[n]: {
								...e[n],
								applied: s,
								displaySettings: o
							}
						}
					}
					case r.h: {
						const {
							subredditId: n,
							applied: s
						} = t.payload;
						return {
							...e,
							[n]: {
								...e[n],
								applied: s
							}
						}
					}
					case u.j: {
						const {
							subredditId: n,
							isEnabled: s
						} = t.payload, o = {
							...e[n].displaySettings,
							isEnabled: s
						};
						return {
							...e,
							[n]: {
								...e[n],
								displaySettings: o
							}
						}
					}
					case u.d: {
						const {
							subredditId: n,
							canAssignOwn: s
						} = t.payload, o = {
							...e[n].permissions,
							canAssignOwn: s
						};
						return {
							...e,
							[n]: {
								...e[n],
								permissions: o
							}
						}
					}
					case u.q: {
						const n = t.payload,
							s = e[n.subredditId],
							o = e[n.subredditId].templates,
							r = e[n.subredditId].templateIds,
							i = {
								...o,
								[n.template.id]: n.template
							},
							a = [...r];
						return a.includes(n.template.id) || a.push(n.template.id), {
							...e,
							[n.subredditId]: {
								...s,
								templates: i,
								templateIds: a
							}
						}
					}
					case u.g: {
						const n = t.payload,
							s = e[n.subredditId],
							r = e[n.subredditId].templates,
							i = e[n.subredditId].templateIds,
							a = o()(r, n.templateId),
							c = i.filter(e => e !== n.templateId);
						return {
							...e,
							[n.subredditId]: {
								...s,
								templates: {
									...a
								},
								templateIds: c
							}
						}
					}
					case u.m:
					case u.l: {
						const n = t.payload,
							s = e[n.subredditId];
						return {
							...e,
							[n.subredditId]: {
								...s,
								templateIds: n.templateIds
							}
						}
					}
					default:
						return e
				}
			}
		},
		"./src/reddit/reducers/pages/comments/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/redux/es/redux.js"),
				o = n("./src/reddit/actions/ads/constants.ts");
			const r = [];
			var i = (e = r, t) => {
					switch (t.type) {
						case o.o:
							return t.payload;
						case o.p:
						default:
							return e
					}
				},
				a = n("./src/reddit/actions/pages/constants.ts");
			const c = {};
			var d = (e = c, t) => {
				switch (t.type) {
					case a.d:
					case a.b:
					case a.h:
					case a.f: {
						const {
							key: n
						} = t.payload;
						return {
							...e,
							[n]: null
						}
					}
					case a.a:
					case a.e: {
						const {
							key: n,
							error: s
						} = t.payload;
						return {
							...e,
							[n]: s || {}
						}
					}
					default:
						return e
				}
			};
			const l = {};
			var u = (e = l, t) => {
				switch (t.type) {
					case a.c:
					case a.g: {
						const {
							key: n
						} = t.payload;
						return {
							...e,
							[n]: !0
						}
					}
					default:
						return e
				}
			};
			const m = {};
			var p = (e = m, t) => {
					switch (t.type) {
						case a.d:
						case a.h: {
							const {
								key: n
							} = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						case a.b:
						case a.a:
						case a.f:
						case a.e: {
							const {
								key: n
							} = t.payload;
							return {
								...e,
								[n]: !1
							}
						}
						default:
							return e
					}
				},
				h = Object(s.c)({
					error: d,
					fullyLoaded: u,
					pending: p
				}),
				b = n("./node_modules/lodash/uniqBy.js"),
				f = n.n(b),
				g = n("./node_modules/lodash/values.js"),
				C = n.n(g),
				x = n("./src/reddit/actions/comment/constants.ts"),
				E = n("./src/reddit/actions/comment/websocket/constants.ts");
			const v = {};

			function _(e) {
				return f()(e, "id").sort((e, t) => e.created - t.created)
			}
			var O = (e = v, t) => {
					switch (t.type) {
						case a.f:
						case x.u:
						case a.b: {
							const {
								comments: n,
								key: s
							} = t.payload, o = e[s] ? e[s] : [], r = function(e, t) {
								return C()(e).map(e => {
									const n = e.isStickied ? t && t.created || Math.round(Date.now() / 1e3) : e.created;
									return {
										id: e.id,
										created: n,
										stickied: e.isStickied,
										authorId: e.authorId
									}
								})
							}(n, o.find(e => e.stickied)), i = _([...o, ...r]);
							return {
								...e,
								[s]: [...i]
							}
						}
						case E.b:
						case E.c:
						case E.d:
						case x.G:
						case x.F: {
							const {
								comment: {
									id: n,
									created: s,
									isStickied: o,
									authorId: r
								},
								commentsPageKey: i,
								isChatSort: a
							} = t.payload;
							return !1 === a ? e : {
								...e,
								[i]: [..._([...e[i] ? e[i] : [], {
									id: n,
									created: s,
									stickied: o,
									authorId: r
								}])]
							}
						}
						default:
							return e
					}
				},
				y = n("./node_modules/lodash/mapValues.js"),
				k = n.n(y),
				j = n("./src/reddit/helpers/commentList/index.ts"),
				S = n("./src/reddit/models/Comment/index.ts");
			const I = {};

			function T(e) {
				const t = e;
				return k()(t, ({
					depth: e,
					next: t,
					prev: n
				}) => ({
					depth: e,
					next: t,
					prev: n
				}))
			}
			var w = (e = I, t) => {
				switch (t.type) {
					case x.u: {
						const {
							comments: n,
							commentLists: s,
							continueThreads: o,
							key: r,
							moreCommentsItem: i,
							moreComments: a
						} = t.payload, c = s[i.postId], d = e[r], l = {}, u = d[i.id];
						if (u && u.prev) {
							const {
								id: e
							} = u.prev;
							l[e] = {
								...d[e],
								next: c.head || u.next
							}
						}
						if (u && u.next) {
							const {
								id: e
							} = u.next;
							l[e] = {
								...d[e],
								prev: c.tail || u.prev
							}
						}
						if (c.head && c.tail) {
							const e = Object(j.c)({
									commentLink: c.head,
									commentsDict: n,
									moreCommentsDict: a,
									continueThreadDict: o
								}),
								t = Object(j.c)({
									commentLink: c.tail,
									commentsDict: n,
									moreCommentsDict: a,
									continueThreadDict: o
								});
							u && (e.prev = u.prev, t.next = u.next)
						}
						return {
							...e,
							[r]: {
								...e[r],
								...T(n),
								...T(o),
								...T(a),
								...l
							}
						}
					}
					case a.b:
					case a.f: {
						const {
							comments: n,
							continueThreads: s,
							key: o,
							moreComments: r
						} = t.payload;
						return {
							...e,
							[o]: {
								...e[o],
								...T(n),
								...T(s),
								...T(r)
							}
						}
					}
					case E.b:
						const {
							comment: n, commentsPageKey: s, depth: o, headCommentId: r, originId: i, isChatSort: c
						} = t.payload, d = e[s], l = {};
						let u = null;
						if (c) return r && (l[r] = {
							...d[r],
							prev: Object(S.g)(n.id)
						}, u = Object(S.g)(r)), {
							...e,
							[s]: {
								...e[s],
								...l,
								[n.id]: {
									depth: 0,
									next: u,
									prev: null
								}
							}
						}; {
							let t = null;
							const r = n.parentId;
							if (i && r) {
								const n = "moreComments-" + i;
								if (d[r] && !d[n]) {
									const i = d[r].next;
									return i && (l[i.id] = {
										...d[i.id],
										prev: Object(S.h)(n)
									}, u = i), l[r] = {
										...d[r],
										next: Object(S.h)(n)
									}, t = Object(S.g)(r), {
										...e,
										[s]: {
											...e[s],
											...l,
											[n]: {
												depth: o || 0,
												next: u,
												prev: t
											}
										}
									}
								}
							}
							return e
						}
						case x.G: {
							const {
								comment: n,
								commentsPageKey: s,
								headCommentId: o
							} = t.payload, r = e[s], i = {};
							let a = null;
							return o && (i[o] = {
								...r[o],
								prev: Object(S.g)(n.id)
							}, a = Object(S.g)(o)), {
								...e,
								[s]: {
									...e[s],
									...i,
									[n.id]: {
										depth: 0,
										next: a,
										prev: null
									}
								}
							}
						}
						case x.F: {
							const {
								comment: n,
								commentsPageKey: s,
								parentCommentId: o,
								depth: r
							} = t.payload, i = e[s], a = {};
							let c = null;
							if (!i[o]) return e;
							const d = i[o].next;
							return d && (a[d.id] = {
								...i[d.id],
								prev: Object(S.g)(n.id)
							}, c = d), a[o] = {
								...i[o],
								next: Object(S.g)(n.id)
							}, {
								...e,
								[s]: {
									...e[s],
									...a,
									[n.id]: {
										depth: r,
										next: c,
										prev: Object(S.g)(o)
									}
								}
							}
						}
						default:
							return e
				}
			};
			const P = {};
			var N = (e = P, t) => {
				switch (t.type) {
					case E.b:
					case E.c:
					case x.G: {
						const {
							comment: n,
							commentsPageKey: s,
							isChatSort: o
						} = t.payload;
						return !1 === o ? e : {
							...e,
							[s]: n.id
						}
					}
					case a.b:
					case a.f: {
						const {
							commentLists: n,
							key: s,
							postId: o
						} = t.payload;
						return {
							...e,
							[s]: n[o] && n[o].head ? n[o].head.id : null
						}
					}
					default:
						return e
				}
			};
			const M = {};
			var D = (e = M, t) => {
				switch (t.type) {
					case a.d:
					case a.b:
					case a.c:
					case a.h: {
						const {
							key: n,
							postId: s
						} = t.payload;
						return {
							...e,
							[n]: s
						}
					}
					case x.G: {
						const {
							parentId: n,
							commentsPageKey: s
						} = t.payload;
						return e[s] ? e : {
							...e,
							[s]: n
						}
					}
					default:
						return e
				}
			};
			t.a = Object(s.c)({
				api: h,
				keyToChatCommentLinks: O,
				keyToCommentThreadLinkSets: w,
				keyToHeadCommentId: N,
				keyToPostId: D,
				ads: i
			})
		},
		"./src/reddit/selectors/authorFlair.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "c", (function() {
				return r
			}));
			const s = (e, {
					post: t
				}) => {
					const n = t.belongsTo.id;
					if (!n) return null;
					const s = e.authorFlair.models[n];
					if (!s) return null;
					const o = t.author;
					return o && s[o] || null
				},
				o = (e, {
					subredditId: t
				}) => {
					const n = e.authorFlair && e.authorFlair.inContext && e.authorFlair.inContext.username;
					if (!n) return null;
					if (!t) return null;
					const s = e.authorFlair.models[t];
					return s ? s[n] : null
				},
				r = e => e.authorFlair.inContext
		},
		"./src/reddit/selectors/comments.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return g
			})), n.d(t, "d", (function() {
				return C
			})), n.d(t, "u", (function() {
				return x
			})), n.d(t, "w", (function() {
				return E
			})), n.d(t, "x", (function() {
				return v
			})), n.d(t, "k", (function() {
				return O
			})), n.d(t, "g", (function() {
				return y
			})), n.d(t, "G", (function() {
				return k
			})), n.d(t, "n", (function() {
				return j
			})), n.d(t, "o", (function() {
				return S
			})), n.d(t, "j", (function() {
				return I
			})), n.d(t, "l", (function() {
				return T
			})), n.d(t, "h", (function() {
				return w
			})), n.d(t, "a", (function() {
				return P
			})), n.d(t, "b", (function() {
				return N
			})), n.d(t, "q", (function() {
				return M
			})), n.d(t, "m", (function() {
				return D
			})), n.d(t, "t", (function() {
				return L
			})), n.d(t, "z", (function() {
				return R
			})), n.d(t, "I", (function() {
				return F
			})), n.d(t, "s", (function() {
				return A
			})), n.d(t, "B", (function() {
				return B
			})), n.d(t, "C", (function() {
				return U
			})), n.d(t, "E", (function() {
				return V
			})), n.d(t, "r", (function() {
				return W
			})), n.d(t, "e", (function() {
				return G
			})), n.d(t, "v", (function() {
				return H
			})), n.d(t, "J", (function() {
				return q
			})), n.d(t, "f", (function() {
				return K
			})), n.d(t, "i", (function() {
				return z
			})), n.d(t, "F", (function() {
				return J
			})), n.d(t, "A", (function() {
				return Y
			})), n.d(t, "H", (function() {
				return Z
			})), n.d(t, "p", (function() {
				return Q
			})), n.d(t, "K", (function() {
				return X
			})), n.d(t, "D", (function() {
				return $
			})), n.d(t, "y", (function() {
				return ee
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/lodash/values.js"),
				o = n.n(s),
				r = n("./src/lib/constants/index.ts"),
				i = n("./src/lib/makeCommentPermalink/index.ts"),
				a = n("./src/lib/objectSelector/index.ts"),
				c = n("./src/reddit/constants/comments.ts"),
				d = n("./src/reddit/models/Post/index.ts"),
				l = n("./src/reddit/selectors/posts.ts"),
				u = n("./src/reddit/selectors/subreddit.ts"),
				m = n("./src/reddit/selectors/user.ts"),
				p = n("./src/reddit/selectors/commentSelector.ts"),
				h = n("./src/lib/initializeClient/installReducer.ts"),
				b = n("./src/reddit/reducers/features/comments/index.ts"),
				f = n("./src/reddit/reducers/pages/comments/index.ts");
			Object(h.a)({
				features: {
					comments: b.a
				},
				pages: {
					comments: f.a
				}
			});
			const g = (e, {
					commentsPageKey: t
				}) => e.pages.comments.api.error[t],
				C = (e, {
					commentsPageKey: t
				}) => e.pages.comments.api.pending[t],
				x = (e, {
					commentsPageKey: t
				}) => e.pages.comments.api.fullyLoaded[t],
				E = (e, t) => e.pages.comments.keyToHeadCommentId[t.commentsPageKey],
				v = (e, t) => {
					const n = E(e, t);
					if (n) return Object(p.a)(e, {
						commentId: n
					})
				},
				_ = [],
				O = Object(a.a)((e, t) => {
					const n = v(e, t),
						s = n && n.id;
					if (!s) return _;
					const {
						commentsPageKey: o
					} = t, r = e.pages.comments.keyToCommentThreadLinkSets[o], i = [];
					let a = {
						id: s,
						type: c.a.Comment
					};
					do {
						i.push(a), a = r[a.id].next
					} while (a);
					return i
				}),
				y = (e, t) => E(e, t) ? e.pages.comments.keyToChatCommentLinks[t.commentsPageKey] : [],
				k = (e, {
					commentsPageKey: t
				}) => {
					const n = e.pages.comments.keyToPostId[t];
					return n ? e.posts.models[n] : null
				},
				j = (e, {
					commentId: t,
					commentLink: n,
					commentsPageKey: s
				}) => {
					const o = e.pages.comments.keyToCommentThreadLinkSets[s];
					return o ? n ? o[n.id] : t ? o[t] : null : null
				},
				S = (e, {
					commentsPageKey: t
				}) => e.pages.comments.keyToCommentThreadLinkSets[t],
				I = (e, t) => {
					const n = t.commentsPageKey ? j(e, t) : null;
					return n ? n.depth : null
				},
				T = (e, {
					commentLink: t
				}) => {
					const {
						id: n,
						type: s
					} = t;
					switch (s) {
						case c.a.Comment:
							return e.features.comments.models[n];
						case c.a.MoreComments:
							return e.moreComments.models[n];
						case c.a.ContinueThread:
							return e.continueThreads.models[n];
						default:
							return null
					}
				},
				w = (e, t) => {
					if (e.platform.currentPage && e.platform.currentPage.urlParams && e.platform.currentPage.urlParams.partialPostId) {
						const {
							partialPostId: t
						} = e.platform.currentPage.urlParams, n = Object(d.r)(t);
						return Array.from(new Set(Object.keys(e.features.comments.models).filter(t => e.features.comments.models[t].postId === n && e.features.comments.models[t].author !== r.A).map(t => e.features.comments.models[t].author)))
					}
					return []
				},
				P = (e, {
					commentsPageKey: t
				}) => e.features.comments.collapsed[t],
				N = e => e.moreComments.models,
				M = e => e.features.comments.models,
				D = (e, {
					commentId: t
				}) => {
					const n = Object(p.a)(e, {
						commentId: t
					});
					return n ? Object(i.a)(Object(l.C)(e, n), t) : ""
				},
				L = (e, {
					commentId: t
				}) => !!(t && e.features.comments.focused && e.features.comments.focused[t]),
				R = (e, {
					commentId: t,
					commentsPageKey: n
				}) => !!(t && e.features.comments.isEditing[n] && e.features.comments.isEditing[n][t]),
				F = (e, {
					commentId: t,
					commentsPageKey: n
				}) => !!(t && e.features.comments.replyFormOpen[n] && e.features.comments.replyFormOpen[n][t]),
				A = (e, {
					commentsPageKey: t
				}) => {
					const n = t && e.features.comments.replyFormOpen[t] || {},
						s = Object.keys(n).find(e => n[e]),
						o = Object(p.a)(e, {
							commentId: s
						}),
						r = o && I(e, {
							commentId: o.id,
							commentLink: void 0,
							commentsPageKey: t
						});
					if (o && "number" == typeof r) return {
						...o,
						depth: r
					}
				},
				B = (e, {
					moreCommentsId: t
				}) => e.moreComments.models[t],
				U = (e, {
					moreCommentsId: t
				}) => !!e.moreComments.api.pending[t],
				V = (e, {
					commentsPageKey: t
				}) => {
					const n = e.pages.comments.keyToPostId[t];
					if (n) {
						const t = o()(e.moreComments.models).find(t => t.postId === n && 0 === t.depth && !(void 0 !== e.moreComments.api.pending[t.id]));
						if (t) return {
							moreCommentId: t.id,
							pending: !!e.moreComments.api.pending[t.id]
						}
					}
					return null
				},
				W = (e, {
					id: t
				}) => e.continueThreads.models[t],
				G = (e, {
					commentId: t
				}) => {
					const n = t ? e.features.comments.models[t] : void 0;
					if (!n) return null;
					const s = e.authorFlair.models[n.subredditId];
					return s ? s[n.author] : null
				},
				H = (e, {
					draftKey: t
				}) => !!e.features.comments.submit.error[t],
				q = (e, {
					draftKey: t
				}) => {
					const n = e.features.comments.submit.error[t];
					return n && n.fields ? n.fields.map(e => e.msg) : []
				},
				K = (e, {
					draftKey: t
				}) => {
					const n = e.features.comments.drafts[t];
					return !!n && n.autofocusDisabled
				},
				z = (e, {
					draftKey: t
				}) => e.features.comments.drafts[t],
				J = (e, {
					commentId: t
				}) => {
					const n = t ? e.features.comments.submit.error[t] : void 0;
					return n && n.fields ? n.fields.map(e => e.msg) : void 0
				},
				Y = (e, {
					commentId: t
				}) => !!t && e.features.comments.submit.pending[t],
				Z = (e, {
					commentId: t
				}) => !!t && e.features.comments.models[t].sendReplies,
				Q = e => e.features.comments.visitHighlightFilter,
				X = (e, t) => {
					const n = Object(p.a)(e, t);
					if (n) return Object(u.Y)(e, n)
				},
				$ = (e, {
					postId: t
				}) => e.features.comments.newCommentsCount[t] ? e.features.comments.newCommentsCount[t] : 0,
				ee = (e, {
					commentId: t
				}) => {
					const n = Object(p.a)(e, {
							commentId: t
						}),
						s = n && n.authorId || "";
					return Object(m.R)(e, s)
				}
		},
		"./src/reddit/selectors/experiments/presenceIndicator.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return i
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				o = n("./src/reddit/helpers/chooseVariant/index.ts");
			const r = e => {
					return Object(o.c)(e, {
						experimentEligibilitySelector: o.a,
						experimentName: s.yc
					}) === s.Ic.Enabled
				},
				i = e => {
					return Object(o.c)(e, {
						experimentEligibilitySelector: o.a,
						experimentName: s.xc
					}) === s.Hc.Enabled
				}
		},
		"./src/reddit/selectors/features/predictions/creation/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return i
			})), n.d(t, "a", (function() {
				return a
			}));
			var s = n("./src/lib/initializeClient/installReducer.ts"),
				o = n("./src/reddit/reducers/features/predictions/index.ts"),
				r = n("./src/reddit/selectors/postCreations.ts");
			Object(s.a)({
				features: {
					predictions: o.a
				}
			});
			const i = e => {
					const t = (e => {
						var t, n;
						return null === (n = null === (t = e.features) || void 0 === t ? void 0 : t.predictions) || void 0 === n ? void 0 : n.creation
					})(e);
					return (null == t ? void 0 : t.length) ? null == t ? void 0 : t.map(t => {
						const n = Object(r.cb)({
								...e,
								creations: {
									...e.creations,
									formData: t.formData,
									formState: t.formState
								}
							}, {}),
							s = t.formData.polls,
							o = s.options.map(e => ({
								text: e.text
							})),
							i = {};
						return n.document ? i.richText = JSON.stringify({
							document: n.document
						}) : n.markdown && (i.markdown = n.markdown), {
							title: n.title,
							isLiveChat: n.isChatPost,
							isNsfw: n.isNSFW,
							isSpoiler: n.isSpoiler,
							votingEndsAt: s.endDate.toISOString(),
							body: i,
							options: o
						}
					}) : []
				},
				a = e => {
					var t, n;
					return !!(null === (n = null === (t = e.features) || void 0 === t ? void 0 : t.predictions) || void 0 === n ? void 0 : n.creation.length)
				}
		},
		"./src/reddit/selectors/gild.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return s
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "f", (function() {
				return r
			})), n.d(t, "g", (function() {
				return i
			})), n.d(t, "c", (function() {
				return a
			})), n.d(t, "e", (function() {
				return c
			})), n.d(t, "a", (function() {
				return d
			}));
			const s = e => e.gild.gildModalThingId,
				o = e => e.gild.correlationId || void 0,
				r = e => e.gild.isAnonymous,
				i = e => e.gild.isIframed,
				a = e => e.gild.message,
				c = e => e.gild.api.pending,
				d = e => e.gild.api.error
		},
		"./src/reddit/selectors/gold/awardIcon.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return u
			})), n.d(t, "b", (function() {
				return m
			})), n.d(t, "a", (function() {
				return p
			})), n.d(t, "e", (function() {
				return h
			})), n.d(t, "d", (function() {
				return b
			}));
			var s = n("./src/reddit/models/Gold/Award.ts"),
				o = n("./src/reddit/selectors/commentSelector.ts"),
				r = n("./src/reddit/selectors/gold/giveAwards.ts"),
				i = n("./src/reddit/selectors/posts.ts"),
				a = n("./src/reddit/selectors/user.ts"),
				c = n("./src/reddit/selectors/userPrefs.ts");
			const d = [32, 48, 64, 128],
				l = (e, t, n) => {
					const s = t ? e[`staticIcon${n}`] : e[`icon${n}`];
					return (null == s ? void 0 : s.url) ? s.url : t ? e.staticIcon.url : e.icon.url
				},
				u = ({
					award: e,
					size: t,
					prefersReducedMotion: n,
					postOrComment: o
				}) => e.awardSubType === s.d.Group ? (({
					award: e,
					size: t,
					prefersReducedMotion: n,
					postOrComment: s
				}) => {
					let o = e;
					if ((null == s ? void 0 : s.awardCountsById) && s.awardCountsById[e.id] && e.tiers) {
						const t = s.awardCountsById[e.id];
						o = e.tiers.reduce((e, n) => t >= n.awardingsRequired ? n : e)
					}
					return l(o, n, t)
				})({
					award: e,
					size: t,
					prefersReducedMotion: n,
					postOrComment: o
				}) : l(e, n, t),
				m = (e, {
					awards: t,
					minSize: n,
					postOrCommentId: s
				}) => {
					const r = Object(c.c)(e),
						a = d.find(e => e >= n),
						l = s ? Object(i.D)(e, {
							postId: s
						}) || Object(o.a)(e, {
							commentId: s
						}) : void 0;
					return t.reduce((e, t) => (t && (e[t.id] = u({
						award: t,
						size: a,
						prefersReducedMotion: r,
						postOrComment: l
					})), e), {})
				},
				p = (e, {
					award: t,
					minSize: n,
					postOrCommentId: s
				}) => t ? m(e, {
					awards: [t],
					minSize: n,
					postOrCommentId: s
				})[t.id] : void 0,
				h = (e, {
					minSize: t,
					userName: n
				}) => {
					const s = Object(a.mb)(e, {
						userName: n
					});
					if (s && s.awardedLastMonth && s.awardedLastMonth.topAward) return p(e, {
						award: s.awardedLastMonth.topAward,
						minSize: t
					})
				},
				b = e => {
					const t = Object(r.b)(e),
						n = Object(r.a)(e);
					return p(e, {
						award: t,
						postOrCommentId: n || void 0,
						minSize: 512
					})
				}
		},
		"./src/reddit/selectors/gold/giveAwards.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return o
			}));
			const s = e => e.gild.selectedAward,
				o = e => e.gild.gildedThing
		},
		"./src/reddit/selectors/goldPurchaseModals.ts": function(e, t, n) {
			"use strict";
			n.d(t, "p", (function() {
				return i
			})), n.d(t, "r", (function() {
				return a
			})), n.d(t, "q", (function() {
				return c
			})), n.d(t, "t", (function() {
				return d
			})), n.d(t, "s", (function() {
				return l
			})), n.d(t, "b", (function() {
				return u
			})), n.d(t, "a", (function() {
				return m
			})), n.d(t, "n", (function() {
				return p
			})), n.d(t, "o", (function() {
				return h
			})), n.d(t, "y", (function() {
				return b
			})), n.d(t, "c", (function() {
				return f
			})), n.d(t, "h", (function() {
				return g
			})), n.d(t, "v", (function() {
				return C
			})), n.d(t, "w", (function() {
				return x
			})), n.d(t, "u", (function() {
				return E
			})), n.d(t, "x", (function() {
				return v
			})), n.d(t, "f", (function() {
				return _
			})), n.d(t, "g", (function() {
				return O
			})), n.d(t, "i", (function() {
				return y
			})), n.d(t, "k", (function() {
				return k
			})), n.d(t, "l", (function() {
				return j
			})), n.d(t, "j", (function() {
				return S
			})), n.d(t, "m", (function() {
				return I
			})), n.d(t, "e", (function() {
				return T
			})), n.d(t, "d", (function() {
				return w
			}));
			var s = n("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				o = n("./src/lib/initializeClient/installReducer.ts"),
				r = n("./src/reddit/reducers/features/goldPurchase/index.ts");
			Object(o.a)({
				features: {
					goldPurchase: r.a
				}
			});
			const i = e => e.features.goldPurchase.purchaseModal.activePage,
				a = e => e.features.goldPurchase.purchaseModal.gildThingId || void 0,
				c = e => e.features.goldPurchase.purchaseModal.correlationId || void 0,
				d = e => e.features.goldPurchase.purchaseModal.showModal,
				l = e => e.features.goldPurchase.purchaseModal.packageId,
				u = e => e.features.goldPurchase.packageOfferModal.packageId,
				m = e => {
					const t = Object(s.i)(e),
						n = (e => e.features.goldPurchase.premiumPurchaseModal.packageId)(e);
					return t.length && n && t.find(e => e.mobileId === n) || null
				},
				p = e => e.features.goldPurchase.premiumPurchaseModal.activePage,
				h = e => e.features.goldPurchase.premiumPurchaseModal.showModal,
				b = e => e.features.goldPurchase.updateCardModal.pending,
				f = e => e.features.goldPurchase.payment.paymentMethod,
				g = e => e.features.goldPurchase.payment.cardName,
				C = e => e.features.goldPurchase.payment.savedCardsPending,
				x = e => e.features.goldPurchase.payment.savedCards,
				E = e => e.features.goldPurchase.payment.rememberCard,
				v = e => e.features.goldPurchase.payment.useSavedCard,
				_ = e => e.features.goldPurchase.payment.cardValidation.cardCvc,
				O = e => e.features.goldPurchase.payment.cardValidation.cardExpiry,
				y = e => e.features.goldPurchase.payment.cardValidation.cardNumber,
				k = e => e.features.goldPurchase.payment.cardValidation.nameOnCard,
				j = e => e.features.goldPurchase.payment.cardValidation.postalCode,
				S = e => e.features.goldPurchase.payment.stripeToken.errorMessage,
				I = e => e.features.goldPurchase.payment.stripeToken.pending,
				T = e => e.features.goldPurchase.payment.paypal.passthrough,
				w = e => e.features.goldPurchase.payment.paypal.errorMessage
		},
		"./src/reddit/selectors/gov.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return c
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "d", (function() {
				return l
			})), n.d(t, "e", (function() {
				return u
			})), n.d(t, "g", (function() {
				return m
			})), n.d(t, "q", (function() {
				return p
			})), n.d(t, "h", (function() {
				return h
			})), n.d(t, "i", (function() {
				return b
			})), n.d(t, "n", (function() {
				return f
			})), n.d(t, "o", (function() {
				return g
			})), n.d(t, "m", (function() {
				return C
			})), n.d(t, "k", (function() {
				return E
			})), n.d(t, "r", (function() {
				return v
			})), n.d(t, "a", (function() {
				return _
			})), n.d(t, "f", (function() {
				return O
			})), n.d(t, "p", (function() {
				return y
			})), n.d(t, "l", (function() {
				return k
			})), n.d(t, "j", (function() {
				return j
			}));
			var s = n("./src/reddit/contexts/PageLayer/index.tsx"),
				o = n("./src/reddit/endpoints/governance/crypto.ts");
			const r = [],
				i = {},
				a = {
					filled: "img/communityPoints/default_filled.png",
					grey: "img/communityPoints/default_grey.png"
				},
				c = (e, {
					subredditId: t
				}) => {
					const n = v(e, {
						subredditId: t
					});
					return n && n.extra && n.extra.contracts && n.extra.contracts.harberger ? n.extra.contracts.harberger : {
						address: void 0,
						decimals: void 0,
						image: void 0,
						taxRate: .01,
						token: void 0
					}
				},
				d = (e, t) => {
					const n = x(e, t);
					if (n) return n.mainHeader
				},
				l = (e, t) => {
					const n = x(e, t);
					return n && n.mainHeader ? n.mainHeader.price : "0"
				},
				u = (e, t) => {
					const n = x(e, t);
					return n && n.mainHeader ? {
						owner: n.mainHeader.owner,
						ownerId: n.mainHeader.ownerId
					} : i
				},
				m = (e, t) => t && t.subredditId ? (e.user.wallets[t.subredditId] || {}).latest : void 0,
				p = (e, t) => {
					const n = m(e, t),
						s = n && n.publicAddress;
					if (!s) throw new Error("No wallet address found");
					return s
				},
				h = (e, t) => {
					const n = m(e, t);
					return n && n.amount || "0"
				},
				b = (e, t) => {
					const n = Object(s.m)(e, t);
					return n && e.subreddits.gov.releaseNotes[n] || r
				},
				f = (e, t) => t && t.subredditId && (e.subreddits.gov.meta[t.subredditId] || {}).name || "Subreddit Points",
				g = (e, t) => t && t.subredditId && (e.subreddits.gov.meta[t.subredditId] || {}).images || a,
				C = (e, t) => {
					const n = y(e, t);
					return n && n.decimals ? "1" + "0".repeat(n.decimals) : "1"
				},
				x = (e, t) => t.subredditId ? e.subreddits.gov.assets[t.subredditId] : void 0,
				E = (e, t) => t && t.subredditId ? e.subreddits.gov.meta[t.subredditId] : void 0,
				v = (e, t) => {
					const n = E(e, t);
					return n && n.walletProvider
				},
				_ = (e, t) => {
					const n = v(e, t),
						s = E(e, t);
					return n && n.provider || s && s.provider
				},
				O = (e, t) => {
					const n = _(e, t);
					return n === o.a.Ethereum || n === o.a.Rinkeby || n === o.a.EthTraderEthereum || n === o.a.EthTraderRinkeby
				},
				y = (e, t) => {
					const n = v(e, t),
						s = _(e, t);
					if (n && !n.inTransition && s === o.a.Stellar) return {
						address: n.extra && n.extra.issuerAddress || "",
						decimals: n.extra && n.extra.decimals || 7,
						symbol: n.extra && n.extra.token || "PHOTON"
					};
					const r = n && n.extra && n.extra.contracts,
						i = r && r.unlocked;
					return i && {
						address: i.address,
						symbol: i.token || "",
						decimals: i.decimals || 18,
						image: i.image
					}
				},
				k = (e, {
					subredditId: t
				}) => {
					const n = v(e, {
						subredditId: t
					});
					return n && n.extra && n.extra.contracts && n.extra.contracts.subscriptions ? n.extra.contracts.subscriptions : {
						address: void 0
					}
				},
				j = (e, t) => {
					const n = E(e, t);
					return !!n && !!n.walletProvider && !n.walletProvider.inTransition
				}
		},
		"./src/reddit/selectors/moderatingComments.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return o
			}));
			const s = (e, {
					commentId: t,
					commentsPageKey: n
				}) => {
					if (!t) return !1;
					if (e.features.comments.collapsed[n] && t in e.features.comments.collapsed[n]) return !!e.features.comments.collapsed[n][t];
					const s = e.features.comments.models[t];
					return !!s && ("computedCollapsed" in s ? !!s.computedCollapsed : s.collapsedBecauseCrowdControl ? !e.modModeEnabled : s.collapsed)
				},
				o = (e, {
					commentId: t
				}) => {
					if (!t) return !1;
					const n = e.features.comments.models[t];
					return !(!n || !n.collapsedBecauseCrowdControl) && e.modModeEnabled
				}
		},
		"./src/reddit/selectors/scheduledPosts/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "h", (function() {
				return i
			})), n.d(t, "g", (function() {
				return a
			})), n.d(t, "c", (function() {
				return c
			})), n.d(t, "i", (function() {
				return d
			})), n.d(t, "j", (function() {
				return l
			})), n.d(t, "f", (function() {
				return u
			})), n.d(t, "q", (function() {
				return h
			})), n.d(t, "l", (function() {
				return b
			})), n.d(t, "p", (function() {
				return g
			})), n.d(t, "k", (function() {
				return C
			})), n.d(t, "a", (function() {
				return x
			})), n.d(t, "r", (function() {
				return E
			})), n.d(t, "m", (function() {
				return v
			})), n.d(t, "n", (function() {
				return _
			})), n.d(t, "d", (function() {
				return O
			})), n.d(t, "e", (function() {
				return y
			})), n.d(t, "o", (function() {
				return k
			})), n.d(t, "b", (function() {
				return j
			}));
			var s = n("./src/reddit/helpers/graphql/normalizeFlairFromGql/index.ts"),
				o = n("./src/reddit/models/Flair/index.ts"),
				r = n("./src/reddit/models/ScheduledPost/index.ts");
			const i = (e, {
					subredditId: t
				}) => ((e, {
					subredditId: t,
					type: n
				}) => !!e.posts.scheduledPosts[n].models[t])(e, {
					subredditId: t,
					type: r.f.standalonePosts
				}),
				a = (e, {
					subredditId: t,
					type: n
				}) => !!e.posts.scheduledPosts[n].pageInfo[t] && e.posts.scheduledPosts[n].pageInfo[t].hasNextPage,
				c = (e, {
					subredditId: t,
					type: n
				}) => e.posts.scheduledPosts[n].pageInfo[t] ? e.posts.scheduledPosts[n].pageInfo[t].endCursor : null,
				d = e => e.posts.scheduledPosts.api.pending,
				l = e => e.posts.scheduledPosts.api.pendingUpdate,
				u = e => e.posts.scheduledPosts.api.error,
				m = {},
				p = [],
				h = (e, {
					subredditId: t
				}) => (e.posts.scheduledPosts.standalonePosts.postOrder[t] || p).filter(n => !!(e.posts.scheduledPosts.standalonePosts.models[t] || m)[n]).map(n => e.posts.scheduledPosts.standalonePosts.models[t][n]),
				b = (e, {
					subredditId: t
				}) => (e.posts.scheduledPosts.recurringPosts.postOrder[t] || p).filter(n => !!(e.posts.scheduledPosts.recurringPosts.models[t] || m)[n]).map(n => e.posts.scheduledPosts.recurringPosts.models[t][n]),
				f = (e, {
					subredditId: t,
					scheduledPostId: n,
					type: s
				}) => {
					return (e.posts.scheduledPosts[s].models[t] || m)[n] || void 0
				},
				g = (e, {
					subredditId: t,
					scheduledPostId: n
				}) => f(e, {
					subredditId: t,
					scheduledPostId: n,
					type: r.f.standalonePosts
				}),
				C = (e, {
					subredditId: t,
					scheduledPostId: n
				}) => {
					const s = f(e, {
						subredditId: t,
						scheduledPostId: n,
						type: r.f.recurringPosts
					});
					return s || s
				},
				x = (e, {
					subredditId: t,
					scheduledPostId: n
				}) => g(e, {
					subredditId: t,
					scheduledPostId: n
				}) || C(e, {
					subredditId: t,
					scheduledPostId: n
				}),
				E = e => e.creations.formData.scheduledPostId,
				v = ({
					scheduledPost: e
				}) => (({
					flair: e,
					isNsfw: t,
					isSpoiler: n,
					isOriginalContent: r
				}) => {
					const i = [];
					return r && i.push({
						text: "OC",
						type: o.f.Oc
					}), e && i.push(...Object(s.b)(e)), n && i.push({
						text: "spoiler",
						type: o.f.Spoiler
					}), t && i.push({
						text: "nsfw",
						type: o.f.Nsfw
					}), i
				})(e),
				_ = ({
					scheduledPost: e
				}) => {
					const t = v({
							scheduledPost: e
						}),
						n = t.find(e => e.type === o.f.Richtext);
					return n || (t.find(e => e.type === o.f.Text) || null)
				},
				O = e => e.posts.scheduledPosts[r.f.recurringPosts].editModal.scheduledPostId,
				y = e => e.posts.scheduledPosts[r.f.recurringPosts].editModal.subredditId,
				k = e => e.posts.scheduledPosts.api.pendingUpdate,
				j = e => e.posts.scheduledPosts.api.creationToken
		},
		"./src/reddit/selectors/userFlair.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return c
			})), n.d(t, "a", (function() {
				return d
			})), n.d(t, "d", (function() {
				return l
			})), n.d(t, "e", (function() {
				return u
			})), n.d(t, "b", (function() {
				return m
			}));
			var s = n("./src/lib/objectSelector/index.ts"),
				o = n("./src/reddit/models/Flair/index.ts"),
				r = n("./src/reddit/selectors/moderatorPermissions.ts"),
				i = n("./src/lib/initializeClient/installReducer.ts"),
				a = n("./src/reddit/reducers/features/userFlair/index.ts");
			Object(i.a)({
				features: {
					userFlair: a.a
				}
			});
			const c = (e, {
					subredditId: t
				}) => e.features.userFlair[t],
				d = (e, {
					subredditId: t
				}) => !e.features.userFlair[t] || e.features.userFlair[t].displaySettings.isEnabled,
				l = (e, {
					subredditId: t
				}) => e.features.userFlair[t] ? e.features.userFlair[t].displaySettings.position : o.b.Right,
				u = Object(s.a)((e, {
					subredditId: t
				}) => {
					const n = c(e, {
						subredditId: t
					});
					if (n) return {
						type: o.d.UserFlair,
						displaySettings: n.displaySettings,
						permissions: n.permissions
					}
				}),
				m = (e, {
					subredditId: t
				}) => {
					const n = d(e, {
							subredditId: t
						}),
						s = u(e, {
							subredditId: t
						}),
						o = c(e, {
							subredditId: t
						});
					if (!n || !s || !o) return !1;
					if (o.applied) return !0;
					const i = Object(r.f)(e, {
							subredditId: t
						}),
						{
							canUserChange: a
						} = s.permissions;
					return !!o.templateIds.find(e => {
						return !o.templates[e].modOnly || i
					}) && a
				}
		},
		"./src/reddit/singleton/EventSystem.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/config.ts"),
				o = n("./src/lib/fastdom/index.ts"),
				r = n("./src/reddit/actions/jsApi.ts");
			const i = "JSAPI customEvent.detail.name is deprecated. Please upgrade to <meta>",
				a = "jsapi.consumer",
				c = "/r/redesign/wiki/jsapi";
			var d = n("./src/reddit/constants/jsapiEvents.ts");
			const l = 100;
			const u = new class {
				constructor() {
					if (this.queue = [], this.active = !1, "undefined" == typeof document) return;
					let e;
					this.store = new Promise(t => e = t), this.attachStore = t => e(t);
					const t = document.querySelectorAll(`meta[name="${a}"]`);
					t.length && (t.forEach(e => {
						const t = e.content;
						this.store.then(e => e.dispatch(r.b(t)))
					}), this.store.then(() => this.fireEventsQueue())), document.addEventListener(d.b, e => this.onReadyEvent(e), !0)
				}
				onReadyEvent(e) {
					let t;
					if (this.active = !0, e.target && e.target instanceof HTMLMetaElement && e.target.name === a && (t = e.target.content), !t) try {
						e.detail && (t = e.detail.name, console.warn(i, `${s.a.redditUrl}${c}`, e))
					} catch (n) {
						return void console.error(i, `${s.a.redditUrl}${c}`, n)
					}
					this.store.then(e => {
						e.dispatch(r.b(t || "")), this.fireEventsQueue()
					})
				}
				publish(e, t, n) {
					const s = {
						name: e,
						props: t,
						element: n
					};
					this.queue.push(s), this.queue.length > l && this.queue.shift(), this.active && this.fireEvent(s)
				}
				fireEvent(e) {
					e.element.dispatchEvent(new CustomEvent(e.name, {
						detail: e.props
					}))
				}
				fireEventsQueue() {
					o.a.read(() => {
						for (let e = 0; e < this.queue.length; e++) {
							const t = this.queue[e];
							this.fireEvent(t)
						}
					})
				}
			};
			t.a = u
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/PostCreation.6e46f4f8de5ce257954a.js.map